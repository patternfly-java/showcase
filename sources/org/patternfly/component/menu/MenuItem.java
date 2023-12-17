/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.component.menu;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.form.Checkbox;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Aria;
import org.patternfly.core.IconPosition;
import org.patternfly.core.Logger;
import org.patternfly.core.SelectionMode;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithIconAndText;
import org.patternfly.core.WithText;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.PredefinedIcon;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.menu.MenuItemAction.favoriteMenuItemAction;
import static org.patternfly.component.menu.MenuItemType.checkbox;
import static org.patternfly.component.menu.MenuItemType.link;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.SelectionMode.multi;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.danger;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.disabled;
import static org.patternfly.style.Classes.externalIcon;
import static org.patternfly.style.Classes.favorite;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.select;
import static org.patternfly.style.PredefinedIcon.externalLinkAlt;

public class MenuItem extends MenuSubComponent<HTMLElement, MenuItem> implements
        Disabled<HTMLElement, MenuItem>,
        WithText<HTMLElement, MenuItem>,
        WithIcon<HTMLElement, MenuItem>,
        WithIconAndText<HTMLElement, MenuItem>,
        Attachable {

    // ------------------------------------------------------ factory

    /**
     * Create a new menu item with type {@link MenuItemType#action}.
     */
    public static MenuItem actionMenuItem(String id, String text) {
        return new MenuItem(id, text, MenuItemType.action);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem linkMenuItem(String id, String text, String href) {
        return new MenuItem(id, text, link);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem checkboxMenuItem(String id, String text) {
        return new MenuItem(id, text, checkbox);
    }

    /**
     * Create a new menu item with the specified type. Use this method, if you want full control over the text and type.
     */
    public static MenuItem menuItem(String id, MenuItemType type) {
        return new MenuItem(id, null, MenuItemType.action);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "";

    public final String id;
    final MenuItemType itemType;
    private final HTMLElement itemElement;
    private final HTMLElement mainElement;
    private final HTMLElement textElement;
    MenuItem sourceItem;
    MenuItem favoriteItem;
    MenuItemAction favoriteItemAction;
    private boolean initialSelection;
    private Checkbox checkboxComponent;
    private MenuItemAction itemAction;
    private HTMLElement iconContainer;
    private HTMLElement descriptionElement;
    private HTMLElement selectIcon;
    private ComponentHandler<MenuItem> handler;

    MenuItem(String id, String text, MenuItemType itemType) {
        super(SUB_COMPONENT_NAME, li().css(component(Classes.menu, list, item))
                .attr(role, "none")
                .element());
        this.id = id;
        this.itemType = itemType;

        HTMLContainerBuilder<? extends HTMLElement> itemBuilder;
        if (itemType == MenuItemType.action || itemType == link) {
            itemBuilder = itemType == MenuItemType.action ? button().attr(tabindex, 0) : a().attr(tabindex, -1);
            itemBuilder.add(mainElement = span().css(component(Classes.menu, item, main))
                    .add(textElement = span().css(component(Classes.menu, item, Classes.text))
                            .element())
                    .element());

        } else if (itemType == checkbox) {
            String checkboxId = Id.build(id, "check");
            itemBuilder = label()
                    .apply(l -> l.htmlFor = checkboxId);
            itemBuilder.add(mainElement = span().css(component(Classes.menu, item, main))
                    .add(span().css(component(Classes.menu, item, Classes.check))
                            .add(checkboxComponent = checkbox(checkboxId, checkboxId)))
                    .add(textElement = span().css(component(Classes.menu, item, Classes.text))
                            .element())
                    .element());

        } else {
            // create a pseudo-element, but don't add it
            itemBuilder = div()
                    .add(mainElement = div()
                            .add(textElement = div().element())
                            .element());
            Logger.unknown(ComponentType.Menu, element(), "Unknown menu item type " + itemType);
        }

        add(itemElement = itemBuilder.css(component(Classes.menu, item)).element());
        if (text != null) {
            textElement.textContent = text;
        }
        Attachable.register(this, this);
    }

    // constructor must only be used to clone an item as favorite item!
    MenuItem(Menu menu, MenuItem item, MenuItemType itemType) {
        super(SUB_COMPONENT_NAME, ((HTMLElement) item.element().cloneNode(true)));

        this.id = Id.build("fav", item.id);
        this.itemType = itemType;
        this.favoriteItem = null;
        this.initialSelection = item.initialSelection;
        this.itemElement = find(By.classname(component(Classes.menu, Classes.item)));
        this.mainElement = find(By.classname(component(Classes.menu, Classes.item, main)));
        this.textElement = find(By.classname(component(Classes.menu, Classes.item, Classes.text)));
        this.iconContainer = find(By.classname(component(Classes.menu, Classes.item, icon)));
        this.descriptionElement = find(By.classname(component(Classes.menu, Classes.item, Classes.description)));
        // checkbox must not be used for cloned favorite items!

        if (item.handler != null) {
            onClick(item.handler);
        }
        if (item.itemAction != null) {
            HTMLElement element = find(By.classname(component(Classes.menu, Classes.item, Classes.action)));
            if (element instanceof HTMLButtonElement) {
                this.itemAction = new MenuItemAction(menu, this, item.itemAction, ((HTMLButtonElement) element));
            }
        }

        this.sourceItem = item;
        item.favoriteItem = this;
        HTMLElement favoriteItemActionElement = find(
                By.classname(component(Classes.menu, Classes.item, Classes.action))
                        .and(By.classname(modifier(favorite))));
        if (favoriteItemActionElement != null) {
            favoriteItemActionElement.addEventListener(click.name, e -> menu.removeFavorite(this));
        }
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        if (itemAction != null) {
            // redo initial disabled call for item action
            if (element().classList.contains(modifier(disabled))) {
                itemAction.element().disabled = true;
            }
        }
        switch (menu.menuType) {
            case menu:
            case dropdown:
                itemElement.setAttribute(role, "menuitem");
                break;
            case select:
                itemElement.setAttribute(role, "option");
                break;
        }
        if (checkboxComponent != null) {
            checkboxComponent.inputElement().name(menu.menuName);
        }
        if (menu.selectionMode == single || menu.selectionMode == SelectionMode.click) {
            itemElement.addEventListener(click.name, e -> menu.select(this, true, true));
        } else if (menu.selectionMode == multi) {
            itemElement.addEventListener(click.name, e -> {
                if (itemType == checkbox) {
                    if (e.target == checkboxComponent.inputElement()) {
                        menu.select(this, isSelected(), true);
                    } else {
                        e.preventDefault();
                        menu.select(this, !isSelected(), true);
                    }
                } else {
                    menu.select(this, !isSelected(), true);
                }
            }, itemType == checkbox); // useCapture is true for checkbox!
            // see also: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture
        }
        if (initialSelection) {
            menu.select(this, true, false);
        }
    }

    // ------------------------------------------------------ add

    public MenuItem addAction(MenuItemAction itemAction) {
        return add(itemAction);
    }

    // override to assure internal wiring
    public MenuItem add(MenuItemAction itemAction) {
        this.itemAction = itemAction;
        this.itemAction.menuItem = this;
        add(itemAction.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public MenuItem danger() {
        return css(modifier(danger));
    }

    public MenuItem selected() {
        initialSelection = true;
        return this;
    }

    @Override
    public MenuItem disabled(boolean disabled) {
        switch (itemType) {
            case action:
                ((HTMLButtonElement) itemElement).disabled = disabled;
                break;
            case link:
                itemElement.setAttribute(Aria.disabled, disabled);
                break;
            case checkbox:
                checkboxComponent.disabled(disabled);
                break;
        }
        if (itemAction != null) {
            itemAction.element().disabled = disabled;
        }
        return Disabled.super.disabled(disabled);
    }

    @Override
    public MenuItem text(String text) {
        textElement.textContent = text;
        return this;
    }

    public MenuItem text(HTMLElement element) {
        removeChildrenFrom(textElement);
        textElement.appendChild(element);
        return this;
    }

    public MenuItem href(String href) {
        if (itemType == link) {
            ((HTMLAnchorElement) itemElement).href = href;
        } else {
            Logger.unsupported(ComponentType.Menu, element(),
                    "Ignore href on menu item '" + id + "' with type '" + itemType.name() + "'");
        }
        return this;
    }

    public MenuItem external() {
        if (itemType == link) {
            ((HTMLAnchorElement) itemElement).target = "_blank";
            mainElement.appendChild(span().css(component(Classes.menu, item, externalIcon))
                    .add(inlineIcon(externalLinkAlt))
                    .element());
            mainElement.appendChild(span().css(screenReader)
                    .textContent("(opens a new window)")
                    .element());
        } else {
            Logger.unsupported(ComponentType.Menu, element(),
                    "Ignore external flag on menu item '" + id + "' with type '" + itemType.name() + "'");
        }
        return this;
    }

    public MenuItem description(String description) {
        if (descriptionElement != null) {
            descriptionElement.textContent = description;
        } else {
            itemElement.appendChild(descriptionElement = span().css(component(Classes.menu, item, Classes.description))
                    .textContent(description)
                    .element());
        }
        return this;
    }

    public MenuItem description(HTMLElement element) {
        if (descriptionElement != null) {
            removeChildrenFrom(descriptionElement);
            descriptionElement.appendChild(element);
        } else {
            itemElement.appendChild(descriptionElement = span().css(component(Classes.menu, item, description))
                    .add(element)
                    .element());
        }
        return this;
    }

    @Override
    public MenuItem icon(InlineIcon icon) {
        if (iconContainer != null) {
            removeChildrenFrom(iconContainer);
            iconContainer.appendChild(icon.element());
        } else {
            insertFirst(mainElement, iconContainer = span().css(component(Classes.menu, item, Classes.icon))
                    .add(icon)
                    .element());
        }
        return this;
    }

    @Override
    public MenuItem removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    @Override
    public MenuItem iconAndText(InlineIcon icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    @Override
    public MenuItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public MenuItem onClick(ComponentHandler<MenuItem> handler) {
        this.handler = handler;
        itemElement.addEventListener(click.name, e -> handler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ internal

    MenuItemAction addFavoriteItemAction() {
        String actionId = Id.build(id, "mark-as-favorite");
        favoriteItemAction = favoriteMenuItemAction(actionId);
        element().appendChild(favoriteItemAction.element());
        return favoriteItemAction;
    }

    void makeCurrent(boolean current) {
        itemElement.setAttribute(Aria.current, current);
    }

    void markSelected(boolean selected) {
        if (itemType == checkbox) {
            checkboxComponent.value(selected);
        } else {
            if (selectIcon == null) {
                selectIcon = span().css(component(Classes.menu, item, select, icon))
                        .add(inlineIcon(PredefinedIcon.check))
                        .element();
            }
            itemElement.setAttribute(Aria.selected, selected);
            if (selected) {
                itemElement.classList.add(modifier(Classes.selected));
                mainElement.appendChild(selectIcon);
            } else {
                itemElement.classList.remove(modifier(Classes.selected));
                failSafeRemoveFromParent(selectIcon);
            }
        }
    }

    boolean isSelected() {
        if (itemType == checkbox) {
            return checkboxComponent.value();
        } else {
            return Boolean.parseBoolean(itemElement.getAttribute(Aria.selected));
        }
    }
}

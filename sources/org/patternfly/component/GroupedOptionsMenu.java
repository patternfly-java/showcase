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
package org.patternfly.component;

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers;
import org.patternfly.handler.SelectHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Dataset.multiOptionsMenuCheck;
import static org.patternfly.core.Dataset.multiOptionsMenuItem;
import static org.patternfly.layout.Classes.alignRight;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.hasPopup;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.listbox;
import static org.patternfly.layout.Classes.menuitem;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.optionsMenu;
import static org.patternfly.layout.Classes.separator;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Classes.top;
import static org.patternfly.layout.PredefinedIcon.caretDown;
import static org.patternfly.layout.PredefinedIcon.check;

/**
 * PatternFly options menu (grouped, single selection).
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/optionsmenu">https://www.patternfly.org/v4/documentation/core/components/optionsmenu</a>
 */
@Deprecated
public class GroupedOptionsMenu extends BaseComponent<HTMLDivElement, GroupedOptionsMenu>
        implements Modifiers.Disabled<HTMLDivElement, GroupedOptionsMenu> {

    // ------------------------------------------------------ factory

    public static GroupedOptionsMenu text(String text) {
        return new GroupedOptionsMenu(text, null, false);
    }

    public static GroupedOptionsMenu icon(Icon icon) {
        return new GroupedOptionsMenu(null, icon, false);
    }

    public static GroupedOptionsMenu plain(String text) {
        return new GroupedOptionsMenu(text, null, true);
    }

    // ------------------------------------------------------ options menu instance

    private final CollapseExpand ceh;
    private final HTMLButtonElement button;
    private final HTMLElement plain;
    private final HTMLElement menu;
    private boolean collapseOnSelect;

    protected GroupedOptionsMenu(String text, Icon icon, boolean plain) {
        super(div().css(component(optionsMenu)).element(), "OptionsMenu");
        this.ceh = new CollapseExpand();
        this.collapseOnSelect = false;

        String buttonId = Id.unique(optionsMenu, Classes.button);
        HTMLContainerBuilder<HTMLButtonElement> buttonBuilder = button().id(buttonId).aria("expanded", false)
                .aria(hasPopup, listbox).on(click, e -> ceh.expand(element(), buttonElement(), menuElement()));

        HTMLElement trigger;
        if (icon != null) {
            this.plain = null;
            this.button = buttonBuilder.css(component(optionsMenu, toggle), modifier(Classes.plain))
                    .add(icon.aria("hidden", true)).element();
            trigger = button;

        } else { // text != null
            if (plain) {
                this.plain = div().css(component(optionsMenu, toggle), modifier(Classes.plain), modifier(Classes.text))
                        .add(span().css(component(optionsMenu, toggle, Classes.text)).textContent(text))
                        .add(button = buttonBuilder.css(component(optionsMenu, toggle, Classes.button))
                                .aria("label", text)
                                .add(i().css(caretDown.className).aria("hidden", true))
                                .element())
                        .element();
                trigger = this.plain;

            } else {
                this.plain = null;
                this.button = buttonBuilder.css(component(optionsMenu, toggle)).aria("label", text)
                        .add(span().css(component(optionsMenu, toggle, Classes.text)).textContent(text))
                        .add(i().css(caretDown.className, component(optionsMenu, toggle, "icon")).aria("hidden", true))
                        .element();
                trigger = button;
            }
        }

        add(trigger);
        add(menu = div().css(component(optionsMenu, Classes.menu)).hidden(true).aria(labelledBy, buttonId)
                .attr("role", Classes.menu).element());
    }

    @Override
    public GroupedOptionsMenu that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ api

    public <T> GroupedOptionsMenu add(Group<T> group) {

        if (menu.childNodes.length != 0) {
            menu.appendChild(li().css(component(optionsMenu, separator)).attr("role", separator).element());
        }
        menu.appendChild(li().aria("label", group.text).add(group).element());

        for (T item : group.items) {
            HTMLContainerBuilder<HTMLButtonElement> button = button().css(
                    component(optionsMenu, Classes.menu, Classes.item))
                    .attr("tabindex", -1).data(multiOptionsMenuItem, group.itemDisplay.itemId(item)).on(click, e -> {
                        if (collapseOnSelect) {
                            ceh.collapse(element(), buttonElement(), menuElement());
                        }
                        group.select(item);
                    });
            group.itemDisplay.display.accept(button, item);
            HTMLElement icon;
            button.add(icon = i().css(check.className, component(optionsMenu, Classes.menu, Classes.item, "icon"))
                    .aria("hidden", true).data(multiOptionsMenuCheck, group.itemDisplay.itemId(item)).element());
            setVisible(icon, false);

            group.element().appendChild(li().attr("role", menuitem).add(button).element());
        }
        return this;
    }

    // ------------------------------------------------------ builder

    public GroupedOptionsMenu up() {
        element().classList.add(modifier(top));
        return this;
    }

    public GroupedOptionsMenu right() {
        menu.classList.add(modifier(alignRight));
        return this;
    }

    public GroupedOptionsMenu collapseOnSelect() {
        this.collapseOnSelect = true;
        return this;
    }

    @Override
    public GroupedOptionsMenu disabled(boolean disabled) {
        button.disabled = disabled;
        if (plain != null) {
            if (disabled) {
                plain.classList.add(modifier(Classes.disabled));
            } else {
                plain.classList.remove(modifier(Classes.disabled));
            }
        }
        return this;
    }

    // ------------------------------------------------------ inner classes

    @Deprecated
    public static class Group<T> extends BaseComponent<HTMLElement, Group<T>>
            implements HasValue<T> {

        private final String text;
        private final List<T> items;
        private final OldItemDisplay<HTMLButtonElement, T> itemDisplay;
        private T value;
        private SelectHandler<T> onSelect;

        public Group() {
            this(null);
        }

        public Group(String text) {
            super(section().element(), "GroupedOptionsMenuGroup");
            this.text = text;
            this.items = new ArrayList<>();
            this.itemDisplay = new OldItemDisplay<>();
        }

        @Override
        public Group<T> that() {
            return this;
        }

        public Group<T> add(Iterable<T> items) {
            for (T item : items) {
                add(item);
            }
            return this;
        }

        public Group<T> add(T[] items) {
            for (T item : items) {
                add(item);
            }
            return this;
        }

        public Group<T> add(T item) {
            items.add(item);
            return this;
        }

        @Override
        public T value() {
            return value;
        }

        public Group<T> identifier(Function<T, String> identifier) {
            this.itemDisplay.identifier = identifier;
            return this;
        }

        public Group<T> asString(Function<T, String> asString) {
            itemDisplay.asString = asString;
            return this;
        }

        public Group<T> display(BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> display) {
            this.itemDisplay.display = display;
            return this;
        }

        public Group<T> onSelect(SelectHandler<T> onSelect) {
            this.onSelect = onSelect;
            return this;
        }

        public Group<T> select(T item) {
            return select(item, true);
        }

        public Group<T> select(T item, boolean fireEvent) {
            value = item;
            String itemId = itemDisplay.itemId(item);
            for (HTMLElement e : Elements.findAll(element(),
                    By.classname(component(optionsMenu, Classes.menu, Classes.item, "icon")))) {
                setVisible(e, itemId.equals(e.dataset.get(multiOptionsMenuCheck)));
            }

            if (fireEvent && onSelect != null) {
                onSelect.onSelect(value);
            }
            return this;
        }

        public Group<T> clearSelection() {
            value = null;
            for (HTMLElement e : Elements.findAll(element(), By.classname(component(optionsMenu, Classes.menu, item,
                    "icon")))) {
                setVisible(e, false);
            }
            return this;
        }
    }
}

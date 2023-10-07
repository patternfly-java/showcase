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
package org.patternfly.showcase.client.component;

import org.patternfly.component.Button;
import org.patternfly.core.Aria;
import org.patternfly.showcase.client.LoremIpsum;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuItem.actionMenuItem;
import static org.patternfly.component.menu.MenuItem.checkboxMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItemAction.menuItemAction;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.core.SelectionMode.multi;
import static org.patternfly.core.SelectionMode.none;
import static org.patternfly.layout.PredefinedIcon.bars;
import static org.patternfly.layout.PredefinedIcon.bell;
import static org.patternfly.layout.PredefinedIcon.fas;
import static org.patternfly.showcase.client.Code.code;

public class MenuComponent extends ComponentPage {

    public MenuComponent() {
        super("Menu", p().textContent(
                "A menu is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu is most often paired with a menu toggle as its trigger, but can also be used inline or can be attached to other interactable elements to toggle it open and close.")
                .element());

        addSnippet(new Snippet("basic-menu", "Basic menu", code.get("basic-menu"), () -> div()
                .add(menu(none)
                        .onSingleSelect(item -> console.log("Item " + item.id + " selected"))
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(actionMenuItem("item-0", "Action")
                                                .onClick((e, actionItem) -> console.log(
                                                        "Clicked on action item " + actionItem.id)))
                                        .addItem(linkMenuItem("item-1", "Link", "#home")
                                                .onClick((e, item) -> e.preventDefault()))
                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                .disabled())
                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                .disabled()))))
                .element()));

        addSnippet(new Snippet("danger-menu", "Danger menu item", "No code yet", () -> div()
                .add(menu(none)
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(actionMenuItem("item-0", "Action 1"))
                                        .addItem(actionMenuItem("item-1", "Action 2"))
                                        .addDivider()
                                        .addItem(actionMenuItem("item-2", "Delete")
                                                .danger()))))
                .element()));

        addSnippet(new Snippet("with-icons", "With icons", "No code yet", () -> div()
                .add(menu(none)
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(actionMenuItem("item-0", "Item 1")
                                                .icon(fas("code-branch")))
                                        .addItem(actionMenuItem("item-1", "Container image")
                                                .icon(fas("layer-group")))
                                        .addItem(actionMenuItem("item-2", "From Dockerfile")
                                                .icon(fas("cube"))))))
                .element()));

        addSnippet(new Snippet("with-actions", "With action", "No code yet", () -> div()
                .add(menu(multi)
                        .onAction(itemAction -> console.log(
                                "Action " + itemAction.id + " on item " + itemAction.menuItem.id + " clicked"))
                        .addContent(menuContent()
                                .addGroup(menuGroup("Actions")
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Item 1")
                                                        .description("This is a description")
                                                        .addAction(menuItemAction("action-0", fas("code-branch"))
                                                                .aria(Aria.label, "Code")
                                                                .onClick((e, itemAction) -> console.log(
                                                                        "Code action clicked"))))
                                                .addItem(actionMenuItem("item-1", "Item 2")
                                                        .description("This is a description")
                                                        .disabled()
                                                        .addAction(menuItemAction("action-1", bell)))
                                                .addItem(actionMenuItem("item-2", "Item 3")
                                                        .addAction(menuItemAction("action-2", fas("clipboard"))))
                                                .addItem(actionMenuItem("item-3", "Item 4")
                                                        .description("This is a description")
                                                        .addAction(menuItemAction("action-3", bars)))))))
                .element()));

        addSnippet(new Snippet("with-links", "With links", "No code yet", () -> div()
                .add(menu(none)
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(linkMenuItem("item-0", "Link 1", "#home")
                                                .external())
                                        .addItem(linkMenuItem("item-1", "Link 2", "#home")
                                                .external())
                                        .addItem(linkMenuItem("item-2", "Link 3", "#home")))))
                .element()));

        addSnippet(new Snippet("with-descriptions", "With descriptions", "No code yet", () -> div()
                .add(menu(none)
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(actionMenuItem("item-0", "Action 1")
                                                .icon(fas("code-branch"))
                                                .description("Description"))
                                        .addItem(actionMenuItem("item-1", "Action 2 disabled")
                                                .icon(fas("code-branch"))
                                                .description("Description")
                                                .disabled())
                                        .addItem(actionMenuItem("item-2", "Action 3")
                                                .icon(fas("code-branch"))
                                                .description(LoremIpsum.words(50))))))
                .element()));

        addSnippet(new Snippet("item-checkbox", "Item checkbox", "No code yet", () -> div()
                .add(menu(multi)
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(checkboxMenuItem("item-0", "Checkbox 1"))
                                        .addItem(checkboxMenuItem("item-1", "Checkbox 2"))
                                        .addItem(checkboxMenuItem("item-2", "Checkbox 3")
                                                .disabled()))))
                .element()));

        addSnippet(new Snippet("menu-footer", "Menu footer", "No code yet", () -> div()
                .add(menu(none)
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(actionMenuItem("item-0", "Action"))
                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                .disabled())
                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                .disabled())))
                        .addFooter(menuFooter()
                                .add(Button.inline("Action"))))
                .element()));

        addSnippet(new Snippet("separated-items", "Separated items", "No code yet", () -> div()
                .add(menu(none)
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(actionMenuItem("item-0", "Action 1"))
                                        .addItem(actionMenuItem("item-1", "Action 2"))
                                        .addDivider()
                                        .addItem(actionMenuItem("item-2", "Action 3")))))
                .element()));

        addSnippet(new Snippet("titled-groups", "Titled groups of items", "No code yet", () -> div()
                .add(menu(none)
                        .addContent(menuContent()
                                .addGroup(menuGroup()
                                        .addList(menuList()
                                                .addItem(linkMenuItem("item-0", "Link not in group", "#"))))
                                .addDivider()
                                .addGroup(menuGroup("Group 1")
                                        .addList(menuList()
                                                .add(linkMenuItem("item-10", "Link 1", "#"))
                                                .add(linkMenuItem("item-11", "Link 2", "#"))))
                                .addDivider()
                                .addGroup(menuGroup("Group 2")
                                        .addList(menuList()
                                                .add(linkMenuItem("item-20", "Link 1", "#"))
                                                .add(linkMenuItem("item-21", "Link 2", "#"))))))
                .element()));

        addSnippet(new Snippet("with-favorites", "With favorites", "No code yet", () -> div()
                .add(menu(none)
                        .onSingleSelect(item -> console.log("Item " + item.id + " selected"))
                        .onAction(itemAction -> console.log(
                                "Action " + itemAction.id + " on item " + itemAction.menuItem.id + " clicked"))
                        .favorites()
                        .addContent(menuContent()
                                .addGroup(menuGroup("All actions")
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Item 1")
                                                        .description("Description 1")
                                                        .addAction(menuItemAction("action-0", bars)))
                                                .addItem(actionMenuItem("item-1", "Item 2")
                                                        .onClick((e, item) -> console.log(
                                                                "# Item " + item.id + " clicked"))
                                                        .description("Description 2")
                                                        .addAction(menuItemAction("action-1", fas("clipboard"))
                                                                .onClick((e, itemAction) -> console.log(
                                                                        "# Action " + itemAction.id + " on item "
                                                                                + itemAction.menuItem.id + " clicked"))))
                                                .addItem(actionMenuItem("item-2", "Item 3")
                                                        .description("Description 3")
                                                        .addAction(menuItemAction("action-2", bell)))))))
                .element()));
    }
}

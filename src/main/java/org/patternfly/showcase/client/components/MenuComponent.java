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
package org.patternfly.showcase.client.components;

import elemental2.dom.Event;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.divider.MenuItemType.action;
import static org.patternfly.components.divider.MenuItemType.link;
import static org.patternfly.components.menu.Menu.menu;
import static org.patternfly.components.menu.MenuContent.menuContent;
import static org.patternfly.components.menu.MenuItem.menuItem;
import static org.patternfly.components.menu.MenuList.menuList;
import static org.patternfly.core.SelectionMode.none;
import static org.patternfly.showcase.client.Code.code;

public class MenuComponent extends ComponentPage {

    public MenuComponent() {
        super("Menu", p().textContent(
                "A menu is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu is most often paired with a menu toggle as its trigger, but can also be used inline or can be attached to other interactable elements to toggle it open and close.")
                .element());

        addSnippet(new Snippet("basic-menu", "Basic Menu", code.get("basic-menu"), () -> div()
                .add(menu(none)
                        .onSingleSelect(item -> console.log("Selected item '" + item.id + "'"))
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(menuItem("item-0", action)
                                                .text("Action")
                                                .onClick(e -> console.log("Clicked on action item")))
                                        .addItem(menuItem("item-1", link)
                                                .text("Link")
                                                .href("#home")
                                                .onClick(Event::preventDefault))
                                        .addItem(menuItem("item-2", action)
                                                .text("Disabled action")
                                                .disable())
                                        .addItem(menuItem("item-3", link)
                                                .text("Disabled link")
                                                .disable()))))
                .element()));
    }
}

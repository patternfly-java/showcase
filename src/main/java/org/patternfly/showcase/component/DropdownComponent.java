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
package org.patternfly.showcase.component;

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.avatar.Avatar.avatar;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.actionMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.MenuToggleAction.menuToggleAction;
import static org.patternfly.component.menu.MenuToggleCheckbox.menuToggleCheckbox;
import static org.patternfly.component.menu.MenuToggleType.split;
import static org.patternfly.layout.PredefinedIcon.cog;
import static org.patternfly.layout.PredefinedIcon.ellipsisV;
import static org.patternfly.showcase.Assets.avatarLight;
import static org.patternfly.showcase.Code.code;

public class DropdownComponent extends SnippetPage {

    public DropdownComponent() {
        super("Dropdown",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/menu/Dropdown.html",
                "https://www.patternfly.org/components/menus/dropdown/design-guidelines/",
                p().textContent(
                        "A dropdown presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See select component guidelines for more information about making one or more selections from a list of items in a value list.")
                        .element());

        addSnippet(new Snippet("dropdown-basic", "Basic dropdown",
                code.get("dropdown-basic"), () ->
                // @code-start:dropdown-basic
                div()
                        .add(dropdown()
                                .addToggle(menuToggle("Dropdown"))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .element()
        // @code-end:dropdown-basic
        ));

        addSnippet(new Snippet("dropdown-kebab", "With kebab toggle",
                code.get("dropdown-kebab"), () ->
                // @code-start:dropdown-kebab
                div()
                        .add(dropdown()
                                .addToggle(menuToggle(ellipsisV, "kebab dropdown toggle"))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .element()
        // @code-end:dropdown-kebab
        ));

        addSnippet(new Snippet("dropdown-badge", "With a badge",
                code.get("dropdown-badge"), () ->
                // @code-start:dropdown-badge
                div()
                        .add(dropdown()
                                .addToggle(menuToggle("Count")
                                        .addBadge(badge(4).unread()))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .element()
        // @code-end:dropdown-badge
        ));

        addSnippet(new Snippet("dropdown-icon", "With an icon",
                code.get("dropdown-icon"), () ->
                // @code-start:dropdown-icon
                div()
                        .add(dropdown()
                                .addToggle(menuToggle("Icon")
                                        .icon(cog))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .element()
        // @code-end:dropdown-icon
        ));

        addSnippet(new Snippet("dropdown-avatar", "With an avatar",
                code.get("dropdown-avatar"), () ->
                // @code-start:dropdown-avatar
                div()
                        .add(dropdown()
                                .addToggle(menuToggle("John Doe")
                                        .addAvatar(avatar(avatarLight, "Avatar")))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .element()
        // @code-end:dropdown-avatar
        ));

        addSnippet(new Snippet("dropdown-split-check", "With a checkbox",
                code.get("dropdown-split-check"), () ->
                // @code-start:dropdown-split-check
                div()
                        .add(dropdown()
                                .addToggle(menuToggle(split)
                                        .addCheckbox(menuToggleCheckbox()))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .add(br())
                        .add(br())
                        .add(dropdown()
                                .addToggle(menuToggle(split)
                                        .addCheckbox(menuToggleCheckbox())
                                        .text("10 selected"))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .element()
        // @code-end:dropdown-split-check
        ));

        addSnippet(new Snippet("dropdown-split-action", "With an action",
                code.get("dropdown-split-action"), () ->
                // @code-start:dropdown-split-action
                div()
                        .add(dropdown()
                                .addToggle(menuToggle(split)
                                        .addAction(menuToggleAction("Action")))
                                .addMenu(menu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                        .addItem(actionMenuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(actionMenuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#home"))))))
                        .element()
        // @code-end:dropdown-split-action
        ));
    }
}

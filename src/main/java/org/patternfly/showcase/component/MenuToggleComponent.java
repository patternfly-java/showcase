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

import org.patternfly.component.menu.MenuToggle;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.avatar.Avatar.avatar;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.MenuToggleAction.menuToggleAction;
import static org.patternfly.component.menu.MenuToggleCheckbox.menuToggleCheckbox;
import static org.patternfly.component.menu.MenuToggleType.plainText;
import static org.patternfly.component.menu.MenuToggleType.split;
import static org.patternfly.showcase.Assets.avatarLight;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.PredefinedIcon.cog;
import static org.patternfly.style.PredefinedIcon.ellipsisV;

public class MenuToggleComponent extends SnippetPage {

    public MenuToggleComponent() {
        super(MenuToggle.class, "Menu toggle",
                "https://www.patternfly.org/components/menus/menu-toggle/html/",
                p().textContent(
                        "The menu toggle component pairs with the menu OR the panel component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.")
                        .element());

        addSnippet(new Snippet("menu-toggle-basic", "Basic toggle",
                code.get("menu-toggle-basic"), () ->
                // @code-start:menu-toggle-basic
                div()
                        .add(menuToggle("Toggle"))
                        .add(" ")
                        .add(menuToggle("Toggle").primary())
                        .add(" ")
                        .add(menuToggle("Toggle").secondary())
                        .add(" ")
                        .add(menuToggle("Toggle").disabled())
                        .element()
        // @code-end:menu-toggle-basic
        ));

        addSnippet(new Snippet("menu-toggle-badge", "With a badge",
                code.get("menu-toggle-badge"), () ->
                // @code-start:menu-toggle-badge
                div()
                        .add(menuToggle("Count")
                                .addBadge(badge(4).unread()))
                        .add(" ")
                        .add(menuToggle("Count").primary()
                                .addBadge(badge(4).unread()))
                        .add(" ")
                        .add(menuToggle("Count").secondary()
                                .addBadge(badge(4).unread()))
                        .add(" ")
                        .add(menuToggle("Count").disabled()
                                .addBadge(badge(4).unread()))
                        .element()
        // @code-end:menu-toggle-badge
        ));

        addSnippet(new Snippet("menu-toggle-icons", "With icons",
                code.get("menu-toggle-icons"), () ->
                // @code-start:menu-toggle-icons
                div()
                        .add(menuToggle()
                                .icon(cog)
                                .text("Icon"))
                        .add(" ")
                        .add(menuToggle().primary()
                                .icon(cog)
                                .text("Icon"))
                        .add(" ")
                        .add(menuToggle().secondary()
                                .icon(cog)
                                .text("Icon"))
                        .add(" ")
                        .add(menuToggle().disabled()
                                .iconAndText(cog, "Icon")) // same as above
                        .element()
        // @code-end:menu-toggle-icons
        ));

        addSnippet(new Snippet("menu-toggle-avatar", "With avatar",
                code.get("menu-toggle-avatar"), () ->
                // @code-start:menu-toggle-avatar
                div()
                        .add(menuToggle()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .add(" ")
                        .add(menuToggle().primary()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .add(" ")
                        .add(menuToggle().secondary()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .add(" ")
                        .add(menuToggle().disabled()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .element()
        // @code-end:menu-toggle-avatar
        ));

        addSnippet(new Snippet("menu-toggle-plain-icon", "Plain toggle with icon",
                code.get("menu-toggle-plain-icon"), () ->
                // @code-start:menu-toggle-plain-icon
                div()
                        .add(menuToggle(ellipsisV, "plain kebab"))
                        .add(" ")
                        .add(menuToggle(ellipsisV, "disabled kebab")
                                .disabled())
                        .element()
        // @code-end:menu-toggle-plain-icon
        ));

        addSnippet(new Snippet("menu-toggle-plain-text", "Plain toggle with text",
                code.get("menu-toggle-plain-text"), () ->
                // @code-start:menu-toggle-plain-text
                div()
                        .add(menuToggle(plainText).text("Text"))
                        .add(" ")
                        .add(menuToggle(plainText).text("Disabled")
                                .disabled())
                        .element()
        // @code-end:menu-toggle-plain-text
        ));

        addSnippet(new Snippet("menu-toggle-split-check", "Split button toggle with checkbox",
                code.get("menu-toggle-split-check"), () ->
                // @code-start:menu-toggle-split-check
                div()
                        .add(menuToggle(split)
                                .addCheckbox(menuToggleCheckbox()
                                        .ariaLabel("Select all")))
                        .add(" ")
                        .add(menuToggle(split).primary()
                                .addCheckbox(menuToggleCheckbox()
                                        .ariaLabel("Select all")))
                        .add(" ")
                        .add(menuToggle(split).secondary()
                                .addCheckbox(menuToggleCheckbox()
                                        .ariaLabel("Select all")))
                        .add(" ")
                        .add(menuToggle(split).disabled()
                                .addCheckbox(menuToggleCheckbox()
                                        .ariaLabel("Select all")))
                        .element()
        // @code-end:menu-toggle-split-check
        ));

        addSnippet(new Snippet("menu-toggle-split-label", "Split button toggle with text label",
                code.get("menu-toggle-split-label"), () ->
                // @code-start:menu-toggle-split-label
                div()
                        .add(menuToggle(split)
                                .addCheckbox(menuToggleCheckbox("10 selected")
                                        .ariaLabel("Select all")))
                        .add(" ")
                        .add(menuToggle(split).primary()
                                .addCheckbox(menuToggleCheckbox()
                                        .text("10 selected")
                                        .ariaLabel("Select all")))
                        .add(" ")
                        .add(menuToggle(split).secondary()
                                .addCheckbox(menuToggleCheckbox("10 selected")
                                        .ariaLabel("Select all")))
                        .add(" ")
                        .add(menuToggle(split).disabled()
                                .addCheckbox(menuToggleCheckbox("10 selected")
                                        .ariaLabel("Select all")))
                        .element()
        // @code-end:menu-toggle-split-label
        ));

        addSnippet(new Snippet("menu-toggle-split-action", "Split button toggle with action",
                code.get("menu-toggle-split-action"), () ->
                // @code-start:menu-toggle-split-action
                div()
                        .add(menuToggle(split)
                                .addAction(menuToggleAction("Action")))
                        .add(" ")
                        .add(menuToggle(split).primary()
                                .addAction(menuToggleAction("Action")))
                        .add(" ")
                        .add(menuToggle(split).secondary()
                                .addAction(menuToggleAction("Action")))
                        .add(" ")
                        .add(menuToggle(split).disabled()
                                .addAction(menuToggleAction("Action")))
                        .element()
        // @code-end:menu-toggle-split-action
        ));
    }
}

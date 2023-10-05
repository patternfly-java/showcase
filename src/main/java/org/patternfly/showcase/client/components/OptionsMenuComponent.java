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

import org.patternfly.components.MultiOptionsMenu;
import org.patternfly.components.MultiOptionsMenu.Group;
import org.patternfly.components.SingleOptionsMenu;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.layout.Icons.fas;

public class OptionsMenuComponent extends ComponentPage {

    public OptionsMenuComponent() {
        super("Options menu",
                p().textContent("An options menu is similar to a dropdown, but provides a way to select among a set "
                        + "of optional settings rather than trigger an action.").element());

        addSnippet(new Snippet("single", "Options menu - single", "Resources.get().optionsMenuSingle().getText()",
                () -> div()
                        .add(SingleOptionsMenu.<String> text("Options menu")
                                .add(new String[] { "Option 1", "Option 2", "Option 3", }).select("Option 2"))
                        .add(" ")
                        .add(SingleOptionsMenu.<String> text("Options menu").disabled()
                                .add(new String[] { "Option 1", "Option 2", "Option 3", }))
                        .element()));

        addSnippet(new Snippet("multiple", "Options menu - multiple", "Resources.get().optionsMenuMultiple().getText()",
                () -> div().add(MultiOptionsMenu.icon(icon(fas("sort-amount-down")))
                        .add(new Group<String>("Sort by").add(new String[] { "Name", "Date", "Size" }))
                        .add(new Group<String>("Sort direction")
                                .add(new String[] { "Ascending", "Descending" })))
                        .element()));

        addSnippet(new Snippet("plain", "Options menu - plain", "Resources.get().optionsMenuPlain().getText()",
                () -> div()
                        .add(SingleOptionsMenu.<String> icon(icon(fas("sort-amount-down")))
                                .add(new String[] { "Option 1", "Option 2", "Option 3", }).select("Option 2"))
                        .add(" ")
                        .add(SingleOptionsMenu.<String> icon(icon(fas("sort-amount-down"))).disabled()
                                .add(new String[] { "Option 1", "Option 2", "Option 3", }))
                        .add(SingleOptionsMenu.<String> plain("Options menu")
                                .add(new String[] { "Option 1", "Option 2", "Option 3", }).select("Option 2"))
                        .add(" ")
                        .add(SingleOptionsMenu
                                .<String> plain("Options menu").disabled()
                                .add(new String[] { "Option 1", "Option 2", "Option 3", }))
                        .element()));

        addSnippet(new Snippet("up", "Options menu - up", "Resources.get().optionsMenuUp().getText()",
                () -> div()
                        .add(SingleOptionsMenu
                                .<String> text("Options menu").up()
                                .add(new String[] { "Option 1", "Option 2", "Option 3", }).select("Option 2"))
                        .element()));

        addSnippet(new Snippet("right", "Options menu - right", "Resources.get().optionsMenuRight().getText()",
                () -> div().add(SingleOptionsMenu.<String> text("Options menu").right()
                        .add(new String[] { "Option 1", "Another option", "Last option", }).select("Option 2"))
                        .element()));
    }
}

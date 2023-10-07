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

import org.patternfly.component.Dropdown;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.layout.PredefinedIcon.fas;

public class DropdownComponent extends ComponentPage {

    public DropdownComponent() {
        super("Dropdown",
                p().textContent("Use a dropdown when you want to present a list of actions in a limited space.")
                        .element());

        addSnippet(new Snippet("simple", "Simple dropdown", "Resources.get().dropdownSimple().getText()", () -> {
            Dropdown<String> dropdown = Dropdown.<String> text("Dropdown").add("Item 1").add("Item 2").add("Disabled")
                    .addSeparator().add("Separated Item");
            dropdown.disable("Disabled");
            return div().add(dropdown).add(" ").add(Dropdown.<String> text("Dropdown").disabled()).element();
        }));
        /*
         * new Snippet("Dropdown with groups", "Resources.get().dropdownGroups().getText()", () -> { Dropdown<String> dropdown =
         * Dropdown.<String>text("Dropdown") .add("Item 1") .add("Item 2") .add(Dropdown.<String>group("Group 1")
         * .add("Group 1 item 1") .add("Group 1 item 2")) .add(Dropdown.<String>group("Group 2") .add("Group 2 item 1")
         * .add("Group 2 item 2")) // this item is added to the unnamed group above! .add("Item 3");
         * dropdown.getGroup("Group 2").disable("Group 2 item 1"); return div() .add(dropdown) .element(); }),
         */

        addSnippet(new Snippet("split", "Split button", "Resources.get().dropdownSplit().getText()", () -> {
            Dropdown<String> noText = Dropdown.<String> splitCheckbox().add("Item 1").add("Item 2")
                    .add("Disabled").addSeparator().add("Separated Item");
            noText.disable("Disabled");
            Dropdown<String> withText = Dropdown.<String> splitCheckbox("Dropdown").add("Item 1").add("Item 2")
                    .add("Disabled").addSeparator().add("Separated Item");
            withText.disable("Disabled");
            return div().add(noText).add(" ").add(Dropdown.<String> splitCheckbox().disabled()).add(" ")
                    .add(withText).add(" ").add(Dropdown.<String> splitCheckbox("Dropdown").disabled())
                    .element();
        }));

        addSnippet(new Snippet("types", "Dropdown typed", "Resources.get().dropdownTyped().getText()",
                () -> div().add(Dropdown
                        .<Color> text("Dropdown")
                        .display((html, color) -> html.style("background-color:" + color.bg + ";color:" + color.fg)
                                .textContent(color.name()))
                        .add(Color.values())).element()));

        addSnippet(new Snippet("kebab", "Dropdown with kebab", "Resources.get().dropdownKebab().getText()", () -> {
            Dropdown<String> kebab = Dropdown.<String> kebab().add("Item 1").add("Item 2").add("Disabled")
                    .addSeparator().add("Separated Item");
            kebab.disable("Disabled");
            return div().add(kebab).add(" ").add(Dropdown.<String> kebab().disabled()).element();
        }));

        addSnippet(new Snippet("icons", "Dropdown (icon only)", "Resources.get().dropdownIcon().getText()", () -> {
            Dropdown<String> icon = Dropdown.<String> icon(icon(fas("th"))).add("Item 1").add("Item 2")
                    .add("Disabled").addSeparator().add("Separated Item");
            icon.disable("Disabled");
            return div().add(icon).add(" ").add(Dropdown.<String> icon(icon(fas("th"))).disabled()).element();
        }));

        addSnippet(new Snippet("primary", "Dropdown (primary toggle)", "Resources.get().dropdownPrimary().getText()",
                () -> {
                    Dropdown<String> primary = Dropdown.<String> text("Dropdown").primary().add("Item 1").add("Item 2")
                            .add("Disabled").addSeparator().add("Separated Item");
                    primary.disable("Disabled");
                    return div().add(primary).element();
                }));

        addSnippet(
                new Snippet("right", "Dropdown (position right)", "Resources.get().dropdownRight().getText()", () -> {
                    Dropdown<String> right = Dropdown.<String> text("Dropdown").right().add("Item 1").add("Item 2")
                            .add("Disabled").addSeparator().add("Separated Item");
                    right.disable("Disabled");
                    return div().add(right).element();
                }));

        addSnippet(new Snippet("up", "Dropdown (direction up)", "Resources.get().dropdownUp().getText()", () -> {
            Dropdown<String> up = Dropdown.<String> text("Dropdown").up().add("Item 1").add("Item 2")
                    .add("Disabled").addSeparator().add("Separated Item");
            up.disable("Disabled");
            return div().add(up).element();
        }));

        addSnippet(new Snippet("events", "Dropdown events", "Resources.get().dropdownEvent().getText()", () -> {
            Dropdown<String> dropdown = Dropdown.<String> text("Dropdown").add("Item 1").add("Item 2")
                    .add("Disabled").addSeparator().add("Separated Item")
                    .onToggle(open -> console.log(
                            "NYI") /* toast().add(info("Dropdown " + (open ? "expanded" : "collapsed"))) */)
                    .onChange(value -> console.log(
                            "NYI")/* toast().add(info("Dropdown " + (value ? "checked" : "not checked"))) */)
                    .onSelect(item -> console.log("NYI")/* toast().add(info("Selected " + item)) */);
            dropdown.disable("Disabled");
            return div().add(dropdown).element();
        }));
    }

    enum Color {

        Success("#92D400", "#151515"), Information("#73BCF7", "#151515"), Warning("#f0AB00", "#151515"), Danger("#C9190B",
                "#eeeeee");

        final String bg;

        final String fg;

        Color(String bg, String fg) {
            this.bg = bg;
            this.fg = fg;
        }
    }
}

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

import org.patternfly.component.Chip;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.Chip.chip;

@Deprecated
public class ChipComponent extends ComponentPage {

    public ChipComponent() {
        super("Chip",
                "https://www.patternfly.org/components/chip/design-guidelines",
                p().textContent(
                        "A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a button component that is used to remove the chip from selection. When the text overflows it is truncated using ellipses. A chip can be grouped by using the \"chip-group\" layout.")
                        .element());

        addSnippet(new Snippet("chip", "Chip", "Resources.get().chip().getText()",
                () -> div().add(div().css("sc-documentation__code-block").add(chip("Just Text")))
                        .add(div().css("sc-documentation__code-block").add(chip("Count", 23)))
                        .add(div().css("sc-documentation__code-block").add(Chip.readOnly("Readonly")))
                        .add(div().css("sc-documentation__code-block").add(Chip.readOnly("RO Count", 42)))
                        .add(div().add(Chip.overflow("Overflow"))).element()));

        addSnippet(new Snippet("chip-on-close", "Chip onClose", "Resources.get().chipOnClose().getText()",
                () -> div().add(chip("Close Me").onClose(() -> console.log("NYI") /* toast().add(info("Goodbye")) */))
                        .element()));
    }
}

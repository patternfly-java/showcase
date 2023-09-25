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

import java.util.Random;

import org.jboss.elemento.Id;
import org.patternfly.components.Button;
import org.patternfly.components.ChipGroup;
import org.patternfly.components.ChipGroupToolbar;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Chip.chip;
import static org.patternfly.components.ChipGroup.chipGroup;
import static org.patternfly.components.ChipGroupToolbar.chipGroupToolbar;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.layout.Icons.fas;

public class ChipGroupComponent extends ComponentPage {

    public ChipGroupComponent() {
        super("Chip group", p().textContent(
                "A chip group is used to represent an attribute that has been assigned one or more values. An OR relationship is implied between values in the group. Chip groups are useful to express complex filters to a data set, for example.")
                .element());

        addSnippet(new Snippet("Chip group", "Resources.get().chipGroup().getText()", () -> {
            ChipGroup group = chipGroup(5).add(chip(Id.unique())).add(chip(Id.unique())).add(chip(Id.unique()));
            return div().add(div().css("sc-documentation__code-block").add(group)).add(div()
                    .css("sc-documentation__code-block")
                    .add(Button.link(icon(fas("plus-circle")), "Add cip").onClick(() -> group.add(chip(Id.unique())))))
                    .element();
        }));

        addSnippet(new Snippet("Chip toolbar", "Resources.get().chipToolbar().getText()", () -> {
            ChipGroup[] groups = new ChipGroup[] { chipGroup(3), chipGroup(4), chipGroup() };

            ChipGroupToolbar toolbar = chipGroupToolbar().add("Max 3", groups[0]).add("Max 4", groups[1])
                    .add("Unlimited", groups[2]);

            return div().add(div().css("sc-documentation__code-block").add(toolbar))
                    .add(div().css("sc-documentation__code-block")
                            .add(Button.link(icon(fas("plus-circle")), "Add chip").onClick(() -> {
                                int i = new Random().nextInt(3);
                                groups[i].add(chip(Id.unique()));
                            })))
                    .element();
        }));
    }
}

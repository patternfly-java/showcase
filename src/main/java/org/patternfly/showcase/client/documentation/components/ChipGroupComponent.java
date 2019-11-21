package org.patternfly.showcase.client.documentation.components;

import java.util.Random;

import org.patternfly.client.components.Button;
import org.patternfly.client.components.ChipGroup;
import org.patternfly.client.components.ChipGroupToolbar;
import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.jboss.gwt.elemento.core.Elements.uniqueId;
import static org.patternfly.client.components.Chip.chip;
import static org.patternfly.client.components.Components.chipGroup;
import static org.patternfly.client.components.Components.chipGroupToolbar;
import static org.patternfly.client.components.Components.icon;
import static org.patternfly.client.resources.CSS.fas;

public class ChipGroupComponent extends BaseComponent {

    public ChipGroupComponent() {
        super("Chip group",
                p().textContent(
                        "A chip group is used to represent an attribute that has been assigned one or more values. An OR relationship is implied between values in the group. Chip groups are useful to express complex filters to a data set, for example.")
                        .element(),
                asList(
                        new Snippet("Chip group", Code.get().chipGroup().getText(),
                                () -> {
                                    ChipGroup group = chipGroup(5)
                                            .add(chip(uniqueId()))
                                            .add(chip(uniqueId()))
                                            .add(chip(uniqueId()));
                                    return div()
                                            .add(div().css("sc-documentation__code-block")
                                                    .add(group))
                                            .add(div().css("sc-documentation__code-block")
                                                    .add(Button.link(icon(fas("plus-circle")), "Add cip")
                                                            .onClick(() -> group.add(chip(uniqueId()))))).element();
                                }),
                        new Snippet("Chip toolbar", Code.get().chipToolbar().getText(),
                                () -> {
                                    ChipGroup[] groups = new ChipGroup[]{
                                            chipGroup(3),
                                            chipGroup(4),
                                            chipGroup()
                                    };

                                    ChipGroupToolbar toolbar = chipGroupToolbar()
                                            .add("Max 3", groups[0])
                                            .add("Max 4", groups[1])
                                            .add("Unlimited", groups[2]);

                                    return div()
                                            .add(div().css("sc-documentation__code-block")
                                                    .add(toolbar))
                                            .add(div().css("sc-documentation__code-block")
                                                    .add(Button.link(icon(fas("plus-circle")), "Add chip")
                                                            .onClick(() -> {
                                                                int i = new Random().nextInt(3);
                                                                groups[i].add(chip(uniqueId()));
                                                            }))).element();
                                })));
    }
}

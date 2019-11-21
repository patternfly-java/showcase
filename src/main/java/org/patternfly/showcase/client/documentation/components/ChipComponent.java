package org.patternfly.showcase.client.documentation.components;

import org.patternfly.client.components.Chip;
import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.client.components.Alert.info;
import static org.patternfly.client.components.AlertGroup.toast;
import static org.patternfly.client.components.Chip.chip;

public class ChipComponent extends BaseComponent {

    public ChipComponent() {
        super("Chip",
                p().textContent(
                        "A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a button component that is used to remove the chip from selection. When the text overflows it is truncated using ellipses. A chip can be grouped by using the \"chip-group\" layout.")
                        .element(),
                asList(
                        new Snippet("Chip", Code.get().chip().getText(),
                                () -> div()
                                        .add(div().css("sc-documentation__code-block")
                                                .add(chip("Just Text")))
                                        .add(div().css("sc-documentation__code-block")
                                                .add(chip("Count", 23)))
                                        .add(div().css("sc-documentation__code-block")
                                                .add(Chip.readOnly("Readonly")))
                                        .add(div().css("sc-documentation__code-block")
                                                .add(Chip.readOnly("RO Count", 42)))
                                        .add(div()
                                                .add(Chip.overflow("Overflow"))).element()),
                        new Snippet("Chip onClose", Code.get().chipOnClose().getText(),
                                () -> div()
                                        .add(chip("Close Me").onClose(() -> toast().add(info("Goodbye")))).element())));
    }
}

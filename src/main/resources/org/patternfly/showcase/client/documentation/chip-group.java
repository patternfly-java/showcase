import static org.jboss.gwt.elemento.core.Elements.uniqueId;
import static org.patternfly.client.components.Chip.chip;
import static org.patternfly.client.components.Components.chipGroup;
import static org.patternfly.client.resources.CSS.fas;

ChipGroup group = chipGroup(5)
        .add(chip(uniqueId()))
        .add(chip(uniqueId()))
        .add(chip(uniqueId()));

Button add = Button.link("Add chip").withIcon(fas("plus-circle"))
        .onClick(() -> group.add(chip(uniqueId())));
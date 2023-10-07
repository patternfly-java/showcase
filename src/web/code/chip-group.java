import static org.elemento.Elements.uniqueId;
import static org.patternfly.component.Chip.chip;
import static org.patternfly.component.ChipGroup.chipGroup;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

ChipGroup group = chipGroup(5)
        .add(chip(uniqueId()))
        .add(chip(uniqueId()))
        .add(chip(uniqueId()));

Button add = Button.link(icon(fas("plus-circle")), "Add cip")
        .onClick(() -> group.add(chip(uniqueId())));
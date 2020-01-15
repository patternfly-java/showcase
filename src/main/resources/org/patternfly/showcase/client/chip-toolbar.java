import static org.elemento.Elements.uniqueId;
import static org.patternfly.components.Chip.chip;
import static org.patternfly.components.ChipGroup.chipGroup;
import static org.patternfly.components.ChipGroupToolbar.chipGroupToolbar;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

ChipGroup[] groups = new ChipGroup[]{
        chipGroup(3),
        chipGroup(4),
        chipGroup()
};

ChipGroupToolbar toolbar = chipGroupToolbar()
        .add("Max 3", groups[0])
        .add("Max 4", groups[1])
        .add("Unlimited", groups[2]);

Button add = Button.link(icon(fas("plus-circle")), "Add chip")
        .onClick(() -> {
            int i = new Random().nextInt(3);
            groups[i].add(chip(uniqueId()));
        });
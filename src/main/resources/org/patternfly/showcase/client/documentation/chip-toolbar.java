import static org.jboss.gwt.elemento.core.Elements.uniqueId;
import static org.patternfly.client.components.Chip.chip;
import static org.patternfly.client.components.Components.chipGroup;
import static org.patternfly.client.components.Components.chipGroupToolbar;
import static org.patternfly.client.resources.CSS.fas;

ChipGroup[] groups = new ChipGroup[]{
        chipGroup(3),
        chipGroup(4),
        chipGroup()
};

ChipGroupToolbar toolbar = chipGroupToolbar()
        .add("Max 3", groups[0])
        .add("Max 4", groups[1])
        .add("Unlimited", groups[2]);

Button add = Button.link("Add chip").withIcon(fas("plus-circle"))
        .onClick(() -> {
            int i = new Random().nextInt(3);
            groups[i].add(chip(uniqueId()));
        });
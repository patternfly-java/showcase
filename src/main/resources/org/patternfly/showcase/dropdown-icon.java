import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Dropdown<String> icon = Dropdown.<String>icon(icon(fas("th")))
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
icon.disable("Disabled");
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;

Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item")
        .onToggle(open -> toast().add(info("Dropdown " + (open ? "expanded" : "collapsed"))))
        .onChange(value -> toast().add(info("Dropdown " + (value ? "checked" : "not checked"))))
        .onSelect(item -> toast().add(info("Selected " + item)));
dropdown.disable("Disabled");
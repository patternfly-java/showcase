import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;

Dropdown<String> dropdown = Dropdown.split("Dropdown")
        .add("Link")
        .add("Action")
        .add("Disabled Link", true)
        .add("Disabled Action", true)
        .addSeparator()
        .add("Separated Link")
        .onToggle(open -> toast().add(info("Dropdown " + (open ? "expanded" : "collapsed"))))
        .onChange(value -> toast().add(info("Dropdown " + (value ? "checked" : "not checked"))))
        .onSelect(item -> toast().add(info("Selected " + item)));
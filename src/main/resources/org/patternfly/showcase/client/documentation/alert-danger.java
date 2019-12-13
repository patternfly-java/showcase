import static org.patternfly.components.Alert.danger;
import static org.patternfly.components.Alert.description;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;

Alert danger0 = danger("Danger alert title")
        .add(description()
                .add("Danger alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert danger1 = danger("Danger alert title")
        .closable();
Alert danger2 = danger("Danger alert title")
        .action("Action Button", () -> toast().add(info("Danger action button clicked.")));
Alert danger3 = danger("Danger alert title");
import static org.patternfly.components.Alert.description;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.Alert.warning;
import static org.patternfly.components.AlertGroup.toast;

Alert warning0 = warning("Warning alert title")
        .add(description()
                .add("Warning alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert warning1 = warning("Warning alert title").closable();
Alert warning2 = warning("Warning alert title")
        .action("Action Button", () -> toast().add(info("Warning action button clicked.")));
Alert warning3 = warning("Warning alert title");
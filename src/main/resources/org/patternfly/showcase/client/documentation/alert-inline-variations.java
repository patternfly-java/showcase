import static org.patternfly.components.Alert.description;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.Alert.success;
import static org.patternfly.components.AlertGroup.toast;

Alert inline0 = success("Success alert title").inline()
        .add(description()
                .add("Success alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert inline1 = success("Success alert title").inline()
        .closable();
Alert inline2 = success("Success alert title").inline()
        .action("Action Button", () -> toast().add(info("Success action button clicked.")));
Alert inline3 = success("Success alert title").inline();
import static org.patternfly.components.Alert.description;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.Alert.success;
import static org.patternfly.components.AlertGroup.toast;

Alert success0 = success("Success alert title")
        .add(description()
                .add("Success alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert success1 = success("Success alert title").closable();
Alert success2 = success("Success alert title")
        .action("Action Button", () -> toast().add(info("Success action button clicked.")));
Alert success3 = success("Success alert title");
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;
import static org.patternfly.components.Button.button;

Button button = Button.button("Click me").primary()
        .onClick(() -> toast().add(info("Hello")));
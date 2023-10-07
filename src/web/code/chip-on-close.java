import static org.patternfly.component.Alert.info;
import static org.patternfly.component.AlertGroup.toast;

Chip chip = Chip.chip("Close Me").onClose(() -> toast().add(info("Goodbye")));
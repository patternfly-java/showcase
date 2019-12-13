import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;

Chip chip = Chip.chip("Close Me").onClose(() -> toast().add(info("Goodbye")));
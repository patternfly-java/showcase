import static org.patternfly.client.components.Chip.chip;

Chip chip = chip("Close Me").onClose(() -> toast().add(info("Goodbye")))
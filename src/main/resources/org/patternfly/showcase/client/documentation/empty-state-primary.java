import static org.patternfly.components.EmptyState.emptyState;
import static org.patternfly.resources.CSS.fas;

EmptyState primaryLink = emptyState(fas("cubes"), "Empty State")
        .body("This represents an the empty state pattern in PatternFly 4. " +
              "Hopefully it's simple enough to use but flexible enough to meet a variety of needs.")
        .primary(Button.link("Action button"));
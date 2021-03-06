import static org.patternfly.core.Callback.noop;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

EmptyState small = EmptyState.emptyState(icon(fas("cubes")), "Empty State").small()
        .body("This represents an the empty state pattern in PatternFly 4. " +
              "Hopefully it's simple enough to use but flexible enough to meet a variety of needs.")
        .primary("Primary action", noop())
        .secondary("Multiple", noop())
        .secondary("Action buttons", noop())
        .secondary("Can", noop())
        .secondary("Go here", noop())
        .secondary("In the secondary", noop())
        .secondary("Action area", noop());
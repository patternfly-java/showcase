package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.Button;
import org.patternfly.components.EmptyState;
import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.components.EmptyState.emptyState;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.core.Callback.noop;
import static org.patternfly.resources.CSS.fas;

public class EmptyStateComponent extends BaseComponent {

    public EmptyStateComponent() {
        super("Empty state",
                p().textContent("Use an empty state component when there is no data or other information to show. " +
                        "It can also be used to communicate completion or other status at the end of a sequential " +
                        "task. An empty state may include a call to action to guide the user on what to do next.")
                        .element(),
                asList(
                        new Snippet("Empty state", Code.get().emptyState().getText(),
                                () -> div()
                                        .add(emptyState(icon(fas("cubes")), "Empty State")
                                                .body("This represents an the empty state pattern in PatternFly 4. " +
                                                        "Hopefully it's simple enough to use but flexible enough to " +
                                                        "meet a variety of needs.")
                                                .primary("Primary action", noop())
                                                .secondary("Multiple", noop())
                                                .secondary("Action buttons", noop())
                                                .secondary("Can", noop())
                                                .secondary("Go here", noop())
                                                .secondary("In the secondary", noop())
                                                .secondary("Action area", noop()).element()).element()),
                        new Snippet("Empty state small", Code.get().emptyStateSmall().getText(),
                                () -> div()
                                        .add(emptyState(icon(fas("cubes")), "Empty State").small()
                                                .body("This represents an the empty state pattern in PatternFly 4. " +
                                                        "Hopefully it's simple enough to use but flexible enough to " +
                                                        "meet a variety of needs.")
                                                .primary("Primary action", noop())
                                                .secondary("Multiple", noop())
                                                .secondary("Action buttons", noop())
                                                .secondary("Can", noop())
                                                .secondary("Go here", noop())
                                                .secondary("In the secondary", noop())
                                                .secondary("Action area", noop()).element()).element()),
                        new Snippet("Empty state large", Code.get().emptyStateLarge().getText(),
                                () -> div()
                                        .add(emptyState(icon(fas("cubes")), "Empty State").large()
                                                .body("This represents an the empty state pattern in PatternFly 4. " +
                                                        "Hopefully it's simple enough to use but flexible enough to " +
                                                        "meet a variety of needs.")
                                                .primary("Primary action", noop())
                                                .secondary("Multiple", noop())
                                                .secondary("Action buttons", noop())
                                                .secondary("Can", noop())
                                                .secondary("Go here", noop())
                                                .secondary("In the secondary", noop())
                                                .secondary("Action area", noop()).element()).element()),
                        new Snippet("Empty state w/ primary element", Code.get().emptyStatePrimary().getText(),
                                () -> div()
                                        .add(emptyState(icon(fas("cubes")), "Empty State")
                                                .body("This represents an the empty state pattern in PatternFly 4. " +
                                                        "Hopefully it's simple enough to use but flexible enough to " +
                                                        "meet a variety of needs.")
                                                .primary(Button.link("Action button")).element()).element()),
                        new Snippet("Empty state loading", Code.get().emptyStateSpinner().getText(),
                                () -> div()
                                        .add(EmptyState.spinner()).element()),
                        new Snippet("Empty state no match found", Code.get().emptyStateNoMatch().getText(),
                                () -> div()
                                        .add(EmptyState.noResults(noop())).element())));
    }
}

/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.showcase.component;

import org.patternfly.component.EmptyState;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.EmptyState.emptyState;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.handler.Callback.noop;
import static org.patternfly.layout.PredefinedIcon.fas;

@Deprecated
public class EmptyStateComponent extends ComponentPage {

    public EmptyStateComponent() {
        super("Empty state",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/components/empty-state/design-guidelines",
                p().textContent("Use an empty state component when there is no data or other information to show. "
                        + "It can also be used to communicate completion or other status at the end of a sequential "
                        + "task. An empty state may include a call to action to guide the user on what to do next.")
                        .element());

        addSnippet(new Snippet("empty-state", "Empty state", "Resources.get().emptyState().getText()", () -> div()
                .add(emptyState(icon(fas("cubes")), "Empty State")
                        .body("This represents an the empty state pattern in PatternFly 4. "
                                + "Hopefully it's simple enough to use but flexible enough to "
                                + "meet a variety of needs.")
                        .primary("Primary action", noop()).secondary("Multiple", noop())
                        .secondary("Action buttons", noop()).secondary("Can", noop())
                        .secondary("Go here", noop()).secondary("In the secondary", noop())
                        .secondary("Action area", noop()).element())
                .element()));

        addSnippet(new Snippet("small", "Empty state small", "Resources.get().emptyStateSmall().getText()", () -> div()
                .add(emptyState(icon(fas("cubes")), "Empty State").small()
                        .body("This represents an the empty state pattern in PatternFly 4. "
                                + "Hopefully it's simple enough to use but flexible enough to "
                                + "meet a variety of needs.")
                        .primary("Primary action", noop()).secondary("Multiple", noop())
                        .secondary("Action buttons", noop()).secondary("Can", noop())
                        .secondary("Go here", noop()).secondary("In the secondary", noop())
                        .secondary("Action area", noop()).element())
                .element()));

        addSnippet(new Snippet("large", "Empty state large", "Resources.get().emptyStateLarge().getText()", () -> div()
                .add(emptyState(icon(fas("cubes")), "Empty State").large()
                        .body("This represents an the empty state pattern in PatternFly 4. "
                                + "Hopefully it's simple enough to use but flexible enough to "
                                + "meet a variety of needs.")
                        .primary("Primary action", noop()).secondary("Multiple", noop())
                        .secondary("Action buttons", noop()).secondary("Can", noop())
                        .secondary("Go here", noop()).secondary("In the secondary", noop())
                        .secondary("Action area", noop()).element())
                .element()));

        addSnippet(new Snippet("primary", "Empty state w/ primary element",
                "Resources.get().emptyStatePrimary().getText()",
                () -> div()
                        .add(emptyState(icon(fas("cubes")), "Empty State")
                                .body("This represents an the empty state pattern in PatternFly 4. "
                                        + "Hopefully it's simple enough to use but flexible enough to "
                                        + "meet a variety of needs.")
                                .primary(button("Action button").link()).element())
                        .element()));

        addSnippet(new Snippet("loading", "Empty state loading", "Resources.get().emptyStateSpinner().getText()",
                () -> div().add(EmptyState.spinner()).element()));

        addSnippet(
                new Snippet("not-found", "Empty state no match found", "Resources.get().emptyStateNoMatch().getText()",
                        () -> div().add(EmptyState.noResults(noop())).element()));
    }
}

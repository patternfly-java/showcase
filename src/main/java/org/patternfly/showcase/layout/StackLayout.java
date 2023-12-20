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
package org.patternfly.showcase.layout;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.layout.level.Level.level;
import static org.patternfly.layout.level.LevelItem.levelItem;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.showcase.Code.code;

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

public class StackLayout extends SnippetPage {

    public StackLayout() {
        super("Stack",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/stack/Stack.html",
                "https://www.patternfly.org/layouts/stack/design-guidelines",
                p().textContent(
                        "The stack layout positions items vertically, with one or more items filling the available vertical space.")
                        .element());

        addSnippet(new Snippet("stack-basic", "Basic",
                code.get("stack-basic"), () ->
                // @code-start:stack-basic
                div().css("ws-core-l-stack")
                        .add(stack()
                                .addItem(stackItem().textContent("content"))
                                .addItem(stackItem().fill().textContent("pf-m-fill"))
                                .addItem(stackItem().textContent("content")))
                        .element()
        // @code-end:stack-basic
        ));

        addSnippet(new Snippet("stack-gutter", "With gutters",
                code.get("stack-gutter"), () ->
                // @code-start:stack-gutter
                div().css("ws-core-l-stack")
                        .add(stack().gutter()
                                .addItem(stackItem().textContent("content"))
                                .addItem(stackItem().fill().textContent("pf-m-fill"))
                                .addItem(stackItem().textContent("content")))
                        .element()
        // @code-end:stack-gutter
        ));
    }
}

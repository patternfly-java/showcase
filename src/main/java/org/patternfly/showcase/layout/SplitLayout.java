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
import static org.patternfly.layout.split.Split.split;
import static org.patternfly.layout.split.SplitItem.splitItem;
import static org.patternfly.showcase.Code.code;

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

public class SplitLayout extends SnippetPage {

    public SplitLayout() {
        super("Split",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/split/Split.html",
                "https://www.patternfly.org/layouts/split/design-guidelines",
                p().textContent(
                        "The split layout positions items horizontally in a container, with one item filling the remaining horizontal space as the viewport is resized.")
                        .element());

        addSnippet(new Snippet("split-basic", "Basic",
                code.get("split-basic"), () ->
                // @code-start:split-basic
                div().css("ws-core-l-split")
                        .add(split()
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().fill().textContent("pf-m-fill"))
                                .addItem(splitItem().textContent("content")))
                        .element()
        // @code-end:split-basic
        ));

        addSnippet(new Snippet("split-gutter", "With gutter",
                code.get("split-gutter"), () ->
                // @code-start:split-gutter
                div().css("ws-core-l-split")
                        .add(split().gutter()
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().fill().textContent("pf-m-fill"))
                                .addItem(splitItem().textContent("content")))
                        .element()
        // @code-end:split-gutter
        ));

        addSnippet(new Snippet("split-wrap", "Wrappable",
                code.get("split-wrap"), () ->
                // @code-start:split-wrap
                div().css("ws-core-l-split")
                        .add(split().wrap().gutter()
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content"))
                                .addItem(splitItem().textContent("content")))
                        .element()
        // @code-end:split-wrap
        ));
    }
}
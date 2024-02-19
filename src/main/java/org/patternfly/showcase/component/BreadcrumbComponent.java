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

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.breadcrumb.Breadcrumb.breadcrumb;
import static org.patternfly.component.breadcrumb.BreadcrumbItem.breadcrumbItem;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;

public class BreadcrumbComponent extends SnippetPage {

    public BreadcrumbComponent() {
        super("Breadcrumb",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/breadcrumb/Breadcrumb.html",
                "https://www.patternfly.org/components/breadcrumb/design-guidelines",
                p().textContent(
                                "A breadcrumb provides page context to help users navigate more efficiently and understand where they are in the application hierarchy.")
                        .element());

        addSnippet(new Snippet("breadcrumb-basic", "Basic",
                code.get("breadcrumb-basic"), () ->
                // @code-start:breadcrumb-basic
                div()
                        .add(breadcrumb()
                                .addItem(breadcrumbItem("Section home", "#c-breadcrumb"))
                                .addItem(breadcrumbItem("Section title", "#c-breadcrumb"))
                                .addItem(breadcrumbItem("Section title", "#c-breadcrumb"))
                                .addItem(breadcrumbItem("Section landing", "#c-breadcrumb").active()))
                        .element()
                // @code-end:breadcrumb-basic
        ));

        addSnippet(new Snippet("breadcrumb-no-home-link", "Without home link",
                code.get("breadcrumb-no-home-link"), () ->
                // @code-start:breadcrumb-no-home-link
                div()
                        .add(breadcrumb()
                                .addItem(breadcrumbItem("Section home"))
                                .addItem(breadcrumbItem("Section title", "#c-breadcrumb"))
                                .addItem(breadcrumbItem("Section title", "#c-breadcrumb"))
                                .addItem(breadcrumbItem("Section title", "#c-breadcrumb"))
                                .addItem(breadcrumbItem("Section title", "#c-breadcrumb"))
                                .addItem(breadcrumbItem("Section landing", "#c-breadcrumb").active()))
                        .element()
                // @code-end:breadcrumb-no-home-link
        ));

        addSnippet(new Snippet("breadcrumb-heading", "With heading",
                code.get("breadcrumb-heading"), () ->
                // @code-start:breadcrumb-heading
                div()
                        .add(nyi())
                        .element()
                // @code-end:breadcrumb-heading
        ));

        addSnippet(new Snippet("breadcrumb-dropdown", "With dropdown",
                code.get("breadcrumb-dropdown"), () ->
                // @code-start:breadcrumb-dropdown
                div()
                        .add(nyi())
                        .element()
                // @code-end:breadcrumb-dropdown
        ));
    }
}

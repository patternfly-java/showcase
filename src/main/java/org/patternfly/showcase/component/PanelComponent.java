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

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.panel.Panel.panel;
import static org.patternfly.component.panel.PanelMain.panelMain;
import static org.patternfly.showcase.Code.code;

public class PanelComponent extends SnippetPage {

    public PanelComponent() {
        super("Panel",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/panel/Panel.html",
                "https://www.patternfly.org/components/panel/design-guidelines",
                p().textContent(
                        "The panel component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.")
                        .element());

        addSnippet(new Snippet("panel-basic", "Basic",
                code.get("panel-basic"), () ->
                // @code-start:panel-basic
                panel()
                        .addMain("Main content")
                        .element()
                // @code-end:panel-basic
        ));

        addSnippet(new Snippet("panel-header", "Header",
                code.get("panel-header"), () ->
                // @code-start:panel-header
                panel()
                        .addHeader("Header content")
                        .addDivider()
                        .addMain("Main content")
                        .element()
                // @code-end:panel-header
        ));

        addSnippet(new Snippet("panel-footer", "Footer",
                code.get("panel-footer"), () ->
                // @code-start:panel-footer
                panel()
                        .addMain("Main content")
                        .addFooter("Footer content")
                        .element()
                // @code-end:panel-footer
        ));

        addSnippet(new Snippet("panel-header-footer", "Header and footer",
                code.get("panel-header-footer"), () ->
                // @code-start:panel-header-footer
                panel()
                        .addHeader("Header content")
                        .addDivider()
                        .addMain("Main content")
                        .addFooter("Footer content")
                        .element()
                // @code-end:panel-header-footer
        ));

        addSnippet(new Snippet("panel-raised", "Raised",
                code.get("panel-raised"), () ->
                // @code-start:panel-raised
                panel()
                        .raised()
                        .addMain("Main content")
                        .element()
                // @code-end:panel-raised
        ));

        addSnippet(new Snippet("panel-bordered", "Bordered",
                code.get("panel-bordered"), () ->
                // @code-start:panel-bordered
                panel()
                        .bordered()
                        .addMain("Main content")
                        .element()
                // @code-end:panel-bordered
        ));

        addSnippet(new Snippet("panel-scrollable", "Scrollable",
                code.get("panel-scrollable"), () ->
                // @code-start:panel-scrollable
                panel()
                        .scrollable()
                        .addMain(panelMain()
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content"))
                        .element()
                // @code-end:panel-scrollable
        ));

        addSnippet(new Snippet("panel-scrollable-header-footer", "Scrollable with header and footer",
                code.get("panel-scrollable-header-footer"), () ->
                // @code-start:panel-scrollable-header-footer
                panel()
                        .scrollable()
                        .addHeader("Header content")
                        .addDivider()
                        .addMain(panelMain()
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content")
                                .add(br()).add(br())
                                .add("Main content"))
                        .addFooter("Footer content")
                        .element()
                // @code-end:panel-scrollable-header-footer
        ));
    }
}

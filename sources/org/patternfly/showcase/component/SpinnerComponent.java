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

import org.patternfly.showcase.LoremIpsum;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.small;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.layout.Size.lg;
import static org.patternfly.layout.Size.md;
import static org.patternfly.layout.Size.sm;
import static org.patternfly.layout.Size.xl;
import static org.patternfly.showcase.Code.code;

public class SpinnerComponent extends ComponentPage {

    public SpinnerComponent() {
        super("Spinner",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/spinner/Spinner.html",
                "https://www.patternfly.org/components/spinner/design-guidelines",
                p().textContent(
                        "A spinner is used to indicate to users that an action is in progress. For actions that may take a long time, use a progress bar instead.")
                        .element());

        addSnippet(new Snippet("spinner-basic", "Basic",
                code.get("spinner-basic"), () ->
                // @code-start:spinner-basic
                div()
                        .add(spinner())
                        .element()
        // @code-end:spinner-basic
        ));

        addSnippet(new Snippet("spinner-sizes", "Sizes",
                code.get("spinner-sizes"), () ->
                // @code-start:spinner-sizes
                div()
                        .add(spinner(sm))
                        .add(" ")
                        .add(spinner(md))
                        .add(" ")
                        .add(spinner(lg))
                        .add(" ")
                        .add(spinner(xl))
                        .element()
        // @code-end:spinner-sizes
        ));

        addSnippet(new Snippet("spinner-custom-size", "Custom size",
                code.get("spinner-custom-size"), () ->
                // @code-start:spinner-custom-size
                div()
                        .add(spinner().diameter("80px"))
                        .element()
        // @code-end:spinner-custom-size
        ));

        addSnippet(new Snippet("spinner-inline-size", "Inline size",
                code.get("spinner-inline-size"), () ->
                // @code-start:spinner-inline-size
                div()
                        .add(textContent()
                                .add(h(1)
                                        .add("Heading ")
                                        .add(spinner("Spinner in heading").inline()))
                                .add(p().textContent(LoremIpsum.paragraphs(1)))
                                .add(h(2)
                                        .add("Second level ")
                                        .add(spinner("Spinner in subheading").inline()))
                                .add(p()
                                        .add(LoremIpsum.paragraphs(2) + " ")
                                        .add(spinner("Spinner in paragraph").inline())
                                        .add(" " + LoremIpsum.paragraphs(3)))
                                .add(small()
                                        .add("Sometimes you need small text ")
                                        .add(spinner("Spinner in small element").inline())))
                        .element()
        // @code-end:spinner-inline-size
        ));
    }
}

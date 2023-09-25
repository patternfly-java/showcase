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
package org.patternfly.showcase.client.components;

import org.patternfly.showcase.client.LoremIpsum;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.blockquote;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.dt;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.components.Content.content;

public class ContentComponent extends ComponentPage {

    public ContentComponent() {
        super("Text",
                p().textContent(
                        "The text component can wrap any static HTML content you want to place on your page "
                                + "to provide correct formatting when using standard HTML tags.")
                        .element());

        addSnippet(new Snippet("headings", "Headings", "Resources.get().contentHeadings().getText()",
                () -> div()
                        .add(content()
                                .add(h(1, "Hello World")).add(h(2, "Second Level")).add(h(3, "Third Level")).add(
                                        h(4, "Forth Level"))
                                .add(h(5, "Fifth Level")).add(h(6, "Sixth Level")))
                        .element()));

        addSnippet(new Snippet("body-text", "Body text", "Resources.get().contentBody().getText()", () -> div().add(content()
                .add(p().textContent(LoremIpsum.paragraphs(5)))
                .add(p().add(LoremIpsum.paragraphs(3) + " ").add(a("#").textContent(LoremIpsum.paragraph()))
                        .add(" " + LoremIpsum.paragraphs(2)))
                .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
                .add(small().textContent(LoremIpsum.paragraphs(3)))).element()));

        addSnippet(new Snippet("ul", "Unordered list", "Resources.get().contentUnorderedList().getText()",
                () -> div().add(content().add(
                        ul().add(li().textContent(LoremIpsum.words())).add(li().textContent(LoremIpsum.words()))
                                .add(li().add(LoremIpsum.words())
                                        .add(ul().add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words()))))
                                .add(li().add(LoremIpsum.words()))))
                        .element()));

        addSnippet(new Snippet("ol", "Ordered list", "Resources.get().contentOrderedList().getText()",
                () -> div().add(content().add(ol().add(li().textContent(LoremIpsum.words()))
                        .add(li().textContent(LoremIpsum.words())).add(li().textContent(LoremIpsum.words()))
                        .add(li().textContent(LoremIpsum.words())).add(li().textContent(LoremIpsum.words()))
                        .add(li().textContent(LoremIpsum.words())).add(li().textContent(LoremIpsum.words()))))
                        .element()));

        addSnippet(new Snippet("dl", "Data list", "Resources.get().contentDataList().getText()",
                () -> div().add(content().add(dl().add(dt().textContent("Web"))
                        .add(dd().textContent(
                                "The part of the Internet that contains " + "websites and web pages"))
                        .add(dt().textContent("HTML"))
                        .add(dd().textContent("A markup language for creating web pages"))
                        .add(dt().textContent("CSS"))
                        .add(dd().textContent("A technology to make HTML look better")))).element()));
    }
}

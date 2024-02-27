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

import org.patternfly.component.text.TextContent;
import org.patternfly.showcase.ApiDocType;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

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
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.showcase.ApiDocType.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.plain;

public class TextContentComponent extends SnippetPage {

    public TextContentComponent() {
        super(TextContent.class, "Text",
                "https://www.patternfly.org/components/text/design-guidelines",
                p().textContent(
                        "Text and TextList components are always wrapped in TextContent and provide correct formatting to a number of standard HTML tags.")
                        .element());

        startExamples();
        addSnippet(new Snippet("text-content-headings", "Heading",
                code.get("text-content-headings"), () ->
                // @code-start:text-content-headings
                div()
                        .add(textContent()
                                .add(h(1, "Hello World"))
                                .add(h(2, "Second Level"))
                                .add(h(3, "Third Level"))
                                .add(h(4, "Forth Level"))
                                .add(h(5, "Fifth Level"))
                                .add(h(6, "Sixth Level")))
                        .element()
        // @code-end:text-content-headings
        ));

        addSnippet(new Snippet("text-content-body", "Body",
                code.get("text-content-body"), () ->
                // @code-start:text-content-body
                div()
                        .add(textContent()
                                .add(p().textContent(LoremIpsum.paragraphs(5)))
                                .add(p()
                                        .add(LoremIpsum.paragraphs(3) + " ")
                                        .add(a("#").textContent(LoremIpsum.paragraph()))
                                        .add(" " + LoremIpsum.paragraphs(2)))
                                .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
                                .add(small().textContent(LoremIpsum.paragraphs(3))))
                        .element()
        // @code-end:text-content-body
        ));

        addSnippet(new Snippet("text-content-ul", "Unordered list",
                code.get("text-content-ul"), () ->
                // @code-start:text-content-ul
                div()
                        .add(textContent()
                                .add(ul()
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().add(LoremIpsum.words())
                                                .add(ul()
                                                        .add(li().textContent(LoremIpsum.words()))
                                                        .add(li().textContent(LoremIpsum.words()))))
                                        .add(li().add(LoremIpsum.words()))))
                        .element()
        // @code-end:text-content-ul
        ));

        addSnippet(new Snippet("text-content-ol", "Ordered list",
                code.get("text-content-ol"), () ->
                // @code-start:text-content-ol
                div()
                        .add(textContent()
                                .add(ol()
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))))
                        .element()
        // @code-end:text-content-ol
        ));

        addSnippet(new Snippet("text-content-plain-list", "Plain list",
                code.get("text-content-plain-list"), () ->
                // @code-start:text-content-plain-list
                div()
                        .add(textContent()
                                .add(h(3, "Plain unordered list"))
                                .add(ul().css(modifier(plain))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().add(LoremIpsum.words()))
                                        .add(li().add(LoremIpsum.words())))
                                .add(h(3, "Plain ordered list"))
                                .add(ol().css(modifier(plain))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))
                                        .add(li().textContent(LoremIpsum.words()))))
                        .element()
        // @code-end:text-content-plain-list
        ));

        addSnippet(new Snippet("text-content-dl", "Description list",
                code.get("text-content-dl"), () ->
                // @code-start:text-content-dl
                div()
                        .add(textContent()
                                .add(dl()
                                        .add(dt().textContent("Web"))
                                        .add(dd().textContent(
                                                "The part of the Internet that contains " + "websites and web pages"))
                                        .add(dt().textContent("HTML"))
                                        .add(dd().textContent("A markup language for creating web pages"))
                                        .add(dt().textContent("CSS"))
                                        .add(dd().textContent("A technology to make HTML look better"))))
                        .element()
        // @code-end:text-content-dl
        ));

        startApiDocs(TextContent.class);
        addApiDoc(TextContent.class, component);
    }
}

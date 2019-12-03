package org.patternfly.showcase.client.documentation.components;

import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;
import org.patternfly.showcase.client.resources.LoremIpsum;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.client.components.Content.content;

public class ContentComponent extends BaseComponent {

    public ContentComponent() {
        super("Text",
                p().textContent("The text component can wrap any static HTML content you want to place on your page " +
                        "to provide correct formatting when using standard HTML tags.").element(),
                asList(
                        new Snippet("Headings", Code.get().contentHeadings().getText(), () -> div().add(
                                content()
                                        .add(h(1, "Hello World"))
                                        .add(h(2, "Second Level"))
                                        .add(h(3, "Third Level"))
                                        .add(h(4, "Forth Level"))
                                        .add(h(5, "Fifth Level"))
                                        .add(h(6, "Sixth Level"))).element()),
                        new Snippet("Body text", Code.get().contentBody().getText(), () -> div().add(
                                content()
                                        .add(p().textContent(LoremIpsum.paragraphs(5)))
                                        .add(p().add(LoremIpsum.paragraphs(3) + " ")
                                                .add(a("#").textContent(LoremIpsum.paragraph()))
                                                .add(" " + LoremIpsum.paragraphs(2)))
                                        .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
                                        .add(small().textContent(LoremIpsum.paragraphs(3)))).element()),
                        new Snippet("Unordered list", Code.get().contentUnorderedList().getText(), () -> div().add(
                                content()
                                        .add(ul()
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li()
                                                        .add(LoremIpsum.words())
                                                        .add(ul()
                                                                .add(li().textContent(LoremIpsum.words()))
                                                                .add(li().textContent(LoremIpsum.words()))))
                                                .add(li().add(LoremIpsum.words())))).element()),
                        new Snippet("Ordered list", Code.get().contentOrderedList().getText(), () -> div().add(
                                content()
                                        .add(ol()
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words()))
                                                .add(li().textContent(LoremIpsum.words())))).element()),
                        new Snippet("Data list", Code.get().contentDataList().getText(), () -> div().add(
                                content()
                                        .add(dl()
                                                .add(dt().textContent("Web"))
                                                .add(dd().textContent("The part of the Internet that contains " +
                                                        "websites and web pages"))
                                                .add(dt().textContent("HTML"))
                                                .add(dd().textContent("A markup language for creating web pages"))
                                                .add(dt().textContent("CSS"))
                                                .add(dd().textContent("A technology to make HTML look better"))))
                                .element())));
    }
}

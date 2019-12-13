import org.patternfly.showcase.client.resources.LoremIpsum;

import static org.jboss.gwt.elemento.core.Elements.a;
import static org.jboss.gwt.elemento.core.Elements.blockquote;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.jboss.gwt.elemento.core.Elements.small;

Content content = Content.content()
        .add(p().textContent(LoremIpsum.paragraphs(5)))
        .add(p().add(LoremIpsum.paragraphs(3) + " ")
                .add(a("#").textContent(LoremIpsum.paragraph()))
                .add(" " + LoremIpsum.paragraphs(2)))
        .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
        .add(small().textContent(LoremIpsum.paragraphs(3)));
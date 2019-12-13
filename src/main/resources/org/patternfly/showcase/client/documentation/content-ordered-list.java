import org.patternfly.showcase.client.resources.LoremIpsum;

import static org.jboss.gwt.elemento.core.Elements.li;
import static org.jboss.gwt.elemento.core.Elements.ol;

Content content = Content.content()
        .add(ol()
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words())));
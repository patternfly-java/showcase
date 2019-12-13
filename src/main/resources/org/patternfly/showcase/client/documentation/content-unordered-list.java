import org.patternfly.showcase.client.resources.LoremIpsum;

import static org.jboss.gwt.elemento.core.Elements.li;
import static org.jboss.gwt.elemento.core.Elements.ul;

Content content = Content.content()
        .add(ul()
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li()
                        .add(LoremIpsum.words())
                        .add(ul()
                                .add(li().textContent(LoremIpsum.words()))
                                .add(li().textContent(LoremIpsum.words()))))
                .add(li().add(LoremIpsum.words())));
import static org.elemento.Elements.li;
import static org.elemento.Elements.ul;

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
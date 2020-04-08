import static org.elemento.Elements.li;
import static org.elemento.Elements.ol;

Content content = Content.content()
        .add(ol()
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words())));
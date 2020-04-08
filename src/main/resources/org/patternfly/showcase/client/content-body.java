import static org.elemento.Elements.a;
import static org.elemento.Elements.blockquote;
import static org.elemento.Elements.p;
import static org.elemento.Elements.small;

Content content = Content.content()
        .add(p().textContent(LoremIpsum.paragraphs(5)))
        .add(p().add(LoremIpsum.paragraphs(3) + " ")
                .add(a("#").textContent(LoremIpsum.paragraph()))
                .add(" " + LoremIpsum.paragraphs(2)))
        .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
        .add(small().textContent(LoremIpsum.paragraphs(3)));
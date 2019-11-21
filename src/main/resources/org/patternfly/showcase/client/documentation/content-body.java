import static org.patternfly.client.components.Components.text;

text()
        .add(p().textContent(LoremIpsum.paragraphs(5)))
        .add(p().add(LoremIpsum.paragraphs(3) + " ")
            .add(a("#").textContent(LoremIpsum.paragraph()))
            .add(" " + LoremIpsum.paragraphs(2)))
        .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
        .add(small().textContent(LoremIpsum.paragraphs(3)));
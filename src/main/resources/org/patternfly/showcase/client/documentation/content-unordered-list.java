import static org.patternfly.client.components.Components.text;

Text unorderedLists = text()
        .add(ul()
                .add(li().textContent(LoremIpsum.words()))
                .add(li().textContent(LoremIpsum.words()))
                .add(li()
                        .add(LoremIpsum.words())
                        .add(ul()
                                .add(li().textContent(LoremIpsum.words()))
                                .add(li().textContent(LoremIpsum.words()))))
        .add(li().add(LoremIpsum.words())));
textContent()
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
                .add(li().textContent(LoremIpsum.words())));
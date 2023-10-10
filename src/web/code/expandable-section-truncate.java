expandableSection()
        .truncate(2)
        .addContent(expandableSectionContent()
                .textContent(LoremIpsum.paragraphs(20)))
        .addToggle(expandableSectionToggle("Show more", "Show less"));
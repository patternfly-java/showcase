Badge badge = badge(4).read();
expandableSection()
        .onToggle((component, expanded) -> badge.count(badge.count() + 1))
        .addToggle(expandableSectionToggle()
                .addText(expandableSectionToggleText()
                        .add(div()
                                .add(span().textContent("You can also use icons "))
                                .add(inlineIcon(fas("check-circle")))
                                .add(span().textContent(" or badges "))
                                .add(badge)
                                .add(span().textContent(" !")))))
        .addContent(expandableSectionContent()
                .textContent("This content is visible only when the component is expanded."));
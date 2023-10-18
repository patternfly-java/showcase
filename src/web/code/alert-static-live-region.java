alert(info, "Default live region configuration")
        .closable()
        .liveRegion()
        .addDescription(alertDescription()
                .add(p()
                        .add("This alert uses the recommended ")
                        .add(code("liveRegion()"))
                        .add(" modifier to automatically set ARIA attributes and CSS classes.")));

alert(info, "Customized live region")
        .closable()
        .aria(live, "assertive")
        .aria(atomic, true)
        .aria(relevant, "additions text")
        .addDescription(alertDescription()
                .add(p()
                        .add("You can alternatively omit the ")
                        .add(code("liveRegion()"))
                        .add(" to specify ARIA attributes and CSS manually on the containing element.")));
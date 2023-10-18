HTMLElement alerts = ul().css(component(alertGroup), util("mt-sm"))
        .aria(live, "polite")
        .aria(Aria.atomic, false)
        .attr(role, "list")
        .element();

actionList()
        .addItem(actionListItem()
                .add(button("Add alert").secondary()
                        .onAction((event, button) -> alerts.appendChild(li()
                                .add(alert(custom, "Default timeout Alert")
                                        .timeout()
                                        .addDescription("This alert will dismiss after 8 seconds")
                                        .addActionGroup(alertActionGroup()
                                                .addAction("View details")
                                                .addAction("Ignore")))
                                .element()))))
        .addItem(actionListItem()
                .add(button("Remove all alerts").secondary()
                        .onAction((event, button) -> removeChildrenFrom(alerts))));
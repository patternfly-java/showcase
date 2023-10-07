Alert.success("Success alert title")
    .closable()
    .addDescription("Success alert description. This should tell the user more information about the alert.")
    .addActionGroup(alertActionGroup()
    .add(Button.inline("View details"))
    .add(Button.inline("Ignore"))));

Alert.success("Success alert title")
    .closable()
    .addDescription(alertDescription()
        .add(p()
            .add("Success alert description. This should tell the user more information about the alert. ")
            .add(a("#").textContent("This is a link"))
            .add("."))));

Alert.success("Success alert title")
    .closable()
    .addActionGroup(alertActionGroup()
    .add(Button.inline("View details"))
    .add(Button.inline("Ignore"))));

Alert.success("Success alert title")
    .closable());

Alert.success("Success alert title"));

Alert.success(LoremIpsum.words(75))
    .truncate()
    .addDescription(alertDescription()
    .add(p()
    .add("This example uses ")
    .add(code("Alert.truncate()"))
    .add(" to limit the title to a single line and truncate any overflow text with ellipses."))));

Alert.success(LoremIpsum.words(75))
    .truncate(2)
    .addDescription(alertDescription()
    .add(p()
    .add("This example uses ")
    .add(code("Alert.truncate(2)"))
    .add(" to limit the title to a single line and truncate any overflow text with ellipses."))));
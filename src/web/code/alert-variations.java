alert(success, "Success alert title")
        .closable()
        .addDescription(
                "Success alert description. This should tell the user more information about the alert.")
        .addActionGroup(alertActionGroup()
                .add(button("View details").inline().link())
                .add(button("Ignore").inline().link()));

alert(success, "Success alert title")
        .closable()
        .addDescription(alertDescription()
                .add(p()
                        .add("Success alert description. This should tell the user more information about the alert. ")
                        .add(a("#").textContent("This is a link"))
                        .add("."))));

alert(success, "Success alert title")
        .closable()
        .addActionGroup(alertActionGroup()
                .add(button("View details").inline().link())
                .add(button("Ignore").inline().link()));

alert(success, "Success alert title")
        .closable();

alert(success, "Success alert title");

alert(success, LoremIpsum.words(75))
        .truncate()
        .addDescription(alertDescription()
                .add(p()
                        .add("This example uses ")
                        .add(code("Alert.truncate()"))
                        .add(" to limit the title to a single line and truncate any overflow text with ellipses."))):

alert(success, LoremIpsum.words(75))
        .truncate(2)
        .addDescription(alertDescription()
                .add(p()
                        .add("This example uses ")
                        .add(code("Alert.truncate(2)"))
                        .add(" to limit the title to a single line and truncate any overflow text with ellipses.")));
Alert success1 = success("Success alert title")
        .add(description()
                .add("Success alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert success2 = success("Success alert title")
        .closable();
Alert success3 = success("Success alert title")
        .action("Action Button", () -> toast().add(info("Success action button clicked.")));
Alert success4 = success("Success alert title");
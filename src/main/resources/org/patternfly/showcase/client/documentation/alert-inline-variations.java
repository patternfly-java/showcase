Alert inline1 = success("Success alert title").inline()
        .add(description()
                .add("Success alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert inline2 = success("Success alert title").inline()
        .closable();
Alert inline3 = success("Success alert title").inline()
        .action("Action Button", () -> toast().add(info("Success action button clicked.")));
Alert inline4 = success("Success alert title").inline();
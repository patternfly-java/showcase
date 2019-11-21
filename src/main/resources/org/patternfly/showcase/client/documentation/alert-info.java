Alert info1 = info("Info alert title")
        .add(description()
                .add("Info alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert info2 = info("Info alert title")
        .closable();
Alert info3 = info("Info alert title")
        .action("Action Button", () -> toast().add(info("Info action button clicked.")));
Alert info4 = info("Info alert title");
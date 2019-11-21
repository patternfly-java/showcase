Alert warning1 = warning("Warning alert title")
        .add(description()
                .add("Warning alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert warning2 = warning("Warning alert title")
        .closable();
Alert warning3 = warning("Warning alert title")
        .action("Action Button", () -> toast().add(info("Warning action button clicked.")));
Alert warning4 = warning("Warning alert title");
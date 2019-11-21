Alert danger1 = danger("Danger alert title")
        .add(description()
                .add("Danger alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert danger2 = danger("Danger alert title")
        .closable();
Alert danger3 = danger("Danger alert title")
        .action("Action Button", () -> toast().add(info("Danger action button clicked.")));
Alert danger4 = danger("Danger alert title");
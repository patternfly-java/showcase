Alert default1 = default_("Default alert title")
        .add(description()
                .add("Default alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert default2 = default_("Default alert title")
        .closable();
Alert default3 = default_("Default alert title")
        .action("Action Button", () -> toast().add(info("Default action button clicked.")));
Alert default4 = default_("Default alert title");
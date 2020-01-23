Dropdown<String> primary = Dropdown.<String>text("Dropdown").primary()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
primary.disable("Disabled");
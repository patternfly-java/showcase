Dropdown<String> up = Dropdown.<String>text("Dropdown").up()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
up.disable("Disabled");
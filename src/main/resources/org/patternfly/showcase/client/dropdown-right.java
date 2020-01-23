Dropdown<String> right = Dropdown.<String>text("Dropdown").right()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
right.disable("Disabled");
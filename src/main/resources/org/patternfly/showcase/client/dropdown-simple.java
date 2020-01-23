Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
dropdown.disable("Disabled");
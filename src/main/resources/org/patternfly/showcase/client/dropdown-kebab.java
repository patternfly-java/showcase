Dropdown<String> kebab = Dropdown.<String>kebab()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
kebab.disable("Disabled");
Dropdown<String> noText = Dropdown.<String>splitCheckbox()
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
noText.disable("Disabled");

Dropdown<String> withText = Dropdown.<String>splitCheckbox("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item");
withText.disable("Disabled");
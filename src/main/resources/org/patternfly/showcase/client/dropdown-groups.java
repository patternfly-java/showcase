Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add(Dropdown.<String>group("Group 1")
                .add("Group 1 item 1")
                .add("Group 1 item 2"))
        .add(Dropdown.<String>group("Group 2")
                .add("Group 2 item 1")
                .add("Group 2 item 2"))
        // this item is added to the unnamed group above!
        .add("Item 3");
dropdown.getGroup("Group 2").disable("Group 2 item 1");
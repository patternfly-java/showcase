Dropdown<String> dropdown = Dropdown.text("Dropdown").primary()
        .add("Link")
        .add("Action")
        .add("Disabled Link", true)
        .add("Disabled Action", true)
        .addSeparator()
        .add("Separated Link");
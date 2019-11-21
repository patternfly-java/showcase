Dropdown<String> dropdown1 = Dropdown.split()
        .add("Link")
        .add("Action")
        .add("Disabled Link", true)
        .add("Disabled Action", true)
        .addSeparator()
        .add("Separated Link");

Dropdown dropdown2 = Dropdown.split("Dropdown")
        .add("Link")
        .add("Action")
        .add("Disabled Link", true)
        .add("Disabled Action", true)
        .addSeparator()
        .add("Separated Link");
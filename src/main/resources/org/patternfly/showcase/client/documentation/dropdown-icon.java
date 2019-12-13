import static org.patternfly.resources.CSS.fas;

Dropdown<String> dropdown = Dropdown.icon(fas("th"))
        .add("Link")
        .add("Action")
        .add("Disabled Link", true)
        .add("Disabled Action", true)
        .addSeparator()
        .add("Separated Link");
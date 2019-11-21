import static org.patternfly.client.resources.CSS.fas;

MultiOptionsMenu mom = MultiOptionsMenu.icon(fas("sort-amount-down"))
        .add(new Group<String>("Sort by")
                .add(new String[] {
                        "Name",
                        "Date",
                        "Size"
                }))
        .add(new Group<String>("Sort direction")
                .add(new String[] {
                        "Ascending",
                        "Descending"
                }));
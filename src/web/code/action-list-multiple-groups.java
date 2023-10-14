// In modals, forms, data lists
actionList()
        .addItem(actionListItem()
                .add(button("Save").primary()))
        .addItem(actionListItem()
                .add(button("Cancel").link()))

// In wizards
actionList()
        .addGroup(actionListGroup()
                .addItem(actionListItem()
                        .add(button("Next").primary()))
                .addItem(actionListItem()
                        .add(button("Back").secondary())))
        .addGroup(actionListGroup()
                .addItem(actionListItem()
                        .add(button("Cancel").link())))
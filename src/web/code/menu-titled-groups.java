menu(none)
        .addContent(menuContent()
                .addGroup(menuGroup()
                        .addList(menuList()
                                .addItem(linkMenuItem("item-0", "Link not in group", "#"))))
                .addDivider()
                .addGroup(menuGroup("Group 1")
                        .addList(menuList()
                                .add(linkMenuItem("item-10", "Link 1", "#"))
                                .add(linkMenuItem("item-11", "Link 2", "#"))))
                .addDivider()
                .addGroup(menuGroup("Group 2")
                        .addList(menuList()
                                .add(linkMenuItem("item-20", "Link 1", "#"))
                                .add(linkMenuItem("item-21", "Link 2", "#")))));
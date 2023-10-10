menu(none)
        .onSingleSelect(item -> console.log("Item " + item.id + " selected"))
        .onAction(itemAction -> console.log(
                "Action " + itemAction.id + " on item " + itemAction.menuItem.id + " clicked"))
        .favorites()
        .addContent(menuContent()
                .addGroup(menuGroup("All actions")
                        .addList(menuList()
                                .addItem(actionMenuItem("item-0", "Item 1")
                                        .description("Description 1")
                                        .addAction(menuItemAction("action-0", bars)))
                                .addItem(actionMenuItem("item-1", "Item 2")
                                        .onClick((e, item) -> console.log(
                                                "# Item " + item.id + " clicked"))
                                        .description("Description 2")
                                        .addAction(menuItemAction("action-1", fas("clipboard"))
                                                .onAction((e, itemAction) -> console.log(
                                                        "# Action " + itemAction.id + " on item "
                                                                + itemAction.menuItem.id
                                                                + " clicked"))))
                                .addItem(actionMenuItem("item-2", "Item 3")
                                        .description("Description 3")
                                        .addAction(menuItemAction("action-2", bell))))));
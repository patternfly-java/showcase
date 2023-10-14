menu(click)
        .onSingleSelect(item -> console.log("Item " + item.id + " selected"))
        .addContent(menuContent()
                .addList(menuList()
                        .addItem(actionMenuItem("item-0", "Action")
                                .onClick((e, actionItem) -> console.log(
                                        "Clicked on action item " + actionItem.id)))
                        .addItem(linkMenuItem("item-1", "Link", "#home")
                                .onClick((e, item) -> e.preventDefault()))
                        .addItem(actionMenuItem("item-2", "Disabled action")
                                .disabled())
                        .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                .disabled())));
menu(click)
        .addContent(menuContent()
                .addList(menuList()
                        .addItem(linkMenuItem("item-0", "Link 1", "#home")
                                .external())
                        .addItem(linkMenuItem("item-1", "Link 2", "#home")
                                .external())
                        .addItem(linkMenuItem("item-2", "Link 3", "#home"))));
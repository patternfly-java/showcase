menu(multi)
        .addContent(menuContent()
                .addList(menuList()
                        .addItem(checkboxMenuItem("item-0", "Checkbox 1"))
                        .addItem(checkboxMenuItem("item-1", "Checkbox 2"))
                        .addItem(checkboxMenuItem("item-2", "Checkbox 3")
                                .disabled())));
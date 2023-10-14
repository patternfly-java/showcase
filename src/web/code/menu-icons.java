menu(click)
        .addContent(menuContent()
                .addList(menuList()
                        .addItem(actionMenuItem("item-0", "Item 1")
                                .icon(fas("code-branch")))
                        .addItem(actionMenuItem("item-1", "Container image")
                                .icon(fas("layer-group")))
                        .addItem(actionMenuItem("item-2", "From Dockerfile")
                                .icon(fas("cube")))));
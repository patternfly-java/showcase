SingleOptionsMenu<String> som1 = SingleOptionsMenu.<String> text("Options menu")
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        })
        .select("Option 2");

SingleOptionsMenu<String> som2 = SingleOptionsMenu.<String> text("Options menu").disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });
import static org.patternfly.resources.CSS.fas;

SingleOptionsMenu som1 = SingleOptionsMenu.<String> icon(fas("sort-amount-down"))
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });

SingleOptionsMenu som2 = SingleOptionsMenu.<String> icon(fas("sort-amount-down")).disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        }));

SingleOptionsMenu som3 = SingleOptionsMenu.<String> plain("Options menu")
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });

SingleOptionsMenu som4 = SingleOptionsMenu.<String> plain("Options menu").disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        }));
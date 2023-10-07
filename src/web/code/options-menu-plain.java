import static org.patternfly.component.Icon.icon;
import static org.patternfly.resources.CSS.fas;

SingleOptionsMenu<String> som0 = SingleOptionsMenu.icon(icon(fas("sort-amount-down")))
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });

SingleOptionsMenu<String> som1 = SingleOptionsMenu.icon(icon(fas("sort-amount-down"))).disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        }));

SingleOptionsMenu<String> som2 = SingleOptionsMenu.plain("Options menu")
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        });

SingleOptionsMenu<String> som3 = SingleOptionsMenu.plain("Options menu").disable()
        .add(new String[] {
                "Option 1",
                "Option 2",
                "Option 3",
        }));
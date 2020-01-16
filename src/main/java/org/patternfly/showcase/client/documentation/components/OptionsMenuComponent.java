package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.MultiOptionsMenu;
import org.patternfly.components.MultiOptionsMenu.Group;
import org.patternfly.components.SingleOptionsMenu;
import org.patternfly.showcase.client.Resources;

import static java.util.Arrays.asList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

public class OptionsMenuComponent extends BaseComponent {

    public OptionsMenuComponent() {
        super("Options menu",
                p().textContent("An options menu is similar to a dropdown, but provides a way to select among a set " +
                        "of optional settings rather than trigger an action.").element(),
                asList(
                        new Snippet("Options menu - single", Resources.get().optionsMenuSingle().getText(),
                                () -> div()
                                        .add(SingleOptionsMenu.<String>text("Options menu")
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Option 2",
                                                        "Option 3",
                                                })
                                                .select("Option 2"))
                                        .add(" ")
                                        .add(SingleOptionsMenu.<String>text("Options menu").disable()
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Option 2",
                                                        "Option 3",
                                                })).element()),
                        new Snippet("Options menu - multiple", Resources.get().optionsMenuMultiple().getText(),
                                () -> div()
                                        .add(MultiOptionsMenu.icon(icon(fas("sort-amount-down")))
                                                .add(new Group<String>("Sort by")
                                                        .add(new String[]{
                                                                "Name",
                                                                "Date",
                                                                "Size"
                                                        }))
                                                .add(new Group<String>("Sort direction")
                                                        .add(new String[]{
                                                                "Ascending",
                                                                "Descending"
                                                        }))).element()),
                        new Snippet("Options menu - plain", Resources.get().optionsMenuPlain().getText(),
                                () -> div()
                                        .add(SingleOptionsMenu.<String>icon(icon(fas("sort-amount-down")))
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Option 2",
                                                        "Option 3",
                                                })
                                                .select("Option 2"))
                                        .add(" ")
                                        .add(SingleOptionsMenu.<String>icon(icon(fas("sort-amount-down"))).disable()
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Option 2",
                                                        "Option 3",
                                                }))
                                        .add(SingleOptionsMenu.<String>plain("Options menu")
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Option 2",
                                                        "Option 3",
                                                })
                                                .select("Option 2"))
                                        .add(" ")
                                        .add(SingleOptionsMenu.<String>plain("Options menu").disable()
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Option 2",
                                                        "Option 3",
                                                })).element()),
                        new Snippet("Options menu - up", Resources.get().optionsMenuUp().getText(),
                                () -> div()
                                        .add(SingleOptionsMenu.<String>text("Options menu").up()
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Option 2",
                                                        "Option 3",
                                                })
                                                .select("Option 2")).element()),
                        new Snippet("Options menu - right", Resources.get().optionsMenuRight().getText(),
                                () -> div()
                                        .add(SingleOptionsMenu.<String>text("Options menu").right()
                                                .add(new String[]{
                                                        "Option 1",
                                                        "Another option",
                                                        "Last option",
                                                })
                                                .select("Option 2")).element())));
    }
}

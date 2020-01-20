package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.Dropdown;
import org.patternfly.showcase.client.Resources;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

public class DropdownComponent extends BaseComponent {

    public DropdownComponent() {
        super("Dropdown",
                p().textContent("Use a dropdown when you want to present a list of actions in a limited space.")
                        .element(),
                asList(
                        new Snippet("Simple dropdown", Resources.get().dropdownSimple().getText(),
                                () -> div()
                                        .add(Dropdown.<String>text("Dropdown")
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link"))
                                        .add(" ")
                                        .add(Dropdown.<String>text("Dropdown").disable()).element()),
                        new Snippet("Dropdown with groups", Resources.get().dropdownGroups().getText(),
                                () -> div()
                                        .add(Dropdown.<String>text("Dropdown", true)
                                                .add("Link")
                                                .add("Action")
                                                .add("Group 2", "Group 2 link")
                                                .add("Group 2", "Group 2 action")
                                                .add("Group 3", "Group 3 link")
                                                .add("Group 3", "Group 3 action")).element()),
                        new Snippet("Split button", Resources.get().dropdownSplit().getText(),
                                () -> div()
                                        .add(Dropdown.<String>split()
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link"))
                                        .add(" ")
                                        .add(Dropdown.<String>split().disable())
                                        .add(" ")
                                        .add(Dropdown.<String>split("Dropdown")
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link"))
                                        .add(" ")
                                        .add(Dropdown.<String>split("Dropdown").disable()).element()),
                        new Snippet("Dropdown typed", Resources.get().dropdownTyped().getText(),
                                () -> div()
                                        .add(Dropdown.<Color>text("Dropdown")
                                                .display((html, color) -> html
                                                        .style("background-color:" + color.bg + ";color:" + color.fg)
                                                        .textContent(color.name()))
                                                .add(Color.values())).element()),
                        new Snippet("Dropdown with kebab", Resources.get().dropdownKebab().getText(),
                                () -> div()
                                        .add(Dropdown.<String>kebab()
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link"))
                                        .add(" ")
                                        .add(Dropdown.<String>kebab().disable()).element()),
                        new Snippet("Dropdown (icon only)", Resources.get().dropdownIcon().getText(),
                                () -> div()
                                        .add(Dropdown.<String>icon(icon(fas("th")))
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link"))
                                        .add(" ")
                                        .add(Dropdown.<String>icon(icon(fas("th"))).disable()).element()),
                        new Snippet("Dropdown (primary toggle)", Resources.get().dropdownPrimary().getText(),
                                () -> div()
                                        .add(Dropdown.<String>text("Dropdown").primary()
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link")).element()),
                        new Snippet("Dropdown (position right)", Resources.get().dropdownRight().getText(),
                                () -> div()
                                        .add(Dropdown.<String>text("Dropdown").right()
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link")).element()),
                        new Snippet("Dropdown (direction up)", Resources.get().dropdownUp().getText(),
                                () -> div()
                                        .add(Dropdown.<String>text("Dropdown").up()
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link")).element()),
                        new Snippet("Dropdown events", Resources.get().dropdownEvent().getText(),
                                () -> div()
                                        .add(Dropdown.<String>split("Dropdown")
                                                .add("Link")
                                                .add("Action")
                                                .add("Disabled Link", true)
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Separated Link")
                                                .onToggle(open -> toast().add(
                                                        info("Dropdown " + (open ? "expanded" : "collapsed"))))
                                                .onChange(value -> toast().add(
                                                        info("Dropdown " + (value ? "checked" : "not checked"))))
                                                .onSelect(item -> toast().add(info("Selected " + item)))).element())));
    }

    enum Color {

        Success("#92D400", "#151515"),
        Information("#73BCF7", "#151515"),
        Warning("#f0AB00", "#151515"),
        Danger("#C9190B", "#eeeeee");

        final String bg;

        final String fg;

        Color(String bg, String fg) {
            this.bg = bg;
            this.fg = fg;
        }
    }
}

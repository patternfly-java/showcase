package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.Button;
import org.patternfly.components.InputGroup;
import org.patternfly.components.SingleSelect;

import static java.util.Arrays.asList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Button.button;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.components.Toolbar.content;
import static org.patternfly.components.Toolbar.group;
import static org.patternfly.components.Toolbar.item;
import static org.patternfly.components.Toolbar.toolbar;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;

public class ToolbarComponent extends BaseComponent {

    public ToolbarComponent() {
        super("Toolbar",
                p().textContent(
                        "Toolbars can be included to allow a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a list, or a data visualization (chart), for example. The PatternFly Toolbar component is a flexible layout system that accommodates a variety of configurations that can be adapted to your specific needs.")
                        .element(),
                asList(
                        new Snippet("Items", "NYI",
                                () -> div()
                                        .add(toolbar()
                                                .add(content()
                                                        .add(item().add(new InputGroup.Search()))
                                                        .add(item().add(button("Action").secondary()))
                                                        .add(item().separator())
                                                        .add(item().add(button("Action").primary())))).element()),
                        new Snippet("Adjusting item spacers", "NYI",
                                () -> div()
                                        .add(toolbar()
                                                .add(content()
                                                        .add(item().css(modifier("spacer-none"))
                                                                .add(button("Action").secondary()))
                                                        .add(item().css(modifier("spacer-sm"))
                                                                .add(button("Action").secondary()))
                                                        .add(item().css(modifier("spacer-md"))
                                                                .add(button("Action").secondary()))
                                                        .add(item().css(modifier("spacer-lg"))
                                                                .add(button("Action").secondary()))
                                                        .add(item().separator())
                                                        .add(item().css(modifier("spacer-none"),
                                                                modifier("spacer-sm-on-md"),
                                                                modifier("spacer-md-on-lg"),
                                                                modifier("spacer-lg-on-xl"))
                                                                .add(button("Action").secondary()))
                                                        .add(item()
                                                                .add(button("Action").primary()))
                                                        .add(item().separator())
                                                        .add(group().css(modifier("space-items-lg"))
                                                                .add(item().add(button("Action").secondary()))
                                                                .add(item().add(button("Action").secondary())))))
                                        .element()),
                        new Snippet("Groups", "NYI",
                                () -> div()
                                        .add(toolbar()
                                                .add(content()
                                                        .add(group().filter()
                                                                .add(item()
                                                                        .add(SingleSelect.<String>single("Filter 1")
                                                                                .add(new String[]{"A", "B", "C"})))
                                                                .add(item()
                                                                        .add(SingleSelect.<String>single("Filter 2")
                                                                                .add(new String[]{"1", "2", "3"})))
                                                                .add(item()
                                                                        .add(SingleSelect.<String>single("Filter 3")
                                                                                .add(new String[]{"I", "II", "III"}))))
                                                        .add(group().iconButton()
                                                                .add(item()
                                                                        .add(Button.icon(icon(fas("edit")), "Edit")))
                                                                .add(item()
                                                                        .add(Button.icon(icon(fas("clone")), "Clone")))
                                                                .add(item()
                                                                        .add(Button.icon(icon(fas("sync")), "Sync"))))
                                                        .add(group().button()
                                                                .add(item().add(button("Action").primary()))
                                                                .add(item().add(button("Secondary").secondary()))
                                                                .add(item().add(button("Tertiary").tertiary())))))
                                        .element()),
                        new Snippet("Toggle group", "NYI",
                                () -> div()
                                        .add(toolbar()
                                                .add(content()
                                                        .add(group().toggle("show-on-lg")
                                                                .add(item().add(new InputGroup.Search()))
                                                                .add(group().filter()
                                                                        .add(item().add(SingleSelect.<String>single(
                                                                                "Status")
                                                                                .add(new String[]{"New",
                                                                                        "Pending",
                                                                                        "Running",
                                                                                        "Canceled"})))
                                                                        .add(item().add(SingleSelect.<String>single(
                                                                                "Risk")
                                                                                .add(new String[]{"Low",
                                                                                        "Medium",
                                                                                        "High"}))))))).element())));
    }
}

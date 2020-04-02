import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.util;

Tabs tabs = Tabs.tabs()
        .add("Tab Item 1", div().textContent("Tab 1"))
        .add("Tab Item 2", div().textContent("Tab 2"))
        .add("Tab Item 3", div().textContent("Tab 3"))
        .add("tab-item-4",
                tab -> tab
                        .add("Tab 4")
                        .add(icon(fas("address-book")).css(util("pl-lg"))),
                panel -> panel.textContent(("Tab 4")));

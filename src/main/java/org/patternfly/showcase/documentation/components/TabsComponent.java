package org.patternfly.showcase.documentation.components;

import org.patternfly.components.Tabs;
import org.patternfly.showcase.Resources;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.util;

public class TabsComponent extends BaseComponent {

    public TabsComponent() {
        super("Tabs",
                p().textContent("Tabs are used to present a set on tabs for organizing content on a page. " +
                        "It must always be used together with a tab content component.").element(),
                singletonList(
                        new Snippet("Basic", Resources.get().tabs().getText(),
                                () -> {
                                    return Tabs.tabs()
                                            .add("Tab Item 1", div().textContent("Tab 1"))
                                            .add("Tab Item 2", div().textContent("Tab 2"))
                                            .add("Tab Item 3", div().textContent("Tab 3"))
                                            .add("tab-item-4",
                                                    tab -> tab
                                                            .add("Tab 4")
                                                            .add(icon(fas("address-book")).css(util("pl-lg"))),
                                                    panel -> panel.textContent(("Tab 4")))
                                            .element();
                                })));
    }
}

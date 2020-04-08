package org.patternfly.showcase.client;

import com.google.gwt.core.client.EntryPoint;
import org.patternfly.components.Navigation;
import org.patternfly.components.NavigationItem;
import org.patternfly.components.Page;
import org.patternfly.resources.Theme;
import org.patternfly.showcase.client.documentation.DocumentationFactory;

import static elemental2.dom.DomGlobal.location;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.hashchange;
import static org.patternfly.components.AlertGroup.toast;
import static org.patternfly.components.Brand.brand;
import static org.patternfly.components.Page.header;
import static org.patternfly.components.Page.main;
import static org.patternfly.components.Page.page;
import static org.patternfly.components.Page.sidebar;
import static org.patternfly.showcase.client.Ids.COMPONENT_GROUP;
import static org.patternfly.showcase.client.Ids.DEMO_GROUP;
import static org.patternfly.showcase.client.Ids.MAIN_CONTAINER;
import static org.patternfly.showcase.client.Places.*;

public class Showcase implements EntryPoint {

    private final Navigation mainNavigation;
    private final Navigation documentationNavigation;
    private final PageFactory pageFactory;
    private final DocumentationFactory documentationFactory;
    private Page page;

    public Showcase() {
        mainNavigation = Navigation.horizontal()
                .add(new NavigationItem(GET_STARTED, "Get Started", place(GET_STARTED)))
                .add(new NavigationItem(DOCUMENTATION, "Documentation", documentation("alert")))
                .add(new NavigationItem(CONTRIBUTE, "Contribute", place(CONTRIBUTE)))
                .add(new NavigationItem(GET_IN_TOUCH, "Get in Touch", place(GET_IN_TOUCH)));

        documentationNavigation = Navigation.vertical(true)
                .add(COMPONENT_GROUP, new NavigationItem("alert", "Alert", documentation("alert")))
                .add(COMPONENT_GROUP, new NavigationItem("avatar", "Avatar", documentation("avatar")))
                .add(COMPONENT_GROUP, new NavigationItem("badge", "Badge", documentation("badge")))
                .add(COMPONENT_GROUP, new NavigationItem("brand", "Brand", documentation("brand")))
                .add(COMPONENT_GROUP, new NavigationItem("button", "Button", documentation("button")))
                .add(COMPONENT_GROUP, new NavigationItem("card", "Card", documentation("card")))
                .add(COMPONENT_GROUP, new NavigationItem("chip", "Chip", documentation("chip")))
                .add(COMPONENT_GROUP, new NavigationItem("chip-group", "Chip group", documentation("chip-group")))
                .add(COMPONENT_GROUP, new NavigationItem("content", "Content", documentation("content")))
                .add(COMPONENT_GROUP,
                        new NavigationItem("context-selector", "Context selector", documentation("context-selector")))
                .add(COMPONENT_GROUP, new NavigationItem("data-list", "Data list", documentation("data-list")))
                .add(COMPONENT_GROUP, new NavigationItem("data-table", "Data table", documentation("data-table")))
                .add(COMPONENT_GROUP, new NavigationItem("dropdown", "Dropdown", documentation("dropdown")))
                .add(COMPONENT_GROUP, new NavigationItem("empty-state", "Empty state", documentation("empty-state")))
                .add(COMPONENT_GROUP, new NavigationItem("expandable", "Expandable", documentation("expandable")))
                .add(COMPONENT_GROUP, new NavigationItem("label", "Label", documentation("label")))
                .add(COMPONENT_GROUP, new NavigationItem("options-menu", "Options menu", documentation("options-menu")))
                .add(COMPONENT_GROUP, new NavigationItem("select", "Select", documentation("select")))
                .add(COMPONENT_GROUP, new NavigationItem("tabs", "Tabs", documentation("tabs")))
                .add(COMPONENT_GROUP, new NavigationItem("title", "Title", documentation("title")))
                .add(COMPONENT_GROUP, new NavigationItem("toolbar", "Toolbar", documentation("toolbar")))
                .add(DEMO_GROUP, new NavigationItem("server-demo", "Server", documentation("server-demo")))
                .add(DEMO_GROUP, new NavigationItem("user-demo", "Users", documentation("user-demo")));

        pageFactory = new PageFactory();
        documentationFactory = new DocumentationFactory();
    }

    @Override
    public void onModuleLoad() {
        page = page()
                .add(header(brand("./PF-Masthead-Logo.svg"), place(HOME))
                        .add(mainNavigation))
                .add(main(MAIN_CONTAINER));

        body().addAll(page, toast());
        bind(window, hashchange, e -> navigate(location.getHash()));
        navigate(location.getHash());
    }

    private void navigate(String hash) {
        String place = hash != null && hash.startsWith("#") ? hash.substring(1) : "";
        if (place.startsWith(DOCUMENTATION)) {
            int index = place.indexOf(':');
            String documentation = index != -1 ? place.substring(index + 1) : null;
            page.add(sidebar(Theme.DARK).add(documentationNavigation));
            page.main().replaceAll(documentationFactory.get(documentation));
            mainNavigation.select(DOCUMENTATION);
            documentationNavigation.select(documentation);
        } else {
            page.removeSidebar();
            page.main().replace(pageFactory.get(place));
            mainNavigation.select(place);
        }
        PR.prettyPrint();
    }
}

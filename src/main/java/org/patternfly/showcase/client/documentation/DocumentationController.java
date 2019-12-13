package org.patternfly.showcase.client.documentation;

import com.github.nalukit.nalu.client.component.AbstractComponentController;
import com.github.nalukit.nalu.client.component.annotation.AcceptParameter;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import elemental2.dom.HTMLElement;
import org.patternfly.components.Navigation;
import org.patternfly.components.NavigationItem;
import org.patternfly.components.Page;
import org.patternfly.showcase.client.ShowcaseContext;
import org.patternfly.showcase.client.resources.Ids;

import static org.patternfly.showcase.client.resources.Routes.DOCUMENTATION;
import static org.patternfly.showcase.client.resources.Routes.documentation;

@Controller(route = DOCUMENTATION,
        selector = Ids.ROOT_CONTAINER,
        component = DocumentationElement.class,
        componentInterface = Documentation.Component.class)
public class DocumentationController
        extends AbstractComponentController<ShowcaseContext, Documentation.Component, Iterable<HTMLElement>>
        implements Documentation.Controller {

    private Navigation navigation;
    private DocumentationFactory factory;

    public DocumentationController() {
        navigation = Navigation.expandable()
                .add("Components", new NavigationItem("alert", "Alert", documentation("alert")))
                .add("Components", new NavigationItem("avatar", "Avatar", documentation("avatar")))
                .add("Components", new NavigationItem("badge", "Badge", documentation("badge")))
                .add("Components", new NavigationItem("brand", "Brand", documentation("brand")))
                .add("Components", new NavigationItem("button", "Button", documentation("button")))
                .add("Components", new NavigationItem("card", "Card", documentation("card")))
                .add("Components", new NavigationItem("chip", "Chip", documentation("chip")))
                .add("Components", new NavigationItem("chip-group", "Chip group", documentation("chip-group")))
                .add("Components", new NavigationItem("content", "Content", documentation("content")))
                .add("Components",
                        new NavigationItem("context-selector", "Context selector", documentation("context-selector")))
                .add("Components", new NavigationItem("data-list", "Data list", documentation("data-list")))
                .add("Components", new NavigationItem("data-table", "Data table", documentation("data-table")))
                .add("Components", new NavigationItem("dropdown", "Dropdown", documentation("dropdown")))
                .add("Components", new NavigationItem("empty-state", "Empty state", documentation("empty-state")))
                .add("Components", new NavigationItem("expandable", "Expandable", documentation("expandable")))
                .add("Components", new NavigationItem("label", "Label", documentation("label")))
                .add("Components", new NavigationItem("options-menu", "Options menu", documentation("options-menu")))
                .add("Components", new NavigationItem("select", "Select", documentation("select")))
                .add("Components", new NavigationItem("title", "Title", documentation("title")))
                .add("Components", new NavigationItem("toolbar", "Toolbar", documentation("toolbar")))
                .add("Demos", new NavigationItem("user-demo", "Users", documentation("user-demo")));
        factory = new DocumentationFactory();
    }

    @Override
    public void start() {
        Page.instance().add(navigation);
    }

    @AcceptParameter("id")
    public void setElement(String id) {
        navigation.setCurrent(id);
        Iterable<HTMLElement> elements = factory.get(id);
        getComponent().show(elements);
    }
}

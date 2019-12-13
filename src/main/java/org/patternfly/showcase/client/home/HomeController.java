package org.patternfly.showcase.client.home;

import com.github.nalukit.nalu.client.component.AbstractComponentController;
import com.github.nalukit.nalu.client.component.IsComponentCreator;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import elemental2.dom.HTMLElement;
import org.patternfly.components.Page;
import org.patternfly.showcase.client.ShowcaseContext;
import org.patternfly.showcase.client.resources.Ids;
import org.patternfly.showcase.client.resources.Routes;

@Controller(route = Routes.HOME,
        selector = Ids.ROOT_CONTAINER,
        component = HomeElement.class,
        componentInterface = Home.Component.class)
public class HomeController
        extends AbstractComponentController<ShowcaseContext, Home.Component, Iterable<HTMLElement>>
        implements Home.Controller, IsComponentCreator<Home.Component> {

    @Override
    public void start() {
        Page.instance().removeSidebar();
    }

    @Override
    public HomeElement createComponent() {
        return HomeElement.create();
    }
}

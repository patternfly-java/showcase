package org.patternfly.showcase.client.getstarted;

import com.github.nalukit.nalu.client.component.AbstractComponentController;
import com.github.nalukit.nalu.client.component.IsComponentCreator;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import elemental2.dom.HTMLElement;
import org.patternfly.client.components.Page;
import org.patternfly.showcase.client.ShowcaseContext;
import org.patternfly.showcase.client.resources.Ids;
import org.patternfly.showcase.client.resources.Routes;

@Controller(route = Routes.GET_STARTED,
        selector = Ids.ROOT_CONTAINER,
        component = GetStartedElement.class,
        componentInterface = GetStarted.Component.class)
public class GetStartedController
        extends AbstractComponentController<ShowcaseContext, GetStarted.Component, Iterable<HTMLElement>>
        implements GetStarted.Controller, IsComponentCreator<GetStarted.Component> {

    @Override
    public void start() {
        Page.instance().removeSidebar();
    }

    @Override
    public GetStartedElement createComponent() {
        return GetStartedElement.create();
    }
}

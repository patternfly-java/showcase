package org.patternfly.showcase.client.getintouch;

import com.github.nalukit.nalu.client.component.AbstractComponentController;
import com.github.nalukit.nalu.client.component.IsComponentCreator;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import elemental2.dom.HTMLElement;
import org.patternfly.client.components.Page;
import org.patternfly.showcase.client.ShowcaseContext;
import org.patternfly.showcase.client.resources.Ids;
import org.patternfly.showcase.client.resources.Routes;

@Controller(route = Routes.GET_IN_TOUCH,
        selector = Ids.ROOT_CONTAINER,
        component = GetInTouchElement.class,
        componentInterface = GetInTouch.Component.class)
public class GetInTouchController
        extends AbstractComponentController<ShowcaseContext, GetInTouch.Component, Iterable<HTMLElement>>
        implements GetInTouch.Controller, IsComponentCreator<GetInTouch.Component> {

    @Override
    public void start() {
        Page.instance().removeSidebar();
    }

    @Override
    public GetInTouchElement createComponent() {
        return GetInTouchElement.create();
    }
}

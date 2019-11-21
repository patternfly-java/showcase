package org.patternfly.showcase.client.contribute;

import com.github.nalukit.nalu.client.component.AbstractComponentController;
import com.github.nalukit.nalu.client.component.IsComponentCreator;
import com.github.nalukit.nalu.client.component.annotation.Controller;
import elemental2.dom.HTMLElement;
import org.patternfly.client.components.Page;
import org.patternfly.showcase.client.ShowcaseContext;
import org.patternfly.showcase.client.resources.Ids;
import org.patternfly.showcase.client.resources.Routes;

@Controller(route = Routes.CONTRIBUTE,
        selector = Ids.ROOT_CONTAINER,
        component = ContributeElement.class,
        componentInterface = Contribute.Component.class)
public class ContributeController
        extends AbstractComponentController<ShowcaseContext, Contribute.Component, Iterable<HTMLElement>>
        implements Contribute.Controller, IsComponentCreator<Contribute.Component> {

    @Override
    public void start() {
        Page.instance().removeSidebar();
    }

    @Override
    public ContributeElement createComponent() {
        return ContributeElement.create();
    }
}

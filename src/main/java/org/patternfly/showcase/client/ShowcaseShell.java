package org.patternfly.showcase.client;

import com.github.nalukit.nalu.client.component.AbstractShell;
import com.github.nalukit.nalu.client.component.annotation.Shell;
import com.github.nalukit.nalu.client.event.RouterStateEvent;
import org.patternfly.client.components.Navigation;
import org.patternfly.client.components.NavigationItem;
import org.patternfly.client.components.Page;
import org.patternfly.showcase.client.resources.Routes;

import static com.github.nalukit.nalu.client.event.RouterStateEvent.RouterState.ROUTING_DONE;
import static elemental2.dom.DomGlobal.document;
import static org.jboss.gwt.elemento.core.Elements.failSafeRemoveFromParent;
import static org.patternfly.client.components.AlertGroup.toast;
import static org.patternfly.client.components.Components.brand;
import static org.patternfly.client.components.Page.page;
import static org.patternfly.client.components.PageHeader.pageHeader;
import static org.patternfly.showcase.client.resources.Ids.ROOT_CONTAINER;
import static org.patternfly.showcase.client.resources.Routes.*;

@Shell(Routes.SHELL)
public class ShowcaseShell extends AbstractShell<ShowcaseContext> {

    private Navigation navigation;

    public ShowcaseShell() {
        navigation = Navigation.horizontal()
                .add(new NavigationItem("get-started", "Get Started", hash(GET_STARTED)))
                .add(new NavigationItem("documentation", "Documentation", documentation("alert")))
                .add(new NavigationItem("contribute", "Contribute", hash(CONTRIBUTE)))
                .add(new NavigationItem("get-in-touch", "Get in Touch", hash(GET_IN_TOUCH)));
    }

    @Override
    public void bind(ShellLoader shellLoader) {
        eventBus.addHandler(RouterStateEvent.TYPE, e -> {
            if (e.getState() == ROUTING_DONE) {
                String[] segments = split(e.getRoute());
                if (segments.length != 0) {
                    navigation.setCurrent(segments[0]);
                }
            }
        });
        shellLoader.continueLoading();
    }

    @Override
    public void attachShell() {
        document.body.appendChild(page(pageHeader(brand("./images/PF-Masthead-Logo.svg"), hash(HOME))
                .navigation(navigation), ROOT_CONTAINER).element());
        document.body.appendChild(toast().element());
    }

    @Override
    public void detachShell() {
        failSafeRemoveFromParent(Page.instance().element());
        failSafeRemoveFromParent(toast().element());
    }
}

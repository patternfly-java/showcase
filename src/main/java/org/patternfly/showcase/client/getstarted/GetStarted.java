package org.patternfly.showcase.client.getstarted;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

public interface GetStarted {

    interface Controller extends IsComponent.Controller {
    }


    interface Component extends IsComponent<Controller, Iterable<HTMLElement>> {
    }
}

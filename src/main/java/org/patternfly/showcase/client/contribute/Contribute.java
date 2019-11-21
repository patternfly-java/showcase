package org.patternfly.showcase.client.contribute;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

public interface Contribute {

    interface Controller extends IsComponent.Controller {
    }


    interface Component extends IsComponent<Controller, Iterable<HTMLElement>> {
    }
}

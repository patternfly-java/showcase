package org.patternfly.showcase.client.home;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

public interface Home {

    interface Controller extends IsComponent.Controller {
    }


    interface Component extends IsComponent<Controller, Iterable<HTMLElement>> {
    }
}

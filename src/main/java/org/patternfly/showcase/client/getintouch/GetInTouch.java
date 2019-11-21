package org.patternfly.showcase.client.getintouch;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

public interface GetInTouch {

    interface Controller extends IsComponent.Controller {
    }


    interface Component extends IsComponent<Controller, Iterable<HTMLElement>> {
    }
}

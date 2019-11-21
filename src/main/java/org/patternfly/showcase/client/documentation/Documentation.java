package org.patternfly.showcase.client.documentation;

import com.github.nalukit.nalu.client.component.IsComponent;
import elemental2.dom.HTMLElement;

public interface Documentation {

    interface Controller extends IsComponent.Controller {
    }


    interface Component extends IsComponent<Documentation.Controller, Iterable<HTMLElement>> {

        void show(Iterable<HTMLElement> elements);
    }
}

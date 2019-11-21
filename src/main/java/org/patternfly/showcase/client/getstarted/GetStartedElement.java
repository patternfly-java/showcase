package org.patternfly.showcase.client.getstarted;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.template.Templated;

import static java.util.Collections.singletonList;

@Templated("get-started.html#content")
abstract class GetStartedElement extends AbstractComponent<GetStarted.Controller, Iterable<HTMLElement>>
        implements GetStarted.Component, IsElement<HTMLElement> {

    static GetStartedElement create() {
        return new Templated_GetStartedElement();
    }

    @Override
    public void render() {
        initElement(singletonList(element()));
    }
}

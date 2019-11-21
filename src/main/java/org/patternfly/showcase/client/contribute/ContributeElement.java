package org.patternfly.showcase.client.contribute;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.template.Templated;

import static java.util.Collections.singletonList;

@Templated("contribute.html#content")
abstract class ContributeElement extends AbstractComponent<Contribute.Controller, Iterable<HTMLElement>>
        implements Contribute.Component, IsElement<HTMLElement> {

    static ContributeElement create() {
        return new Templated_ContributeElement();
    }

    @Override
    public void render() {
        initElement(singletonList(element()));
    }
}

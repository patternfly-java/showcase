package org.patternfly.showcase.client.home;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.template.Templated;

import static java.util.Collections.singletonList;

@Templated("home.html#content")
abstract class HomeElement extends AbstractComponent<Home.Controller, Iterable<HTMLElement>>
        implements Home.Component, IsElement<HTMLElement> {

    static HomeElement create() {
        return new Templated_HomeElement();
    }

    @Override
    public void render() {
        initElement(singletonList(element()));
    }
}

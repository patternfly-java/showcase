package org.patternfly.showcase.client.documentation;

import com.github.nalukit.nalu.client.component.AbstractComponent;
import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.gwt.elemento.core.Elements.div;

public class DocumentationElement extends AbstractComponent<Documentation.Controller, Iterable<HTMLElement>>
        implements Documentation.Component {

    @Override
    public void render() {
        initElement(singletonList(div().element()));
    }

    @Override
    public void onAttach() {
        PR.prettyPrint();
    }

    @Override
    public void show(Iterable<HTMLElement> elements) {
        initElement(elements);
    }
}

package org.patternfly.showcase.client.documentation;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.IsElement;

import static org.jboss.gwt.elemento.core.Elements.code;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.client.components.Components.pageSection;
import static org.patternfly.client.components.Components.title;
import static org.patternfly.client.resources.CSS.Size._4xl;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.content;
import static org.patternfly.client.resources.Constants.light;

class NotFound implements IsElement<HTMLElement> {

    private final HTMLElement root;

    NotFound(String id) {
        root = pageSection().css(modifier(light), "sc-page")
                .add(div().css(component(content))
                        .add(title(1, "Not found", _4xl))
                        .add(p().add("Unable to find documentation for ")
                                .add(code().textContent(id))
                                .add(".").element())).element();
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}

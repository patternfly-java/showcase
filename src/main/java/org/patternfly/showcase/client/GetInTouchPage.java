package org.patternfly.showcase.client;

import elemental2.dom.HTMLElement;
import org.jboss.elemento.IsElement;

import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.light;

class GetInTouchPage implements IsElement<HTMLElement> {

    @Override
    public HTMLElement element() {
        return section().css(modifier(light), "sc-page")
                .add(content()
                        .add(title(1, "Get in Touch"))
                        .add(p().textContent("Pending")))
                .element();
    }
}

package org.patternfly.showcase.client;

import elemental2.dom.HTMLElement;
import org.elemento.IsElement;

import static org.elemento.Elements.p;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.light;

class GetStartedElement implements IsElement<HTMLElement> {

    @Override
    public HTMLElement element() {
        return section().css(modifier(light), "sc-page")
                .add(content()
                        .add(title(1, "Get Started"))
                        .add(p().textContent("Pending")))
                .element();
    }
}

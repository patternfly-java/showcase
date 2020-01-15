package org.patternfly.showcase.client;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

import elemental2.dom.HTMLElement;
import org.elemento.IsElement;

import static org.elemento.Elements.p;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.light;

class PageFactory {

    private final Map<String, Supplier<IsElement<HTMLElement>>> pages;

    PageFactory() {
        pages = new HashMap<>();
        pages.put(Places.CONTRIBUTE, ContributeElement::new);
        pages.put(Places.GET_IN_TOUCH, GetInTouchElement::new);
        pages.put(Places.GET_STARTED, GetStartedElement::new);
        pages.put(Places.HOME, HomeElement::new);
    }

    IsElement<HTMLElement> get(String place) {
        if (place == null || place.length() == 0) {
            return new HomeElement();
        } else {
            return pages.getOrDefault(place, () -> new NotFound(place)).get();
        }
    }

    private static class NotFound implements IsElement<HTMLElement> {

        private final String place;

        private NotFound(String place) {
            this.place = place;
        }

        @Override
        public HTMLElement element() {
            return section().css(modifier(light))
                    .add(content()
                            .add(title(1, "Not Found"))
                            .add(p().textContent("Page " + place + " not found")))
                    .element();
        }
    }
}
package org.patternfly.showcase;

import org.patternfly.showcase.router.Page;
import org.patternfly.showcase.router.Place;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.style.Brightness.light;

class NotFound implements Page {

    private final Place place;

    NotFound(Place place) {
        this.place = place;
    }

    @Override
    public Iterable<HTMLElement> elements() {
        return singletonList(pageMainSection()
                .background(light)
                .css("sc-page")
                .add(textContent()
                        .add(title(1, "Not Found"))
                        .add(p().textContent("Page " + place.route + " not found")))
                .element());
    }
}

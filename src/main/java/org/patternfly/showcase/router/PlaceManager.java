package org.patternfly.showcase.router;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.URL;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.history;
import static elemental2.dom.DomGlobal.location;
import static elemental2.dom.DomGlobal.window;
import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.popstate;

public class PlaceManager {

    // ------------------------------------------------------ instance

    private static final Place NOT_FOUND = new Place("__404__");

    private final Function<Place, Page> notFound;
    private final Map<String, Place> routes;
    private final Map<Place, Supplier<Page>> places;
    private final Map<Place, Page> cache;
    private Supplier<HTMLElement> root;

    public PlaceManager(Function<Place, Page> notFound) {
        this.notFound = notFound;
        this.root = () -> document.body;
        this.routes = new HashMap<>();
        this.places = new HashMap<>();
        this.cache = new HashMap<>();
    }

    // ------------------------------------------------------ api

    public void register(Place place, Supplier<Page> page) {
        routes.put(place.route, place);
        places.put(place, page);
    }

    public void start(String selector) {
        start(() -> Elements.find(document, By.selector(selector)));
    }

    public void start(By selector) {
        start(() -> Elements.find(document, selector));
    }

    public void start(HTMLElement element) {
        start(() -> element);
    }

    public void start(Supplier<HTMLElement> root) {
        this.root = root;

        // bind document click and handle links with registered places
        bind(document, click, e -> {
            if (e.target instanceof HTMLAnchorElement) {
                String href = ((HTMLAnchorElement) e.target).href;
                Place place = place(href);
                if (place != null) {
                    e.preventDefault();
                    goTo(place);
                }
            }
        });

        // handle browser back/forward
        bind(window, popstate, event -> {
            if (event.state != null) {
                String route = String.valueOf(event.state);
                Place place = place(route);
                if (place != null) {
                    Page page = page(place);
                    showPage(page);
                }
            }
        });

        // go to home page (w/o pushing state)
        Place place = place(location.href);
        showPage(page(place));
        history.replaceState(place.route, "", location.href);
    }

    public void goTo(Place place) {
        showPage(page(place));
        history.pushState(place.route, "", place.route);
    }

    // ------------------------------------------------------ internal

    private Place place(String route) {
        return routes.get(pathname(route));
    }

    private Page page(Place place) {
        if (place != null) {
            if (cache.containsKey(place)) {
                return cache.get(place);
            } else {
                if (places.containsKey(place)) {
                    Supplier<Page> supplier = places.get(place);
                    Page page = supplier.get();
                    cache.put(place, page);
                    return page;
                } else {
                    return notFound(place);
                }
            }
        } else {
            return notFound(NOT_FOUND);
        }
    }

    private void showPage(Page page) {
        HTMLElement rootElement = root.get();
        removeChildrenFrom(rootElement);
        for (HTMLElement e : page.elements()) {
            rootElement.appendChild(e);
        }
    }

    private Page notFound(Place place) {
        if (notFound != null) {
            return notFound.apply(place);
        } else {
            return new DefaultNotFound();
        }
    }

    private String pathname(String route) {
        return new URL(route, location.origin).pathname;
    }

    private static class DefaultNotFound implements Page {

        @Override
        public Iterable<HTMLElement> elements() {
            return singletonList(div().style("display:grid;place-items:center;height:100vh")
                    .add(div().style("width:50%;height:50%;")
                            .add(h(1, "Error 404").style("font-size:3rem;text-align:center"))
                            .add(p().style("font-size:1.5rem;text-align:center")
                                    .add("You're lost. Try to take a step ")
                                    .add(a("javascript:history.back()").textContent("back"))
                                    .add(".")))
                    .element());
        }
    }
}

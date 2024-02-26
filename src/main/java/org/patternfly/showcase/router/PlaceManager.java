/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.showcase.router;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.EventTarget;
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

    private static final Place NOT_FOUND = new Place("/404", "Not found");

    private final Map<String, Place> routes;
    private final Map<Place, Supplier<Page>> places;
    private final List<BeforePlaceHandler> beforeHandlers;
    private final List<AfterPlaceHandler> afterHandlers;
    private Supplier<HTMLElement> root;
    private Function<String, String> title;
    private Function<Place, Page> notFound;
    private By linkSelector;

    public PlaceManager() {
        this.routes = new HashMap<>();
        this.places = new HashMap<>();
        this.beforeHandlers = new ArrayList<>();
        this.afterHandlers = new ArrayList<>();
        this.root = () -> document.body;
        this.title = Function.identity();
        this.notFound = place -> new DefaultNotFound();
        this.linkSelector = null;
    }

    // ------------------------------------------------------ builder

    public PlaceManager root(String selector) {
        return root(() -> Elements.find(document, By.selector(selector)));
    }

    public PlaceManager root(By selector) {
        return root(() -> Elements.find(document, selector));
    }

    public PlaceManager root(HTMLElement element) {
        return root(() -> element);
    }

    public PlaceManager root(Supplier<HTMLElement> root) {
        this.root = root;
        return this;
    }

    public PlaceManager title(Function<String, String> title) {
        this.title = title;
        return this;
    }

    public PlaceManager notFound(Function<Place, Page> notFound) {
        this.notFound = notFound;
        return this;
    }

    public PlaceManager beforePlace(BeforePlaceHandler beforePlace) {
        beforeHandlers.add(beforePlace);
        return this;
    }

    public PlaceManager afterPlace(AfterPlaceHandler afterPlace) {
        afterHandlers.add(afterPlace);
        return this;
    }

    public PlaceManager linkSelector(String selector) {
        return linkSelector(By.selector(selector));
    }

    public PlaceManager linkSelector(By selector) {
        this.linkSelector = selector;
        return this;
    }

    // ------------------------------------------------------ api

    public Place place(String route) {
        return routes.getOrDefault(route, NOT_FOUND);
    }

    public void register(Place place, Supplier<Page> page) {
        routes.put(place.route, place);
        places.put(place, page);
    }

    public void start() {
        bindClickHandler();
        bindHistoryHandler();
        Place place = place(location.pathname);
        if (place != null) {
            if (internalGoto(place)) {
                history.replaceState(place.route, "", location.pathname);
            }
        }
    }

    public void goTo(Place place) {
        if (place != null) {
            if (internalGoto(place)) {
                history.pushState(place.route, "", place.route);
            }
        }
    }

    // ------------------------------------------------------ internal

    private void bindClickHandler() {
        bind(document, click, e -> {
            String href = href(e);
            if (href != null) {
                URL url = new URL(href, location.origin);
                if (url.hash == null || url.hash.isEmpty()) {
                    Place place = place(url.pathname);
                    if (place != null) {
                        e.preventDefault();
                        internalGoto(place);
                        history.pushState(place.route, "", place.route);
                    }
                }
            }
        });
    }

    private String href(Event event) {
        String href = null;
        HTMLAnchorElement anchorElement = null;

        EventTarget target = event.target;
        if (target instanceof HTMLAnchorElement) {
            anchorElement = ((HTMLAnchorElement) target);
        } else {
            HTMLElement closest = Elements.closest(((Element) target), By.element("a"));
            if (closest instanceof HTMLAnchorElement) {
                anchorElement = ((HTMLAnchorElement) closest);
            }
        }
        if (anchorElement != null) {
            if (linkSelector != null) {
                if (anchorElement.matches(linkSelector.toString())) {
                    href = anchorElement.href;
                }
            } else {
                href = anchorElement.href;
            }
        }
        return href;
    }

    private void bindHistoryHandler() {
        bind(window, popstate, event -> {
            if (event.state != null) {
                String route = String.valueOf(event.state);
                Place place = place(route);
                if (place != null) {
                    internalGoto(place);
                }
            }
        });
    }

    private boolean internalGoto(Place place) {
        for (BeforePlaceHandler handler : beforeHandlers) {
            if (!handler.shouldGoTo(this, place)) {
                return false;
            }
        }
        Page page = page(place);
        if (place.title != null) {
            document.title = this.title.apply(place.title);
        }
        HTMLElement rootElement = place.root != null ? place.root.get() : root.get();
        removeChildrenFrom(rootElement);
        for (HTMLElement e : page.elements()) {
            rootElement.appendChild(e);
        }
        for (AfterPlaceHandler handler : afterHandlers) {
            handler.afterPlace(this, place, page);
        }
        return true;
    }

    private Page page(Place place) {
        if (place != null) {
            if (places.containsKey(place)) {
                Supplier<Page> supplier = places.get(place);
                return supplier.get();
            } else {
                return notFound(place);
            }
        } else {
            return notFound(NOT_FOUND);
        }
    }

    private Page notFound(Place place) {
        if (notFound != null) {
            return notFound.apply(place);
        } else {
            return new DefaultNotFound();
        }
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

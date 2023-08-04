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
package org.patternfly.showcase.client;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.light;

class PageFactory {

    private final Map<String, Supplier<IsElement<HTMLElement>>> pages;

    PageFactory() {
        pages = new HashMap<>();
        pages.put(Places.CONTRIBUTE, ContributePage::new);
        pages.put(Places.GET_IN_TOUCH, GetInTouchPage::new);
        pages.put(Places.GET_STARTED, GetStartedPage::new);
        pages.put(Places.HOME, HomePage::new);
    }

    IsElement<HTMLElement> get(String place) {
        if (place == null || place.isEmpty()) {
            return new HomePage();
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
                    .add(content().add(title(1, "Not Found")).add(p().textContent("Page " + place + " not found"))).element();
        }
    }
}

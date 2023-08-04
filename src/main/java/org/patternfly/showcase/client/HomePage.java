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

import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.light;

class HomePage implements IsElement<HTMLElement> {

    @Override
    public HTMLElement element() {
        return section().css(modifier(light), "sc-page")
                .add(content().add(title(1, "PatternFly - Java"))
                        .add(p().add("PatternFly Java is a Java implementation of PatternFly 4 based on GWT and ")
                                .add(a("https://github.com/hal/elemento").textContent("Elemento")).add(".")))
                .element();
    }
}

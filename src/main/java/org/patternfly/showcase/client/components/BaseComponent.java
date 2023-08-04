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
package org.patternfly.showcase.client.components;

import java.util.Iterator;
import java.util.List;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.Size._4xl;
import static org.patternfly.resources.Constants.content;

public class BaseComponent implements Iterable<HTMLElement> {

    final HTMLElement root;

    BaseComponent(String title, HTMLElement description, List<Snippet> snippets) {
        root = section().css("sc-page").add(div().css(component(content)).add(title(1, title, _4xl)).add(description))
                .addAll(snippets.stream().map(Snippet::element).collect(toList())).element();
    }

    @Override
    public Iterator<HTMLElement> iterator() {
        return singletonList(root).iterator();
    }
}

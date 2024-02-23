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
package org.patternfly.showcase.component;

import org.jboss.elemento.Id;
import org.patternfly.component.list.SimpleList;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.list.SimpleList.simpleList;
import static org.patternfly.component.list.SimpleListGroup.simpleListGroup;
import static org.patternfly.component.list.SimpleListItem.simpleListItem;
import static org.patternfly.showcase.Code.code;

public class SimpleListComponent extends SnippetPage {

    public SimpleListComponent() {
        super(SimpleList.class, "Simple list",
                "https://www.patternfly.org/components/simple-list/design-guidelines",
                p().textContent(
                                "A simple list provides a list of selectable items that can be shown within a page. Each item is described by a text label. The list may be divided into logical sections by introducing group headers.")
                        .element());

        addSnippet(new Snippet("simple-list", "Simple list",
                code.get("simple-list"), () ->
                // @code-start:simple-list
                div()
                        .add(simpleList()
                                .addItems(range(1, 4).boxed().collect(toList()), index ->
                                        simpleListItem(Id.build("simple-list", String.valueOf(index)),
                                                "List item " + index)))
                        .element()
                // @code-end:simple-list
        ));

        addSnippet(new Snippet("grouped-list", "Grouped list",
                code.get("grouped-list"), () ->
                // @code-start:grouped-list
                div()
                        .add(simpleList()
                                .addGroup(simpleListGroup("Group 1")
                                        .addItems(range(1, 5).boxed().collect(toList()), index ->
                                                simpleListItem(Id.build("grouped-list-1", String.valueOf(index)),
                                                        "List item " + index)))
                                .addGroup(simpleListGroup("Group 2")
                                        .addItems(range(1, 5).boxed().collect(toList()), index ->
                                                simpleListItem(Id.build("grouped-list-2", String.valueOf(index)),
                                                        "List item " + index))))
                        .element()
                // @code-end:grouped-list
        ));
    }
}

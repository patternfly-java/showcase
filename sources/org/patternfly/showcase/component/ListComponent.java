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

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.list.List.list;
import static org.patternfly.component.list.ListItem.listItem;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.PredefinedIcon.bookOpen;
import static org.patternfly.style.PredefinedIcon.desktop;
import static org.patternfly.style.PredefinedIcon.key;

public class ListComponent extends SnippetPage {

    public ListComponent() {
        super("List",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/list/List.html",
                "https://www.patternfly.org/components/list/design-guidelines",
                p().textContent("A list component embeds a formatted list (bulleted or numbered list) into page content.")
                        .element());

        addSnippet(new Snippet("list-basic", "Basic",
                code.get("list-basic"), () ->
                // @code-start:list-basic
                div()
                        .add(list()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-basic
        ));

        addSnippet(new Snippet("list-inline", "Inline",
                code.get("list-inline"), () ->
                // @code-start:list-inline
                div()
                        .add(list().inline()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-inline
        ));

        addSnippet(new Snippet("list-ordered", "Ordered",
                code.get("list-ordered"), () ->
                // @code-start:list-ordered
                div()
                        .add(list(ol())
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-ordered
        ));

        addSnippet(new Snippet("list-plain", "Plain",
                code.get("list-plain"), () ->
                // @code-start:list-plain
                div()
                        .add(list().plain()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-plain
        ));

        addSnippet(new Snippet("list-bordered", "With horizontal rules",
                code.get("list-bordered"), () ->
                // @code-start:list-bordered
                div()
                        .add(list().plain().bordered()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-bordered
        ));

        addSnippet(new Snippet("list-icons", "With icons",
                code.get("list-icons"), () ->
                // @code-start:list-icons
                div()
                        .add(list().plain()
                                .addItem(listItem().text("First").icon(bookOpen))
                                .addItem(listItem().text("Second").icon(key))
                                .addItem(listItem().text("Third").icon(desktop)))
                        .element()
                // @code-end:list-icons
        ));

        addSnippet(new Snippet("list-icons-lg", "With large icons",
                code.get("list-icons-lg"), () ->
                // @code-start:list-icons-lg
                div()
                        .add(list().plain().largeIcons()
                                .addItem(listItem().text("First").icon(bookOpen))
                                .addItem(listItem().text("Second").icon(key))
                                .addItem(listItem().text("Third").icon(desktop)))
                        .element()
                // @code-end:list-icons-lg
        ));
    }
}

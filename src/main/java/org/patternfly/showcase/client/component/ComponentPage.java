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
package org.patternfly.showcase.client.component;

import java.util.List;

import org.patternfly.showcase.client.Page;

import elemental2.dom.HTMLElement;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.button.ButtonElement.link;
import static org.patternfly.component.page.PageMainBody.pageMainBody;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.floatRight;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.util;
import static org.patternfly.layout.PredefinedIcon.fas;
import static org.patternfly.layout.PredefinedIcon.pfIcon;
import static org.patternfly.layout.Size._4xl;

public class ComponentPage implements Page {

    private final List<HTMLElement> elements;
    final HTMLElement snippets;

    ComponentPage(String title, String javadocLink, String designLink, HTMLElement description) {
        elements = asList(
                pageMainSection()
                        .light()
                        .limitWidth()
                        .addBody(pageMainBody()
                                .add(div().css(util(floatRight))
                                        .add(button(link)
                                                .plain()
                                                .href(designLink)
                                                .target("patternfly")
                                                .attr("title", "Design guidelines")
                                                .addIcon(fas("swatchbook"))))
                                .add(div().css(util(floatRight))
                                        .add(button(link)
                                                .plain()
                                                .href(javadocLink)
                                                .target("javadoc")
                                                .attr("title", "API documentation")
                                                .addIcon(pfIcon("catalog"))))
                                .add(div().css(component(content))
                                        .add(title(1, title, _4xl))
                                        .add(description)))
                        .element(),
                pageMainSection().css(modifier("light-100"))
                        .fill()
                        .add(snippets = div().element())
                        .element());
    }

    void addSnippet(Snippet snippet) {
        snippets.appendChild(snippet.element());
    }

    @Override
    public Iterable<HTMLElement> elements() {
        return elements;
    }
}

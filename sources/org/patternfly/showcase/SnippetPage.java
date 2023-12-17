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
package org.patternfly.showcase;

import java.util.List;

import org.jboss.elemento.By;

import elemental2.dom.HTMLElement;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.page.PageMainBody.pageMainBody;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.floatRight;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.PredefinedIcon.fas;
import static org.patternfly.style.PredefinedIcon.pfIcon;
import static org.patternfly.style.Size._4xl;
import static org.patternfly.thirdparty.popper.Placement.auto;

public class SnippetPage implements Page {

    private final List<HTMLElement> elements;
    final HTMLElement snippets;

    public SnippetPage(String title, String javadocLink, String designLink, HTMLElement description) {
        elements = asList(
                pageMainSection()
                        .background(light)
                        .limitWidth()
                        .addBody(pageMainBody()
                                .add(div().css(util(floatRight))
                                        .add(button(a())
                                                .id("design-guidelines")
                                                .plain()
                                                .href(designLink)
                                                .target("patternfly")
                                                .icon(fas("swatchbook")))
                                        .add(tooltip(By.id("design-guidelines"), "Design guidelines")
                                                .placement(auto)))
                                .add(div().css(util(floatRight))
                                        .add(button(a())
                                                .id("api-documentation")
                                                .plain()
                                                .href(javadocLink)
                                                .target("javadoc")
                                                .icon(pfIcon("catalog")))
                                        .add(tooltip(By.id("api-documentation"), "API documentation")
                                                .placement(auto)))
                                .add(div().css(component(content))
                                        .add(title(1, _4xl, title))
                                        .add(description)))
                        .element(),
                pageMainSection().css(modifier("light-100"))
                        .fill()
                        .add(snippets = div().element())
                        .element());
    }

    public void addSnippet(Snippet snippet) {
        snippets.appendChild(snippet.element());
    }

    @Override
    public Iterable<HTMLElement> elements() {
        return elements;
    }
}

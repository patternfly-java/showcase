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

import org.patternfly.component.card.Card;
import org.patternfly.layout.gallery.Gallery;
import org.patternfly.showcase.router.Page;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.img;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.card.CardBody.cardBody;
import static org.patternfly.component.card.CardFooter.cardFooter;
import static org.patternfly.component.card.CardTitle.cardTitle;
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.page.PageMainBody.pageMainBody;
import static org.patternfly.component.page.PageMainGroup.pageMainGroup;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.component.toolbar.Toolbar.toolbar;
import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.layout.flex.AlignItems.center;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.gallery.Gallery.gallery;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Brightness.light100;
import static org.patternfly.style.Classes.hidden;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.sticky;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Size._4xl;

public class ComponentsPage implements Page {

    @Override
    public Iterable<HTMLElement> elements() {
        return singletonList(pageMainGroup()
                .add(pageMainSection().limitWidth().background(light)
                        .add(pageMainBody()
                                .add(textContent()
                                        .add(flex().alignItems(breakpoints(default_, center))
                                                .add(title(1, _4xl, "All components"))))))
                .add(pageMainSection().fill().background(light100)
                        .add(div().css(util("display-flext"), "ws-mdx-child-template")
                                .add(div().css("ws-mdx-content")
                                        .add(div().css("landing-pages")
                                                .add(div().css("ws-section-gallery ws-section-gallery-full-width")
                                                        // TODO Implement sticky toolbar once implemented
                                                        .add(toolbar().css(modifier(sticky))
                                                                .addContent(toolbarContent()
                                                                        .addItem(toolbarItem()
                                                                                .add("Toolbar not yet implemented")))
                                                                .addContent(toolbarContent().css(modifier(hidden))))
                                                        .add(componentGallery()))))))
                .element());
    }

    private Gallery componentGallery() {
        return gallery().gutter().run(gallery -> components.forEach(name -> {
            Component component = components.get(name);
            gallery.add(div().attr("span", 4).run(div -> {
                if (component.implemented()) {
                    div.add(a(component.place).css("ws-section-gallery-item")
                            .add(componentCard(component)));
                } else {
                    div.add(componentCard(component));
                }
            }));
        }));
    }

    private Card componentCard(Component component) {
        return card()
                .addTitle(cardTitle(component.title))
                .addBody(cardBody()
                        .add(img(component.illustration())
                                .attr("alt", component.title)))
                .run(card -> {
                    if (!component.implemented()) {
                        card.attr(tabindex, 0)
                                .addFooter(cardFooter()
                                        .add(label("Not yet implemented").compact()));
                    } else {
                        card.css(modifier("selectable-raised"));
                    }
                });
    }
}

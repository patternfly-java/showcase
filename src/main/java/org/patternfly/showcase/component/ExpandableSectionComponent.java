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

import org.patternfly.component.badge.Badge;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.expandable.ExpandableSection.expandableSection;
import static org.patternfly.component.expandable.ExpandableSectionContent.expandableSectionContent;
import static org.patternfly.component.expandable.ExpandableSectionToggle.expandableSectionToggle;
import static org.patternfly.component.expandable.ExpandableSectionToggleText.expandableSectionToggleText;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.layout.PredefinedIcon.fas;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.showcase.Code.code;

public class ExpandableSectionComponent extends SnippetPage {

    public ExpandableSectionComponent() {
        super("Expandable section",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/expandable/ExpandableSection.html",
                "https://www.patternfly.org/components/expandable-section/design-guidelines",
                p().textContent(
                        "An expandable section component is used to support progressive disclosure in a form or page by hiding additional content when you don't want it to be shown by default. An expandable section can contain any type of content such as plain text, form inputs, and charts.")
                        .element());

        addSnippet(new Snippet("expandable-section-basic", "Basic",
                code.get("expandable-section-basic"), () ->
                // @code-start:expandable-section-basic
                div()
                        .add(expandableSection()
                                .addToggle(expandableSectionToggle("Show more"))
                                .addContent(expandableSectionContent()
                                        .textContent("This content is visible only when the component is expanded.")))
                        .element()
        // @code-end:expandable-section-basic
        ));

        addSnippet(new Snippet("expandable-section-dynamic-text", "Basic with dynamic toggle text",
                code.get("expandable-section-dynamic-text"), () ->
                // @code-start:expandable-section-dynamic-text
                div()
                        .add(expandableSection()
                                .addToggle(expandableSectionToggle("Show more", "Show less"))
                                .addContent(expandableSectionContent()
                                        .textContent("This content is visible only when the component is expanded.")))
                        .element()
        // @code-end:expandable-section-dynamic-text
        ));

        addSnippet(new Snippet("expandable-section-detached", "Detached",
                code.get("expandable-section-detached"), () ->
                // @code-start:expandable-section-detached
                div()
                        .add(stack().gutter()
                                .addItem(stackItem()
                                        .add(expandableSection("detached-content")
                                                .detachedFrom("detached-toggle")
                                                .addContent(expandableSectionContent()
                                                        .textContent(
                                                                "This content is visible only when the component is expanded."))))
                                .addItem(stackItem()
                                        .add(expandableSection("detached-toggle")
                                                .detachedFrom("detached-content")
                                                .addToggle(expandableSectionToggle("Show more", "Show less")
                                                        .up()))))
                        .element()
        // @code-end:expandable-section-detached
        ));

        addSnippet(new Snippet("expandable-section-disclosure", "Disclosure variation",
                code.get("expandable-section-disclosure"), () ->
                // @code-start:expandable-section-disclosure
                div()
                        .add(expandableSection()
                                .disclosure()
                                .addToggle(expandableSectionToggle("Show more", "Show less"))
                                .addContent(expandableSectionContent()
                                        .textContent("This content is visible only when the component is expanded.")))
                        .element()
        // @code-end:expandable-section-disclosure
        ));

        addSnippet(new Snippet("expandable-section-indented", "Indented",
                code.get("expandable-section-indented"), () ->
                // @code-start:expandable-section-indented
                div()
                        .add(expandableSection()
                                .indented()
                                .addToggle(expandableSectionToggle("Show more", "Show less"))
                                .addContent(expandableSectionContent()
                                        .textContent("This content is visible only when the component is expanded.")))
                        .element()
        // @code-end:expandable-section-indented
        ));

        addSnippet(new Snippet("expandable-section-custom-toggle", "With custom toggle content",
                code.get("expandable-section-custom-toggle"), () -> {
                    // @code-start:expandable-section-custom-toggle
                    Badge badge = badge(4).read();
                    return div()
                            .add(expandableSection()
                                    .onToggle((component, expanded) -> badge.count(badge.count() + 1))
                                    .addToggle(expandableSectionToggle()
                                            .addText(expandableSectionToggleText()
                                                    .add(div()
                                                            .add(span().textContent("You can also use icons "))
                                                            .add(inlineIcon(fas("check-circle")))
                                                            .add(span().textContent(" or badges "))
                                                            .add(badge)
                                                            .add(span().textContent(" !")))))
                                    .addContent(expandableSectionContent()
                                            .textContent(
                                                    "This content is visible only when the component is expanded.")))
                            .element();
                    // @code-end:expandable-section-custom-toggle
                }));

        addSnippet(new Snippet("expandable-section-truncate", "Truncate",
                code.get("expandable-section-truncate"), () ->
                // @code-start:expandable-section-truncate
                div()
                        .add(expandableSection()
                                .truncate(2)
                                .addContent(expandableSectionContent()
                                        .textContent(LoremIpsum.paragraphs(20)))
                                .addToggle(expandableSectionToggle("Show more", "Show less")))
                        .element()
        // @code-end:expandable-section-truncate
        ));
    }
}

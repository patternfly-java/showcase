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

import org.patternfly.component.Dropdown;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.img;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.head;
import static org.patternfly.component.Card.header;
import static org.patternfly.component.Card.Head.actions;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noFill;

@Deprecated
public class CardComponent extends ComponentPage {

    public CardComponent() {
        super("Card",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/components/card/design-guidelines",
                p().textContent(
                        "A card is a flexible element for containing any kind of content. Cards are used on dashboards, in data displays (e.g. Card View), or for positioning content on a page.")
                        .element());

        addSnippet(new Snippet("simple-card", "Simple card", "Resources.get().cardSimple().getText()", () -> div()
                .add(card().add(header().textContent("Header")).add(body().textContent("Body"))
                        .add(footer().textContent("Footer")))
                .element()));

        addSnippet(new Snippet("card-image", "Card with an image and actions",
                "Resources.get().cardImageActions().getText()",
                () -> div()
                        .add(card()
                                .add(head().add(img("./pf_logo.svg").style("width: 300px"))
                                        .add(actions().add(Dropdown.<String> kebab().right().add("Link").add("Action")
                                                .addSeparator().add("Separated Link")).add(input(checkbox))))
                                .add(header().textContent("Header")).add(body().textContent("Body"))
                                .add(footer().textContent("Footer")))
                        .element()));

        addSnippet(new Snippet("card-header", "Card header in card head",
                "Resources.get().cardHeaderInHead().getText()",
                () -> div().add(card()
                        .add(head()
                                .add(actions().add(Dropdown
                                        .<String> kebab().right().add("Link").add("Action").addSeparator()
                                        .add("Separated Link")).add(input(checkbox)))
                                .add(header().textContent(
                                        "This is a really really really really really really really really really really long header")))
                        .add(header().textContent("Header")).add(body().textContent("Body"))
                        .add(footer().textContent("Footer"))).element()));

        addSnippet(new Snippet("card-actions", "Only actions in card head (no header/footer)",
                "Resources.get().cardActionsInHead().getText()",
                () -> div().add(card()
                        .add(head().add(actions().add(Dropdown.<String> kebab().right().add("Link")
                                .add("Action").addSeparator().add("Separated Link")).add(input(checkbox))))
                        .add(body().textContent(
                                "This is the card body, there are only actions in the card head.")))
                        .element()));

        addSnippet(new Snippet("card-image-only", "Only image in the card head",
                "Resources.get().cardImageInHead().getText()",
                () -> div()
                        .add(card().add(head().add(img("./pf_logo.svg").style("width: 300px")))
                                .add(header().textContent("Header")).add(body().textContent("Body"))
                                .add(footer().textContent("Footer")))
                        .element()));

        addSnippet(new Snippet("card-no-footer", "Card with no footer", "Resources.get().cardNoFooter().getText()",
                () -> div()
                        .add(card()
                                .add(header().textContent("Header")).add(
                                        body().textContent("This card has no footer")))
                        .element()));

        addSnippet(new Snippet("card-no-header", "Card with no header", "Resources.get().cardNoHeader().getText()",
                () -> div().add(card().add(body().textContent("This card has no header"))
                        .add(footer().textContent("Footer"))).element()));

        addSnippet(new Snippet("card-content",
                "Card with only a content section", "Resources.get().cardContentOnly().getText()", () -> div()
                        .add(card().add(body().textContent("Body"))).element()));

        addSnippet(new Snippet("card-m-body", "Card with multiple body sections",
                "Resources.get().cardMultipleBodies().getText()",
                () -> div()
                        .add(card().add(header().textContent("Header")).add(body().textContent("Body"))
                                .add(body().textContent("Body")).add(body().textContent("Body")).add(
                                        footer().textContent("Footer")))
                        .element()));

        addSnippet(new Snippet("card-body-fit", "Card with only one body that fills",
                "Resources.get().cardBodyFill().getText()",
                () -> div()
                        .add(card().style("min-height: 30em;").add(header().textContent("Header"))
                                .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
                                .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
                                .add(body().textContent("Body")).add(footer().textContent("Footer")))
                        .element()));

        addSnippet(new Snippet("card-hover", "Card hover example", "Resources.get().cardHover().getText()",
                () -> div()
                        .add(card().hoverable().add(header().textContent("Header"))
                                .add(body().textContent("Body")).add(footer().textContent("Footer")))
                        .element()));

        addSnippet(new Snippet("card-compact", "Card compact example", "Resources.get().cardCompact().getText()",
                () -> div()
                        .add(card().compact().add(header().textContent("Header"))
                                .add(body().textContent("Body")).add(footer().textContent("Footer")))
                        .element()));
    }
}

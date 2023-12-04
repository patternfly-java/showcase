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
import org.patternfly.component.card.CardActions;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.img;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.brand.Brand.brand;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.card.CardActions.cardActions;
import static org.patternfly.component.card.CardBody.cardBody;
import static org.patternfly.component.card.CardExpandableContent.cardExpandableContent;
import static org.patternfly.component.card.CardFooter.cardFooter;
import static org.patternfly.component.card.CardHeader.cardHeader;
import static org.patternfly.component.card.CardSelectableActions.cardSelectableActions;
import static org.patternfly.component.card.CardTitle.cardTitle;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.actionMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noFill;
import static org.patternfly.layout.Classes.util;
import static org.patternfly.layout.PredefinedIcon.ellipsisV;
import static org.patternfly.showcase.Code.code;

public class CardComponent extends SnippetPage {

    public CardComponent() {
        super("Card",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/card/Card.html",
                "https://www.patternfly.org/components/card/design-guidelines",
                p().textContent(
                        "A card is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.")
                        .element());

        addSnippet(new Snippet("card-basic", "Basic cards",
                code.get("card-basic"), () ->
                // @code-start:card-basic
                div()
                        .add(card()
                                .addTitle(cardTitle("Title"))
                                .addBody(cardBody().textContent("Body"))
                                .addFooter(cardFooter().textContent("Footer")))
                        .element()
        // @code-end:card-basic
        ));

        addSnippet(new Snippet("card-modifiers", "Modifiers",
                code.get("card-modifiers"), () -> {
                    // @code-start:card-modifiers
                    Card card = card();
                    return div()
                            .add(div().css(util("mb-md"))
                                    .add(checkbox("card-modifiers-compact", "card-modifiers", "compact")
                                            .onChange((c, value) -> card.compact(value)))
                                    .add(checkbox("card-modifiers-flat", "card-modifiers", "flat")
                                            .onChange((c, value) -> card.flat(value)))
                                    .add(checkbox("card-modifiers-rounded", "card-modifiers", "rounded")
                                            .onChange((c, value) -> card.rounded(value)))
                                    .add(checkbox("card-modifiers-large", "card-modifiers", "large")
                                            .onChange((c, value) -> card.large(value)))
                                    .add(checkbox("card-modifiers-fullHeight", "card-modifiers", "fullHeight")
                                            .onChange((c, value) -> card.fullHeight(value)))
                                    .add(checkbox("card-modifiers-plain", "card-modifiers", "plain")
                                            .onChange((c, value) -> card.plain(value))))
                            .add(div().style("height", "15rem")
                                    .add(card
                                            .addTitle(cardTitle("Title"))
                                            .addBody(cardBody().textContent("Body"))
                                            .addFooter(cardFooter().textContent("Footer"))))
                            .element();
                    // @code-end:card-modifiers
                }));

        addSnippet(new Snippet("card-header-image", "Header images and actions",
                code.get("card-header-image"), () -> {
                    // @code-start:card-header-image
                    Dropdown dropdown = dropdown()
                            .addToggle(menuToggle(ellipsisV, "kebab dropdown toggle"))
                            .addMenu(menu()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(actionMenuItem("item-0", "Action"))
                                                    .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                    .addItem(actionMenuItem("item-2", "Disabled action")
                                                            .disabled())
                                                    .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                            .disabled())
                                                    .addDivider()
                                                    .addItem(actionMenuItem("item-4", "Separated action"))
                                                    .addItem(linkMenuItem("item-5", "Separated link", "#home")))));
                    CardActions cardActions = cardActions();
                    return div()
                            .add(card()
                                    .addHeader(cardHeader()
                                            .addActions(cardActions
                                                    .add(dropdown)
                                                    .add(checkbox("card-header-image-check", "card-header-image-check")))
                                            .add(brand("https://www.patternfly.org/assets/images/pf_logo.svg")
                                                    .style("width", "300px")))
                                    .addTitle(cardTitle("Title"))
                                    .addBody(cardBody().textContent("Body"))
                                    .addFooter(cardFooter().textContent("Footer")))
                            .add(div().css(util("mt-md"))
                                    .add(checkbox("card-header-image-no-offset", "card-header-image-no-offset", "no offset")
                                            .onChange((c, value) -> cardActions.noOffset(value))))
                            .element();
                    // @code-end:card-header-image
                }));

        addSnippet(new Snippet("card-title-inline", "Title inline with images and actions",
                code.get("card-title-inline"), () -> {
                    // @code-start:card-title-inline
                    Dropdown dropdown = dropdown()
                            .addToggle(menuToggle(ellipsisV, "kebab dropdown toggle"))
                            .addMenu(menu()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(actionMenuItem("item-0", "Action"))
                                                    .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                    .addItem(actionMenuItem("item-2", "Disabled action")
                                                            .disabled())
                                                    .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                            .disabled())
                                                    .addDivider()
                                                    .addItem(actionMenuItem("item-4", "Separated action"))
                                                    .addItem(linkMenuItem("item-5", "Separated link", "#home")))));
                    return div()
                            .add(card()
                                    .addHeader(cardHeader()
                                            .addTitle(cardTitle(
                                                    "This is a really really really really really really really really really really long header"))
                                            .addActions(cardActions()
                                                    .add(dropdown)
                                                    .add(checkbox("card-title-inline-check", "card-title-inline-check"))))
                                    .addBody(cardBody().textContent("Body"))
                                    .addFooter(cardFooter().textContent("Footer")))
                            .element();
                    // @code-end:card-title-inline
                }));

        addSnippet(new Snippet("card-header-no-title", "Card header without title",
                code.get("card-header-no-title"), () -> {
                    // @code-start:card-header-no-title
                    Dropdown dropdown = dropdown()
                            .addToggle(menuToggle(ellipsisV, "kebab dropdown toggle"))
                            .addMenu(menu()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(actionMenuItem("item-0", "Action"))
                                                    .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                    .addItem(actionMenuItem("item-2", "Disabled action")
                                                            .disabled())
                                                    .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                            .disabled())
                                                    .addDivider()
                                                    .addItem(actionMenuItem("item-4", "Separated action"))
                                                    .addItem(linkMenuItem("item-5", "Separated link", "#home")))));
                    return div()
                            .add(card()
                                    .addHeader(cardHeader()
                                            .addActions(cardActions()
                                                    .add(dropdown)
                                                    .add(checkbox("card-header-no-title-check", "card-header-no-title-check"))))
                                    .addBody(cardBody()
                                            .textContent("This is the card body. There are only actions in the card head.")))
                            .element();
                    // @code-end:card-header-no-title
                }));

        addSnippet(new Snippet("card-heading", "With HTML heading element",
                code.get("card-heading"), () ->
                // @code-start:card-heading
                div()
                        .add(card()
                                .addTitle(cardTitle("Title within an <h4> element", 4))
                                .addBody(cardBody().textContent("Body"))
                                .addFooter(cardFooter().textContent("Footer")))
                        .element()
        // @code-end:card-heading
        ));

        addSnippet(new Snippet("card-multiple-bodies", "With multiple body sections",
                code.get("card-multiple-bodies"), () ->
                // @code-start:card-multiple-bodies
                div()
                        .add(card()
                                .addTitle(cardTitle("Title"))
                                .addBody(cardBody().textContent("Body"))
                                .addBody(cardBody().textContent("Body"))
                                .addBody(cardBody().textContent("Body"))
                                .addFooter(cardFooter().textContent("Footer")))
                        .element()
        // @code-end:card-multiple-bodies
        ));

        addSnippet(new Snippet("card-primary-body-fill", "With a primary body section that fills",
                code.get("card-primary-body-fill"), () ->
                // @code-start:card-primary-body-fill
                div()
                        .add(card().style("min-height", "30em")
                                .addTitle(cardTitle("Title"))
                                .addBody(cardBody().noFill().textContent("Body " + modifier(noFill)))
                                .addBody(cardBody().noFill().textContent("Body " + modifier(noFill)))
                                .addBody(cardBody().textContent("Body"))
                                .addFooter(cardFooter().textContent("Footer")))
                        .element()
        // @code-end:card-primary-body-fill
        ));

        addSnippet(new Snippet("card-selectable", "Selectable",
                code.get("card-selectable"), () ->
                // @code-start:card-selectable
                div()
                        .add(card().name("selectable-card")
                                .selectable((c, selected) -> console.log("card(" + c.element().id + ") selected: " + selected))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("First card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card is selectable.")))
                        .add(card().name("selectable-card")
                                .selectable((c, selected) -> console.log("card(" + c.element().id + ") selected: " + selected))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("Second card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card is selectable.")))
                        .add(card().name("selectable-card").disabled()
                                .selectable((c, selected) -> console.log("card(" + c.element().id + ") selected: " + selected))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("Third card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card is selectable but disabled.")))
                        .element()
        // @code-end:card-selectable
        ));

        addSnippet(new Snippet("card-single-selectable", "Single selectable",
                code.get("card-single-selectable"), () ->
                // @code-start:card-single-selectable
                div()
                        .add(card().name("single-selectable-card")
                                .selectable(single,
                                        (c, selected) -> console.log("card(" + c.element().id + ") selected: " + selected))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("First card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card is single selectable.")))
                        .add(card().name("single-selectable-card")
                                .selectable(single,
                                        (c, selected) -> console.log("card(" + c.element().id + ") selected: " + selected))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("Second card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card is single selectable.")))
                        .add(card().name("single-selectable-card").disabled()
                                .selectable(single,
                                        (c, selected) -> console.log("card(" + c.element().id + ") selected: " + selected))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("Third card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card is single selectable but disabled.")))
                        .element()
        // @code-end:card-single-selectable
        ));

        addSnippet(new Snippet("card-clickable", "Clickable",
                code.get("card-clickable"), () ->
                // @code-start:card-clickable
                div()
                        .add(card().name("clickable-card")
                                .clickable((e, c) -> console.log("Card clicked: " + c.element().id))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("First card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card performs an action on click.")))
                        .add(card().name("clickable-card")
                                .clickable("#c-card")
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("Second card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card can navigate to a link on click.")))
                        .add(card().name("clickable-card").disabled()
                                .clickable((e, c) -> console.log("Selected card: " + c.element().id))
                                .addHeader(cardHeader()
                                        .addTitle(cardTitle("Third card"))
                                        .addActions(cardActions().noOffset()
                                                .addSelectableActions(cardSelectableActions())))
                                .addBody(cardBody().textContent("This card is single clickable but disabled.")))
                        .element()
        // @code-end:card-clickable
        ));

        addSnippet(new Snippet("card-clickable-selectable", "Clickable and selectable",
                code.get("card-clickable-selectable"), () -> {
                    // @code-start:card-clickable-selectable
                    Card card = card();
                    return div()
                            .add(card.name("clickable-selectable-card")
                                    .clickable()
                                    .selectable()
                                    .addHeader(cardHeader()
                                            .addTitle(cardTitle()
                                                    .add(button("First card")
                                                            .link()
                                                            .inline()
                                                            .onClick((e, b) -> card.select(!card.selected()))))
                                            .addActions(cardActions().noOffset()
                                                    .addSelectableActions(cardSelectableActions())))
                                    .addBody(cardBody().textContent(
                                            "This card performs an action upon clicking the card title and is selectable.")))
                            .add(card().name("clickable-selectable-card")
                                    .clickable()
                                    .selectable()
                                    .addHeader(cardHeader()
                                            .addTitle(cardTitle("Second card"))
                                            .addActions(cardActions().noOffset()
                                                    .addSelectableActions(cardSelectableActions())))
                                    .addBody(cardBody()
                                            .add("This card is selectable and has a link in the card body that navigates to ")
                                            .add(button("PatternFly", "#c-card")
                                                    .link()
                                                    .inline())
                                            .add(".")))
                            .add(card().name("clickable-selectable-card").disabled()
                                    .clickable()
                                    .selectable()
                                    .addHeader(cardHeader()
                                            .addTitle(cardTitle("Third card"))
                                            .addActions(cardActions().noOffset()
                                                    .addSelectableActions(cardSelectableActions())))
                                    .addBody(cardBody().textContent("This card is clickable and selectable, but disabled.")))
                            .element();
                    // @code-end:card-clickable-selectable
                }));

        addSnippet(new Snippet("card-expandable", "Expandable cards",
                code.get("card-expandable"), () -> {
                    // @code-start:card-expandable
                    Dropdown dropdown1 = dropdown()
                            .addToggle(menuToggle(ellipsisV, "kebab dropdown toggle"))
                            .addMenu(menu()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(actionMenuItem("item-0", "Action"))
                                                    .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                    .addItem(actionMenuItem("item-2", "Disabled action")
                                                            .disabled())
                                                    .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                            .disabled())
                                                    .addDivider()
                                                    .addItem(actionMenuItem("item-4", "Separated action"))
                                                    .addItem(linkMenuItem("item-5", "Separated link", "#home")))));

                    Dropdown dropdown2 = dropdown()
                            .addToggle(menuToggle(ellipsisV, "kebab dropdown toggle"))
                            .addMenu(menu()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(actionMenuItem("item-0", "Action"))
                                                    .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                    .addItem(actionMenuItem("item-2", "Disabled action")
                                                            .disabled())
                                                    .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                            .disabled())
                                                    .addDivider()
                                                    .addItem(actionMenuItem("item-4", "Separated action"))
                                                    .addItem(linkMenuItem("item-5", "Separated link", "#home")))));

                    return div()
                            .add(card().expandable()
                                    .addHeader(cardHeader()
                                            .addActions(cardActions()
                                                    .add(dropdown1)
                                                    .add(checkbox("card-expandable-check-1", "card-expandable-check")))
                                            .addTitle(cardTitle("Title")))
                                    .addExpandableContent(cardExpandableContent()
                                            .addBody(cardBody().textContent("Body"))
                                            .addFooter(cardFooter().textContent("Footer"))))
                            .add(br())
                            .add(card().expandable(true)
                                    .addHeader(cardHeader()
                                            .addActions(cardActions()
                                                    .add(dropdown2)
                                                    .add(checkbox("card-expandable-check-2", "card-expandable-check")))
                                            .addTitle(cardTitle("Title")))
                                    .addExpandableContent(cardExpandableContent()
                                            .addBody(cardBody().textContent("Body"))
                                            .addFooter(cardFooter().textContent("Footer"))))
                            .element();
                    // @code-end:card-expandable
                }));

        addSnippet(new Snippet("card-expandable-image", "Expandable with icon",
                code.get("card-expandable-image"), () -> {
                    // @code-start:card-expandable-image
                    Dropdown dropdown = dropdown()
                            .addToggle(menuToggle(ellipsisV, "kebab dropdown toggle"))
                            .addMenu(menu()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(actionMenuItem("item-0", "Action"))
                                                    .addItem(linkMenuItem("item-1", "Link", "#home"))
                                                    .addItem(actionMenuItem("item-2", "Disabled action")
                                                            .disabled())
                                                    .addItem(linkMenuItem("item-3", "Disabled link", "#")
                                                            .disabled())
                                                    .addDivider()
                                                    .addItem(actionMenuItem("item-4", "Separated action"))
                                                    .addItem(linkMenuItem("item-5", "Separated link", "#home")))));

                    return div()
                            .add(card().expandable()
                                    .addHeader(cardHeader()
                                            .addActions(cardActions()
                                                    .add(dropdown)
                                                    .add(checkbox("card-expandable-image-check",
                                                            "card-expandable-image-check")))
                                            .add(img("https://www.patternfly.org/assets/images/pf-logo-small.svg")
                                                    .apply(i -> {
                                                        i.alt = "PatternFly logo";
                                                        i.setAttribute("width", "27px");
                                                    })))
                                    .addExpandableContent(cardExpandableContent()
                                            .addBody(cardBody().textContent("Body"))
                                            .addFooter(cardFooter().textContent("Footer"))))
                            .element();
                    // @code-end:card-expandable-image
                }));
    }
}

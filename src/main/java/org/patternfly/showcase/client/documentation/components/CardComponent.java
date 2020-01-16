package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.Dropdown;
import org.patternfly.showcase.client.Resources;

import static java.util.Arrays.asList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.img;
import static org.elemento.Elements.input;
import static org.elemento.Elements.p;
import static org.elemento.InputType.checkbox;
import static org.patternfly.components.Card.Head.actions;
import static org.patternfly.components.Card.body;
import static org.patternfly.components.Card.card;
import static org.patternfly.components.Card.footer;
import static org.patternfly.components.Card.head;
import static org.patternfly.components.Card.header;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.noFill;

public class CardComponent extends BaseComponent {

    public CardComponent() {
        super("Card", p().textContent(
                "A card is a flexible element for containing any kind of content. Cards are used on dashboards, in data displays (e.g. Card View), or for positioning content on a page.")
                        .element(),
                asList(
                        new Snippet("Simple card", Resources.get().cardSimple().getText(),
                                () -> div()
                                        .add(card()
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element()),

                        new Snippet("Card with image and actions", Resources.get().cardImageActions().getText(),
                                () -> div()
                                        .add(card()
                                                .add(head()
                                                        .add(img("./images/pf_logo.svg").style("width: 300px"))
                                                        .add(actions()
                                                                .add(Dropdown.<String>kebab().right()
                                                                        .add("Link")
                                                                        .add("Action")
                                                                        .add("Disabled Link", true)
                                                                        .add("Disabled Action", true)
                                                                        .addSeparator()
                                                                        .add("Separated Link"))
                                                                .add(input(checkbox))))
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element()),
                        new Snippet("Card header in card head", Resources.get().cardHeaderInHead().getText(),
                                () -> div()
                                        .add(card()
                                                .add(head()
                                                        .add(actions()
                                                                .add(Dropdown.<String>kebab().right()
                                                                        .add("Link")
                                                                        .add("Action")
                                                                        .add("Disabled Link", true)
                                                                        .add("Disabled Action", true)
                                                                        .addSeparator()
                                                                        .add("Separated Link"))
                                                                .add(input(checkbox)))
                                                        .add(header()
                                                                .textContent(
                                                                        "This is a really really really really really really really really really really long header")))
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element()),
                        new Snippet("Only actions in card head (no header/footer)",
                                Resources.get().cardActionsInHead().getText(),
                                () -> div()
                                        .add(card()
                                                .add(head()
                                                        .add(actions()
                                                                .add(Dropdown.<String>kebab().right()
                                                                        .add("Link")
                                                                        .add("Action")
                                                                        .add("Disabled Link", true)
                                                                        .add("Disabled Action", true)
                                                                        .addSeparator()
                                                                        .add("Separated Link"))
                                                                .add(input(checkbox))))
                                                .add(body().textContent(
                                                        "This is the card body, there is only actions in the card head.")))
                                        .element()),
                        new Snippet("Only image in the card head", Resources.get().cardImageInHead().getText(),
                                () -> div()
                                        .add(card()
                                                .add(head()
                                                        .add(img("./images/pf_logo.svg").style("width: 300px")))
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element()),
                        new Snippet("Card with no footer", Resources.get().cardNoFooter().getText(),
                                () -> div()
                                        .add(card()
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("This card has no footer"))).element()),
                        new Snippet("Card with no header", Resources.get().cardNoHeader().getText(),
                                () -> div()
                                        .add(card()
                                                .add(body().textContent("This card has no header"))
                                                .add(footer().textContent("Footer"))).element()),
                        new Snippet("Card with only a content section", Resources.get().cardContentOnly().getText(),
                                () -> div()
                                        .add(card()
                                                .add(body().textContent("Body"))).element()),
                        new Snippet("Card with multiple body sections", Resources.get().cardMultipleBodies().getText(),
                                () -> div()
                                        .add(card()
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("Body"))
                                                .add(body().textContent("Body"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element()),
                        new Snippet("Card with only one body that fills", Resources.get().cardBodyFill().getText(),
                                () -> div()
                                        .add(card().style("min-height: 30em;")
                                                .add(header().textContent("Header"))
                                                .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
                                                .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element()),
                        new Snippet("Card hover example", Resources.get().cardHover().getText(),
                                () -> div()
                                        .add(card().hoverable()
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element()),
                        new Snippet("Card compact example", Resources.get().cardCompact().getText(),
                                () -> div()
                                        .add(card().compact()
                                                .add(header().textContent("Header"))
                                                .add(body().textContent("Body"))
                                                .add(footer().textContent("Footer"))).element())));
    }
}

import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.patternfly.client.components.Card.body;
import static org.patternfly.client.components.Card.footer;
import static org.patternfly.client.components.Card.header;
import static org.patternfly.client.components.Components.card;

Card card = card()
        .add(head()
                .add(actions()
                        .add(Dropdown.<String> kebab().right()
                                .add("Link")
                                .add("Action")
                                .add("Disabled Link", true)
                                .add("Disabled Action", true)
                                .addSeparator()
                                .add("Separated Link"))
                        .add(input(checkbox)))
                .add(header()
                        .textContent("This is a really really really really really really really really really really long header")))
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));
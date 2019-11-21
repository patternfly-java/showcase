import static org.patternfly.client.components.Card.body;
import static org.patternfly.client.components.Card.header;
import static org.patternfly.client.components.Components.card;

Card card = card()
        .add(header().textContent("Header"))
        .add(body().textContent("This card has no footer"));
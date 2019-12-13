import static org.patternfly.components.Card.body;
import static org.patternfly.components.Card.card;
import static org.patternfly.components.Card.header;

Card card = card()
        .add(header().textContent("Header"))
        .add(body().textContent("This card has no footer"));
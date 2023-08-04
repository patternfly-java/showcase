import static org.patternfly.components.Card.body;
import static org.patternfly.components.Card.card;
import static org.patternfly.components.Card.footer;
import static org.patternfly.components.Card.header;

Card card = card().hoverable()
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));
import static org.patternfly.components.Card.body;
import static org.patternfly.components.Card.card;
import static org.patternfly.components.Card.footer;

Card card = card()
        .add(body().textContent("This card has no header"))
        .add(footer().textContent("Footer"));
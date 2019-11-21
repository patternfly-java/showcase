import static org.patternfly.client.components.Card.body;
import static org.patternfly.client.components.Card.footer;
import static org.patternfly.client.components.Components.card;

Card card = card()
        .add(body().textContent("This card has no header"))
        .add(footer().textContent("Footer"));
import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;

Card card = card()
        .add(body().textContent("This card has no header"))
        .add(footer().textContent("Footer"));
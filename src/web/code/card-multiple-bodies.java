import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card()
        .add(header().textContent("Header"))
        .add(body().textContent("Body"))
        .add(body().textContent("Body"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));
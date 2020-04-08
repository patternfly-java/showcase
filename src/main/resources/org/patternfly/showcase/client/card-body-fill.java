import static org.patternfly.components.Card.body;
import static org.patternfly.components.Card.card;
import static org.patternfly.components.Card.footer;
import static org.patternfly.components.Card.header;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.noFill;

Card card = card().style("min-height: 30em;")
        .add(header().textContent("Header"))
        .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
        .add(body().css(modifier(noFill)).textContent("Body pf-m-no-fill"))
        .add(body().textContent("Body"))
        .add(footer().textContent("Footer"));
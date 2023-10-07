import static org.elemento.Elements.img;
import static org.elemento.Elements.input;
import static org.elemento.InputType.checkbox;
import static org.patternfly.component.Card.Head.actions;
import static org.patternfly.component.Card.body;
import static org.patternfly.component.Card.card;
import static org.patternfly.component.Card.footer;
import static org.patternfly.component.Card.header;

Card card = card()
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
        .add(footer().textContent("Footer"));
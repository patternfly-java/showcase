import static org.jboss.gwt.elemento.core.Elements.img;
import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.patternfly.components.Card.Head.actions;
import static org.patternfly.components.Card.body;
import static org.patternfly.components.Card.card;
import static org.patternfly.components.Card.footer;
import static org.patternfly.components.Card.header;

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
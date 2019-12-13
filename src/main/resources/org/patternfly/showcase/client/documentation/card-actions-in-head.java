import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.patternfly.components.Card.Head.actions;
import static org.patternfly.components.Card.body;
import static org.patternfly.components.Card.card;
import static org.patternfly.components.Card.head;

Card card = card()
        .add(head()
                .add(actions()
                        .add(Dropdown.<String> kebab().right()
                                .add("Link")
                                .add("Action")
                                .add("Disabled Link", true)
                                .add("Disabled Action", true)
                                .addSeparator()
                                .add("Separated Link"))
                        .add(input(checkbox))))
        .add(body().textContent("This is the card body, there is only actions in the card head."));
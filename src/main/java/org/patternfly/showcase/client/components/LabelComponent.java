package org.patternfly.showcase.client.components;

import org.patternfly.showcase.client.Resources;
import org.patternfly.showcase.client.Snippet;

import static java.util.Collections.singletonList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Label.label;

public class LabelComponent extends BaseComponent {

    public LabelComponent() {
        super("Label",
                p().textContent("Use a label when you want to highlight an element on a page to draw attention to it " +
                        "or make it more searchable.").element(),
                singletonList(new Snippet("Simple label", Resources.get().label().getText(),
                        () -> div()
                                .add(" ")
                                .add(label("Compact Label", true)).element())));
    }
}

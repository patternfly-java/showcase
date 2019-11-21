package org.patternfly.showcase.client.documentation.components;

import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Collections.singletonList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.client.components.Components.label;

public class LabelComponent extends BaseComponent {

    public LabelComponent() {
        super("Label",
                p().textContent("Use a label when you want to highlight an element on a page to draw attention to it " +
                        "or make it more searchable.").element(),
                singletonList(new Snippet("Simple label", Code.get().label().getText(),
                        () -> div()
                                .add(label("Default Label"))
                                .add(" ")
                                .add(label("Compact Label", true)).element())));
    }
}

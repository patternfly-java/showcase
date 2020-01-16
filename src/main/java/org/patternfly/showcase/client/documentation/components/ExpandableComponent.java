package org.patternfly.showcase.client.documentation.components;

import org.patternfly.showcase.client.Resources;

import static java.util.Collections.singletonList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Expandable.expandable;

public class ExpandableComponent extends BaseComponent {

    public ExpandableComponent() {
        super("Expandable",
                p().textContent("The expandable component is used to embed an expandable section within a form when " +
                        "you don’t want controls or information to be shown by default. This may be used to hide " +
                        "advanced features, for example.").element(),
                singletonList(new Snippet("Simple expandable", Resources.get().expandable().getText(),
                        () -> div()
                                .add(expandable().textContent(
                                        "This content is visible only when the component is expanded.")).element())));
    }
}

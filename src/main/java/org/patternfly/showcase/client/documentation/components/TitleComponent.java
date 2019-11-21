package org.patternfly.showcase.client.documentation.components;

import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Collections.singletonList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.client.components.Components.title;
import static org.patternfly.client.resources.CSS.Size.*;

public class TitleComponent extends BaseComponent {

    public TitleComponent() {
        super("Title",
                p().textContent("The title component applies top and bottom margins, font-weight, font-size, " +
                        "and line-height to titles.").element(),
                singletonList(
                        new Snippet("Title sizes", Code.get().title().getText(),
                                () -> div()
                                        .add(title(1, "4xl Title", _4xl))
                                        .add(title(2, "3xl Title", _3xl))
                                        .add(title(3, "2xl Title", _2xl))
                                        .add(title(4, "xl Title", _3xl))
                                        .add(title(5, "lg Title", lg))
                                        .add(title(6, "md Title", md)).element())));
    }
}

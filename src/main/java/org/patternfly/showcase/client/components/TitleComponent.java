package org.patternfly.showcase.client.components;

import java.util.Iterator;

import elemental2.dom.HTMLElement;
import org.patternfly.showcase.client.Resources;
import org.patternfly.showcase.client.Snippet;

import static java.util.Collections.singletonList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.Size.*;

public class TitleComponent extends BaseComponent {

    public TitleComponent() {
        super("Title",
                p().textContent("The title component applies top and bottom margins, font-weight, font-size, " +
                        "and line-height to titles.").element(),
                singletonList(
                        new Snippet("Title sizes", Resources.get().title().getText(),
                                () -> div()
                                        .add(title(1, "4xl Title", _4xl))
                                        .add(title(2, "3xl Title", _3xl))
                                        .add(title(3, "2xl Title", _2xl))
                                        .add(title(4, "xl Title", _3xl))
                                        .add(title(5, "lg Title", lg))
                                        .add(title(6, "md Title", md)).element())));
    }
}

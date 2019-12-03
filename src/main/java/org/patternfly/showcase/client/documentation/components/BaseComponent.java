package org.patternfly.showcase.client.documentation.components;

import java.util.Iterator;
import java.util.List;

import elemental2.dom.HTMLElement;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Collections.singletonList;
import static java.util.stream.Collectors.toList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.patternfly.client.components.Page.section;
import static org.patternfly.client.components.Title.title;
import static org.patternfly.client.resources.CSS.Size._4xl;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.Constants.content;

class BaseComponent implements Iterable<HTMLElement> {

    private final HTMLElement root;

    BaseComponent(String title, HTMLElement description, List<Snippet> snippets) {
        root = section().css("sc-page")
                .add(div().css(component(content))
                        .add(title(1, title, _4xl))
                        .add(description))
                .addAll(snippets.stream().map(Snippet::element).collect(toList())).element();
    }

    @Override
    public Iterator<HTMLElement> iterator() {
        return singletonList(root).iterator();
    }
}

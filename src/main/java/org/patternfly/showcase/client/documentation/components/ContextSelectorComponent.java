package org.patternfly.showcase.client.documentation.components;

import org.patternfly.client.components.Badge;
import org.patternfly.client.components.Components;
import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.client.components.Alert.info;
import static org.patternfly.client.components.AlertGroup.toast;
import static org.patternfly.client.resources.CSS.util;

public class ContextSelectorComponent extends BaseComponent {

    public ContextSelectorComponent() {
        super("Context selector",
                p().textContent("A context selector can be used in addition to global navigation when the data " +
                        "or resources you show in the interface need to change depending on the users’ context.")
                        .element(),
                asList(
                        new Snippet("Simple context selector", Code.get().contextSelectorSimple().getText(),
                                () -> div()
                                        .add(Components.<String>contextSelector("Stage")
                                                .add(asList("Development", "Staging", "QA", "Production"))).element()),
                        new Snippet("Typed context selector", Code.get().contextSelectorTyped().getText(),
                                () -> div()
                                        .add(Components.<Stage>contextSelector("Stage")
                                                .display(
                                                        (html, stage) -> html.css(util("justify-content-space-between"))
                                                                .title(stage.url)
                                                                .add(stage.name)
                                                                .add(Badge.read(stage.nodes)))
                                                .add(asList(new Stage("Development", "http://localhost:8080", 2),
                                                        new Stage("Staging", "https://staging.acme.org", 5),
                                                        new Stage("QA", "https://qa.acme.org", 3),
                                                        new Stage("Production", "https://acme.org", 12)))).element()),
                        new Snippet("Context selector events", Code.get().contextSelectorEvent().getText(),
                                () -> div()
                                        .add(Components.<String>contextSelector("Stage")
                                                .onToggle(open -> toast().add(
                                                        info("Context selector " + (open ? "expanded" : "collapsed"))))
                                                .onSelect(
                                                        stage -> toast().add(info("Stage selected").description(stage)))
                                                .add(asList("Development", "Staging", "QA", "Production")))
                                        .element())));
    }

    static class Stage {

        final String name;
        final String url;

        final int nodes;

        Stage(String name, String url, int nodes) {
            this.name = name;
            this.url = url;
            this.nodes = nodes;
        }

        @Override
        public String toString() {
            return name;
        }

    }
}

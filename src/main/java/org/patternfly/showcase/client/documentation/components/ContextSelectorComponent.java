package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.Badge;
import org.patternfly.components.ContextSelector;
import org.patternfly.showcase.client.Resources;

import static java.util.Arrays.asList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;
import static org.patternfly.resources.CSS.util;

public class ContextSelectorComponent extends BaseComponent {

    public ContextSelectorComponent() {
        super("Context selector",
                p().textContent("A context selector can be used in addition to global navigation when the data " +
                        "or resources you show in the interface need to change depending on the users’ context.")
                        .element(),
                asList(
                        new Snippet("Simple context selector", Resources.get().contextSelectorSimple().getText(),
                                () -> div()
                                        .add(ContextSelector.<String>contextSelector("Stage")
                                                .add(asList("Development", "Staging", "QA", "Production"))).element()),
                        new Snippet("Typed context selector", Resources.get().contextSelectorTyped().getText(),
                                () -> div()
                                        .add(ContextSelector.<Stage>contextSelector("Stage")
                                                .display(
                                                        (html, stage) -> html.css(util("justify-content-space-between"))
                                                                .title(stage.url)
                                                                .add(stage.name)
                                                                .add(Badge.read(stage.nodes)))
                                                .add(asList(new Stage("Development", "http://localhost:8080", 2),
                                                        new Stage("Staging", "https://staging.acme.org", 5),
                                                        new Stage("QA", "https://qa.acme.org", 3),
                                                        new Stage("Production", "https://acme.org", 12)))).element()),
                        new Snippet("Context selector events", Resources.get().contextSelectorEvent().getText(),
                                () -> div()
                                        .add(ContextSelector.<String>contextSelector("Stage")
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

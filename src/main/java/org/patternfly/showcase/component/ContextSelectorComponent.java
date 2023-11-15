/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.showcase.component;

import org.patternfly.component.ContextSelector;

import static elemental2.dom.DomGlobal.console;
import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.layout.Classes.util;

@Deprecated
public class ContextSelectorComponent extends ComponentPage {

    public ContextSelectorComponent() {
        super("Context selector",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/",
                p().textContent("A context selector can be used in addition to global navigation when the data "
                        + "or resources you show in the interface need to change depending on the users’ context.")
                        .element());

        addSnippet(new Snippet("simple", "Simple context selector", "Resources.get().contextSelectorSimple().getText()",
                () -> div().add(ContextSelector.<String> contextSelector("Stage")
                        .add(asList("Development", "Staging", "QA", "Production"))).element()));

        addSnippet(
                new Snippet("type-ahead", "Typed context selector", "Resources.get().contextSelectorTyped().getText()",
                        () -> div()
                                .add(ContextSelector.<Stage> contextSelector("Stage")
                                        .display((html, stage) -> html.css(util("justify-content-space-between"))
                                                .title(stage.url).add(stage.name).add(badge(stage.nodes).read()))
                                        .add(asList(new Stage("Development", "http://localhost:8080", 2),
                                                new Stage("Staging", "https://staging.acme.org", 5),
                                                new Stage("QA", "https://qa.acme.org", 3),
                                                new Stage("Production", "https://acme.org", 12))))
                                .element()));

        addSnippet(new Snippet("events", "Context selector events", "Resources.get().contextSelectorEvent().getText()",
                () -> div().add(ContextSelector.<String> contextSelector("Stage").onToggle(
                        open -> console.log(
                                "NYI")/* toast().add(info("Context selector " + (open ? "expanded" : "collapsed"))) */)
                        .onSelect(stage -> console.log() /* toast().add(info("Stage selected").description(stage)) */)
                        .add(asList("Development", "Staging", "QA", "Production"))).element()));
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

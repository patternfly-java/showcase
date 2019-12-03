package org.patternfly.showcase.client.documentation.components;

import org.patternfly.client.components.SingleSelect;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.client.components.Icon.icon;
import static org.patternfly.client.resources.CSS.fas;

public class SelectComponent extends BaseComponent {

    public SelectComponent() {
        super("Select", p().textContent("Use a select to choose one or more values from a list").element(),
                asList(
                        new Snippet("Single", "NYI", () -> div()
                                .add(SingleSelect.<String>single("Choose...")
                                        .add(new String[]{
                                                "Running",
                                                "Stopped",
                                                "Down",
                                                "Degraded",
                                                "Needs Maintenance",
                                        })).element()),
                        new Snippet("Icon", "NYI", () -> div()
                                .add(SingleSelect.<String>single(icon(fas("server")), "Choose...")
                                        .add(new String[]{
                                                "Running",
                                                "Stopped",
                                                "Down",
                                                "Degraded",
                                                "Needs Maintenance",
                                        })).element()),
                        new Snippet("Disabled", "NYI", () -> div()
                                .add(SingleSelect.<String>single("Choose...")
                                        .add(new String[]{
                                                "Running",
                                                "Stopped",
                                                "Down",
                                                "Degraded",
                                                "Needs Maintenance",
                                        })
                                        .select("Down")
                                        .disable()).element()),
                        new Snippet("Up", "NYI", () -> div()
                                .add(SingleSelect.<String>single("Choose...").up()
                                        .add(new String[]{
                                                "Running",
                                                "Stopped",
                                                "Down",
                                                "Degraded",
                                                "Needs Maintenance",
                                        })).element())
                ));
    }
}

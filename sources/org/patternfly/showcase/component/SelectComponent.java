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

import org.patternfly.component.SingleSelect;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.layout.PredefinedIcon.fas;

@Deprecated
public class SelectComponent extends ComponentPage {

    public SelectComponent() {
        super("Select",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/",
                p().textContent("Use a select to choose one or more values from a list").element());

        addSnippet(new Snippet("single", "Single", "NYI", () -> div()
                .add(SingleSelect.<String> single("Choose...")
                        .add(new String[] { "Running", "Stopped", "Down", "Degraded", "Needs Maintenance", }))
                .element()));

        addSnippet(new Snippet("icon", "Icon", "NYI",
                () -> div()
                        .add(SingleSelect
                                .<String> single(icon(fas("server")), "Choose...")
                                .add(new String[] { "Running", "Stopped", "Down", "Degraded", "Needs Maintenance", }))
                        .element()));

        addSnippet(new Snippet("disabled", "Disabled", "NYI",
                () -> div().add(SingleSelect.<String> single("Choose...")
                        .add(new String[] { "Running", "Stopped", "Down", "Degraded", "Needs Maintenance", })
                        .select("Down").disabled()).element()));

        addSnippet(new Snippet("up", "Up", "NYI",
                () -> div()
                        .add(SingleSelect.<String> single("Choose...").up()
                                .add(new String[] { "Running", "Stopped", "Down", "Degraded", "Needs Maintenance", }))
                        .element()));
    }
}

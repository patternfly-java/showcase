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
package org.patternfly.showcase.client.component;

import org.patternfly.showcase.client.LoremIpsum;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.CheckboxBody.checkboxBody;
import static org.patternfly.component.form.CheckboxDescription.checkboxDescription;

public class CheckboxComponent extends ComponentPage {

    public CheckboxComponent() {
        super("Checkbox", p().textContent(
                "A checkbox is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.")
                .element());

        addSnippet(new Snippet("basic-checkbox", "Basic", "No code yet", () -> div()
                .add(checkbox("basic-checkbox-0", "Checkbox 1")
                        .value(true))
                .add(checkbox("basic-checkbox-1", "Checkbox 2"))
                .element()));

        addSnippet(new Snippet("disabled-checkbox", "Disabled", "No code yet", () -> div()
                .add(checkbox("disabled-checkbox-0", "Disabled checkbox 1")
                        .value(true)
                        .disabled())
                .add(checkbox("disabled-checkbox-1", "Disabled checkbox 2")
                        .disabled())
                .element()));

        addSnippet(new Snippet("cwd", "Checkbox with description", "No code yet", () -> div()
                .add(checkbox("cwd-0", "Checkbox with description")
                        .addDescription(checkboxDescription(LoremIpsum.words(50))))
                .element()));

        addSnippet(new Snippet("cwb", "Checkbox with body", "No code yet", () -> div()
                .add(checkbox("cwb-0", "Checkbox with body")
                        .addBody(checkboxBody("This is where custom content goes.")))
                .element()));

        addSnippet(new Snippet("cdb", "Checkbox with description and body", "No code yet", () -> div()
                .add(checkbox("cdb-0", "Checkbox with description and body")
                        .addDescription(checkboxDescription(LoremIpsum.words(50)))
                        .addBody(checkboxBody("This is where custom content goes.")))
                .element()));

        addSnippet(new Snippet("standalone-checkbox", "Standalone input", "No code yet", () -> div()
                .add(checkbox("standalone-checkbox-0"))
                .element()));

        addSnippet(new Snippet("required-checkbox", "Required input", "No code yet", () -> div()
                .add(checkbox("required-checkbox-0", "Required checkbox")
                        .required())
                .element()));
    }
}

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

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.CheckboxBody.checkboxBody;
import static org.patternfly.component.form.CheckboxDescription.checkboxDescription;
import static org.patternfly.showcase.client.Code.code;

import org.patternfly.showcase.client.LoremIpsum;

public class CheckboxComponent extends ComponentPage {

    public CheckboxComponent() {
        super("Checkbox",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/Checkbox.html",
                "https://www.patternfly.org/components/forms/checkbox/design-guidelines",
                p().textContent(
                        "A checkbox is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.")
                        .element());

        addSnippet(new Snippet("checkbox-basic", "Basic",
                code.get("checkbox-basic"), () ->
                // @code-start:checkbox-basic
                div()
                        .add(checkbox("basic-checkbox-0", "Checkbox 1")
                                .value(true))
                        .add(checkbox("basic-checkbox-1", "Checkbox 2"))
                        .element()
        // @code-end:checkbox-basic
        ));

        addSnippet(new Snippet("checkbox-disabled", "Disabled",
                code.get("checkbox-disabled"), () ->
                // @code-start:checkbox-disabled
                div()
                        .add(checkbox("disabled-checkbox-0", "Disabled checkbox 1")
                                .value(true)
                                .disabled())
                        .add(checkbox("disabled-checkbox-1", "Disabled checkbox 2")
                                .disabled())
                        .element()
        // @code-end:checkbox-disabled
        ));

        addSnippet(new Snippet("checkbox-description", "Checkbox with description",
                code.get("checkbox-description"), () ->
                // @code-start:checkbox-description
                div()
                        .add(checkbox("cwd-0", "Checkbox with description")
                                .addDescription(checkboxDescription(LoremIpsum.words(50))))
                        .element()
        // @code-end:checkbox-description
        ));

        addSnippet(new Snippet("checkbox-body", "Checkbox with body",
                code.get("checkbox-body"), () ->
                // @code-start:checkbox-body
                div()
                        .add(checkbox("cwb-0", "Checkbox with body")
                                .addBody(checkboxBody("This is where custom content goes.")))
                        .element()
        // @code-end:checkbox-body
        ));

        addSnippet(new Snippet("checkbox-description-body", "Checkbox with description and body",
                code.get("checkbox-description-body"), () ->
                // @code-start:checkbox-description-body
                div()
                        .add(checkbox("cdb-0", "Checkbox with description and body")
                                .addDescription(checkboxDescription(LoremIpsum.words(50)))
                                .addBody(checkboxBody("This is where custom content goes.")))
                        .element()
        // @code-end:checkbox-description-body
        ));

        addSnippet(new Snippet("checkbox-standalone", "Standalone input",
                code.get("checkbox-standalone"), () ->
                // @code-start:checkbox-standalone
                div()
                        .add(checkbox("standalone-checkbox-0"))
                        .element()
        // @code-end:checkbox-standalone
        ));

        addSnippet(new Snippet("checkbox-required", "Required input",
                code.get("checkbox-required"), () ->
                // @code-start:checkbox-required
                div()
                        .add(checkbox("required-checkbox-0", "Required checkbox")
                                .required())
                        .element()
        // @code-end:checkbox-required
        ));
    }
}

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

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.FormSelect.formSelect;
import static org.patternfly.component.form.FormSelectOption.formSelectOption;
import static org.patternfly.showcase.Code.code;

import org.patternfly.component.form.FormSelectOption;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

public class FormSelectComponent extends SnippetPage {

    public FormSelectComponent() {
        super("Form select",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/FormSelect.html",
                "https://www.patternfly.org/components/forms/form-select/design-guidelines",
                p().textContent("A form select embeds browser native select lists into a form.")
                        .element());

        addSnippet(new Snippet("form-select-basic", "Basic",
                code.get("form-select-basic"), () -> {
                    // @code-start:form-select-basic
                    String[] values = { "Miss", "Mrs", "Ms", "Dr", "Other" };
                    return div()
                            .add(formSelect("basic-form-select-0")
                                    .addOption(formSelectOption("Select one").placeholder())
                                    .addOptions(asList(values), FormSelectOption::formSelectOption))
                            .element();
                    // @code-end:form-select-basic
                }));
    }
}

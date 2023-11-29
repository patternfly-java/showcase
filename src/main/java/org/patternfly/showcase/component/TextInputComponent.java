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

import org.patternfly.component.form.Checkbox;
import org.patternfly.component.form.TextInput;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.core.ValidationStatus.error;
import static org.patternfly.layout.Classes.util;
import static org.patternfly.layout.PredefinedIcon.fas;
import static org.patternfly.showcase.Code.code;

public class TextInputComponent extends SnippetPage {

    public TextInputComponent() {
        super("Text input",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/TextInput.html",
                "https://www.patternfly.org/components/forms/text-input/design-guidelines",
                p().textContent("A text input is used to gather free-form text from a user.").element());

        addSnippet(new Snippet("text-input-basic", "Basic",
                code.get("text-input-basic"), () ->
                // @code-start:text-input-basic
                div()
                        .add(textInput("basic-text-input-0"))
                        .element()
        // @code-end:text-input-basic
        ));

        addSnippet(new Snippet("text-input-disabled", "Disabled",
                code.get("text-input-disabled"), () ->
                // @code-start:text-input-disabled
                div()
                        .add(textInput("disabled-text-input-0")
                                .value("disabled text input example")
                                .disabled())
                        .element()
        // @code-end:text-input-disabled
        ));

        addSnippet(new Snippet("text-input-readonly", "Read only",
                code.get("text-input-readonly"), () -> {
                    // @code-start:text-input-readonly
                    Checkbox plainToggle = checkbox("plain-toggle", "Plain read only variant");
                    TextInput readOnlyTextInput = textInput("readonly-text-input-0")
                            .value("read only text input example")
                            .readonly();
                    return div()
                            .add(div().css(util("mb-sm"))
                                    .add(plainToggle.onChange((component, value) -> readOnlyTextInput.plain(value))))
                            .add(readOnlyTextInput)
                            .element();
                    // @code-end:text-input-readonly
                }));

        addSnippet(new Snippet("text-input-invalid", "Invalid",
                code.get("text-input-invalid"), () ->
                // @code-start:text-input-invalid
                div()
                        .add(textInput("invalid-text-input-0").validated(error))
                        .element()
        // @code-end:text-input-invalid
        ));

        addSnippet(new Snippet("text-input-custom-icon", "Custom icon",
                code.get("text-input-custom-icon"), () ->
                // @code-start:text-input-custom-icon
                div()
                        .add(textInput("custom-icon-text-input-0").css(util("mb-sm"))
                                .icon(fas("calendar")))
                        .add(textInput("custom-icon-text-input-1")
                                .icon(fas("clock")))
                        .element()
        // @code-end:text-input-custom-icon
        ));

        addSnippet(new Snippet("text-input-custom-icon-and-invalid", "Custom icon and invalid",
                code.get("text-input-custom-icon-and-invalid"), () ->
                // @code-start:text-input-custom-icon-and-invalid
                div()
                        .add(textInput("custom-icon-and-invalid-text-input-0")
                                .validated(error)
                                .icon(fas("calendar")))
                        .element()
        // @code-end:text-input-custom-icon-and-invalid
        ));
    }
}

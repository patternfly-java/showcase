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
import org.patternfly.component.form.TextArea;
import org.patternfly.component.help.HelperText;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.Form.form;
import static org.patternfly.component.form.FormGroup.formGroup;
import static org.patternfly.component.form.FormGroupControl.formGroupControl;
import static org.patternfly.component.form.FormGroupLabel.formGroupLabel;
import static org.patternfly.component.form.TextArea.textArea;
import static org.patternfly.component.form.TextAreaResize.both;
import static org.patternfly.component.form.TextAreaResize.horizontal;
import static org.patternfly.component.form.TextAreaResize.vertical;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.core.ValidationStatus.default_;
import static org.patternfly.core.ValidationStatus.error;
import static org.patternfly.core.ValidationStatus.success;
import static org.patternfly.core.ValidationStatus.warning;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Classes.util;

public class TextAreaComponent extends SnippetPage {

    public TextAreaComponent() {
        super("Text area",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/TextArea.html",
                "https://www.patternfly.org/components/forms/text-area/design-guidelines",
                p().textContent("A text area component is used for entering a paragraph of text that is longer than one line.")
                        .element());

        addSnippet(new Snippet("text-area-basic", "Basic",
                code.get("text-area-basic"), () ->
                // @code-start:text-area-basic
                div()
                        .add(textArea("basic-text-area-0"))
                        .element()
        // @code-end:text-area-basic
        ));

        addSnippet(new Snippet("text-area-invalid", "Invalid",
                code.get("text-area-invalid"), () ->
                // @code-start:text-area-invalid
                div()
                        .add(textArea("invalid-text-area-0").validated(error))
                        .element()
        // @code-end:text-area-invalid
        ));

        addSnippet(new Snippet("text-area-validated", "Validated",
                code.get("text-area-validated"), () -> {
                    // @code-start:text-area-validated
                    final double[] handle = { 0 };
                    HelperText helperText = helperText("Share your thoughts.");
                    TextArea textArea = textArea("validated-text-area-0")
                            .onChange((e, ta, value) -> {
                                clearTimeout(handle[0]);
                                ta.validated(default_);
                                helperText.firstItem()
                                        .status(default_)
                                        .text("Validating...");
                                handle[0] = setTimeout(__ -> {
                                    if (value.isEmpty()) {
                                        ta.validated(warning);
                                        helperText.firstItem()
                                                .status(warning)
                                                .text("You must have something to say");
                                    } else {
                                        if (value.length() < 10) {
                                            ta.validated(error);
                                            helperText.firstItem()
                                                    .status(error)
                                                    .text("You're being too brief, please enter at least 10 characters.");
                                        } else {
                                            ta.validated(success);
                                            helperText.firstItem()
                                                    .status(success)
                                                    .text("Thanks for your comments!");
                                        }
                                    }
                                }, 1234);
                            });
                    return div()
                            .add(form()
                                    .add(formGroup()
                                            .addLabel(formGroupLabel("Comments:"))
                                            .addControl(formGroupControl()
                                                    .addControl(textArea)
                                                    .addHelperText(helperText))))
                            .element();
                    // @code-end:text-area-validated
                }));

        addSnippet(new Snippet("text-area-vertical", "Vertically resizable",
                code.get("text-area-vertical"), () ->
                // @code-start:text-area-vertical
                div()
                        .add(textArea("vertical-text-area-0").resize(vertical))
                        .element()
        // @code-end:text-area-vertical
        ));

        addSnippet(new Snippet("text-area-horizontal", "Horizontally resizable",
                code.get("text-area-horizontal"), () ->
                // @code-start:text-area-horizontal
                div()
                        .add(textArea("horizontal-text-area-0").resize(horizontal))
                        .element()
        // @code-end:text-area-horizontal
        ));

        addSnippet(new Snippet("text-area-both", "Vertically and horizontally resizable",
                code.get("text-area-both"), () ->
                // @code-start:text-area-both
                div()
                        .add(textArea("horizontal-text-area-0").resize(both))
                        .element()
        // @code-end:text-area-both
        ));

        addSnippet(new Snippet("text-area-disabled", "Disabled",
                code.get("text-area-disabled"), () ->
                // @code-start:text-area-disabled
                div()
                        .add(textArea("disabled-text-area-0").disabled())
                        .element()
        // @code-end:text-area-disabled
        ));

        addSnippet(new Snippet("text-area-readonly", "Read only",
                code.get("text-area-readonly"), () -> {
                    // @code-start:text-area-readonly
                    Checkbox plainToggle = checkbox("plain-toggle", "plain-toggle", "Plain read only variant");
                    TextArea readOnlyTextArea = textArea("readonly-text-area-0", "read only text area example")
                            .readonly();
                    return div()
                            .add(div().css(util("mb-sm"))
                                    .add(plainToggle.onChange((e, c, value) -> readOnlyTextArea.plain(value))))
                            .add(readOnlyTextArea)
                            .element();
                    // @code-end:text-area-readonly
                }));

        addSnippet(new Snippet("text-auto-size", "Auto resizing",
                code.get("text-auto-size"), () ->
                // @code-start:text-auto-size
                div()
                        .add(textArea("auto-size-text-area-0").autoResize())
                        .element()
        // @code-end:text-auto-size
        ));
    }
}

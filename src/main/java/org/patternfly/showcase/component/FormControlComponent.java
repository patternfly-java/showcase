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

import org.jboss.elemento.Id;
import org.patternfly.component.form.FormSelectOption;
import org.patternfly.core.Tuple;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.FormSelect.formSelect;
import static org.patternfly.component.form.FormSelectOption.formSelectOption;
import static org.patternfly.component.form.FormSelectOptionGroup.formSelectOptionGroup;
import static org.patternfly.component.form.TextArea.textArea;
import static org.patternfly.component.form.TextAreaResize.both;
import static org.patternfly.component.form.TextAreaResize.horizontal;
import static org.patternfly.component.form.TextAreaResize.vertical;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.core.ValidationStatus.error;
import static org.patternfly.core.ValidationStatus.success;
import static org.patternfly.core.ValidationStatus.warning;
import static org.patternfly.layout.PredefinedIcon.bell;
import static org.patternfly.layout.PredefinedIcon.fas;
import static org.patternfly.showcase.Code.code;

public class FormControlComponent extends SnippetPage {

    public FormControlComponent() {
        super("Form control",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/FormControl.html",
                "https://www.patternfly.org/components/forms/form-control/design-guidelines",
                p().textContent(
                        "Form controls refer to the different visual states that data input components can take to help guide users in completing forms.")
                        .element());

        addSnippet(new Snippet("form-control-text-input", "Text input",
                code.get("form-control-text-input"), () ->
                // @code-start:form-control-text-input
                div()
                        .add(textInput("text-input-0", "Standard"))
                        .add(br())
                        .add(textInput("text-input-1").placeholder("Placeholder"))
                        .add(br())
                        .add(textInput("text-input-2", "Readonly").readonly())
                        .add(br())
                        .add(textInput("text-input-3", "Readonly plain").plain())
                        .add(br())
                        .add(textInput("text-input-4", "Disabled").disabled())
                        .add(br())
                        .add(textInput("text-input-5", "Success").validated(success))
                        .add(br())
                        .add(textInput("text-input-6", "Warning").validated(warning))
                        .add(br())
                        .add(textInput("text-input-7", "Error").validated(error))
                        .add(br())
                        .add(textInput("text-input-8", "Expanded").expanded())
                        .add(br())
                        .add(textInput("text-input-9", "Calendar").icon(fas("calendar")))
                        .add(br())
                        .add(textInput("text-input-10", "Clock (invalid)")
                                .validated(warning)
                                .icon(fas("clock")))
                        .add(br())
                        .add(textInput("text-input-11", "Custom icon").icon(bell))
                        .element()
        // @code-end:form-control-text-input
        ));

        addSnippet(new Snippet("form-control-select", "Form select",
                code.get("form-control-select"), () -> {
                    // @code-start:form-control-select
                    String[] values0 = { "Mr", "Miss", "Mrs", "Ms", "Dr", "Other" };

                    Tuple<String, Tuple<String, Boolean>[]>[] groups0 = new Tuple[] {
                            tuple("Group 1", new Tuple[] {
                                    tuple("The first option", false),
                                    tuple("Option groups (second option selected)", false),
                            }),
                            tuple("Group 2", new Tuple[] {
                                    tuple("The third option", false),
                                    tuple("The fourth option", true),
                            }),
                    };

                    Tuple<String, String[]>[] groups1 = new Tuple[] {
                            tuple("Group 1", new String[] { "The first option", "The second option", }),
                            tuple("Group 2", new String[] { "The third option", "The fourth option", }),
                    };

                    return div()
                            .add(formSelect("form-select-0")
                                    .addOption(formSelectOption("Selectable placeholder").placeholder(true))
                                    .addOptions(asList(values0).subList(0, 5), FormSelectOption::formSelectOption)
                                    .addOption(formSelectOption("Disabled option").disabled())
                                    .addOption(formSelectOption(values0[5])))
                            .add(br())
                            .add(formSelect("form-select-1")
                                    .addOption(formSelectOption("Non-selectable placeholder").placeholder(false))
                                    .addOptions(asList(values0), FormSelectOption::formSelectOption))
                            .add(br())
                            .add(formSelect("form-select-2", Id.build("Option groups (second option selected)"))
                                    .addGroups(asList(groups0), g -> formSelectOptionGroup(g._1)
                                            .addOptions(asList(g._2), v -> formSelectOption(v._1).disabled(v._2))))
                            .add(br())
                            .add(formSelect("form-select-3", Id.build("Valid option")).validated(success)
                                    .addOption(formSelectOption("Valid option"))
                                    .addGroups(asList(groups1), g -> formSelectOptionGroup(g._1)
                                            .addOptions(asList(g._2), FormSelectOption::formSelectOption)))
                            .add(br())
                            .add(formSelect("form-select-4", Id.build("Warning option")).validated(warning)
                                    .addOption(formSelectOption("Warning option"))
                                    .addGroups(asList(groups1), g -> formSelectOptionGroup(g._1)
                                            .addOptions(asList(g._2), FormSelectOption::formSelectOption)))
                            .add(br())
                            .add(formSelect("form-select-5", Id.build("Invalid option")).validated(error)
                                    .addOption(formSelectOption("Invalid option"))
                                    .addGroups(asList(groups1), g -> formSelectOptionGroup(g._1)
                                            .addOptions(asList(g._2), FormSelectOption::formSelectOption)))
                            .add(br())
                            .add(formSelect("form-select-6").disabled()
                                    .addOption(formSelectOption("Disabled").placeholder())
                                    .addOptions(asList(values0), FormSelectOption::formSelectOption))
                            .add(br())
                            .element();
                    // @code-end:form-control-select
                }));

        addSnippet(new Snippet("form-control-text-area", "Text area",
                code.get("form-control-text-area"), () ->
                // @code-start:form-control-text-area
                div()
                        .add(textArea("text-area-0", "Standard"))
                        .add(br())
                        .add(textArea("text-area-1", "Readonly").readonly())
                        .add(br())
                        .add(textArea("text-area-2", "Readonly plain").plain())
                        .add(br())
                        .add(textArea("text-area-3", "Disabled").disabled())
                        .add(br())
                        .add(textArea("text-area-4", "Success").validated(success))
                        .add(br())
                        .add(textArea("text-area-5", "Warning").validated(warning))
                        .add(br())
                        .add(textArea("text-area-6", "Error").validated(error))
                        .add(br())
                        .add(textArea("text-area-7", "Resizes vertically").resize(vertical))
                        .add(br())
                        .add(textArea("text-area-8", "Resizes horizontally").resize(horizontal))
                        .add(br())
                        .add(textArea("text-area-9", "Resizes in both directions").resize(both))
                        .add(br())
                        .element()
        // @code-end:form-control-text-area
        ));
    }
}

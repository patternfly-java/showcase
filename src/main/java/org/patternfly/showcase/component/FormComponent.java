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

import org.patternfly.component.form.FormSelectOption;
import org.patternfly.component.popover.Popover;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.alert.Alert.alert;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.Form.form;
import static org.patternfly.component.form.FormActionGroup.formActionGroup;
import static org.patternfly.component.form.FormAlert.formAlert;
import static org.patternfly.component.form.FormFieldGroup.formFieldGroup;
import static org.patternfly.component.form.FormFieldGroupBody.formFieldGroupBody;
import static org.patternfly.component.form.FormFieldGroupHeader.formFieldGroupHeader;
import static org.patternfly.component.form.FormGroup.formGroup;
import static org.patternfly.component.form.FormGroupControl.formGroupControl;
import static org.patternfly.component.form.FormGroupLabel.formGroupLabel;
import static org.patternfly.component.form.FormGroupRole.group;
import static org.patternfly.component.form.FormGroupRole.radiogroup;
import static org.patternfly.component.form.FormSection.formSection;
import static org.patternfly.component.form.FormSelect.formSelect;
import static org.patternfly.component.form.FormSelectOption.formSelectOption;
import static org.patternfly.component.form.Radio.radio;
import static org.patternfly.component.form.TextArea.textArea;
import static org.patternfly.component.form.TextAreaResize.both;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.form.TextInputType.email;
import static org.patternfly.component.form.TextInputType.tel;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.component.popover.PopoverBody.popoverBody;
import static org.patternfly.component.popover.PopoverHeader.popoverHeader;
import static org.patternfly.core.Severity.danger;
import static org.patternfly.core.Tuples.tuples;
import static org.patternfly.core.ValidationStatus.error;
import static org.patternfly.layout.grid.Grid.grid;
import static org.patternfly.layout.grid.GridItem.gridItem;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.PredefinedIcon.trash;

public class FormComponent extends SnippetPage {

    public FormComponent() {
        super("Form",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/Form.html",
                "https://www.patternfly.org/components/forms/form/design-guidelines",
                p().textContent(
                        "A form is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.")
                        .element());

        addSnippet(new Snippet("form-basic", "Basic",
                code.get("form-basic"), () -> {
                    // @code-start:form-basic
                    Popover nameInfo = popover()
                            .addHeader(popoverHeader()
                                    .add(div()
                                            .add("The ")
                                            .add(a("https://schema.org/name", "_blank").textContent("name"))
                                            .add(" of a ")
                                            .add(a("https://schema.org/Person", "_blank").textContent("person"))))
                            .addBody(popoverBody()
                                    .add(div()
                                            .add("Often composed of ")
                                            .add(a("https://schema.org/givenName", "_blank").textContent("givenName"))
                                            .add(" and ")
                                            .add(a("https://schema.org/familyName", "_blank").textContent("familyName"))
                                            .add(".")));
                    return div()
                            .add(form()
                                    .addGroup(formGroup().fieldId("form-basic-name").required()
                                            .addLabel(formGroupLabel("Full name")
                                                    .addHelp("More info for name field", nameInfo))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput("form-basic-name"))
                                                    .addHelperText(helperText("Include your middle name if you have one."))))
                                    .addGroup(formGroup().fieldId("form-basic-email").required()
                                            .addLabel(formGroupLabel("Email"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput(email, "form-basic-email"))))
                                    .addGroup(formGroup().fieldId("form-basic-phone").required()
                                            .addLabel(formGroupLabel("Phone number"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput(tel, "form-basic-phone")
                                                            .placeholder("555-555-555"))))
                                    .addGroup(formGroup().fieldId("form-basic-ct").role(group)
                                            .addLabel(formGroupLabel("How can we contact you?"))
                                            .addControl(formGroupControl().inline()
                                                    .addCheckbox(checkbox("form-basic-ct-0", "form-basic-ct", "Email"))
                                                    .addCheckbox(checkbox("form-basic-ct-1", "form-basic-ct", "Phone"))
                                                    .addCheckbox(checkbox("form-basic-ct-2", "form-basic-ct", "Mail"))))
                                    .addGroup(formGroup().fieldId("form-basic-tz").role(radiogroup)
                                            .addLabel(formGroupLabel("Timezone"))
                                            .addControl(formGroupControl().inline()
                                                    .addRadio(radio("form-basic-tz-0", "form-basic-tz", "Eastern"))
                                                    .addRadio(radio("form-basic-tz-1", "form-basic-tz", "Central"))
                                                    .addRadio(radio("form-basic-tz-2", "form-basic-tz", "Pacific"))))
                                    .addGroup(formGroup().fieldId("form-basic-additional")
                                            .addLabel(formGroupLabel("Additional note"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput("form-basic-additional").disabled())))
                                    .addGroup(formGroup().fieldId("form-basic-updates")
                                            .addControl(formGroupControl()
                                                    .addCheckbox(checkbox("form-basic-updates", "form-basic-updates",
                                                            "I'd like updates via email."))))
                                    .addActionGroup(formActionGroup()
                                            .addButton(button("Submit").primary())
                                            .addButton(button("Cancel").link())))
                            .element();
                    // @code-end:form-basic
                }));

        addSnippet(new Snippet("form-horizontal", "Horizontal",
                code.get("form-horizontal"), () -> {
                    // @code-start:form-horizontal
                    String[] values = { "Mr", "Miss", "Mrs", "Ms", "Dr", "Other" };

                    return div()
                            .add(form().horizontal()
                                    .addGroup(formGroup().fieldId("form-hz-name").required()
                                            .addLabel(formGroupLabel("Full name"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput("form-hz-name"))
                                                    .addHelperText(helperText("Include your middle name if you have one."))))
                                    .addGroup(formGroup().fieldId("form-hz-email").required()
                                            .addLabel(formGroupLabel("Email"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput(email, "form-hz-email"))))
                                    .addGroup(formGroup().fieldId("form-hz-title").required()
                                            .addLabel(formGroupLabel("Your title"))
                                            .addControl(formGroupControl()
                                                    .addControl(formSelect("form-hz-title")
                                                            .addOption(formSelectOption("Select one").placeholder())
                                                            .addOptions(asList(values), FormSelectOption::formSelectOption))))
                                    .addGroup(formGroup().fieldId("form-hz-exp").required()
                                            .addLabel(formGroupLabel("Your experience"))
                                            .addControl(formGroupControl()
                                                    .addControl(textArea("form-hz-exp").resize(both))))
                                    .addGroup(formGroup().fieldId("form-hz-ct").role(group)
                                            .addLabel(formGroupLabel("How can we contact you?"))
                                            .addControl(formGroupControl().stack()
                                                    .addCheckbox(checkbox("form-hz-ct-0", "form-hz-ct", "Email"))
                                                    .addCheckbox(checkbox("form-hz-ct-1", "form-hz-ct", "Phone"))
                                                    .addCheckbox(checkbox("form-hz-ct-2", "form-hz-ct", "Mail"))))
                                    .addGroup(formGroup().fieldId("form-hz-tz").role(radiogroup)
                                            .addLabel(formGroupLabel("Timezone"))
                                            .addControl(formGroupControl().stack()
                                                    .addRadio(radio("form-hz-tz-0", "form-hz-tz", "Eastern"))
                                                    .addRadio(radio("form-hz-tz-1", "form-hz-tz", "Central"))
                                                    .addRadio(radio("form-hz-tz-2", "form-hz-tz", "Pacific"))))
                                    .addActionGroup(formActionGroup()
                                            .addButton(button("Submit").primary())
                                            .addButton(button("Cancel").link())))
                            .element();
                    // @code-end:form-horizontal
                }));

        addSnippet(new Snippet("form-lw", "Limit width",
                code.get("form-lw"), () -> {
                    // @code-start:form-lw
                    Popover nameInfo = popover()
                            .addHeader(popoverHeader()
                                    .add(div()
                                            .add("The ")
                                            .add(a("https://schema.org/name", "_blank").textContent("name"))
                                            .add(" of a ")
                                            .add(a("https://schema.org/Person", "_blank").textContent("person"))))
                            .addBody(popoverBody()
                                    .add(div()
                                            .add("Often composed of ")
                                            .add(a("https://schema.org/givenName", "_blank").textContent("givenName"))
                                            .add(" and ")
                                            .add(a("https://schema.org/familyName", "_blank").textContent("familyName"))
                                            .add(".")));
                    return div()
                            .add(form().limitWidth()
                                    .addGroup(formGroup().fieldId("form-lw-name").required()
                                            .addLabel(formGroupLabel("Full name")
                                                    .addHelp("More info for name field", nameInfo))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput("form-lw-name"))
                                                    .addHelperText(helperText("Include your middle name if you have one."))))
                                    .addGroup(formGroup().fieldId("form-lw-email").required()
                                            .addLabel(formGroupLabel("Email"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput(email, "form-lw-email"))))
                                    .addGroup(formGroup().fieldId("form-lw-phone").required()
                                            .addLabel(formGroupLabel("Phone number"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput(tel, "form-lw-phone")
                                                            .placeholder("555-555-555"))))
                                    .addGroup(formGroup().fieldId("form-lw-ct").role(group)
                                            .addLabel(formGroupLabel("How can we contact you?"))
                                            .addControl(formGroupControl().inline()
                                                    .addCheckbox(checkbox("form-lw-ct-0", "form-lw-ct", "Email"))
                                                    .addCheckbox(checkbox("form-lw-ct-1", "form-lw-ct", "Phone"))
                                                    .addCheckbox(checkbox("form-lw-ct-2", "form-lw-ct", "Mail"))))
                                    .addGroup(formGroup().fieldId("form-lw-tz").role(radiogroup)
                                            .addLabel(formGroupLabel("Timezone"))
                                            .addControl(formGroupControl().inline()
                                                    .addRadio(radio("form-lw-tz-0", "form-lw-tz", "Eastern"))
                                                    .addRadio(radio("form-lw-tz-1", "form-lw-tz", "Central"))
                                                    .addRadio(radio("form-lw-tz-2", "form-lw-tz", "Pacific"))))
                                    .addGroup(formGroup().fieldId("form-lw-additional")
                                            .addLabel(formGroupLabel("Additional note"))
                                            .addControl(formGroupControl()
                                                    .addControl(textInput("form-lw-additional").disabled())))
                                    .addGroup(formGroup().fieldId("form-lw-updates")
                                            .addControl(formGroupControl()
                                                    .addCheckbox(checkbox("form-lw-updates", "form-lw-updates",
                                                            "I'd like updates via email."))))
                                    .addActionGroup(formActionGroup()
                                            .addButton(button("Submit").primary())
                                            .addButton(button("Cancel")
                                                    .link())))
                            .element();
                    // @code-end:form-lw
                }));

        addSnippet(new Snippet("form-invalid", "Invalid",
                code.get("form-invalid"), () ->
                // @code-start:form-invalid
                div()
                        .add(form()
                                .addGroup(formGroup()
                                        .addLabel(formGroupLabel("Age"))
                                        .addControl(formGroupControl()
                                                .addControl(textInput("form-invalid-age", "Five")
                                                        .validated(error))
                                                .addHelperText(helperText("Must be a number", error)))))
                        .element()
        // @code-end:form-invalid
        ));

        addSnippet(new Snippet("form-invalid-alert", "Invalid with form alert",
                code.get("form-invalid-alert"), () ->
                // @code-start:form-invalid-alert
                div()
                        .add(form()
                                .addAlert(formAlert()
                                        .addAlert(alert(danger, "Fill out all required fields before continuing.")
                                                .inline()
                                                .liveRegion()))
                                .addGroup(formGroup()
                                        .addLabel(formGroupLabel("Age"))
                                        .addControl(formGroupControl()
                                                .addControl(textInput("form-invalid-alert-age", "Five")
                                                        .validated(error))
                                                .addHelperText(helperText("Must be a number", error)))))
                        .element()
        // @code-end:form-invalid-alert
        ));

        addSnippet(new Snippet("form-hzs-npt", "Horizontal stacked no padding top",
                code.get("form-hzs-npt"), () ->
                // @code-start:form-hzs-npt
                div()
                        .add(form().horizontal()
                                .addGroup(formGroup().role(group).fieldId("form-hzs-npt-options")
                                        .addLabel(formGroupLabel("Label").noPaddingTop())
                                        .addControl(formGroupControl().stack()
                                                .addCheckbox(
                                                        checkbox("form-hzs-npt-options-0", "form-hzs-npt-options", "Option 1"))
                                                .addCheckbox(
                                                        checkbox("form-hzs-npt-options-1", "form-hzs-npt-options",
                                                                "Option 2")))))
                        .element()
        // @code-end:form-hzs-npt
        ));

        addSnippet(new Snippet("form-hzs-hot", "Horizontal stacked helper text on top",
                code.get("form-hzs-hot"), () ->
                // @code-start:form-hzs-hot
                div()
                        .add(form().horizontal()
                                .addGroup(formGroup().role(group).fieldId("form-hzs-hot-options")
                                        .addLabel(formGroupLabel("Label").noPaddingTop())
                                        .addControl(formGroupControl().stack()
                                                .addHelperText(helperText("Select all that apply:"))
                                                .addCheckbox(
                                                        checkbox("form-hzs-hot-options-0", "form-hzs-hot-options", "Option 1"))
                                                .addCheckbox(
                                                        checkbox("form-hzs-hot-options-1", "form-hzs-hot-options",
                                                                "Option 2")))))
                        .element()
        // @code-end:form-hzs-hot
        ));

        addSnippet(new Snippet("form-section", "Form sections",
                code.get("form-section"), () ->
                // @code-start:form-section
                div()
                        .add(form()
                                .addSection(formSection()
                                        .addGroup(formGroup().fieldId("form-section-1-input").required()
                                                .addLabel(formGroupLabel("Form section 1 input"))
                                                .addControl(formGroupControl()
                                                        .addControl(textInput("form-section-1-input")))))
                                .addSection(formSection("Form section 2 (optional title)", h(2))
                                        .addGroup(formGroup().fieldId("form-section-2-input").required()
                                                .addLabel(formGroupLabel("Form section 2 input"))
                                                .addControl(formGroupControl()
                                                        .addControl(textInput("form-section-2-input"))))))
                        .element()
        // @code-end:form-section
        ));

        addSnippet(new Snippet("form-grid", "Form grid",
                code.get("form-grid"), () ->
                // @code-start:form-grid
                div()
                        .add(form()
                                .add(grid().gutter().cols(tuples(md, 6))
                                        .addItem(gridItem().span(12)
                                                .add(formGroup().fieldId("form-grid-name").required()
                                                        .addLabel(formGroupLabel("Full name"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("form-grid-name"))
                                                                .addHelperText(helperText(
                                                                        "Include your middle name if you have one.")))))
                                        .add(formGroup().fieldId("form-grid-email").required()
                                                .addLabel(formGroupLabel("Email"))
                                                .addControl(formGroupControl()
                                                        .addControl(textInput(email, "form-grid-email"))))
                                        .add(formGroup().fieldId("form-grid-phone").required()
                                                .addLabel(formGroupLabel("Phone number"))
                                                .addControl(formGroupControl()
                                                        .addControl(textInput(tel, "form-grid-phone")
                                                                .placeholder("555-555-555"))))))
                        .element()
        // @code-end:form-grid
        ));

        addSnippet(new Snippet("form-field-group", "Field groups",
                code.get("form-field-group"), () ->
                // @code-start:form-field-group
                div()
                        .add(form()
                                .addGroup(formGroup().fieldId("fg0-label0").required()
                                        .addLabel(formGroupLabel("Label 1"))
                                        .addControl(formGroupControl()
                                                .addControl(textInput("fg0-label0"))))
                                .addGroup(formGroup().fieldId("fg0-label1").required()
                                        .addLabel(formGroupLabel("Label 2"))
                                        .addControl(formGroupControl()
                                                .addControl(textInput("fg0-label1"))))
                                .addFieldGroup(formFieldGroup()
                                        .expandable()
                                        .addHeader(formFieldGroupHeader()
                                                .title("Field group 1")
                                                .description("Field group 1 description text.")
                                                .addAction(button().link().text("Delete all"))
                                                .addAction(button().secondary().text("Add parameter")))
                                        .addBody(formFieldGroupBody()
                                                .addFieldGroup(formFieldGroup()
                                                        .expandable()
                                                        .addHeader(formFieldGroupHeader()
                                                                .title("Nested field group 1")
                                                                .description("Nested field group 1 description text.")
                                                                .addAction(button().plain().icon(trash)))
                                                        .addBody(formFieldGroupBody()
                                                                .addGroup(formGroup().fieldId("fg1-label0").required()
                                                                        .addLabel(formGroupLabel("Label 1"))
                                                                        .addControl(formGroupControl()
                                                                                .addControl(textInput("fg1-label0"))))
                                                                .addGroup(formGroup().fieldId("fg1-label1").required()
                                                                        .addLabel(formGroupLabel("Label 2"))
                                                                        .addControl(formGroupControl()
                                                                                .addControl(textInput("fg1-label1"))))))
                                                .addFieldGroup(formFieldGroup()
                                                        .expandable()
                                                        .addHeader(formFieldGroupHeader()
                                                                .title("Nested field group 2")
                                                                .description("Nested field group 2 description text.")
                                                                .addAction(button().plain().icon(trash)))
                                                        .addBody(formFieldGroupBody()
                                                                .addGroup(formGroup().fieldId("fg2-label0").required()
                                                                        .addLabel(formGroupLabel("Label 1"))
                                                                        .addControl(formGroupControl()
                                                                                .addControl(textInput("fg2-label0"))))
                                                                .addGroup(formGroup().fieldId("fg2-label1").required()
                                                                        .addLabel(formGroupLabel("Label 2"))
                                                                        .addControl(formGroupControl()
                                                                                .addControl(textInput("fg2-label1"))))))
                                                .addFieldGroup(formFieldGroup()
                                                        .expandable()
                                                        .addHeader(formFieldGroupHeader()
                                                                .title("Nested field group 3")
                                                                .description("Nested field group 3 description text.")
                                                                .addAction(button().plain().icon(trash)))
                                                        .addBody(formFieldGroupBody()
                                                                .addGroup(formGroup().fieldId("fg3-label0").required()
                                                                        .addLabel(formGroupLabel("Label 1"))
                                                                        .addControl(formGroupControl()
                                                                                .addControl(textInput("fg3-label0"))))
                                                                .addGroup(formGroup().fieldId("fg3-label1").required()
                                                                        .addLabel(formGroupLabel("Label 2"))
                                                                        .addControl(formGroupControl()
                                                                                .addControl(textInput("fg3-label1"))))))
                                                .addGroup(formGroup().fieldId("fg4-label0").required()
                                                        .addLabel(formGroupLabel("Label 1"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg4-label0"))))
                                                .addGroup(formGroup().fieldId("fg5-label0").required()
                                                        .addLabel(formGroupLabel("Label 1"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg5-label0"))))))
                                .addFieldGroup(formFieldGroup()
                                        .expandable()
                                        .addHeader(formFieldGroupHeader()
                                                .title("Field group 2")
                                                .description("Field group 2 description text.")
                                                .addAction(button().link().text("Delete all"))
                                                .addAction(button().secondary().text("Add parameter")))
                                        .addBody(formFieldGroupBody()
                                                .addGroup(formGroup().fieldId("fg6-label0").required()
                                                        .addLabel(formGroupLabel("Label 1"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg6-label0"))))
                                                .addGroup(formGroup().fieldId("fg7-label1").required()
                                                        .addLabel(formGroupLabel("Label 2"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg7-label1"))))))
                                .addFieldGroup(formFieldGroup()
                                        .expandable()
                                        .addHeader(formFieldGroupHeader()
                                                .title("Field group 3")
                                                .description("Field group 3 description text."))
                                        .addBody(formFieldGroupBody()
                                                .addGroup(formGroup().fieldId("fg8-label0").required()
                                                        .addLabel(formGroupLabel("Label 1"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg8-label0"))))
                                                .addGroup(formGroup().fieldId("fg9-label1").required()
                                                        .addLabel(formGroupLabel("Label 2"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg9-label1"))))))
                                .addFieldGroup(formFieldGroup()
                                        .addHeader(formFieldGroupHeader()
                                                .title("Field group 4 (non-expandable)")
                                                .description("Field group 4 description text.")
                                                .addAction(button().link().text("Delete all"))
                                                .addAction(button().secondary().text("Add parameter")))
                                        .addBody(formFieldGroupBody()
                                                .addGroup(formGroup().fieldId("fg10-label0").required()
                                                        .addLabel(formGroupLabel("Label 1"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg10-label0"))))
                                                .addGroup(formGroup().fieldId("fg11-label1").required()
                                                        .addLabel(formGroupLabel("Label 2"))
                                                        .addControl(formGroupControl()
                                                                .addControl(textInput("fg11-label1"))))))
                                .addGroup(formGroup().fieldId("fg12-label0").required()
                                        .addLabel(formGroupLabel("Label 1"))
                                        .addControl(formGroupControl()
                                                .addControl(textInput("fg12-label0"))))
                                .addGroup(formGroup().fieldId("fg13-label0").required()
                                        .addLabel(formGroupLabel("Label 1"))
                                        .addControl(formGroupControl()
                                                .addControl(textInput("fg13-label0")))))
                        .element()
        // @code-end:form-field-group
        ));
    }
}

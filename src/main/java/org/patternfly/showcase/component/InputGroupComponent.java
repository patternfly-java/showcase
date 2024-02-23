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

import org.jboss.elemento.By;
import org.patternfly.component.inputgroup.InputGroup;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.TextArea.textArea;
import static org.patternfly.component.form.TextAreaResize.both;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.inputgroup.InputGroup.inputGroup;
import static org.patternfly.component.inputgroup.InputGroupItem.inputGroupItem;
import static org.patternfly.component.inputgroup.InputGroupText.inputGroupText;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.actionMenuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.core.ValidationStatus.error;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.PredefinedIcon.fas;
import static org.patternfly.style.PredefinedIcon.questionCircle;
import static org.patternfly.thirdparty.popper.Placement.top;

public class InputGroupComponent extends SnippetPage {

    public InputGroupComponent() {
        super(InputGroup.class, "Input group",
                "https://www.patternfly.org/components/input-group/design-guidelines",
                p().textContent(
                                "An input group groups multiple related controls or inputs together so they appear as one control.")
                        .element());

        addSnippet(new Snippet("input-group-basic", "Basic",
                code.get("input-group-basic"), () ->
                // @code-start:input-group-basic
                div()
                        .add(inputGroup()
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textInput("input-group-basic-0")))
                                .addText(inputGroupText("@example.com")))
                        .add(br())
                        .add(inputGroup()
                                .addText(inputGroupText().icon(fas("at")))
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textInput("input-group-basic-1")
                                                .validated(error))))
                        .add(br())
                        .add(inputGroup()
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textInput("input-group-basic-3")))
                                .addText(inputGroupText("%").plain()))
                        .element()
                // @code-end:input-group-basic
        ));

        addSnippet(new Snippet("input-group-textarea", "With textarea",
                code.get("input-group-textarea"), () ->
                // @code-start:input-group-textarea
                div()
                        .add(inputGroup()
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textArea("input-group-textarea-0")
                                                .resize(both)))
                                .addItem(inputGroupItem()
                                        .addButton(button("Button").control())))
                        .element()
                // @code-end:input-group-textarea
        ));

        addSnippet(new Snippet("input-group-dropdown", "With dropdown",
                code.get("input-group-dropdown"), () ->
                // @code-start:input-group-dropdown
                div()
                        .add(inputGroup()
                                .addItem(inputGroupItem()
                                        .addDropdown(dropdown()
                                                .addToggle(menuToggle("Dropdown"))
                                                .addMenu(menu()
                                                        .addContent(menuContent()
                                                                .addList(menuList()
                                                                        .addItem(actionMenuItem("option-0", "Option 1"))
                                                                        .addItem(actionMenuItem("option-1", "Option 2"))
                                                                        .addItem(actionMenuItem("option-2", "Option 3")))))))
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textInput("input-group-dropdown-0")))
                                .addItem(inputGroupItem()
                                        .addButton(button("Button").control())))
                        .element()
                // @code-end:input-group-dropdown
        ));

        addSnippet(new Snippet("input-group-popover", "With popover",
                code.get("input-group-popover"), () ->
                // @code-start:input-group-popover
                div().style("width", "500px")
                        .add(inputGroup()
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textInput("input-group-popover-0")))
                                .addText(inputGroupText().id("input-group-popover-icon-0")
                                        .icon(questionCircle))
                                .add(popover(By.id("input-group-popover-icon-0"))
                                        .placement(top)
                                        .addBody("This field is an example of an input group with a popover.")))
                        .add(br())
                        .add(inputGroup()
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textInput("input-group-popover-1")))
                                .addText(inputGroupText().id("input-group-popover-icon-1")
                                        .icon(questionCircle).plain())
                                .add(popover(By.id("input-group-popover-icon-1"))
                                        .placement(top)
                                        .addBody("This field is an example of an input group with a popover.")))
                        .element()
                // @code-end:input-group-popover
        ));

        addSnippet(new Snippet("input-group-multiple-siblings", "With multiple group siblings",
                code.get("input-group-multiple-siblings"), () ->
                // @code-start:input-group-multiple-siblings
                div()
                        .add(inputGroup()
                                .addItem(inputGroupItem()
                                        .addButton(button("Button").control()))
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textArea("input-group-multiple-siblings-0")
                                                .resize(both)))
                                .addItem(inputGroupItem()
                                        .addButton(button("Button").control())))
                        .add(br())
                        .add(inputGroup()
                                .addItem(inputGroupItem()
                                        .addButton(button("Button").control()))
                                .addItem(inputGroupItem()
                                        .addButton(button("Button").control()))
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textArea("input-group-multiple-siblings-1")
                                                .resize(both)))
                                .addItem(inputGroupItem()
                                        .addButton(button("Button").control())))
                        .add(br())
                        .add(inputGroup()
                                .addText(inputGroupText()
                                        .icon(fas("dollar-sign")))
                                .addItem(inputGroupItem().fill()
                                        .addFormControl(textInput("input-group-multiple-siblings-2")))
                                .addText(inputGroupText().text(".00")))
                        .element()
                // @code-end:input-group-multiple-siblings
        ));
    }
}

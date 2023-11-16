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

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.actionlist.ActionList.actionList;
import static org.patternfly.component.actionlist.ActionListGroup.actionListGroup;
import static org.patternfly.component.actionlist.ActionListItem.actionListItem;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.PredefinedIcon.check;
import static org.patternfly.layout.PredefinedIcon.ellipsisV;
import static org.patternfly.layout.PredefinedIcon.times;
import static org.patternfly.showcase.Code.code;

public class ActionListComponent extends ComponentPage {

    public ActionListComponent() {
        super("Action list",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/actionlist/ActionList.html",
                "https://www.patternfly.org/components/action-list/design-guidelines",
                p().textContent(
                        "An action list is a group of actions, controls, or buttons with set spacing.")
                        .element());

        addSnippet(new Snippet("action-list-single-group", "Action list single group",
                code.get("action-list-single-group"), () ->
                // @code-start:action-list-single-group
                div()
                        .add(actionList()
                                .addItem(actionListItem()
                                        .add(button("Next").primary()))
                                .addItem(actionListItem()
                                        .add(button("Back").secondary())))
                        .add(br())
                        .add("With kebab")
                        .add(actionList()
                                .addItem(actionListItem()
                                        .add(button("Next").primary()))
                                .addItem(actionListItem()
                                        .add(button("Back").secondary()))
                                .addItem(actionListItem()
                                        .add(button(ellipsisV).plain()))) // TODO Add dropdown
                        .element()
        // @code-end:action-list-single-group
        ));

        addSnippet(new Snippet("action-list-icons", "Action list with icons",
                code.get("action-list-icons"), () ->
                // @code-start:action-list-icons
                div()
                        .add(actionList().icons()
                                .addItem(actionListItem()
                                        .add(button(times).plain()))
                                .addItem(actionListItem()
                                        .add(button(check).plain())))
                        .element()
        // @code-end:action-list-icons
        ));

        addSnippet(new Snippet("action-list-multiple-groups", "Action list multiple groups",
                code.get("action-list-multiple-groups"), () ->
                // @code-start:action-list-multiple-groups
                div()
                        .add("In modals, forms, data lists")
                        .add(actionList()
                                .addItem(actionListItem()
                                        .add(button("Save").primary()))
                                .addItem(actionListItem()
                                        .add(button("Cancel").link())))
                        .add(br())
                        .add("In wizards")
                        .add(actionList()
                                .addGroup(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Next").primary()))
                                        .addItem(actionListItem()
                                                .add(button("Back").secondary())))
                                .addGroup(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Cancel").link()))))
                        .element()
        // @code-end:action-list-multiple-groups
        ));
    }
}

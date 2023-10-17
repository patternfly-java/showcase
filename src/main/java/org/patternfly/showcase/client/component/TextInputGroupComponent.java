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

import org.patternfly.component.textinputgroup.TextInputGroup;

import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keyup;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
import static org.patternfly.component.textinputgroup.TextInputGroupMain.textInputGroupMain;
import static org.patternfly.component.textinputgroup.TextInputGroupUtilities.textInputGroupUtilities;
import static org.patternfly.layout.PredefinedIcon.search;
import static org.patternfly.layout.PredefinedIcon.times;
import static org.patternfly.showcase.client.Code.code;

public class TextInputGroupComponent extends ComponentPage {

    public TextInputGroupComponent() {
        super("Text input group",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/textinputgroup/TextInputGroup.html",
                "https://www.patternfly.org/components/text-input-group/design-guidelines",
                p().textContent(
                        "A text input group is a more flexible composable version of a text input. It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.")
                        .element());

        addSnippet(new Snippet("tig-basic", "Basic",
                code.get("tig-basic"),
                () -> div()
                        .add(textInputGroup()
                                .addMain(textInputGroupMain("basic-text-input-group-0")))
                        .element()));

        addSnippet(new Snippet("tig-disabled", "Disabled",
                code.get("tig-disabled"),
                () -> div()
                        .add(textInputGroup()
                                .addMain(textInputGroupMain("disabled-text-input-group-0")
                                        .value("Disabled"))
                                .disabled())
                        .element()));

        addSnippet(new Snippet("tig-utilities-and-icon", "Utilities and icon",
                code.get("tig-utilities-and-icon"), () -> {
                    TextInputGroup textInputGroup = textInputGroup();
                    textInputGroup
                            .addMain(textInputGroupMain("tig-utilities-and-icon-0")
                                    .addIcon(search)
                                    .placeholder("Placeholder")
                                    .withInputElement(inputElement -> inputElement.on(keyup, e -> {
                                        String value = ((HTMLInputElement) e.target).value;
                                        setVisible(textInputGroup.utilities(), !value.isEmpty());
                                    })))
                            .addUtilities(textInputGroupUtilities()
                                    .apply(e -> setVisible(e, false))
                                    .add(button(times).plain()
                                            .on(click, e -> {
                                                textInputGroup.clear();
                                                setVisible(textInputGroup.utilities(), false);
                                            })));
                    return div()
                            .add(textInputGroup)
                            .element();
                }));
    }
}

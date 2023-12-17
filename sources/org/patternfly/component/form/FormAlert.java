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
package org.patternfly.component.form;

import org.patternfly.component.alert.Alert;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.alert;
import static org.patternfly.style.Classes.component;

public class FormAlert extends FormSubComponent<HTMLElement, FormAlert> {

    // ------------------------------------------------------ factory

    public static FormAlert formAlert() {
        return new FormAlert();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "fa";

    FormAlert() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.form, alert)).element());
    }

    // ------------------------------------------------------ add

    public FormAlert addAlert(Alert alert) {
        return add(alert);
    }

    // ------------------------------------------------------ builder

    @Override
    public FormAlert that() {
        return this;
    }
}

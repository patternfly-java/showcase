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
package org.patternfly.component.code;

import org.patternfly.style.Classes;
import org.patternfly.style.PredefinedIcon;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.codeEditor;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.tab;

public class CodeEditorTabIcon extends CodeEditorSubComponent<HTMLElement, CodeEditorTabIcon> {

    // ------------------------------------------------------ factory

    public static CodeEditorTabIcon codeEditorTabIcon() {
        return new CodeEditorTabIcon(null);
    }

    public static CodeEditorTabIcon codeEditorTabIcon(PredefinedIcon icon) {
        return new CodeEditorTabIcon(i().css(icon.className).element());
    }

    public static CodeEditorTabIcon codeEditorTabIcon(String iconClass) {
        return new CodeEditorTabIcon(i().css(iconClass).element());
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ceti";

    CodeEditorTabIcon(HTMLElement icon) {
        super(SUB_COMPONENT_NAME, span().css(component(codeEditor, tab, Classes.icon)).element());
        if (icon != null) {
            add(icon);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorTabIcon that() {
        return this;
    }
}

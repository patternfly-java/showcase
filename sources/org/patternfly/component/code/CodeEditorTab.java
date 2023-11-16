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

import org.patternfly.component.SubComponent;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.code.CodeEditorTabIcon.codeEditorTabIcon;
import static org.patternfly.component.code.CodeEditorTabText.codeEditorTabText;
import static org.patternfly.layout.Classes.codeEditor;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.tab;

public class CodeEditorTab extends SubComponent<HTMLDivElement, CodeEditorTab> {

    // ------------------------------------------------------ factory

    public static CodeEditorTab codeEditorTab() {
        return new CodeEditorTab();
    }

    public static CodeEditorTab codeEditorTab(PredefinedIcon icon, String text) {
        return new CodeEditorTab()
                .addIcon(codeEditorTabIcon(icon))
                .addText(codeEditorTabText(text));
    }

    public static CodeEditorTab codeEditorTab(String iconClass, String text) {
        return new CodeEditorTab()
                .addIcon(codeEditorTabIcon(iconClass))
                .addText(codeEditorTabText(text));
    }

    // ------------------------------------------------------ instance

    CodeEditorTab() {
        super(div().css(component(codeEditor, tab)).element());
    }

    // ------------------------------------------------------ add

    public CodeEditorTab addIcon(CodeEditorTabIcon icon) {
        return add(icon);
    }

    public CodeEditorTab addText(CodeEditorTabText text) {
        return add(text);
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorTab that() {
        return this;
    }
}

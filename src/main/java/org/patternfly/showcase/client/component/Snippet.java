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

import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.IsElement;
import org.patternfly.component.code.CodeEditor;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.code.CodeEditor.codeEditor;
import static org.patternfly.component.code.CodeEditorAction.codeEditorAction;
import static org.patternfly.component.code.CodeEditorAction.codeEditorCopyToClipboardAction;
import static org.patternfly.component.code.CodeEditorActions.codeEditorActions;
import static org.patternfly.component.code.CodeEditorHeader.codeEditorHeader;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.flex;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.PredefinedIcon.undo;
import static org.patternfly.layout.Size.lg;

class Snippet implements IsElement<HTMLElement> {

    private final Supplier<HTMLElement> demoSupplier;
    private final HTMLElement root;
    private final HTMLElement preview;

    Snippet(String id, String header, String code, Supplier<HTMLElement> demo) {
        demoSupplier = demo;

        CodeEditor codeEditor;
        root = div().css("ws-example")
                .add(div().css("ws-example-header")
                        .add(div().css(layout(flex), modifier("space-items-none"), modifier("align-items-center"))
                                .add(title(3, header, lg).css("ws-heading", "ws-example-heading")
                                        .id(id)
                                        .attr(tabindex, -1)
                                        .add(a("#" + id).css("ws-heading-anchor")
                                                .aria(hidden, true)
                                                .attr(tabindex, -1)))))
                .add(preview = div().css("ws-preview")
                        .add(demo.get())
                        .element())
                .add(codeEditor = codeEditor().css("ws-code-editor")
                        .addHeader(codeEditorHeader()
                                .addActions(codeEditorActions()
                                        .addAction(codeEditorAction(button()
                                                .css("ws-code-editor-control")
                                                .control()
                                                .addIconAndText(PredefinedIcon.code, "Java"))
                                                .onAction((event, codeEditorAction) -> {
                                                    HTMLElement mainElement = codeEditorAction.mainComponent().find(
                                                            By.classname(component(Classes.codeEditor, main)));
                                                    setVisible(mainElement, !isVisible(mainElement));
                                                }))
                                        .addAction(codeEditorCopyToClipboardAction()
                                                .css("ws-code-editor-control"))
                                        .addAction(codeEditorAction(undo)
                                                .css("ws-code-editor-control")
                                                .onAction((event, codeEditorAction) -> undo()))))
                        .code(code))
                .element();

        HTMLElement mainElement = codeEditor.find(By.classname(component(Classes.codeEditor, main)));
        setVisible(mainElement, false);

    }

    private void undo() {
        removeChildrenFrom(preview);
        preview.appendChild(demoSupplier.get());
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}

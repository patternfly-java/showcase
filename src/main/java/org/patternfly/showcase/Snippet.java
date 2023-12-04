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
package org.patternfly.showcase;

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
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.flex;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.PredefinedIcon.undo;
import static org.patternfly.layout.Size.lg;

import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.jboss.elemento.IsElement;
import org.patternfly.component.code.CodeEditor;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLElement;

public class Snippet implements IsElement<HTMLElement> {

    private final Supplier<HTMLElement> demoSupplier;
    private final HTMLElement root;
    private final HTMLElement preview;

    public Snippet(String id, String header, String code, Supplier<HTMLElement> demo) {
        demoSupplier = demo;

        CodeEditor codeEditor;
        String codeId = Id.build(id, "code");
        String undoId = Id.build(id, "undo");

        root = div().css("ws-example")
                .add(div().css("ws-example-header")
                        .add(div().css(layout(flex), modifier("space-items-none"), modifier("align-items-center"))
                                .add(title(3, lg, header).css("ws-heading", "ws-example-heading")
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
                                                .id(codeId)
                                                .css("ws-code-editor-control")
                                                .control()
                                                .iconAndText(PredefinedIcon.code, "Java"))
                                                .onClick((event, ce) -> {
                                                    HTMLElement mainElement = ce
                                                            .find(By.classname(component(Classes.codeEditor, main)));
                                                    setVisible(mainElement, !isVisible(mainElement));
                                                }))
                                        .add(tooltip(By.id(codeId), "Toggle Java code"))
                                        .addAction(codeEditorCopyToClipboardAction("Copy code to clipboard", "Code copied")
                                                .css("ws-code-editor-control"))
                                        .addAction(codeEditorAction(undo)
                                                .id(undoId)
                                                .css("ws-code-editor-control")
                                                .onClick((event, codeEditorAction) -> undo()))
                                        .add(tooltip(By.id(undoId), "Undo"))))
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

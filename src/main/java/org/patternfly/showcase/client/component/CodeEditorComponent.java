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

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.code.CodeEditor.codeEditor;
import static org.patternfly.component.code.CodeEditorAction.codeEditorAction;
import static org.patternfly.component.code.CodeEditorAction.codeEditorCopyToClipboardAction;
import static org.patternfly.component.code.CodeEditorActions.codeEditorActions;
import static org.patternfly.component.code.CodeEditorHeader.codeEditorHeader;
import static org.patternfly.component.code.CodeEditorHeaderMain.codeEditorHeaderMain;
import static org.patternfly.component.code.CodeEditorLink.codeEditorViewShortcutsLink;
import static org.patternfly.component.code.CodeEditorLinks.codeEditorLinks;
import static org.patternfly.component.code.CodeEditorTab.codeEditorTab;
import static org.patternfly.layout.PredefinedIcon.download;
import static org.patternfly.layout.PredefinedIcon.upload;
import static org.patternfly.showcase.client.Code.code;

import org.patternfly.layout.PredefinedIcon;

public class CodeEditorComponent extends ComponentPage {

    private static final String CODE = "expandableSection()\n" +
            "      .indented()\n" +
            "      .addToggle(expandableSectionToggle(\"Show more\", \"Show less\"))\n" +
            "      .addContent(expandableSectionContent()\n" +
            "              .textContent(\"This content is visible only when the component is expanded.\"))";

    public CodeEditorComponent() {
        super("Code editor",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/code/CodeEditor.html",
                "https://www.patternfly.org/components/code-editor/design-guidelines",
                p().textContent(
                        "A code editor is a versatile text editor that allows for editing various languages. ")
                        .element());

        addSnippet(new Snippet("code-editor-basic", "Basic",
                code.get("code-editor-basic"), () ->
                // @code-start:code-editor-basic
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download))
                                                .addAction(codeEditorAction(upload)))
                                        .addTab(codeEditorTab(PredefinedIcon.code, "Java")))
                                .code(CODE))
                        .element()
        // @code-end:code-editor-basic
        ));

        addSnippet(new Snippet("code-editor-readonly", "Readonly",
                code.get("code-editor-readonly"), () ->
                // @code-start:code-editor-readonly
                div()
                        .add(codeEditor()
                                .readonly()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download))
                                                .addAction(codeEditorAction(button(upload).control().disabled())))
                                        .addTab(codeEditorTab(PredefinedIcon.code, "Java")))
                                .code(CODE))
                        .element()
        // @code-end:code-editor-readonly
        ));

        addSnippet(new Snippet("code-editor-no-actions", "Without actions",
                code.get("code-editor-no-actions"), () ->
                // @code-start:code-editor-no-actions
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addTab(codeEditorTab(PredefinedIcon.code, "Java")))
                                .code(CODE))
                        .element()
        // @code-end:code-editor-no-actions
        ));

        addSnippet(new Snippet("code-editor-no-tab", "Without tab",
                code.get("code-editor-no-tab"), () ->
                // @code-start:code-editor-no-tab
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download))
                                                .addAction(codeEditorAction(button(upload).control().disabled()))))
                                .code(CODE))
                        .element()
        // @code-end:code-editor-no-tab
        ));

        addSnippet(new Snippet("code-editor-no-actions-no-tab", "Without actions and tab",
                code.get("code-editor-no-actions-no-tab"), () ->
                // @code-start:code-editor-no-actions-no-tab
                div()
                        .add(codeEditor()
                                .code(CODE))
                        .element()
        // @code-end:code-editor-no-actions-no-tab
        ));

        addSnippet(new Snippet("code-editor-header-content", "With optional header content and keyboard shortcuts",
                code.get("code-editor-header-content"), () ->
                // @code-start:code-editor-header-content
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download))
                                                .addAction(codeEditorAction(upload)))
                                        .addMain(codeEditorHeaderMain()
                                                .textContent("Header main content"))
                                        .addLinks(codeEditorLinks()
                                                .addLink(codeEditorViewShortcutsLink()))
                                        .addTab(codeEditorTab(PredefinedIcon.code, "Java")))
                                .code(CODE))
                        .element()
        // @code-end:code-editor-header-content
        ));
    }
}

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

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.code.CodeBlock.codeBlock;
import static org.patternfly.component.code.CodeBlockAction.codeBlockAction;
import static org.patternfly.component.code.CodeBlockAction.codeBlockCopyToClipboardAction;
import static org.patternfly.layout.PredefinedIcon.play;

public class CodeBlockComponent extends ComponentPage {

    private static final String CODE = "apiVersion: helm.openshift.io/v1beta1/\n" +
            "kind: HelmChartRepository\n" +
            "metadata:\n" +
            "name: azure-sample-repo0oooo00ooo\n" +
            "spec:\n" +
            "connectionConfig:\n" +
            "url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs";

    public CodeBlockComponent() {
        super("Code block",
                "https://www.patternfly.org/components/code-block/design-guidelines",
                p().textContent(
                        "A code block is a component that contains 2 or more lines of read-only code. The code in a code block can be copied to the clipboard.")
                        .element());

        addSnippet(new Snippet("code-block-basic", "Basic",
                "No code yet",
                () -> div()
                        .add(codeBlock()
                                .addAction(codeBlockCopyToClipboardAction())
                                .addAction(codeBlockAction(play)
                                        .ariaLabel("Play")
                                        .onAction((action, codeBlock) -> console.log(
                                                "Play not yet implemented")))
                                .code(CODE))
                        .element()));

        addSnippet(new Snippet("code-block-expandable", "Expandable",
                "No code yet",
                () -> div()
                        .add(codeBlock()
                                .addAction(codeBlockCopyToClipboardAction())
                                .addAction(codeBlockAction(play)
                                        .ariaLabel("Play")
                                        .onAction((action, codeBlock) -> console.log("Play not yet implemented")))
                                .truncate()
                                .code(CODE))
                        .element()));
    }
}
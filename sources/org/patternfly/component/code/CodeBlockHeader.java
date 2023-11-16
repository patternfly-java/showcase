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

import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.header;

public class CodeBlockHeader extends SubComponent<HTMLDivElement, CodeBlockHeader>
        implements ComponentReference<CodeBlock> {

    // ------------------------------------------------------ factory

    public static CodeBlockHeader codeBlockHeader() {
        return new CodeBlockHeader();
    }

    // ------------------------------------------------------ instance

    CodeBlockActions actions;
    private CodeBlock codeBlock;

    CodeBlockHeader() {
        super(div().css(component(Classes.codeBlock, header)).element());
    }

    @Override
    public void passComponent(CodeBlock codeBlock) {
        this.codeBlock = codeBlock;
        if (actions != null) {
            actions.passComponent(codeBlock);
        }
    }

    @Override
    public CodeBlock mainComponent() {
        return codeBlock;
    }

    // ------------------------------------------------------ add

    public CodeBlockHeader addActions(CodeBlockActions actions) {
        return add(actions);
    }

    // override to assure internal wiring
    public CodeBlockHeader add(CodeBlockActions actions) {
        this.actions = actions;
        add(actions.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeBlockHeader that() {
        return this;
    }
}

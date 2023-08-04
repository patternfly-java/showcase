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
package org.patternfly.showcase.client.components;

import java.util.function.Supplier;

import org.jboss.elemento.IsElement;
import org.patternfly.components.Button;
import org.patternfly.components.Icon;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.*;
import static org.patternfly.resources.CSS.fas;

class Snippet implements IsElement<HTMLElement> {

    private final Supplier<HTMLElement> demoSupplier;
    private final HTMLElement toolbar;
    private final HTMLElement code;
    private final HTMLElement root;
    private HTMLElement demo;

    Snippet(String header, String code, Supplier<HTMLElement> demo) {
        demoSupplier = demo;
        root = section().css("sc-documentation").add(h(3, header).css("sc-documentation__heading")).add(this.demo = demo.get())
                .add(toolbar = div().css("sc-documentation__toolbar")
                        .add(Button.icon(Icon.icon(fas("code")), "Toggle code").onClick(this::toggleCode))
                        .add(Button.icon(Icon.icon(fas("copy")), "Copy code").onClick(this::copyCode))
                        .add(Button.icon(Icon.icon(fas("undo")), "Undo changes").onClick(this::undo)).element())
                .add(this.code = div().css("sc-documentation__code").add(pre().css("prettyprint").textContent(code)).element())
                .element();
        this.demo.classList.add("sc-documentation__example");
        setVisible(this.code, false);
    }

    private void toggleCode() {
        setVisible(code, !isVisible(code));
    }

    private void copyCode() {
        // TODO copy to clipboard
    }

    private void undo() {
        failSafeRemoveFromParent(demo);
        demo = demoSupplier.get();
        demo.classList.add("sc-documentation__example");
        insertBefore(demo, toolbar);
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}

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

import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Constants.tabindex;
import static org.patternfly.layout.Classes.flex;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Size.lg;

class Snippet implements IsElement<HTMLElement> {

    private final Supplier<HTMLElement> demoSupplier;
    private final HTMLElement root;
    private final HTMLElement preview;

    Snippet(String id, String header, String code, Supplier<HTMLElement> demo) {
        demoSupplier = demo;
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
                .add(div().css("ws-code-editor"))
                .element();
    }

    private void toggleCode() {
        // TODO toggle code
    }

    private void copyCode() {
        // TODO copy to clipboard
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

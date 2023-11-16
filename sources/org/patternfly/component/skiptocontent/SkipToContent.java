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
package org.patternfly.component.skiptocontent;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.Classes.component;

/**
 * A skip to content component allows screen reader and keyboard users to bypass navigation rather than tabbing through it.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/skip-to-content/html">https://www.patternfly.org/components/skip-to-content/html</a>
 */
public class SkipToContent extends BaseComponent<HTMLDivElement, SkipToContent> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new component with the given main ID and a default text.
     */
    public static SkipToContent skipToContent(String mainId) {
        return new SkipToContent(mainId, "Skip to content");
    }

    /**
     * Creates a new component with the given main ID and a text.
     */
    public static SkipToContent skipToContent(String mainId, String text) {
        return new SkipToContent(mainId, text);
    }

    // ------------------------------------------------------ instance

    SkipToContent(String mainId, String text) {
        super(div().css(component(Classes.skipToContent))
                .add(button(text, "#" + mainId).primary()).element(), ComponentType.SkipToContent);
    }

    // ------------------------------------------------------ builder

    @Override
    public SkipToContent that() {
        return this;
    }
}

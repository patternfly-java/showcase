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
package org.patternfly.layout.stack;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.style.Modifiers.Fill;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.stack;

public class StackItem extends BaseLayout<HTMLElement, StackItem> implements Fill<HTMLElement, StackItem> {

    // ------------------------------------------------------ factory

    public static StackItem stackItem() {
        return new StackItem(div());
    }

    public static <E extends HTMLElement> StackItem stackItem(HTMLContainerBuilder<E> builder) {
        return new StackItem(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> StackItem(HTMLContainerBuilder<E> builder) {
        super(builder.css(layout(stack, item)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public StackItem that() {
        return this;
    }
}

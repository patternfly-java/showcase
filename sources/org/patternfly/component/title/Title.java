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
package org.patternfly.component.title;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.layout.Size;

import elemental2.dom.HTMLHeadingElement;

import static org.jboss.elemento.Elements.h;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.title;

/**
 * A title component applies top and bottom margins, font-weight, font-size, and line-height to titles. The most common usage
 * for a title is to define headings within a page.
 *
 * @see <a href= "https://www.patternfly.org/components/title/html">https://www.patternfly.org/components/title/html</a>
 */
public class Title extends BaseComponent<HTMLHeadingElement, Title> {

    // ------------------------------------------------------ factory

    public static Title title(int level, String text) {
        return new Title(level, text, null);
    }

    public static Title title(int level, String text, Size size) {
        return new Title(level, text, size);
    }

    // ------------------------------------------------------ instance

    Title(int level, String text, Size size) {
        super(h(level, text).css(component(title)).element(), ComponentType.Title);
        if (size != null) {
            css(size.modifier);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public Title that() {
        return this;
    }
}

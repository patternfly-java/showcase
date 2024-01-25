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
package org.patternfly.layout.level;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.style.Modifiers.Gutter;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.level;

/**
 * The bullseye layout centers content, both vertically and horizontally within a container.
 *
 * @see <a href="https://www.patternfly.org/layouts/bullseye">https://www.patternfly.org/layouts/bullseye</a>
 */
public class Level extends BaseLayout<HTMLElement, Level> implements Gutter<HTMLElement, Level> {

    // ------------------------------------------------------ factory

    public static Level level() {
        return new Level(div());
    }

    public static <E extends HTMLElement> Level level(HTMLContainerBuilder<E> builder) {
        return new Level(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> Level(HTMLContainerBuilder<E> builder) {
        super(builder.css(layout(level)).element());
    }

    // ------------------------------------------------------ add

    public Level addItem(LevelItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    @Override
    public Level that() {
        return this;
    }
}

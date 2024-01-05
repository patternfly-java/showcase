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
package org.patternfly.showcase.layout;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.layout.level.Level.level;
import static org.patternfly.layout.level.LevelItem.levelItem;
import static org.patternfly.showcase.Code.code;

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

public class LevelLayout extends SnippetPage {

    public LevelLayout() {
        super("Level",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/level/Level.html",
                "https://www.patternfly.org/layouts/level/design-guidelines",
                p().textContent(
                        "Use a Level layout to evenly distribute content horizontally within a container.")
                        .element());

        addSnippet(new Snippet("level-basic", "Basic",
                code.get("level-basic"), () ->
                // @code-start:level-basic
                div().css("ws-core-l-level")
                        .add(level()
                                .addItem(levelItem().textContent("Level item"))
                                .addItem(levelItem().textContent("Level item"))
                                .addItem(levelItem().textContent("Level item")))
                        .element()
        // @code-end:level-basic
        ));

        addSnippet(new Snippet("level-gutter", "With gutters",
                code.get("level-gutter"), () ->
                // @code-start:level-gutter
                div().css("ws-core-l-level")
                        .add(level().gutter()
                                .addItem(levelItem().textContent("Level item"))
                                .addItem(levelItem().textContent("Level item"))
                                .addItem(levelItem().textContent("Level item")))
                        .element()
        // @code-end:level-gutter
        ));
    }
}
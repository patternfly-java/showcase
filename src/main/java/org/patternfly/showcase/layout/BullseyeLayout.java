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

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.layout.bullseye.Bullseye.bullseye;
import static org.patternfly.layout.bullseye.BullseyeItem.bullseyeItem;
import static org.patternfly.showcase.Code.code;

public class BullseyeLayout extends SnippetPage {

    public BullseyeLayout() {
        super("Bullseye",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/bullseye/Bullseye.html",
                "https://www.patternfly.org/layouts/bullseye/design-guidelines",
                p().textContent(
                        "The bullseye layout centers content, both vertically and horizontally within a container.")
                        .element());

        addSnippet(new Snippet("bullseye-basic", "Basic",
                code.get("bullseye-basic"), () ->
                // @code-start:bullseye-basic
                div().css("ws-core-l-bullseye")
                        .add(bullseye()
                                .addItem(bullseyeItem().textContent("Bullseye ◎ layout")))
                        .element()
        // @code-end:bullseye-basic
        ));
    }
}

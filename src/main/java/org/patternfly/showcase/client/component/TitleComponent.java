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

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.layout.Size._2xl;
import static org.patternfly.layout.Size._3xl;
import static org.patternfly.layout.Size._4xl;
import static org.patternfly.layout.Size.lg;
import static org.patternfly.layout.Size.md;

@Deprecated
public class TitleComponent extends ComponentPage {

    public TitleComponent() {
        super("Title",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/components/tile/design-guidelines",
                p().textContent("The title component applies top and bottom margins, font-weight, font-size, "
                        + "and line-height to titles.").element());

        addSnippet(new Snippet("sizes", "Title sizes", "Resources.get().title().getText()",
                () -> div()
                        .add(title(1, "4xl Title", _4xl))
                        .add(title(2, "3xl Title", _3xl))
                        .add(title(3, "2xl Title", _2xl))
                        .add(title(4, "xl Title", _3xl))
                        .add(title(5, "lg Title", lg))
                        .add(title(6, "md Title", md))
                        .element()));
    }
}

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

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.Size.*;

public class TitleComponent extends BaseComponent {

    public TitleComponent() {
        super("Title",
                p().textContent("The title component applies top and bottom margins, font-weight, font-size, "
                        + "and line-height to titles.").element(),
                singletonList(new Snippet("Title sizes", "Resources.get().title().getText()",
                        () -> div().add(title(1, "4xl Title", _4xl)).add(title(2, "3xl Title", _3xl))
                                .add(title(3, "2xl Title", _2xl)).add(title(4, "xl Title", _3xl)).add(title(5, "lg Title", lg))
                                .add(title(6, "md Title", md)).element())));
    }
}

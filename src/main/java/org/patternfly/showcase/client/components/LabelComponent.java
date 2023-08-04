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
import static org.patternfly.components.Label.label;

public class LabelComponent extends BaseComponent {

    public LabelComponent() {
        super("Label",
                p().textContent("Use a label when you want to highlight an element on a page to draw attention to it "
                        + "or make it more searchable.").element(),
                singletonList(new Snippet("Simple label", "Resources.get().label().getText()",
                        () -> div().add(" ").add(label("Compact Label", true)).element())));
    }
}

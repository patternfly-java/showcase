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

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Expandable.expandable;

public class ExpandableComponent extends ComponentPage {

    public ExpandableComponent() {
        super("Expandable",
                p().textContent("The expandable component is used to embed an expandable section within a form when "
                        + "you don’t want controls or information to be shown by default. This may be used to hide "
                        + "advanced features, for example.").element());

        addSnippet(new Snippet("simple", "Simple expandable", "Resources.get().expandable().getText()",
                () -> div()
                        .add(expandable().textContent("This content is visible only when the component is expanded."))
                        .element()));
    }
}

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

import org.patternfly.component.Tabs;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.layout.Classes.util;
import static org.patternfly.layout.PredefinedIcon.fas;

@Deprecated
public class TabsComponent extends ComponentPage {

    public TabsComponent() {
        super("Tabs",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/components/tabs/design-guidelines",
                p().textContent("Tabs are used to present a set on tabs for organizing content on a page. "
                        + "It must always be used together with a tab content component.").element());

        addSnippet(new Snippet("basic", "Basic", "Resources.get().tabs().getText()",
                () -> Tabs.tabs().add("Tab Item 1", div().textContent("Tab 1"))
                        .add("Tab Item 2", div().textContent("Tab 2")).add("Tab Item 3", div().textContent("Tab 3"))
                        .add("tab-item-4", tab -> tab.add("Tab 4").add(icon(fas("address-book")).css(util("pl-sm"))),
                                panel -> panel.textContent(("Tab 4")))
                        .element()));
    }
}

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
package org.patternfly.showcase.component;

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.tabs.Tab.tab;
import static org.patternfly.component.tabs.TabContent.tabContent;
import static org.patternfly.component.tabs.Tabs.tabs;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.showcase.Code.code;

public class TabsComponent extends SnippetPage {

    public TabsComponent() {
        super("Tabs",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/tabs/Tabs.html",
                "https://www.patternfly.org/components/tabs/design-guidelines",
                p().textContent("Tabs allow users to navigate between views within the same page or context.").element());

        addSnippet(new Snippet("tabs-default", "Default tabs",
                code.get("tabs-default"), () ->
                // @code-start:tabs-default
                div()
                        .add(tabs()
                                .addTab(tab("users", "Users")
                                        .addContent(tabContent().textContent("Users")))
                                .addTab(tab("containers", "Containers")
                                        .addContent(tabContent().textContent("Containers")))
                                .addTab(tab("database", "Database")
                                        .addContent(tabContent().textContent("Database")))
                                .addTab(tab("disabled", "Disabled")
                                        .disabled()
                                        .addContent(tabContent().textContent("Disabled")))
                                .addTab(tab("disabled-aria", "ARIA Disabled")
                                        .ariaDisabled()
                                        .addContent(tabContent().textContent("ARIA Disabled")))
                                .addTab(tab("disabled-aria-tt", "ARIA Disabled (Tooltip)")
                                        .ariaDisabled()
                                        .add(tooltip(
                                                "Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."))
                                        .addContent(tabContent().textContent("ARIA Disabled (Tooltip)"))))
                        .element()
                // @code-end:tabs-default
        ));
    }
}

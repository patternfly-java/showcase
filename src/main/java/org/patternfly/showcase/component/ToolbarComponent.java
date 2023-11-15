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

import org.patternfly.component.Search;
import org.patternfly.component.SingleSelect;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.OldToolbar.content;
import static org.patternfly.component.OldToolbar.group;
import static org.patternfly.component.OldToolbar.item;
import static org.patternfly.component.OldToolbar.toolbar;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.PredefinedIcon.fas;

@Deprecated
public class ToolbarComponent extends ComponentPage {

    public ToolbarComponent() {
        super("Toolbar",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/components/toolbar/design-guidelines",
                p().textContent(
                        "Toolbars can be included to allow a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a list, or a data visualization (chart), for example. The PatternFly Toolbar component is a flexible layout system that accommodates a variety of configurations that can be adapted to your specific needs.")
                        .element());

        addSnippet(new Snippet("items", "Items", "NYI",
                () -> div()
                        .add(toolbar()
                                .add(content().add(item().add(Search.search()))
                                        .add(item()
                                                .add(button("Action").secondary()))
                                        .add(item().separator()).add(item().add(button("Action").primary()))))
                        .element()));

        addSnippet(new Snippet("spacers", "Adjusting item spacers", "NYI", () -> div().add(toolbar().add(content()
                .add(item().css(modifier("spacer-none")).add(button("Action").secondary()))
                .add(item().css(modifier("spacer-sm")).add(button("Action").secondary()))
                .add(item().css(modifier("spacer-md")).add(button("Action").secondary()))
                .add(item().css(modifier("spacer-lg")).add(button("Action").secondary()))
                .add(item().separator())
                .add(item().css(modifier("spacer-none"), modifier("spacer-sm-on-md"),
                        modifier("spacer-md-on-lg"), modifier("spacer-lg-on-xl"))
                        .add(button("Action").secondary()))
                .add(item().add(button("Action").primary())).add(item().separator()).add(
                        group().css(modifier("space-items-lg")).add(item().add(button("Action").secondary()))
                                .add(item().add(button("Action").secondary())))))
                .element()));

        addSnippet(new Snippet("groups", "Groups", "NYI", () -> div()
                .add(toolbar().add(content()
                        .add(group().filter()
                                .add(item().add(SingleSelect.<String> single("Filter 1")
                                        .add(new String[] { "A", "B", "C" })))
                                .add(item().add(SingleSelect.<String> single("Filter 2")
                                        .add(new String[] { "1", "2", "3" })))
                                .add(item().add(SingleSelect.<String> single("Filter 3")
                                        .add(new String[] { "I", "II", "III" }))))
                        .add(group().iconButton().add(item().add(button(inlineIcon(fas("edit")), "Edit")))
                                .add(item().add(button(inlineIcon(fas("clone")), "Clone")))
                                .add(item().add(button(inlineIcon(fas("sync")), "Sync"))))
                        .add(group().button().add(item().add(button("Action").primary()))
                                .add(item().add(button("Secondary").secondary()))
                                .add(item().add(button("Tertiary").tertiary())))))
                .element()));

        addSnippet(new Snippet("toggle", "Toggle group", "NYI",
                () -> div()
                        .add(toolbar().add(content().add(group().toggle("show-on-lg")
                                .add(item().add(Search.search()))
                                .add(group().filter()
                                        .add(item().add(SingleSelect.<String> single("Status")
                                                .add(new String[] { "New", "Pending", "Running", "Canceled" })))
                                        .add(item().add(SingleSelect.<String> single("Risk")
                                                .add(new String[] { "Low", "Medium", "High" })))))))
                        .element()));
    }
}

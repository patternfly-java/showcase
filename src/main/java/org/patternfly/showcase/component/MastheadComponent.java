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
import static org.patternfly.component.masthead.Masthead.masthead;
import static org.patternfly.showcase.Code.code;

public class MastheadComponent extends SnippetPage {

    public MastheadComponent() {
        super("Icon",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/page/Masthead.html",
                "https://www.patternfly.org/components/masthead/design-guidelines",
                p().textContent(
                        "A masthead contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.")
                        .element());

        addSnippet(new Snippet("masthead-basic", "Basic",
                code.get("masthead-basic"), () ->
                // @code-start:masthead-basic
                div()
                        .add(masthead())
                        .element()
        // @code-end:masthead-basic
        ));
    }
}

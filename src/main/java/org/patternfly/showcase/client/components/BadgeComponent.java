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
import static org.patternfly.components.badge.Badge.badge;

public class BadgeComponent extends ComponentPage {

    public BadgeComponent() {
        super("Badge", p().textContent(
                "A badge is used to annotate other information like a label or an object name. Badges are typically used to reflect a count, e.g. number of object, number of events, number of unread, etc.")
                .element());
        addSnippet(new Snippet("badge-read", "Badge (read)", "Resources.get().badgeUnread().getText()", () -> div()
                .add(badge(7).read())
                .add(" ")
                .add(badge(24).read())
                .add(" ")
                .add(badge(423).read())
                .add(" ")
                .add(badge(1000).limit(999).read())
                .element()));
        addSnippet(new Snippet("badge-unread", "Badge (unread)", "Resources.get().badgeRead().getText()", () -> div()
                .add(badge(7).unread())
                .add(" ")
                .add(badge(24).unread())
                .add(" ")
                .add(badge(423).unread())
                .add(" ")
                .add(badge(1000).limit(999).read())
                .element()));
    }
}
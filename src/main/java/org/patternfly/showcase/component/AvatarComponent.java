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

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.avatar.Avatar.avatar;
import static org.patternfly.layout.Brightness.dark;
import static org.patternfly.layout.Brightness.light;
import static org.patternfly.layout.Size.lg;
import static org.patternfly.layout.Size.md;
import static org.patternfly.layout.Size.sm;
import static org.patternfly.layout.Size.xl;
import static org.patternfly.showcase.Assets.avatarDark;
import static org.patternfly.showcase.Assets.avatarLight;
import static org.patternfly.showcase.Code.code;

public class AvatarComponent extends SnippetPage {

    public AvatarComponent() {
        super("Avatar",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/avatar/Avatar.html",
                "https://www.patternfly.org/components/avatar/design-guidelines",
                p().textContent(
                        "An avatar is a visual used to represent a user. It may contain an image or a placeholder graphic.")
                        .element());

        addSnippet(new Snippet("avatar-basic", "Basic",
                code.get("avatar-basic"), () ->
                // @code-start:avatar-basic
                div()
                        .add(avatar(avatarLight, "avatar"))
                        .element()
        // @code-end:avatar-basic
        ));

        addSnippet(new Snippet("avatar-size", "Size variations",
                code.get("avatar-size"), () ->
                // @code-start:avatar-size
                div()
                        .add("Small").add(br())
                        .add(avatar(avatarLight, "avatar").size(sm))
                        .add(br()).add(br())
                        .add("Medium").add(br())
                        .add(avatar(avatarLight, "avatar").size(md))
                        .add(br()).add(br())
                        .add("Large").add(br())
                        .add(avatar(avatarLight, "avatar").size(lg))
                        .add(br()).add(br())
                        .add("Extra large").add(br())
                        .add(avatar(avatarLight, "avatar").size(xl))
                        .element()
        // @code-end:avatar-size
        ));

        addSnippet(new Snippet("avatar-bordered-light", "Bordered - light",
                code.get("avatar-bordered-light"), () ->
                // @code-start:avatar-bordered-light
                div()
                        .add(avatar(avatarLight, "avatar").border(light))
                        .element()
        // @code-end:avatar-bordered-light
        ));

        addSnippet(new Snippet("avatar-bordered-dark", "Bordered - dark",
                code.get("avatar-bordered-dark"), () ->
                // @code-start:avatar-bordered-dark
                div()
                        .add(avatar(avatarDark, "avatar").border(dark))
                        .element()
        // @code-end:avatar-bordered-dark
        ));
    }
}

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
import static org.patternfly.components.Avatar.avatar;

public class AvatarComponent extends BaseComponent {

    public AvatarComponent() {
        super("Avatar", p().textContent(
                "The avatar is used to represent a user. It may contain an image that represents the user or a placeholder graphic in the absence of an image. Typical usage is to represent the current user in the masthead. Related design guidelines: Masthead")
                .element(),
                singletonList(new Snippet("Simple avatar", "Resources.get().avatar().getText()",
                        () -> div().add(avatar("./img_avatar.svg", "avatar")).element())));
    }
}

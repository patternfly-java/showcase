package org.patternfly.showcase.documentation.components;

import org.patternfly.showcase.Resources;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Avatar.avatar;

public class AvatarComponent extends BaseComponent {

    public AvatarComponent() {
        super("Avatar",
                p().textContent(
                        "The avatar is used to represent a user. It may contain an image that represents the user or a placeholder graphic in the absence of an image. Typical usage is to represent the current user in the masthead. Related design guidelines: Masthead")
                        .element(),
                singletonList(new Snippet("Simple avatar", Resources.get().avatar().getText(),
                        () -> div().add(avatar("./assets/images/img_avatar.svg", "avatar")).element())));
    }
}

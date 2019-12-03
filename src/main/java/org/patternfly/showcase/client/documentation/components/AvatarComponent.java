package org.patternfly.showcase.client.documentation.components;

import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Collections.singletonList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.client.components.Avatar.avatar;

public class AvatarComponent extends BaseComponent {

    public AvatarComponent() {
        super(
                "Avatar",
                p().textContent(
                        "The avatar is used to represent a user. It may contain an image that represents the user or a placeholder graphic in the absence of an image. Typical usage is to represent the current user in the masthead. Related design guidelines: Masthead")
                        .element(),
                singletonList(
                        new Snippet("Simple avatar", Code.get().avatar().getText(),
                                () -> div().add(avatar("./images/img_avatar.svg", "avatar")).element())));
    }
}

package org.patternfly.showcase.client.components;

import org.patternfly.components.Badge;
import org.patternfly.showcase.client.Resources;
import org.patternfly.showcase.client.Snippet;

import static java.util.Arrays.asList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;

public class BadgeComponent extends BaseComponent {

    public BadgeComponent() {
        super("Badge",
                p().textContent(
                        "A badge is used to annotate other information like a label or an object name. Badges are typically used to reflect a count, e.g. number of object, number of events, number of unread, etc.")
                        .element(),
                asList(
                        new Snippet("Badge (read)", Resources.get().badgeUnread().getText(),
                                () -> div()
                                        .add(Badge.read(7))
                                        .add(" ")
                                        .add(Badge.read(24))
                                        .add(" ")
                                        .add(Badge.read(423))
                                        .add(" ")
                                        .add(Badge.read("999+")).element()),
                        new Snippet("Badge (unread)", Resources.get().badgeRead().getText(),
                                () -> div()
                                        .add(Badge.unread(7))
                                        .add(" ")
                                        .add(Badge.unread(24))
                                        .add(" ")
                                        .add(Badge.unread(423))
                                        .add(" ")
                                        .add(Badge.unread("999+")).element())));
    }
}

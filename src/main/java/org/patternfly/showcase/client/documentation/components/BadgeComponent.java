package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.Badge;
import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;

public class BadgeComponent extends BaseComponent {

    public BadgeComponent() {
        super("Badge",
                p().textContent(
                        "A badge is used to annotate other information like a label or an object name. Badges are typically used to reflect a count, e.g. number of object, number of events, number of unread, etc.")
                        .element(),
                asList(
                        new Snippet("Badge (read)", Code.get().badgeUnread().getText(),
                                () -> div()
                                        .add(Badge.read(7))
                                        .add(" ")
                                        .add(Badge.read(24))
                                        .add(" ")
                                        .add(Badge.read(423))
                                        .add(" ")
                                        .add(Badge.read("999+")).element()),
                        new Snippet("Badge (unread)", Code.get().badgeRead().getText(),
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

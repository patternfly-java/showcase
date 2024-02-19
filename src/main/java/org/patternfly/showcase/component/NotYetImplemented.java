package org.patternfly.showcase.component;

import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;

import static org.patternfly.component.alert.Alert.alert;
import static org.patternfly.core.Severity.danger;
import static org.patternfly.core.Severity.warning;

class NotYetImplemented implements IsElement<HTMLElement> {

    static NotYetImplemented nyi() {
        return new NotYetImplemented();
    }

    private final HTMLElement root;

    NotYetImplemented() {
        this.root = alert(warning, "Not yet implemented").inline().plain().element();
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}

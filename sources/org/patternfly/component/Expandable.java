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
package org.patternfly.component;

import java.util.function.Consumer;

import org.gwtproject.safehtml.shared.SafeHtml;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.IsElement;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.expandable;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.PredefinedIcon.angleRight;

/**
 * PatternFly expandable component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/xpandable">https://www.patternfly.org/v4/documentation/core/components/expandable</a>
 */
@Deprecated
public class Expandable extends BaseComponent<HTMLDivElement, Expandable> {

    // ------------------------------------------------------ factory

    public static Expandable expandable() {
        return new Expandable("Show more", "Show less");
    }

    // ------------------------------------------------------ instance

    private final CollapseExpand ceh;
    private final Consumer<Boolean> toggleText;

    private final HTMLElement button;
    private final HTMLElement text;
    private final HTMLContainerBuilder<HTMLDivElement> content;

    protected Expandable(String expandText, String collapseText) {
        super(div().css(component(expandable)).element(), "Expandable");
        this.ceh = new CollapseExpand();
        this.toggleText = expanded -> textElement().textContent = expanded ? collapseText : expandText;
        this.ceh.onToggle = this.toggleText;

        button = button().css(component(expandable, toggle)).aria("expanded", false)
                .on(click, e -> ceh.expand(element(), buttonElement(), contentElement()))
                .add(i().css(component(expandable, toggle, "icon"), angleRight.className))
                .add(text = span().textContent(expandText).element()).element();
        content = div().css(component(expandable, Classes.content)).hidden(true);

        // Don't use add() it's overridden!
        element().appendChild(button);
        element().appendChild(content.element());
    }

    private HTMLElement textElement() {
        return text;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement contentElement() {
        return content.element();
    }

    @Override
    public Expandable that() {
        return this;
    }

    // ------------------------------------------------------ content delegates

    @Override
    public Expandable add(IsElement element) {
        content.add(element);
        return this;
    }

    @Override
    public Expandable add(String text) {
        content.add(text);
        return this;
    }

    @Override
    public Expandable add(Node element) {
        content.add(element);
        return this;
    }

    @Override
    public Expandable addAll(HTMLElement... elements) {
        content.addAll(elements);
        return this;
    }

    @Override
    public Expandable addAll(IsElement... elements) {
        content.addAll(elements);
        return this;
    }

    @Override
    public Expandable textContent(String text) {
        content.textContent(text);
        return this;
    }

    @Override
    public Expandable innerHtml(SafeHtml html) {
        content.innerHtml(html);
        return this;
    }

    // ------------------------------------------------------ events

    public Expandable onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = toggleText.andThen(onToggle);
        return this;
    }
}

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

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.IsElement;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.children;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.controls;
import static org.patternfly.layout.Classes.current;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.scrollButton;
import static org.patternfly.layout.Classes.tab;
import static org.patternfly.layout.Classes.tabContent;
import static org.patternfly.layout.Classes.tabpanel;
import static org.patternfly.layout.PredefinedIcon.angleLeft;
import static org.patternfly.layout.PredefinedIcon.angleRight;

/**
 * PatternFly label component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/label/">https://www.patternfly.org/v4/documentation/core/components/label</a>
 */
@Deprecated
public class Tabs extends BaseComponent<HTMLDivElement, Tabs> {

    // ------------------------------------------------------ factory

    public static Tabs tabs() {
        return new Tabs();
    }

    // ------------------------------------------------------ instance

    public static final String ARIA_SCROLL_LEFT = "ARIA_SCROLL_LEFT";
    public static final String ARIA_SCROLL_RIGHT = "ARIA_SCROLL_RIGHT";
    private final HTMLButtonElement scrollLeft;
    private final HTMLButtonElement scrollRight;
    private final HTMLContainerBuilder<HTMLUListElement> tabs;
    private SelectHandler<TabContent> onSelect;

    protected Tabs() {
        super(div().element(), "Tabs");
        this.scrollLeft = button().css(component("tabs", scrollButton)).aria("label", "Scroll left")
                .add(Icon.icon(angleLeft.className)).element();
        this.scrollRight = button().css(component("tabs", scrollButton)).aria("label", "Scroll right")
                .add(Icon.icon(angleRight.className)).element();
        this.tabs = ul().css(component("tabs", list));
        add(div().css(component("tabs")).add(scrollLeft).add(tabs).add(scrollRight));
    }

    @Override
    public Tabs that() {
        return this;
    }

    // ------------------------------------------------------ api

    public <E extends HTMLElement> Tabs add(String title, IsElement<E> panel) {
        return add(Id.build(title), title, panel.element());
    }

    public Tabs add(String title, HTMLElement panel) {
        return add(Id.build(title), title, panel);
    }

    public <E extends HTMLElement> Tabs add(String id, String title, IsElement<E> panel) {
        return add(id, title, panel.element());
    }

    public Tabs add(String id, String title, HTMLElement panel) {
        return add(id, tabDisplay -> tabDisplay.textContent(title), panel);
    }

    public <E extends HTMLElement> Tabs add(String id, Consumer<HTMLContainerBuilder<HTMLButtonElement>> display,
            IsElement<E> panel) {
        return add(id, display, panel.element());
    }

    public Tabs add(String id, Consumer<HTMLContainerBuilder<HTMLButtonElement>> tabDisplay, HTMLElement panel) {
        return add(id, tabDisplay, panelDisplay -> panelDisplay.add(panel));
    }

    public Tabs add(String id, Consumer<HTMLContainerBuilder<HTMLButtonElement>> tabDisplay,
            Consumer<HTMLContainerBuilder<HTMLElement>> panelDisplay) {
        String tabId = Id.build(id, tab);
        String contentId = Id.build(id, content);

        HTMLContainerBuilder<HTMLButtonElement> tab = button().css(component("tabs", Classes.button)).id(tabId)
                .aria(controls, contentId).on(click, e -> select(id));
        tabDisplay.accept(tab);
        tabs.add(li().css(component("tabs", item)).add(tab));

        HTMLContainerBuilder<HTMLElement> panel = section().css(component(tabContent))
                .id(contentId)
                .aria(labelledBy, tabId)
                .attr("role", tabpanel)
                .attr("tabindex", 0);
        panelDisplay.accept(panel);
        panel.element().hidden = true;
        add(panel);

        if (tabs.element().childElementCount == 1) {
            select(id, false);
        }
        return this;
    }

    public Tabs select(String id) {
        return select(id, true);
    }

    public Tabs select(String id, boolean fireEvent) {
        String tabId = Id.build(id, tab);
        String contentId = Id.build(id, content);
        HTMLButtonElement button = tabs.find(By.id(tabId));
        HTMLElement content = find(By.id(contentId));

        if (button != null && content != null) {
            for (HTMLElement li : children(tabs)) {
                Elements.toggle(li, modifier(current), tabId.equals(li.firstElementChild.id));
            }
            for (HTMLElement section : findAll(By.element("section").and(By.selector("." + component(tabContent))))) {
                section.hidden = !contentId.equals(section.id);
            }
            if (fireEvent && onSelect != null) {
                TabContent tabContent = new TabContent(button, content);
                onSelect.onSelect(tabContent);
            }
        }
        return this;
    }

    // ------------------------------------------------------ events

    public Tabs onSelect(SelectHandler<TabContent> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ modifier

    public Tabs fill() {
        return css(modifier("fill"));
    }

    // ------------------------------------------------------ aria

    public Tabs ariaScrollLeftLabel(String label) {
        button(scrollLeft).aria(Aria.label, label);
        return this;
    }

    public Tabs ariaScrollRightLabel(String label) {
        button(scrollRight).aria(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ inner classes

    @Deprecated
    public static class TabContent {

        public final HTMLButtonElement tab;
        public final HTMLElement content;

        public TabContent(HTMLButtonElement tab, HTMLElement content) {
            this.tab = tab;
            this.content = content;
        }
    }
}

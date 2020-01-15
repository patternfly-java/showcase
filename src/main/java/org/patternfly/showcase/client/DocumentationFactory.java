package org.patternfly.showcase.client;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.function.Supplier;

import elemental2.dom.HTMLElement;
import org.patternfly.showcase.client.components.AlertComponent;
import org.patternfly.showcase.client.components.AvatarComponent;
import org.patternfly.showcase.client.components.BadgeComponent;
import org.patternfly.showcase.client.components.BrandComponent;
import org.patternfly.showcase.client.components.ButtonComponent;
import org.patternfly.showcase.client.components.CardComponent;
import org.patternfly.showcase.client.components.ChipComponent;
import org.patternfly.showcase.client.components.ChipGroupComponent;
import org.patternfly.showcase.client.components.ContentComponent;
import org.patternfly.showcase.client.components.ContextSelectorComponent;
import org.patternfly.showcase.client.components.DataListComponent;
import org.patternfly.showcase.client.components.DataTableComponent;
import org.patternfly.showcase.client.components.DropdownComponent;
import org.patternfly.showcase.client.components.EmptyStateComponent;
import org.patternfly.showcase.client.components.ExpandableComponent;
import org.patternfly.showcase.client.components.LabelComponent;
import org.patternfly.showcase.client.components.OptionsMenuComponent;
import org.patternfly.showcase.client.components.TitleComponent;
import org.patternfly.showcase.client.components.ToolbarComponent;
import org.patternfly.showcase.client.demos.ServerDemo;
import org.patternfly.showcase.client.demos.UserDemo;

import static java.util.Collections.singletonList;
import static org.elemento.Elements.code;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.content;
import static org.patternfly.resources.Constants.light;

class DocumentationFactory {

    private final Map<String, Supplier<Iterable<HTMLElement>>> elements;

    @SuppressWarnings("Convert2MethodRef")
    DocumentationFactory() {
        elements = new HashMap<>();
        elements.put("alert", () -> new AlertComponent());
        elements.put("avatar", () -> new AvatarComponent());
        elements.put("badge", () -> new BadgeComponent());
        elements.put("brand", () -> new BrandComponent());
        elements.put("button", () -> new ButtonComponent());
        elements.put("card", () -> new CardComponent());
        elements.put("chip", () -> new ChipComponent());
        elements.put("chip-group", () -> new ChipGroupComponent());
        elements.put("content", () -> new ContentComponent());
        elements.put("context-selector", () -> new ContextSelectorComponent());
        elements.put("data-list", () -> new DataListComponent());
        elements.put("data-table", () -> new DataTableComponent());
        elements.put("dropdown", () -> new DropdownComponent());
        elements.put("empty-state", () -> new EmptyStateComponent());
        elements.put("expandable", () -> new ExpandableComponent());
        elements.put("label", () -> new LabelComponent());
        elements.put("options-menu", () -> new OptionsMenuComponent());
        elements.put("select", () -> new ContextSelectorComponent());
        elements.put("title", () -> new TitleComponent());
        elements.put("toolbar", () -> new ToolbarComponent());
        elements.put("user-demo", () -> new UserDemo());
        elements.put("server-demo", () -> new ServerDemo());
    }

    Iterable<HTMLElement> get(String id) {
        return elements.getOrDefault(id, () -> new NotFound(id)).get();
    }

    private static class NotFound implements Iterable<HTMLElement> {

        private final HTMLElement root;

        NotFound(String id) {
            root = section().css(modifier(light), "sc-page")
                    .add(div().css(component(content))
                            .add(title(1, "Not found"))
                            .add(p().add("Unable to find documentation for ")
                                    .add(code().textContent(id))
                                    .add(".")))
                    .element();
        }

        @Override
        public Iterator<HTMLElement> iterator() {
            return singletonList(root).iterator();
        }
    }
}

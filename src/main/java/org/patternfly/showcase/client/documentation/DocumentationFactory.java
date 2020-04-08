package org.patternfly.showcase.client.documentation;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.function.Supplier;

import elemental2.dom.HTMLElement;
import org.patternfly.showcase.client.documentation.components.AlertComponent;
import org.patternfly.showcase.client.documentation.components.AvatarComponent;
import org.patternfly.showcase.client.documentation.components.BadgeComponent;
import org.patternfly.showcase.client.documentation.components.BrandComponent;
import org.patternfly.showcase.client.documentation.components.ButtonComponent;
import org.patternfly.showcase.client.documentation.components.CardComponent;
import org.patternfly.showcase.client.documentation.components.ChipComponent;
import org.patternfly.showcase.client.documentation.components.ChipGroupComponent;
import org.patternfly.showcase.client.documentation.components.ContentComponent;
import org.patternfly.showcase.client.documentation.components.ContextSelectorComponent;
import org.patternfly.showcase.client.documentation.components.DataListComponent;
import org.patternfly.showcase.client.documentation.components.DataTableComponent;
import org.patternfly.showcase.client.documentation.components.DropdownComponent;
import org.patternfly.showcase.client.documentation.components.EmptyStateComponent;
import org.patternfly.showcase.client.documentation.components.ExpandableComponent;
import org.patternfly.showcase.client.documentation.components.LabelComponent;
import org.patternfly.showcase.client.documentation.components.OptionsMenuComponent;
import org.patternfly.showcase.client.documentation.components.SelectComponent;
import org.patternfly.showcase.client.documentation.components.TabsComponent;
import org.patternfly.showcase.client.documentation.components.TitleComponent;
import org.patternfly.showcase.client.documentation.components.ToolbarComponent;
import org.patternfly.showcase.client.documentation.demos.server.ServerDemo;
import org.patternfly.showcase.client.documentation.demos.user.UserDemo;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.code;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Page.section;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.content;
import static org.patternfly.resources.Constants.light;

public class DocumentationFactory {

    private final Map<String, Supplier<Iterable<HTMLElement>>> elements;

    @SuppressWarnings("Convert2MethodRef")
    public DocumentationFactory() {
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
        elements.put("select", () -> new SelectComponent());
        elements.put("tabs", () -> new TabsComponent());
        elements.put("title", () -> new TitleComponent());
        elements.put("toolbar", () -> new ToolbarComponent());
        elements.put("user-demo", () -> new UserDemo());
        elements.put("server-demo", () -> new ServerDemo());
    }

    public Iterable<HTMLElement> get(String id) {
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

package org.patternfly.showcase.client.documentation;

import java.util.HashMap;
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
import org.patternfly.showcase.client.documentation.components.TitleComponent;
import org.patternfly.showcase.client.documentation.components.ToolbarComponent;
import org.patternfly.showcase.client.documentation.demos.UserDemo;

import static java.util.Collections.singletonList;

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
        elements.put("select", () -> new SelectComponent());
        elements.put("title", () -> new TitleComponent());
        elements.put("toolbar", () -> new ToolbarComponent());
        elements.put("user-demo", () -> new UserDemo());
    }

    Iterable<HTMLElement> get(String id) {
        Supplier<Iterable<HTMLElement>> supplier = elements.get(id);
        if (supplier != null) {
            return supplier.get();
        }
        return singletonList(new NotFound(id).element());
    }
}

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
package org.patternfly.showcase;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

import org.patternfly.showcase.component.AccordionComponent;
import org.patternfly.showcase.component.ActionListComponent;
import org.patternfly.showcase.component.AlertComponent;
import org.patternfly.showcase.component.AvatarComponent;
import org.patternfly.showcase.component.BackToTopComponent;
import org.patternfly.showcase.component.BadgeComponent;
import org.patternfly.showcase.component.BannerComponent;
import org.patternfly.showcase.component.BrandComponent;
import org.patternfly.showcase.component.ButtonComponent;
import org.patternfly.showcase.component.CardComponent;
import org.patternfly.showcase.component.CheckboxComponent;
import org.patternfly.showcase.component.ChipComponent;
import org.patternfly.showcase.component.CodeBlockComponent;
import org.patternfly.showcase.component.CodeEditorComponent;
import org.patternfly.showcase.component.DescriptionListComponent;
import org.patternfly.showcase.component.DropdownComponent;
import org.patternfly.showcase.component.EmptyStateComponent;
import org.patternfly.showcase.component.ExpandableSectionComponent;
import org.patternfly.showcase.component.FormComponent;
import org.patternfly.showcase.component.FormControlComponent;
import org.patternfly.showcase.component.FormSelectComponent;
import org.patternfly.showcase.component.HelperTextComponent;
import org.patternfly.showcase.component.IconComponent;
import org.patternfly.showcase.component.LabelComponent;
import org.patternfly.showcase.component.MastheadComponent;
import org.patternfly.showcase.component.MenuComponent;
import org.patternfly.showcase.component.MenuToggleComponent;
import org.patternfly.showcase.component.PanelComponent;
import org.patternfly.showcase.component.PopoverComponent;
import org.patternfly.showcase.component.RadioComponent;
import org.patternfly.showcase.component.SpinnerComponent;
import org.patternfly.showcase.component.TextAreaComponent;
import org.patternfly.showcase.component.TextContentComponent;
import org.patternfly.showcase.component.TextInputComponent;
import org.patternfly.showcase.component.TextInputGroupComponent;
import org.patternfly.showcase.component.TitleComponent;
import org.patternfly.showcase.component.TooltipComponent;
import org.patternfly.showcase.layout.BullseyeLayout;
import org.patternfly.showcase.layout.FlexLayout;
import org.patternfly.showcase.layout.GalleryLayout;
import org.patternfly.showcase.layout.GridLayout;
import org.patternfly.showcase.layout.LevelLayout;
import org.patternfly.showcase.layout.SplitLayout;
import org.patternfly.showcase.layout.StackLayout;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.style.Brightness.light;

@SuppressWarnings("Convert2MethodRef")
final class Placemanager {

    private static final Map<String, Supplier<Page>> places = new HashMap<>();

    static {
        places.put("contribute", () -> new ContributePage());
        places.put("get-in-touch", () -> new GetInTouchPage());
        places.put("get-started", () -> new GetStartedPage());
        places.put("home", () -> new HomePage());

        places.put("c-action-list", () -> new ActionListComponent());
        places.put("c-accordion", () -> new AccordionComponent());
        places.put("c-alert", () -> new AlertComponent());
        places.put("c-avatar", () -> new AvatarComponent());
        places.put("c-back-to-top", () -> new BackToTopComponent());
        places.put("c-badge", () -> new BadgeComponent());
        places.put("c-banner", () -> new BannerComponent());
        places.put("c-brand", () -> new BrandComponent());
        places.put("c-button", () -> new ButtonComponent());
        places.put("c-card", () -> new CardComponent());
        places.put("c-checkbox", () -> new CheckboxComponent());
        places.put("c-chip", () -> new ChipComponent());
        places.put("c-code-block", () -> new CodeBlockComponent());
        places.put("c-code-editor", () -> new CodeEditorComponent());
        // places.put("c-context-selector", () -> new ContextSelectorComponent());
        // places.put("c-data-list", () -> new DataListComponent());
        places.put("c-description-list", () -> new DescriptionListComponent());
        places.put("c-dropdown", () -> new DropdownComponent());
        places.put("c-empty-state", () -> new EmptyStateComponent());
        places.put("c-expandable-section", () -> new ExpandableSectionComponent());
        places.put("c-form", () -> new FormComponent());
        places.put("c-form-control", () -> new FormControlComponent());
        places.put("c-form-select", () -> new FormSelectComponent());
        places.put("c-helper-text", () -> new HelperTextComponent());
        places.put("c-icon", () -> new IconComponent());
        places.put("c-label", () -> new LabelComponent());
        places.put("c-masthead", () -> new MastheadComponent());
        places.put("c-menu", () -> new MenuComponent());
        places.put("c-menu-toggle", () -> new MenuToggleComponent());
        places.put("c-panel", () -> new PanelComponent());
        places.put("c-popover", () -> new PopoverComponent());
        places.put("c-radio", () -> new RadioComponent());
        // places.put("c-options-menu", () -> new OptionsMenuComponent());
        // places.put("c-select", () -> new SelectComponent());
        places.put("c-spinner", () -> new SpinnerComponent());
        // places.put("c-table", () -> new TableComponent());
        // places.put("c-tabs", () -> new TabsComponent());
        places.put("c-text-content", () -> new TextContentComponent());
        places.put("c-text-area", () -> new TextAreaComponent());
        places.put("c-text-input", () -> new TextInputComponent());
        places.put("c-text-input-group", () -> new TextInputGroupComponent());
        places.put("c-title", () -> new TitleComponent());
        places.put("c-tooltip", () -> new TooltipComponent());
        // places.put("c-toolbar", () -> new ToolbarComponent());

        places.put("l-bullseye", () -> new BullseyeLayout());
        places.put("l-flex", () -> new FlexLayout());
        places.put("l-gallery", () -> new GalleryLayout());
        places.put("l-grid", () -> new GridLayout());
        places.put("l-level", () -> new LevelLayout());
        places.put("l-split", () -> new SplitLayout());
        places.put("l-stack", () -> new StackLayout());

        // places.put("d-server", () -> new ServerDemo());
        // places.put("d-user", () -> new UserDemo());
    }

    static Supplier<Page> lookup(String id) {
        if (id.isEmpty() || id.equals("#")) {
            return () -> new HomePage();
        } else {
            return places.getOrDefault(id, () -> new NotFound(id));
        }
    }

    private static class NotFound implements Page {

        private final String place;

        private NotFound(String place) {
            this.place = place;
        }

        @Override
        public Iterable<HTMLElement> elements() {
            return singletonList(pageMainSection()
                    .background(light)
                    .css("sc-page")
                    .add(textContent()
                            .add(title(1, "Not Found"))
                            .add(p().textContent("Page " + place + " not found")))
                    .element());
        }
    }

    private Placemanager() {
    }
}

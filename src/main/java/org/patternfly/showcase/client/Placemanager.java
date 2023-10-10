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
package org.patternfly.showcase.client;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

import org.patternfly.showcase.client.component.AlertComponent;
import org.patternfly.showcase.client.component.AvatarComponent;
import org.patternfly.showcase.client.component.BadgeComponent;
import org.patternfly.showcase.client.component.BrandComponent;
import org.patternfly.showcase.client.component.ButtonComponent;
import org.patternfly.showcase.client.component.CardComponent;
import org.patternfly.showcase.client.component.CheckboxComponent;
import org.patternfly.showcase.client.component.ChipComponent;
import org.patternfly.showcase.client.component.CodeBlockComponent;
import org.patternfly.showcase.client.component.CodeEditorComponent;
import org.patternfly.showcase.client.component.ContextSelectorComponent;
import org.patternfly.showcase.client.component.DataListComponent;
import org.patternfly.showcase.client.component.DropdownComponent;
import org.patternfly.showcase.client.component.EmptyStateComponent;
import org.patternfly.showcase.client.component.ExpandableSectionComponent;
import org.patternfly.showcase.client.component.IconComponent;
import org.patternfly.showcase.client.component.LabelComponent;
import org.patternfly.showcase.client.component.MenuComponent;
import org.patternfly.showcase.client.component.OptionsMenuComponent;
import org.patternfly.showcase.client.component.SelectComponent;
import org.patternfly.showcase.client.component.SpinnerComponent;
import org.patternfly.showcase.client.component.TableComponent;
import org.patternfly.showcase.client.component.TabsComponent;
import org.patternfly.showcase.client.component.TextContentComponent;
import org.patternfly.showcase.client.component.TextInputComponent;
import org.patternfly.showcase.client.component.TextInputGroupComponent;
import org.patternfly.showcase.client.component.TitleComponent;
import org.patternfly.showcase.client.component.ToolbarComponent;
import org.patternfly.showcase.client.demo.server.ServerDemo;
import org.patternfly.showcase.client.demo.user.UserDemo;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;

@SuppressWarnings("Convert2MethodRef")
final class Placemanager {

    private static final Map<String, Supplier<Page>> places = new HashMap<>();

    static {
        places.put("contribute", () -> new ContributePage());
        places.put("get-in-touch", () -> new GetInTouchPage());
        places.put("get-started", () -> new GetStartedPage());
        places.put("home", () -> new HomePage());
        places.put("c-alert", () -> new AlertComponent());
        places.put("c-avatar", () -> new AvatarComponent());
        places.put("c-badge", () -> new BadgeComponent());
        places.put("c-brand", () -> new BrandComponent());
        places.put("c-button", () -> new ButtonComponent());
        places.put("c-card", () -> new CardComponent());
        places.put("c-checkbox", () -> new CheckboxComponent());
        places.put("c-chip", () -> new ChipComponent());
        places.put("c-code-block", () -> new CodeBlockComponent());
        places.put("c-code-editor", () -> new CodeEditorComponent());
        places.put("c-context-selector", () -> new ContextSelectorComponent());
        places.put("c-data-list", () -> new DataListComponent());
        places.put("c-dropdown", () -> new DropdownComponent());
        places.put("c-empty-state", () -> new EmptyStateComponent());
        places.put("c-expandable-section", () -> new ExpandableSectionComponent());
        places.put("c-icon", () -> new IconComponent());
        places.put("c-label", () -> new LabelComponent());
        places.put("c-menu", () -> new MenuComponent());
        places.put("c-options-menu", () -> new OptionsMenuComponent());
        places.put("c-select", () -> new SelectComponent());
        places.put("c-spinner", () -> new SpinnerComponent());
        places.put("c-table", () -> new TableComponent());
        places.put("c-tabs", () -> new TabsComponent());
        places.put("c-text-content", () -> new TextContentComponent());
        places.put("c-title", () -> new TitleComponent());
        places.put("c-text-input", () -> new TextInputComponent());
        places.put("c-text-input-group", () -> new TextInputGroupComponent());
        places.put("c-toolbar", () -> new ToolbarComponent());
        places.put("d-server", () -> new ServerDemo());
        places.put("d-user", () -> new UserDemo());
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
                    .light()
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

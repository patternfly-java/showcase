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

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Supplier;

import org.patternfly.showcase.client.components.AlertComponent;
import org.patternfly.showcase.client.components.AvatarComponent;
import org.patternfly.showcase.client.components.BadgeComponent;
import org.patternfly.showcase.client.components.BrandComponent;
import org.patternfly.showcase.client.components.ButtonComponent;
import org.patternfly.showcase.client.components.CardComponent;
import org.patternfly.showcase.client.components.ChipComponent;
import org.patternfly.showcase.client.components.ContentComponent;
import org.patternfly.showcase.client.components.ContextSelectorComponent;
import org.patternfly.showcase.client.components.DataListComponent;
import org.patternfly.showcase.client.components.DataTableComponent;
import org.patternfly.showcase.client.components.DropdownComponent;
import org.patternfly.showcase.client.components.EmptyStateComponent;
import org.patternfly.showcase.client.components.ExpandableComponent;
import org.patternfly.showcase.client.components.LabelComponent;
import org.patternfly.showcase.client.components.MenuComponent;
import org.patternfly.showcase.client.components.OptionsMenuComponent;
import org.patternfly.showcase.client.components.SelectComponent;
import org.patternfly.showcase.client.components.TabsComponent;
import org.patternfly.showcase.client.components.TitleComponent;
import org.patternfly.showcase.client.components.ToolbarComponent;
import org.patternfly.showcase.client.demos.server.ServerDemo;
import org.patternfly.showcase.client.demos.user.UserDemo;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.page.PageMainSection.pageMainSection;
import static org.patternfly.components.title.Title.title;

@SuppressWarnings("Convert2MethodRef")
final class Places {

    // ------------------------------------------------------ pages

    static final Map<String, Place> PAGES = new LinkedHashMap<>();
    static final Place CONTRIBUTE = new Place("contribute", "Contribute", () -> new ContributePage());
    static final Place GET_IN_TOUCH = new Place("get-in-touch", "Get in touch", () -> new GetInTouchPage());
    static final Place GET_STARTED = new Place("get-started", "Get started", () -> new GetStartedPage());
    static final Place HOME = new Place("home", "Home", () -> new HomePage());

    static {
        PAGES.put(CONTRIBUTE.id, CONTRIBUTE);
        PAGES.put(GET_IN_TOUCH.id, GET_IN_TOUCH);
        PAGES.put(GET_STARTED.id, GET_STARTED);
        PAGES.put(HOME.id, HOME);
    }

    // ------------------------------------------------------ components

    static final Map<String, Place> COMPONENTS = new LinkedHashMap<>();
    static final Place ALERT = new Place("c-alert", "Alert", () -> new AlertComponent());
    static final Place AVATAR = new Place("c-avatar", "Avatar", () -> new AvatarComponent());
    static final Place BADGE = new Place("c-badge", "Badge", () -> new BadgeComponent());
    static final Place BRAND = new Place("c-brand", "Brand", () -> new BrandComponent());
    static final Place BUTTON = new Place("c-button", "Button", () -> new ButtonComponent());
    static final Place CARD = new Place("c-card", "Card", () -> new CardComponent());
    static final Place CHIP = new Place("c-chip", "Chip", () -> new ChipComponent());
    static final Place CONTENT = new Place("c-content", "Content", () -> new ContentComponent());
    static final Place CONTEXT_SELECTOR = new Place("c-context-selector", "Context selector",
            () -> new ContextSelectorComponent());
    static final Place DATA_LIST = new Place("c-data-list", "Data list", () -> new DataListComponent());
    static final Place DATA_TABLE = new Place("c-data-table", "Data table", () -> new DataTableComponent());
    static final Place DROPDOWN = new Place("c-dropdown", "Dropdown", () -> new DropdownComponent());
    static final Place EMPTY_STATE = new Place("c-empty-state", "Empty state", () -> new EmptyStateComponent());
    static final Place EXPANDABLE = new Place("c-expandable", "Expandable", () -> new ExpandableComponent());
    static final Place LABEL = new Place("c-label", "Label", () -> new LabelComponent());
    static final Place MENU = new Place("c-menu", "Menu", () -> new MenuComponent());
    static final Place OPTIONS_MENU = new Place("c-options-menu", "Options menu", () -> new OptionsMenuComponent());
    static final Place SELECT = new Place("c-select", "Select", () -> new SelectComponent());
    static final Place TABS = new Place("c-tabs", "Tabs", () -> new TabsComponent());
    static final Place TITLE = new Place("c-title", "Title", () -> new TitleComponent());
    static final Place TOOLBAR = new Place("c-toolbar", "Toolbar", () -> new ToolbarComponent());

    static {
        COMPONENTS.put(ALERT.id, ALERT);
        COMPONENTS.put(AVATAR.id, AVATAR);
        COMPONENTS.put(BADGE.id, BADGE);
        COMPONENTS.put(BRAND.id, BRAND);
        COMPONENTS.put(BUTTON.id, BUTTON);
        COMPONENTS.put(CARD.id, CARD);
        COMPONENTS.put(CHIP.id, CHIP);
        COMPONENTS.put(CONTENT.id, CONTENT);
        COMPONENTS.put(CONTEXT_SELECTOR.id, CONTEXT_SELECTOR);
        COMPONENTS.put(DATA_LIST.id, DATA_LIST);
        COMPONENTS.put(DATA_TABLE.id, DATA_TABLE);
        COMPONENTS.put(DROPDOWN.id, DROPDOWN);
        COMPONENTS.put(EMPTY_STATE.id, EMPTY_STATE);
        COMPONENTS.put(EXPANDABLE.id, EXPANDABLE);
        COMPONENTS.put(LABEL.id, LABEL);
        COMPONENTS.put(MENU.id, MENU);
        COMPONENTS.put(OPTIONS_MENU.id, OPTIONS_MENU);
        COMPONENTS.put(SELECT.id, SELECT);
        COMPONENTS.put(TABS.id, TABS);
        COMPONENTS.put(TITLE.id, TITLE);
        COMPONENTS.put(TOOLBAR.id, TOOLBAR);
    }

    // ------------------------------------------------------ demos

    static final Map<String, Place> DEMOS = new LinkedHashMap<>();
    static final Place SERVER = new Place("d-server", "Server", () -> new ServerDemo());
    static final Place USER = new Place("d-user", "User", () -> new UserDemo());

    static {
        DEMOS.put(SERVER.id, SERVER);
        DEMOS.put(USER.id, USER);
    }

    // ------------------------------------------------------ lookup

    static final Map<String, Place> PLACES = new LinkedHashMap<>();

    static {
        PLACES.putAll(PAGES);
        PLACES.putAll(COMPONENTS);
        PLACES.putAll(DEMOS);
    }

    static Supplier<Page> lookup(String id) {
        return PLACES.getOrDefault(id, new Place("not-found", "Not Found", () -> new NotFound(id))).page;
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
                    .add(content()
                            .add(title(1, "Not Found"))
                            .add(p().textContent("Page " + place + " not found")))
                    .element());
        }
    }
}

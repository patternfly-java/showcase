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

import org.patternfly.components.navigation.Navigation;

import com.google.gwt.core.client.EntryPoint;

import static elemental2.dom.DomGlobal.location;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.hashchange;
import static org.patternfly.components.brand.Brand.brand;
import static org.patternfly.components.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.components.navigation.Navigation.navigation;
import static org.patternfly.components.navigation.NavigationItem.navigationItem;
import static org.patternfly.components.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.components.page.Masthead.pageMasthead;
import static org.patternfly.components.page.MastheadToggle.mastheadToggle;
import static org.patternfly.components.page.Page.page;
import static org.patternfly.components.page.PageMain.pageMain;
import static org.patternfly.components.page.PageSidebar.pageSidebar;
import static org.patternfly.components.page.PageSidebarBody.pageSidebarBody;
import static org.patternfly.components.page.SkipToContent.skipToContent;
import static org.patternfly.showcase.client.Assets.pfLogo;

public class Showcase implements EntryPoint {

    private final Navigation navigation;

    public Showcase() {
        navigation = navigation(expandable)
                .addItem(navigationItem("get-started", "Get started", "#get-started"))
                .addGroup(expandableNavigationGroup("components", "Components")
                        .addItem(navigationItem("c-alert", "Alert", "#c-alert"))
                        .addItem(navigationItem("c-avatar", "Avatar", "#c-avatar"))
                        .addItem(navigationItem("c-badge", "Badge", "#c-badge"))
                        .addItem(navigationItem("c-brand", "Brand", "#c-brand"))
                        .addItem(navigationItem("c-button", "Button", "#c-button"))
                        .addItem(navigationItem("c-card", "Card", "#c-card"))
                        .addItem(navigationItem("c-chip", "Chip", "#c-chip"))
                        .addItem(navigationItem("c-content", "Content", "#c-content"))
                        .addItem(navigationItem("c-context-selector", "Context selector", "#c-context-selector"))
                        .addItem(navigationItem("c-data-list", "Data list", "#c-data-list"))
                        .addItem(navigationItem("c-data-table", "Data table", "#c-data-table"))
                        .addItem(navigationItem("c-dropdown", "Dropdown", "#c-dropdown"))
                        .addItem(navigationItem("c-empty-state", "Empty state", "#c-empty-state"))
                        .addItem(navigationItem("c-expandable", "Expandable", "#c-expandable"))
                        .addGroup(expandableNavigationGroup("c-forms", "Forms")
                                .addItem(navigationItem("c-checkbox", "Checkbox", "#c-checkbox"))
                                .addItem(navigationItem("c-text-input", "Text input", "#c-text-input")))
                        .addItem(navigationItem("c-label", "Label", "#c-label"))
                        .addGroup(expandableNavigationGroup("c-menus", "Menus")
                                .addItem(navigationItem("c-menu", "Menu", "#c-menu")))
                        .addItem(navigationItem("c-options-menu", "Options menu", "#c-options-menu"))
                        .addItem(navigationItem("c-select", "Select", "#c-select"))
                        .addItem(navigationItem("c-tabs", "Tabs", "#c-tabs"))
                        .addItem(navigationItem("c-text-input-group", "Text input group", "#c-text-input-group"))
                        .addItem(navigationItem("c-title", "Title", "#c-title"))
                        .addItem(navigationItem("c-toolbar", "Toolbar", "#c-toolbar")))
                .addGroup(expandableNavigationGroup("demos", "Demos")
                        .addItem(navigationItem("d-server", "Server", "#d-server"))
                        .addItem(navigationItem("d-user", "User", "#d-user")))
                .addItem(navigationItem("contribute", "Contribute", "#contribute"))
                .addItem(navigationItem("get-in-touch", "Get in touch", "#get-in-touch"));
    }

    @Override
    public void onModuleLoad() {
        String mainId = "main-id";
        body().add(page()
                .addSkipToContent(skipToContent(mainId))
                .addMasthead(pageMasthead().css("ws-masthead")
                        .addToggle(mastheadToggle())
                        .addBrand(brand(pfLogo).style("--pf-v5-c-brand--Height:36px"), "#home"))
                .addSidebar(pageSidebar()
                        .addBody(pageSidebarBody()
                                .addNavigation(navigation)))
                .addMain(pageMain(mainId)));

        bind(window, hashchange, e -> navigate(location.hash));
        navigate(location.hash);
    }

    private void navigate(String hash) {
        String id = hash != null && hash.startsWith("#") ? hash.substring(1) : "";
        page().main().replace(Placemanager.lookup(id).get());
        navigation.select(id);
        PR.prettyPrint();
    }
}

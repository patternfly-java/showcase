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

import org.jboss.elemento.By;
import org.patternfly.component.navigation.Navigation;
import org.patternfly.thirdparty.ThirdParty;
import org.treblereel.j2cl.processors.annotations.GWT3EntryPoint;

import static elemental2.dom.DomGlobal.location;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.hashchange;
import static org.patternfly.component.backtotop.BackToTop.backToTop;
import static org.patternfly.component.brand.Brand.brand;
import static org.patternfly.component.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.component.navigation.Navigation.navigation;
import static org.patternfly.component.navigation.NavigationItem.navigationItem;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.component.page.PageMain.pageMain;
import static org.patternfly.component.page.PageSidebar.pageSidebar;
import static org.patternfly.component.page.PageSidebarBody.pageSidebarBody;
import static org.patternfly.component.skiptocontent.SkipToContent.skipToContent;
import static org.patternfly.showcase.Assets.pfLogo;
import static org.patternfly.style.Classes.brand;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Height;

@SuppressWarnings("unused")
public class Main {

    private Navigation navigation;

    @GWT3EntryPoint
    public void onModuleLoad() {
        ThirdParty.injectAll();
        navigation = navigation(expandable)
                .addItem(navigationItem("get-started", "Get started", "#get-started"))
                .addGroup(expandableNavigationGroup("components", "Components")
                        .addItem(navigationItem("c-accordion", "Accordion", "#c-accordion"))
                        .addItem(navigationItem("c-action-list", "Action list", "#c-action-list"))
                        .addItem(navigationItem("c-alert", "Alert", "#c-alert"))
                        .addItem(navigationItem("c-avatar", "Avatar", "#c-avatar"))
                        .addItem(navigationItem("c-back-to-top", "Back to top", "#c-back-to-top"))
                        .addItem(navigationItem("c-badge", "Badge", "#c-badge"))
                        .addItem(navigationItem("c-brand", "Brand", "#c-brand"))
                        .addItem(navigationItem("c-button", "Button", "#c-button"))
                        .addItem(navigationItem("c-card", "Card", "#c-card"))
                        .addItem(navigationItem("c-chip", "Chip", "#c-chip"))
                        .addItem(navigationItem("c-code-block", "Code block", "#c-code-block"))
                        .addItem(navigationItem("c-code-editor", "Code editor", "#c-code-editor"))
                        // .addItem(navigationItem("c-data-list", "Data list", "#c-data-list"))
                        // .addItem(navigationItem("c-empty-state", "Empty state", "#c-empty-state"))
                        .addItem(navigationItem("c-expandable-section", "Expandable section", "#c-expandable-section"))
                        .addGroup(expandableNavigationGroup("forms", "Forms")
                                .addItem(navigationItem("c-checkbox", "Checkbox", "#c-checkbox"))
                                .addItem(navigationItem("c-form", "Form", "#c-form"))
                                .addItem(navigationItem("c-form-control", "Form control", "#c-form-control"))
                                .addItem(navigationItem("c-form-select", "Form select", "#c-form-select"))
                                .addItem(navigationItem("c-radio", "Radio", "#c-radio"))
                                .addItem(navigationItem("c-text-area", "Text area", "#c-text-area"))
                                .addItem(navigationItem("c-text-input", "Text input", "#c-text-input")))
                        .addItem(navigationItem("c-helper-text", "Helper text", "#c-helper-text"))
                        .addItem(navigationItem("c-icon", "Icon", "#c-icon"))
                        .addItem(navigationItem("c-label", "Label", "#c-label"))
                        .addItem(navigationItem("c-masthead", "Masthead", "#c-masthead"))
                        .addGroup(expandableNavigationGroup("menus", "Menus")
                                .addItem(navigationItem("c-dropdown", "Dropdown", "#c-dropdown"))
                                .addItem(navigationItem("c-menu", "Menu", "#c-menu"))
                                .addItem(navigationItem("c-menu-toggle", "Menu toggle", "#c-menu-toggle")))
                        // .addItem(navigationItem("c-options-menu", "Options menu", "#c-options-menu"))
                        // .addItem(navigationItem("c-select", "Select", "#c-select"))
                        .addItem(navigationItem("c-popover", "Popover", "#c-popover"))
                        .addItem(navigationItem("c-spinner", "Spinner", "#c-spinner"))
                        // .addItem(navigationItem("c-table", "Table", "#c-table"))
                        // .addItem(navigationItem("c-tabs", "Tabs", "#c-tabs"))
                        .addItem(navigationItem("c-text-content", "Text content", "#c-text-content"))
                        .addItem(navigationItem("c-text-input-group", "Text input group", "#c-text-input-group"))
                        .addItem(navigationItem("c-title", "Title", "#c-title"))
                        .addItem(navigationItem("c-tooltip", "Tooltip", "#c-tooltip"))
                // .addItem(navigationItem("c-title", "Title", "#c-title"))
                // .addItem(navigationItem("c-toolbar", "Toolbar", "#c-toolbar"))
                )
                .addGroup(expandableNavigationGroup("layouts", "Layouts")
                        .addItem(navigationItem("l-bullseye", "Bullseye", "#l-bullseye"))
                        .addItem(navigationItem("l-flex", "Flex", "#l-flex"))
                        .addItem(navigationItem("l-gallery", "Gallery", "#l-gallery"))
                        .addItem(navigationItem("l-grid", "Grid", "#l-grid"))
                        .addItem(navigationItem("l-level", "Level", "#l-level"))
                        .addItem(navigationItem("l-split", "Split", "#l-split"))
                        .addItem(navigationItem("l-stack", "Stack", "#l-stack")))
                // .addGroup(expandableNavigationGroup("demos", "Demos")
                // .addItem(navigationItem("d-server", "Server", "#d-server"))
                // .addItem(navigationItem("d-user", "User", "#d-user")))
                .addItem(navigationItem("contribute", "Contribute", "#contribute"))
                .addItem(navigationItem("get-in-touch", "Get in touch", "#get-in-touch"));

        String mainId = "main-id";
        body().add(page()
                .addSkipToContent(skipToContent(mainId))
                .addMasthead(masthead().css("ws-masthead")
                        .addToggle(mastheadToggle())
                        .addBrand(brand(pfLogo, "PatternFly")
                                .style(componentVar(component(brand), Height).name, "36px"),
                                "#home"))
                .addSidebar(pageSidebar()
                        .addBody(pageSidebarBody()
                                .addNavigation(navigation)))
                .addMain(pageMain(mainId))
                .add(backToTop().css("ws-back-to-top")
                        .scrollableSelector(By.id(mainId))));

        bind(window, hashchange, e -> navigate(location.hash));
        navigate(location.hash);
    }

    private void navigate(String hash) {
        String id = hash != null && hash.startsWith("#") ? hash.substring(1) : "";
        page().main().replace(Placemanager.lookup(id).get());
        navigation.select(id);
    }
}

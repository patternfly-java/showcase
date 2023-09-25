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

import org.patternfly.components.navigation.ExpandableNavigationGroup;
import org.patternfly.components.navigation.Navigation;
import org.patternfly.components.navigation.NavigationItem;

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
import static org.patternfly.showcase.client.Places.COMPONENTS;
import static org.patternfly.showcase.client.Places.CONTRIBUTE;
import static org.patternfly.showcase.client.Places.DEMOS;
import static org.patternfly.showcase.client.Places.GET_IN_TOUCH;
import static org.patternfly.showcase.client.Places.GET_STARTED;
import static org.patternfly.showcase.client.Places.HOME;

public class Showcase implements EntryPoint {

    private final Navigation navigation;

    public Showcase() {
        ExpandableNavigationGroup components = expandableNavigationGroup("components", "Components");
        for (Place place : COMPONENTS.values()) {
            components.addItem(placeToItem(place));
        }

        ExpandableNavigationGroup demos = expandableNavigationGroup("demos", "Demos");
        for (Place place : DEMOS.values()) {
            demos.addItem(placeToItem(place));
        }

        navigation = navigation(expandable)
                .addItem(placeToItem(GET_STARTED))
                .addGroup(components)
                .addGroup(demos)
                .addItem(placeToItem(CONTRIBUTE))
                .addItem(placeToItem(GET_IN_TOUCH));
    }

    private NavigationItem placeToItem(Place place) {
        return navigationItem(place.id, place.title, place.place);
    }

    @Override
    public void onModuleLoad() {
        String mainId = "main-id";
        body().add(page()
                .addSkipToContent(skipToContent(mainId))
                .addMasthead(pageMasthead()
                        .addToggle(mastheadToggle())
                        .addBrand(brand(pfLogo), HOME.place))
                .addSidebar(pageSidebar()
                        .addBody(pageSidebarBody()
                                .addNavigation(navigation)))
                .addMain(pageMain(mainId)));

        bind(window, hashchange, e -> navigate(location.hash));
        navigate(location.hash);
    }

    private void navigate(String hash) {
        String id = hash != null && hash.startsWith("#") ? hash.substring(1) : "";
        page().main().replace(Places.lookup(id).get());
        navigation.select(id);
        PR.prettyPrint();
    }
}

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
import org.patternfly.component.navigation.NavigationItem;
import org.patternfly.showcase.component.AccordionComponent;
import org.patternfly.showcase.component.ActionListComponent;
import org.patternfly.showcase.component.AlertComponent;
import org.patternfly.showcase.component.AvatarComponent;
import org.patternfly.showcase.component.BackToTopComponent;
import org.patternfly.showcase.component.BadgeComponent;
import org.patternfly.showcase.component.BannerComponent;
import org.patternfly.showcase.component.BrandComponent;
import org.patternfly.showcase.component.BreadcrumbComponent;
import org.patternfly.showcase.component.ButtonComponent;
import org.patternfly.showcase.component.CardComponent;
import org.patternfly.showcase.component.CheckboxComponent;
import org.patternfly.showcase.component.ChipComponent;
import org.patternfly.showcase.component.CodeBlockComponent;
import org.patternfly.showcase.component.CodeEditorComponent;
import org.patternfly.showcase.component.DescriptionListComponent;
import org.patternfly.showcase.component.DrawerComponent;
import org.patternfly.showcase.component.DropdownComponent;
import org.patternfly.showcase.component.EmptyStateComponent;
import org.patternfly.showcase.component.ExpandableSectionComponent;
import org.patternfly.showcase.component.FormComponent;
import org.patternfly.showcase.component.FormControlComponent;
import org.patternfly.showcase.component.FormSelectComponent;
import org.patternfly.showcase.component.HelperTextComponent;
import org.patternfly.showcase.component.HintComponent;
import org.patternfly.showcase.component.IconComponent;
import org.patternfly.showcase.component.InputGroupComponent;
import org.patternfly.showcase.component.JumpLinksComponent;
import org.patternfly.showcase.component.LabelComponent;
import org.patternfly.showcase.component.ListComponent;
import org.patternfly.showcase.component.MastheadComponent;
import org.patternfly.showcase.component.MenuComponent;
import org.patternfly.showcase.component.MenuToggleComponent;
import org.patternfly.showcase.component.PanelComponent;
import org.patternfly.showcase.component.PopoverComponent;
import org.patternfly.showcase.component.ProgressComponent;
import org.patternfly.showcase.component.RadioComponent;
import org.patternfly.showcase.component.SimpleListComponent;
import org.patternfly.showcase.component.SkeletonComponent;
import org.patternfly.showcase.component.SliderComponent;
import org.patternfly.showcase.component.SpinnerComponent;
import org.patternfly.showcase.component.SwitchComponent;
import org.patternfly.showcase.component.TabsComponent;
import org.patternfly.showcase.component.TextAreaComponent;
import org.patternfly.showcase.component.TextContentComponent;
import org.patternfly.showcase.component.TextInputComponent;
import org.patternfly.showcase.component.TextInputGroupComponent;
import org.patternfly.showcase.component.TitleComponent;
import org.patternfly.showcase.component.ToggleGroupComponent;
import org.patternfly.showcase.component.TooltipComponent;
import org.patternfly.showcase.component.TruncateComponent;
import org.patternfly.showcase.layout.BullseyeLayout;
import org.patternfly.showcase.layout.FlexLayout;
import org.patternfly.showcase.layout.GalleryLayout;
import org.patternfly.showcase.layout.GridLayout;
import org.patternfly.showcase.layout.LevelLayout;
import org.patternfly.showcase.layout.SplitLayout;
import org.patternfly.showcase.layout.StackLayout;
import org.patternfly.showcase.router.Place;
import org.patternfly.showcase.router.PlaceManager;
import org.patternfly.thirdparty.ThirdParty;
import org.treblereel.j2cl.processors.annotations.GWT3EntryPoint;

import static org.jboss.elemento.Elements.body;
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

@SuppressWarnings({"Convert2MethodRef", "unused"})
public class Main {

    static final String MAIN_ID = "pfj-main-id";

    @GWT3EntryPoint
    public void onModuleLoad() {
        ThirdParty.injectAll();
        PlaceManager placeManager = registerPlaces();
        Navigation navigation = setupNavigation(placeManager);
        setupBody(navigation);
        placeManager.start(By.id(MAIN_ID));
    }

    private PlaceManager registerPlaces() {
        PlaceManager pm = new PlaceManager(place -> new NotFound(place));

        pm.register(new Place("/contribute"), () -> new ContributePage());
        pm.register(new Place("/get-in-touch"), () -> new GetInTouchPage());
        pm.register(new Place("/get-started"), () -> new GetStartedPage());
        pm.register(new Place("/"), () -> new HomePage());

        pm.register(new Place("/components/action-list"), () -> new ActionListComponent());
        pm.register(new Place("/components/accordion"), () -> new AccordionComponent());
        pm.register(new Place("/components/alert"), () -> new AlertComponent());
        pm.register(new Place("/components/avatar"), () -> new AvatarComponent());
        pm.register(new Place("/components/back-to-top"), () -> new BackToTopComponent());
        pm.register(new Place("/components/badge"), () -> new BadgeComponent());
        pm.register(new Place("/components/banner"), () -> new BannerComponent());
        pm.register(new Place("/components/brand"), () -> new BrandComponent());
        pm.register(new Place("/components/breadcrumb"), () -> new BreadcrumbComponent());
        pm.register(new Place("/components/button"), () -> new ButtonComponent());
        pm.register(new Place("/components/card"), () -> new CardComponent());
        pm.register(new Place("/components/checkbox"), () -> new CheckboxComponent());
        pm.register(new Place("/components/chip"), () -> new ChipComponent());
        pm.register(new Place("/components/code-block"), () -> new CodeBlockComponent());
        pm.register(new Place("/components/code-editor"), () -> new CodeEditorComponent());
        pm.register(new Place("/components/description-list"), () -> new DescriptionListComponent());
        pm.register(new Place("/components/drawer"), () -> new DrawerComponent());
        pm.register(new Place("/components/dropdown"), () -> new DropdownComponent());
        pm.register(new Place("/components/empty-state"), () -> new EmptyStateComponent());
        pm.register(new Place("/components/expandable-section"), () -> new ExpandableSectionComponent());
        pm.register(new Place("/components/form"), () -> new FormComponent());
        pm.register(new Place("/components/form-control"), () -> new FormControlComponent());
        pm.register(new Place("/components/form-select"), () -> new FormSelectComponent());
        pm.register(new Place("/components/helper-text"), () -> new HelperTextComponent());
        pm.register(new Place("/components/hint"), () -> new HintComponent());
        pm.register(new Place("/components/icon"), () -> new IconComponent());
        pm.register(new Place("/components/input-group"), () -> new InputGroupComponent());
        pm.register(new Place("/components/jump-links"), () -> new JumpLinksComponent());
        pm.register(new Place("/components/label"), () -> new LabelComponent());
        pm.register(new Place("/components/list"), () -> new ListComponent());
        pm.register(new Place("/components/masthead"), () -> new MastheadComponent());
        pm.register(new Place("/components/menu"), () -> new MenuComponent());
        pm.register(new Place("/components/menu-toggle"), () -> new MenuToggleComponent());
        pm.register(new Place("/components/panel"), () -> new PanelComponent());
        pm.register(new Place("/components/popover"), () -> new PopoverComponent());
        pm.register(new Place("/components/progress"), () -> new ProgressComponent());
        pm.register(new Place("/components/radio"), () -> new RadioComponent());
        pm.register(new Place("/components/simple-list"), () -> new SimpleListComponent());
        pm.register(new Place("/components/skeleton"), () -> new SkeletonComponent());
        pm.register(new Place("/components/slider"), () -> new SliderComponent());
        pm.register(new Place("/components/spinner"), () -> new SpinnerComponent());
        pm.register(new Place("/components/switch"), () -> new SwitchComponent());
        pm.register(new Place("/components/tabs"), () -> new TabsComponent());
        pm.register(new Place("/components/text-content"), () -> new TextContentComponent());
        pm.register(new Place("/components/text-area"), () -> new TextAreaComponent());
        pm.register(new Place("/components/text-input"), () -> new TextInputComponent());
        pm.register(new Place("/components/text-input-group"), () -> new TextInputGroupComponent());
        pm.register(new Place("/components/title"), () -> new TitleComponent());
        pm.register(new Place("/components/toggle-group"), () -> new ToggleGroupComponent());
        pm.register(new Place("/components/tooltip"), () -> new TooltipComponent());
        pm.register(new Place("/components/truncate"), () -> new TruncateComponent());

        pm.register(new Place("/layouts/bullseye"), () -> new BullseyeLayout());
        pm.register(new Place("/layouts/flex"), () -> new FlexLayout());
        pm.register(new Place("/layouts/gallery"), () -> new GalleryLayout());
        pm.register(new Place("/layouts/grid"), () -> new GridLayout());
        pm.register(new Place("/layouts/level"), () -> new LevelLayout());
        pm.register(new Place("/layouts/split"), () -> new SplitLayout());
        pm.register(new Place("/layouts/stack"), () -> new StackLayout());

        return pm;
    }

    private Navigation setupNavigation(PlaceManager pm) {
        return navigation(expandable)
                .addItem(ni("get-started", "Get started"))
                .addGroup(expandableNavigationGroup("components", "Components")
                        .addItem(ni("/components/accordion", "Accordion"))
                        .addItem(ni("/components/action-list", "Action list"))
                        .addItem(ni("/components/alert", "Alert"))
                        .addItem(ni("/components/avatar", "Avatar"))
                        .addItem(ni("/components/back-to-top", "Back to top"))
                        .addItem(ni("/components/badge", "Badge"))
                        .addItem(ni("/components/banner", "Banner"))
                        .addItem(ni("/components/brand", "Brand"))
                        .addItem(ni("/components/breadcrumb", "Breadcrumb"))
                        .addItem(ni("/components/button", "Button"))
                        .addItem(ni("/components/card", "Card"))
                        .addItem(ni("/components/chip", "Chip"))
                        .addItem(ni("/components/code-block", "Code block"))
                        .addItem(ni("/components/code-editor", "Code editor"))
                        .addItem(ni("/components/description-list", "Description list"))
                        .addItem(ni("/components/drawer", "Drawer"))
                        .addItem(ni("/components/empty-state", "Empty state"))
                        .addItem(ni("/components/expandable-section", "Expandable section"))
                        .addGroup(expandableNavigationGroup("components/forms", "Forms")
                                .addItem(ni("/components/forms/checkbox", "Checkbox"))
                                .addItem(ni("/components/forms/form", "Form"))
                                .addItem(ni("/components/forms/form-control", "Form control"))
                                .addItem(ni("/components/forms/form-select", "Form select"))
                                .addItem(ni("/components/forms/radio", "Radio"))
                                .addItem(ni("/components/forms/text-area", "Text area"))
                                .addItem(ni("/components/forms/text-input", "Text input")))
                        .addItem(ni("/components/helper-text", "Helper text"))
                        .addItem(ni("/components/hint", "Hint"))
                        .addItem(ni("/components/icon", "Icon"))
                        .addItem(ni("/components/input-group", "Input group"))
                        .addItem(ni("/components/jump-links", "Jump links"))
                        .addItem(ni("/components/label", "Label"))
                        .addItem(ni("/components/list", "List"))
                        .addItem(ni("/components/masthead", "Masthead"))
                        .addGroup(expandableNavigationGroup("menus", "Menus")
                                .addItem(ni("/components/menus/dropdown", "Dropdown"))
                                .addItem(ni("/components/menus/menu", "Menu"))
                                .addItem(ni("/components/menus/menu-toggle", "Menu toggle")))
                        .addItem(ni("/components/panel", "Panel"))
                        .addItem(ni("/components/popover", "Popover"))
                        .addItem(ni("/components/progress", "Progress"))
                        .addItem(ni("/components/simple-list", "Simple list"))
                        .addItem(ni("/components/slider", "Slider"))
                        .addItem(ni("/components/skeleton", "Skeleton"))
                        .addItem(ni("/components/spinner", "Spinner"))
                        .addItem(ni("/components/switch", "Switch"))
                        .addItem(ni("/components/tabs", "Tabs"))
                        .addItem(ni("/components/text-content", "Text content"))
                        .addItem(ni("/components/text-input-group", "Text input group"))
                        .addItem(ni("/components/title", "Title"))
                        .addItem(ni("/components/toggle-group", "Toggle group"))
                        .addItem(ni("/components/tooltip", "Tooltip"))
                        .addItem(ni("/components/truncate", "Truncate"))
                )
                .addGroup(expandableNavigationGroup("layouts", "Layouts")
                        .addItem(ni("layouts/bullseye", "Bullseye"))
                        .addItem(ni("layouts/flex", "Flex"))
                        .addItem(ni("layouts/gallery", "Gallery"))
                        .addItem(ni("layouts/grid", "Grid"))
                        .addItem(ni("layouts/level", "Level"))
                        .addItem(ni("layouts/split", "Split"))
                        .addItem(ni("layouts/stack", "Stack")))
                .addItem(ni("contribute", "Contribute"))
                .addItem(ni("get-in-touch", "Get in touch"));
    }

    private NavigationItem ni(String route, String title) {
        return navigationItem(route, title, route);
    }

    private void setupBody(Navigation navigation) {
        body().add(page()
                .addSkipToContent(skipToContent(MAIN_ID))
                .addMasthead(masthead().css("ws-masthead")
                        .addToggle(mastheadToggle())
                        .addBrand(brand(pfLogo, "PatternFly")
                                        .style(componentVar(component(brand), Height).name, "36px"),
                                "/"))
                .addSidebar(pageSidebar()
                        .addBody(pageSidebarBody()
                                .addNavigation(navigation)))
                .addMain(pageMain(MAIN_ID))
                .add(backToTop().css("ws-back-to-top")
                        .scrollableSelector(By.id(MAIN_ID))));
    }
}

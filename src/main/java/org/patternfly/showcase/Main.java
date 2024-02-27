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
import org.patternfly.showcase.component.DividerComponent;
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
import org.patternfly.showcase.component.NavigationComponent;
import org.patternfly.showcase.component.PageComponent;
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

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.body;
import static org.patternfly.component.backtotop.BackToTop.backToTop;
import static org.patternfly.component.brand.Brand.brand;
import static org.patternfly.component.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.component.navigation.Navigation.navigation;
import static org.patternfly.component.navigation.NavigationItem.navigationItem;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadBrand.mastheadBrand;
import static org.patternfly.component.page.MastheadMain.mastheadMain;
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
        PlaceManager placeManager = registerPlaces()
                .root(By.id(MAIN_ID))
                .title(title -> "PatternFly Java • " + title)
                .notFound(place -> new NotFound(place));
        Navigation navigation = setupNavigation(placeManager);
        appendBody(navigation);
        placeManager
                .afterPlace((pm, place, page) -> navigation.select(place.route))
                .start();
    }

    private PlaceManager registerPlaces() {
        PlaceManager pm = new PlaceManager();

        pm.register(new Place("/"), () -> new HomePage());
        pm.register(new Place("/contribute", "Contribute"), () -> new ContributePage());
        pm.register(new Place("/get-in-touch", "Get in touch"), () -> new GetInTouchPage());
        pm.register(new Place("/get-started", "Get started"), () -> new GetStartedPage());

        pm.register(new Place("/components/accordion", "Accordion"), () -> new AccordionComponent());
        pm.register(new Place("/components/action-list", "Action list"), () -> new ActionListComponent());
        pm.register(new Place("/components/alert", "Alert"), () -> new AlertComponent());
        pm.register(new Place("/components/avatar", "Avatar"), () -> new AvatarComponent());
        pm.register(new Place("/components/back-to-top", "Back to top"), () -> new BackToTopComponent());
        pm.register(new Place("/components/badge", "Badge"), () -> new BadgeComponent());
        pm.register(new Place("/components/banner", "Banner"), () -> new BannerComponent());
        pm.register(new Place("/components/brand", "Brand"), () -> new BrandComponent());
        pm.register(new Place("/components/breadcrumb", "Breadcrumb"), () -> new BreadcrumbComponent());
        pm.register(new Place("/components/button", "Button"), () -> new ButtonComponent());
        pm.register(new Place("/components/card", "Card"), () -> new CardComponent());
        pm.register(new Place("/components/chip", "Chip"), () -> new ChipComponent());
        pm.register(new Place("/components/code-block", "Code block"), () -> new CodeBlockComponent());
        pm.register(new Place("/components/code-editor", "Code editor"), () -> new CodeEditorComponent());
        pm.register(new Place("/components/description-list", "Description list"), () -> new DescriptionListComponent());
        pm.register(new Place("/components/divider", "Divider"), () -> new DividerComponent());
        pm.register(new Place("/components/drawer", "Drawer"), () -> new DrawerComponent());
        pm.register(new Place("/components/empty-state", "Empty state"), () -> new EmptyStateComponent());
        pm.register(new Place("/components/expandable-section", "Expandable section"), () -> new ExpandableSectionComponent());
        pm.register(new Place("/components/forms/checkbox", "Checkbox"), () -> new CheckboxComponent());
        pm.register(new Place("/components/forms/form", "Form"), () -> new FormComponent());
        pm.register(new Place("/components/forms/form-control", "Form control"), () -> new FormControlComponent());
        pm.register(new Place("/components/forms/form-select", "Form select"), () -> new FormSelectComponent());
        pm.register(new Place("/components/forms/radio", "Radio"), () -> new RadioComponent());
        pm.register(new Place("/components/forms/text-area", "Text area"), () -> new TextAreaComponent());
        pm.register(new Place("/components/forms/text-input", "Text input"), () -> new TextInputComponent());
        pm.register(new Place("/components/helper-text", "Helper text"), () -> new HelperTextComponent());
        pm.register(new Place("/components/hint", "Hint"), () -> new HintComponent());
        pm.register(new Place("/components/icon", "Icon"), () -> new IconComponent());
        pm.register(new Place("/components/input-group", "Input group"), () -> new InputGroupComponent());
        pm.register(new Place("/components/jump-links", "Jump links"), () -> new JumpLinksComponent());
        pm.register(new Place("/components/label", "Label"), () -> new LabelComponent());
        pm.register(new Place("/components/list", "List"), () -> new ListComponent());
        pm.register(new Place("/components/masthead", "Masthead"), () -> new MastheadComponent());
        pm.register(new Place("/components/menus/dropdown", "Dropdown"), () -> new DropdownComponent());
        pm.register(new Place("/components/menus/menu", "Menu"), () -> new MenuComponent());
        pm.register(new Place("/components/menus/menu-toggle", "Menu toggle"), () -> new MenuToggleComponent());
        pm.register(new Place("/components/navigation", "Navigation"), () -> new NavigationComponent());
        pm.register(new Place("/components/page", "Page"), () -> new PageComponent());
        pm.register(new Place("/components/panel", "Panel"), () -> new PanelComponent());
        pm.register(new Place("/components/popover", "Popover"), () -> new PopoverComponent());
        pm.register(new Place("/components/progress", "Progress"), () -> new ProgressComponent());
        pm.register(new Place("/components/simple-list", "Simple list"), () -> new SimpleListComponent());
        pm.register(new Place("/components/skeleton", "Skeleton"), () -> new SkeletonComponent());
        pm.register(new Place("/components/slider", "Slider"), () -> new SliderComponent());
        pm.register(new Place("/components/spinner", "Spinner"), () -> new SpinnerComponent());
        pm.register(new Place("/components/switch", "Switch"), () -> new SwitchComponent());
        pm.register(new Place("/components/tabs", "Tabs"), () -> new TabsComponent());
        pm.register(new Place("/components/text-content", "Text"), () -> new TextContentComponent());
        pm.register(new Place("/components/text-input-group", "Text input group"), () -> new TextInputGroupComponent());
        pm.register(new Place("/components/title", "Title"), () -> new TitleComponent());
        pm.register(new Place("/components/toggle-group", "Toggle group"), () -> new ToggleGroupComponent());
        pm.register(new Place("/components/tooltip", "Tooltip"), () -> new TooltipComponent());
        pm.register(new Place("/components/truncate", "Truncate"), () -> new TruncateComponent());

        pm.register(new Place("/layouts/bullseye", "Bullseye"), () -> new BullseyeLayout());
        pm.register(new Place("/layouts/flex", "Flex"), () -> new FlexLayout());
        pm.register(new Place("/layouts/gallery", "Gallery"), () -> new GalleryLayout());
        pm.register(new Place("/layouts/grid", "Grid"), () -> new GridLayout());
        pm.register(new Place("/layouts/level", "Level"), () -> new LevelLayout());
        pm.register(new Place("/layouts/split", "Split"), () -> new SplitLayout());
        pm.register(new Place("/layouts/stack", "Stack"), () -> new StackLayout());

        return pm;
    }

    private Navigation setupNavigation(PlaceManager pm) {
        return navigation(expandable)
                .addItem(ni(pm.place("/get-started")))
                .addGroup(expandableNavigationGroup("components", "Components")
                        .addItem(ni(pm.place("/components/accordion")))
                        .addItem(ni(pm.place("/components/action-list")))
                        .addItem(ni(pm.place("/components/alert")))
                        .addItem(ni(pm.place("/components/avatar")))
                        .addItem(ni(pm.place("/components/back-to-top")))
                        .addItem(ni(pm.place("/components/badge")))
                        .addItem(ni(pm.place("/components/banner")))
                        .addItem(ni(pm.place("/components/brand")))
                        .addItem(ni(pm.place("/components/breadcrumb")))
                        .addItem(ni(pm.place("/components/button")))
                        .addItem(ni(pm.place("/components/card")))
                        .addItem(ni(pm.place("/components/chip")))
                        .addItem(ni(pm.place("/components/code-block")))
                        .addItem(ni(pm.place("/components/code-editor")))
                        .addItem(ni(pm.place("/components/description-list")))
                        .addItem(ni(pm.place("/components/divider")))
                        .addItem(ni(pm.place("/components/drawer")))
                        .addItem(ni(pm.place("/components/empty-state")))
                        .addItem(ni(pm.place("/components/expandable-section")))
                        .addGroup(expandableNavigationGroup("components/forms", "Forms")
                                .addItem(ni(pm.place("/components/forms/checkbox")))
                                .addItem(ni(pm.place("/components/forms/form")))
                                .addItem(ni(pm.place("/components/forms/form-control")))
                                .addItem(ni(pm.place("/components/forms/form-select")))
                                .addItem(ni(pm.place("/components/forms/radio")))
                                .addItem(ni(pm.place("/components/forms/text-area")))
                                .addItem(ni(pm.place("/components/forms/text-input")))
                        )
                        .addItem(ni(pm.place("/components/helper-text")))
                        .addItem(ni(pm.place("/components/hint")))
                        .addItem(ni(pm.place("/components/icon")))
                        .addItem(ni(pm.place("/components/input-group")))
                        .addItem(ni(pm.place("/components/jump-links")))
                        .addItem(ni(pm.place("/components/label")))
                        .addItem(ni(pm.place("/components/list")))
                        .addItem(ni(pm.place("/components/masthead")))
                        .addGroup(expandableNavigationGroup("menus", "Menus")
                                .addItem(ni(pm.place("/components/menus/dropdown")))
                                .addItem(ni(pm.place("/components/menus/menu")))
                                .addItem(ni(pm.place("/components/menus/menu-toggle")))
                        )
                        .addItem(ni(pm.place("/components/navigation")))
                        .addItem(ni(pm.place("/components/page")))
                        .addItem(ni(pm.place("/components/panel")))
                        .addItem(ni(pm.place("/components/popover")))
                        .addItem(ni(pm.place("/components/progress")))
                        .addItem(ni(pm.place("/components/simple-list")))
                        .addItem(ni(pm.place("/components/slider")))
                        .addItem(ni(pm.place("/components/skeleton")))
                        .addItem(ni(pm.place("/components/spinner")))
                        .addItem(ni(pm.place("/components/switch")))
                        .addItem(ni(pm.place("/components/tabs")))
                        .addItem(ni(pm.place("/components/text-content")))
                        .addItem(ni(pm.place("/components/text-input-group")))
                        .addItem(ni(pm.place("/components/title")))
                        .addItem(ni(pm.place("/components/toggle-group")))
                        .addItem(ni(pm.place("/components/tooltip")))
                        .addItem(ni(pm.place("/components/truncate")))
                )
                .addGroup(expandableNavigationGroup("layouts", "Layouts")
                        .addItem(ni(pm.place("/layouts/bullseye")))
                        .addItem(ni(pm.place("/layouts/flex")))
                        .addItem(ni(pm.place("/layouts/gallery")))
                        .addItem(ni(pm.place("/layouts/grid")))
                        .addItem(ni(pm.place("/layouts/level")))
                        .addItem(ni(pm.place("/layouts/split")))
                        .addItem(ni(pm.place("/layouts/stack")))
                )
                .addItem(ni(pm.place("/contribute")))
                .addItem(ni(pm.place("/get-in-touch")));
    }

    private NavigationItem ni(Place place) {
        return navigationItem(place.route, place.title, place.route);
    }

    private void appendBody(Navigation navigation) {
        body().add(page()
                .addSkipToContent(skipToContent(MAIN_ID))
                .addMasthead(masthead().css("ws-masthead")
                        .addToggle(mastheadToggle()
                                .toggleSidebar())
                        .addMain(mastheadMain()
                                .addBrand(mastheadBrand(a("/"))
                                        .addBrand(brand(pfLogo, "PatternFly")
                                                .style(componentVar(component(brand), Height).name, "36px")))))
                .addSidebar(pageSidebar()
                        .addBody(pageSidebarBody()
                                .addNavigation(navigation)))
                .addMain(pageMain(MAIN_ID))
                .add(backToTop().css("ws-back-to-top")
                        .scrollableSelector(By.id(MAIN_ID))));
    }
}

package org.jboss.elemento.router;

import java.util.Map;
import java.util.HashMap;
import java.util.function.Supplier;

import javax.annotation.processing.Generated;

import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Routes;

import elemental2.dom.HTMLElement;

/*
* WARNING! This class is generated. Do not modify.
*/
@Generated("org.jboss.elemento.router.processor.RouteProcessor")
public class RoutesImpl implements Routes {

    public static final Routes INSTANCE = new RoutesImpl();

    private final Map<Place, Supplier<Page>> places;

    private RoutesImpl() {
        places = new HashMap<>();
        places.put(new Place("/contribute", "Contribute", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.ContributePage());
        places.put(new Place("/get-in-touch", "Get in touch", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.GetInTouchPage());
        places.put(new Place("/get-started", "Get started", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.GetStartedPage());
        places.put(new Place("/", null, (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.HomePage());
        places.put(new Place("/components/accordion", "Accordion", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.AccordionComponent());
        places.put(new Place("/components/action-list", "Action list", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ActionListComponent());
        places.put(new Place("/components/alert", "Alert", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.AlertComponent());
        places.put(new Place("/components/avatar", "Avatar", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.AvatarComponent());
        places.put(new Place("/components/back-to-top", "Back to top", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.BackToTopComponent());
        places.put(new Place("/components/badge", "Badge", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.BadgeComponent());
        places.put(new Place("/components/banner", "Banner", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.BannerComponent());
        places.put(new Place("/components/brand", "Brand", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.BrandComponent());
        places.put(new Place("/components/breadcrumb", "Breadcrumb", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.BreadcrumbComponent());
        places.put(new Place("/components/button", "Button", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ButtonComponent());
        places.put(new Place("/components/card", "Card", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.CardComponent());
        places.put(new Place("/components/forms/checkbox", "Checkbox", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.CheckboxComponent());
        places.put(new Place("/components/chip", "Chip", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ChipComponent());
        places.put(new Place("/components/code-block", "Code block", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.CodeBlockComponent());
        places.put(new Place("/components/code-editor", "Code editor", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.CodeEditorComponent());
        places.put(new Place("/components/all-components", "All components", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ComponentsPage());
        places.put(new Place("/components/description-list", "Description list", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.DescriptionListComponent());
        places.put(new Place("/components/divider", "Divider", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.DividerComponent());
        places.put(new Place("/components/drawer", "Drawer", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.DrawerComponent());
        places.put(new Place("/components/menus/dropdown", "Dropdown", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.DropdownComponent());
        places.put(new Place("/components/empty-state", "Empty state", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.EmptyStateComponent());
        places.put(new Place("/components/expandable-section", "Expandable section", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ExpandableSectionComponent());
        places.put(new Place("/components/forms/form", "Form", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.FormComponent());
        places.put(new Place("/components/forms/form-control", "Form control", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.FormControlComponent());
        places.put(new Place("/components/forms/form-select", "Form select", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.FormSelectComponent());
        places.put(new Place("/components/helper-text", "Helper text", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.HelperTextComponent());
        places.put(new Place("/components/hint", "Hint", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.HintComponent());
        places.put(new Place("/components/icon", "Icon", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.IconComponent());
        places.put(new Place("/components/input-group", "Input group", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.InputGroupComponent());
        places.put(new Place("/components/jump-links", "Jump links", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.JumpLinksComponent());
        places.put(new Place("/components/label", "Label", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.LabelComponent());
        places.put(new Place("/components/list", "List", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ListComponent());
        places.put(new Place("/components/masthead", "Masthead", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.MastheadComponent());
        places.put(new Place("/components/menus/menu", "Menu", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.MenuComponent());
        places.put(new Place("/components/menus/menu-toggle", "Menu toggle", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.MenuToggleComponent());
        places.put(new Place("/components/navigation", "Navigation", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.NavigationComponent());
        places.put(new Place("/components/page", "Page", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.PageComponent());
        places.put(new Place("/components/panel", "Panel", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.PanelComponent());
        places.put(new Place("/components/popover", "Popover", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.PopoverComponent());
        places.put(new Place("/components/progress", "Progress", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ProgressComponent());
        places.put(new Place("/components/forms/radio", "Radio", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.RadioComponent());
        places.put(new Place("/components/simple-list", "Simple list", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.SimpleListComponent());
        places.put(new Place("/components/skeleton", "Skeleton", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.SkeletonComponent());
        places.put(new Place("/components/slider", "Slider", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.SliderComponent());
        places.put(new Place("/components/spinner", "Spinner", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.SpinnerComponent());
        places.put(new Place("/components/switch", "Switch", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.SwitchComponent());
        places.put(new Place("/components/tabs", "Tabs", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TabsComponent());
        places.put(new Place("/components/forms/text-area", "Text area", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TextAreaComponent());
        places.put(new Place("/components/text-content", "Text", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TextContentComponent());
        places.put(new Place("/components/forms/text-input", "Text input", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TextInputComponent());
        places.put(new Place("/components/text-input-group", "Text input group", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TextInputGroupComponent());
        places.put(new Place("/components/title", "Title", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TitleComponent());
        places.put(new Place("/components/toggle-group", "Toggle group", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.ToggleGroupComponent());
        places.put(new Place("/components/tooltip", "Tooltip", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TooltipComponent());
        places.put(new Place("/components/truncate", "Truncate", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.component.TruncateComponent());
        places.put(new Place("/layouts/bullseye", "Bullseye", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.BullseyeLayout());
        places.put(new Place("/layouts/flex", "Flex", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.FlexLayout());
        places.put(new Place("/layouts/gallery", "Gallery", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.GalleryLayout());
        places.put(new Place("/layouts/grid", "Grid", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.GridLayout());
        places.put(new Place("/layouts/about-layouts", "Layouts", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.LayoutsPage());
        places.put(new Place("/layouts/level", "Level", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.LevelLayout());
        places.put(new Place("/layouts/split", "Split", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.SplitLayout());
        places.put(new Place("/layouts/stack", "Stack", (Supplier<HTMLElement>) null), () -> new org.patternfly.showcase.layout.StackLayout());
    }

    @Override
    public Map<Place, Supplier<Page>> places() {
        return places;
    }
}

goog.module('org.jboss.elemento.router.RoutesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Routes = goog.require('org.jboss.elemento.router.Routes$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let ContributePage = goog.forwardDeclare('org.patternfly.showcase.ContributePage$impl');
let GetInTouchPage = goog.forwardDeclare('org.patternfly.showcase.GetInTouchPage$impl');
let GetStartedPage = goog.forwardDeclare('org.patternfly.showcase.GetStartedPage$impl');
let HomePage = goog.forwardDeclare('org.patternfly.showcase.HomePage$impl');
let AccordionComponent = goog.forwardDeclare('org.patternfly.showcase.component.AccordionComponent$impl');
let ActionListComponent = goog.forwardDeclare('org.patternfly.showcase.component.ActionListComponent$impl');
let AlertComponent = goog.forwardDeclare('org.patternfly.showcase.component.AlertComponent$impl');
let AvatarComponent = goog.forwardDeclare('org.patternfly.showcase.component.AvatarComponent$impl');
let BackToTopComponent = goog.forwardDeclare('org.patternfly.showcase.component.BackToTopComponent$impl');
let BadgeComponent = goog.forwardDeclare('org.patternfly.showcase.component.BadgeComponent$impl');
let BannerComponent = goog.forwardDeclare('org.patternfly.showcase.component.BannerComponent$impl');
let BrandComponent = goog.forwardDeclare('org.patternfly.showcase.component.BrandComponent$impl');
let BreadcrumbComponent = goog.forwardDeclare('org.patternfly.showcase.component.BreadcrumbComponent$impl');
let ButtonComponent = goog.forwardDeclare('org.patternfly.showcase.component.ButtonComponent$impl');
let CardComponent = goog.forwardDeclare('org.patternfly.showcase.component.CardComponent$impl');
let CheckboxComponent = goog.forwardDeclare('org.patternfly.showcase.component.CheckboxComponent$impl');
let ChipComponent = goog.forwardDeclare('org.patternfly.showcase.component.ChipComponent$impl');
let CodeBlockComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeBlockComponent$impl');
let CodeEditorComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeEditorComponent$impl');
let ComponentsPage = goog.forwardDeclare('org.patternfly.showcase.component.ComponentsPage$impl');
let DescriptionListComponent = goog.forwardDeclare('org.patternfly.showcase.component.DescriptionListComponent$impl');
let DividerComponent = goog.forwardDeclare('org.patternfly.showcase.component.DividerComponent$impl');
let DrawerComponent = goog.forwardDeclare('org.patternfly.showcase.component.DrawerComponent$impl');
let DropdownComponent = goog.forwardDeclare('org.patternfly.showcase.component.DropdownComponent$impl');
let EmptyStateComponent = goog.forwardDeclare('org.patternfly.showcase.component.EmptyStateComponent$impl');
let ExpandableSectionComponent = goog.forwardDeclare('org.patternfly.showcase.component.ExpandableSectionComponent$impl');
let FormComponent = goog.forwardDeclare('org.patternfly.showcase.component.FormComponent$impl');
let FormControlComponent = goog.forwardDeclare('org.patternfly.showcase.component.FormControlComponent$impl');
let FormSelectComponent = goog.forwardDeclare('org.patternfly.showcase.component.FormSelectComponent$impl');
let HelperTextComponent = goog.forwardDeclare('org.patternfly.showcase.component.HelperTextComponent$impl');
let HintComponent = goog.forwardDeclare('org.patternfly.showcase.component.HintComponent$impl');
let IconComponent = goog.forwardDeclare('org.patternfly.showcase.component.IconComponent$impl');
let InputGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.InputGroupComponent$impl');
let JumpLinksComponent = goog.forwardDeclare('org.patternfly.showcase.component.JumpLinksComponent$impl');
let LabelComponent = goog.forwardDeclare('org.patternfly.showcase.component.LabelComponent$impl');
let ListComponent = goog.forwardDeclare('org.patternfly.showcase.component.ListComponent$impl');
let MastheadComponent = goog.forwardDeclare('org.patternfly.showcase.component.MastheadComponent$impl');
let MenuComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuComponent$impl');
let MenuToggleComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuToggleComponent$impl');
let NavigationComponent = goog.forwardDeclare('org.patternfly.showcase.component.NavigationComponent$impl');
let PageComponent = goog.forwardDeclare('org.patternfly.showcase.component.PageComponent$impl');
let PanelComponent = goog.forwardDeclare('org.patternfly.showcase.component.PanelComponent$impl');
let PopoverComponent = goog.forwardDeclare('org.patternfly.showcase.component.PopoverComponent$impl');
let ProgressComponent = goog.forwardDeclare('org.patternfly.showcase.component.ProgressComponent$impl');
let RadioComponent = goog.forwardDeclare('org.patternfly.showcase.component.RadioComponent$impl');
let SimpleListComponent = goog.forwardDeclare('org.patternfly.showcase.component.SimpleListComponent$impl');
let SkeletonComponent = goog.forwardDeclare('org.patternfly.showcase.component.SkeletonComponent$impl');
let SliderComponent = goog.forwardDeclare('org.patternfly.showcase.component.SliderComponent$impl');
let SpinnerComponent = goog.forwardDeclare('org.patternfly.showcase.component.SpinnerComponent$impl');
let SwitchComponent = goog.forwardDeclare('org.patternfly.showcase.component.SwitchComponent$impl');
let TabsComponent = goog.forwardDeclare('org.patternfly.showcase.component.TabsComponent$impl');
let TextAreaComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextAreaComponent$impl');
let TextContentComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextContentComponent$impl');
let TextInputComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputComponent$impl');
let TextInputGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputGroupComponent$impl');
let TitleComponent = goog.forwardDeclare('org.patternfly.showcase.component.TitleComponent$impl');
let ToggleGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.ToggleGroupComponent$impl');
let TooltipComponent = goog.forwardDeclare('org.patternfly.showcase.component.TooltipComponent$impl');
let TruncateComponent = goog.forwardDeclare('org.patternfly.showcase.component.TruncateComponent$impl');
let BullseyeLayout = goog.forwardDeclare('org.patternfly.showcase.layout.BullseyeLayout$impl');
let FlexLayout = goog.forwardDeclare('org.patternfly.showcase.layout.FlexLayout$impl');
let GalleryLayout = goog.forwardDeclare('org.patternfly.showcase.layout.GalleryLayout$impl');
let GridLayout = goog.forwardDeclare('org.patternfly.showcase.layout.GridLayout$impl');
let LayoutsPage = goog.forwardDeclare('org.patternfly.showcase.layout.LayoutsPage$impl');
let LevelLayout = goog.forwardDeclare('org.patternfly.showcase.layout.LevelLayout$impl');
let SplitLayout = goog.forwardDeclare('org.patternfly.showcase.layout.SplitLayout$impl');
let StackLayout = goog.forwardDeclare('org.patternfly.showcase.layout.StackLayout$impl');

/**
 * @implements {Routes}
 */
class RoutesImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<Place, Supplier<Page>>} @nodts*/
  this.f_places__org_jboss_elemento_router_RoutesImpl_;
 }
 /** @nodts @return {!RoutesImpl} */
 static $create__() {
  let $instance = new RoutesImpl();
  $instance.$ctor__org_jboss_elemento_router_RoutesImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_RoutesImpl__void() {
  this.$ctor__java_lang_Object__void();
  this.f_places__org_jboss_elemento_router_RoutesImpl_ = /**@type {!HashMap<Place, Supplier<Page>>}*/ (HashMap.$create__());
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/contribute', 'Contribute', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ContributePage.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/get-in-touch', 'Get in touch', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return GetInTouchPage.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/get-started', 'Get started', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return GetStartedPage.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/', null, /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return HomePage.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/accordion', 'Accordion', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return AccordionComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/action-list', 'Action list', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ActionListComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/alert', 'Alert', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return AlertComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/avatar', 'Avatar', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return AvatarComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/back-to-top', 'Back to top', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return BackToTopComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/badge', 'Badge', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return BadgeComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/banner', 'Banner', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return BannerComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/brand', 'Brand', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return BrandComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/breadcrumb', 'Breadcrumb', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return BreadcrumbComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/button', 'Button', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ButtonComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/card', 'Card', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return CardComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/forms/checkbox', 'Checkbox', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return CheckboxComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/chip', 'Chip', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ChipComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/code-block', 'Code block', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return CodeBlockComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/code-editor', 'Code editor', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return CodeEditorComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/all-components', 'All components', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ComponentsPage.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/description-list', 'Description list', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return DescriptionListComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/divider', 'Divider', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return DividerComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/drawer', 'Drawer', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return DrawerComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/menus/dropdown', 'Dropdown', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return DropdownComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/empty-state', 'Empty state', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return EmptyStateComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/expandable-section', 'Expandable section', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ExpandableSectionComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/forms/form', 'Form', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return FormComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/forms/form-control', 'Form control', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return FormControlComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/forms/form-select', 'Form select', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return FormSelectComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/helper-text', 'Helper text', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return HelperTextComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/hint', 'Hint', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return HintComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/icon', 'Icon', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return IconComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/input-group', 'Input group', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return InputGroupComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/jump-links', 'Jump links', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return JumpLinksComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/label', 'Label', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return LabelComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/list', 'List', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ListComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/masthead', 'Masthead', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return MastheadComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/menus/menu', 'Menu', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return MenuComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/menus/menu-toggle', 'Menu toggle', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return MenuToggleComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/navigation', 'Navigation', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return NavigationComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/page', 'Page', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return PageComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/panel', 'Panel', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return PanelComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/popover', 'Popover', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return PopoverComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/progress', 'Progress', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ProgressComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/forms/radio', 'Radio', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return RadioComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/simple-list', 'Simple list', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return SimpleListComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/skeleton', 'Skeleton', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return SkeletonComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/slider', 'Slider', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return SliderComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/spinner', 'Spinner', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return SpinnerComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/switch', 'Switch', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return SwitchComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/tabs', 'Tabs', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TabsComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/forms/text-area', 'Text area', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TextAreaComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/text', 'Text', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TextContentComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/forms/text-input', 'Text input', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TextInputComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/text-input-group', 'Text input group', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TextInputGroupComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/title', 'Title', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TitleComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/toggle-group', 'Toggle group', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return ToggleGroupComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/tooltip', 'Tooltip', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TooltipComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/components/truncate', 'Truncate', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return TruncateComponent.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/bullseye', 'Bullseye', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return BullseyeLayout.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/flex', 'Flex', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return FlexLayout.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/gallery', 'Gallery', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return GalleryLayout.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/grid', 'Grid', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return GridLayout.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/about-layouts', 'Layouts', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return LayoutsPage.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/level', 'Level', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return LevelLayout.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/split', 'Split', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return SplitLayout.$create__();
  }));
  this.f_places__org_jboss_elemento_router_RoutesImpl_.put(Place.$create__java_lang_String__java_lang_String__java_util_function_Supplier('/layouts/stack', 'Stack', /**@type {Supplier<HTMLElement>}*/ (null)), Supplier.$adapt(() =>{
   return StackLayout.$create__();
  }));
 }
 /** @override @nodts @return {Map<Place, Supplier<Page>>} */
 m_places__java_util_Map() {
  return this.f_places__org_jboss_elemento_router_RoutesImpl_;
 }
 /** @nodts @return {Routes} */
 static get f_INSTANCE__org_jboss_elemento_router_RoutesImpl() {
  return (RoutesImpl.$clinit(), RoutesImpl.$static_INSTANCE__org_jboss_elemento_router_RoutesImpl);
 }
 /** @nodts */
 static $clinit() {
  RoutesImpl.$clinit = () =>{};
  RoutesImpl.$loadModules();
  j_l_Object.$clinit();
  RoutesImpl.$static_INSTANCE__org_jboss_elemento_router_RoutesImpl = RoutesImpl.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RoutesImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  ContributePage = goog.module.get('org.patternfly.showcase.ContributePage$impl');
  GetInTouchPage = goog.module.get('org.patternfly.showcase.GetInTouchPage$impl');
  GetStartedPage = goog.module.get('org.patternfly.showcase.GetStartedPage$impl');
  HomePage = goog.module.get('org.patternfly.showcase.HomePage$impl');
  AccordionComponent = goog.module.get('org.patternfly.showcase.component.AccordionComponent$impl');
  ActionListComponent = goog.module.get('org.patternfly.showcase.component.ActionListComponent$impl');
  AlertComponent = goog.module.get('org.patternfly.showcase.component.AlertComponent$impl');
  AvatarComponent = goog.module.get('org.patternfly.showcase.component.AvatarComponent$impl');
  BackToTopComponent = goog.module.get('org.patternfly.showcase.component.BackToTopComponent$impl');
  BadgeComponent = goog.module.get('org.patternfly.showcase.component.BadgeComponent$impl');
  BannerComponent = goog.module.get('org.patternfly.showcase.component.BannerComponent$impl');
  BrandComponent = goog.module.get('org.patternfly.showcase.component.BrandComponent$impl');
  BreadcrumbComponent = goog.module.get('org.patternfly.showcase.component.BreadcrumbComponent$impl');
  ButtonComponent = goog.module.get('org.patternfly.showcase.component.ButtonComponent$impl');
  CardComponent = goog.module.get('org.patternfly.showcase.component.CardComponent$impl');
  CheckboxComponent = goog.module.get('org.patternfly.showcase.component.CheckboxComponent$impl');
  ChipComponent = goog.module.get('org.patternfly.showcase.component.ChipComponent$impl');
  CodeBlockComponent = goog.module.get('org.patternfly.showcase.component.CodeBlockComponent$impl');
  CodeEditorComponent = goog.module.get('org.patternfly.showcase.component.CodeEditorComponent$impl');
  ComponentsPage = goog.module.get('org.patternfly.showcase.component.ComponentsPage$impl');
  DescriptionListComponent = goog.module.get('org.patternfly.showcase.component.DescriptionListComponent$impl');
  DividerComponent = goog.module.get('org.patternfly.showcase.component.DividerComponent$impl');
  DrawerComponent = goog.module.get('org.patternfly.showcase.component.DrawerComponent$impl');
  DropdownComponent = goog.module.get('org.patternfly.showcase.component.DropdownComponent$impl');
  EmptyStateComponent = goog.module.get('org.patternfly.showcase.component.EmptyStateComponent$impl');
  ExpandableSectionComponent = goog.module.get('org.patternfly.showcase.component.ExpandableSectionComponent$impl');
  FormComponent = goog.module.get('org.patternfly.showcase.component.FormComponent$impl');
  FormControlComponent = goog.module.get('org.patternfly.showcase.component.FormControlComponent$impl');
  FormSelectComponent = goog.module.get('org.patternfly.showcase.component.FormSelectComponent$impl');
  HelperTextComponent = goog.module.get('org.patternfly.showcase.component.HelperTextComponent$impl');
  HintComponent = goog.module.get('org.patternfly.showcase.component.HintComponent$impl');
  IconComponent = goog.module.get('org.patternfly.showcase.component.IconComponent$impl');
  InputGroupComponent = goog.module.get('org.patternfly.showcase.component.InputGroupComponent$impl');
  JumpLinksComponent = goog.module.get('org.patternfly.showcase.component.JumpLinksComponent$impl');
  LabelComponent = goog.module.get('org.patternfly.showcase.component.LabelComponent$impl');
  ListComponent = goog.module.get('org.patternfly.showcase.component.ListComponent$impl');
  MastheadComponent = goog.module.get('org.patternfly.showcase.component.MastheadComponent$impl');
  MenuComponent = goog.module.get('org.patternfly.showcase.component.MenuComponent$impl');
  MenuToggleComponent = goog.module.get('org.patternfly.showcase.component.MenuToggleComponent$impl');
  NavigationComponent = goog.module.get('org.patternfly.showcase.component.NavigationComponent$impl');
  PageComponent = goog.module.get('org.patternfly.showcase.component.PageComponent$impl');
  PanelComponent = goog.module.get('org.patternfly.showcase.component.PanelComponent$impl');
  PopoverComponent = goog.module.get('org.patternfly.showcase.component.PopoverComponent$impl');
  ProgressComponent = goog.module.get('org.patternfly.showcase.component.ProgressComponent$impl');
  RadioComponent = goog.module.get('org.patternfly.showcase.component.RadioComponent$impl');
  SimpleListComponent = goog.module.get('org.patternfly.showcase.component.SimpleListComponent$impl');
  SkeletonComponent = goog.module.get('org.patternfly.showcase.component.SkeletonComponent$impl');
  SliderComponent = goog.module.get('org.patternfly.showcase.component.SliderComponent$impl');
  SpinnerComponent = goog.module.get('org.patternfly.showcase.component.SpinnerComponent$impl');
  SwitchComponent = goog.module.get('org.patternfly.showcase.component.SwitchComponent$impl');
  TabsComponent = goog.module.get('org.patternfly.showcase.component.TabsComponent$impl');
  TextAreaComponent = goog.module.get('org.patternfly.showcase.component.TextAreaComponent$impl');
  TextContentComponent = goog.module.get('org.patternfly.showcase.component.TextContentComponent$impl');
  TextInputComponent = goog.module.get('org.patternfly.showcase.component.TextInputComponent$impl');
  TextInputGroupComponent = goog.module.get('org.patternfly.showcase.component.TextInputGroupComponent$impl');
  TitleComponent = goog.module.get('org.patternfly.showcase.component.TitleComponent$impl');
  ToggleGroupComponent = goog.module.get('org.patternfly.showcase.component.ToggleGroupComponent$impl');
  TooltipComponent = goog.module.get('org.patternfly.showcase.component.TooltipComponent$impl');
  TruncateComponent = goog.module.get('org.patternfly.showcase.component.TruncateComponent$impl');
  BullseyeLayout = goog.module.get('org.patternfly.showcase.layout.BullseyeLayout$impl');
  FlexLayout = goog.module.get('org.patternfly.showcase.layout.FlexLayout$impl');
  GalleryLayout = goog.module.get('org.patternfly.showcase.layout.GalleryLayout$impl');
  GridLayout = goog.module.get('org.patternfly.showcase.layout.GridLayout$impl');
  LayoutsPage = goog.module.get('org.patternfly.showcase.layout.LayoutsPage$impl');
  LevelLayout = goog.module.get('org.patternfly.showcase.layout.LevelLayout$impl');
  SplitLayout = goog.module.get('org.patternfly.showcase.layout.SplitLayout$impl');
  StackLayout = goog.module.get('org.patternfly.showcase.layout.StackLayout$impl');
 }
}
/**@private {Routes} @nodts*/
RoutesImpl.$static_INSTANCE__org_jboss_elemento_router_RoutesImpl;
Routes.$markImplementor(RoutesImpl);
$Util.$setClassMetadata(RoutesImpl, 'org.jboss.elemento.router.RoutesImpl');

exports = RoutesImpl;

//# sourceMappingURL=RoutesImpl.js.map

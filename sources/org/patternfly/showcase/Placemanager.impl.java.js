goog.module('org.patternfly.showcase.Placemanager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let ContributePage = goog.forwardDeclare('org.patternfly.showcase.ContributePage$impl');
let GetInTouchPage = goog.forwardDeclare('org.patternfly.showcase.GetInTouchPage$impl');
let GetStartedPage = goog.forwardDeclare('org.patternfly.showcase.GetStartedPage$impl');
let HomePage = goog.forwardDeclare('org.patternfly.showcase.HomePage$impl');
let Page = goog.forwardDeclare('org.patternfly.showcase.Page$impl');
let NotFound = goog.forwardDeclare('org.patternfly.showcase.Placemanager.NotFound$impl');
let AccordionComponent = goog.forwardDeclare('org.patternfly.showcase.component.AccordionComponent$impl');
let ActionListComponent = goog.forwardDeclare('org.patternfly.showcase.component.ActionListComponent$impl');
let AlertComponent = goog.forwardDeclare('org.patternfly.showcase.component.AlertComponent$impl');
let AvatarComponent = goog.forwardDeclare('org.patternfly.showcase.component.AvatarComponent$impl');
let BackToTopComponent = goog.forwardDeclare('org.patternfly.showcase.component.BackToTopComponent$impl');
let BadgeComponent = goog.forwardDeclare('org.patternfly.showcase.component.BadgeComponent$impl');
let BannerComponent = goog.forwardDeclare('org.patternfly.showcase.component.BannerComponent$impl');
let BrandComponent = goog.forwardDeclare('org.patternfly.showcase.component.BrandComponent$impl');
let ButtonComponent = goog.forwardDeclare('org.patternfly.showcase.component.ButtonComponent$impl');
let CardComponent = goog.forwardDeclare('org.patternfly.showcase.component.CardComponent$impl');
let CheckboxComponent = goog.forwardDeclare('org.patternfly.showcase.component.CheckboxComponent$impl');
let ChipComponent = goog.forwardDeclare('org.patternfly.showcase.component.ChipComponent$impl');
let CodeBlockComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeBlockComponent$impl');
let CodeEditorComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeEditorComponent$impl');
let DescriptionListComponent = goog.forwardDeclare('org.patternfly.showcase.component.DescriptionListComponent$impl');
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
let LabelComponent = goog.forwardDeclare('org.patternfly.showcase.component.LabelComponent$impl');
let ListComponent = goog.forwardDeclare('org.patternfly.showcase.component.ListComponent$impl');
let MastheadComponent = goog.forwardDeclare('org.patternfly.showcase.component.MastheadComponent$impl');
let MenuComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuComponent$impl');
let MenuToggleComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuToggleComponent$impl');
let PanelComponent = goog.forwardDeclare('org.patternfly.showcase.component.PanelComponent$impl');
let PopoverComponent = goog.forwardDeclare('org.patternfly.showcase.component.PopoverComponent$impl');
let RadioComponent = goog.forwardDeclare('org.patternfly.showcase.component.RadioComponent$impl');
let SliderComponent = goog.forwardDeclare('org.patternfly.showcase.component.SliderComponent$impl');
let SpinnerComponent = goog.forwardDeclare('org.patternfly.showcase.component.SpinnerComponent$impl');
let SwitchComponent = goog.forwardDeclare('org.patternfly.showcase.component.SwitchComponent$impl');
let TabsComponent = goog.forwardDeclare('org.patternfly.showcase.component.TabsComponent$impl');
let TextAreaComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextAreaComponent$impl');
let TextContentComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextContentComponent$impl');
let TextInputComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputComponent$impl');
let TextInputGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputGroupComponent$impl');
let TitleComponent = goog.forwardDeclare('org.patternfly.showcase.component.TitleComponent$impl');
let TooltipComponent = goog.forwardDeclare('org.patternfly.showcase.component.TooltipComponent$impl');
let BullseyeLayout = goog.forwardDeclare('org.patternfly.showcase.layout.BullseyeLayout$impl');
let FlexLayout = goog.forwardDeclare('org.patternfly.showcase.layout.FlexLayout$impl');
let GalleryLayout = goog.forwardDeclare('org.patternfly.showcase.layout.GalleryLayout$impl');
let GridLayout = goog.forwardDeclare('org.patternfly.showcase.layout.GridLayout$impl');
let LevelLayout = goog.forwardDeclare('org.patternfly.showcase.layout.LevelLayout$impl');
let SplitLayout = goog.forwardDeclare('org.patternfly.showcase.layout.SplitLayout$impl');
let StackLayout = goog.forwardDeclare('org.patternfly.showcase.layout.StackLayout$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class Placemanager extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Supplier<Page>} */
 static m_lookup__java_lang_String__java_util_function_Supplier(/** ?string */ id) {
  Placemanager.$clinit();
  if (j_l_String.m_isEmpty__java_lang_String__boolean(id) || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(id, '#')) {
   return Supplier.$adapt(() =>{
    return HomePage.$create__();
   });
  } else {
   return /**@type {Supplier<Page>}*/ ($Casts.$to(Placemanager.f_places__org_patternfly_showcase_Placemanager_.getOrDefault(id, Supplier.$adapt(() =>{
    return NotFound.$create__java_lang_String(id);
   })), Supplier));
  }
 }
 /** @nodts @return {!Placemanager} */
 static $create__() {
  let $instance = new Placemanager();
  $instance.$ctor__org_patternfly_showcase_Placemanager__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Placemanager__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Placemanager.$clinit = () =>{};
  Placemanager.$loadModules();
  j_l_Object.$clinit();
  Placemanager.f_places__org_patternfly_showcase_Placemanager_ = /**@type {!HashMap<?string, Supplier<Page>>}*/ (HashMap.$create__());
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('contribute', Supplier.$adapt(() =>{
   return ContributePage.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('get-in-touch', Supplier.$adapt(() =>{
   return GetInTouchPage.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('get-started', Supplier.$adapt(() =>{
   return GetStartedPage.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('home', Supplier.$adapt(() =>{
   return HomePage.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-action-list', Supplier.$adapt(() =>{
   return ActionListComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-accordion', Supplier.$adapt(() =>{
   return AccordionComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-alert', Supplier.$adapt(() =>{
   return AlertComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-avatar', Supplier.$adapt(() =>{
   return AvatarComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-back-to-top', Supplier.$adapt(() =>{
   return BackToTopComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-badge', Supplier.$adapt(() =>{
   return BadgeComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-banner', Supplier.$adapt(() =>{
   return BannerComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-brand', Supplier.$adapt(() =>{
   return BrandComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-button', Supplier.$adapt(() =>{
   return ButtonComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-card', Supplier.$adapt(() =>{
   return CardComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-checkbox', Supplier.$adapt(() =>{
   return CheckboxComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-chip', Supplier.$adapt(() =>{
   return ChipComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-code-block', Supplier.$adapt(() =>{
   return CodeBlockComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-code-editor', Supplier.$adapt(() =>{
   return CodeEditorComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-description-list', Supplier.$adapt(() =>{
   return DescriptionListComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-drawer', Supplier.$adapt(() =>{
   return DrawerComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-dropdown', Supplier.$adapt(() =>{
   return DropdownComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-empty-state', Supplier.$adapt(() =>{
   return EmptyStateComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-expandable-section', Supplier.$adapt(() =>{
   return ExpandableSectionComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-form', Supplier.$adapt(() =>{
   return FormComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-form-control', Supplier.$adapt(() =>{
   return FormControlComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-form-select', Supplier.$adapt(() =>{
   return FormSelectComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-helper-text', Supplier.$adapt(() =>{
   return HelperTextComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-hint', Supplier.$adapt(() =>{
   return HintComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-icon', Supplier.$adapt(() =>{
   return IconComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-input-group', Supplier.$adapt(() =>{
   return InputGroupComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-label', Supplier.$adapt(() =>{
   return LabelComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-list', Supplier.$adapt(() =>{
   return ListComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-masthead', Supplier.$adapt(() =>{
   return MastheadComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-menu', Supplier.$adapt(() =>{
   return MenuComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-menu-toggle', Supplier.$adapt(() =>{
   return MenuToggleComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-panel', Supplier.$adapt(() =>{
   return PanelComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-popover', Supplier.$adapt(() =>{
   return PopoverComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-radio', Supplier.$adapt(() =>{
   return RadioComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-slider', Supplier.$adapt(() =>{
   return SliderComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-spinner', Supplier.$adapt(() =>{
   return SpinnerComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-switch', Supplier.$adapt(() =>{
   return SwitchComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-tabs', Supplier.$adapt(() =>{
   return TabsComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-text-content', Supplier.$adapt(() =>{
   return TextContentComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-text-area', Supplier.$adapt(() =>{
   return TextAreaComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-text-input', Supplier.$adapt(() =>{
   return TextInputComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-text-input-group', Supplier.$adapt(() =>{
   return TextInputGroupComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-title', Supplier.$adapt(() =>{
   return TitleComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-tooltip', Supplier.$adapt(() =>{
   return TooltipComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('l-bullseye', Supplier.$adapt(() =>{
   return BullseyeLayout.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('l-flex', Supplier.$adapt(() =>{
   return FlexLayout.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('l-gallery', Supplier.$adapt(() =>{
   return GalleryLayout.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('l-grid', Supplier.$adapt(() =>{
   return GridLayout.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('l-level', Supplier.$adapt(() =>{
   return LevelLayout.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('l-split', Supplier.$adapt(() =>{
   return SplitLayout.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('l-stack', Supplier.$adapt(() =>{
   return StackLayout.$create__();
  }));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Placemanager;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  ContributePage = goog.module.get('org.patternfly.showcase.ContributePage$impl');
  GetInTouchPage = goog.module.get('org.patternfly.showcase.GetInTouchPage$impl');
  GetStartedPage = goog.module.get('org.patternfly.showcase.GetStartedPage$impl');
  HomePage = goog.module.get('org.patternfly.showcase.HomePage$impl');
  NotFound = goog.module.get('org.patternfly.showcase.Placemanager.NotFound$impl');
  AccordionComponent = goog.module.get('org.patternfly.showcase.component.AccordionComponent$impl');
  ActionListComponent = goog.module.get('org.patternfly.showcase.component.ActionListComponent$impl');
  AlertComponent = goog.module.get('org.patternfly.showcase.component.AlertComponent$impl');
  AvatarComponent = goog.module.get('org.patternfly.showcase.component.AvatarComponent$impl');
  BackToTopComponent = goog.module.get('org.patternfly.showcase.component.BackToTopComponent$impl');
  BadgeComponent = goog.module.get('org.patternfly.showcase.component.BadgeComponent$impl');
  BannerComponent = goog.module.get('org.patternfly.showcase.component.BannerComponent$impl');
  BrandComponent = goog.module.get('org.patternfly.showcase.component.BrandComponent$impl');
  ButtonComponent = goog.module.get('org.patternfly.showcase.component.ButtonComponent$impl');
  CardComponent = goog.module.get('org.patternfly.showcase.component.CardComponent$impl');
  CheckboxComponent = goog.module.get('org.patternfly.showcase.component.CheckboxComponent$impl');
  ChipComponent = goog.module.get('org.patternfly.showcase.component.ChipComponent$impl');
  CodeBlockComponent = goog.module.get('org.patternfly.showcase.component.CodeBlockComponent$impl');
  CodeEditorComponent = goog.module.get('org.patternfly.showcase.component.CodeEditorComponent$impl');
  DescriptionListComponent = goog.module.get('org.patternfly.showcase.component.DescriptionListComponent$impl');
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
  LabelComponent = goog.module.get('org.patternfly.showcase.component.LabelComponent$impl');
  ListComponent = goog.module.get('org.patternfly.showcase.component.ListComponent$impl');
  MastheadComponent = goog.module.get('org.patternfly.showcase.component.MastheadComponent$impl');
  MenuComponent = goog.module.get('org.patternfly.showcase.component.MenuComponent$impl');
  MenuToggleComponent = goog.module.get('org.patternfly.showcase.component.MenuToggleComponent$impl');
  PanelComponent = goog.module.get('org.patternfly.showcase.component.PanelComponent$impl');
  PopoverComponent = goog.module.get('org.patternfly.showcase.component.PopoverComponent$impl');
  RadioComponent = goog.module.get('org.patternfly.showcase.component.RadioComponent$impl');
  SliderComponent = goog.module.get('org.patternfly.showcase.component.SliderComponent$impl');
  SpinnerComponent = goog.module.get('org.patternfly.showcase.component.SpinnerComponent$impl');
  SwitchComponent = goog.module.get('org.patternfly.showcase.component.SwitchComponent$impl');
  TabsComponent = goog.module.get('org.patternfly.showcase.component.TabsComponent$impl');
  TextAreaComponent = goog.module.get('org.patternfly.showcase.component.TextAreaComponent$impl');
  TextContentComponent = goog.module.get('org.patternfly.showcase.component.TextContentComponent$impl');
  TextInputComponent = goog.module.get('org.patternfly.showcase.component.TextInputComponent$impl');
  TextInputGroupComponent = goog.module.get('org.patternfly.showcase.component.TextInputGroupComponent$impl');
  TitleComponent = goog.module.get('org.patternfly.showcase.component.TitleComponent$impl');
  TooltipComponent = goog.module.get('org.patternfly.showcase.component.TooltipComponent$impl');
  BullseyeLayout = goog.module.get('org.patternfly.showcase.layout.BullseyeLayout$impl');
  FlexLayout = goog.module.get('org.patternfly.showcase.layout.FlexLayout$impl');
  GalleryLayout = goog.module.get('org.patternfly.showcase.layout.GalleryLayout$impl');
  GridLayout = goog.module.get('org.patternfly.showcase.layout.GridLayout$impl');
  LevelLayout = goog.module.get('org.patternfly.showcase.layout.LevelLayout$impl');
  SplitLayout = goog.module.get('org.patternfly.showcase.layout.SplitLayout$impl');
  StackLayout = goog.module.get('org.patternfly.showcase.layout.StackLayout$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Map<?string, Supplier<Page>>} @nodts*/
Placemanager.f_places__org_patternfly_showcase_Placemanager_;
$Util.$setClassMetadata(Placemanager, 'org.patternfly.showcase.Placemanager');

exports = Placemanager;

//# sourceMappingURL=Placemanager.js.map

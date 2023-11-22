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
let ActionListComponent = goog.forwardDeclare('org.patternfly.showcase.component.ActionListComponent$impl');
let AlertComponent = goog.forwardDeclare('org.patternfly.showcase.component.AlertComponent$impl');
let AvatarComponent = goog.forwardDeclare('org.patternfly.showcase.component.AvatarComponent$impl');
let BadgeComponent = goog.forwardDeclare('org.patternfly.showcase.component.BadgeComponent$impl');
let BrandComponent = goog.forwardDeclare('org.patternfly.showcase.component.BrandComponent$impl');
let ButtonComponent = goog.forwardDeclare('org.patternfly.showcase.component.ButtonComponent$impl');
let CardComponent = goog.forwardDeclare('org.patternfly.showcase.component.CardComponent$impl');
let CheckboxComponent = goog.forwardDeclare('org.patternfly.showcase.component.CheckboxComponent$impl');
let ChipComponent = goog.forwardDeclare('org.patternfly.showcase.component.ChipComponent$impl');
let CodeBlockComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeBlockComponent$impl');
let CodeEditorComponent = goog.forwardDeclare('org.patternfly.showcase.component.CodeEditorComponent$impl');
let DropdownComponent = goog.forwardDeclare('org.patternfly.showcase.component.DropdownComponent$impl');
let ExpandableSectionComponent = goog.forwardDeclare('org.patternfly.showcase.component.ExpandableSectionComponent$impl');
let IconComponent = goog.forwardDeclare('org.patternfly.showcase.component.IconComponent$impl');
let LabelComponent = goog.forwardDeclare('org.patternfly.showcase.component.LabelComponent$impl');
let MastheadComponent = goog.forwardDeclare('org.patternfly.showcase.component.MastheadComponent$impl');
let MenuComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuComponent$impl');
let MenuToggleComponent = goog.forwardDeclare('org.patternfly.showcase.component.MenuToggleComponent$impl');
let PopoverComponent = goog.forwardDeclare('org.patternfly.showcase.component.PopoverComponent$impl');
let RadioComponent = goog.forwardDeclare('org.patternfly.showcase.component.RadioComponent$impl');
let SpinnerComponent = goog.forwardDeclare('org.patternfly.showcase.component.SpinnerComponent$impl');
let TextContentComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextContentComponent$impl');
let TextInputComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputComponent$impl');
let TextInputGroupComponent = goog.forwardDeclare('org.patternfly.showcase.component.TextInputGroupComponent$impl');
let TooltipComponent = goog.forwardDeclare('org.patternfly.showcase.component.TooltipComponent$impl');
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
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-alert', Supplier.$adapt(() =>{
   return AlertComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-avatar', Supplier.$adapt(() =>{
   return AvatarComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-badge', Supplier.$adapt(() =>{
   return BadgeComponent.$create__();
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
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-dropdown', Supplier.$adapt(() =>{
   return DropdownComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-expandable-section', Supplier.$adapt(() =>{
   return ExpandableSectionComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-icon', Supplier.$adapt(() =>{
   return IconComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-label', Supplier.$adapt(() =>{
   return LabelComponent.$create__();
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
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-popover', Supplier.$adapt(() =>{
   return PopoverComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-radio', Supplier.$adapt(() =>{
   return RadioComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-spinner', Supplier.$adapt(() =>{
   return SpinnerComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-text-content', Supplier.$adapt(() =>{
   return TextContentComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-text-input', Supplier.$adapt(() =>{
   return TextInputComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-text-input-group', Supplier.$adapt(() =>{
   return TextInputGroupComponent.$create__();
  }));
  Placemanager.f_places__org_patternfly_showcase_Placemanager_.put('c-tooltip', Supplier.$adapt(() =>{
   return TooltipComponent.$create__();
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
  ActionListComponent = goog.module.get('org.patternfly.showcase.component.ActionListComponent$impl');
  AlertComponent = goog.module.get('org.patternfly.showcase.component.AlertComponent$impl');
  AvatarComponent = goog.module.get('org.patternfly.showcase.component.AvatarComponent$impl');
  BadgeComponent = goog.module.get('org.patternfly.showcase.component.BadgeComponent$impl');
  BrandComponent = goog.module.get('org.patternfly.showcase.component.BrandComponent$impl');
  ButtonComponent = goog.module.get('org.patternfly.showcase.component.ButtonComponent$impl');
  CardComponent = goog.module.get('org.patternfly.showcase.component.CardComponent$impl');
  CheckboxComponent = goog.module.get('org.patternfly.showcase.component.CheckboxComponent$impl');
  ChipComponent = goog.module.get('org.patternfly.showcase.component.ChipComponent$impl');
  CodeBlockComponent = goog.module.get('org.patternfly.showcase.component.CodeBlockComponent$impl');
  CodeEditorComponent = goog.module.get('org.patternfly.showcase.component.CodeEditorComponent$impl');
  DropdownComponent = goog.module.get('org.patternfly.showcase.component.DropdownComponent$impl');
  ExpandableSectionComponent = goog.module.get('org.patternfly.showcase.component.ExpandableSectionComponent$impl');
  IconComponent = goog.module.get('org.patternfly.showcase.component.IconComponent$impl');
  LabelComponent = goog.module.get('org.patternfly.showcase.component.LabelComponent$impl');
  MastheadComponent = goog.module.get('org.patternfly.showcase.component.MastheadComponent$impl');
  MenuComponent = goog.module.get('org.patternfly.showcase.component.MenuComponent$impl');
  MenuToggleComponent = goog.module.get('org.patternfly.showcase.component.MenuToggleComponent$impl');
  PopoverComponent = goog.module.get('org.patternfly.showcase.component.PopoverComponent$impl');
  RadioComponent = goog.module.get('org.patternfly.showcase.component.RadioComponent$impl');
  SpinnerComponent = goog.module.get('org.patternfly.showcase.component.SpinnerComponent$impl');
  TextContentComponent = goog.module.get('org.patternfly.showcase.component.TextContentComponent$impl');
  TextInputComponent = goog.module.get('org.patternfly.showcase.component.TextInputComponent$impl');
  TextInputGroupComponent = goog.module.get('org.patternfly.showcase.component.TextInputGroupComponent$impl');
  TooltipComponent = goog.module.get('org.patternfly.showcase.component.TooltipComponent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Map<?string, Supplier<Page>>} @nodts*/
Placemanager.f_places__org_patternfly_showcase_Placemanager_;
$Util.$setClassMetadata(Placemanager, 'org.patternfly.showcase.Placemanager');

exports = Placemanager;

//# sourceMappingURL=Placemanager.js.map

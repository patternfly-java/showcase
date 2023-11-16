goog.module('org.patternfly.component.textinputgroup.TextInputGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.core.HasValue$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ChipGroup = goog.forwardDeclare('org.patternfly.component.chip.ChipGroup$impl');
let TextInputGroupMain = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, TextInputGroup>}
 * @implements {Attachable}
 * @implements {HasValue<?string>}
 * @implements {Disabled<HTMLDivElement, TextInputGroup>}
 */
class TextInputGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_initialDisabled__org_patternfly_component_textinputgroup_TextInputGroup = false;
  /**@type {ChangeHandler<TextInputGroup, ?string>} @nodts*/
  this.f_initialChangeHandler__org_patternfly_component_textinputgroup_TextInputGroup;
  /**@type {TextInputGroupMain} @nodts*/
  this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_;
  /**@type {TextInputGroupUtilities} @nodts*/
  this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_;
 }
 /** @nodts @return {TextInputGroup} */
 static m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup() {
  TextInputGroup.$clinit();
  return TextInputGroup.$create__();
 }
 /** @nodts @return {!TextInputGroup} */
 static $create__() {
  TextInputGroup.$clinit();
  let $instance = new TextInputGroup();
  $instance.$ctor__org_patternfly_component_textinputgroup_TextInputGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_TextInputGroup__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), ComponentType.f_TextInputGroup__org_patternfly_component_ComponentType);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.m_passComponent__org_patternfly_component_textinputgroup_TextInputGroup__void(this);
  }
  if (!$Equality.$same(this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_.m_passComponent__org_patternfly_component_textinputgroup_TextInputGroup__void(this);
  }
 }
 /** @nodts @return {TextInputGroup} */
 m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupMain */ main) {
  return this.m_add__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(main);
 }
 /** @nodts @return {TextInputGroup} */
 m_add__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupMain */ main) {
  this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_ = main;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(main.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {TextInputGroup} */
 m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupUtilities */ utilities) {
  this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_ = utilities;
  return this.m_add__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(utilities);
 }
 /** @nodts @return {TextInputGroup} */
 m_add__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupUtilities */ utilities) {
  this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_ = utilities;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(utilities.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {TextInputGroup} */
 m_disabled__boolean__org_patternfly_component_textinputgroup_TextInputGroup(/** boolean */ disabled) {
  if ($Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   this.f_initialDisabled__org_patternfly_component_textinputgroup_TextInputGroup = disabled;
  } else {
   this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.m_disabled__boolean__org_jboss_elemento_TypedBuilder(disabled);
  }
  return /**@type {TextInputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), TextInputGroup));
 }
 /** @nodts @return {TextInputGroup} */
 m_that__org_patternfly_component_textinputgroup_TextInputGroup() {
  return this;
 }
 /** @nodts @return {TextInputGroup} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_TextInputGroup(/** ChangeHandler<TextInputGroup, ?string> */ handler) {
  if ($Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   this.f_initialChangeHandler__org_patternfly_component_textinputgroup_TextInputGroup = handler;
  } else {
   this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    handler.m_onChange__java_lang_Object__java_lang_Object__void(this, this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.value);
   }));
  }
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return !$Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null) ? this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.value : null;
 }
 /** @nodts */
 m_clear__void() {
  if (!$Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.value = '';
  }
 }
 /** @nodts */
 m_showUtilities__boolean__void(/** boolean */ show) {
  if (!$Equality.$same(this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_, show);
  }
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_InputElementBuilder() {
  if (!$Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   return /**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain));
  }
  return null;
 }
 /** @nodts @return {ChipGroup} */
 m_chipGroup__org_patternfly_component_chip_ChipGroup() {
  if (!$Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   return this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.f_chipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain;
  }
  return null;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_main__org_patternfly_component_textinputgroup_TextInputGroupMain() {
  return this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_;
 }
 /** @nodts @return {TextInputGroupUtilities} */
 m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities() {
  return this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_TextInputGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_textinputgroup_TextInputGroup(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInputGroup} */
 m_disabled__org_patternfly_component_textinputgroup_TextInputGroup() {
  return /**@type {TextInputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroup));
 }
 /** @nodts */
 static $clinit() {
  TextInputGroup.$clinit = () =>{};
  TextInputGroup.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Attachable.$markImplementor(TextInputGroup);
HasValue.$markImplementor(TextInputGroup);
Disabled.$markImplementor(TextInputGroup);
$Util.$setClassMetadata(TextInputGroup, 'org.patternfly.component.textinputgroup.TextInputGroup');

exports = TextInputGroup;

//# sourceMappingURL=TextInputGroup.js.map

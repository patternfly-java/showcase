goog.module('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ChipGroup = goog.forwardDeclare('org.patternfly.component.chip.ChipGroup$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let TextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroup$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, TextInputGroupMain>}
 * @implements {Disabled<HTMLDivElement, TextInputGroupMain>}
 * @implements {ComponentReference<TextInputGroup>}
 */
class TextInputGroupMain extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain;
  /**@type {ChipGroup} @nodts*/
  this.f_chipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain;
  /**@type {HTMLElement} @nodts*/
  this.f_textContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_;
  /**@type {TextInputGroup} @nodts*/
  this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_;
 }
 /** @nodts @return {TextInputGroupMain} */
 static m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ id) {
  TextInputGroupMain.$clinit();
  return TextInputGroupMain.$create__java_lang_String(id);
 }
 /** @nodts @return {!TextInputGroupMain} */
 static $create__java_lang_String(/** ?string */ id) {
  TextInputGroupMain.$clinit();
  let $instance = new TextInputGroupMain();
  $instance.$ctor__org_patternfly_component_textinputgroup_TextInputGroupMain__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_TextInputGroupMain__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_textInput__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_textinputgroup_TextInputGroup__void(/** TextInputGroup */ textInputGroup) {
  this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_ = textInputGroup;
  if (textInputGroup.f_initialDisabled__org_patternfly_component_textinputgroup_TextInputGroup) {
   this.m_disabled__boolean__org_jboss_elemento_TypedBuilder(true);
  }
  if (!$Equality.$same(textInputGroup.f_initialChangeHandler__org_patternfly_component_textinputgroup_TextInputGroup, null)) {
   this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    textInputGroup.f_initialChangeHandler__org_patternfly_component_textinputgroup_TextInputGroup.m_onChange__java_lang_Object__java_lang_Object__void(textInputGroup, this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.value);
   }));
  }
 }
 /** @nodts @return {TextInputGroup} */
 m_mainComponent__org_patternfly_component_textinputgroup_TextInputGroup() {
  return this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupMain_;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_addIcon__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ iconClass) {
  return this.m_addIcon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_textinputgroup_TextInputGroupMain(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass));
 }
 /** @nodts @return {TextInputGroupMain} */
 m_addIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_textinputgroup_TextInputGroupMain(/** PredefinedIcon */ icon) {
  return this.m_addIcon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_textinputgroup_TextInputGroupMain(InlineIcon.m_inlineIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_icon_InlineIcon(icon));
 }
 /** @nodts @return {TextInputGroupMain} */
 m_addIcon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_textinputgroup_TextInputGroupMain(/** InlineIcon */ icon) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_layout_Classes)], j_l_String)));
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(this.f_textContainer__org_patternfly_component_textinputgroup_TextInputGroupMain_, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder)));
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_addChipGroup__org_patternfly_component_chip_ChipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ChipGroup */ chipGroup) {
  this.f_chipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain = chipGroup;
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), chipGroup);
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_value__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ value) {
  this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.value = value;
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain(/** ?string */ placeholder) {
  this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain.placeholder = placeholder;
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_withInputElement__java_util_function_Consumer__org_patternfly_component_textinputgroup_TextInputGroupMain(/** Consumer<InputElementBuilder<HTMLInputElement>> */ inputElementConsumer) {
  inputElementConsumer.m_accept__java_lang_Object__void(/**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(this.f_inputElement__org_patternfly_component_textinputgroup_TextInputGroupMain)));
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_that__org_patternfly_component_textinputgroup_TextInputGroupMain() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_TextInputGroupMain();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroupMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupMain} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TextInputGroupMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_textinputgroup_TextInputGroup();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** TextInputGroup */ arg0) {
  this.m_passComponent__org_patternfly_component_textinputgroup_TextInputGroup__void(/**@type {TextInputGroup}*/ ($Casts.$to(arg0, TextInputGroup)));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInputGroupMain} */
 m_disabled__org_patternfly_component_textinputgroup_TextInputGroupMain() {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroupMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInputGroupMain} */
 m_disabled__boolean__org_patternfly_component_textinputgroup_TextInputGroupMain(/** boolean */ arg0) {
  return /**@type {TextInputGroupMain}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TextInputGroupMain));
 }
 /** @nodts */
 static $clinit() {
  TextInputGroupMain.$clinit = () =>{};
  TextInputGroupMain.$loadModules();
  SubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroupMain;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  TextInputGroup = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroup$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(TextInputGroupMain);
ComponentReference.$markImplementor(TextInputGroupMain);
$Util.$setClassMetadata(TextInputGroupMain, 'org.patternfly.component.textinputgroup.TextInputGroupMain');

exports = TextInputGroupMain;

//# sourceMappingURL=TextInputGroupMain.js.map

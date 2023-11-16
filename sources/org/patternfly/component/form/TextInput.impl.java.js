goog.module('org.patternfly.component.form.TextInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.core.HasValue$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');
const Invalid = goog.require('org.patternfly.core.Modifiers.Invalid$impl');
const Plain = goog.require('org.patternfly.core.Modifiers.Plain$impl');
const Readonly = goog.require('org.patternfly.core.Modifiers.Readonly$impl');
const Required = goog.require('org.patternfly.core.Modifiers.Required$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, TextInput>}
 * @implements {HasValue<?string>}
 * @implements {Disabled<HTMLElement, TextInput>}
 * @implements {Invalid<HTMLElement, TextInput>}
 * @implements {Plain<HTMLElement, TextInput>}
 * @implements {Readonly<HTMLElement, TextInput>}
 * @implements {Required<HTMLElement, TextInput>}
 */
class TextInput extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_form_TextInput_;
  /**@type {boolean} @nodts*/
  this.f_leftTruncatedApplied__org_patternfly_component_form_TextInput_ = false;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_form_TextInput_;
  /**@type {HTMLElement} @nodts*/
  this.f_invalidIcon__org_patternfly_component_form_TextInput_;
 }
 /** @nodts @return {TextInput} */
 static m_textInput__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ id) {
  TextInput.$clinit();
  return TextInput.$create__java_lang_String(id);
 }
 /** @nodts @return {!TextInput} */
 static $create__java_lang_String(/** ?string */ id) {
  TextInput.$clinit();
  let $instance = new TextInput();
  $instance.$ctor__org_patternfly_component_form_TextInput__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_TextInput__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(id), InputElementBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_invalid__org_patternfly_core_Aria, false), InputElementBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), ComponentType.f_TextInput__org_patternfly_component_ComponentType);
  this.f_inputElement__org_patternfly_component_form_TextInput_ = /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement().firstElementChild, $Overlay));
 }
 /** @nodts @return {TextInput} */
 m_addIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_form_TextInput(/** PredefinedIcon */ predefinedIcon) {
  return this.m_addIcon__java_lang_String__org_patternfly_component_form_TextInput(predefinedIcon.f_className__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {TextInput} */
 m_addIcon__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ iconClass) {
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_TextInput().appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {TextInput} */
 m_disabled__boolean__org_patternfly_component_form_TextInput(/** boolean */ disabled) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.disabled = disabled;
  return /**@type {TextInput}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), TextInput));
 }
 /** @nodts @return {TextInput} */
 m_readonly__boolean__org_patternfly_component_form_TextInput(/** boolean */ readonly) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.readOnly = readonly;
  return /**@type {TextInput}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_core_Modifiers_Readonly__boolean__org_jboss_elemento_TypedBuilder(this, readonly), TextInput));
 }
 /** @nodts @return {TextInput} */
 m_plain__boolean__org_patternfly_component_form_TextInput(/** boolean */ plain) {
  if (plain) {
   this.m_readonly__org_jboss_elemento_TypedBuilder();
  }
  return /**@type {TextInput}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_core_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, plain), TextInput));
 }
 /** @nodts @return {TextInput} */
 m_invalid__boolean__org_patternfly_component_form_TextInput(/** boolean */ invalid) {
  if (invalid) {
   this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_TextInput().appendChild(this.m_failSafeInvalidIcon__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_TextInput());
  } else {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.m_failSafeInvalidIcon__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_TextInput());
  }
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_inputElement__org_patternfly_component_form_TextInput_, Aria.f_invalid__org_patternfly_core_Aria, !invalid);
  return /**@type {TextInput}*/ ($Casts.$to(Invalid.m_invalid__$default__org_patternfly_core_Modifiers_Invalid__boolean__org_jboss_elemento_TypedBuilder(this, invalid), TextInput));
 }
 /** @nodts @return {TextInput} */
 m_required__boolean__org_patternfly_component_form_TextInput(/** boolean */ required) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.required = required;
  return this;
 }
 /** @nodts @return {TextInput} */
 m_value__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ value) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.value = value;
  return this;
 }
 /** @nodts @return {TextInput} */
 m_placeholder__java_lang_String__org_patternfly_component_form_TextInput(/** ?string */ placeholder) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.placeholder = placeholder;
  return this;
 }
 /** @nodts @return {TextInput} */
 m_applyTo__java_util_function_Consumer__org_patternfly_component_form_TextInput(/** Consumer<InputElementBuilder<HTMLInputElement>> */ inputElementConsumer) {
  inputElementConsumer.m_accept__java_lang_Object__void(this.m_inputElement__org_jboss_elemento_InputElementBuilder());
  return this;
 }
 /** @nodts @return {TextInput} */
 m_that__org_patternfly_component_form_TextInput() {
  return this;
 }
 /** @nodts @return {TextInput} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_TextInput(/** ChangeHandler<TextInput, ?string> */ handler) {
  this.f_inputElement__org_patternfly_component_form_TextInput_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   handler.m_onChange__java_lang_Object__java_lang_Object__void(this, this.f_inputElement__org_patternfly_component_form_TextInput_.value);
  }));
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_inputElement__org_patternfly_component_form_TextInput_.value;
 }
 /** @nodts @return {InputElementBuilder<HTMLInputElement>} */
 m_inputElement__org_jboss_elemento_InputElementBuilder() {
  return /**@type {InputElementBuilder<HTMLInputElement>}*/ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement__org_jboss_elemento_InputElementBuilder(this.f_inputElement__org_patternfly_component_form_TextInput_));
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_TextInput() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_form_TextInput_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_iconContainer__org_patternfly_component_form_TextInput_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_utilities__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_form_TextInput_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeInvalidIcon__elemental2_dom_HTMLElement_$p_org_patternfly_component_form_TextInput() {
  if ($Equality.$same(this.f_invalidIcon__org_patternfly_component_form_TextInput_, null)) {
   this.f_invalidIcon__org_patternfly_component_form_TextInput_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_status__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_exclamationCircle__org_patternfly_layout_PredefinedIcon)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement();
  }
  return this.f_invalidIcon__org_patternfly_component_form_TextInput_;
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_TextInput();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInput}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_form_TextInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_invalid__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInput}*/ ($Casts.$to(Invalid.m_invalid__$default__org_patternfly_core_Modifiers_Invalid__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_invalid__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_invalid__boolean__org_patternfly_component_form_TextInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInput}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_core_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_plain__boolean__org_patternfly_component_form_TextInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_readonly__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInput}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_core_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_readonly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_readonly__boolean__org_patternfly_component_form_TextInput(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_required__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInput}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_core_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInput} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_required__boolean__org_patternfly_component_form_TextInput(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_disabled__org_patternfly_component_form_TextInput() {
  return /**@type {TextInput}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_invalid__org_patternfly_component_form_TextInput() {
  return /**@type {TextInput}*/ ($Casts.$to(Invalid.m_invalid__$default__org_patternfly_core_Modifiers_Invalid__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_plain__org_patternfly_component_form_TextInput() {
  return /**@type {TextInput}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_core_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_readonly__org_patternfly_component_form_TextInput() {
  return /**@type {TextInput}*/ ($Casts.$to(Readonly.m_readonly__$default__org_patternfly_core_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInput} */
 m_required__org_patternfly_component_form_TextInput() {
  return /**@type {TextInput}*/ ($Casts.$to(Required.m_required__$default__org_patternfly_core_Modifiers_Required__org_jboss_elemento_TypedBuilder(this), TextInput));
 }
 /** @nodts */
 static $clinit() {
  TextInput.$clinit = () =>{};
  TextInput.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  Invalid.$clinit();
  Plain.$clinit();
  Readonly.$clinit();
  Required.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInput;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasValue.$markImplementor(TextInput);
Disabled.$markImplementor(TextInput);
Invalid.$markImplementor(TextInput);
Plain.$markImplementor(TextInput);
Readonly.$markImplementor(TextInput);
Required.$markImplementor(TextInput);
$Util.$setClassMetadata(TextInput, 'org.patternfly.component.form.TextInput');

exports = TextInput;

//# sourceMappingURL=TextInput.js.map

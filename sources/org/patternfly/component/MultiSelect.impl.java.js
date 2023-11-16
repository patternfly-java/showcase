goog.module('org.patternfly.component.MultiSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValues = goog.require('org.patternfly.core.HasValues$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let CollapseExpand = goog.forwardDeclare('org.patternfly.component.CollapseExpand$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let OldItemDisplay = goog.forwardDeclare('org.patternfly.component.OldItemDisplay$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLDivElement, MultiSelect<T>>}
 * @implements {Disabled<HTMLDivElement, MultiSelect<T>>}
 * @implements {HasValues<T>}
 * @deprecated
 */
class MultiSelect extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_typeahead__org_patternfly_component_MultiSelect_ = false;
  /**@type {CollapseExpand} @nodts*/
  this.f_ceh__org_patternfly_component_MultiSelect_;
  /**@type {OldItemDisplay<HTMLElement, T>} @nodts*/
  this.f_itemDisplay__org_patternfly_component_MultiSelect_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_button__org_patternfly_component_MultiSelect_;
  /**@type {HTMLElement} @nodts*/
  this.f_text__org_patternfly_component_MultiSelect_;
  /**@type {HTMLElement} @nodts*/
  this.f_menu__org_patternfly_component_MultiSelect_;
  /**@type {SelectHandler<T>} @nodts*/
  this.f_onSelect__org_patternfly_component_MultiSelect_;
 }
 /** @nodts @template T_1 @return {MultiSelect<T_1>} */
 static m_multi__java_lang_String__org_patternfly_component_MultiSelect(/** ?string */ text) {
  MultiSelect.$clinit();
  return /**@type {!MultiSelect<T_1>}*/ (MultiSelect.$create__org_patternfly_component_Icon__java_lang_String__boolean(null, text, false));
 }
 /** @nodts @template T_1 @return {MultiSelect<T_1>} */
 static m_multi__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_MultiSelect(/** Icon */ icon, /** ?string */ text) {
  MultiSelect.$clinit();
  return /**@type {!MultiSelect<T_1>}*/ (MultiSelect.$create__org_patternfly_component_Icon__java_lang_String__boolean(icon, text, true));
 }
 /** @nodts @template T @return {!MultiSelect<T>} */
 static $create__org_patternfly_component_Icon__java_lang_String__boolean(/** Icon */ icon, /** ?string */ text, /** boolean */ typeahead) {
  MultiSelect.$clinit();
  let $instance = new MultiSelect();
  $instance.$ctor__org_patternfly_component_MultiSelect__org_patternfly_component_Icon__java_lang_String__boolean__void(icon, text, typeahead);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_MultiSelect__org_patternfly_component_Icon__java_lang_String__boolean__void(/** Icon */ icon, /** ?string */ text, /** boolean */ typeahead) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Select');
  this.f_typeahead__org_patternfly_component_MultiSelect_ = typeahead;
  this.f_ceh__org_patternfly_component_MultiSelect_ = CollapseExpand.$create__();
  this.f_itemDisplay__org_patternfly_component_MultiSelect_ = /**@type {!OldItemDisplay<HTMLElement, T>}*/ (OldItemDisplay.$create__());
  let buttonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_MultiSelect_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, buttonId), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_MultiSelect_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiSelect());
  }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_wrapper__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_text__org_patternfly_component_MultiSelect_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_arrow__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_MultiSelect_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (!$Equality.$same(icon, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(icon.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), this.f_text__org_patternfly_component_MultiSelect_);
  }
 }
 /** @nodts @return {MultiSelect<T>} */
 m_that__org_patternfly_component_MultiSelect() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiSelect() {
  return this.f_button__org_patternfly_component_MultiSelect_;
 }
 /** @nodts @return {HTMLElement} */
 m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiSelect() {
  return this.f_menu__org_patternfly_component_MultiSelect_;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_add__java_lang_Iterable__org_patternfly_component_MultiSelect(/** Iterable<T> */ items) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.m_add__java_lang_String__java_lang_Object__org_patternfly_component_MultiSelect(null, item);
   }
  }
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_add__arrayOf_java_lang_Object__org_patternfly_component_MultiSelect(/** Array<T> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.m_add__java_lang_String__java_lang_Object__org_patternfly_component_MultiSelect(null, item);
   }
  }
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_add__java_lang_Object__org_patternfly_component_MultiSelect(/** T */ item) {
  return this.m_add__java_lang_String__java_lang_Object__org_patternfly_component_MultiSelect(null, item);
 }
 /** @nodts @return {MultiSelect<T>} */
 m_add__java_lang_String__java_lang_Iterable__org_patternfly_component_MultiSelect(/** ?string */ group, /** Iterable<T> */ items) {
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_add__java_lang_String__arrayOf_java_lang_Object__org_patternfly_component_MultiSelect(/** ?string */ group, /** Array<T> */ items) {
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_add__java_lang_String__java_lang_Object__org_patternfly_component_MultiSelect(/** ?string */ group, /** T */ item) {
  let span = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['label'], j_l_String)))], j_l_String))), HTMLContainerBuilder));
  this.f_itemDisplay__org_patternfly_component_MultiSelect_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(span, item);
  this.f_menu__org_patternfly_component_MultiSelect_.appendChild(/**@type {HTMLLabelElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_input__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_multiSelectItem__org_patternfly_core_Dataset, this.f_itemDisplay__org_patternfly_component_MultiSelect_.m_itemId__java_lang_Object__java_lang_String(item)), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_MultiSelect_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiSelect());
   this.m_select__java_lang_Object__org_patternfly_component_MultiSelect(item);
  }), InputElementBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['label'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_text__org_patternfly_layout_Classes), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLabelElement_$Overlay)));
  return this;
 }
 /** @override @nodts @return {Set<T>} */
 m_values__java_util_Set() {
  return null;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_select__java_lang_Object__org_patternfly_component_MultiSelect(/** T */ item) {
  return this.m_select__java_lang_Object__boolean__org_patternfly_component_MultiSelect(item, true);
 }
 /** @nodts @return {MultiSelect<T>} */
 m_select__java_lang_Object__boolean__org_patternfly_component_MultiSelect(/** T */ item, /** boolean */ fireOnSelect) {
  this.f_text__org_patternfly_component_MultiSelect_.textContent = /**@type {?string}*/ ($Casts.$to(this.f_itemDisplay__org_patternfly_component_MultiSelect_.f_asString__org_patternfly_component_OldItemDisplay.m_apply__java_lang_Object__java_lang_Object(item), j_l_String));
  if (fireOnSelect && !$Equality.$same(this.f_onSelect__org_patternfly_component_MultiSelect_, null)) {
   this.f_onSelect__org_patternfly_component_MultiSelect_.m_onSelect__java_lang_Object__void(item);
  }
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_identifier__java_util_function_Function__org_patternfly_component_MultiSelect(/** j_u_function_Function<T, ?string> */ identifier) {
  this.f_itemDisplay__org_patternfly_component_MultiSelect_.f_identifier__org_patternfly_component_OldItemDisplay = identifier;
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_asString__java_util_function_Function__org_patternfly_component_MultiSelect(/** j_u_function_Function<T, ?string> */ asString) {
  this.f_itemDisplay__org_patternfly_component_MultiSelect_.f_asString__org_patternfly_component_OldItemDisplay = asString;
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_display__java_util_function_BiConsumer__org_patternfly_component_MultiSelect(/** BiConsumer<HTMLContainerBuilder<HTMLElement>, T> */ display) {
  this.f_itemDisplay__org_patternfly_component_MultiSelect_.f_display__org_patternfly_component_OldItemDisplay = display;
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_up__org_patternfly_component_MultiSelect() {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_disabled__boolean__org_patternfly_component_MultiSelect(/** boolean */ disabled) {
  this.f_button__org_patternfly_component_MultiSelect_.disabled = disabled;
  return this;
 }
 /** @nodts */
 m_disable__java_lang_Object__void(/** T */ item) {}
 /** @nodts */
 m_enable__java_lang_Object__void(/** T */ item) {}
 /** @nodts @return {MultiSelect<T>} */
 m_onToggle__java_util_function_Consumer__org_patternfly_component_MultiSelect(/** Consumer<?boolean> */ onToggle) {
  this.f_ceh__org_patternfly_component_MultiSelect_.f_onToggle__org_patternfly_component_CollapseExpand = onToggle;
  return this;
 }
 /** @nodts @return {MultiSelect<T>} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_MultiSelect(/** SelectHandler<T> */ onSelect) {
  this.f_onSelect__org_patternfly_component_MultiSelect_ = onSelect;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiSelect<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_MultiSelect();
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiSelect<T>} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {MultiSelect<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MultiSelect));
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiSelect<T>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_MultiSelect(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {MultiSelect<T>} */
 m_disabled__org_patternfly_component_MultiSelect() {
  return /**@type {MultiSelect<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MultiSelect));
 }
 /** @nodts */
 static $clinit() {
  MultiSelect.$clinit = () =>{};
  MultiSelect.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  CollapseExpand = goog.module.get('org.patternfly.component.CollapseExpand$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  OldItemDisplay = goog.module.get('org.patternfly.component.OldItemDisplay$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(MultiSelect);
HasValues.$markImplementor(MultiSelect);
$Util.$setClassMetadata(MultiSelect, 'org.patternfly.component.MultiSelect');

exports = MultiSelect;

//# sourceMappingURL=MultiSelect.js.map

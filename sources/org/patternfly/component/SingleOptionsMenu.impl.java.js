goog.module('org.patternfly.component.SingleOptionsMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.core.HasValue$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
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
 * @extends {BaseComponent<HTMLDivElement, SingleOptionsMenu<T>>}
 * @implements {HasValue<T>}
 * @implements {Disabled<HTMLDivElement, SingleOptionsMenu<T>>}
 * @deprecated
 */
class SingleOptionsMenu extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CollapseExpand} @nodts*/
  this.f_ceh__org_patternfly_component_SingleOptionsMenu_;
  /**@type {OldItemDisplay<HTMLButtonElement, T>} @nodts*/
  this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_button__org_patternfly_component_SingleOptionsMenu_;
  /**@type {HTMLElement} @nodts*/
  this.f_plain__org_patternfly_component_SingleOptionsMenu_;
  /**@type {HTMLElement} @nodts*/
  this.f_text__org_patternfly_component_SingleOptionsMenu_;
  /**@type {HTMLElement} @nodts*/
  this.f_menu__org_patternfly_component_SingleOptionsMenu_;
  /**@type {T} @nodts*/
  this.f_value__org_patternfly_component_SingleOptionsMenu_;
  /**@type {SelectHandler<T>} @nodts*/
  this.f_onSelect__org_patternfly_component_SingleOptionsMenu_;
  /**@type {boolean} @nodts*/
  this.f_collapseOnSelect__org_patternfly_component_SingleOptionsMenu_ = false;
 }
 /** @nodts @template T_1 @return {SingleOptionsMenu<T_1>} */
 static m_text__java_lang_String__org_patternfly_component_SingleOptionsMenu(/** ?string */ text) {
  SingleOptionsMenu.$clinit();
  return /**@type {!SingleOptionsMenu<T_1>}*/ (SingleOptionsMenu.$create__java_lang_String__org_patternfly_component_Icon__boolean(text, null, false));
 }
 /** @nodts @template T_1 @return {SingleOptionsMenu<T_1>} */
 static m_icon__org_patternfly_component_Icon__org_patternfly_component_SingleOptionsMenu(/** Icon */ icon) {
  SingleOptionsMenu.$clinit();
  return /**@type {!SingleOptionsMenu<T_1>}*/ (SingleOptionsMenu.$create__java_lang_String__org_patternfly_component_Icon__boolean(null, icon, false));
 }
 /** @nodts @template T_1 @return {SingleOptionsMenu<T_1>} */
 static m_plain__java_lang_String__org_patternfly_component_SingleOptionsMenu(/** ?string */ text) {
  SingleOptionsMenu.$clinit();
  return /**@type {!SingleOptionsMenu<T_1>}*/ (SingleOptionsMenu.$create__java_lang_String__org_patternfly_component_Icon__boolean(text, null, true));
 }
 /** @nodts @template T @return {!SingleOptionsMenu<T>} */
 static $create__java_lang_String__org_patternfly_component_Icon__boolean(/** ?string */ text, /** Icon */ icon, /** boolean */ plain) {
  SingleOptionsMenu.$clinit();
  let $instance = new SingleOptionsMenu();
  $instance.$ctor__org_patternfly_component_SingleOptionsMenu__java_lang_String__org_patternfly_component_Icon__boolean__void(text, icon, plain);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_SingleOptionsMenu__java_lang_String__org_patternfly_component_Icon__boolean__void(/** ?string */ text, /** Icon */ icon, /** boolean */ plain) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'OptionsMenu');
  this.f_ceh__org_patternfly_component_SingleOptionsMenu_ = CollapseExpand.$create__();
  this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_ = /**@type {!OldItemDisplay<HTMLButtonElement, T>}*/ (OldItemDisplay.$create__());
  this.f_collapseOnSelect__org_patternfly_component_SingleOptionsMenu_ = false;
  let buttonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)));
  let buttonBuilder = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_layout_Classes, Classes.f_listbox__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_SingleOptionsMenu_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleOptionsMenu(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleOptionsMenu());
  }), HTMLContainerBuilder));
  let /** HTMLElement */ trigger;
  if (!$Equality.$same(icon, null)) {
   this.f_plain__org_patternfly_component_SingleOptionsMenu_ = null;
   this.f_text__org_patternfly_component_SingleOptionsMenu_ = null;
   this.f_button__org_patternfly_component_SingleOptionsMenu_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(icon.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
   trigger = this.f_button__org_patternfly_component_SingleOptionsMenu_;
  } else {
   if (plain) {
    this.f_plain__org_patternfly_component_SingleOptionsMenu_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_layout_Classes), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_text__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_text__org_patternfly_component_SingleOptionsMenu_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_SingleOptionsMenu_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_button__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', text), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
    trigger = this.f_plain__org_patternfly_component_SingleOptionsMenu_;
   } else {
    this.f_plain__org_patternfly_component_SingleOptionsMenu_ = null;
    this.f_button__org_patternfly_component_SingleOptionsMenu_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', text), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_text__org_patternfly_component_SingleOptionsMenu_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
    trigger = this.f_button__org_patternfly_component_SingleOptionsMenu_;
   }
  }
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(trigger);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_SingleOptionsMenu_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, buttonId), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_menu__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_that__org_patternfly_component_SingleOptionsMenu() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleOptionsMenu() {
  return this.f_button__org_patternfly_component_SingleOptionsMenu_;
 }
 /** @nodts @return {HTMLElement} */
 m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleOptionsMenu() {
  return this.f_menu__org_patternfly_component_SingleOptionsMenu_;
 }
 /** @nodts @return {HTMLElement} */
 m_textElement__elemental2_dom_HTMLElement_$pp_org_patternfly_component() {
  return this.f_text__org_patternfly_component_SingleOptionsMenu_;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_add__java_lang_Iterable__org_patternfly_component_SingleOptionsMenu(/** Iterable<T> */ items) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.m_add__java_lang_Object__org_patternfly_component_SingleOptionsMenu(item);
   }
  }
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/** Array<T> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.m_add__java_lang_Object__org_patternfly_component_SingleOptionsMenu(item);
   }
  }
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_add__java_lang_Object__org_patternfly_component_SingleOptionsMenu(/** T */ item) {
  let itemId = this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_.m_itemId__java_lang_Object__java_lang_String(item);
  let button = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('tabindex', - 1 | 0), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_singleOptionsMenuItem__org_patternfly_core_Dataset, itemId), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   if (this.f_collapseOnSelect__org_patternfly_component_SingleOptionsMenu_) {
    this.f_ceh__org_patternfly_component_SingleOptionsMenu_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleOptionsMenu(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleOptionsMenu());
   }
   this.m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu(item);
  }), HTMLContainerBuilder));
  this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(button, item);
  this.f_menu__org_patternfly_component_SingleOptionsMenu_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_presentation__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_identifier__java_util_function_Function__org_patternfly_component_SingleOptionsMenu(/** j_u_function_Function<T, ?string> */ identifier) {
  this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_.f_identifier__org_patternfly_component_OldItemDisplay = identifier;
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_asString__java_util_function_Function__org_patternfly_component_SingleOptionsMenu(/** j_u_function_Function<T, ?string> */ asString) {
  this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_.f_asString__org_patternfly_component_OldItemDisplay = asString;
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_display__java_util_function_BiConsumer__org_patternfly_component_SingleOptionsMenu(/** BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> */ display) {
  this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_.f_display__org_patternfly_component_OldItemDisplay = display;
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu(/** T */ item) {
  return this.m_select__java_lang_Object__boolean__org_patternfly_component_SingleOptionsMenu(item, true);
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_select__java_lang_Object__boolean__org_patternfly_component_SingleOptionsMenu(/** T */ item, /** boolean */ fireOnSelect) {
  this.f_value__org_patternfly_component_SingleOptionsMenu_ = item;
  let itemId = this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_.m_itemId__java_lang_Object__java_lang_String(item);
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_menu__org_patternfly_component_SingleOptionsMenu_, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_singleOptionsMenuItem__org_patternfly_core_Dataset)).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let icon = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(e, By.m_selector__java_lang_String__org_jboss_elemento_By('.fas.fa-check'));
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(itemId, /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(e.dataset, Dataset.f_singleOptionsMenuItem__org_patternfly_core_Dataset), j_l_String)))) {
     if ($Equality.$same(icon, null)) {
      e.appendChild(/**@type {Icon}*/ ($Casts.$to(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.f_check__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), Icon)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon)).m_element__elemental2_dom_HTMLElement());
     }
    } else {
     Elements.m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element__boolean(e, icon);
    }
   }
  }
  if (fireOnSelect && !$Equality.$same(this.f_onSelect__org_patternfly_component_SingleOptionsMenu_, null)) {
   this.f_onSelect__org_patternfly_component_SingleOptionsMenu_.m_onSelect__java_lang_Object__void(this.f_value__org_patternfly_component_SingleOptionsMenu_);
  }
  return this;
 }
 /** @override @nodts @return {T} */
 m_value__java_lang_Object() {
  return this.f_value__org_patternfly_component_SingleOptionsMenu_;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_up__org_patternfly_component_SingleOptionsMenu() {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_right__org_patternfly_component_SingleOptionsMenu() {
  this.f_menu__org_patternfly_component_SingleOptionsMenu_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_alignRight__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_collapseOnSelect__org_patternfly_component_SingleOptionsMenu() {
  this.f_collapseOnSelect__org_patternfly_component_SingleOptionsMenu_ = true;
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_disabled__boolean__org_patternfly_component_SingleOptionsMenu(/** boolean */ disabled) {
  this.f_button__org_patternfly_component_SingleOptionsMenu_.disabled = disabled;
  if (!$Equality.$same(this.f_plain__org_patternfly_component_SingleOptionsMenu_, null)) {
   if (disabled) {
    this.f_plain__org_patternfly_component_SingleOptionsMenu_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes));
   } else {
    this.f_plain__org_patternfly_component_SingleOptionsMenu_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes));
   }
  }
  return this;
 }
 /** @nodts */
 m_disable__java_lang_Object__void(/** T */ item) {
  let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_SingleOptionsMenu(item);
  if (!$Equality.$same(element, null)) {
   element.disabled = true;
  }
 }
 /** @nodts */
 m_enable__java_lang_Object__void(/** T */ item) {
  let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_SingleOptionsMenu(item);
  if (!$Equality.$same(element, null)) {
   element.disabled = false;
  }
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_onToggle__java_util_function_Consumer__org_patternfly_component_SingleOptionsMenu(/** Consumer<?boolean> */ onToggle) {
  this.f_ceh__org_patternfly_component_SingleOptionsMenu_.f_onToggle__org_patternfly_component_CollapseExpand = onToggle;
  return this;
 }
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_SingleOptionsMenu(/** SelectHandler<T> */ onSelect) {
  this.f_onSelect__org_patternfly_component_SingleOptionsMenu_ = onSelect;
  return this;
 }
 /** @nodts @return {HTMLButtonElement} */
 m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_SingleOptionsMenu(/** T */ item) {
  let itemId = this.f_itemDisplay__org_patternfly_component_SingleOptionsMenu_.m_itemId__java_lang_Object__java_lang_String(item);
  return /**@type {HTMLButtonElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_menu__org_patternfly_component_SingleOptionsMenu_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_singleOptionsMenuItem__org_patternfly_core_Dataset, itemId)), $Overlay));
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleOptionsMenu<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_SingleOptionsMenu();
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleOptionsMenu<T>} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {SingleOptionsMenu<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), SingleOptionsMenu));
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleOptionsMenu<T>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_SingleOptionsMenu(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {SingleOptionsMenu<T>} */
 m_disabled__org_patternfly_component_SingleOptionsMenu() {
  return /**@type {SingleOptionsMenu<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), SingleOptionsMenu));
 }
 /** @nodts */
 static $clinit() {
  SingleOptionsMenu.$clinit = () =>{};
  SingleOptionsMenu.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleOptionsMenu;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
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
HasValue.$markImplementor(SingleOptionsMenu);
Disabled.$markImplementor(SingleOptionsMenu);
$Util.$setClassMetadata(SingleOptionsMenu, 'org.patternfly.component.SingleOptionsMenu');

exports = SingleOptionsMenu;

//# sourceMappingURL=SingleOptionsMenu.js.map

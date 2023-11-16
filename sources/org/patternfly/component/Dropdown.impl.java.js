goog.module('org.patternfly.component.Dropdown$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let CollapseExpand = goog.forwardDeclare('org.patternfly.component.CollapseExpand$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let OldItemDisplay = goog.forwardDeclare('org.patternfly.component.OldItemDisplay$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLDivElement, Dropdown<T>>}
 * @implements {Disabled<HTMLDivElement, Dropdown<T>>}
 * @deprecated
 */
class Dropdown extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_splitCheckbox__org_patternfly_component_Dropdown_ = false;
  /**@type {boolean} @nodts*/
  this.f_splitAction__org_patternfly_component_Dropdown_ = false;
  /**@type {CollapseExpand} @nodts*/
  this.f_ceh__org_patternfly_component_Dropdown_;
  /**@type {OldItemDisplay<HTMLButtonElement, T>} @nodts*/
  this.f_itemDisplay__org_patternfly_component_Dropdown_;
  /**@type {HTMLElement} @nodts*/
  this.f_toggle__org_patternfly_component_Dropdown_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_input__org_patternfly_component_Dropdown_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_button__org_patternfly_component_Dropdown_;
  /**@type {HTMLElement} @nodts*/
  this.f_menu__org_patternfly_component_Dropdown_;
  /**@type {Consumer<?boolean>} @nodts*/
  this.f_onChange__org_patternfly_component_Dropdown_;
  /**@type {SelectHandler<T>} @nodts*/
  this.f_onSelect__org_patternfly_component_Dropdown_;
 }
 /** @nodts @template T_1 @return {Dropdown<T_1>} */
 static m_text__java_lang_String__org_patternfly_component_Dropdown(/** ?string */ text) {
  Dropdown.$clinit();
  return /**@type {!Dropdown<T_1>}*/ (Dropdown.$create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(text, null, false, false));
 }
 /** @nodts @template T_1 @return {Dropdown<T_1>} */
 static m_kebab__org_patternfly_component_Dropdown() {
  Dropdown.$clinit();
  return /**@type {!Dropdown<T_1>}*/ (Dropdown.$create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(null, Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.f_ellipsisV__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon), false, false));
 }
 /** @nodts @template T_1 @return {Dropdown<T_1>} */
 static m_icon__org_patternfly_component_Icon__org_patternfly_component_Dropdown(/** Icon */ icon) {
  Dropdown.$clinit();
  return /**@type {!Dropdown<T_1>}*/ (Dropdown.$create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(null, icon, false, false));
 }
 /** @nodts @template T_1 @return {Dropdown<T_1>} */
 static m_splitCheckbox__org_patternfly_component_Dropdown() {
  Dropdown.$clinit();
  return /**@type {!Dropdown<T_1>}*/ (Dropdown.$create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(null, null, true, false));
 }
 /** @nodts @template T_1 @return {Dropdown<T_1>} */
 static m_splitCheckbox__java_lang_String__org_patternfly_component_Dropdown(/** ?string */ text) {
  Dropdown.$clinit();
  return /**@type {!Dropdown<T_1>}*/ (Dropdown.$create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(text, null, true, false));
 }
 /** @nodts @template T_1 @return {Dropdown<T_1>} */
 static m_splitAction__org_patternfly_component_Icon__org_patternfly_component_Dropdown(/** Icon */ icon) {
  Dropdown.$clinit();
  return /**@type {!Dropdown<T_1>}*/ (Dropdown.$create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(null, null, false, true));
 }
 /** @nodts @template T_1 @return {Dropdown<T_1>} */
 static m_splitAction__java_lang_String__org_patternfly_component_Dropdown(/** ?string */ text) {
  Dropdown.$clinit();
  return /**@type {!Dropdown<T_1>}*/ (Dropdown.$create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(text, null, false, true));
 }
 /** @nodts @template T @return {!Dropdown<T>} */
 static $create__java_lang_String__org_patternfly_component_Icon__boolean__boolean(/** ?string */ text, /** Icon */ icon, /** boolean */ splitCheckbox, /** boolean */ splitAction) {
  Dropdown.$clinit();
  let $instance = new Dropdown();
  $instance.$ctor__org_patternfly_component_Dropdown__java_lang_String__org_patternfly_component_Icon__boolean__boolean__void(text, icon, splitCheckbox, splitAction);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Dropdown__java_lang_String__org_patternfly_component_Icon__boolean__boolean__void(/** ?string */ text, /** Icon */ icon, /** boolean */ splitCheckbox, /** boolean */ splitAction) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Dropdown');
  this.f_splitCheckbox__org_patternfly_component_Dropdown_ = splitCheckbox;
  this.f_splitAction__org_patternfly_component_Dropdown_ = splitAction;
  this.f_ceh__org_patternfly_component_Dropdown_ = CollapseExpand.$create__();
  this.f_itemDisplay__org_patternfly_component_Dropdown_ = /**@type {!OldItemDisplay<HTMLButtonElement, T>}*/ (OldItemDisplay.$create__());
  let buttonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)));
  let buttonBuilder = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_layout_Classes, true), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_Dropdown_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Dropdown(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Dropdown());
  }), HTMLContainerBuilder));
  if (splitCheckbox || splitAction) {
   let inputId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_input__org_patternfly_layout_Classes], j_l_String)));
   this.f_toggle__org_patternfly_component_Dropdown_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_splitButton__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_check__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((l) =>{
    let l_1 = /**@type {HTMLLabelElement}*/ ($Casts.$to(l, HTMLLabelElement_$Overlay));
    l_1.htmlFor = inputId;
   })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_input__org_patternfly_component_Dropdown_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_input__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(inputId), InputElementBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_invalid__org_patternfly_core_Aria, false), InputElementBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', 'Select'), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_change__org_jboss_elemento_EventType, (/** Event */ e_2) =>{
    if (!$Equality.$same(this.f_onChange__org_patternfly_component_Dropdown_, null)) {
     this.f_onChange__org_patternfly_component_Dropdown_.m_accept__java_lang_Object__void(/**@type {HTMLInputElement}*/ ($Casts.$to(e_2.target, HTMLInputElement_$Overlay)).checked);
    }
   }), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement()), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_Dropdown_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_button__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', 'Select'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  } else {
   this.f_input__org_patternfly_component_Dropdown_ = null;
   buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String)));
   if (!$Equality.$same(text, null)) {
    this.f_button__org_patternfly_component_Dropdown_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
   } else {
    this.f_button__org_patternfly_component_Dropdown_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', 'Actions'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(icon.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
   }
   this.f_toggle__org_patternfly_component_Dropdown_ = this.f_button__org_patternfly_component_Dropdown_;
  }
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_toggle__org_patternfly_component_Dropdown_);
  this.m_setText__java_lang_String__void(text);
  this.f_menu__org_patternfly_component_Dropdown_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, buttonId), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_menu__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_Dropdown_);
 }
 /** @nodts @return {Dropdown<T>} */
 m_that__org_patternfly_component_Dropdown() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Dropdown() {
  return this.f_button__org_patternfly_component_Dropdown_;
 }
 /** @nodts @return {HTMLElement} */
 m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Dropdown() {
  return this.f_menu__org_patternfly_component_Dropdown_;
 }
 /** @nodts @return {Dropdown<T>} */
 m_add__java_lang_Iterable__org_patternfly_component_Dropdown(/** Iterable<T> */ items) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.m_add__java_lang_Object__org_patternfly_component_Dropdown(item);
   }
  }
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_add__arrayOf_java_lang_Object__org_patternfly_component_Dropdown(/** Array<T> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.m_add__java_lang_Object__org_patternfly_component_Dropdown(item);
   }
  }
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_add__java_lang_Object__org_patternfly_component_Dropdown(/** T */ item) {
  this.f_menu__org_patternfly_component_Dropdown_.appendChild(this.m_newItem__java_lang_Object__elemental2_dom_HTMLLIElement_$p_org_patternfly_component_Dropdown(item));
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_addSeparator__org_patternfly_component_Dropdown() {
  this.f_menu__org_patternfly_component_Dropdown_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_separator__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_separator__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_select__java_lang_Object__org_patternfly_component_Dropdown(/** T */ item) {
  return this.m_select__java_lang_Object__boolean__org_patternfly_component_Dropdown(item, true);
 }
 /** @nodts @return {Dropdown<T>} */
 m_select__java_lang_Object__boolean__org_patternfly_component_Dropdown(/** T */ item, /** boolean */ fireEvent) {
  if (fireEvent && !$Equality.$same(this.f_onSelect__org_patternfly_component_Dropdown_, null)) {
   this.f_onSelect__org_patternfly_component_Dropdown_.m_onSelect__java_lang_Object__void(item);
  }
  return this;
 }
 /** @nodts */
 m_update__java_lang_Object__void(/** T */ item) {
  let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_Dropdown(item);
  this.f_itemDisplay__org_patternfly_component_Dropdown_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(Elements.m_button__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(element), item);
 }
 /** @nodts @return {Dropdown<T>} */
 m_identifier__java_util_function_Function__org_patternfly_component_Dropdown(/** j_u_function_Function<T, ?string> */ identifier) {
  this.f_itemDisplay__org_patternfly_component_Dropdown_.f_identifier__org_patternfly_component_OldItemDisplay = identifier;
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_asString__java_util_function_Function__org_patternfly_component_Dropdown(/** j_u_function_Function<T, ?string> */ asString) {
  this.f_itemDisplay__org_patternfly_component_Dropdown_.f_asString__org_patternfly_component_OldItemDisplay = asString;
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_display__java_util_function_BiConsumer__org_patternfly_component_Dropdown(/** BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> */ display) {
  this.f_itemDisplay__org_patternfly_component_Dropdown_.f_display__org_patternfly_component_OldItemDisplay = display;
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_check__boolean__org_patternfly_component_Dropdown(/** boolean */ value) {
  return this.m_check__boolean__boolean__org_patternfly_component_Dropdown(value, true);
 }
 /** @nodts @return {Dropdown<T>} */
 m_check__boolean__boolean__org_patternfly_component_Dropdown(/** boolean */ value, /** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_input__org_patternfly_component_Dropdown_, null)) {
   this.f_input__org_patternfly_component_Dropdown_.checked = value;
  }
  if (fireEvent && !$Equality.$same(this.f_onChange__org_patternfly_component_Dropdown_, null)) {
   this.f_onChange__org_patternfly_component_Dropdown_.m_accept__java_lang_Object__void(value);
  }
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_indeterminate__boolean__org_patternfly_component_Dropdown(/** boolean */ value) {
  if (!$Equality.$same(this.f_input__org_patternfly_component_Dropdown_, null)) {
   this.f_input__org_patternfly_component_Dropdown_.indeterminate = value;
  }
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_up__org_patternfly_component_Dropdown() {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_right__org_patternfly_component_Dropdown() {
  this.f_menu__org_patternfly_component_Dropdown_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_alignRight__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_primary__org_patternfly_component_Dropdown() {
  if (!(this.f_splitCheckbox__org_patternfly_component_Dropdown_ || this.f_splitAction__org_patternfly_component_Dropdown_)) {
   this.f_button__org_patternfly_component_Dropdown_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_primary__org_patternfly_layout_Classes));
  }
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_disabled__boolean__org_patternfly_component_Dropdown(/** boolean */ disabled) {
  this.f_button__org_patternfly_component_Dropdown_.disabled = disabled;
  if (this.f_splitCheckbox__org_patternfly_component_Dropdown_ || this.f_splitAction__org_patternfly_component_Dropdown_) {
   if (disabled) {
    this.f_toggle__org_patternfly_component_Dropdown_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes));
   } else {
    this.f_toggle__org_patternfly_component_Dropdown_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes));
   }
   if (!$Equality.$same(this.f_input__org_patternfly_component_Dropdown_, null)) {
    this.f_input__org_patternfly_component_Dropdown_.disabled = disabled;
   }
  }
  return this;
 }
 /** @nodts */
 m_disable__java_lang_Object__void(/** T */ item) {
  let button = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_Dropdown(item);
  if (!$Equality.$same(button, null)) {
   button.disabled = true;
  }
 }
 /** @nodts */
 m_enable__java_lang_Object__void(/** T */ item) {
  let button = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_Dropdown(item);
  if (!$Equality.$same(button, null)) {
   button.disabled = false;
  }
 }
 /** @nodts */
 m_setText__java_lang_String__void(/** ?string */ text) {
  if ($Equality.$same(text, null)) {
   this.m_clearText__void();
  } else {
   let textElement = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_button__org_patternfly_component_Dropdown_, By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))));
   if (!$Equality.$same(textElement, null)) {
    textElement.textContent = text;
   } else {
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.f_button__org_patternfly_component_Dropdown_, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
   }
   let iconElement = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_button__org_patternfly_component_Dropdown_, By.m_selector__java_lang_String__org_jboss_elemento_By('.fas.fa-caret-down'));
   if (!$Equality.$same(iconElement, null)) {
    iconElement.classList.add(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String))));
   }
  }
 }
 /** @nodts */
 m_clearText__void() {
  if (this.f_splitCheckbox__org_patternfly_component_Dropdown_) {
   let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_button__org_patternfly_component_Dropdown_, By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))));
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element);
   let iconElement = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_button__org_patternfly_component_Dropdown_, By.m_selector__java_lang_String__org_jboss_elemento_By('.fas.fa-caret-down'));
   if (!$Equality.$same(iconElement, null)) {
    iconElement.classList.remove(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String))));
   }
  }
 }
 /** @nodts */
 m_setText__java_lang_Object__java_lang_String__void(/** T */ item, /** ?string */ text) {
  let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_Dropdown(item);
  if (!$Equality.$same(element, null)) {
   element.textContent = text;
  }
 }
 /** @nodts @return {Dropdown<T>} */
 m_onToggle__java_util_function_Consumer__org_patternfly_component_Dropdown(/** Consumer<?boolean> */ onToggle) {
  this.f_ceh__org_patternfly_component_Dropdown_.f_onToggle__org_patternfly_component_CollapseExpand = onToggle;
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_onChange__java_util_function_Consumer__org_patternfly_component_Dropdown(/** Consumer<?boolean> */ onChange) {
  this.f_onChange__org_patternfly_component_Dropdown_ = onChange;
  return this;
 }
 /** @nodts @return {Dropdown<T>} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_Dropdown(/** SelectHandler<T> */ onSelect) {
  this.f_onSelect__org_patternfly_component_Dropdown_ = onSelect;
  return this;
 }
 /** @nodts @return {HTMLLIElement} */
 m_newItem__java_lang_Object__elemental2_dom_HTMLLIElement_$p_org_patternfly_component_Dropdown(/** T */ item) {
  let button = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('tabindex', - 1 | 0), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_dropdownItem__org_patternfly_core_Dataset, this.f_itemDisplay__org_patternfly_component_Dropdown_.m_itemId__java_lang_Object__java_lang_String(item)), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_Dropdown_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Dropdown(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Dropdown());
   if (!$Equality.$same(this.f_onSelect__org_patternfly_component_Dropdown_, null)) {
    this.f_onSelect__org_patternfly_component_Dropdown_.m_onSelect__java_lang_Object__void(item);
   }
  }), HTMLContainerBuilder));
  this.f_itemDisplay__org_patternfly_component_Dropdown_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(button, item);
  return /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_menuitem__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay));
 }
 /** @nodts @return {HTMLButtonElement} */
 m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_Dropdown(/** T */ item) {
  let itemId = this.f_itemDisplay__org_patternfly_component_Dropdown_.m_itemId__java_lang_Object__java_lang_String(item);
  return /**@type {HTMLButtonElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_menu__org_patternfly_component_Dropdown_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_dropdownItem__org_patternfly_core_Dataset, itemId)), $Overlay));
 }
 //Bridge method.
 /** @final @override @nodts @return {Dropdown<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Dropdown();
 }
 //Bridge method.
 /** @final @override @nodts @return {Dropdown<T>} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Dropdown<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Dropdown));
 }
 //Bridge method.
 /** @final @override @nodts @return {Dropdown<T>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_Dropdown(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Dropdown<T>} */
 m_disabled__org_patternfly_component_Dropdown() {
  return /**@type {Dropdown<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Dropdown));
 }
 /** @nodts */
 static $clinit() {
  Dropdown.$clinit = () =>{};
  Dropdown.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Dropdown;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  CollapseExpand = goog.module.get('org.patternfly.component.CollapseExpand$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  OldItemDisplay = goog.module.get('org.patternfly.component.OldItemDisplay$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(Dropdown);
$Util.$setClassMetadata(Dropdown, 'org.patternfly.component.Dropdown');

exports = Dropdown;

//# sourceMappingURL=Dropdown.js.map

goog.module('org.patternfly.component.SingleSelect$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.core.HasValue$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
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
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let CollapseExpand = goog.forwardDeclare('org.patternfly.component.CollapseExpand$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let OldItemDisplay = goog.forwardDeclare('org.patternfly.component.OldItemDisplay$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLDivElement, SingleSelect<T>>}
 * @implements {Disabled<HTMLDivElement, SingleSelect<T>>}
 * @implements {HasValue<T>}
 * @deprecated
 */
class SingleSelect extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_typeahead__org_patternfly_component_SingleSelect_ = false;
  /**@type {CollapseExpand} @nodts*/
  this.f_ceh__org_patternfly_component_SingleSelect_;
  /**@type {OldItemDisplay<HTMLButtonElement, T>} @nodts*/
  this.f_itemDisplay__org_patternfly_component_SingleSelect_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_button__org_patternfly_component_SingleSelect_;
  /**@type {HTMLElement} @nodts*/
  this.f_text__org_patternfly_component_SingleSelect_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_input__org_patternfly_component_SingleSelect_;
  /**@type {HTMLElement} @nodts*/
  this.f_menu__org_patternfly_component_SingleSelect_;
  /**@type {T} @nodts*/
  this.f_value__org_patternfly_component_SingleSelect_;
  /**@type {SelectHandler<T>} @nodts*/
  this.f_onSelect__org_patternfly_component_SingleSelect_;
  /**@type {j_u_function_Function<T, ?string>} @nodts*/
  this.f_typeaheadFilter__org_patternfly_component_SingleSelect_;
 }
 /** @nodts @template T_1 @return {SingleSelect<T_1>} */
 static m_single__java_lang_String__org_patternfly_component_SingleSelect(/** ?string */ text) {
  SingleSelect.$clinit();
  return /**@type {!SingleSelect<T_1>}*/ (SingleSelect.$create__org_patternfly_component_Icon__java_lang_String__boolean(null, text, false));
 }
 /** @nodts @template T_1 @return {SingleSelect<T_1>} */
 static m_single__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_SingleSelect(/** Icon */ icon, /** ?string */ text) {
  SingleSelect.$clinit();
  return /**@type {!SingleSelect<T_1>}*/ (SingleSelect.$create__org_patternfly_component_Icon__java_lang_String__boolean(icon, text, false));
 }
 /** @nodts @template T @return {!SingleSelect<T>} */
 static $create__org_patternfly_component_Icon__java_lang_String__boolean(/** Icon */ icon, /** ?string */ text, /** boolean */ typeahead) {
  SingleSelect.$clinit();
  let $instance = new SingleSelect();
  $instance.$ctor__org_patternfly_component_SingleSelect__org_patternfly_component_Icon__java_lang_String__boolean__void(icon, text, typeahead);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_SingleSelect__org_patternfly_component_Icon__java_lang_String__boolean__void(/** Icon */ icon, /** ?string */ text, /** boolean */ typeahead) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Select');
  this.f_typeahead__org_patternfly_component_SingleSelect_ = typeahead;
  this.f_ceh__org_patternfly_component_SingleSelect_ = CollapseExpand.$create__();
  this.f_itemDisplay__org_patternfly_component_SingleSelect_ = /**@type {!OldItemDisplay<HTMLButtonElement, T>}*/ (OldItemDisplay.$create__());
  let buttonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)));
  if (typeahead) {
   let /** HTMLDivElement */ wrapperElement;
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_typeahead__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(wrapperElement = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_wrapper__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLFormElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLFormElement>}*/ ($Casts.$to(Elements.m_form__org_jboss_elemento_HTMLContainerBuilder().m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_submit__org_jboss_elemento_EventType, (/** Event */ arg0) =>{
    arg0.preventDefault();
   }), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_input__org_patternfly_component_SingleSelect_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_typeahead__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), InputElementBuilder)).m_placeholder__java_lang_String__org_jboss_elemento_TypedBuilder(text), InputElementBuilder)).m_autocomplete__java_lang_String__org_jboss_elemento_TypedBuilder('off'), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keydown__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(e, KeyboardEvent_$Overlay));
    goog.global.console.log('input keydown(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(e_1.code) + ')');
    this.m_onTypeahead__elemental2_dom_KeyboardEvent__java_lang_String__void_$p_org_patternfly_component_SingleSelect(e_1, /**@type {HTMLInputElement}*/ ($Casts.$to(e_1.currentTarget, HTMLInputElement_$Overlay)).value);
   }), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_focus__org_jboss_elemento_EventType, (e_2) =>{
    let e_3 = /**@type {FocusEvent}*/ ($Casts.$to(e_2, FocusEvent_$Overlay));
    goog.global.console.log('input focus');
    if (!this.f_ceh__org_patternfly_component_SingleSelect_.m_expanded__elemental2_dom_HTMLElement__boolean(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))) {
     this.f_ceh__org_patternfly_component_SingleSelect_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
    }
   }), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_blur__org_jboss_elemento_EventType, (e_4) =>{
    let e_5 = /**@type {FocusEvent}*/ ($Casts.$to(e_4, FocusEvent_$Overlay));
    goog.global.console.log('input blur');
    DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ o) =>{
     this.f_ceh__org_patternfly_component_SingleSelect_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
    }, 222, []);
   }), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_SingleSelect_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon, 'Options menu').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_button__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), Button)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), Button)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_layout_Classes, Classes.f_listbox__org_patternfly_layout_Classes), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_6) =>{
    let e_7 = /**@type {MouseEvent}*/ ($Casts.$to(e_6, MouseEvent_$Overlay));
    this.f_ceh__org_patternfly_component_SingleSelect_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
   }), Button)).m_element__elemental2_dom_HTMLElement(), $Overlay))), HTMLContainerBuilder)));
   if (!$Equality.$same(icon, null)) {
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(wrapperElement, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
   }
   this.f_text__org_patternfly_component_SingleSelect_ = null;
  } else {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_SingleSelect_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_layout_Classes, Classes.f_listbox__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_8) =>{
    let e_9 = /**@type {MouseEvent}*/ ($Casts.$to(e_8, MouseEvent_$Overlay));
    this.f_ceh__org_patternfly_component_SingleSelect_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
   }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_wrapper__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_text__org_patternfly_component_SingleSelect_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_arrow__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
   if (!$Equality.$same(icon, null)) {
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(icon.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), this.f_text__org_patternfly_component_SingleSelect_);
   }
   this.f_input__org_patternfly_component_SingleSelect_ = null;
  }
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_SingleSelect_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, buttonId), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_listbox__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 /** @nodts @return {SingleSelect<T>} */
 m_that__org_patternfly_component_SingleSelect() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect() {
  return this.f_button__org_patternfly_component_SingleSelect_;
 }
 /** @nodts @return {HTMLElement} */
 m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect() {
  return this.f_menu__org_patternfly_component_SingleSelect_;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_add__java_lang_Iterable__org_patternfly_component_SingleSelect(/** Iterable<T> */ items) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.m_add__java_lang_Object__org_patternfly_component_SingleSelect(item);
   }
  }
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleSelect(/** Array<T> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.m_add__java_lang_Object__org_patternfly_component_SingleSelect(item);
   }
  }
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_add__java_lang_Object__org_patternfly_component_SingleSelect(/** T */ item) {
  let itemId = this.f_itemDisplay__org_patternfly_component_SingleSelect_.m_itemId__java_lang_Object__java_lang_String(item);
  let button = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_option__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_singleSelectItem__org_patternfly_core_Dataset, itemId), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_SingleSelect_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
   this.m_select__java_lang_Object__org_patternfly_component_SingleSelect(item);
  }), HTMLContainerBuilder));
  this.f_itemDisplay__org_patternfly_component_SingleSelect_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(button, item);
  if (this.f_typeahead__org_patternfly_component_SingleSelect_) {
   let filter = !$Equality.$same(this.f_typeaheadFilter__org_patternfly_component_SingleSelect_, null) ? /**@type {?string}*/ ($Casts.$to(this.f_typeaheadFilter__org_patternfly_component_SingleSelect_.m_apply__java_lang_Object__java_lang_Object(item), j_l_String)) : /**@type {?string}*/ ($Casts.$to(this.f_itemDisplay__org_patternfly_component_SingleSelect_.f_asString__org_patternfly_component_OldItemDisplay.m_apply__java_lang_Object__java_lang_Object(item), j_l_String));
   button.m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_singleSelectFilter__org_patternfly_core_Dataset, filter);
  }
  this.f_menu__org_patternfly_component_SingleSelect_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_presentation__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @override @nodts @return {T} */
 m_value__java_lang_Object() {
  return this.f_value__org_patternfly_component_SingleSelect_;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_select__java_lang_Object__org_patternfly_component_SingleSelect(/** T */ item) {
  return this.m_select__java_lang_Object__boolean__org_patternfly_component_SingleSelect(item, true);
 }
 /** @nodts @return {SingleSelect<T>} */
 m_select__java_lang_Object__boolean__org_patternfly_component_SingleSelect(/** T */ item, /** boolean */ fireOnSelect) {
  this.f_value__org_patternfly_component_SingleSelect_ = item;
  let itemId = this.f_itemDisplay__org_patternfly_component_SingleSelect_.m_itemId__java_lang_Object__java_lang_String(item);
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_menu__org_patternfly_component_SingleSelect_, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_singleSelectItem__org_patternfly_core_Dataset)).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let icon = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(e, By.m_selector__java_lang_String__org_jboss_elemento_By('.fas.fa-check'));
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(itemId, /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(e.dataset, Dataset.f_singleSelectItem__org_patternfly_core_Dataset), j_l_String)))) {
     e.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_layout_Classes));
     if ($Equality.$same(icon, null)) {
      e.appendChild(/**@type {Icon}*/ ($Casts.$to(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.f_check__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), Icon)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon)).m_element__elemental2_dom_HTMLElement());
     }
    } else {
     e.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_layout_Classes));
     Elements.m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element__boolean(e, icon);
    }
   }
  }
  if (this.f_typeahead__org_patternfly_component_SingleSelect_) {
   this.f_input__org_patternfly_component_SingleSelect_.value = /**@type {?string}*/ ($Casts.$to(this.f_itemDisplay__org_patternfly_component_SingleSelect_.f_asString__org_patternfly_component_OldItemDisplay.m_apply__java_lang_Object__java_lang_Object(item), j_l_String));
  } else {
   this.f_text__org_patternfly_component_SingleSelect_.textContent = /**@type {?string}*/ ($Casts.$to(this.f_itemDisplay__org_patternfly_component_SingleSelect_.f_asString__org_patternfly_component_OldItemDisplay.m_apply__java_lang_Object__java_lang_Object(item), j_l_String));
  }
  if (fireOnSelect && !$Equality.$same(this.f_onSelect__org_patternfly_component_SingleSelect_, null)) {
   this.f_onSelect__org_patternfly_component_SingleSelect_.m_onSelect__java_lang_Object__void(this.f_value__org_patternfly_component_SingleSelect_);
  }
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_identifier__java_util_function_Function__org_patternfly_component_SingleSelect(/** j_u_function_Function<T, ?string> */ identifier) {
  this.f_itemDisplay__org_patternfly_component_SingleSelect_.f_identifier__org_patternfly_component_OldItemDisplay = identifier;
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_asString__java_util_function_Function__org_patternfly_component_SingleSelect(/** j_u_function_Function<T, ?string> */ asString) {
  this.f_itemDisplay__org_patternfly_component_SingleSelect_.f_asString__org_patternfly_component_OldItemDisplay = asString;
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_display__java_util_function_BiConsumer__org_patternfly_component_SingleSelect(/** BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> */ display) {
  this.f_itemDisplay__org_patternfly_component_SingleSelect_.f_display__org_patternfly_component_OldItemDisplay = display;
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_typeaheadFilter__java_util_function_Function__org_patternfly_component_SingleSelect(/** j_u_function_Function<T, ?string> */ typeaheadFilter) {
  this.f_typeaheadFilter__org_patternfly_component_SingleSelect_ = typeaheadFilter;
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_up__org_patternfly_component_SingleSelect() {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_disabled__boolean__org_patternfly_component_SingleSelect(/** boolean */ disabled) {
  this.f_button__org_patternfly_component_SingleSelect_.disabled = disabled;
  return this;
 }
 /** @nodts */
 m_disable__java_lang_Object__void(/** T */ item) {
  let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_SingleSelect(item);
  if (!$Equality.$same(element, null)) {
   element.disabled = true;
  }
 }
 /** @nodts */
 m_enable__java_lang_Object__void(/** T */ item) {
  let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_SingleSelect(item);
  if (!$Equality.$same(element, null)) {
   element.disabled = false;
  }
 }
 /** @nodts @return {SingleSelect<T>} */
 m_onToggle__java_util_function_Consumer__org_patternfly_component_SingleSelect(/** Consumer<?boolean> */ onToggle) {
  this.f_ceh__org_patternfly_component_SingleSelect_.f_onToggle__org_patternfly_component_CollapseExpand = onToggle;
  return this;
 }
 /** @nodts @return {SingleSelect<T>} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_SingleSelect(/** SelectHandler<T> */ onSelect) {
  this.f_onSelect__org_patternfly_component_SingleSelect_ = onSelect;
  return this;
 }
 /** @nodts @return {HTMLButtonElement} */
 m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_SingleSelect(/** T */ item) {
  let itemId = this.f_itemDisplay__org_patternfly_component_SingleSelect_.m_itemId__java_lang_Object__java_lang_String(item);
  return /**@type {HTMLButtonElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_menu__org_patternfly_component_SingleSelect_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_singleSelectItem__org_patternfly_core_Dataset, itemId)), $Overlay));
 }
 /** @nodts */
 m_onTypeahead__elemental2_dom_KeyboardEvent__java_lang_String__void_$p_org_patternfly_component_SingleSelect(/** KeyboardEvent */ e, /** ?string */ value) {
  if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e)) {
   goog.global.console.log('key matches escape');
   this.f_ceh__org_patternfly_component_SingleSelect_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
  } else if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e)) {
   goog.global.console.log('key matches enter');
   if (this.f_ceh__org_patternfly_component_SingleSelect_.m_expanded__elemental2_dom_HTMLElement__boolean(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))) {
    this.f_ceh__org_patternfly_component_SingleSelect_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
   } else {
    this.f_ceh__org_patternfly_component_SingleSelect_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_SingleSelect());
   }
  } else if (Key.f_ArrowUp__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e)) {
   goog.global.console.log('key matches arrow up');
   if (this.f_ceh__org_patternfly_component_SingleSelect_.m_expanded__elemental2_dom_HTMLElement__boolean(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))) {}
  } else if (Key.f_ArrowDown__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e)) {
   goog.global.console.log('key matches arrow down');
   if (this.f_ceh__org_patternfly_component_SingleSelect_.m_expanded__elemental2_dom_HTMLElement__boolean(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)))) {}
  } else {
   goog.global.console.log('key matches anything else');
   if (!$Equality.$same(value, null) && j_l_String.m_length__java_lang_String__int(value) != 0) {
    this.m_filter__java_lang_String__void_$p_org_patternfly_component_SingleSelect(value);
   }
  }
 }
 /** @nodts */
 m_filter__java_lang_String__void_$p_org_patternfly_component_SingleSelect(/** ?string */ text) {
  goog.global.console.log('filter for \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(text) + '\'');
  let count = AtomicInteger.$create__();
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_menu__org_patternfly_component_SingleSelect_, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_singleSelectFilter__org_patternfly_core_Dataset)).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let filter = /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(e.dataset, Dataset.f_singleSelectFilter__org_patternfly_core_Dataset), j_l_String));
    if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(filter), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(text))) {
     count.m_incrementAndGet__int();
     Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(e.parentNode, HTMLElement_$Overlay)), true);
    } else {
     Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(e.parentNode, HTMLElement_$Overlay)), false);
    }
   }
  }
  if (count.m_get__int() == 0) {
   this.f_menu__org_patternfly_component_SingleSelect_.appendChild(SingleSelect.f_NO_RESULTS__org_patternfly_component_SingleSelect_);
  } else {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(SingleSelect.f_NO_RESULTS__org_patternfly_component_SingleSelect_);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleSelect<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_SingleSelect();
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleSelect<T>} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {SingleSelect<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), SingleSelect));
 }
 //Bridge method.
 /** @final @override @nodts @return {SingleSelect<T>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_SingleSelect(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {SingleSelect<T>} */
 m_disabled__org_patternfly_component_SingleSelect() {
  return /**@type {SingleSelect<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), SingleSelect));
 }
 /** @nodts */
 static $clinit() {
  SingleSelect.$clinit = () =>{};
  SingleSelect.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  SingleSelect.f_NO_RESULTS__org_patternfly_component_SingleSelect_ = /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_presentation__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_select__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_option__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('No results found'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  FocusEvent_$Overlay = goog.module.get('elemental2.dom.FocusEvent.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  CollapseExpand = goog.module.get('org.patternfly.component.CollapseExpand$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  OldItemDisplay = goog.module.get('org.patternfly.component.OldItemDisplay$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {HTMLLIElement} @nodts*/
SingleSelect.f_NO_RESULTS__org_patternfly_component_SingleSelect_;
Disabled.$markImplementor(SingleSelect);
HasValue.$markImplementor(SingleSelect);
$Util.$setClassMetadata(SingleSelect, 'org.patternfly.component.SingleSelect');

exports = SingleSelect;

//# sourceMappingURL=SingleSelect.js.map

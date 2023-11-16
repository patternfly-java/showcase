goog.module('org.patternfly.component.Pagination$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let SingleOptionsMenu = goog.forwardDeclare('org.patternfly.component.SingleOptionsMenu$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let PageInfo = goog.forwardDeclare('org.patternfly.dataprovider.PageInfo$impl');
let Callback = goog.forwardDeclare('org.patternfly.handler.Callback$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Pagination>}
 * @implements {Disabled<HTMLDivElement, Pagination>}
 * @deprecated
 */
class Pagination extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_infoElement__org_patternfly_component_Pagination_;
  /**@type {SingleOptionsMenu<Integer>} @nodts*/
  this.f_pageSizeMenu__org_patternfly_component_Pagination_;
  /**@type {Button} @nodts*/
  this.f_firstPageButton__org_patternfly_component_Pagination_;
  /**@type {Button} @nodts*/
  this.f_previousPageButton__org_patternfly_component_Pagination_;
  /**@type {HTMLElement} @nodts*/
  this.f_navPageSelect__org_patternfly_component_Pagination_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_gotoPageInput__org_patternfly_component_Pagination_;
  /**@type {HTMLElement} @nodts*/
  this.f_pagesElement__org_patternfly_component_Pagination_;
  /**@type {Button} @nodts*/
  this.f_nextPageButton__org_patternfly_component_Pagination_;
  /**@type {Button} @nodts*/
  this.f_lastPageButton__org_patternfly_component_Pagination_;
  /**@type {Consumer<Integer>} @nodts*/
  this.f_pageSizeHandler__org_patternfly_component_Pagination_;
  /**@type {Consumer<Integer>} @nodts*/
  this.f_gotoPageHandler__org_patternfly_component_Pagination_;
  /**@type {Callback} @nodts*/
  this.f_firstPageHandler__org_patternfly_component_Pagination_;
  /**@type {Callback} @nodts*/
  this.f_previousPageHandler__org_patternfly_component_Pagination_;
  /**@type {Callback} @nodts*/
  this.f_nextPageHandler__org_patternfly_component_Pagination_;
  /**@type {Callback} @nodts*/
  this.f_lastPageHandler__org_patternfly_component_Pagination_;
 }
 /** @nodts @return {Pagination} */
 static m_pagination__org_patternfly_component_Pagination() {
  Pagination.$clinit();
  return Pagination.$create__();
 }
 /** @nodts @return {!Pagination} */
 static $create__() {
  Pagination.$clinit();
  let $instance = new Pagination();
  $instance.$ctor__org_patternfly_component_Pagination__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Pagination__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_pagination__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Pagination');
  this.f_infoElement__org_patternfly_component_Pagination_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_pagination__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_totalItems__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  this.f_pageSizeMenu__org_patternfly_component_Pagination_ = /**@type {SingleOptionsMenu<Integer>}*/ (SingleOptionsMenu.m_plain__java_lang_String__org_patternfly_component_SingleOptionsMenu('')).m_collapseOnSelect__org_patternfly_component_SingleOptionsMenu().m_display__java_util_function_BiConsumer__org_patternfly_component_SingleOptionsMenu(BiConsumer.$adapt((html, pageSize) =>{
   let html_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(html, HTMLContainerBuilder));
   let pageSize_1 = /**@type {Integer}*/ ($Casts.$to(pageSize, Integer));
   html_1.m_add__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String(pageSize_1));
   html_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_pagination__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('per page'), HTMLContainerBuilder)));
  })).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int__java_lang_Integer(10), Integer.m_valueOf__int__java_lang_Integer(20), Integer.m_valueOf__int__java_lang_Integer(50), Integer.m_valueOf__int__java_lang_Integer(100)], Integer))).m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_SingleOptionsMenu(SelectHandler.$adapt((pageSize_2) =>{
   let pageSize_3 = /**@type {Integer}*/ ($Casts.$to(pageSize_2, Integer));
   if (!$Equality.$same(this.f_pageSizeHandler__org_patternfly_component_Pagination_, null)) {
    this.f_pageSizeHandler__org_patternfly_component_Pagination_.m_accept__java_lang_Object__void(pageSize_3);
   }
  }));
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(this.f_infoElement__org_patternfly_component_Pagination_);
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_pageSizeMenu__org_patternfly_component_Pagination_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_pagination__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['nav'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_firstPageButton__org_patternfly_component_Pagination_ = Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_angleDoubleLeft__org_patternfly_layout_PredefinedIcon, 'Go to first page').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   if (!$Equality.$same(this.f_firstPageHandler__org_patternfly_component_Pagination_, null)) {
    this.f_firstPageHandler__org_patternfly_component_Pagination_.m_call__void();
   }
  }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_previousPageButton__org_patternfly_component_Pagination_ = Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_angleLeft__org_patternfly_layout_PredefinedIcon, 'Go to previous page').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_1, b_2) =>{
   let b_3 = /**@type {Button}*/ ($Casts.$to(b_2, Button));
   if (!$Equality.$same(this.f_previousPageHandler__org_patternfly_component_Pagination_, null)) {
    this.f_previousPageHandler__org_patternfly_component_Pagination_.m_call__void();
   }
  }))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_navPageSelect__org_patternfly_component_Pagination_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_pagination__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['nav', 'page', Classes.f_select__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_gotoPageInput__org_patternfly_component_Pagination_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_number__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), InputElementBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', 'Current page'), InputElementBuilder)).m_min__int__org_jboss_elemento_TypedBuilder(1), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_change__org_jboss_elemento_EventType, (/** Event */ e_2) =>{
   if (!$Equality.$same(this.f_gotoPageHandler__org_patternfly_component_Pagination_, null)) {
    try {
     let page = Integer.m_parseInt__java_lang_String__int(/**@type {HTMLInputElement}*/ ($Casts.$to(e_2.currentTarget, HTMLInputElement_$Overlay)).value);
     this.f_gotoPageHandler__org_patternfly_component_Pagination_.m_accept__java_lang_Object__void(Integer.m_valueOf__int__java_lang_Integer(page - 1 | 0));
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     if (NumberFormatException.$isInstance(__$exc)) {} else {
      throw $Exceptions.toJs(__$exc);
     }
    }
   }
  }), InputElementBuilder)).m_element__elemental2_dom_HTMLInputElement()), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_pagesElement__org_patternfly_component_Pagination_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_nextPageButton__org_patternfly_component_Pagination_ = Button.m_button__java_lang_String__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_angleRight__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, 'Go to next page').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_3, b_4) =>{
   let b_5 = /**@type {Button}*/ ($Casts.$to(b_4, Button));
   if (!$Equality.$same(this.f_nextPageHandler__org_patternfly_component_Pagination_, null)) {
    this.f_nextPageHandler__org_patternfly_component_Pagination_.m_call__void();
   }
  }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_lastPageButton__org_patternfly_component_Pagination_ = Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_angleDoubleRight__org_patternfly_layout_PredefinedIcon, 'Go to last page').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_4, b_6) =>{
   let b_7 = /**@type {Button}*/ ($Casts.$to(b_6, Button));
   if (!$Equality.$same(this.f_lastPageHandler__org_patternfly_component_Pagination_, null)) {
    this.f_lastPageHandler__org_patternfly_component_Pagination_.m_call__void();
   }
  }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {Pagination} */
 m_that__org_patternfly_component_Pagination() {
  return this;
 }
 /** @nodts @return {Pagination} */
 m_disabled__boolean__org_patternfly_component_Pagination(/** boolean */ disabled) {
  this.f_pageSizeMenu__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_SingleOptionsMenu(disabled);
  this.f_firstPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  this.f_previousPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  this.f_gotoPageInput__org_patternfly_component_Pagination_.disabled = disabled;
  this.f_nextPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  this.f_lastPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(disabled);
  return this;
 }
 /** @nodts @return {Pagination} */
 m_compact__org_patternfly_component_Pagination() {
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_firstPageButton__org_patternfly_component_Pagination_.m_element__elemental2_dom_HTMLElement(), false);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_navPageSelect__org_patternfly_component_Pagination_, false);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_lastPageButton__org_patternfly_component_Pagination_.m_element__elemental2_dom_HTMLElement(), false);
  return /**@type {Pagination}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_compact__org_patternfly_layout_Classes)], j_l_String))), Pagination));
 }
 /** @nodts @return {Pagination} */
 m_onPageSize__java_util_function_Consumer__org_patternfly_component_Pagination(/** Consumer<Integer> */ pageSizeHandler) {
  this.f_pageSizeHandler__org_patternfly_component_Pagination_ = pageSizeHandler;
  return this;
 }
 /** @nodts @return {Pagination} */
 m_onGotoPage__java_util_function_Consumer__org_patternfly_component_Pagination(/** Consumer<Integer> */ gotoPageHandler) {
  this.f_gotoPageHandler__org_patternfly_component_Pagination_ = gotoPageHandler;
  return this;
 }
 /** @nodts @return {Pagination} */
 m_onFirstPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(/** Callback */ firstPageHandler) {
  this.f_firstPageHandler__org_patternfly_component_Pagination_ = firstPageHandler;
  return this;
 }
 /** @nodts @return {Pagination} */
 m_onPreviousPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(/** Callback */ previousPageHandler) {
  this.f_previousPageHandler__org_patternfly_component_Pagination_ = previousPageHandler;
  return this;
 }
 /** @nodts @return {Pagination} */
 m_onNextPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(/** Callback */ nextPageHandler) {
  this.f_nextPageHandler__org_patternfly_component_Pagination_ = nextPageHandler;
  return this;
 }
 /** @nodts @return {Pagination} */
 m_onLastPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(/** Callback */ lastPageHandler) {
  this.f_lastPageHandler__org_patternfly_component_Pagination_ = lastPageHandler;
  return this;
 }
 /** @nodts */
 m_update__org_patternfly_dataprovider_PageInfo__void_$pp_org_patternfly_component(/** PageInfo */ pageInfo) {
  let elements = [this.f_infoElement__org_patternfly_component_Pagination_, this.f_pageSizeMenu__org_patternfly_component_Pagination_.m_textElement__elemental2_dom_HTMLElement_$pp_org_patternfly_component()];
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    Elements.m_removeChildrenFrom__elemental2_dom_Element__void(element);
    let builder = /**@type {!HTMLContainerBuilder<HTMLElement>}*/ (HTMLContainerBuilder.$create__elemental2_dom_HTMLElement(element));
    /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(builder.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_b__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(pageInfo.m_getFrom__int() + ' - ' + pageInfo.m_getTo__int()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' of '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_b__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(pageInfo.m_getTotal__int())), HTMLContainerBuilder)));
   }
  }
  this.f_pageSizeMenu__org_patternfly_component_Pagination_.m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu(Integer.m_valueOf__int__java_lang_Integer(pageInfo.m_getPageSize__int()));
  this.f_gotoPageInput__org_patternfly_component_Pagination_.value = j_l_String.m_valueOf__int__java_lang_String(pageInfo.m_getPage__int() + 1 | 0);
  this.f_gotoPageInput__org_patternfly_component_Pagination_.max = j_l_String.m_valueOf__int__java_lang_String(pageInfo.m_getPages__int());
  this.f_gotoPageInput__org_patternfly_component_Pagination_.disabled = pageInfo.m_getPages__int() < 2;
  this.f_pagesElement__org_patternfly_component_Pagination_.textContent = 'of ' + pageInfo.m_getPages__int();
  this.f_firstPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(pageInfo.m_getPage__int() == 0);
  this.f_previousPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(pageInfo.m_getPage__int() == 0);
  this.f_nextPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(pageInfo.m_getPage__int() == (pageInfo.m_getPages__int() - 1 | 0));
  this.f_lastPageButton__org_patternfly_component_Pagination_.m_disabled__boolean__org_patternfly_component_button_Button(pageInfo.m_getPage__int() == (pageInfo.m_getPages__int() - 1 | 0));
 }
 //Bridge method.
 /** @final @override @nodts @return {Pagination} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Pagination();
 }
 //Bridge method.
 /** @final @override @nodts @return {Pagination} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Pagination}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Pagination));
 }
 //Bridge method.
 /** @final @override @nodts @return {Pagination} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_Pagination(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Pagination} */
 m_disabled__org_patternfly_component_Pagination() {
  return /**@type {Pagination}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Pagination));
 }
 /** @nodts */
 static $clinit() {
  Pagination.$clinit = () =>{};
  Pagination.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Pagination;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  SingleOptionsMenu = goog.module.get('org.patternfly.component.SingleOptionsMenu$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Disabled.$markImplementor(Pagination);
$Util.$setClassMetadata(Pagination, 'org.patternfly.component.Pagination');

exports = Pagination;

//# sourceMappingURL=Pagination.js.map

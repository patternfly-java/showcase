goog.module('org.patternfly.component.ContextSelector$impl');

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
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let CollapseExpand = goog.forwardDeclare('org.patternfly.component.CollapseExpand$impl');
let OldItemDisplay = goog.forwardDeclare('org.patternfly.component.OldItemDisplay$impl');
let Search = goog.forwardDeclare('org.patternfly.component.Search$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLDivElement, ContextSelector<T>>}
 * @implements {Disabled<HTMLDivElement, ContextSelector<T>>}
 * @implements {HasValue<T>}
 * @deprecated
 */
class ContextSelector extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CollapseExpand} @nodts*/
  this.f_ceh__org_patternfly_component_ContextSelector_;
  /**@type {OldItemDisplay<HTMLButtonElement, T>} @nodts*/
  this.f_itemDisplay__org_patternfly_component_ContextSelector_;
  /**@type {HTMLElement} @nodts*/
  this.f_text__org_patternfly_component_ContextSelector_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_button__org_patternfly_component_ContextSelector_;
  /**@type {Search} @nodts*/
  this.f_search__org_patternfly_component_ContextSelector_;
  /**@type {HTMLElement} @nodts*/
  this.f_menu__org_patternfly_component_ContextSelector_;
  /**@type {HTMLElement} @nodts*/
  this.f_ul__org_patternfly_component_ContextSelector_;
  /**@type {T} @nodts*/
  this.f_value__org_patternfly_component_ContextSelector_;
  /**@type {SelectHandler<T>} @nodts*/
  this.f_onSelect__org_patternfly_component_ContextSelector_;
 }
 /** @nodts @template T_1 @return {ContextSelector<T_1>} */
 static m_contextSelector__java_lang_String__org_patternfly_component_ContextSelector(/** ?string */ text) {
  ContextSelector.$clinit();
  return /**@type {!ContextSelector<T_1>}*/ (ContextSelector.$create__java_lang_String(text));
 }
 /** @nodts @template T @return {!ContextSelector<T>} */
 static $create__java_lang_String(/** ?string */ text) {
  ContextSelector.$clinit();
  let $instance = new ContextSelector();
  $instance.$ctor__org_patternfly_component_ContextSelector__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ContextSelector__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'ContextSelector');
  this.f_ceh__org_patternfly_component_ContextSelector_ = CollapseExpand.$create__();
  this.f_itemDisplay__org_patternfly_component_ContextSelector_ = /**@type {!OldItemDisplay<HTMLButtonElement, T>}*/ (OldItemDisplay.$create__());
  let labelId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['label'], j_l_String)));
  let buttonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(labelId), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_ContextSelector_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, j_l_String.m_valueOf__java_lang_Object__java_lang_String(labelId) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(buttonId)), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_ContextSelector_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_ContextSelector(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_ContextSelector());
  }), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_text__org_patternfly_component_ContextSelector_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Please select'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_ContextSelector_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, ''), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_input__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_search__org_patternfly_component_ContextSelector_ = Search.$create__java_lang_String('Search').m_onFilter__java_util_function_Consumer__org_patternfly_component_Search(Consumer.$adapt((arg0) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   this.m_filter__java_lang_String__void_$p_org_patternfly_component_ContextSelector(arg0_1);
  }))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_ul__org_patternfly_component_ContextSelector_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_list__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_menu__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {ContextSelector<T>} */
 m_that__org_patternfly_component_ContextSelector() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_ContextSelector() {
  return this.f_button__org_patternfly_component_ContextSelector_;
 }
 /** @nodts @return {HTMLElement} */
 m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_ContextSelector() {
  return this.f_menu__org_patternfly_component_ContextSelector_;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_add__java_lang_Iterable__org_patternfly_component_ContextSelector(/** Iterable<T> */ items) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.m_add__java_lang_Object__org_patternfly_component_ContextSelector(item);
   }
  }
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_add__arrayOf_java_lang_Object__org_patternfly_component_ContextSelector(/** Array<T> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.m_add__java_lang_Object__org_patternfly_component_ContextSelector(item);
   }
  }
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_add__java_lang_Object__org_patternfly_component_ContextSelector(/** T */ item) {
  let button = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_list__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_contextSelectorItem__org_patternfly_core_Dataset, this.f_itemDisplay__org_patternfly_component_ContextSelector_.m_itemId__java_lang_Object__java_lang_String(item)), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_ContextSelector_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_ContextSelector(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_ContextSelector());
   this.m_select__java_lang_Object__org_patternfly_component_ContextSelector(item);
  }), HTMLContainerBuilder));
  this.f_itemDisplay__org_patternfly_component_ContextSelector_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(button, item);
  this.f_ul__org_patternfly_component_ContextSelector_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_none__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_identifier__java_util_function_Function__org_patternfly_component_ContextSelector(/** j_u_function_Function<T, ?string> */ identifier) {
  this.f_itemDisplay__org_patternfly_component_ContextSelector_.f_identifier__org_patternfly_component_OldItemDisplay = identifier;
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_asString__java_util_function_Function__org_patternfly_component_ContextSelector(/** j_u_function_Function<T, ?string> */ asString) {
  this.f_itemDisplay__org_patternfly_component_ContextSelector_.f_asString__org_patternfly_component_OldItemDisplay = asString;
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_display__java_util_function_BiConsumer__org_patternfly_component_ContextSelector(/** BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> */ display) {
  this.f_itemDisplay__org_patternfly_component_ContextSelector_.f_display__org_patternfly_component_OldItemDisplay = display;
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_select__java_lang_Object__org_patternfly_component_ContextSelector(/** T */ item) {
  return this.m_select__java_lang_Object__boolean__org_patternfly_component_ContextSelector(item, true);
 }
 /** @nodts @return {ContextSelector<T>} */
 m_select__java_lang_Object__boolean__org_patternfly_component_ContextSelector(/** T */ item, /** boolean */ fireOnSelect) {
  this.f_value__org_patternfly_component_ContextSelector_ = item;
  this.f_text__org_patternfly_component_ContextSelector_.textContent = /**@type {?string}*/ ($Casts.$to(this.f_itemDisplay__org_patternfly_component_ContextSelector_.f_asString__org_patternfly_component_OldItemDisplay.m_apply__java_lang_Object__java_lang_Object(item), j_l_String));
  if (fireOnSelect && !$Equality.$same(this.f_onSelect__org_patternfly_component_ContextSelector_, null)) {
   this.f_onSelect__org_patternfly_component_ContextSelector_.m_onSelect__java_lang_Object__void(this.f_value__org_patternfly_component_ContextSelector_);
  }
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_disabled__boolean__org_patternfly_component_ContextSelector(/** boolean */ disabled) {
  this.f_button__org_patternfly_component_ContextSelector_.disabled = disabled;
  return this;
 }
 /** @override @nodts @return {T} */
 m_value__java_lang_Object() {
  return this.f_value__org_patternfly_component_ContextSelector_;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_onToggle__java_util_function_Consumer__org_patternfly_component_ContextSelector(/** Consumer<?boolean> */ onToggle) {
  this.f_ceh__org_patternfly_component_ContextSelector_.f_onToggle__org_patternfly_component_CollapseExpand = onToggle;
  return this;
 }
 /** @nodts @return {ContextSelector<T>} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_ContextSelector(/** SelectHandler<T> */ onSelect) {
  this.f_onSelect__org_patternfly_component_ContextSelector_ = onSelect;
  return this;
 }
 /** @nodts */
 m_filter__java_lang_String__void_$p_org_patternfly_component_ContextSelector(/** ?string */ value) {
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_menu__org_patternfly_component_ContextSelector_, By.m_element__java_lang_String__org_jboss_elemento_By('button').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_list__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let parent = /**@type {HTMLElement}*/ ($Casts.$to(e.parentNode, HTMLElement_$Overlay));
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(parent, j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(e.textContent), j_l_String.m_toLowerCase__java_lang_String__java_lang_String(value)));
   }
  }
 }
 /** @nodts */
 m_clearFilter__void_$p_org_patternfly_component_ContextSelector() {
  this.f_search__org_patternfly_component_ContextSelector_.m_clear__void();
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_menu__org_patternfly_component_ContextSelector_, By.m_element__java_lang_String__org_jboss_elemento_By('button').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_contextSelector__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_list__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let parent = /**@type {HTMLElement}*/ ($Casts.$to(e.parentNode, HTMLElement_$Overlay));
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(parent, true);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {ContextSelector<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_ContextSelector();
 }
 //Bridge method.
 /** @final @override @nodts @return {ContextSelector<T>} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {ContextSelector<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ContextSelector));
 }
 //Bridge method.
 /** @final @override @nodts @return {ContextSelector<T>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_ContextSelector(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ContextSelector<T>} */
 m_disabled__org_patternfly_component_ContextSelector() {
  return /**@type {ContextSelector<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ContextSelector));
 }
 /** @nodts */
 static $clinit() {
  ContextSelector.$clinit = () =>{};
  ContextSelector.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ContextSelector;
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
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  CollapseExpand = goog.module.get('org.patternfly.component.CollapseExpand$impl');
  OldItemDisplay = goog.module.get('org.patternfly.component.OldItemDisplay$impl');
  Search = goog.module.get('org.patternfly.component.Search$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(ContextSelector);
HasValue.$markImplementor(ContextSelector);
$Util.$setClassMetadata(ContextSelector, 'org.patternfly.component.ContextSelector');

exports = ContextSelector;

//# sourceMappingURL=ContextSelector.js.map

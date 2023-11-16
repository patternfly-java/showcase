goog.module('org.patternfly.component.Tabs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let TabContent = goog.forwardDeclare('org.patternfly.component.Tabs.TabContent$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Tabs>}
 * @deprecated
 */
class Tabs extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLButtonElement} @nodts*/
  this.f_scrollLeft__org_patternfly_component_Tabs_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_scrollRight__org_patternfly_component_Tabs_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_tabs__org_patternfly_component_Tabs_;
  /**@type {SelectHandler<TabContent>} @nodts*/
  this.f_onSelect__org_patternfly_component_Tabs_;
 }
 /** @nodts @return {Tabs} */
 static m_tabs__org_patternfly_component_Tabs() {
  Tabs.$clinit();
  return Tabs.$create__();
 }
 /** @nodts @return {!Tabs} */
 static $create__() {
  Tabs.$clinit();
  let $instance = new Tabs();
  $instance.$ctor__org_patternfly_component_Tabs__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Tabs__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Tabs');
  this.f_scrollLeft__org_patternfly_component_Tabs_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('tabs', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scrollButton__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', 'Scroll left'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.f_angleLeft__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
  this.f_scrollRight__org_patternfly_component_Tabs_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('tabs', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scrollButton__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', 'Scroll right'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.f_angleRight__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
  this.f_tabs__org_patternfly_component_Tabs_ = /**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('tabs', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('tabs', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_scrollLeft__org_patternfly_component_Tabs_), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_tabs__org_patternfly_component_Tabs_), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_scrollRight__org_patternfly_component_Tabs_), HTMLContainerBuilder)));
 }
 /** @nodts @return {Tabs} */
 m_that__org_patternfly_component_Tabs() {
  return this;
 }
 /** @nodts @template E @return {Tabs} */
 m_add__java_lang_String__org_jboss_elemento_IsElement__org_patternfly_component_Tabs(/** ?string */ title, /** IsElement<E> */ panel) {
  return this.m_add__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(title, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), title, /**@type {HTMLElement}*/ ($Casts.$to(panel.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)));
 }
 /** @nodts @return {Tabs} */
 m_add__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(/** ?string */ title, /** HTMLElement */ panel) {
  return this.m_add__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(title, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), title, panel);
 }
 /** @nodts @template E @return {Tabs} */
 m_add__java_lang_String__java_lang_String__org_jboss_elemento_IsElement__org_patternfly_component_Tabs(/** ?string */ id, /** ?string */ title, /** IsElement<E> */ panel) {
  return this.m_add__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(id, title, /**@type {HTMLElement}*/ ($Casts.$to(panel.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)));
 }
 /** @nodts @return {Tabs} */
 m_add__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(/** ?string */ id, /** ?string */ title, /** HTMLElement */ panel) {
  return this.m_add__java_lang_String__java_util_function_Consumer__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(id, Consumer.$adapt((tabDisplay) =>{
   let tabDisplay_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(tabDisplay, HTMLContainerBuilder));
   tabDisplay_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(title);
  }), panel);
 }
 /** @nodts @template E @return {Tabs} */
 m_add__java_lang_String__java_util_function_Consumer__org_jboss_elemento_IsElement__org_patternfly_component_Tabs(/** ?string */ id, /** Consumer<HTMLContainerBuilder<HTMLButtonElement>> */ display, /** IsElement<E> */ panel) {
  return this.m_add__java_lang_String__java_util_function_Consumer__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(id, display, /**@type {HTMLElement}*/ ($Casts.$to(panel.m_element__elemental2_dom_Element(), HTMLElement_$Overlay)));
 }
 /** @nodts @return {Tabs} */
 m_add__java_lang_String__java_util_function_Consumer__elemental2_dom_HTMLElement__org_patternfly_component_Tabs(/** ?string */ id, /** Consumer<HTMLContainerBuilder<HTMLButtonElement>> */ tabDisplay, /** HTMLElement */ panel) {
  return this.m_add__java_lang_String__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_component_Tabs(id, tabDisplay, Consumer.$adapt((panelDisplay) =>{
   let panelDisplay_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(panelDisplay, HTMLContainerBuilder));
   panelDisplay_1.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(panel);
  }));
 }
 /** @nodts @return {Tabs} */
 m_add__java_lang_String__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_component_Tabs(/** ?string */ id, /** Consumer<HTMLContainerBuilder<HTMLButtonElement>> */ tabDisplay, /** Consumer<HTMLContainerBuilder<HTMLElement>> */ panelDisplay) {
  let tabId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tab__org_patternfly_layout_Classes], j_l_String)));
  let contentId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_layout_Classes], j_l_String)));
  let tab = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('tabs', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(tabId), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_controls__org_patternfly_layout_Classes, contentId), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_select__java_lang_String__org_patternfly_component_Tabs(id);
  }), HTMLContainerBuilder));
  tabDisplay.m_accept__java_lang_Object__void(tab);
  this.f_tabs__org_patternfly_component_Tabs_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('tabs', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tab), HTMLContainerBuilder)));
  let panel = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabContent__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(contentId), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, tabId), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_tabpanel__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('tabindex', 0), HTMLContainerBuilder));
  panelDisplay.m_accept__java_lang_Object__void(panel);
  panel.m_element__elemental2_dom_HTMLElement().hidden = true;
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(panel);
  if (/**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).childElementCount == 1) {
   this.m_select__java_lang_String__boolean__org_patternfly_component_Tabs(id, false);
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_select__java_lang_String__org_patternfly_component_Tabs(/** ?string */ id) {
  return this.m_select__java_lang_String__boolean__org_patternfly_component_Tabs(id, true);
 }
 /** @nodts @return {Tabs} */
 m_select__java_lang_String__boolean__org_patternfly_component_Tabs(/** ?string */ id, /** boolean */ fireEvent) {
  let tabId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tab__org_patternfly_layout_Classes], j_l_String)));
  let contentId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_layout_Classes], j_l_String)));
  let button = /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_Tabs_.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_id__java_lang_String__org_jboss_elemento_By(tabId)), $Overlay));
  let content = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_id__java_lang_String__org_jboss_elemento_By(contentId));
  if (!$Equality.$same(button, null) && !$Equality.$same(content, null)) {
   for (let $iterator = Elements.m_children__org_jboss_elemento_IsElement__java_lang_Iterable(this.f_tabs__org_patternfly_component_Tabs_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let li = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
    {
     Elements.m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean__void(li, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_layout_Classes), j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(tabId, li.firstElementChild.id));
    }
   }
   for (let $iterator_1 = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(By.m_element__java_lang_String__org_jboss_elemento_By('section').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_selector__java_lang_String__org_jboss_elemento_By('.' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabContent__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))))))).m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
    let section = /**@type {HTMLElement}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), HTMLElement_$Overlay));
    {
     section.hidden = !j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(contentId, section.id);
    }
   }
   if (fireEvent && !$Equality.$same(this.f_onSelect__org_patternfly_component_Tabs_, null)) {
    let tabContent = TabContent.$create__elemental2_dom_HTMLButtonElement__elemental2_dom_HTMLElement(button, content);
    this.f_onSelect__org_patternfly_component_Tabs_.m_onSelect__java_lang_Object__void(tabContent);
   }
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_Tabs(/** SelectHandler<TabContent> */ onSelect) {
  this.f_onSelect__org_patternfly_component_Tabs_ = onSelect;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_fill__org_patternfly_component_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('fill')], j_l_String))), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_ariaScrollLeftLabel__java_lang_String__org_patternfly_component_Tabs(/** ?string */ label) {
  Elements.m_button__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(this.f_scrollLeft__org_patternfly_component_Tabs_).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaScrollRightLabel__java_lang_String__org_patternfly_component_Tabs(/** ?string */ label) {
  Elements.m_button__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(this.f_scrollRight__org_patternfly_component_Tabs_).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Tabs();
 }
 /** @nodts */
 static $clinit() {
  Tabs.$clinit = () =>{};
  Tabs.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tabs;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
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
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  TabContent = goog.module.get('org.patternfly.component.Tabs.TabContent$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Tabs.f_ARIA_SCROLL_LEFT__org_patternfly_component_Tabs = 'ARIA_SCROLL_LEFT';
/**@const {string} @nodts*/
Tabs.f_ARIA_SCROLL_RIGHT__org_patternfly_component_Tabs = 'ARIA_SCROLL_RIGHT';
$Util.$setClassMetadata(Tabs, 'org.patternfly.component.Tabs');

exports = Tabs;

//# sourceMappingURL=Tabs.js.map

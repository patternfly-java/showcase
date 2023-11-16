goog.module('org.patternfly.component.navigation.NavigationItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLLIElement, NavigationItem>}
 */
class NavigationItem extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_navigation_NavigationItem;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_a__org_patternfly_component_navigation_NavigationItem;
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ id, /** ?string */ title) {
  NavigationItem.$clinit();
  return NavigationItem.$create__java_lang_String__java_lang_String__java_lang_String(id, title, null);
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ id, /** ?string */ title, /** ?string */ href) {
  NavigationItem.$clinit();
  return NavigationItem.$create__java_lang_String__java_lang_String__java_lang_String(id, title, href);
 }
 /** @nodts @return {!NavigationItem} */
 static $create__java_lang_String__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ text, /** ?string */ href) {
  NavigationItem.$clinit();
  let $instance = new NavigationItem();
  $instance.$ctor__org_patternfly_component_navigation_NavigationItem__java_lang_String__java_lang_String__java_lang_String__void(id, text, href);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationItem__java_lang_String__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ text, /** ?string */ href) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_id__org_patternfly_component_navigation_NavigationItem = id;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_a__org_patternfly_component_navigation_NavigationItem = /**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_navigationItem__org_patternfly_core_Dataset, id), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(href, null)) {
   this.f_a__org_patternfly_component_navigation_NavigationItem.href = href;
  }
 }
 /** @nodts @return {NavigationItem} */
 m_that__org_patternfly_component_navigation_NavigationItem() {
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_navigation_NavigationItem(/** ComponentHandler<NavigationItem> */ handler) {
  Elements.m_a__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(this.f_a__org_patternfly_component_navigation_NavigationItem).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  });
  return this;
 }
 /** @nodts */
 m_select__void_$pp_org_patternfly_component_navigation() {
  this.f_a__org_patternfly_component_navigation_NavigationItem.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_layout_Classes));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_a__org_patternfly_component_navigation_NavigationItem, Aria.f_current__org_patternfly_core_Aria, 'page');
  Element_$Overlay.m_scrollIntoView__$devirt__elemental2_dom_Element__boolean__void(this.f_a__org_patternfly_component_navigation_NavigationItem, false);
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_NavigationItem();
 }
 /** @nodts */
 static $clinit() {
  NavigationItem.$clinit = () =>{};
  NavigationItem.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NavigationItem;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NavigationItem, 'org.patternfly.component.navigation.NavigationItem');

exports = NavigationItem;

//# sourceMappingURL=NavigationItem.js.map

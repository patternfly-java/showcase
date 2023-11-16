goog.module('org.patternfly.component.navigation.NavigationGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLElement, NavigationGroup>}
 */
class NavigationGroup extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_navigation_NavigationGroup;
  /**@type {Map<?string, NavigationItem>} @nodts*/
  this.f_items__org_patternfly_component_navigation_NavigationGroup_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_ul__org_patternfly_component_navigation_NavigationGroup_;
 }
 /** @nodts @return {NavigationGroup} */
 static m_navigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** ?string */ id, /** ?string */ text) {
  NavigationGroup.$clinit();
  return NavigationGroup.$create__java_lang_String__java_lang_String(id, text);
 }
 /** @nodts @return {!NavigationGroup} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ text) {
  NavigationGroup.$clinit();
  let $instance = new NavigationGroup();
  $instance.$ctor__org_patternfly_component_navigation_NavigationGroup__java_lang_String__java_lang_String__void(id, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationGroup__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ text) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_navigationGroup__org_patternfly_core_Dataset, id), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_id__org_patternfly_component_navigation_NavigationGroup = id;
  this.f_items__org_patternfly_component_navigation_NavigationGroup_ = /**@type {!HashMap<?string, NavigationItem>}*/ (HashMap.$create__());
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(2, text).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_layout_Classes, Classes.f_title__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_ul__org_patternfly_component_navigation_NavigationGroup_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @template T @return {NavigationGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_NavigationGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, NavigationItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let navigationItem = /**@type {NavigationItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), NavigationItem));
    this.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(navigationItem);
   }
  }
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(/** NavigationItem */ item) {
  this.f_items__org_patternfly_component_navigation_NavigationGroup_.put(item.f_id__org_patternfly_component_navigation_NavigationItem, item);
  this.f_ul__org_patternfly_component_navigation_NavigationGroup_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_addDivider__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_NavigationGroup(/** Divider */ divider) {
  this.f_ul__org_patternfly_component_navigation_NavigationGroup_.appendChild(divider.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_that__org_patternfly_component_navigation_NavigationGroup() {
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(/** ?string */ id) {
  return /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_NavigationGroup_.get(id), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_NavigationGroup();
 }
 /** @nodts */
 static $clinit() {
  NavigationGroup.$clinit = () =>{};
  NavigationGroup.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NavigationGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NavigationGroup, 'org.patternfly.component.navigation.NavigationGroup');

exports = NavigationGroup;

//# sourceMappingURL=NavigationGroup.js.map

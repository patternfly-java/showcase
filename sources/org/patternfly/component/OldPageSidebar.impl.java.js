goog.module('org.patternfly.component.OldPageSidebar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Theme = goog.forwardDeclare('org.patternfly.layout.Theme$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, OldPageSidebar>}
 * @deprecated
 */
class OldPageSidebar extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Theme} @nodts*/
  this.f_theme__org_patternfly_component_OldPageSidebar_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_body__org_patternfly_component_OldPageSidebar_;
  /**@type {Navigation} @nodts*/
  this.f_navigation__org_patternfly_component_OldPageSidebar_;
 }
 /** @nodts @return {!OldPageSidebar} */
 static $create__org_patternfly_layout_Theme(/** Theme */ theme) {
  OldPageSidebar.$clinit();
  let $instance = new OldPageSidebar();
  $instance.$ctor__org_patternfly_component_OldPageSidebar__org_patternfly_layout_Theme__void(theme);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldPageSidebar__org_patternfly_layout_Theme__void(/** Theme */ theme) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_aside__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init(['sidebar'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), 'PageSidebar');
  this.f_theme__org_patternfly_component_OldPageSidebar_ = theme;
  if ($Equality.$same(theme, Theme.f_dark__org_patternfly_layout_Theme)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('dark')], j_l_String)));
  }
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_body__org_patternfly_component_OldPageSidebar_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init(['sidebar', 'body'], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
 }
 /** @nodts @return {OldPageSidebar} */
 m_that__org_patternfly_component_OldPageSidebar() {
  return this;
 }
 /** @nodts @return {OldPageSidebar} */
 m_add__org_patternfly_component_navigation_Navigation__org_patternfly_component_OldPageSidebar(/** Navigation */ navigation) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_navigation__org_patternfly_component_OldPageSidebar_);
  this.f_navigation__org_patternfly_component_OldPageSidebar_ = navigation;
  if ($Equality.$same(this.f_theme__org_patternfly_component_OldPageSidebar_, Theme.f_dark__org_patternfly_layout_Theme)) {
   navigation.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('dark')], j_l_String)));
  }
  this.f_body__org_patternfly_component_OldPageSidebar_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(navigation);
  return this.m_that__org_patternfly_component_OldPageSidebar();
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLDivElement>} */
 m_getBody__org_jboss_elemento_HTMLContainerBuilder() {
  return this.f_body__org_patternfly_component_OldPageSidebar_;
 }
 /** @nodts @return {Navigation} */
 m_getNavigation__org_patternfly_component_navigation_Navigation() {
  return this.f_navigation__org_patternfly_component_OldPageSidebar_;
 }
 /** @nodts */
 m_toggle__void_$pp_org_patternfly_component() {
  if (this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String('collapsed'))) {
   this.m_expand__void_$pp_org_patternfly_component();
  } else if (this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String('expanded'))) {
   this.m_collapse__void_$pp_org_patternfly_component();
  }
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component() {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('collapsed'));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component() {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String('collapsed'));
 }
 //Bridge method.
 /** @final @override @nodts @return {OldPageSidebar} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_OldPageSidebar();
 }
 /** @nodts */
 static $clinit() {
  OldPageSidebar.$clinit = () =>{};
  OldPageSidebar.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OldPageSidebar;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  Theme = goog.module.get('org.patternfly.layout.Theme$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(OldPageSidebar, 'org.patternfly.component.OldPageSidebar');

exports = OldPageSidebar;

//# sourceMappingURL=OldPageSidebar.js.map

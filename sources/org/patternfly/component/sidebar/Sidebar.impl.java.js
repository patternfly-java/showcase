goog.module('org.patternfly.component.sidebar.Sidebar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SidebarBody = goog.forwardDeclare('org.patternfly.component.sidebar.SidebarBody$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Brightness = goog.forwardDeclare('org.patternfly.layout.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Sidebar>}
 */
class Sidebar extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Sidebar} */
 static m_sidebar__org_patternfly_component_sidebar_Sidebar() {
  Sidebar.$clinit();
  return Sidebar.$create__();
 }
 /** @nodts @return {!Sidebar} */
 static $create__() {
  Sidebar.$clinit();
  let $instance = new Sidebar();
  $instance.$ctor__org_patternfly_component_sidebar_Sidebar__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_sidebar_Sidebar__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_aside__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sidebar__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, false), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), ComponentType.f_Sidebar__org_patternfly_component_ComponentType);
 }
 /** @nodts @return {Sidebar} */
 m_addBody__org_patternfly_component_sidebar_SidebarBody__org_patternfly_component_sidebar_Sidebar(/** SidebarBody */ body) {
  return /**@type {Sidebar}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), Sidebar));
 }
 /** @nodts @return {Sidebar} */
 m_expanded__org_patternfly_component_sidebar_Sidebar() {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_collapsed__org_patternfly_layout_Classes));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_layout_Classes));
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, false);
  return this;
 }
 /** @nodts @return {Sidebar} */
 m_collapsed__org_patternfly_component_sidebar_Sidebar() {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_layout_Classes));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_collapsed__org_patternfly_layout_Classes));
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true);
  return this;
 }
 /** @nodts @return {Sidebar} */
 m_light__org_patternfly_component_sidebar_Sidebar() {
  return /**@type {Sidebar}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_layout_Brightness.f_modifier__org_patternfly_layout_Brightness], j_l_String))), Sidebar));
 }
 /** @nodts @return {Sidebar} */
 m_that__org_patternfly_component_sidebar_Sidebar() {
  return this;
 }
 /** @nodts */
 m_toggle__void() {
  if (this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_collapsed__org_patternfly_layout_Classes))) {
   this.m_expanded__org_patternfly_component_sidebar_Sidebar();
  } else if (this.m_element__elemental2_dom_HTMLElement().classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_layout_Classes))) {
   this.m_collapsed__org_patternfly_component_sidebar_Sidebar();
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Sidebar} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_sidebar_Sidebar();
 }
 /** @nodts */
 static $clinit() {
  Sidebar.$clinit = () =>{};
  Sidebar.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Sidebar;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Brightness = goog.module.get('org.patternfly.layout.Brightness$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Sidebar, 'org.patternfly.component.sidebar.Sidebar');

exports = Sidebar;

//# sourceMappingURL=Sidebar.js.map

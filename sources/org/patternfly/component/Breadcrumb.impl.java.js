goog.module('org.patternfly.component.Breadcrumb$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Breadcrumb>}
 * @deprecated
 */
class Breadcrumb extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Breadcrumb} */
 static m_breadcrumb__org_patternfly_component_Breadcrumb() {
  Breadcrumb.$clinit();
  return Breadcrumb.$create__();
 }
 /** @nodts @return {!Breadcrumb} */
 static $create__() {
  Breadcrumb.$clinit();
  let $instance = new Breadcrumb();
  $instance.$ctor__org_patternfly_component_Breadcrumb__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Breadcrumb__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('breadcrumb', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), ComponentType.f_Breadcrumb__org_patternfly_component_ComponentType);
 }
 /** @nodts @return {Breadcrumb} */
 m_that__org_patternfly_component_Breadcrumb() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Breadcrumb();
 }
 /** @nodts */
 static $clinit() {
  Breadcrumb.$clinit = () =>{};
  Breadcrumb.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Breadcrumb;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Breadcrumb, 'org.patternfly.component.Breadcrumb');

exports = Breadcrumb;

//# sourceMappingURL=Breadcrumb.js.map

goog.module('org.patternfly.component.brand.Brand$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLImageElement, Brand>}
 */
class Brand extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Brand} */
 static m_brand__java_lang_String__org_patternfly_component_brand_Brand(/** ?string */ src) {
  Brand.$clinit();
  return Brand.$create__java_lang_String(src);
 }
 /** @nodts @return {!Brand} */
 static $create__java_lang_String(/** ?string */ src) {
  Brand.$clinit();
  let $instance = new Brand();
  $instance.$ctor__org_patternfly_component_brand_Brand__java_lang_String__void(src);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_brand_Brand__java_lang_String__void(/** ?string */ src) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLImageElement}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(Elements.m_img__java_lang_String__org_jboss_elemento_HTMLElementBuilder(src).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_brand__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLElementBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), ComponentType.f_Brand__org_patternfly_component_ComponentType);
 }
 /** @nodts @return {Brand} */
 m_that__org_patternfly_component_brand_Brand() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Brand} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_brand_Brand();
 }
 /** @nodts */
 static $clinit() {
  Brand.$clinit = () =>{};
  Brand.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Brand;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Brand, 'org.patternfly.component.brand.Brand');

exports = Brand;

//# sourceMappingURL=Brand.js.map

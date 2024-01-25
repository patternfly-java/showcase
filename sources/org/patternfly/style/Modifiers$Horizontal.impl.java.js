goog.module('org.patternfly.style.Modifiers.Horizontal$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class Horizontal {
 /** @abstract @nodts @return {B} */
 m_horizontal__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_horizontal__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ horizontal) {}
 /** @nodts @template E, B @return {B} */
 static m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__org_jboss_elemento_TypedBuilder(/** !Horizontal<E, B> */ $thisArg) {
  Horizontal.$clinit();
  return $thisArg.m_horizontal__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_horizontal__$default__org_patternfly_style_Modifiers_Horizontal__boolean__org_jboss_elemento_TypedBuilder(/** !Horizontal<E, B> */ $thisArg, /** boolean */ horizontal) {
  Horizontal.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_horizontal__org_patternfly_style_Classes, horizontal);
 }
 /** @nodts */
 static $clinit() {
  Horizontal.$clinit = () =>{};
  Horizontal.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Horizontal = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Horizontal;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Horizontal.$markImplementor(/**@type {Function}*/ (Horizontal));
$Util.$setClassMetadataForInterface(Horizontal, 'org.patternfly.style.Modifiers$Horizontal');

exports = Horizontal;

//# sourceMappingURL=Modifiers$Horizontal.js.map

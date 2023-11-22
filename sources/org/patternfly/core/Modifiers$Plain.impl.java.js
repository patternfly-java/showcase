goog.module('org.patternfly.core.Modifiers.Plain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Modifiers = goog.forwardDeclare('org.patternfly.core.Modifiers$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class Plain {
 /** @abstract @nodts @return {B} */
 m_plain__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ plain) {}
 /** @nodts @template E, B @return {B} */
 static m_plain__$default__org_patternfly_core_Modifiers_Plain__org_jboss_elemento_TypedBuilder(/** !Plain<E, B> */ $thisArg) {
  Plain.$clinit();
  return $thisArg.m_plain__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_plain__$default__org_patternfly_core_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(/** !Plain<E, B> */ $thisArg, /** boolean */ plain) {
  Plain.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_plain__org_patternfly_layout_Classes, plain);
 }
 /** @nodts */
 static $clinit() {
  Plain.$clinit = () =>{};
  Plain.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_Modifiers_Plain = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Modifiers_Plain;
 }
 
 /** @nodts */
 static $loadModules() {
  Modifiers = goog.module.get('org.patternfly.core.Modifiers$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
 }
}
Plain.$markImplementor(/**@type {Function}*/ (Plain));
$Util.$setClassMetadataForInterface(Plain, 'org.patternfly.core.Modifiers$Plain');

exports = Plain;

//# sourceMappingURL=Modifiers$Plain.js.map

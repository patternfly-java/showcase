goog.module('org.patternfly.core.Modifiers.Readonly$impl');

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
class Readonly {
 /** @abstract @nodts @return {B} */
 m_readonly__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_readonly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ readonly) {}
 /** @nodts @template E, B @return {B} */
 static m_readonly__$default__org_patternfly_core_Modifiers_Readonly__org_jboss_elemento_TypedBuilder(/** !Readonly<E, B> */ $thisArg) {
  Readonly.$clinit();
  return $thisArg.m_readonly__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_readonly__$default__org_patternfly_core_Modifiers_Readonly__boolean__org_jboss_elemento_TypedBuilder(/** !Readonly<E, B> */ $thisArg, /** boolean */ readonly) {
  Readonly.$clinit();
  return Modifiers.m_changeModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_readonly__org_patternfly_layout_Classes, readonly);
 }
 /** @nodts */
 static $clinit() {
  Readonly.$clinit = () =>{};
  Readonly.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_Modifiers_Readonly = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Modifiers_Readonly;
 }
 
 /** @nodts */
 static $loadModules() {
  Modifiers = goog.module.get('org.patternfly.core.Modifiers$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
 }
}
Readonly.$markImplementor(/**@type {Function}*/ (Readonly));
$Util.$setClassMetadataForInterface(Readonly, 'org.patternfly.core.Modifiers$Readonly');

exports = Readonly;

//# sourceMappingURL=Modifiers$Readonly.js.map

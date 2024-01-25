goog.module('org.patternfly.style.Modifiers.Padding$impl');

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
class Padding {
 /** @abstract @nodts @return {B} */
 m_padding__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_padding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ padding) {}
 /** @nodts @template E, B @return {B} */
 static m_padding__$default__org_patternfly_style_Modifiers_Padding__org_jboss_elemento_TypedBuilder(/** !Padding<E, B> */ $thisArg) {
  Padding.$clinit();
  return $thisArg.m_padding__boolean__org_jboss_elemento_TypedBuilder(true);
 }
 /** @nodts @template E, B @return {B} */
 static m_padding__$default__org_patternfly_style_Modifiers_Padding__boolean__org_jboss_elemento_TypedBuilder(/** !Padding<E, B> */ $thisArg, /** boolean */ padding) {
  Padding.$clinit();
  return Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder($thisArg.m_that__org_jboss_elemento_TypedBuilder(), $thisArg.m_element__elemental2_dom_Element(), Classes.f_padding__org_patternfly_style_Classes, padding);
 }
 /** @nodts */
 static $clinit() {
  Padding.$clinit = () =>{};
  Padding.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_style_Modifiers_Padding = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Modifiers_Padding;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
 }
}
Padding.$markImplementor(/**@type {Function}*/ (Padding));
$Util.$setClassMetadataForInterface(Padding, 'org.patternfly.style.Modifiers$Padding');

exports = Padding;

//# sourceMappingURL=Modifiers$Padding.js.map

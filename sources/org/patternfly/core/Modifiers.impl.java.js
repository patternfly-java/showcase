goog.module('org.patternfly.core.Modifiers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');

/**
 * @interface
 */
class Modifiers {
 /** @nodts @template E, B @return {B} */
 static m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** B */ builder, /** E */ element, /** ?string */ modifier, /** boolean */ flag) {
  Modifiers.$clinit();
  if (flag) {
   /**@type {!Element}*/ (element).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(modifier));
  } else {
   /**@type {!Element}*/ (element).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(modifier));
  }
  return builder;
 }
 /** @nodts */
 static $clinit() {
  Modifiers.$clinit = () =>{};
  Modifiers.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Modifiers = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Modifiers;
 }
 
 /** @nodts */
 static $loadModules() {
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
 }
}
Modifiers.$markImplementor(/**@type {Function}*/ (Modifiers));
$Util.$setClassMetadataForInterface(Modifiers, 'org.patternfly.core.Modifiers');

exports = Modifiers;

//# sourceMappingURL=Modifiers.js.map

goog.module('org.patternfly.core.WithText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class WithText {
 /** @abstract @nodts @return {B} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @nodts */
 static $clinit() {
  WithText.$clinit = () =>{};
  WithText.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_WithText = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_WithText;
 }
 
 /** @nodts */
 static $loadModules() {}
}
WithText.$markImplementor(/**@type {Function}*/ (WithText));
$Util.$setClassMetadataForInterface(WithText, 'org.patternfly.core.WithText');

exports = WithText;

//# sourceMappingURL=WithText.js.map

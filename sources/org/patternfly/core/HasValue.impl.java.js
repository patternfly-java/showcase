goog.module('org.patternfly.core.HasValue$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.core.HasValue.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class HasValue {
 /** @abstract @nodts @return {T} */
 m_value__java_lang_Object() {}
 /** @nodts @template T @return {HasValue<T>} */
 static $adapt(/** ?function():T */ fn) {
  HasValue.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  HasValue.$clinit = () =>{};
  HasValue.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_HasValue = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_HasValue;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.core.HasValue.$LambdaAdaptor$impl');
 }
}
HasValue.$markImplementor(/**@type {Function}*/ (HasValue));
$Util.$setClassMetadataForInterface(HasValue, 'org.patternfly.core.HasValue');

exports = HasValue;

//# sourceMappingURL=HasValue.js.map

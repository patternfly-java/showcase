goog.module('org.patternfly.core.PatternFly$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Strategy = goog.forwardDeclare('org.patternfly.core.PatternFly.Strategy$impl');

/**
 * @interface
 */
class PatternFly {
 /** @nodts @return {Strategy} */
 static get f_STRATEGY__org_patternfly_core_PatternFly() {
  return (PatternFly.$clinit(), PatternFly.$static_STRATEGY__org_patternfly_core_PatternFly);
 }
 /** @nodts */
 static $clinit() {
  PatternFly.$clinit = () =>{};
  PatternFly.$loadModules();
  PatternFly.$static_STRATEGY__org_patternfly_core_PatternFly = Strategy.f_SHOW_HIDE__org_patternfly_core_PatternFly_Strategy;
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_PatternFly = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_PatternFly;
 }
 
 /** @nodts */
 static $loadModules() {
  Strategy = goog.module.get('org.patternfly.core.PatternFly.Strategy$impl');
 }
}
/**@private {Strategy} @nodts*/
PatternFly.$static_STRATEGY__org_patternfly_core_PatternFly;
/**@const {string} @nodts*/
PatternFly.f_VERSION__org_patternfly_core_PatternFly = 'v5';
PatternFly.$markImplementor(/**@type {Function}*/ (PatternFly));
$Util.$setClassMetadataForInterface(PatternFly, 'org.patternfly.core.PatternFly');

exports = PatternFly;

//# sourceMappingURL=PatternFly.js.map

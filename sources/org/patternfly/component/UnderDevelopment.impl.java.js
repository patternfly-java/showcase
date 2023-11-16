goog.module('org.patternfly.component.UnderDevelopment$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UnderDevelopment {
 /** @nodts */
 static $clinit() {
  UnderDevelopment.$clinit = () =>{};
  UnderDevelopment.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_UnderDevelopment = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_UnderDevelopment;
 }
 
 /** @nodts */
 static $loadModules() {}
}
UnderDevelopment.$markImplementor(/**@type {Function}*/ (UnderDevelopment));
$Util.$setClassMetadataForInterface(UnderDevelopment, 'org.patternfly.component.UnderDevelopment');

exports = UnderDevelopment;

//# sourceMappingURL=UnderDevelopment.js.map

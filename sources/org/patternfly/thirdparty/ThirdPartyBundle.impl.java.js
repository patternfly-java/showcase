goog.module('org.patternfly.thirdparty.ThirdPartyBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.treblereel.j2cl.processors.common.resources.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.thirdparty.ThirdPartyBundle.$LambdaAdaptor$impl');
let ThirdPartyBundleImpl = goog.forwardDeclare('org.patternfly.thirdparty.ThirdPartyBundleImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class ThirdPartyBundle {
 /** @abstract @nodts @return {TextResource} */
 m_popper__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @nodts @return {ThirdPartyBundle} */
 static $adapt(/** ?function():TextResource */ fn) {
  ThirdPartyBundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {ThirdPartyBundle} */
 static get f_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundle() {
  return (ThirdPartyBundle.$clinit(), ThirdPartyBundle.$static_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundle);
 }
 /** @nodts */
 static $clinit() {
  ThirdPartyBundle.$clinit = () =>{};
  ThirdPartyBundle.$loadModules();
  ThirdPartyBundle.$static_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundle = ThirdPartyBundleImpl.f_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundleImpl;
 }
 
 static $markImplementor(/** Function */ ctor) {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_thirdparty_ThirdPartyBundle = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_thirdparty_ThirdPartyBundle;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.thirdparty.ThirdPartyBundle.$LambdaAdaptor$impl');
  ThirdPartyBundleImpl = goog.module.get('org.patternfly.thirdparty.ThirdPartyBundleImpl$impl');
 }
}
/**@private {ThirdPartyBundle} @nodts*/
ThirdPartyBundle.$static_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundle;
ThirdPartyBundle.$markImplementor(/**@type {Function}*/ (ThirdPartyBundle));
$Util.$setClassMetadataForInterface(ThirdPartyBundle, 'org.patternfly.thirdparty.ThirdPartyBundle');

exports = ThirdPartyBundle;

//# sourceMappingURL=ThirdPartyBundle.js.map

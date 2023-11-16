goog.module('org.patternfly.thirdparty.ThirdPartyBundleImpl.popperInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ThirdPartyBundleImpl = goog.forwardDeclare('org.patternfly.thirdparty.ThirdPartyBundleImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

class popperInitializer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!popperInitializer} */
 static $create__() {
  let $instance = new popperInitializer();
  $instance.$ctor__org_patternfly_thirdparty_ThirdPartyBundleImpl_popperInitializer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_thirdparty_ThirdPartyBundleImpl_popperInitializer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {TextResource} */
 static m_get__org_treblereel_j2cl_processors_common_resources_TextResource() {
  popperInitializer.$clinit();
  return ThirdPartyBundleImpl.f_popper__org_patternfly_thirdparty_ThirdPartyBundleImpl_;
 }
 /** @nodts */
 static $clinit() {
  popperInitializer.$clinit = () =>{};
  popperInitializer.$loadModules();
  j_l_Object.$clinit();
  ThirdPartyBundleImpl.f_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundleImpl.m_popperInitializer__void_$p_org_patternfly_thirdparty_ThirdPartyBundleImpl();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof popperInitializer;
 }
 
 /** @nodts */
 static $loadModules() {
  ThirdPartyBundleImpl = goog.module.get('org.patternfly.thirdparty.ThirdPartyBundleImpl$impl');
 }
}
$Util.$setClassMetadata(popperInitializer, 'org.patternfly.thirdparty.ThirdPartyBundleImpl$popperInitializer');

exports = popperInitializer;

//# sourceMappingURL=ThirdPartyBundleImpl$popperInitializer.js.map

goog.module('org.patternfly.thirdparty.ThirdParty$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ThirdPartyBundle = goog.forwardDeclare('org.patternfly.thirdparty.ThirdPartyBundle$impl');
let ScriptInjector = goog.forwardDeclare('org.treblereel.j2cl.processors.common.injectors.ScriptInjector$impl');

/**
 * @final
 */
class ThirdParty extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 static m_injectAll__void() {
  ThirdParty.$clinit();
  ThirdParty.m_injectPopper__void();
 }
 /** @nodts */
 static m_injectPopper__void() {
  ThirdParty.$clinit();
  ScriptInjector.m_fromString__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(ThirdPartyBundle.f_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundle.m_popper__org_treblereel_j2cl_processors_common_resources_TextResource().m_getText__java_lang_String()).m_inject__void();
 }
 /** @nodts @return {!ThirdParty} */
 static $create__() {
  let $instance = new ThirdParty();
  $instance.$ctor__org_patternfly_thirdparty_ThirdParty__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_thirdparty_ThirdParty__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  ThirdParty.$clinit = () =>{};
  ThirdParty.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ThirdParty;
 }
 
 /** @nodts */
 static $loadModules() {
  ThirdPartyBundle = goog.module.get('org.patternfly.thirdparty.ThirdPartyBundle$impl');
  ScriptInjector = goog.module.get('org.treblereel.j2cl.processors.common.injectors.ScriptInjector$impl');
 }
}
$Util.$setClassMetadata(ThirdParty, 'org.patternfly.thirdparty.ThirdParty');

exports = ThirdParty;

//# sourceMappingURL=ThirdParty.js.map

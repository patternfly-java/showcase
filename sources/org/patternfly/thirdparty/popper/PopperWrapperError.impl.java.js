goog.module('org.patternfly.thirdparty.popper.PopperWrapperError$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PopperWrapper = goog.require('org.patternfly.thirdparty.popper.PopperWrapper$impl');

let Callback = goog.forwardDeclare('org.patternfly.handler.Callback$impl');

/**
 * @implements {PopperWrapper}
 */
class PopperWrapperError extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!PopperWrapperError} */
 static $create__() {
  PopperWrapperError.$clinit();
  let $instance = new PopperWrapperError();
  $instance.$ctor__org_patternfly_thirdparty_popper_PopperWrapperError__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_thirdparty_popper_PopperWrapperError__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts @return {Promise<Object>} */
 m_update__elemental2_promise_Promise() {
  goog.global.console.error(PopperWrapperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperWrapperError_);
  return null;
 }
 /** @override @nodts */
 m_show__org_patternfly_handler_Callback__void(/** Callback */ visible) {
  goog.global.console.error(PopperWrapperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperWrapperError_);
 }
 /** @override @nodts */
 m_hide__org_patternfly_handler_Callback__void(/** Callback */ hidden) {
  goog.global.console.error(PopperWrapperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperWrapperError_);
 }
 /** @override @nodts */
 m_cleanup__void() {
  goog.global.console.error(PopperWrapperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperWrapperError_);
 }
 /** @nodts */
 static $clinit() {
  PopperWrapperError.$clinit = () =>{};
  PopperWrapperError.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperWrapperError;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
PopperWrapperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperWrapperError_ = 'Unable to create popper: \'Popper\' is undefined. Please add a call to \'ThirdParty.injectPopper()\'. See also https://github.com/patternfly-java/patternfly-java#third-party';
PopperWrapper.$markImplementor(PopperWrapperError);
$Util.$setClassMetadata(PopperWrapperError, 'org.patternfly.thirdparty.popper.PopperWrapperError');

exports = PopperWrapperError;

//# sourceMappingURL=PopperWrapperError.js.map

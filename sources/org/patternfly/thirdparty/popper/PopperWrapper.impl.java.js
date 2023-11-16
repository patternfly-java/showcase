goog.module('org.patternfly.thirdparty.popper.PopperWrapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Callback = goog.forwardDeclare('org.patternfly.handler.Callback$impl');

/**
 * @interface
 */
class PopperWrapper {
 /** @abstract @nodts @return {Promise<Object>} */
 m_update__elemental2_promise_Promise() {}
 /** @abstract @nodts */
 m_show__org_patternfly_handler_Callback__void(/** Callback */ visible) {}
 /** @abstract @nodts */
 m_hide__org_patternfly_handler_Callback__void(/** Callback */ hidden) {}
 /** @abstract @nodts */
 m_cleanup__void() {}
 /** @nodts */
 static $clinit() {
  PopperWrapper.$clinit = () =>{};
  PopperWrapper.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_thirdparty_popper_PopperWrapper = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_thirdparty_popper_PopperWrapper;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {number} @nodts*/
PopperWrapper.f_UNDEFINED__org_patternfly_thirdparty_popper_PopperWrapper = -1;
PopperWrapper.$markImplementor(/**@type {Function}*/ (PopperWrapper));
$Util.$setClassMetadataForInterface(PopperWrapper, 'org.patternfly.thirdparty.popper.PopperWrapper');

exports = PopperWrapper;

//# sourceMappingURL=PopperWrapper.js.map

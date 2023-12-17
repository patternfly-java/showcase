goog.module('org.patternfly.thirdparty.popper.Popper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');

/**
 * @interface
 */
class Popper {
 /** @abstract @nodts @return {Promise<Object>} */
 m_update__elemental2_promise_Promise() {}
 /** @abstract @nodts */
 m_show__org_jboss_elemento_Callback__void(/** Callback */ visible) {}
 /** @abstract @nodts */
 m_hide__org_jboss_elemento_Callback__void(/** Callback */ hidden) {}
 /** @abstract @nodts */
 m_cleanup__void() {}
 /** @nodts */
 static $clinit() {
  Popper.$clinit = () =>{};
  Popper.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_thirdparty_popper_Popper = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_thirdparty_popper_Popper;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {number} @nodts*/
Popper.f_UNDEFINED__org_patternfly_thirdparty_popper_Popper = -1;
Popper.$markImplementor(/**@type {Function}*/ (Popper));
$Util.$setClassMetadataForInterface(Popper, 'org.patternfly.thirdparty.popper.Popper');

exports = Popper;

//# sourceMappingURL=Popper.js.map

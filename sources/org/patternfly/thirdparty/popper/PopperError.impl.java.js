goog.module('org.patternfly.thirdparty.popper.PopperError$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Popper = goog.require('org.patternfly.thirdparty.popper.Popper$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Callback = goog.forwardDeclare('org.patternfly.handler.Callback$impl');

/**
 * @implements {Popper}
 */
class PopperError extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ComponentType} @nodts*/
  this.f_componentType__org_patternfly_thirdparty_popper_PopperError_;
 }
 /** @nodts @return {!PopperError} */
 static $create__org_patternfly_component_ComponentType(/** ComponentType */ componentType) {
  PopperError.$clinit();
  let $instance = new PopperError();
  $instance.$ctor__org_patternfly_thirdparty_popper_PopperError__org_patternfly_component_ComponentType__void(componentType);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_thirdparty_popper_PopperError__org_patternfly_component_ComponentType__void(/** ComponentType */ componentType) {
  this.$ctor__java_lang_Object__void();
  this.f_componentType__org_patternfly_thirdparty_popper_PopperError_ = componentType;
 }
 /** @override @nodts @return {Promise<Object>} */
 m_update__elemental2_promise_Promise() {
  Logger.m_undefined__org_patternfly_component_ComponentType__java_lang_String__void(this.f_componentType__org_patternfly_thirdparty_popper_PopperError_, PopperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperError_);
  return null;
 }
 /** @override @nodts */
 m_show__org_patternfly_handler_Callback__void(/** Callback */ visible) {
  Logger.m_undefined__org_patternfly_component_ComponentType__java_lang_String__void(this.f_componentType__org_patternfly_thirdparty_popper_PopperError_, PopperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperError_);
 }
 /** @override @nodts */
 m_hide__org_patternfly_handler_Callback__void(/** Callback */ hidden) {
  Logger.m_undefined__org_patternfly_component_ComponentType__java_lang_String__void(this.f_componentType__org_patternfly_thirdparty_popper_PopperError_, PopperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperError_);
 }
 /** @override @nodts */
 m_cleanup__void() {
  Logger.m_undefined__org_patternfly_component_ComponentType__java_lang_String__void(this.f_componentType__org_patternfly_thirdparty_popper_PopperError_, PopperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperError_);
 }
 /** @nodts */
 static $clinit() {
  PopperError.$clinit = () =>{};
  PopperError.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperError;
 }
 
 /** @nodts */
 static $loadModules() {
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
 }
}
/**@const {string} @nodts*/
PopperError.f_ERROR_MESSAGE__org_patternfly_thirdparty_popper_PopperError_ = 'Unable to create popper: \'Popper\' is undefined. Please add a call to \'ThirdParty.injectPopper()\'. See also https://github.com/patternfly-java/patternfly-java#third-party';
Popper.$markImplementor(PopperError);
$Util.$setClassMetadata(PopperError, 'org.patternfly.thirdparty.popper.PopperError');

exports = PopperError;

//# sourceMappingURL=PopperError.js.map

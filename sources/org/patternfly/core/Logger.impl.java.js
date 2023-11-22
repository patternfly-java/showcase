goog.module('org.patternfly.core.Logger$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @final
 */
class Logger extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Logger} */
 static $create__() {
  Logger.$clinit();
  let $instance = new Logger();
  $instance.$ctor__org_patternfly_core_Logger__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Logger__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static m_nyi__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.error(Logger.m_format__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(componentType, message));
 }
 /** @nodts */
 static m_undefined__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.error(Logger.m_format__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(componentType, message));
 }
 /** @nodts */
 static m_unknown__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.error(Logger.m_format__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(componentType, message));
 }
 /** @nodts */
 static m_unsupported__org_patternfly_component_ComponentType__java_lang_String__void(/** ComponentType */ componentType, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.warn(Logger.m_format__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(componentType, message));
 }
 /** @nodts @return {?string} */
 static m_format__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(/** ComponentType */ componentType, /** ?string */ message) {
  let prefix = !$Equality.$same(componentType, null) ? j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_componentName__org_patternfly_component_ComponentType) + ': ' : '';
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(prefix) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(message);
 }
 /** @nodts */
 static $clinit() {
  Logger.$clinit = () =>{};
  Logger.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Logger;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(Logger, 'org.patternfly.core.Logger');

exports = Logger;

//# sourceMappingURL=Logger.js.map

goog.module('org.patternfly.layout.Variables$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Variables {
 /** @nodts */
 static $clinit() {
  Variables.$clinit = () =>{};
  Variables.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_layout_Variables = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_layout_Variables;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Variables.f_GridTemplateColumns__org_patternfly_layout_Variables = 'GridTemplateColumns';
/**@const {string} @nodts*/
Variables.f_LineClamp__org_patternfly_layout_Variables = 'LineClamp';
/**@const {string} @nodts*/
Variables.f_MaxWidth__org_patternfly_layout_Variables = 'MaxWidth';
/**@const {string} @nodts*/
Variables.f_MaxHeight__org_patternfly_layout_Variables = 'MaxHeight';
Variables.$markImplementor(/**@type {Function}*/ (Variables));
$Util.$setClassMetadataForInterface(Variables, 'org.patternfly.layout.Variables');

exports = Variables;

//# sourceMappingURL=Variables.js.map

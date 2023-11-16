goog.module('org.patternfly.dom.DomGlobal.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Navigator} */
 static get f_navigator__org_patternfly_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_navigator__org_patternfly_dom_DomGlobal_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_navigator__org_patternfly_dom_DomGlobal_$Overlay = goog.global.navigator;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof goog.global;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {Navigator} @nodts*/
$Overlay.$static_navigator__org_patternfly_dom_DomGlobal_$Overlay;
$Util.$setClassMetadata($Overlay, 'goog.global');

exports = $Overlay;

//# sourceMappingURL=DomGlobal$$Overlay.js.map

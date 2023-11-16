goog.module('org.patternfly.thirdparty.ThirdPartyBundle.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ThirdPartyBundle = goog.require('org.patternfly.thirdparty.ThirdPartyBundle$impl');

let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

/**
 * @implements {ThirdPartyBundle}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():TextResource */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():TextResource} @nodts*/
  this.f_fn__org_patternfly_thirdparty_ThirdPartyBundle_$LambdaAdaptor;
  this.$ctor__org_patternfly_thirdparty_ThirdPartyBundle_$LambdaAdaptor__org_patternfly_thirdparty_ThirdPartyBundle_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_thirdparty_ThirdPartyBundle_$LambdaAdaptor__org_patternfly_thirdparty_ThirdPartyBundle_$JsFunction__void(/** ?function():TextResource */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_thirdparty_ThirdPartyBundle_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {TextResource} */
 m_popper__org_treblereel_j2cl_processors_common_resources_TextResource() {
  let /** ?function():TextResource */ $function;
  return ($function = this.f_fn__org_patternfly_thirdparty_ThirdPartyBundle_$LambdaAdaptor, $function());
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ThirdPartyBundle.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.thirdparty.ThirdPartyBundle$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ThirdPartyBundle$$LambdaAdaptor.js.map

goog.module('org.patternfly.component.CardView.Display.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.patternfly.component.CardView.Display$impl');

let Card = goog.forwardDeclare('org.patternfly.component.Card$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @template T
 * @implements {Display<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Card, DataProvider<T>, T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Card, DataProvider<T>, T):void} @nodts*/
  this.f_fn__org_patternfly_component_CardView_Display_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_CardView_Display_$LambdaAdaptor__org_patternfly_component_CardView_Display_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_CardView_Display_$LambdaAdaptor__org_patternfly_component_CardView_Display_$JsFunction__void(/** ?function(Card, DataProvider<T>, T):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_CardView_Display_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_render__org_patternfly_component_Card__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** Card */ arg0, /** DataProvider<T> */ arg1, /** T */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_CardView_Display_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
  }
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
Display.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.CardView$Display$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=CardView$Display$$LambdaAdaptor.js.map

goog.module('org.patternfly.component.CardView.Display$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Card = goog.forwardDeclare('org.patternfly.component.Card$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.CardView.Display.$LambdaAdaptor$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @interface
 * @template T
 * @deprecated
 */
class Display {
 /** @abstract @nodts */
 m_render__org_patternfly_component_Card__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** Card */ card, /** DataProvider<T> */ dataProvider, /** T */ item) {}
 /** @nodts @template T @return {Display<T>} */
 static $adapt(/** ?function(Card, DataProvider<T>, T):void */ fn) {
  Display.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Display.$clinit = () =>{};
  Display.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_CardView_Display = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_CardView_Display;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.CardView.Display.$LambdaAdaptor$impl');
 }
}
Display.$markImplementor(/**@type {Function}*/ (Display));
$Util.$setClassMetadataForInterface(Display, 'org.patternfly.component.CardView$Display');

exports = Display;

//# sourceMappingURL=CardView$Display.js.map

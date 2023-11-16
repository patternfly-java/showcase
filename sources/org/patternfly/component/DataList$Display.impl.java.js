goog.module('org.patternfly.component.DataList.Display$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.DataList.Display.$LambdaAdaptor$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @interface
 * @template T
 * @deprecated
 */
class Display {
 /** @abstract @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLLIElement> */ li, /** DataProvider<T> */ dataProvider, /** T */ item) {}
 /** @nodts @template T @return {Display<T>} */
 static $adapt(/** ?function(HTMLContainerBuilder<HTMLLIElement>, DataProvider<T>, T):void */ fn) {
  Display.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Display.$clinit = () =>{};
  Display.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_DataList_Display = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_DataList_Display;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.DataList.Display.$LambdaAdaptor$impl');
 }
}
Display.$markImplementor(/**@type {Function}*/ (Display));
$Util.$setClassMetadataForInterface(Display, 'org.patternfly.component.DataList$Display');

exports = Display;

//# sourceMappingURL=DataList$Display.js.map

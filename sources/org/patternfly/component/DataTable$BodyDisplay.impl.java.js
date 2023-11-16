goog.module('org.patternfly.component.DataTable.BodyDisplay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.DataTable.BodyDisplay.$LambdaAdaptor$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @interface
 * @template T
 * @deprecated
 */
class BodyDisplay {
 /** @abstract @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<T> */ dataProvider, /** T */ item) {}
 /** @abstract @nodts @return {BodyDisplay<T>} */
 m_andThen__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay(/** BodyDisplay<T> */ after) {}
 /** @nodts @template T @return {BodyDisplay<T>} */
 static $adapt(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void */ fn) {
  BodyDisplay.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T @return {BodyDisplay<T>} */
 static m_andThen__$default__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay(/** !BodyDisplay<T> */ $thisArg, /** BodyDisplay<T> */ after) {
  BodyDisplay.$clinit();
  return BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<T> */ dataProvider, /** T */ item) =>{
   $thisArg.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(td, dataProvider, item);
   after.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(td, dataProvider, item);
  });
 }
 /** @nodts */
 static $clinit() {
  BodyDisplay.$clinit = () =>{};
  BodyDisplay.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_DataTable_BodyDisplay = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_DataTable_BodyDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.DataTable.BodyDisplay.$LambdaAdaptor$impl');
 }
}
BodyDisplay.$markImplementor(/**@type {Function}*/ (BodyDisplay));
$Util.$setClassMetadataForInterface(BodyDisplay, 'org.patternfly.component.DataTable$BodyDisplay');

exports = BodyDisplay;

//# sourceMappingURL=DataTable$BodyDisplay.js.map

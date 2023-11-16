goog.module('org.patternfly.component.DataTable.CompoundDisplay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.DataTable.CompoundDisplay.$LambdaAdaptor$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @interface
 * @template T
 * @deprecated
 */
class CompoundDisplay {
 /** @abstract @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLTableCellElement> */ html, /** DataProvider<T> */ dataProvider, /** T */ item) {}
 /** @abstract @nodts @return {CompoundDisplay<T>} */
 m_andThen__org_patternfly_component_DataTable_CompoundDisplay__org_patternfly_component_DataTable_CompoundDisplay(/** CompoundDisplay<T> */ after) {}
 /** @nodts @template T @return {CompoundDisplay<T>} */
 static $adapt(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void */ fn) {
  CompoundDisplay.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T @return {CompoundDisplay<T>} */
 static m_andThen__$default__org_patternfly_component_DataTable_CompoundDisplay__org_patternfly_component_DataTable_CompoundDisplay__org_patternfly_component_DataTable_CompoundDisplay(/** !CompoundDisplay<T> */ $thisArg, /** CompoundDisplay<T> */ after) {
  CompoundDisplay.$clinit();
  return CompoundDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ html, /** DataProvider<T> */ dataProvider, /** T */ item) =>{
   $thisArg.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(html, dataProvider, item);
   after.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(html, dataProvider, item);
  });
 }
 /** @nodts */
 static $clinit() {
  CompoundDisplay.$clinit = () =>{};
  CompoundDisplay.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_DataTable_CompoundDisplay = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_DataTable_CompoundDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.DataTable.CompoundDisplay.$LambdaAdaptor$impl');
 }
}
CompoundDisplay.$markImplementor(/**@type {Function}*/ (CompoundDisplay));
$Util.$setClassMetadataForInterface(CompoundDisplay, 'org.patternfly.component.DataTable$CompoundDisplay');

exports = CompoundDisplay;

//# sourceMappingURL=DataTable$CompoundDisplay.js.map

goog.module('org.patternfly.component.DataTable.ExpandableDisplay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.DataTable.ExpandableDisplay.$LambdaAdaptor$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @interface
 * @template T
 * @deprecated
 */
class ExpandableDisplay {
 /** @abstract @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLDivElement> */ html, /** DataProvider<T> */ dataProvider, /** T */ item) {}
 /** @abstract @nodts @return {ExpandableDisplay<T>} */
 m_andThen__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable_ExpandableDisplay(/** ExpandableDisplay<T> */ after) {}
 /** @nodts @template T @return {ExpandableDisplay<T>} */
 static $adapt(/** ?function(HTMLContainerBuilder<HTMLDivElement>, DataProvider<T>, T):void */ fn) {
  ExpandableDisplay.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template T @return {ExpandableDisplay<T>} */
 static m_andThen__$default__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable_ExpandableDisplay(/** !ExpandableDisplay<T> */ $thisArg, /** ExpandableDisplay<T> */ after) {
  ExpandableDisplay.$clinit();
  return ExpandableDisplay.$adapt((/** HTMLContainerBuilder<HTMLDivElement> */ html, /** DataProvider<T> */ dataProvider, /** T */ item) =>{
   $thisArg.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(html, dataProvider, item);
   after.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(html, dataProvider, item);
  });
 }
 /** @nodts */
 static $clinit() {
  ExpandableDisplay.$clinit = () =>{};
  ExpandableDisplay.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_DataTable_ExpandableDisplay = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_DataTable_ExpandableDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.DataTable.ExpandableDisplay.$LambdaAdaptor$impl');
 }
}
ExpandableDisplay.$markImplementor(/**@type {Function}*/ (ExpandableDisplay));
$Util.$setClassMetadataForInterface(ExpandableDisplay, 'org.patternfly.component.DataTable$ExpandableDisplay');

exports = ExpandableDisplay;

//# sourceMappingURL=DataTable$ExpandableDisplay.js.map

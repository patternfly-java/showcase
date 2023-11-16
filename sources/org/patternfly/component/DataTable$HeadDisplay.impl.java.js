goog.module('org.patternfly.component.DataTable.HeadDisplay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.DataTable.HeadDisplay.$LambdaAdaptor$impl');

/**
 * @interface
 * @deprecated
 */
class HeadDisplay {
 /** @abstract @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<HTMLTableCellElement> */ th) {}
 /** @abstract @nodts @return {HeadDisplay} */
 m_andThen__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_HeadDisplay(/** HeadDisplay */ after) {}
 /** @nodts @return {HeadDisplay} */
 static $adapt(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>):void */ fn) {
  HeadDisplay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {HeadDisplay} */
 static m_andThen__$default__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_HeadDisplay(/** !HeadDisplay */ $thisArg, /** HeadDisplay */ after) {
  HeadDisplay.$clinit();
  return HeadDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ th) =>{
   $thisArg.m_render__org_jboss_elemento_HTMLContainerBuilder__void(th);
   after.m_render__org_jboss_elemento_HTMLContainerBuilder__void(th);
  });
 }
 /** @nodts */
 static $clinit() {
  HeadDisplay.$clinit = () =>{};
  HeadDisplay.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_DataTable_HeadDisplay = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_DataTable_HeadDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.DataTable.HeadDisplay.$LambdaAdaptor$impl');
 }
}
HeadDisplay.$markImplementor(/**@type {Function}*/ (HeadDisplay));
$Util.$setClassMetadataForInterface(HeadDisplay, 'org.patternfly.component.DataTable$HeadDisplay');

exports = HeadDisplay;

//# sourceMappingURL=DataTable$HeadDisplay.js.map

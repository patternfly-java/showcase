goog.module('org.patternfly.component.DataTable.CompoundDisplay.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CompoundDisplay = goog.require('org.patternfly.component.DataTable.CompoundDisplay$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @template T
 * @implements {CompoundDisplay<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void} @nodts*/
  this.f_fn__org_patternfly_component_DataTable_CompoundDisplay_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_DataTable_CompoundDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_CompoundDisplay_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_DataTable_CompoundDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_CompoundDisplay_$JsFunction__void(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_DataTable_CompoundDisplay_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLTableCellElement> */ arg0, /** DataProvider<T> */ arg1, /** T */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_DataTable_CompoundDisplay_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {CompoundDisplay<T>} */
 m_andThen__org_patternfly_component_DataTable_CompoundDisplay__org_patternfly_component_DataTable_CompoundDisplay(/** CompoundDisplay<T> */ arg0) {
  return CompoundDisplay.m_andThen__$default__org_patternfly_component_DataTable_CompoundDisplay__org_patternfly_component_DataTable_CompoundDisplay__org_patternfly_component_DataTable_CompoundDisplay(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  CompoundDisplay.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
CompoundDisplay.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.DataTable$CompoundDisplay$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DataTable$CompoundDisplay$$LambdaAdaptor.js.map

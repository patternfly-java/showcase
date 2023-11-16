goog.module('org.patternfly.component.DataTable.BodyDisplay.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BodyDisplay = goog.require('org.patternfly.component.DataTable.BodyDisplay$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @template T
 * @implements {BodyDisplay<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void} @nodts*/
  this.f_fn__org_patternfly_component_DataTable_BodyDisplay_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_DataTable_BodyDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_BodyDisplay_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_DataTable_BodyDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_BodyDisplay_$JsFunction__void(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>, DataProvider<T>, T):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_DataTable_BodyDisplay_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLTableCellElement> */ arg0, /** DataProvider<T> */ arg1, /** T */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_DataTable_BodyDisplay_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {BodyDisplay<T>} */
 m_andThen__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay(/** BodyDisplay<T> */ arg0) {
  return BodyDisplay.m_andThen__$default__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  BodyDisplay.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
BodyDisplay.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.DataTable$BodyDisplay$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DataTable$BodyDisplay$$LambdaAdaptor.js.map

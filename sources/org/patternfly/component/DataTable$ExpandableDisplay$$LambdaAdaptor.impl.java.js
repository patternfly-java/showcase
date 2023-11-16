goog.module('org.patternfly.component.DataTable.ExpandableDisplay.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ExpandableDisplay = goog.require('org.patternfly.component.DataTable.ExpandableDisplay$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');

/**
 * @template T
 * @implements {ExpandableDisplay<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(HTMLContainerBuilder<HTMLDivElement>, DataProvider<T>, T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(HTMLContainerBuilder<HTMLDivElement>, DataProvider<T>, T):void} @nodts*/
  this.f_fn__org_patternfly_component_DataTable_ExpandableDisplay_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_DataTable_ExpandableDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_ExpandableDisplay_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_DataTable_ExpandableDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_ExpandableDisplay_$JsFunction__void(/** ?function(HTMLContainerBuilder<HTMLDivElement>, DataProvider<T>, T):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_DataTable_ExpandableDisplay_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLDivElement> */ arg0, /** DataProvider<T> */ arg1, /** T */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_DataTable_ExpandableDisplay_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ExpandableDisplay<T>} */
 m_andThen__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable_ExpandableDisplay(/** ExpandableDisplay<T> */ arg0) {
  return ExpandableDisplay.m_andThen__$default__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable_ExpandableDisplay(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  ExpandableDisplay.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ExpandableDisplay.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.DataTable$ExpandableDisplay$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DataTable$ExpandableDisplay$$LambdaAdaptor.js.map

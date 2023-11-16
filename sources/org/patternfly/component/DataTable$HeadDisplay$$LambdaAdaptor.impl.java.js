goog.module('org.patternfly.component.DataTable.HeadDisplay.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HeadDisplay = goog.require('org.patternfly.component.DataTable.HeadDisplay$impl');

let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');

/**
 * @implements {HeadDisplay}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(HTMLContainerBuilder<HTMLTableCellElement>):void} @nodts*/
  this.f_fn__org_patternfly_component_DataTable_HeadDisplay_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_DataTable_HeadDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_HeadDisplay_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_DataTable_HeadDisplay_$LambdaAdaptor__org_patternfly_component_DataTable_HeadDisplay_$JsFunction__void(/** ?function(HTMLContainerBuilder<HTMLTableCellElement>):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_DataTable_HeadDisplay_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<HTMLTableCellElement> */ arg0) {
  {
   let $function = this.f_fn__org_patternfly_component_DataTable_HeadDisplay_$LambdaAdaptor;
   $function(arg0);
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {HeadDisplay} */
 m_andThen__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_HeadDisplay(/** HeadDisplay */ arg0) {
  return HeadDisplay.m_andThen__$default__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_HeadDisplay(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HeadDisplay.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
HeadDisplay.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.DataTable$HeadDisplay$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DataTable$HeadDisplay$$LambdaAdaptor.js.map

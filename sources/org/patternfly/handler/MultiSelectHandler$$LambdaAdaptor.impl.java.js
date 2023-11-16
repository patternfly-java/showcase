goog.module('org.patternfly.handler.MultiSelectHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MultiSelectHandler = goog.require('org.patternfly.handler.MultiSelectHandler$impl');

let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @template C
 * @implements {MultiSelectHandler<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(List<C>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(List<C>):void} @nodts*/
  this.f_fn__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor__org_patternfly_handler_MultiSelectHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor__org_patternfly_handler_MultiSelectHandler_$JsFunction__void(/** ?function(List<C>):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onSelect__java_util_List__void(/** List<C> */ arg0) {
  {
   let $function = this.f_fn__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
MultiSelectHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.MultiSelectHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=MultiSelectHandler$$LambdaAdaptor.js.map

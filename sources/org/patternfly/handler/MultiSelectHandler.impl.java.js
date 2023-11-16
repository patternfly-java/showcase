goog.module('org.patternfly.handler.MultiSelectHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.MultiSelectHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class MultiSelectHandler {
 /** @abstract @nodts */
 m_onSelect__java_util_List__void(/** List<C> */ components) {}
 /** @nodts @template C @return {MultiSelectHandler<C>} */
 static $adapt(/** ?function(List<C>):void */ fn) {
  MultiSelectHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  MultiSelectHandler.$clinit = () =>{};
  MultiSelectHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_MultiSelectHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_MultiSelectHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.MultiSelectHandler.$LambdaAdaptor$impl');
 }
}
MultiSelectHandler.$markImplementor(/**@type {Function}*/ (MultiSelectHandler));
$Util.$setClassMetadataForInterface(MultiSelectHandler, 'org.patternfly.handler.MultiSelectHandler');

exports = MultiSelectHandler;

//# sourceMappingURL=MultiSelectHandler.js.map

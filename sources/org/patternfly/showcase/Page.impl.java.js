goog.module('org.patternfly.showcase.Page$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.showcase.Page.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Iterable<HTMLElement>}
 */
class Page {
 /** @abstract @override @nodts @return {Iterator<HTMLElement>} */
 m_iterator__java_util_Iterator() {}
 /** @abstract @nodts @return {Iterable<HTMLElement>} */
 m_elements__java_lang_Iterable() {}
 /** @nodts @return {Page} */
 static $adapt(/** ?function():Iterable<HTMLElement> */ fn) {
  Page.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts @return {Iterator<HTMLElement>} */
 static m_iterator__$default__org_patternfly_showcase_Page__java_util_Iterator(/** !Page */ $thisArg) {
  Page.$clinit();
  return $thisArg.m_elements__java_lang_Iterable().m_iterator__java_util_Iterator();
 }
 /** @nodts */
 static $clinit() {
  Page.$clinit = () =>{};
  Page.$loadModules();
  Iterable.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Iterable.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_showcase_Page = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_showcase_Page;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.showcase.Page.$LambdaAdaptor$impl');
 }
}
Page.$markImplementor(/**@type {Function}*/ (Page));
$Util.$setClassMetadataForInterface(Page, 'org.patternfly.showcase.Page');

exports = Page;

//# sourceMappingURL=Page.js.map

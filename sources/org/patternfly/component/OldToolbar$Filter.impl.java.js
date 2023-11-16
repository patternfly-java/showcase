goog.module('org.patternfly.component.OldToolbar.Filter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @deprecated
 */
class Filter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Filter} */
 static $create__() {
  let $instance = new Filter();
  $instance.$ctor__org_patternfly_component_OldToolbar_Filter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_Filter__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Filter.$clinit = () =>{};
  Filter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Filter;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Filter, 'org.patternfly.component.OldToolbar$Filter');

exports = Filter;

//# sourceMappingURL=OldToolbar$Filter.js.map

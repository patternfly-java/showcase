goog.module('org.patternfly.component.OldToolbar.SortOption$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @template T
 * @deprecated
 */
class SortOption extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_OldToolbar_SortOption_;
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_component_OldToolbar_SortOption_;
  /**@type {Comparator<T>} @nodts*/
  this.f_comparator__org_patternfly_component_OldToolbar_SortOption_;
 }
 /** @nodts @template T @return {!SortOption<T>} */
 static $create__java_lang_String__java_util_Comparator(/** ?string */ name, /** Comparator<T> */ comparator) {
  SortOption.$clinit();
  let $instance = new SortOption();
  $instance.$ctor__org_patternfly_component_OldToolbar_SortOption__java_lang_String__java_util_Comparator__void(name, comparator);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_SortOption__java_lang_String__java_util_Comparator__void(/** ?string */ name, /** Comparator<T> */ comparator) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_component_OldToolbar_SortOption_ = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(name, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  this.f_name__org_patternfly_component_OldToolbar_SortOption_ = name;
  this.f_comparator__org_patternfly_component_OldToolbar_SortOption_ = comparator;
 }
 /** @override @return {?string} */
 toString() {
  return this.f_name__org_patternfly_component_OldToolbar_SortOption_;
 }
 /** @nodts */
 static $clinit() {
  SortOption.$clinit = () =>{};
  SortOption.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SortOption;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(SortOption, 'org.patternfly.component.OldToolbar$SortOption');

exports = SortOption;

//# sourceMappingURL=OldToolbar$SortOption.js.map

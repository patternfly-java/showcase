goog.module('org.patternfly.component.OldToolbar.SortOptions$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let SortOption = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortOption$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {Iterable<SortOption<T>>}
 * @deprecated
 */
class SortOptions extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LinkedHashMap<?string, SortOption<T>>} @nodts*/
  this.f_sortOptions__org_patternfly_component_OldToolbar_SortOptions_;
 }
 /** @nodts @template T @return {!SortOptions<T>} */
 static $create__() {
  SortOptions.$clinit();
  let $instance = new SortOptions();
  $instance.$ctor__org_patternfly_component_OldToolbar_SortOptions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_SortOptions__void() {
  this.$ctor__java_lang_Object__void();
  this.f_sortOptions__org_patternfly_component_OldToolbar_SortOptions_ = /**@type {!LinkedHashMap<?string, SortOption<T>>}*/ (LinkedHashMap.$create__());
 }
 /** @nodts @return {SortOptions<T>} */
 m_add__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortOptions(/** SortOption<T> */ sortOption) {
  this.f_sortOptions__org_patternfly_component_OldToolbar_SortOptions_.put(sortOption.f_id__org_patternfly_component_OldToolbar_SortOption_, sortOption);
  return this;
 }
 /** @nodts @return {SortOption<T>} */
 m_get__java_lang_String__org_patternfly_component_OldToolbar_SortOption(/** ?string */ key) {
  return /**@type {SortOption<T>}*/ ($Casts.$to(this.f_sortOptions__org_patternfly_component_OldToolbar_SortOptions_.get(key), SortOption));
 }
 /** @override @nodts @return {Iterator<SortOption<T>>} */
 m_iterator__java_util_Iterator() {
  return this.f_sortOptions__org_patternfly_component_OldToolbar_SortOptions_.values().m_iterator__java_util_Iterator();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<SortOption<T>>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<SortOption<T>>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  SortOptions.$clinit = () =>{};
  SortOptions.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SortOptions;
 }
 
 /** @nodts */
 static $loadModules() {
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  SortOption = goog.module.get('org.patternfly.component.OldToolbar.SortOption$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterable.$markImplementor(SortOptions);
$Util.$setClassMetadata(SortOptions, 'org.patternfly.component.OldToolbar$SortOptions');

exports = SortOptions;

//# sourceMappingURL=OldToolbar$SortOptions.js.map

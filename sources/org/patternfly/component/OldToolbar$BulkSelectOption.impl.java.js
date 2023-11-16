goog.module('org.patternfly.component.OldToolbar.BulkSelectOption$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class BulkSelectOption extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_OldToolbar_BulkSelectOption_;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_OldToolbar_BulkSelectOption_;
 }
 /** @nodts @return {!BulkSelectOption} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ text) {
  BulkSelectOption.$clinit();
  let $instance = new BulkSelectOption();
  $instance.$ctor__org_patternfly_component_OldToolbar_BulkSelectOption__java_lang_String__java_lang_String__void(id, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_BulkSelectOption__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ text) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_component_OldToolbar_BulkSelectOption_ = id;
  this.f_text__org_patternfly_component_OldToolbar_BulkSelectOption_ = text;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if (!BulkSelectOption.$isInstance(o)) {
   return false;
  }
  let that = /**@type {BulkSelectOption}*/ ($Casts.$to(o, BulkSelectOption));
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(this.f_id__org_patternfly_component_OldToolbar_BulkSelectOption_, that.f_id__org_patternfly_component_OldToolbar_BulkSelectOption_);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hash__arrayOf_java_lang_Object__int([this.f_id__org_patternfly_component_OldToolbar_BulkSelectOption_]);
 }
 /** @override @return {?string} */
 toString() {
  return this.f_text__org_patternfly_component_OldToolbar_BulkSelectOption_;
 }
 /** @nodts */
 static $clinit() {
  BulkSelectOption.$clinit = () =>{};
  BulkSelectOption.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BulkSelectOption;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BulkSelectOption, 'org.patternfly.component.OldToolbar$BulkSelectOption');

exports = BulkSelectOption;

//# sourceMappingURL=OldToolbar$BulkSelectOption.js.map

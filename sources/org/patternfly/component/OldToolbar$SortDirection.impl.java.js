goog.module('org.patternfly.component.OldToolbar.SortDirection$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<SortDirection>}
 * @deprecated
 */
class SortDirection extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_OldToolbar_SortDirection_;
  /**@type {boolean} @nodts*/
  this.f_ascending__org_patternfly_component_OldToolbar_SortDirection_ = false;
 }
 /** @nodts @return {!SortDirection} */
 static $create__java_lang_String__int__java_lang_String__boolean(/** ?string */ $name, /** number */ $ordinal, /** ?string */ text, /** boolean */ ascending) {
  let $instance = new SortDirection();
  $instance.$ctor__org_patternfly_component_OldToolbar_SortDirection__java_lang_String__int__java_lang_String__boolean__void($name, $ordinal, text, ascending);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_SortDirection__java_lang_String__int__java_lang_String__boolean__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ text, /** boolean */ ascending) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_text__org_patternfly_component_OldToolbar_SortDirection_ = text;
  this.f_ascending__org_patternfly_component_OldToolbar_SortDirection_ = ascending;
 }
 /** @override @return {?string} */
 toString() {
  SortDirection.$clinit();
  return this.f_text__org_patternfly_component_OldToolbar_SortDirection_;
 }
 /** @nodts @return {!SortDirection} */
 static m_valueOf__java_lang_String__org_patternfly_component_OldToolbar_SortDirection(/** string */ name) {
  SortDirection.$clinit();
  if ($Equality.$same(SortDirection.f_namesToValuesMap__org_patternfly_component_OldToolbar_SortDirection_, null)) {
   SortDirection.f_namesToValuesMap__org_patternfly_component_OldToolbar_SortDirection_ = /**@type {Map<?string, !SortDirection>}*/ ($Enums.createMapFromValues(SortDirection.m_values__arrayOf_org_patternfly_component_OldToolbar_SortDirection()));
  }
  return /**@type {SortDirection}*/ ($Enums.getValueFromNameAndMap(name, SortDirection.f_namesToValuesMap__org_patternfly_component_OldToolbar_SortDirection_));
 }
 /** @nodts @return {!Array<!SortDirection>} */
 static m_values__arrayOf_org_patternfly_component_OldToolbar_SortDirection() {
  SortDirection.$clinit();
  return /**@type {!Array<SortDirection>}*/ ($Arrays.$init([SortDirection.f_ASCENDING__org_patternfly_component_OldToolbar_SortDirection, SortDirection.f_DESCENDING__org_patternfly_component_OldToolbar_SortDirection], SortDirection));
 }
 /** @nodts */
 static $clinit() {
  SortDirection.$clinit = () =>{};
  SortDirection.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SortDirection;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
SortDirection.$ordinal_ASCENDING__org_patternfly_component_OldToolbar_SortDirection = 0;
/**@const {number} @nodts*/
SortDirection.$ordinal_DESCENDING__org_patternfly_component_OldToolbar_SortDirection = 1;
/**@const {!SortDirection} @nodts*/
SortDirection.f_ASCENDING__org_patternfly_component_OldToolbar_SortDirection = /**@pureOrBreakMyCode*/ SortDirection.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName('ASCENDING'), SortDirection.$ordinal_ASCENDING__org_patternfly_component_OldToolbar_SortDirection, 'Ascending', true);
/**@const {!SortDirection} @nodts*/
SortDirection.f_DESCENDING__org_patternfly_component_OldToolbar_SortDirection = /**@pureOrBreakMyCode*/ SortDirection.$create__java_lang_String__int__java_lang_String__boolean($Util.$makeEnumName('DESCENDING'), SortDirection.$ordinal_DESCENDING__org_patternfly_component_OldToolbar_SortDirection, 'Descending', false);
/**@type {Map<?string, !SortDirection>} @nodts*/
SortDirection.f_namesToValuesMap__org_patternfly_component_OldToolbar_SortDirection_;
$Util.$setClassMetadataForEnum(SortDirection, 'org.patternfly.component.OldToolbar$SortDirection');

exports = SortDirection;

//# sourceMappingURL=OldToolbar$SortDirection.js.map

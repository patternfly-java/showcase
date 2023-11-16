goog.module('org.patternfly.layout.Orientation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Orientation>}
 */
class Orientation extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Orientation} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Orientation();
  $instance.$ctor__org_patternfly_layout_Orientation__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_Orientation__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Orientation} */
 static m_valueOf__java_lang_String__org_patternfly_layout_Orientation(/** string */ name) {
  Orientation.$clinit();
  if ($Equality.$same(Orientation.f_namesToValuesMap__org_patternfly_layout_Orientation_, null)) {
   Orientation.f_namesToValuesMap__org_patternfly_layout_Orientation_ = /**@type {Map<?string, !Orientation>}*/ ($Enums.createMapFromValues(Orientation.m_values__arrayOf_org_patternfly_layout_Orientation()));
  }
  return /**@type {Orientation}*/ ($Enums.getValueFromNameAndMap(name, Orientation.f_namesToValuesMap__org_patternfly_layout_Orientation_));
 }
 /** @nodts @return {!Array<!Orientation>} */
 static m_values__arrayOf_org_patternfly_layout_Orientation() {
  Orientation.$clinit();
  return /**@type {!Array<Orientation>}*/ ($Arrays.$init([Orientation.f_horizontal__org_patternfly_layout_Orientation, Orientation.f_vertical__org_patternfly_layout_Orientation], Orientation));
 }
 /** @nodts */
 static $clinit() {
  Orientation.$clinit = () =>{};
  Orientation.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Orientation;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Orientation.$ordinal_horizontal__org_patternfly_layout_Orientation = 0;
/**@const {number} @nodts*/
Orientation.$ordinal_vertical__org_patternfly_layout_Orientation = 1;
/**@const {!Orientation} @nodts*/
Orientation.f_horizontal__org_patternfly_layout_Orientation = /**@pureOrBreakMyCode*/ Orientation.$create__java_lang_String__int($Util.$makeEnumName('horizontal'), Orientation.$ordinal_horizontal__org_patternfly_layout_Orientation);
/**@const {!Orientation} @nodts*/
Orientation.f_vertical__org_patternfly_layout_Orientation = /**@pureOrBreakMyCode*/ Orientation.$create__java_lang_String__int($Util.$makeEnumName('vertical'), Orientation.$ordinal_vertical__org_patternfly_layout_Orientation);
/**@type {Map<?string, !Orientation>} @nodts*/
Orientation.f_namesToValuesMap__org_patternfly_layout_Orientation_;
$Util.$setClassMetadataForEnum(Orientation, 'org.patternfly.layout.Orientation');

exports = Orientation;

//# sourceMappingURL=Orientation.js.map

goog.module('org.patternfly.layout.Position$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Position>}
 */
class Position extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_Position;
 }
 /** @nodts @return {!Position} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier) {
  let $instance = new Position();
  $instance.$ctor__org_patternfly_layout_Position__java_lang_String__int__java_lang_String__void($name, $ordinal, modifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_Position__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ modifier) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_layout_Position = modifier;
 }
 /** @nodts @return {!Position} */
 static m_valueOf__java_lang_String__org_patternfly_layout_Position(/** string */ name) {
  Position.$clinit();
  if ($Equality.$same(Position.f_namesToValuesMap__org_patternfly_layout_Position_, null)) {
   Position.f_namesToValuesMap__org_patternfly_layout_Position_ = /**@type {Map<?string, !Position>}*/ ($Enums.createMapFromValues(Position.m_values__arrayOf_org_patternfly_layout_Position()));
  }
  return /**@type {Position}*/ ($Enums.getValueFromNameAndMap(name, Position.f_namesToValuesMap__org_patternfly_layout_Position_));
 }
 /** @nodts @return {!Array<!Position>} */
 static m_values__arrayOf_org_patternfly_layout_Position() {
  Position.$clinit();
  return /**@type {!Array<Position>}*/ ($Arrays.$init([Position.$static_auto__org_patternfly_layout_Position, Position.$static_top__org_patternfly_layout_Position, Position.$static_right__org_patternfly_layout_Position, Position.$static_bottom__org_patternfly_layout_Position, Position.$static_left__org_patternfly_layout_Position], Position));
 }
 /** @nodts @return {!Position} */
 static get f_auto__org_patternfly_layout_Position() {
  return (Position.$clinit(), Position.$static_auto__org_patternfly_layout_Position);
 }
 /** @nodts @return {!Position} */
 static get f_top__org_patternfly_layout_Position() {
  return (Position.$clinit(), Position.$static_top__org_patternfly_layout_Position);
 }
 /** @nodts @return {!Position} */
 static get f_right__org_patternfly_layout_Position() {
  return (Position.$clinit(), Position.$static_right__org_patternfly_layout_Position);
 }
 /** @nodts @return {!Position} */
 static get f_bottom__org_patternfly_layout_Position() {
  return (Position.$clinit(), Position.$static_bottom__org_patternfly_layout_Position);
 }
 /** @nodts @return {!Position} */
 static get f_left__org_patternfly_layout_Position() {
  return (Position.$clinit(), Position.$static_left__org_patternfly_layout_Position);
 }
 /** @nodts */
 static $clinit() {
  Position.$clinit = () =>{};
  Position.$loadModules();
  Enum.$clinit();
  Position.$static_auto__org_patternfly_layout_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('auto'), Position.$ordinal_auto__org_patternfly_layout_Position, '');
  Position.$static_top__org_patternfly_layout_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('top'), Position.$ordinal_top__org_patternfly_layout_Position, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_layout_Classes));
  Position.$static_right__org_patternfly_layout_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('right'), Position.$ordinal_right__org_patternfly_layout_Position, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_right__org_patternfly_layout_Classes));
  Position.$static_bottom__org_patternfly_layout_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bottom'), Position.$ordinal_bottom__org_patternfly_layout_Position, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_bottom__org_patternfly_layout_Classes));
  Position.$static_left__org_patternfly_layout_Position = Position.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('left'), Position.$ordinal_left__org_patternfly_layout_Position, Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_left__org_patternfly_layout_Classes));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Position;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Position.$ordinal_auto__org_patternfly_layout_Position = 0;
/**@const {number} @nodts*/
Position.$ordinal_top__org_patternfly_layout_Position = 1;
/**@const {number} @nodts*/
Position.$ordinal_right__org_patternfly_layout_Position = 2;
/**@const {number} @nodts*/
Position.$ordinal_bottom__org_patternfly_layout_Position = 3;
/**@const {number} @nodts*/
Position.$ordinal_left__org_patternfly_layout_Position = 4;
/**@private {!Position} @nodts*/
Position.$static_auto__org_patternfly_layout_Position;
/**@private {!Position} @nodts*/
Position.$static_top__org_patternfly_layout_Position;
/**@private {!Position} @nodts*/
Position.$static_right__org_patternfly_layout_Position;
/**@private {!Position} @nodts*/
Position.$static_bottom__org_patternfly_layout_Position;
/**@private {!Position} @nodts*/
Position.$static_left__org_patternfly_layout_Position;
/**@type {Map<?string, !Position>} @nodts*/
Position.f_namesToValuesMap__org_patternfly_layout_Position_;
$Util.$setClassMetadataForEnum(Position, 'org.patternfly.layout.Position');

exports = Position;

//# sourceMappingURL=Position.js.map

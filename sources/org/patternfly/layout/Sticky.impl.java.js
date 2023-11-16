goog.module('org.patternfly.layout.Sticky$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.layout.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Sticky>}
 */
class Sticky extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_Sticky;
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_Sticky;
 }
 /** @nodts @return {!Sticky} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Sticky();
  $instance.$ctor__org_patternfly_layout_Sticky__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_Sticky__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_Sticky = value;
  this.f_modifier__org_patternfly_layout_Sticky = Classes.m_modifier__java_lang_String__java_lang_String(value);
 }
 /** @nodts @return {?string} */
 m_onHeight__org_patternfly_layout_Breakpoint__java_lang_String(/** Breakpoint */ breakpoint) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__org_patternfly_layout_Breakpoint__java_lang_String(this.f_value__org_patternfly_layout_Sticky, breakpoint)) + '-height';
 }
 /** @nodts @return {!Sticky} */
 static m_valueOf__java_lang_String__org_patternfly_layout_Sticky(/** string */ name) {
  Sticky.$clinit();
  if ($Equality.$same(Sticky.f_namesToValuesMap__org_patternfly_layout_Sticky_, null)) {
   Sticky.f_namesToValuesMap__org_patternfly_layout_Sticky_ = /**@type {Map<?string, !Sticky>}*/ ($Enums.createMapFromValues(Sticky.m_values__arrayOf_org_patternfly_layout_Sticky()));
  }
  return /**@type {Sticky}*/ ($Enums.getValueFromNameAndMap(name, Sticky.f_namesToValuesMap__org_patternfly_layout_Sticky_));
 }
 /** @nodts @return {!Array<!Sticky>} */
 static m_values__arrayOf_org_patternfly_layout_Sticky() {
  Sticky.$clinit();
  return /**@type {!Array<Sticky>}*/ ($Arrays.$init([Sticky.$static_top__org_patternfly_layout_Sticky, Sticky.$static_bottom__org_patternfly_layout_Sticky], Sticky));
 }
 /** @nodts @return {!Sticky} */
 static get f_top__org_patternfly_layout_Sticky() {
  return (Sticky.$clinit(), Sticky.$static_top__org_patternfly_layout_Sticky);
 }
 /** @nodts @return {!Sticky} */
 static get f_bottom__org_patternfly_layout_Sticky() {
  return (Sticky.$clinit(), Sticky.$static_bottom__org_patternfly_layout_Sticky);
 }
 /** @nodts */
 static $clinit() {
  Sticky.$clinit = () =>{};
  Sticky.$loadModules();
  Enum.$clinit();
  Sticky.$static_top__org_patternfly_layout_Sticky = Sticky.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('top'), Sticky.$ordinal_top__org_patternfly_layout_Sticky, 'sticky-top');
  Sticky.$static_bottom__org_patternfly_layout_Sticky = Sticky.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bottom'), Sticky.$ordinal_bottom__org_patternfly_layout_Sticky, 'sticky-bottom');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Sticky;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Sticky.$ordinal_top__org_patternfly_layout_Sticky = 0;
/**@const {number} @nodts*/
Sticky.$ordinal_bottom__org_patternfly_layout_Sticky = 1;
/**@private {!Sticky} @nodts*/
Sticky.$static_top__org_patternfly_layout_Sticky;
/**@private {!Sticky} @nodts*/
Sticky.$static_bottom__org_patternfly_layout_Sticky;
/**@type {Map<?string, !Sticky>} @nodts*/
Sticky.f_namesToValuesMap__org_patternfly_layout_Sticky_;
$Util.$setClassMetadataForEnum(Sticky, 'org.patternfly.layout.Sticky');

exports = Sticky;

//# sourceMappingURL=Sticky.js.map

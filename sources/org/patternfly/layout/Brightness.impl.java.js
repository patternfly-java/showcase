goog.module('org.patternfly.layout.Brightness$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Brightness>}
 */
class Brightness extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_modifier__org_patternfly_layout_Brightness;
 }
 /** @nodts @return {!Brightness} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ variant) {
  let $instance = new Brightness();
  $instance.$ctor__org_patternfly_layout_Brightness__java_lang_String__int__java_lang_String__void($name, $ordinal, variant);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_Brightness__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ variant) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_modifier__org_patternfly_layout_Brightness = Classes.m_modifier__java_lang_String__java_lang_String(variant);
 }
 /** @nodts @return {?string} */
 m_opacity__int__java_lang_String(/** number */ opacity) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_modifier__org_patternfly_layout_Brightness) + '-' + opacity;
 }
 /** @nodts @return {!Brightness} */
 static m_valueOf__java_lang_String__org_patternfly_layout_Brightness(/** string */ name) {
  Brightness.$clinit();
  if ($Equality.$same(Brightness.f_namesToValuesMap__org_patternfly_layout_Brightness_, null)) {
   Brightness.f_namesToValuesMap__org_patternfly_layout_Brightness_ = /**@type {Map<?string, !Brightness>}*/ ($Enums.createMapFromValues(Brightness.m_values__arrayOf_org_patternfly_layout_Brightness()));
  }
  return /**@type {Brightness}*/ ($Enums.getValueFromNameAndMap(name, Brightness.f_namesToValuesMap__org_patternfly_layout_Brightness_));
 }
 /** @nodts @return {!Array<!Brightness>} */
 static m_values__arrayOf_org_patternfly_layout_Brightness() {
  Brightness.$clinit();
  return /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.$static_light__org_patternfly_layout_Brightness, Brightness.$static_dark__org_patternfly_layout_Brightness], Brightness));
 }
 /** @nodts @return {!Brightness} */
 static get f_light__org_patternfly_layout_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_light__org_patternfly_layout_Brightness);
 }
 /** @nodts @return {!Brightness} */
 static get f_dark__org_patternfly_layout_Brightness() {
  return (Brightness.$clinit(), Brightness.$static_dark__org_patternfly_layout_Brightness);
 }
 /** @nodts */
 static $clinit() {
  Brightness.$clinit = () =>{};
  Brightness.$loadModules();
  Enum.$clinit();
  Brightness.$static_light__org_patternfly_layout_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('light'), Brightness.$ordinal_light__org_patternfly_layout_Brightness, 'light');
  Brightness.$static_dark__org_patternfly_layout_Brightness = Brightness.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('dark'), Brightness.$ordinal_dark__org_patternfly_layout_Brightness, 'dark');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Brightness;
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
Brightness.$ordinal_light__org_patternfly_layout_Brightness = 0;
/**@const {number} @nodts*/
Brightness.$ordinal_dark__org_patternfly_layout_Brightness = 1;
/**@private {!Brightness} @nodts*/
Brightness.$static_light__org_patternfly_layout_Brightness;
/**@private {!Brightness} @nodts*/
Brightness.$static_dark__org_patternfly_layout_Brightness;
/**@type {Map<?string, !Brightness>} @nodts*/
Brightness.f_namesToValuesMap__org_patternfly_layout_Brightness_;
$Util.$setClassMetadataForEnum(Brightness, 'org.patternfly.layout.Brightness');

exports = Brightness;

//# sourceMappingURL=Brightness.js.map

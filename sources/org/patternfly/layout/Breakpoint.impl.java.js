goog.module('org.patternfly.layout.Breakpoint$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Breakpoint>}
 */
class Breakpoint extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_value__org_patternfly_layout_Breakpoint;
 }
 /** @nodts @return {!Breakpoint} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Breakpoint();
  $instance.$ctor__org_patternfly_layout_Breakpoint__java_lang_String__int__java_lang_String__void($name, $ordinal, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_Breakpoint__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_value__org_patternfly_layout_Breakpoint = value;
 }
 /** @nodts @return {!Breakpoint} */
 static m_valueOf__java_lang_String__org_patternfly_layout_Breakpoint(/** string */ name) {
  Breakpoint.$clinit();
  if ($Equality.$same(Breakpoint.f_namesToValuesMap__org_patternfly_layout_Breakpoint_, null)) {
   Breakpoint.f_namesToValuesMap__org_patternfly_layout_Breakpoint_ = /**@type {Map<?string, !Breakpoint>}*/ ($Enums.createMapFromValues(Breakpoint.m_values__arrayOf_org_patternfly_layout_Breakpoint()));
  }
  return /**@type {Breakpoint}*/ ($Enums.getValueFromNameAndMap(name, Breakpoint.f_namesToValuesMap__org_patternfly_layout_Breakpoint_));
 }
 /** @nodts @return {!Array<!Breakpoint>} */
 static m_values__arrayOf_org_patternfly_layout_Breakpoint() {
  Breakpoint.$clinit();
  return /**@type {!Array<Breakpoint>}*/ ($Arrays.$init([Breakpoint.f_default___org_patternfly_layout_Breakpoint, Breakpoint.f_sm__org_patternfly_layout_Breakpoint, Breakpoint.f_md__org_patternfly_layout_Breakpoint, Breakpoint.f_lg__org_patternfly_layout_Breakpoint, Breakpoint.f_xl__org_patternfly_layout_Breakpoint, Breakpoint.f__2xl__org_patternfly_layout_Breakpoint], Breakpoint));
 }
 /** @nodts */
 static $clinit() {
  Breakpoint.$clinit = () =>{};
  Breakpoint.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Breakpoint;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Breakpoint.$ordinal_default___org_patternfly_layout_Breakpoint = 0;
/**@const {number} @nodts*/
Breakpoint.$ordinal_sm__org_patternfly_layout_Breakpoint = 1;
/**@const {number} @nodts*/
Breakpoint.$ordinal_md__org_patternfly_layout_Breakpoint = 2;
/**@const {number} @nodts*/
Breakpoint.$ordinal_lg__org_patternfly_layout_Breakpoint = 3;
/**@const {number} @nodts*/
Breakpoint.$ordinal_xl__org_patternfly_layout_Breakpoint = 4;
/**@const {number} @nodts*/
Breakpoint.$ordinal__2xl__org_patternfly_layout_Breakpoint = 5;
/**@const {!Breakpoint} @nodts*/
Breakpoint.f_default___org_patternfly_layout_Breakpoint = /**@pureOrBreakMyCode*/ Breakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('default_'), Breakpoint.$ordinal_default___org_patternfly_layout_Breakpoint, 'default');
/**@const {!Breakpoint} @nodts*/
Breakpoint.f_sm__org_patternfly_layout_Breakpoint = /**@pureOrBreakMyCode*/ Breakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sm'), Breakpoint.$ordinal_sm__org_patternfly_layout_Breakpoint, 'sm');
/**@const {!Breakpoint} @nodts*/
Breakpoint.f_md__org_patternfly_layout_Breakpoint = /**@pureOrBreakMyCode*/ Breakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('md'), Breakpoint.$ordinal_md__org_patternfly_layout_Breakpoint, 'md');
/**@const {!Breakpoint} @nodts*/
Breakpoint.f_lg__org_patternfly_layout_Breakpoint = /**@pureOrBreakMyCode*/ Breakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('lg'), Breakpoint.$ordinal_lg__org_patternfly_layout_Breakpoint, 'lg');
/**@const {!Breakpoint} @nodts*/
Breakpoint.f_xl__org_patternfly_layout_Breakpoint = /**@pureOrBreakMyCode*/ Breakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('xl'), Breakpoint.$ordinal_xl__org_patternfly_layout_Breakpoint, 'xl');
/**@const {!Breakpoint} @nodts*/
Breakpoint.f__2xl__org_patternfly_layout_Breakpoint = /**@pureOrBreakMyCode*/ Breakpoint.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('_2xl'), Breakpoint.$ordinal__2xl__org_patternfly_layout_Breakpoint, '2xl');
/**@type {Map<?string, !Breakpoint>} @nodts*/
Breakpoint.f_namesToValuesMap__org_patternfly_layout_Breakpoint_;
$Util.$setClassMetadataForEnum(Breakpoint, 'org.patternfly.layout.Breakpoint');

exports = Breakpoint;

//# sourceMappingURL=Breakpoint.js.map

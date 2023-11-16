goog.module('org.patternfly.core.PatternFly.Strategy$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<Strategy>}
 */
class Strategy extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Strategy} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Strategy();
  $instance.$ctor__org_patternfly_core_PatternFly_Strategy__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_PatternFly_Strategy__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!Strategy} */
 static m_valueOf__java_lang_String__org_patternfly_core_PatternFly_Strategy(/** string */ name) {
  Strategy.$clinit();
  if ($Equality.$same(Strategy.f_namesToValuesMap__org_patternfly_core_PatternFly_Strategy_, null)) {
   Strategy.f_namesToValuesMap__org_patternfly_core_PatternFly_Strategy_ = /**@type {Map<?string, !Strategy>}*/ ($Enums.createMapFromValues(Strategy.m_values__arrayOf_org_patternfly_core_PatternFly_Strategy()));
  }
  return /**@type {Strategy}*/ ($Enums.getValueFromNameAndMap(name, Strategy.f_namesToValuesMap__org_patternfly_core_PatternFly_Strategy_));
 }
 /** @nodts @return {!Array<!Strategy>} */
 static m_values__arrayOf_org_patternfly_core_PatternFly_Strategy() {
  Strategy.$clinit();
  return /**@type {!Array<Strategy>}*/ ($Arrays.$init([Strategy.f_APPEND_REMOVE__org_patternfly_core_PatternFly_Strategy, Strategy.f_SHOW_HIDE__org_patternfly_core_PatternFly_Strategy], Strategy));
 }
 /** @nodts */
 static $clinit() {
  Strategy.$clinit = () =>{};
  Strategy.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Strategy;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
Strategy.$ordinal_APPEND_REMOVE__org_patternfly_core_PatternFly_Strategy = 0;
/**@const {number} @nodts*/
Strategy.$ordinal_SHOW_HIDE__org_patternfly_core_PatternFly_Strategy = 1;
/**@const {!Strategy} @nodts*/
Strategy.f_APPEND_REMOVE__org_patternfly_core_PatternFly_Strategy = /**@pureOrBreakMyCode*/ Strategy.$create__java_lang_String__int($Util.$makeEnumName('APPEND_REMOVE'), Strategy.$ordinal_APPEND_REMOVE__org_patternfly_core_PatternFly_Strategy);
/**@const {!Strategy} @nodts*/
Strategy.f_SHOW_HIDE__org_patternfly_core_PatternFly_Strategy = /**@pureOrBreakMyCode*/ Strategy.$create__java_lang_String__int($Util.$makeEnumName('SHOW_HIDE'), Strategy.$ordinal_SHOW_HIDE__org_patternfly_core_PatternFly_Strategy);
/**@type {Map<?string, !Strategy>} @nodts*/
Strategy.f_namesToValuesMap__org_patternfly_core_PatternFly_Strategy_;
$Util.$setClassMetadataForEnum(Strategy, 'org.patternfly.core.PatternFly$Strategy');

exports = Strategy;

//# sourceMappingURL=PatternFly$Strategy.js.map

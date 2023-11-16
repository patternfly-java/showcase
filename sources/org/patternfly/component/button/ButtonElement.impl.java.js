goog.module('org.patternfly.component.button.ButtonElement$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<ButtonElement>}
 */
class ButtonElement extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ButtonElement} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ButtonElement();
  $instance.$ctor__org_patternfly_component_button_ButtonElement__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_button_ButtonElement__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!ButtonElement} */
 static m_valueOf__java_lang_String__org_patternfly_component_button_ButtonElement(/** string */ name) {
  ButtonElement.$clinit();
  if ($Equality.$same(ButtonElement.f_namesToValuesMap__org_patternfly_component_button_ButtonElement_, null)) {
   ButtonElement.f_namesToValuesMap__org_patternfly_component_button_ButtonElement_ = /**@type {Map<?string, !ButtonElement>}*/ ($Enums.createMapFromValues(ButtonElement.m_values__arrayOf_org_patternfly_component_button_ButtonElement()));
  }
  return /**@type {ButtonElement}*/ ($Enums.getValueFromNameAndMap(name, ButtonElement.f_namesToValuesMap__org_patternfly_component_button_ButtonElement_));
 }
 /** @nodts @return {!Array<!ButtonElement>} */
 static m_values__arrayOf_org_patternfly_component_button_ButtonElement() {
  ButtonElement.$clinit();
  return /**@type {!Array<ButtonElement>}*/ ($Arrays.$init([ButtonElement.f_button__org_patternfly_component_button_ButtonElement, ButtonElement.f_link__org_patternfly_component_button_ButtonElement], ButtonElement));
 }
 /** @nodts */
 static $clinit() {
  ButtonElement.$clinit = () =>{};
  ButtonElement.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ButtonElement;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
ButtonElement.$ordinal_button__org_patternfly_component_button_ButtonElement = 0;
/**@const {number} @nodts*/
ButtonElement.$ordinal_link__org_patternfly_component_button_ButtonElement = 1;
/**@const {!ButtonElement} @nodts*/
ButtonElement.f_button__org_patternfly_component_button_ButtonElement = /**@pureOrBreakMyCode*/ ButtonElement.$create__java_lang_String__int($Util.$makeEnumName('button'), ButtonElement.$ordinal_button__org_patternfly_component_button_ButtonElement);
/**@const {!ButtonElement} @nodts*/
ButtonElement.f_link__org_patternfly_component_button_ButtonElement = /**@pureOrBreakMyCode*/ ButtonElement.$create__java_lang_String__int($Util.$makeEnumName('link'), ButtonElement.$ordinal_link__org_patternfly_component_button_ButtonElement);
/**@type {Map<?string, !ButtonElement>} @nodts*/
ButtonElement.f_namesToValuesMap__org_patternfly_component_button_ButtonElement_;
$Util.$setClassMetadataForEnum(ButtonElement, 'org.patternfly.component.button.ButtonElement');

exports = ButtonElement;

//# sourceMappingURL=ButtonElement.js.map

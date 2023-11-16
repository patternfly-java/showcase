goog.module('org.patternfly.component.Label$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Label>}
 * @deprecated
 */
class Label extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__org_patternfly_component_Label(/** ?string */ text) {
  Label.$clinit();
  return Label.$create__java_lang_String(text);
 }
 /** @nodts @return {Label} */
 static m_label__java_lang_String__boolean__org_patternfly_component_Label(/** ?string */ text, /** boolean */ compact) {
  Label.$clinit();
  return Label.$create__java_lang_String__boolean(text, compact);
 }
 //Factory method corresponding to constructor 'Label(String)'.
 /** @nodts @return {!Label} */
 static $create__java_lang_String(/** ?string */ text) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_patternfly_component_Label__java_lang_String__void(text);
  return $instance;
 }
 //Initialization from constructor 'Label(String)'.
 /** @nodts */
 $ctor__org_patternfly_component_Label__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_Label__java_lang_String__boolean__void(text, false);
 }
 //Factory method corresponding to constructor 'Label(String, boolean)'.
 /** @nodts @return {!Label} */
 static $create__java_lang_String__boolean(/** ?string */ text, /** boolean */ compact) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_patternfly_component_Label__java_lang_String__boolean__void(text, compact);
  return $instance;
 }
 //Initialization from constructor 'Label(String, boolean)'.
 /** @nodts */
 $ctor__org_patternfly_component_Label__java_lang_String__boolean__void(/** ?string */ text, /** boolean */ compact) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('label', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), 'Label');
  if (compact) {
   this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_compact__org_patternfly_layout_Classes));
  }
 }
 /** @nodts @return {Label} */
 m_that__org_patternfly_component_Label() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Label} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Label();
 }
 /** @nodts */
 static $clinit() {
  Label.$clinit = () =>{};
  Label.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Label;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Label, 'org.patternfly.component.Label');

exports = Label;

//# sourceMappingURL=Label.js.map

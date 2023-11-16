goog.module('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroup$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, TextInputGroupUtilities>}
 * @implements {ComponentReference<TextInputGroup>}
 */
class TextInputGroupUtilities extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TextInputGroup} @nodts*/
  this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupUtilities_;
 }
 /** @nodts @return {TextInputGroupUtilities} */
 static m_textInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities() {
  TextInputGroupUtilities.$clinit();
  return TextInputGroupUtilities.$create__();
 }
 /** @nodts @return {!TextInputGroupUtilities} */
 static $create__() {
  TextInputGroupUtilities.$clinit();
  let $instance = new TextInputGroupUtilities();
  $instance.$ctor__org_patternfly_component_textinputgroup_TextInputGroupUtilities__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_TextInputGroupUtilities__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_utilities__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_textinputgroup_TextInputGroup__void(/** TextInputGroup */ textInputGroup) {
  this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupUtilities_ = textInputGroup;
 }
 /** @nodts @return {TextInputGroup} */
 m_mainComponent__org_patternfly_component_textinputgroup_TextInputGroup() {
  return this.f_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroupUtilities_;
 }
 /** @nodts @return {TextInputGroupUtilities} */
 m_that__org_patternfly_component_textinputgroup_TextInputGroupUtilities() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_textinputgroup_TextInputGroup();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** TextInputGroup */ arg0) {
  this.m_passComponent__org_patternfly_component_textinputgroup_TextInputGroup__void(/**@type {TextInputGroup}*/ ($Casts.$to(arg0, TextInputGroup)));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroupUtilities} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_TextInputGroupUtilities();
 }
 /** @nodts */
 static $clinit() {
  TextInputGroupUtilities.$clinit = () =>{};
  TextInputGroupUtilities.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroupUtilities;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  TextInputGroup = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroup$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(TextInputGroupUtilities);
$Util.$setClassMetadata(TextInputGroupUtilities, 'org.patternfly.component.textinputgroup.TextInputGroupUtilities');

exports = TextInputGroupUtilities;

//# sourceMappingURL=TextInputGroupUtilities.js.map

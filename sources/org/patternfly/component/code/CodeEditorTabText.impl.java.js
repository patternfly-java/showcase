goog.module('org.patternfly.component.code.CodeEditorTabText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLElement, CodeEditorTabText>}
 */
class CodeEditorTabText extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CodeEditorTabText} */
 static m_codeEditorTabText__org_patternfly_component_code_CodeEditorTabText() {
  CodeEditorTabText.$clinit();
  return CodeEditorTabText.$create__java_lang_String(null);
 }
 /** @nodts @return {CodeEditorTabText} */
 static m_codeEditorTabText__java_lang_String__org_patternfly_component_code_CodeEditorTabText(/** ?string */ text) {
  CodeEditorTabText.$clinit();
  return CodeEditorTabText.$create__java_lang_String(text);
 }
 /** @nodts @return {!CodeEditorTabText} */
 static $create__java_lang_String(/** ?string */ text) {
  CodeEditorTabText.$clinit();
  let $instance = new CodeEditorTabText();
  $instance.$ctor__org_patternfly_component_code_CodeEditorTabText__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorTabText__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tab__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(text, null)) {
   this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  }
 }
 /** @nodts @return {CodeEditorTabText} */
 m_that__org_patternfly_component_code_CodeEditorTabText() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorTabText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorTabText();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorTabText.$clinit = () =>{};
  CodeEditorTabText.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorTabText;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CodeEditorTabText, 'org.patternfly.component.code.CodeEditorTabText');

exports = CodeEditorTabText;

//# sourceMappingURL=CodeEditorTabText.js.map

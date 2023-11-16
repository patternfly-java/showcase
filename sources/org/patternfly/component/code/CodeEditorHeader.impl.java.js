goog.module('org.patternfly.component.code.CodeEditorHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let CodeEditorActions = goog.forwardDeclare('org.patternfly.component.code.CodeEditorActions$impl');
let CodeEditorHeaderMain = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeaderMain$impl');
let CodeEditorLinks = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLinks$impl');
let CodeEditorTab = goog.forwardDeclare('org.patternfly.component.code.CodeEditorTab$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CodeEditorHeader>}
 * @implements {ComponentReference<CodeEditor>}
 */
class CodeEditorHeader extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CodeEditorActions} @nodts*/
  this.f_actions__org_patternfly_component_code_CodeEditorHeader;
  /**@type {CodeEditorLinks} @nodts*/
  this.f_links__org_patternfly_component_code_CodeEditorHeader;
  /**@type {CodeEditor} @nodts*/
  this.f_codeEditor__org_patternfly_component_code_CodeEditorHeader_;
 }
 /** @nodts @return {CodeEditorHeader} */
 static m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader() {
  CodeEditorHeader.$clinit();
  return CodeEditorHeader.$create__();
 }
 /** @nodts @return {!CodeEditorHeader} */
 static $create__() {
  CodeEditorHeader.$clinit();
  let $instance = new CodeEditorHeader();
  $instance.$ctor__org_patternfly_component_code_CodeEditorHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorHeader__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_code_CodeEditor__void(/** CodeEditor */ codeEditor) {
  this.f_codeEditor__org_patternfly_component_code_CodeEditorHeader_ = codeEditor;
  if (!$Equality.$same(this.f_actions__org_patternfly_component_code_CodeEditorHeader, null)) {
   this.f_actions__org_patternfly_component_code_CodeEditorHeader.m_passComponent__org_patternfly_component_code_CodeEditor__void(codeEditor);
  }
  if (!$Equality.$same(this.f_links__org_patternfly_component_code_CodeEditorHeader, null)) {
   this.f_links__org_patternfly_component_code_CodeEditorHeader.m_passComponent__org_patternfly_component_code_CodeEditor__void(codeEditor);
  }
 }
 /** @nodts @return {CodeEditor} */
 m_mainComponent__org_patternfly_component_code_CodeEditor() {
  return this.f_codeEditor__org_patternfly_component_code_CodeEditorHeader_;
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorActions */ actions) {
  return this.m_add__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(actions);
 }
 /** @nodts @return {CodeEditorHeader} */
 m_add__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorActions */ actions) {
  this.f_actions__org_patternfly_component_code_CodeEditorHeader = actions;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(actions.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addMain__org_patternfly_component_code_CodeEditorHeaderMain__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorHeaderMain */ main) {
  return /**@type {CodeEditorHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(main), CodeEditorHeader));
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addLinks__org_patternfly_component_code_CodeEditorLinks__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorLinks */ links) {
  return this.m_add__org_patternfly_component_code_CodeEditorLinks__org_patternfly_component_code_CodeEditorHeader(links);
 }
 /** @nodts @return {CodeEditorHeader} */
 m_add__org_patternfly_component_code_CodeEditorLinks__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorLinks */ links) {
  this.f_links__org_patternfly_component_code_CodeEditorHeader = links;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(links.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {CodeEditorHeader} */
 m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(/** CodeEditorTab */ tab) {
  return /**@type {CodeEditorHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tab), CodeEditorHeader));
 }
 /** @nodts @return {CodeEditorHeader} */
 m_that__org_patternfly_component_code_CodeEditorHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditor} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_code_CodeEditor();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** CodeEditor */ arg0) {
  this.m_passComponent__org_patternfly_component_code_CodeEditor__void(/**@type {CodeEditor}*/ ($Casts.$to(arg0, CodeEditor)));
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeEditorHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorHeader();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorHeader.$clinit = () =>{};
  CodeEditorHeader.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CodeEditorHeader);
$Util.$setClassMetadata(CodeEditorHeader, 'org.patternfly.component.code.CodeEditorHeader');

exports = CodeEditorHeader;

//# sourceMappingURL=CodeEditorHeader.js.map

goog.module('org.patternfly.component.code.CodeBlockHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeBlock = goog.forwardDeclare('org.patternfly.component.code.CodeBlock$impl');
let CodeBlockActions = goog.forwardDeclare('org.patternfly.component.code.CodeBlockActions$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CodeBlockHeader>}
 * @implements {ComponentReference<CodeBlock>}
 */
class CodeBlockHeader extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CodeBlockActions} @nodts*/
  this.f_actions__org_patternfly_component_code_CodeBlockHeader;
  /**@type {CodeBlock} @nodts*/
  this.f_codeBlock__org_patternfly_component_code_CodeBlockHeader_;
 }
 /** @nodts @return {CodeBlockHeader} */
 static m_codeBlockHeader__org_patternfly_component_code_CodeBlockHeader() {
  CodeBlockHeader.$clinit();
  return CodeBlockHeader.$create__();
 }
 /** @nodts @return {!CodeBlockHeader} */
 static $create__() {
  CodeBlockHeader.$clinit();
  let $instance = new CodeBlockHeader();
  $instance.$ctor__org_patternfly_component_code_CodeBlockHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeBlockHeader__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_code_CodeBlock__void(/** CodeBlock */ codeBlock) {
  this.f_codeBlock__org_patternfly_component_code_CodeBlockHeader_ = codeBlock;
  if (!$Equality.$same(this.f_actions__org_patternfly_component_code_CodeBlockHeader, null)) {
   this.f_actions__org_patternfly_component_code_CodeBlockHeader.m_passComponent__org_patternfly_component_code_CodeBlock__void(codeBlock);
  }
 }
 /** @nodts @return {CodeBlock} */
 m_mainComponent__org_patternfly_component_code_CodeBlock() {
  return this.f_codeBlock__org_patternfly_component_code_CodeBlockHeader_;
 }
 /** @nodts @return {CodeBlockHeader} */
 m_addActions__org_patternfly_component_code_CodeBlockActions__org_patternfly_component_code_CodeBlockHeader(/** CodeBlockActions */ actions) {
  return this.m_add__org_patternfly_component_code_CodeBlockActions__org_patternfly_component_code_CodeBlockHeader(actions);
 }
 /** @nodts @return {CodeBlockHeader} */
 m_add__org_patternfly_component_code_CodeBlockActions__org_patternfly_component_code_CodeBlockHeader(/** CodeBlockActions */ actions) {
  this.f_actions__org_patternfly_component_code_CodeBlockHeader = actions;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(actions.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {CodeBlockHeader} */
 m_that__org_patternfly_component_code_CodeBlockHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlock} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_code_CodeBlock();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** CodeBlock */ arg0) {
  this.m_passComponent__org_patternfly_component_code_CodeBlock__void(/**@type {CodeBlock}*/ ($Casts.$to(arg0, CodeBlock)));
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlockHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeBlockHeader();
 }
 /** @nodts */
 static $clinit() {
  CodeBlockHeader.$clinit = () =>{};
  CodeBlockHeader.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeBlock = goog.module.get('org.patternfly.component.code.CodeBlock$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CodeBlockHeader);
$Util.$setClassMetadata(CodeBlockHeader, 'org.patternfly.component.code.CodeBlockHeader');

exports = CodeBlockHeader;

//# sourceMappingURL=CodeBlockHeader.js.map

goog.module('org.patternfly.component.code.CodeBlockActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeBlock = goog.forwardDeclare('org.patternfly.component.code.CodeBlock$impl');
let CodeBlockAction = goog.forwardDeclare('org.patternfly.component.code.CodeBlockAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CodeBlockActions>}
 * @implements {ComponentReference<CodeBlock>}
 */
class CodeBlockActions extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<CodeBlockAction>} @nodts*/
  this.f_actions__org_patternfly_component_code_CodeBlockActions_;
  /**@type {CodeBlock} @nodts*/
  this.f_codeBlock__org_patternfly_component_code_CodeBlockActions_;
 }
 /** @nodts @return {CodeBlockActions} */
 static m_codeBlockActions__org_patternfly_component_code_CodeBlockActions() {
  CodeBlockActions.$clinit();
  return CodeBlockActions.$create__();
 }
 /** @nodts @return {!CodeBlockActions} */
 static $create__() {
  CodeBlockActions.$clinit();
  let $instance = new CodeBlockActions();
  $instance.$ctor__org_patternfly_component_code_CodeBlockActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeBlockActions__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_actions__org_patternfly_component_code_CodeBlockActions_ = /**@type {!ArrayList<CodeBlockAction>}*/ (ArrayList.$create__());
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_code_CodeBlock__void(/** CodeBlock */ codeBlock) {
  this.f_codeBlock__org_patternfly_component_code_CodeBlockActions_ = codeBlock;
  for (let $iterator = this.f_actions__org_patternfly_component_code_CodeBlockActions_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let action = /**@type {CodeBlockAction}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), CodeBlockAction));
   {
    action.m_passComponent__org_patternfly_component_code_CodeBlock__void(codeBlock);
   }
  }
 }
 /** @nodts @return {CodeBlock} */
 m_mainComponent__org_patternfly_component_code_CodeBlock() {
  return this.f_codeBlock__org_patternfly_component_code_CodeBlockActions_;
 }
 /** @nodts @return {CodeBlockActions} */
 m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlockActions(/** CodeBlockAction */ action) {
  return this.m_add__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlockActions(action);
 }
 /** @nodts @return {CodeBlockActions} */
 m_add__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlockActions(/** CodeBlockAction */ action) {
  this.f_actions__org_patternfly_component_code_CodeBlockActions_.add(action);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(action.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {CodeBlockActions} */
 m_that__org_patternfly_component_code_CodeBlockActions() {
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
 /** @final @override @nodts @return {CodeBlockActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeBlockActions();
 }
 /** @nodts */
 static $clinit() {
  CodeBlockActions.$clinit = () =>{};
  CodeBlockActions.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockActions;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeBlock = goog.module.get('org.patternfly.component.code.CodeBlock$impl');
  CodeBlockAction = goog.module.get('org.patternfly.component.code.CodeBlockAction$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CodeBlockActions);
$Util.$setClassMetadata(CodeBlockActions, 'org.patternfly.component.code.CodeBlockActions');

exports = CodeBlockActions;

//# sourceMappingURL=CodeBlockActions.js.map

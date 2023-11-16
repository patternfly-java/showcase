goog.module('org.patternfly.component.code.CodeEditorActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let CodeEditorAction = goog.forwardDeclare('org.patternfly.component.code.CodeEditorAction$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CodeEditorActions>}
 * @implements {ComponentReference<CodeEditor>}
 */
class CodeEditorActions extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<CodeEditorAction>} @nodts*/
  this.f_actions__org_patternfly_component_code_CodeEditorActions_;
  /**@type {CodeEditor} @nodts*/
  this.f_codeEditor__org_patternfly_component_code_CodeEditorActions_;
 }
 /** @nodts @return {CodeEditorActions} */
 static m_codeEditorActions__org_patternfly_component_code_CodeEditorActions() {
  CodeEditorActions.$clinit();
  return CodeEditorActions.$create__();
 }
 /** @nodts @return {!CodeEditorActions} */
 static $create__() {
  CodeEditorActions.$clinit();
  let $instance = new CodeEditorActions();
  $instance.$ctor__org_patternfly_component_code_CodeEditorActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorActions__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_controls__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_actions__org_patternfly_component_code_CodeEditorActions_ = /**@type {!ArrayList<CodeEditorAction>}*/ (ArrayList.$create__());
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_code_CodeEditor__void(/** CodeEditor */ codeEditor) {
  this.f_codeEditor__org_patternfly_component_code_CodeEditorActions_ = codeEditor;
  for (let $iterator = this.f_actions__org_patternfly_component_code_CodeEditorActions_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let action = /**@type {CodeEditorAction}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), CodeEditorAction));
   {
    action.m_passComponent__org_patternfly_component_code_CodeEditor__void(codeEditor);
   }
  }
 }
 /** @nodts @return {CodeEditor} */
 m_mainComponent__org_patternfly_component_code_CodeEditor() {
  return this.f_codeEditor__org_patternfly_component_code_CodeEditorActions_;
 }
 /** @nodts @return {CodeEditorActions} */
 m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(/** CodeEditorAction */ action) {
  return this.m_add__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(action);
 }
 /** @nodts @return {CodeEditorActions} */
 m_add__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(/** CodeEditorAction */ action) {
  this.f_actions__org_patternfly_component_code_CodeEditorActions_.add(action);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(action.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {CodeEditorActions} */
 m_that__org_patternfly_component_code_CodeEditorActions() {
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
 /** @final @override @nodts @return {CodeEditorActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorActions();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorActions.$clinit = () =>{};
  CodeEditorActions.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorActions;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  CodeEditorAction = goog.module.get('org.patternfly.component.code.CodeEditorAction$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CodeEditorActions);
$Util.$setClassMetadata(CodeEditorActions, 'org.patternfly.component.code.CodeEditorActions');

exports = CodeEditorActions;

//# sourceMappingURL=CodeEditorActions.js.map

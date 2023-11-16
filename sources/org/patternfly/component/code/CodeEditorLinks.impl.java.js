goog.module('org.patternfly.component.code.CodeEditorLinks$impl');

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
let CodeEditorLink = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLink$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CodeEditorLinks>}
 * @implements {ComponentReference<CodeEditor>}
 */
class CodeEditorLinks extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<CodeEditorLink>} @nodts*/
  this.f_links__org_patternfly_component_code_CodeEditorLinks_;
  /**@type {CodeEditor} @nodts*/
  this.f_codeEditor__org_patternfly_component_code_CodeEditorLinks_;
 }
 /** @nodts @return {CodeEditorLinks} */
 static m_codeEditorLinks__org_patternfly_component_code_CodeEditorLinks() {
  CodeEditorLinks.$clinit();
  return CodeEditorLinks.$create__();
 }
 /** @nodts @return {!CodeEditorLinks} */
 static $create__() {
  CodeEditorLinks.$clinit();
  let $instance = new CodeEditorLinks();
  $instance.$ctor__org_patternfly_component_code_CodeEditorLinks__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorLinks__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_keyboard__org_patternfly_layout_Classes, Classes.f_shortcuts__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_links__org_patternfly_component_code_CodeEditorLinks_ = /**@type {!ArrayList<CodeEditorLink>}*/ (ArrayList.$create__());
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_code_CodeEditor__void(/** CodeEditor */ codeEditor) {
  this.f_codeEditor__org_patternfly_component_code_CodeEditorLinks_ = codeEditor;
  for (let $iterator = this.f_links__org_patternfly_component_code_CodeEditorLinks_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let link = /**@type {CodeEditorLink}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), CodeEditorLink));
   {
    link.m_passComponent__org_patternfly_component_code_CodeEditor__void(codeEditor);
   }
  }
 }
 /** @nodts @return {CodeEditor} */
 m_mainComponent__org_patternfly_component_code_CodeEditor() {
  return this.f_codeEditor__org_patternfly_component_code_CodeEditorLinks_;
 }
 /** @nodts @return {CodeEditorLinks} */
 m_addLink__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_code_CodeEditorLinks(/** CodeEditorLink */ link) {
  return this.m_add__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_code_CodeEditorLinks(link);
 }
 /** @nodts @return {CodeEditorLinks} */
 m_add__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_code_CodeEditorLinks(/** CodeEditorLink */ link) {
  this.f_links__org_patternfly_component_code_CodeEditorLinks_.add(link);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(link.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {CodeEditorLinks} */
 m_that__org_patternfly_component_code_CodeEditorLinks() {
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
 /** @final @override @nodts @return {CodeEditorLinks} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorLinks();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorLinks.$clinit = () =>{};
  CodeEditorLinks.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorLinks;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  CodeEditorLink = goog.module.get('org.patternfly.component.code.CodeEditorLink$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CodeEditorLinks);
$Util.$setClassMetadata(CodeEditorLinks, 'org.patternfly.component.code.CodeEditorLinks');

exports = CodeEditorLinks;

//# sourceMappingURL=CodeEditorLinks.js.map

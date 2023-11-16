goog.module('org.patternfly.component.code.CodeEditorAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('org.patternfly.dom.DomGlobal.$Overlay$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLElement, CodeEditorAction>}
 * @implements {ComponentReference<CodeEditor>}
 */
class CodeEditorAction extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_buttonElement__org_patternfly_component_code_CodeEditorAction_;
  /**@type {ComponentHandler<CodeEditorAction>} @nodts*/
  this.f_handler__org_patternfly_component_code_CodeEditorAction_;
  /**@type {CodeEditor} @nodts*/
  this.f_codeEditor__org_patternfly_component_code_CodeEditorAction_;
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(/** PredefinedIcon */ icon) {
  CodeEditorAction.$clinit();
  return CodeEditorAction.$create__org_patternfly_component_button_Button(Button.m_button__org_patternfly_layout_PredefinedIcon__org_patternfly_component_button_Button(icon).m_control__org_patternfly_component_button_Button());
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorAction__java_lang_String__org_patternfly_component_code_CodeEditorAction(/** ?string */ iconClass) {
  CodeEditorAction.$clinit();
  return CodeEditorAction.$create__org_patternfly_component_button_Button(Button.m_button__org_patternfly_component_button_Button().m_addIcon__java_lang_String__org_patternfly_component_button_Button(iconClass).m_control__org_patternfly_component_button_Button());
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/** Button */ button) {
  CodeEditorAction.$clinit();
  return CodeEditorAction.$create__org_patternfly_component_button_Button(button);
 }
 /** @nodts @return {CodeEditorAction} */
 static m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction() {
  CodeEditorAction.$clinit();
  return CodeEditorAction.$create__org_patternfly_component_button_Button(Button.m_button__org_patternfly_layout_PredefinedIcon__org_patternfly_component_button_Button(PredefinedIcon.f_copy__org_patternfly_layout_PredefinedIcon).m_control__org_patternfly_component_button_Button()).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeEditorAction('Copy to clipboard').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event, action) =>{
   let action_1 = /**@type {CodeEditorAction}*/ ($Casts.$to(action, CodeEditorAction));
   DomGlobal_$Overlay.f_navigator__org_patternfly_dom_DomGlobal_$Overlay.clipboard.writeText(action_1.m_mainComponent__org_patternfly_component_code_CodeEditor().m_code__java_lang_String());
  }));
 }
 /** @nodts @return {!CodeEditorAction} */
 static $create__org_patternfly_component_button_Button(/** Button */ button) {
  CodeEditorAction.$clinit();
  let $instance = new CodeEditorAction();
  $instance.$ctor__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_button_Button__void(button);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_button_Button__void(/** Button */ button) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(button.m_element__elemental2_dom_HTMLElement());
  this.f_buttonElement__org_patternfly_component_code_CodeEditorAction_ = this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_code_CodeEditor__void(/** CodeEditor */ codeEditor) {
  this.f_codeEditor__org_patternfly_component_code_CodeEditorAction_ = codeEditor;
  if (!$Equality.$same(this.f_handler__org_patternfly_component_code_CodeEditorAction_, null) && !$Equality.$same(this.f_buttonElement__org_patternfly_component_code_CodeEditorAction_, null)) {
   this.f_buttonElement__org_patternfly_component_code_CodeEditorAction_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    this.f_handler__org_patternfly_component_code_CodeEditorAction_.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
   }));
  }
 }
 /** @nodts @return {CodeEditor} */
 m_mainComponent__org_patternfly_component_code_CodeEditor() {
  return this.f_codeEditor__org_patternfly_component_code_CodeEditorAction_;
 }
 /** @nodts @return {CodeEditorAction} */
 m_that__org_patternfly_component_code_CodeEditorAction() {
  return this;
 }
 /** @nodts @return {CodeEditorAction} */
 m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeEditorAction(/** ?string */ label) {
  if (!$Equality.$same(this.f_buttonElement__org_patternfly_component_code_CodeEditorAction_, null)) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_buttonElement__org_patternfly_component_code_CodeEditorAction_, Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {CodeEditorAction} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(/** ComponentHandler<CodeEditorAction> */ handler) {
  this.f_handler__org_patternfly_component_code_CodeEditorAction_ = handler;
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
 /** @final @override @nodts @return {CodeEditorAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeEditorAction();
 }
 /** @nodts */
 static $clinit() {
  CodeEditorAction.$clinit = () =>{};
  CodeEditorAction.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorAction;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  DomGlobal_$Overlay = goog.module.get('org.patternfly.dom.DomGlobal.$Overlay$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CodeEditorAction);
$Util.$setClassMetadata(CodeEditorAction, 'org.patternfly.component.code.CodeEditorAction');

exports = CodeEditorAction;

//# sourceMappingURL=CodeEditorAction.js.map

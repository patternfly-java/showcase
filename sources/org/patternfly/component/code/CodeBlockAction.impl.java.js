goog.module('org.patternfly.component.code.CodeBlockAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeBlock = goog.forwardDeclare('org.patternfly.component.code.CodeBlock$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('org.patternfly.dom.DomGlobal.$Overlay$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CodeBlockAction>}
 * @implements {ComponentReference<CodeBlock>}
 */
class CodeBlockAction extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_buttonElement__org_patternfly_component_code_CodeBlockAction_;
  /**@type {ComponentHandler<CodeBlockAction>} @nodts*/
  this.f_handler__org_patternfly_component_code_CodeBlockAction_;
  /**@type {CodeBlock} @nodts*/
  this.f_codeBlock__org_patternfly_component_code_CodeBlockAction_;
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockAction__org_patternfly_component_code_CodeBlockAction() {
  CodeBlockAction.$clinit();
  return CodeBlockAction.$create__java_lang_String(null);
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeBlockAction(/** PredefinedIcon */ icon) {
  CodeBlockAction.$clinit();
  return CodeBlockAction.$create__java_lang_String(icon.f_className__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockAction__java_lang_String__org_patternfly_component_code_CodeBlockAction(/** ?string */ iconClass) {
  CodeBlockAction.$clinit();
  return CodeBlockAction.$create__java_lang_String(iconClass);
 }
 /** @nodts @return {CodeBlockAction} */
 static m_codeBlockCopyToClipboardAction__org_patternfly_component_code_CodeBlockAction() {
  CodeBlockAction.$clinit();
  return CodeBlockAction.$create__java_lang_String(PredefinedIcon.f_copy__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction('Copy to clipboard').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(ComponentHandler.$adapt((/** Event */ event, action) =>{
   let action_1 = /**@type {CodeBlockAction}*/ ($Casts.$to(action, CodeBlockAction));
   DomGlobal_$Overlay.f_navigator__org_patternfly_dom_DomGlobal_$Overlay.clipboard.writeText(action_1.m_mainComponent__org_patternfly_component_code_CodeBlock().m_code__java_lang_String());
  }));
 }
 /** @nodts @return {!CodeBlockAction} */
 static $create__java_lang_String(/** ?string */ iconClass) {
  CodeBlockAction.$clinit();
  let $instance = new CodeBlockAction();
  $instance.$ctor__org_patternfly_component_code_CodeBlockAction__java_lang_String__void(iconClass);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeBlockAction__java_lang_String__void(/** ?string */ iconClass) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (!$Equality.$same(iconClass, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_buttonElement__org_patternfly_component_code_CodeBlockAction_ = /**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_addIcon__java_lang_String__org_patternfly_component_button_Button(iconClass).m_element__elemental2_dom_HTMLElement());
  }
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_code_CodeBlock__void(/** CodeBlock */ codeBlock) {
  this.f_codeBlock__org_patternfly_component_code_CodeBlockAction_ = codeBlock;
  if (!$Equality.$same(this.f_handler__org_patternfly_component_code_CodeBlockAction_, null) && !$Equality.$same(this.f_buttonElement__org_patternfly_component_code_CodeBlockAction_, null)) {
   this.f_buttonElement__org_patternfly_component_code_CodeBlockAction_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    this.f_handler__org_patternfly_component_code_CodeBlockAction_.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
   }));
  }
 }
 /** @nodts @return {CodeBlock} */
 m_mainComponent__org_patternfly_component_code_CodeBlock() {
  return this.f_codeBlock__org_patternfly_component_code_CodeBlockAction_;
 }
 /** @nodts @return {CodeBlockAction} */
 m_that__org_patternfly_component_code_CodeBlockAction() {
  return this;
 }
 /** @nodts @return {CodeBlockAction} */
 m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction(/** ?string */ label) {
  if (!$Equality.$same(this.f_buttonElement__org_patternfly_component_code_CodeBlockAction_, null)) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_buttonElement__org_patternfly_component_code_CodeBlockAction_, Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {CodeBlockAction} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(/** ComponentHandler<CodeBlockAction> */ handler) {
  this.f_handler__org_patternfly_component_code_CodeBlockAction_ = handler;
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
 /** @final @override @nodts @return {CodeBlockAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeBlockAction();
 }
 /** @nodts */
 static $clinit() {
  CodeBlockAction.$clinit = () =>{};
  CodeBlockAction.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockAction;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeBlock = goog.module.get('org.patternfly.component.code.CodeBlock$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  DomGlobal_$Overlay = goog.module.get('org.patternfly.dom.DomGlobal.$Overlay$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CodeBlockAction);
$Util.$setClassMetadata(CodeBlockAction, 'org.patternfly.component.code.CodeBlockAction');

exports = CodeBlockAction;

//# sourceMappingURL=CodeBlockAction.js.map

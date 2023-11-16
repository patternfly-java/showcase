goog.module('org.patternfly.showcase.component.CodeEditorComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let CodeEditorAction = goog.forwardDeclare('org.patternfly.component.code.CodeEditorAction$impl');
let CodeEditorActions = goog.forwardDeclare('org.patternfly.component.code.CodeEditorActions$impl');
let CodeEditorHeader = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeader$impl');
let CodeEditorHeaderMain = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeaderMain$impl');
let CodeEditorLink = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLink$impl');
let CodeEditorLinks = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLinks$impl');
let CodeEditorTab = goog.forwardDeclare('org.patternfly.component.code.CodeEditorTab$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CodeEditorComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CodeEditorComponent} */
 static $create__() {
  CodeEditorComponent.$clinit();
  let $instance = new CodeEditorComponent();
  $instance.$ctor__org_patternfly_showcase_component_CodeEditorComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_CodeEditorComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Code editor', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/code/CodeEditor.html', 'https://www.patternfly.org/components/code-editor/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A code editor is a versatile text editor that allows for editing various languages. '), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-editor-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(PredefinedIcon.f_download__org_patternfly_layout_PredefinedIcon)).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(PredefinedIcon.f_upload__org_patternfly_layout_PredefinedIcon))).m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(PredefinedIcon.f_code__org_patternfly_layout_PredefinedIcon, 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-readonly', 'Readonly', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-editor-readonly'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {CodeEditor}*/ ($Casts.$to(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_readonly__org_jboss_elemento_TypedBuilder(), CodeEditor)).m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(PredefinedIcon.f_download__org_patternfly_layout_PredefinedIcon)).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_layout_PredefinedIcon__org_patternfly_component_button_Button(PredefinedIcon.f_upload__org_patternfly_layout_PredefinedIcon).m_control__org_patternfly_component_button_Button().m_disabled__org_jboss_elemento_TypedBuilder(), Button))))).m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(PredefinedIcon.f_code__org_patternfly_layout_PredefinedIcon, 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-no-actions', 'Without actions', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-editor-no-actions'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(PredefinedIcon.f_code__org_patternfly_layout_PredefinedIcon, 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-no-tab', 'Without tab', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-editor-no-tab'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(PredefinedIcon.f_download__org_patternfly_layout_PredefinedIcon)).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_layout_PredefinedIcon__org_patternfly_component_button_Button(PredefinedIcon.f_upload__org_patternfly_layout_PredefinedIcon).m_control__org_patternfly_component_button_Button().m_disabled__org_jboss_elemento_TypedBuilder(), Button)))))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-no-actions-no-tab', 'Without actions and tab', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-editor-no-actions-no-tab'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-header-content', 'With optional header content and keyboard shortcuts', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-editor-header-content'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(PredefinedIcon.f_download__org_patternfly_layout_PredefinedIcon)).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(PredefinedIcon.f_upload__org_patternfly_layout_PredefinedIcon))).m_addMain__org_patternfly_component_code_CodeEditorHeaderMain__org_patternfly_component_code_CodeEditorHeader(/**@type {CodeEditorHeaderMain}*/ ($Casts.$to(CodeEditorHeaderMain.m_codeEditorHeaderMain__org_patternfly_component_code_CodeEditorHeaderMain().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Header main content'), CodeEditorHeaderMain))).m_addLinks__org_patternfly_component_code_CodeEditorLinks__org_patternfly_component_code_CodeEditorHeader(CodeEditorLinks.m_codeEditorLinks__org_patternfly_component_code_CodeEditorLinks().m_addLink__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_code_CodeEditorLinks(CodeEditorLink.m_codeEditorViewShortcutsLink__org_patternfly_component_code_CodeEditorLink())).m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(PredefinedIcon.f_code__org_patternfly_layout_PredefinedIcon, 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  CodeEditorComponent.$clinit = () =>{};
  CodeEditorComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  CodeEditorAction = goog.module.get('org.patternfly.component.code.CodeEditorAction$impl');
  CodeEditorActions = goog.module.get('org.patternfly.component.code.CodeEditorActions$impl');
  CodeEditorHeader = goog.module.get('org.patternfly.component.code.CodeEditorHeader$impl');
  CodeEditorHeaderMain = goog.module.get('org.patternfly.component.code.CodeEditorHeaderMain$impl');
  CodeEditorLink = goog.module.get('org.patternfly.component.code.CodeEditorLink$impl');
  CodeEditorLinks = goog.module.get('org.patternfly.component.code.CodeEditorLinks$impl');
  CodeEditorTab = goog.module.get('org.patternfly.component.code.CodeEditorTab$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_ = 'expandableSection()\n      .indented()\n      .addToggle(expandableSectionToggle(\"Show more\", \"Show less\"))\n      .addContent(expandableSectionContent()\n              .textContent(\"This content is visible only when the component is expanded.\"))';
$Util.$setClassMetadata(CodeEditorComponent, 'org.patternfly.showcase.component.CodeEditorComponent');

exports = CodeEditorComponent;

//# sourceMappingURL=CodeEditorComponent.js.map

goog.module('org.patternfly.showcase.component.CodeBlockComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeBlock = goog.forwardDeclare('org.patternfly.component.code.CodeBlock$impl');
let CodeBlockAction = goog.forwardDeclare('org.patternfly.component.code.CodeBlockAction$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CodeBlockComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CodeBlockComponent} */
 static $create__() {
  CodeBlockComponent.$clinit();
  let $instance = new CodeBlockComponent();
  $instance.$ctor__org_patternfly_showcase_component_CodeBlockComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_CodeBlockComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Code block', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/code/CodeBlock.html', 'https://www.patternfly.org/components/code-block/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A code block is a component that contains 2 or more lines of read-only code. The code in a code block can be copied to the clipboard.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-block-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-block-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeBlock.m_codeBlock__org_patternfly_component_code_CodeBlock().m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockCopyToClipboardAction__org_patternfly_component_code_CodeBlockAction()).m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeBlockAction(PredefinedIcon.f_play__org_patternfly_layout_PredefinedIcon).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction('Play').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(ComponentHandler.$adapt((/** Event */ action, codeBlock) =>{
    let codeBlock_1 = /**@type {CodeBlockAction}*/ ($Casts.$to(codeBlock, CodeBlockAction));
    goog.global.console.log('Play not yet implemented');
   }))).m_code__java_lang_String__org_patternfly_component_code_CodeBlock(CodeBlockComponent.f_CODE__org_patternfly_showcase_component_CodeBlockComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-block-expandable', 'Expandable', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('code-block-expandable'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeBlock.m_codeBlock__org_patternfly_component_code_CodeBlock().m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockCopyToClipboardAction__org_patternfly_component_code_CodeBlockAction()).m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeBlockAction(PredefinedIcon.f_play__org_patternfly_layout_PredefinedIcon).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction('Play').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(ComponentHandler.$adapt((/** Event */ action_1, codeBlock_2) =>{
    let codeBlock_3 = /**@type {CodeBlockAction}*/ ($Casts.$to(codeBlock_2, CodeBlockAction));
    goog.global.console.log('Play not yet implemented');
   }))).m_truncate__org_patternfly_component_code_CodeBlock().m_code__java_lang_String__org_patternfly_component_code_CodeBlock(CodeBlockComponent.f_CODE__org_patternfly_showcase_component_CodeBlockComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  CodeBlockComponent.$clinit = () =>{};
  CodeBlockComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeBlock = goog.module.get('org.patternfly.component.code.CodeBlock$impl');
  CodeBlockAction = goog.module.get('org.patternfly.component.code.CodeBlockAction$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeBlockComponent.f_CODE__org_patternfly_showcase_component_CodeBlockComponent_ = 'apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo0oooo00ooo\nspec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs';
$Util.$setClassMetadata(CodeBlockComponent, 'org.patternfly.showcase.component.CodeBlockComponent');

exports = CodeBlockComponent;

//# sourceMappingURL=CodeBlockComponent.js.map

goog.module('org.patternfly.showcase.layout.StackLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let StackItem = goog.forwardDeclare('org.patternfly.layout.stack.StackItem$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class StackLayout extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!StackLayout} */
 static $create__() {
  StackLayout.$clinit();
  let $instance = new StackLayout();
  $instance.$ctor__org_patternfly_showcase_layout_StackLayout__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_StackLayout__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Stack', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/stack/Stack.html', 'https://www.patternfly.org/layouts/stack/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('The stack layout positions items vertically, with one or more items filling the available vertical space.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('stack-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('stack-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-stack'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Stack.m_stack__org_patternfly_layout_stack_Stack().m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_fill__org_jboss_elemento_TypedBuilder(), StackItem)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('pf-m-fill'), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), StackItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('stack-gutter', 'With gutters', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('stack-gutter'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-stack'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Stack}*/ ($Casts.$to(Stack.m_stack__org_patternfly_layout_stack_Stack().m_gutter__org_jboss_elemento_TypedBuilder(), Stack)).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_fill__org_jboss_elemento_TypedBuilder(), StackItem)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('pf-m-fill'), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), StackItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  StackLayout.$clinit = () =>{};
  StackLayout.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackLayout;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Stack = goog.module.get('org.patternfly.layout.stack.Stack$impl');
  StackItem = goog.module.get('org.patternfly.layout.stack.StackItem$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(StackLayout, 'org.patternfly.showcase.layout.StackLayout');

exports = StackLayout;

//# sourceMappingURL=StackLayout.js.map

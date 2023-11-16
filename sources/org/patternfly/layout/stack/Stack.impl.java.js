goog.module('org.patternfly.layout.stack.Stack$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let StackItem = goog.forwardDeclare('org.patternfly.layout.stack.StackItem$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLDivElement, Stack>}
 */
class Stack extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Stack} */
 static m_stack__org_patternfly_layout_stack_Stack() {
  Stack.$clinit();
  return Stack.$create__();
 }
 /** @nodts @return {!Stack} */
 static $create__() {
  Stack.$clinit();
  let $instance = new Stack();
  $instance.$ctor__org_patternfly_layout_stack_Stack__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_stack_Stack__void() {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_stack__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Stack} */
 m_that__org_patternfly_layout_stack_Stack() {
  return this;
 }
 /** @nodts @return {Stack} */
 m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/** StackItem */ item) {
  return /**@type {Stack}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Stack));
 }
 /** @nodts @return {Stack} */
 m_gutter__org_patternfly_layout_stack_Stack() {
  return /**@type {Stack}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_gutter__org_patternfly_layout_Classes)], j_l_String))), Stack));
 }
 //Bridge method.
 /** @final @override @nodts @return {Stack} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_stack_Stack();
 }
 /** @nodts */
 static $clinit() {
  Stack.$clinit = () =>{};
  Stack.$loadModules();
  BaseLayout.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Stack;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Stack, 'org.patternfly.layout.stack.Stack');

exports = Stack;

//# sourceMappingURL=Stack.js.map

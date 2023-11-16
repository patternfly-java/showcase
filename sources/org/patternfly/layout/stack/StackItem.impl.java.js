goog.module('org.patternfly.layout.stack.StackItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Fill = goog.require('org.patternfly.core.Modifiers.Fill$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLDivElement, StackItem>}
 * @implements {Fill<HTMLDivElement, StackItem>}
 */
class StackItem extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {StackItem} */
 static m_stackItem__org_patternfly_layout_stack_StackItem() {
  StackItem.$clinit();
  return StackItem.$create__();
 }
 /** @nodts @return {!StackItem} */
 static $create__() {
  StackItem.$clinit();
  let $instance = new StackItem();
  $instance.$ctor__org_patternfly_layout_stack_StackItem__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_stack_StackItem__void() {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_stack__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {StackItem} */
 m_that__org_patternfly_layout_stack_StackItem() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {StackItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_stack_StackItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {StackItem} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {StackItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), StackItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {StackItem} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {StackItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), StackItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {StackItem} */
 m_fill__org_patternfly_layout_stack_StackItem() {
  return /**@type {StackItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), StackItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {StackItem} */
 m_fill__boolean__org_patternfly_layout_stack_StackItem(/** boolean */ arg0) {
  return /**@type {StackItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), StackItem));
 }
 /** @nodts */
 static $clinit() {
  StackItem.$clinit = () =>{};
  StackItem.$loadModules();
  BaseLayout.$clinit();
  Fill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackItem;
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
Fill.$markImplementor(StackItem);
$Util.$setClassMetadata(StackItem, 'org.patternfly.layout.stack.StackItem');

exports = StackItem;

//# sourceMappingURL=StackItem.js.map

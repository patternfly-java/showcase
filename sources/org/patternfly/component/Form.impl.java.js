goog.module('org.patternfly.component.Form$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLFormElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Group = goog.forwardDeclare('org.patternfly.component.Form.Group$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLFormElement, Form>}
 * @deprecated
 */
class Form extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Form} */
 static m_form__org_patternfly_component_Form() {
  Form.$clinit();
  return Form.$create__();
 }
 /** @nodts @return {Group} */
 static m_group__org_patternfly_component_Form_Group() {
  Form.$clinit();
  return Group.$create__();
 }
 /** @nodts @return {!Form} */
 static $create__() {
  Form.$clinit();
  let $instance = new Form();
  $instance.$ctor__org_patternfly_component_Form__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Form__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLFormElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLFormElement>}*/ ($Casts.$to(Elements.m_form__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_form__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), 'Form');
 }
 /** @nodts @return {Form} */
 m_that__org_patternfly_component_Form() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Form} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Form();
 }
 /** @nodts */
 static $clinit() {
  Form.$clinit = () =>{};
  Form.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Form;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLFormElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Group = goog.module.get('org.patternfly.component.Form.Group$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Form, 'org.patternfly.component.Form');

exports = Form;

//# sourceMappingURL=Form.js.map

goog.module('org.patternfly.component.OldPageMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, OldPageMain>}
 * @deprecated
 */
class OldPageMain extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!OldPageMain} */
 static $create__java_lang_String(/** ?string */ id) {
  OldPageMain.$clinit();
  let $instance = new OldPageMain();
  $instance.$ctor__org_patternfly_component_OldPageMain__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldPageMain__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_main__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLContainerBuilder)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init(['main'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', 'main'), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('tabindex', '-1'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), 'PageMain');
 }
 /** @nodts @return {OldPageMain} */
 m_that__org_patternfly_component_OldPageMain() {
  return this;
 }
 /** @nodts @return {OldPageMain} */
 m_replace__elemental2_dom_Node__org_patternfly_component_OldPageMain(/** Node */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  return /**@type {OldPageMain}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element), OldPageMain));
 }
 /** @nodts @return {OldPageMain} */
 m_replace__org_jboss_elemento_IsElement__org_patternfly_component_OldPageMain(/** IsElement<?> */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  return /**@type {OldPageMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(element), OldPageMain));
 }
 /** @nodts @return {OldPageMain} */
 m_replaceAll__arrayOf_elemental2_dom_Node__org_patternfly_component_OldPageMain(/** Array<Node> */ nodes) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  return /**@type {OldPageMain}*/ ($Casts.$to(this.m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(nodes), OldPageMain));
 }
 /** @nodts @return {OldPageMain} */
 m_replaceAll__arrayOf_elemental2_dom_Element__org_patternfly_component_OldPageMain(/** Array<Element> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  return /**@type {OldPageMain}*/ ($Casts.$to(this.m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(elements), OldPageMain));
 }
 /** @nodts @return {OldPageMain} */
 m_replaceAll__arrayOf_elemental2_dom_HTMLElement__org_patternfly_component_OldPageMain(/** Array<HTMLElement> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  return /**@type {OldPageMain}*/ ($Casts.$to(this.m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(elements), OldPageMain));
 }
 /** @nodts @return {OldPageMain} */
 m_replaceAll__arrayOf_org_jboss_elemento_IsElement__org_patternfly_component_OldPageMain(/** Array<IsElement<?>> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  return /**@type {OldPageMain}*/ ($Casts.$to(this.m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(elements), OldPageMain));
 }
 /** @nodts @return {OldPageMain} */
 m_replaceAll__java_lang_Iterable__org_patternfly_component_OldPageMain(/** Iterable<?> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  return /**@type {OldPageMain}*/ ($Casts.$to(this.m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(elements), OldPageMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {OldPageMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_OldPageMain();
 }
 /** @nodts */
 static $clinit() {
  OldPageMain.$clinit = () =>{};
  OldPageMain.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OldPageMain;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(OldPageMain, 'org.patternfly.component.OldPageMain');

exports = OldPageMain;

//# sourceMappingURL=OldPageMain.js.map

goog.module('org.patternfly.component.sidebar.SidebarBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');
const Fill = goog.require('org.patternfly.core.Modifiers.Fill$impl');
const NoFill = goog.require('org.patternfly.core.Modifiers.NoFill$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, SidebarBody>}
 * @implements {Fill<HTMLDivElement, SidebarBody>}
 * @implements {NoFill<HTMLDivElement, SidebarBody>}
 */
class SidebarBody extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {SidebarBody} */
 static m_sidebarBody__org_patternfly_component_sidebar_SidebarBody() {
  SidebarBody.$clinit();
  return SidebarBody.$create__();
 }
 /** @nodts @return {!SidebarBody} */
 static $create__() {
  SidebarBody.$clinit();
  let $instance = new SidebarBody();
  $instance.$ctor__org_patternfly_component_sidebar_SidebarBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_sidebar_SidebarBody__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sidebar__org_patternfly_layout_Classes, Classes.f_body__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {SidebarBody} */
 m_addNavigation__org_patternfly_component_navigation_Navigation__org_patternfly_component_sidebar_SidebarBody(/** Navigation */ navigation) {
  return /**@type {SidebarBody}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(navigation), SidebarBody));
 }
 /** @nodts @return {SidebarBody} */
 m_inset__org_patternfly_component_sidebar_SidebarBody() {
  return /**@type {SidebarBody}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_pageInsets__org_patternfly_layout_Classes)], j_l_String))), SidebarBody));
 }
 /** @nodts @return {SidebarBody} */
 m_noInset__org_patternfly_component_sidebar_SidebarBody() {
  return /**@type {SidebarBody}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_insetNone__org_patternfly_layout_Classes)], j_l_String))), SidebarBody));
 }
 /** @nodts @return {SidebarBody} */
 m_that__org_patternfly_component_sidebar_SidebarBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SidebarBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_sidebar_SidebarBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {SidebarBody} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {SidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), SidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {SidebarBody} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {SidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), SidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {SidebarBody} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {SidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), SidebarBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {SidebarBody} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {SidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), SidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {SidebarBody} */
 m_fill__org_patternfly_component_sidebar_SidebarBody() {
  return /**@type {SidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), SidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {SidebarBody} */
 m_fill__boolean__org_patternfly_component_sidebar_SidebarBody(/** boolean */ arg0) {
  return /**@type {SidebarBody}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), SidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {SidebarBody} */
 m_noFill__org_patternfly_component_sidebar_SidebarBody() {
  return /**@type {SidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), SidebarBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {SidebarBody} */
 m_noFill__boolean__org_patternfly_component_sidebar_SidebarBody(/** boolean */ arg0) {
  return /**@type {SidebarBody}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), SidebarBody));
 }
 /** @nodts */
 static $clinit() {
  SidebarBody.$clinit = () =>{};
  SidebarBody.$loadModules();
  SubComponent.$clinit();
  Fill.$clinit();
  NoFill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SidebarBody;
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
Fill.$markImplementor(SidebarBody);
NoFill.$markImplementor(SidebarBody);
$Util.$setClassMetadata(SidebarBody, 'org.patternfly.component.sidebar.SidebarBody');

exports = SidebarBody;

//# sourceMappingURL=SidebarBody.js.map

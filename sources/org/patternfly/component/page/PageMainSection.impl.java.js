goog.module('org.patternfly.component.page.PageMainSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');
const Fill = goog.require('org.patternfly.core.Modifiers.Fill$impl');
const NoFill = goog.require('org.patternfly.core.Modifiers.NoFill$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.layout.Breakpoint$impl');
let Brightness = goog.forwardDeclare('org.patternfly.layout.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageMainSection>}
 * @implements {Fill<HTMLElement, PageMainSection>}
 * @implements {NoFill<HTMLElement, PageMainSection>}
 */
class PageMainSection extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainSection} */
 static m_pageMainSection__org_patternfly_component_page_PageMainSection() {
  PageMainSection.$clinit();
  return PageMainSection.$create__();
 }
 /** @nodts @return {!PageMainSection} */
 static $create__() {
  PageMainSection.$clinit();
  let $instance = new PageMainSection();
  $instance.$ctor__org_patternfly_component_page_PageMainSection__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainSection__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__elemental2_dom_HTMLElement__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_layout_Classes, Classes.f_section__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageMainSection} */
 m_center__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_center__org_patternfly_layout_Classes)], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_light__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_layout_Brightness.f_modifier__org_patternfly_layout_Brightness], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_dark__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Brightness.f_dark__org_patternfly_layout_Brightness.m_opacity__int__java_lang_String(200)], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_darker__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Brightness.f_dark__org_patternfly_layout_Brightness.m_opacity__int__java_lang_String(100)], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_padding__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_padding__org_patternfly_layout_Classes)], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_padding__org_patternfly_layout_Breakpoint__org_patternfly_component_page_PageMainSection(/** Breakpoint */ breakpoint) {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_layout_Breakpoint__java_lang_String(Classes.f_padding__org_patternfly_layout_Classes, breakpoint)], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_noPadding__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_noPadding__org_patternfly_layout_Classes)], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_noPadding__org_patternfly_layout_Breakpoint__org_patternfly_component_page_PageMainSection(/** Breakpoint */ breakpoint) {
  return /**@type {PageMainSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_layout_Breakpoint__java_lang_String(Classes.f_noPadding__org_patternfly_layout_Classes, breakpoint)], j_l_String))), PageMainSection));
 }
 /** @nodts @return {PageMainSection} */
 m_that__org_patternfly_component_page_PageMainSection() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainSection();
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_noFill__org_jboss_elemento_TypedBuilder() {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainSection} */
 m_noFill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_fill__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_fill__boolean__org_patternfly_component_page_PageMainSection(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_core_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_noFill__org_patternfly_component_page_PageMainSection() {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__org_jboss_elemento_TypedBuilder(this), PageMainSection));
 }
 //Default method forwarding stub.
 /** @nodts @return {PageMainSection} */
 m_noFill__boolean__org_patternfly_component_page_PageMainSection(/** boolean */ arg0) {
  return /**@type {PageMainSection}*/ ($Casts.$to(NoFill.m_noFill__$default__org_patternfly_core_Modifiers_NoFill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), PageMainSection));
 }
 /** @nodts */
 static $clinit() {
  PageMainSection.$clinit = () =>{};
  PageMainSection.$loadModules();
  PageSectionBuilder.$clinit();
  Fill.$clinit();
  NoFill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainSection;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Brightness = goog.module.get('org.patternfly.layout.Brightness$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Fill.$markImplementor(PageMainSection);
NoFill.$markImplementor(PageMainSection);
$Util.$setClassMetadata(PageMainSection, 'org.patternfly.component.page.PageMainSection');

exports = PageMainSection;

//# sourceMappingURL=PageMainSection.js.map

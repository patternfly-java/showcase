goog.module('org.patternfly.component.page.PageSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');
const PageSection = goog.require('org.patternfly.component.page.PageSection$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Container = goog.forwardDeclare('org.jboss.elemento.Container$impl');
let Finder = goog.forwardDeclare('org.jboss.elemento.Finder$impl');
let HasElement = goog.forwardDeclare('org.jboss.elemento.HasElement$impl');
let HasHTMLElement = goog.forwardDeclare('org.jboss.elemento.HasHTMLElement$impl');
let PageMainBody = goog.forwardDeclare('org.patternfly.component.page.PageMainBody$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.layout.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Sticky = goog.forwardDeclare('org.patternfly.layout.Sticky$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E, P
 * @extends {SubComponent<E, P>}
 * @implements {PageSection<E, P>}
 */
class PageSectionBuilder extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageSectionBuilder__elemental2_dom_HTMLElement__void(/** E */ element) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(element);
 }
 /** @nodts @return {P} */
 m_addBody__org_patternfly_component_page_PageMainBody__org_patternfly_component_page_PageSectionBuilder(/** PageMainBody */ body) {
  return /**@type {P}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_limitWidth__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_layout_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_sticky__org_patternfly_layout_Sticky__org_patternfly_component_page_PageSectionBuilder(/** Sticky */ sticky) {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([sticky.f_modifier__org_patternfly_layout_Sticky], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_sticky__org_patternfly_layout_Sticky__org_patternfly_layout_Breakpoint__org_patternfly_component_page_PageSectionBuilder(/** Sticky */ sticky, /** Breakpoint */ breakpoint) {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([sticky.m_onHeight__org_patternfly_layout_Breakpoint__java_lang_String(breakpoint)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_shadowTop__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowTop__org_patternfly_layout_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_shadowBottom__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowBottom__org_patternfly_layout_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts @return {P} */
 m_overflowScroll__org_patternfly_component_page_PageSectionBuilder() {
  return /**@type {P}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflowScroll__org_patternfly_layout_Classes)], j_l_String))), PageSectionBuilder));
 }
 /** @nodts */
 static $clinit() {
  PageSectionBuilder.$clinit = () =>{};
  PageSectionBuilder.$loadModules();
  SubComponent.$clinit();
  HasElement.$clinit();
  HasHTMLElement.$clinit();
  Finder.$clinit();
  Container.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageSectionBuilder;
 }
 /** @abstract @override @nodts @return {P} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Container = goog.module.get('org.jboss.elemento.Container$impl');
  Finder = goog.module.get('org.jboss.elemento.Finder$impl');
  HasElement = goog.module.get('org.jboss.elemento.HasElement$impl');
  HasHTMLElement = goog.module.get('org.jboss.elemento.HasHTMLElement$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
PageSection.$markImplementor(PageSectionBuilder);
$Util.$setClassMetadata(PageSectionBuilder, 'org.patternfly.component.page.PageSectionBuilder');

exports = PageSectionBuilder;

//# sourceMappingURL=PageSectionBuilder.js.map

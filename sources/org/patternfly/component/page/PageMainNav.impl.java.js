goog.module('org.patternfly.component.page.PageMainNav$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSectionBuilder<HTMLElement, PageMainNav>}
 */
class PageMainNav extends PageSectionBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainNav} */
 static m_pageMainNav__org_patternfly_component_page_PageMainNav() {
  PageMainNav.$clinit();
  return PageMainNav.$create__();
 }
 /** @nodts @return {!PageMainNav} */
 static $create__() {
  PageMainNav.$clinit();
  let $instance = new PageMainNav();
  $instance.$ctor__org_patternfly_component_page_PageMainNav__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainNav__void() {
  this.$ctor__org_patternfly_component_page_PageSectionBuilder__java_lang_String__elemental2_dom_HTMLElement__void(PageMainNav.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainNav, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_nav__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageMainNav} */
 m_that__org_patternfly_component_page_PageMainNav() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainNav} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainNav();
 }
 /** @nodts */
 static $clinit() {
  PageMainNav.$clinit = () =>{};
  PageMainNav.$loadModules();
  PageSectionBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainNav;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageMainNav.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainNav = 'pmn';
$Util.$setClassMetadata(PageMainNav, 'org.patternfly.component.page.PageMainNav');

exports = PageMainNav;

//# sourceMappingURL=PageMainNav.js.map

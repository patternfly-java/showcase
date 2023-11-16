goog.module('org.patternfly.component.page.Page$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Masthead = goog.forwardDeclare('org.patternfly.component.masthead.Masthead$impl');
let PageMain = goog.forwardDeclare('org.patternfly.component.page.PageMain$impl');
let Sidebar = goog.forwardDeclare('org.patternfly.component.sidebar.Sidebar$impl');
let SkipToContent = goog.forwardDeclare('org.patternfly.component.skiptocontent.SkipToContent$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Page>}
 */
class Page extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SkipToContent} @nodts*/
  this.f_skipToContent__org_patternfly_component_page_Page_;
  /**@type {Masthead} @nodts*/
  this.f_masthead__org_patternfly_component_page_Page_;
  /**@type {Sidebar} @nodts*/
  this.f_sidebar__org_patternfly_component_page_Page_;
  /**@type {PageMain} @nodts*/
  this.f_main__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {Page} */
 static m_page__org_patternfly_component_page_Page() {
  Page.$clinit();
  if ($Equality.$same(Page.f_instance__org_patternfly_component_page_Page_, null)) {
   Page.f_instance__org_patternfly_component_page_Page_ = Page.$create__();
  }
  return Page.f_instance__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {!Page} */
 static $create__() {
  Page.$clinit();
  let $instance = new Page();
  $instance.$ctor__org_patternfly_component_page_Page__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_Page__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), ComponentType.f_Page__org_patternfly_component_ComponentType);
 }
 /** @nodts @return {Page} */
 m_addSkipToContent__org_patternfly_component_skiptocontent_SkipToContent__org_patternfly_component_page_Page(/** SkipToContent */ skipToContent) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_skipToContent__org_patternfly_component_page_Page_);
  this.f_skipToContent__org_patternfly_component_page_Page_ = skipToContent;
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_skipToContent__org_patternfly_component_page_Page_);
  return this;
 }
 /** @nodts @return {Page} */
 m_addMasthead__org_patternfly_component_masthead_Masthead__org_patternfly_component_page_Page(/** Masthead */ masthead) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_masthead__org_patternfly_component_page_Page_);
  this.f_masthead__org_patternfly_component_page_Page_ = masthead;
  if (!$Equality.$same(this.f_skipToContent__org_patternfly_component_page_Page_, null)) {
   Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(this.f_masthead__org_patternfly_component_page_Page_, /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_skipToContent__org_patternfly_component_page_Page_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  } else {
   Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_masthead__org_patternfly_component_page_Page_);
  }
  return this;
 }
 /** @nodts @return {Page} */
 m_addSidebar__org_patternfly_component_sidebar_Sidebar__org_patternfly_component_page_Page(/** Sidebar */ sidebar) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_sidebar__org_patternfly_component_page_Page_);
  this.f_sidebar__org_patternfly_component_page_Page_ = sidebar;
  if (!$Equality.$same(this.f_main__org_patternfly_component_page_Page_, null)) {
   Elements.m_insertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element__void(this.f_sidebar__org_patternfly_component_page_Page_, this.f_main__org_patternfly_component_page_Page_.m_element__elemental2_dom_HTMLElement());
  } else {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_sidebar__org_patternfly_component_page_Page_.m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {Page} */
 m_addMain__org_patternfly_component_page_PageMain__org_patternfly_component_page_Page(/** PageMain */ main) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_main__org_patternfly_component_page_Page_);
  this.f_main__org_patternfly_component_page_Page_ = main;
  return /**@type {Page}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(main.m_element__elemental2_dom_HTMLElement()), Page));
 }
 /** @nodts @return {Page} */
 m_that__org_patternfly_component_page_Page() {
  return this;
 }
 /** @nodts @return {Masthead} */
 m_masthead__org_patternfly_component_masthead_Masthead() {
  return this.f_masthead__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {Sidebar} */
 m_sidebar__org_patternfly_component_sidebar_Sidebar() {
  return this.f_sidebar__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {PageMain} */
 m_main__org_patternfly_component_page_PageMain() {
  return this.f_main__org_patternfly_component_page_Page_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Page} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_Page();
 }
 /** @nodts */
 static $clinit() {
  Page.$clinit = () =>{};
  Page.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Page;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Page} @nodts*/
Page.f_instance__org_patternfly_component_page_Page_;
$Util.$setClassMetadata(Page, 'org.patternfly.component.page.Page');

exports = Page;

//# sourceMappingURL=Page.js.map

goog.module('org.patternfly.component.OldPageHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let OldPageSidebar = goog.forwardDeclare('org.patternfly.component.OldPageSidebar$impl');
let OldPageTools = goog.forwardDeclare('org.patternfly.component.OldPageTools$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, OldPageHeader>}
 * @deprecated
 */
class OldPageHeader extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLDivElement} @nodts*/
  this.f_toggleContainer__org_patternfly_component_OldPageHeader_;
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_OldPageHeader_;
  /**@type {Navigation} @nodts*/
  this.f_navigation__org_patternfly_component_OldPageHeader_;
  /**@type {OldPageTools} @nodts*/
  this.f_tools__org_patternfly_component_OldPageHeader_;
  /**@type {OldPageSidebar} @nodts*/
  this.f_sidebar__org_patternfly_component_OldPageHeader_;
 }
 /** @nodts @return {!OldPageHeader} */
 static $create__elemental2_dom_HTMLElement__java_lang_String(/** HTMLElement */ brand, /** ?string */ homeLink) {
  OldPageHeader.$clinit();
  let $instance = new OldPageHeader();
  $instance.$ctor__org_patternfly_component_OldPageHeader__elemental2_dom_HTMLElement__java_lang_String__void(brand, homeLink);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldPageHeader__elemental2_dom_HTMLElement__java_lang_String__void(/** HTMLElement */ brand, /** ?string */ homeLink) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_banner__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), 'PageHeader');
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes, Classes.f_brand__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_toggleContainer__org_patternfly_component_OldPageHeader_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes, Classes.f_brand__org_patternfly_layout_Classes, Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_OldPageHeader_ = /**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_bars__org_patternfly_layout_PredefinedIcon, 'Global Navigation').m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), Button)).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   if (!$Equality.$same(this.f_sidebar__org_patternfly_component_OldPageHeader_, null)) {
    this.f_sidebar__org_patternfly_component_OldPageHeader_.m_toggle__void_$pp_org_patternfly_component();
   }
  }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(homeLink).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes, Classes.f_brand__org_patternfly_layout_Classes, Classes.f_link__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(brand), HTMLContainerBuilder))), HTMLContainerBuilder)));
  this.m_hideSidebarToggle__void_$pp_org_patternfly_component();
 }
 /** @nodts @return {OldPageHeader} */
 m_that__org_patternfly_component_OldPageHeader() {
  return this;
 }
 /** @nodts @return {OldPageHeader} */
 m_add__org_patternfly_component_navigation_Navigation__org_patternfly_component_OldPageHeader(/** Navigation */ navigation) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_navigation__org_patternfly_component_OldPageHeader_);
  this.f_navigation__org_patternfly_component_OldPageHeader_ = navigation;
  return /**@type {OldPageHeader}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String('page', /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes, 'nav'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(navigation), HTMLContainerBuilder))), OldPageHeader));
 }
 /** @nodts @return {OldPageHeader} */
 m_add__org_patternfly_component_OldPageTools__org_patternfly_component_OldPageHeader(/** OldPageTools */ tools) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_tools__org_patternfly_component_OldPageHeader_);
  this.f_tools__org_patternfly_component_OldPageHeader_ = tools;
  return /**@type {OldPageHeader}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(tools.m_element__elemental2_dom_HTMLElement(), $Overlay))), OldPageHeader));
 }
 /** @nodts @return {Navigation} */
 m_getNavigation__org_patternfly_component_navigation_Navigation() {
  return this.f_navigation__org_patternfly_component_OldPageHeader_;
 }
 /** @nodts @return {OldPageTools} */
 m_getTools__org_patternfly_component_OldPageTools() {
  return this.f_tools__org_patternfly_component_OldPageHeader_;
 }
 /** @nodts */
 m_registerSidebar__org_patternfly_component_OldPageSidebar__void_$pp_org_patternfly_component(/** OldPageSidebar */ sidebar) {
  if (!$Equality.$same(sidebar, null)) {
   this.f_sidebar__org_patternfly_component_OldPageHeader_ = sidebar;
   let sidebarId = sidebar.m_element__elemental2_dom_HTMLElement().id;
   if ($Equality.$same(sidebarId, null) || j_l_String.m_length__java_lang_String__int(sidebarId) == 0) {
    sidebarId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('sidebar', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
    sidebar.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(sidebarId);
   }
   this.f_toggleButton__org_patternfly_component_OldPageHeader_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false);
   this.f_toggleButton__org_patternfly_component_OldPageHeader_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_controls__org_patternfly_layout_Classes, sidebarId);
  }
 }
 /** @nodts */
 m_unregisterSidebar__void_$pp_org_patternfly_component() {
  this.f_sidebar__org_patternfly_component_OldPageHeader_ = null;
  this.f_toggleButton__org_patternfly_component_OldPageHeader_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false);
  this.f_toggleButton__org_patternfly_component_OldPageHeader_.m_element__elemental2_dom_HTMLElement().removeAttribute('aria-controls');
  this.m_hideSidebarToggle__void_$pp_org_patternfly_component();
 }
 /** @nodts */
 m_showSidebarToggle__void_$pp_org_patternfly_component() {
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_toggleContainer__org_patternfly_component_OldPageHeader_, true);
 }
 /** @nodts */
 m_hideSidebarToggle__void_$pp_org_patternfly_component() {
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_toggleContainer__org_patternfly_component_OldPageHeader_, false);
 }
 //Bridge method.
 /** @final @override @nodts @return {OldPageHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_OldPageHeader();
 }
 /** @nodts */
 static $clinit() {
  OldPageHeader.$clinit = () =>{};
  OldPageHeader.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OldPageHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(OldPageHeader, 'org.patternfly.component.OldPageHeader');

exports = OldPageHeader;

//# sourceMappingURL=OldPageHeader.js.map

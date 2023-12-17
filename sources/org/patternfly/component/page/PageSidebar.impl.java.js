goog.module('org.patternfly.component.page.PageSidebar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PageSubComponent = goog.require('org.patternfly.component.page.PageSubComponent$impl');
const Expandable = goog.require('org.patternfly.core.Expandable$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let PageSidebarBody = goog.forwardDeclare('org.patternfly.component.page.PageSidebarBody$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Rect = goog.forwardDeclare('org.patternfly.style.Rect$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PageSubComponent<HTMLElement, PageSidebar>}
 * @implements {Expandable<HTMLElement, PageSidebar>}
 */
class PageSidebar extends PageSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ToggleHandler<PageSidebar>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_page_PageSidebar_;
 }
 /** @nodts @return {PageSidebar} */
 static m_pageSidebar__org_patternfly_component_page_PageSidebar() {
  PageSidebar.$clinit();
  return PageSidebar.$create__();
 }
 /** @nodts @return {!PageSidebar} */
 static $create__() {
  PageSidebar.$clinit();
  let $instance = new PageSidebar();
  $instance.$ctor__org_patternfly_component_page_PageSidebar__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageSidebar__void() {
  this.$ctor__org_patternfly_component_page_PageSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PageSidebar.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSidebar, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_aside__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sidebar__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, false), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageSidebar} */
 m_addBody__org_patternfly_component_page_PageSidebarBody__org_patternfly_component_page_PageSidebar(/** PageSidebarBody */ body) {
  return /**@type {PageSidebar}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), PageSidebar));
 }
 /** @nodts @return {PageSidebar} */
 m_theme__org_patternfly_style_Brightness__org_patternfly_component_page_PageSidebar(/** Brightness */ theme) {
  if (!/**@type {EnumSet<Brightness>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(Brightness.f_dark__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_style_Brightness], Brightness)))).contains(theme)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void('PF5/PageSidebar', this.m_element__elemental2_dom_HTMLElement(), 'Theme ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(theme) + ' not supported. Valid values: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (/**@type {Stream<Brightness>}*/ (Stream.m_of__arrayOf_java_lang_Object__java_util_stream_Stream(/**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_dark__org_patternfly_style_Brightness, Brightness.f_light__org_patternfly_style_Brightness], Brightness)))).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {Brightness}*/ ($Casts.$to(arg0, Brightness));
    return arg0_1.name();
   }))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(' ')), j_l_String))));
   return this;
  }
  return /**@type {PageSidebar}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([theme.m_modifier__java_lang_String()], j_l_String))), PageSidebar));
 }
 /** @nodts @return {PageSidebar} */
 m_that__org_patternfly_component_page_PageSidebar() {
  return this;
 }
 /** @nodts @return {PageSidebar} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_page_PageSidebar(/** ToggleHandler<PageSidebar> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_page_PageSidebar_ = toggleHandler;
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_collapsed__org_patternfly_style_Classes));
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true);
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_page_PageSidebar_, null)) {
   this.f_toggleHandler__org_patternfly_component_page_PageSidebar_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_collapsed__org_patternfly_style_Classes));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, false);
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_page_PageSidebar_, null)) {
   this.f_toggleHandler__org_patternfly_component_page_PageSidebar_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
  }
 }
 /** @nodts */
 m_onPageResize__org_patternfly_style_Rect__org_patternfly_style_Rect__void_$pp_org_patternfly_component_page(/** Rect */ currentPageRect, /** Rect */ previousPageRect) {
  if (Page.m_page__org_patternfly_component_page_Page().m_underXl__boolean_$pp_org_patternfly_component_page()) {
   this.m_collapse__void();
  } else {
   this.m_expand__void();
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {PageSidebar} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageSidebar();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_core_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_core_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_core_Expandable__boolean(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_core_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_core_Expandable__boolean__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  PageSidebar.$clinit = () =>{};
  PageSidebar.$loadModules();
  PageSubComponent.$clinit();
  Expandable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageSidebar;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Page = goog.module.get('org.patternfly.component.page.Page$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageSidebar.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageSidebar = 'psb';
Expandable.$markImplementor(PageSidebar);
$Util.$setClassMetadata(PageSidebar, 'org.patternfly.component.page.PageSidebar');

exports = PageSidebar;

//# sourceMappingURL=PageSidebar.js.map

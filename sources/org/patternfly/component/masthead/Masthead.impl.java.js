goog.module('org.patternfly.component.masthead.Masthead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Inline = goog.require('org.patternfly.core.Modifiers.Inline$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Brand = goog.forwardDeclare('org.patternfly.component.brand.Brand$impl');
let MastheadContent = goog.forwardDeclare('org.patternfly.component.masthead.MastheadContent$impl');
let MastheadMain = goog.forwardDeclare('org.patternfly.component.masthead.MastheadMain$impl');
let MastheadToggle = goog.forwardDeclare('org.patternfly.component.masthead.MastheadToggle$impl');
let Toolbar = goog.forwardDeclare('org.patternfly.component.toolbar.Toolbar$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.layout.Breakpoint$impl');
let Brightness = goog.forwardDeclare('org.patternfly.layout.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Masthead>}
 * @implements {Inline<HTMLElement, Masthead>}
 */
class Masthead extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Masthead} */
 static m_masthead__org_patternfly_component_masthead_Masthead() {
  Masthead.$clinit();
  return Masthead.$create__();
 }
 /** @nodts @return {!Masthead} */
 static $create__() {
  Masthead.$clinit();
  let $instance = new Masthead();
  $instance.$ctor__org_patternfly_component_masthead_Masthead__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_masthead_Masthead__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), ComponentType.f_Masthead__org_patternfly_component_ComponentType);
 }
 /** @nodts @return {Masthead} */
 m_addToggle__org_patternfly_component_masthead_MastheadToggle__org_patternfly_component_masthead_Masthead(/** MastheadToggle */ toggle) {
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toggle);
  return this;
 }
 /** @nodts @return {Masthead} */
 m_addMain__org_patternfly_component_masthead_Masthead() {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(MastheadMain.m_mastheadMain__org_patternfly_component_masthead_MastheadMain()), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_addBrand__org_patternfly_component_brand_Brand__java_lang_String__org_patternfly_component_masthead_Masthead(/** Brand */ brand, /** ?string */ homeLink) {
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {MastheadMain}*/ ($Casts.$to(MastheadMain.m_mastheadMain__org_patternfly_component_masthead_MastheadMain().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(homeLink).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_brand__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(brand), HTMLContainerBuilder))), MastheadMain)));
  return this;
 }
 /** @nodts @return {Masthead} */
 m_addToolbar__org_patternfly_component_toolbar_Toolbar__org_patternfly_component_masthead_Masthead(/** Toolbar */ toolbar) {
  /**@type {Masthead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(MastheadContent.m_mastheadContent__org_patternfly_component_masthead_MastheadContent()), Masthead)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toolbar);
  return this;
 }
 /** @nodts @return {Masthead} */
 m_addContent__org_patternfly_component_masthead_Masthead() {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(MastheadContent.m_mastheadContent__org_patternfly_component_masthead_MastheadContent()), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_noInset__org_patternfly_component_masthead_Masthead() {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_insetNone__org_patternfly_layout_Classes)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_noInset__org_patternfly_layout_Breakpoint__org_patternfly_component_masthead_Masthead(/** Breakpoint */ breakpoint) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_layout_Breakpoint__java_lang_String(Classes.f_insetNone__org_patternfly_layout_Classes, breakpoint)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_inset__org_patternfly_layout_Size__org_patternfly_component_masthead_Masthead(/** Size */ size) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inset__org_patternfly_layout_Classes)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(size.f_value__org_patternfly_layout_Size)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_inset__org_patternfly_layout_Size__org_patternfly_layout_Breakpoint__org_patternfly_component_masthead_Masthead(/** Size */ size, /** Breakpoint */ breakpoint) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_inset__org_patternfly_layout_Classes)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(size.f_value__org_patternfly_layout_Size) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(breakpoint.f_value__org_patternfly_layout_Breakpoint)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_light__org_patternfly_component_masthead_Masthead() {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_layout_Brightness.m_opacity__int__java_lang_String(200)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_lighter__org_patternfly_component_masthead_Masthead() {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_layout_Brightness.f_modifier__org_patternfly_layout_Brightness], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_inline__org_patternfly_layout_Breakpoint__org_patternfly_component_masthead_Masthead(/** Breakpoint */ breakpoint) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_layout_Breakpoint__java_lang_String(Classes.f_inline__org_patternfly_layout_Classes, breakpoint)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_stack__org_patternfly_component_masthead_Masthead() {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_stack__org_patternfly_layout_Classes)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_stack__org_patternfly_layout_Breakpoint__org_patternfly_component_masthead_Masthead(/** Breakpoint */ breakpoint) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_layout_Breakpoint__java_lang_String(Classes.f_stack__org_patternfly_layout_Classes, breakpoint)], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_that__org_patternfly_component_masthead_Masthead() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Masthead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_masthead_Masthead();
 }
 //Bridge method.
 /** @final @override @nodts @return {Masthead} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {Masthead}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_core_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Masthead));
 }
 //Bridge method.
 /** @final @override @nodts @return {Masthead} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Masthead}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_core_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Masthead));
 }
 //Default method forwarding stub.
 /** @nodts @return {Masthead} */
 m_inline__org_patternfly_component_masthead_Masthead() {
  return /**@type {Masthead}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_core_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Masthead));
 }
 //Default method forwarding stub.
 /** @nodts @return {Masthead} */
 m_inline__boolean__org_patternfly_component_masthead_Masthead(/** boolean */ arg0) {
  return /**@type {Masthead}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_core_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Masthead));
 }
 /** @nodts */
 static $clinit() {
  Masthead.$clinit = () =>{};
  Masthead.$loadModules();
  BaseComponent.$clinit();
  Inline.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Masthead;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  MastheadContent = goog.module.get('org.patternfly.component.masthead.MastheadContent$impl');
  MastheadMain = goog.module.get('org.patternfly.component.masthead.MastheadMain$impl');
  Brightness = goog.module.get('org.patternfly.layout.Brightness$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Inline.$markImplementor(Masthead);
$Util.$setClassMetadata(Masthead, 'org.patternfly.component.masthead.Masthead');

exports = Masthead;

//# sourceMappingURL=Masthead.js.map

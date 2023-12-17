goog.module('org.patternfly.component.page.Masthead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Brand = goog.forwardDeclare('org.patternfly.component.brand.Brand$impl');
let MastheadContent = goog.forwardDeclare('org.patternfly.component.page.MastheadContent$impl');
let MastheadMain = goog.forwardDeclare('org.patternfly.component.page.MastheadMain$impl');
let MastheadToggle = goog.forwardDeclare('org.patternfly.component.page.MastheadToggle$impl');
let Toolbar = goog.forwardDeclare('org.patternfly.component.toolbar.Toolbar$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Tuples = goog.forwardDeclare('org.patternfly.core.Tuples$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Display = goog.forwardDeclare('org.patternfly.style.Display$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let Rect = goog.forwardDeclare('org.patternfly.style.Rect$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Masthead>}
 */
class Masthead extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Tuples<Breakpoint, Display>} @nodts*/
  this.f_displayModifiers__org_patternfly_component_page_Masthead_;
  /**@type {Tuples<Breakpoint, Inset>} @nodts*/
  this.f_insetModifiers__org_patternfly_component_page_Masthead_;
 }
 /** @nodts @return {Masthead} */
 static m_masthead__org_patternfly_component_page_Masthead() {
  Masthead.$clinit();
  return Masthead.$create__();
 }
 /** @nodts @return {!Masthead} */
 static $create__() {
  Masthead.$clinit();
  let $instance = new Masthead();
  $instance.$ctor__org_patternfly_component_page_Masthead__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_Masthead__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Masthead__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_displayModifiers__org_patternfly_component_page_Masthead_ = /**@type {Tuples<Breakpoint, Display>}*/ (Tuples.m_tuples__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(Breakpoint.f_md__org_patternfly_style_Breakpoint, Display.f_inline__org_patternfly_style_Display));
 }
 /** @nodts @return {Masthead} */
 m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(/** MastheadToggle */ toggle) {
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toggle);
  return this;
 }
 /** @nodts @return {Masthead} */
 m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(/** MastheadMain */ main) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(main), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_addBrand__org_patternfly_component_brand_Brand__java_lang_String__org_patternfly_component_page_Masthead(/** Brand */ brand, /** ?string */ homeLink) {
  this.m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(/**@type {MastheadMain}*/ ($Casts.$to(MastheadMain.m_mastheadMain__org_patternfly_component_page_MastheadMain().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(homeLink).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_brand__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(brand), HTMLContainerBuilder))), MastheadMain)));
  return this;
 }
 /** @nodts @return {Masthead} */
 m_addToolbar__org_patternfly_component_toolbar_Toolbar__org_patternfly_component_page_Masthead(/** Toolbar */ toolbar) {
  this.m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/**@type {MastheadContent}*/ ($Casts.$to(MastheadContent.m_mastheadContent__org_patternfly_component_page_MastheadContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toolbar), MastheadContent)));
  return this;
 }
 /** @nodts @return {Masthead} */
 m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/** MastheadContent */ content) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(content), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_display__org_patternfly_core_Tuples__org_patternfly_component_page_Masthead(/** Tuples<Breakpoint, Display> */ displayModifiers) {
  this.f_displayModifiers__org_patternfly_component_page_Masthead_ = displayModifiers;
  return this;
 }
 /** @nodts @return {Masthead} */
 m_inset__org_patternfly_core_Tuples__org_patternfly_component_page_Masthead(/** Tuples<Breakpoint, Inset> */ insetModifiers) {
  this.f_insetModifiers__org_patternfly_component_page_Masthead_ = insetModifiers;
  return this;
 }
 /** @nodts @return {Masthead} */
 m_background__org_patternfly_style_Brightness__org_patternfly_component_page_Masthead(/** Brightness */ brightness) {
  if (!/**@type {EnumSet<Brightness>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(Brightness.f_dark__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_style_Brightness, Brightness.f_light200__org_patternfly_style_Brightness], Brightness)))).contains(brightness)) {
   Logger.m_unsupported__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'Background ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(brightness) + ' not supported. Valid values: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (/**@type {Stream<Brightness>}*/ (Stream.m_of__arrayOf_java_lang_Object__java_util_stream_Stream(/**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_dark__org_patternfly_style_Brightness, Brightness.f_light__org_patternfly_style_Brightness, Brightness.f_light200__org_patternfly_style_Brightness], Brightness)))).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {Brightness}*/ ($Casts.$to(arg0, Brightness));
    return arg0_1.name();
   }))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(' ')), j_l_String))));
   return this;
  }
  return /**@type {Masthead}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([brightness.m_modifier__java_lang_String()], j_l_String))), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_that__org_patternfly_component_page_Masthead() {
  return this;
 }
 /** @nodts */
 m_onPageResize__org_patternfly_style_Rect__org_patternfly_style_Rect__void_$pp_org_patternfly_component_page(/** Rect */ currentPageRect, /** Rect */ previousPageRect) {
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_typedModifier__org_patternfly_core_Tuples__org_patternfly_style_Breakpoint__java_lang_String(this.f_displayModifiers__org_patternfly_component_page_Masthead_, Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(previousPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_typedModifier__org_patternfly_core_Tuples__org_patternfly_style_Breakpoint__java_lang_String(this.f_insetModifiers__org_patternfly_component_page_Masthead_, Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(previousPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_typedModifier__org_patternfly_core_Tuples__org_patternfly_style_Breakpoint__java_lang_String(this.f_displayModifiers__org_patternfly_component_page_Masthead_, Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(currentPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_typedModifier__org_patternfly_core_Tuples__org_patternfly_style_Breakpoint__java_lang_String(this.f_insetModifiers__org_patternfly_component_page_Masthead_, Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(currentPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
 }
 //Bridge method.
 /** @final @override @nodts @return {Masthead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_Masthead();
 }
 /** @nodts */
 static $clinit() {
  Masthead.$clinit = () =>{};
  Masthead.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Masthead;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  MastheadContent = goog.module.get('org.patternfly.component.page.MastheadContent$impl');
  MastheadMain = goog.module.get('org.patternfly.component.page.MastheadMain$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Tuples = goog.module.get('org.patternfly.core.Tuples$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Display = goog.module.get('org.patternfly.style.Display$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Masthead, 'org.patternfly.component.page.Masthead');

exports = Masthead;

//# sourceMappingURL=Masthead.js.map

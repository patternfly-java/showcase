goog.module('org.patternfly.component.avatar.Avatar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let EnumSet = goog.forwardDeclare('java.util.EnumSet$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLImageElement, Avatar>}
 */
class Avatar extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Avatar} */
 static m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(/** ?string */ src, /** ?string */ alt) {
  Avatar.$clinit();
  return Avatar.$create__java_lang_String__java_lang_String(src, alt);
 }
 /** @nodts @return {!Avatar} */
 static $create__java_lang_String__java_lang_String(/** ?string */ src, /** ?string */ alt) {
  Avatar.$clinit();
  let $instance = new Avatar();
  $instance.$ctor__org_patternfly_component_avatar_Avatar__java_lang_String__java_lang_String__void(src, alt);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_avatar_Avatar__java_lang_String__java_lang_String__void(/** ?string */ src, /** ?string */ alt) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Avatar__org_patternfly_component_ComponentType, /**@type {HTMLImageElement}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(Elements.m_img__org_jboss_elemento_HTMLElementBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_avatar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLElementBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((i) =>{
   let i_1 = /**@type {HTMLImageElement}*/ ($Casts.$to(i, $Overlay));
   i_1.src = src;
   i_1.alt = alt;
  })), HTMLElementBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Avatar} */
 m_src__java_lang_String__org_patternfly_component_avatar_Avatar(/** ?string */ src) {
  /**@type {HTMLImageElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).src = src;
  return this;
 }
 /** @nodts @return {Avatar} */
 m_alt__java_lang_String__org_patternfly_component_avatar_Avatar(/** ?string */ alt) {
  /**@type {HTMLImageElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).alt = alt;
  return this;
 }
 /** @nodts @return {Avatar} */
 m_size__org_patternfly_style_Size__org_patternfly_component_avatar_Avatar(/** Size */ size) {
  return /**@type {Avatar}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String))), Avatar));
 }
 /** @nodts @return {Avatar} */
 m_border__org_patternfly_style_Brightness__org_patternfly_component_avatar_Avatar(/** Brightness */ border) {
  if (!/**@type {EnumSet<Brightness>}*/ (EnumSet.m_of__java_lang_Enum__arrayOf_java_lang_Enum__java_util_EnumSet(Brightness.f_light__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_dark__org_patternfly_style_Brightness], Brightness)))).contains(border)) {
   Logger.m_unsupported__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), /**@type {HTMLImageElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), 'Border ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(border) + ' not supported. Valid values: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (/**@type {Stream<Brightness>}*/ (Stream.m_of__arrayOf_java_lang_Object__java_util_stream_Stream(/**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_style_Brightness, Brightness.f_dark__org_patternfly_style_Brightness], Brightness)))).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {Brightness}*/ ($Casts.$to(arg0, Brightness));
    return arg0_1.name();
   }))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(' ')), j_l_String))));
   return this;
  }
  return /**@type {Avatar}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([border.m_modifier__java_lang_String()], j_l_String))), Avatar));
 }
 /** @nodts @return {Avatar} */
 m_that__org_patternfly_component_avatar_Avatar() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Avatar} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_avatar_Avatar();
 }
 /** @nodts */
 static $clinit() {
  Avatar.$clinit = () =>{};
  Avatar.$loadModules();
  BaseComponentFlat.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Avatar;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  EnumSet = goog.module.get('java.util.EnumSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Avatar, 'org.patternfly.component.avatar.Avatar');

exports = Avatar;

//# sourceMappingURL=Avatar.js.map

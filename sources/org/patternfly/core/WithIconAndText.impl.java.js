goog.module('org.patternfly.core.WithIconAndText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.core.IconPosition$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class WithIconAndText {
 /** @abstract @nodts @return {B} */
 m_iconAndText__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ iconClass, /** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_iconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ predefinedIcon, /** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** InlineIcon */ icon, /** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_iconAndText__java_lang_String__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** ?string */ iconClass, /** ?string */ text, /** IconPosition */ position) {}
 /** @abstract @nodts @return {B} */
 m_iconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ predefinedIcon, /** ?string */ text, /** IconPosition */ position) {}
 /** @abstract @nodts @return {B} */
 m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** InlineIcon */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {}
 /** @nodts @template E, B @return {B} */
 static m_iconAndText__$default__org_patternfly_core_WithIconAndText__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !WithIconAndText<E, B> */ $thisArg, /** ?string */ iconClass, /** ?string */ text) {
  WithIconAndText.$clinit();
  return $thisArg.m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass), text, IconPosition.f_start__org_patternfly_core_IconPosition);
 }
 /** @nodts @template E, B @return {B} */
 static m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** !WithIconAndText<E, B> */ $thisArg, /** PredefinedIcon */ predefinedIcon, /** ?string */ text) {
  WithIconAndText.$clinit();
  return $thisArg.m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(predefinedIcon), text, IconPosition.f_start__org_patternfly_core_IconPosition);
 }
 /** @nodts @template E, B @return {B} */
 static m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** !WithIconAndText<E, B> */ $thisArg, /** InlineIcon */ icon, /** ?string */ text) {
  WithIconAndText.$clinit();
  return $thisArg.m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(icon, text, IconPosition.f_start__org_patternfly_core_IconPosition);
 }
 /** @nodts @template E, B @return {B} */
 static m_iconAndText__$default__org_patternfly_core_WithIconAndText__java_lang_String__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** !WithIconAndText<E, B> */ $thisArg, /** ?string */ iconClass, /** ?string */ text, /** IconPosition */ position) {
  WithIconAndText.$clinit();
  return $thisArg.m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass), text, position);
 }
 /** @nodts @template E, B @return {B} */
 static m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** !WithIconAndText<E, B> */ $thisArg, /** PredefinedIcon */ predefinedIcon, /** ?string */ text, /** IconPosition */ position) {
  WithIconAndText.$clinit();
  return $thisArg.m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(predefinedIcon), text, position);
 }
 /** @nodts */
 static $clinit() {
  WithIconAndText.$clinit = () =>{};
  WithIconAndText.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_WithIconAndText = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_WithIconAndText;
 }
 
 /** @nodts */
 static $loadModules() {
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  IconPosition = goog.module.get('org.patternfly.core.IconPosition$impl');
 }
}
WithIconAndText.$markImplementor(/**@type {Function}*/ (WithIconAndText));
$Util.$setClassMetadataForInterface(WithIconAndText, 'org.patternfly.core.WithIconAndText');

exports = WithIconAndText;

//# sourceMappingURL=WithIconAndText.js.map

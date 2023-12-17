goog.module('org.patternfly.core.WithIcon$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class WithIcon {
 /** @abstract @nodts @return {B} */
 m_icon__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ iconClass) {}
 /** @abstract @nodts @return {B} */
 m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ predefinedIcon) {}
 /** @abstract @nodts @return {B} */
 m_icon__org_patternfly_component_icon_InlineIcon__org_jboss_elemento_TypedBuilder(/** InlineIcon */ icon) {}
 /** @abstract @nodts @return {B} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {}
 /** @nodts @template E, B @return {B} */
 static m_icon__$default__org_patternfly_core_WithIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** !WithIcon<E, B> */ $thisArg, /** ?string */ iconClass) {
  WithIcon.$clinit();
  return $thisArg.m_icon__org_patternfly_component_icon_InlineIcon__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass));
 }
 /** @nodts @template E, B @return {B} */
 static m_icon__$default__org_patternfly_core_WithIcon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** !WithIcon<E, B> */ $thisArg, /** PredefinedIcon */ predefinedIcon) {
  WithIcon.$clinit();
  return $thisArg.m_icon__org_patternfly_component_icon_InlineIcon__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(predefinedIcon));
 }
 /** @nodts */
 static $clinit() {
  WithIcon.$clinit = () =>{};
  WithIcon.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_WithIcon = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_WithIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
 }
}
WithIcon.$markImplementor(/**@type {Function}*/ (WithIcon));
$Util.$setClassMetadataForInterface(WithIcon, 'org.patternfly.core.WithIcon');

exports = WithIcon;

//# sourceMappingURL=WithIcon.js.map

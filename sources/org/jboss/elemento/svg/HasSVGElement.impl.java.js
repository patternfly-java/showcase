goog.module('org.jboss.elemento.svg.HasSVGElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HasSVGElement {
 /** @abstract @nodts @return {B} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ style) {}
 /** @abstract @nodts @return {B} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** ?string */ value) {}
 /** @nodts @template E, B @return {B} */
 static m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasSVGElement<E, B> */ $thisArg, /** ?string */ style) {
  HasSVGElement.$clinit();
  /**@type {!SVGElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).style.cssText = style;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_data__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasSVGElement<E, B> */ $thisArg, /** ?string */ name, /** ?string */ value) {
  HasSVGElement.$clinit();
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(/**@type {!SVGElement}*/ ($Casts.$to($thisArg.m_element__elemental2_dom_Element(), $Overlay)).dataset, j_l_String.m_replaceFirst__java_lang_String__java_lang_String__java_lang_String__java_lang_String(name, '^data-', ''), value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HasSVGElement.$clinit = () =>{};
  HasSVGElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_svg_HasSVGElement = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_svg_HasSVGElement;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Overlay = goog.module.get('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasSVGElement.$markImplementor(/**@type {Function}*/ (HasSVGElement));
$Util.$setClassMetadataForInterface(HasSVGElement, 'org.jboss.elemento.svg.HasSVGElement');

exports = HasSVGElement;

//# sourceMappingURL=HasSVGElement.js.map

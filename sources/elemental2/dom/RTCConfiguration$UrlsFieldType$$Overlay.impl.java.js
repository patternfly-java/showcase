goog.module('elemental2.dom.RTCConfiguration.UrlsFieldType.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_create__elemental2_dom_RTCConfiguration_UrlsFieldType() {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setUrls__$devirt__elemental2_dom_RTCConfiguration_UrlsFieldType__arrayOf_java_lang_String__void(/** ? */ $thisArg, /** Array<?string> */ urls) {
  $Overlay.$clinit();
  $thisArg.urls = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urls));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCConfiguration$UrlsFieldType$$Overlay.js.map

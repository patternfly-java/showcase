goog.module('org.gwtproject.safehtml.shared.SafeHtmlString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtml = goog.require('org.gwtproject.safehtml.shared.SafeHtml$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {SafeHtml}
 */
class SafeHtmlString extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_html__org_gwtproject_safehtml_shared_SafeHtmlString_;
 }
 //Factory method corresponding to constructor 'SafeHtmlString(String)'.
 /** @nodts @return {!SafeHtmlString} */
 static $create__java_lang_String(/** ?string */ html) {
  SafeHtmlString.$clinit();
  let $instance = new SafeHtmlString();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlString__java_lang_String__void(html);
  return $instance;
 }
 //Initialization from constructor 'SafeHtmlString(String)'.
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlString__java_lang_String__void(/** ?string */ html) {
  this.$ctor__java_lang_Object__void();
  if ($Equality.$same(html, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String('html is null'));
  }
  this.f_html__org_gwtproject_safehtml_shared_SafeHtmlString_ = html;
 }
 //Factory method corresponding to constructor 'SafeHtmlString()'.
 /** @nodts @return {!SafeHtmlString} */
 static $create__() {
  let $instance = new SafeHtmlString();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlString__void();
  return $instance;
 }
 //Initialization from constructor 'SafeHtmlString()'.
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlString__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @return {number} */
 hashCode() {
  return j_l_String.m_hashCode__java_lang_String__int(this.f_html__org_gwtproject_safehtml_shared_SafeHtmlString_);
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if (!SafeHtml.$isInstance(obj)) {
   return false;
  }
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(this.f_html__org_gwtproject_safehtml_shared_SafeHtmlString_, /**@type {SafeHtml}*/ ($Casts.$to(obj, SafeHtml)).m_asString__java_lang_String());
 }
 /** @override @return {?string} */
 toString() {
  return 'safe: \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_asString__java_lang_String()) + '\"';
 }
 /** @override @nodts @return {?string} */
 m_asString__java_lang_String() {
  return this.f_html__org_gwtproject_safehtml_shared_SafeHtmlString_;
 }
 /** @nodts */
 static $clinit() {
  SafeHtmlString.$clinit = () =>{};
  SafeHtmlString.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlString;
 }
 
 /** @nodts */
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
SafeHtml.$markImplementor(SafeHtmlString);
$Util.$setClassMetadata(SafeHtmlString, 'org.gwtproject.safehtml.shared.SafeHtmlString');

exports = SafeHtmlString;

//# sourceMappingURL=SafeHtmlString.js.map

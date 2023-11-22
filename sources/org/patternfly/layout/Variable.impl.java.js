goog.module('org.patternfly.layout.Variable$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasHTMLElement = goog.forwardDeclare('org.jboss.elemento.HasHTMLElement$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let HasSVGElement = goog.forwardDeclare('org.jboss.elemento.svg.HasSVGElement$impl');
let SVGElement_$Overlay = goog.forwardDeclare('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
let PatternFly = goog.forwardDeclare('org.patternfly.core.PatternFly$impl');
let VariableScope = goog.forwardDeclare('org.patternfly.layout.VariableScope$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Variable extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {VariableScope} @nodts*/
  this.f_scope__org_patternfly_layout_Variable;
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_layout_Variable;
 }
 /** @nodts @return {Variable} */
 static m_globalVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_layout_Variable(/** ?string */ firstElement, /** Array<?string> */ otherElements) {
  Variable.$clinit();
  let builder = StringBuilder.$create__();
  builder.m_append__java_lang_String__java_lang_StringBuilder('--pf-').m_append__java_lang_String__java_lang_StringBuilder(PatternFly.f_VERSION__org_patternfly_core_PatternFly).m_append__java_lang_String__java_lang_StringBuilder('-global--').m_append__java_lang_String__java_lang_StringBuilder(firstElement);
  if (!$Equality.$same(otherElements, null) && otherElements.length != 0) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('--');
   for (let i = 0; i < otherElements.length; i = i + 1 | 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder(otherElements[i]);
    if (i < (otherElements.length - 1 | 0)) {
     builder.m_append__java_lang_String__java_lang_StringBuilder('--');
    }
   }
  }
  return Variable.$create__org_patternfly_layout_VariableScope__java_lang_String(VariableScope.f_global__org_patternfly_layout_VariableScope, builder.toString());
 }
 /** @nodts @return {Variable} */
 static m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_layout_Variable(/** ?string */ component, /** Array<?string> */ elements) {
  Variable.$clinit();
  let builder = StringBuilder.$create__java_lang_String('--').m_append__java_lang_String__java_lang_StringBuilder(component);
  if (!$Equality.$same(elements, null) && elements.length != 0) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('--');
   for (let i = 0; i < elements.length; i = i + 1 | 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder(elements[i]);
    if (i < (elements.length - 1 | 0)) {
     builder.m_append__java_lang_String__java_lang_StringBuilder('--');
    }
   }
  }
  return Variable.$create__org_patternfly_layout_VariableScope__java_lang_String(VariableScope.f_component__org_patternfly_layout_VariableScope, builder.toString());
 }
 /** @nodts @return {!Variable} */
 static $create__org_patternfly_layout_VariableScope__java_lang_String(/** VariableScope */ scope, /** ?string */ name) {
  Variable.$clinit();
  let $instance = new Variable();
  $instance.$ctor__org_patternfly_layout_Variable__org_patternfly_layout_VariableScope__java_lang_String__void(scope, name);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_Variable__org_patternfly_layout_VariableScope__java_lang_String__void(/** VariableScope */ scope, /** ?string */ name) {
  this.$ctor__java_lang_Object__void();
  this.f_scope__org_patternfly_layout_Variable = scope;
  this.f_name__org_patternfly_layout_Variable = name;
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_HasHTMLElement__int__org_jboss_elemento_TypedBuilder(/** HasHTMLElement<E, B> */ element, /** number */ value) {
  return element.m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(this.f_name__org_patternfly_layout_Variable, value);
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** HasHTMLElement<E, B> */ element, /** ?string */ value) {
  return element.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_name__org_patternfly_layout_Variable, value);
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_svg_HasSVGElement__int__org_jboss_elemento_TypedBuilder(/** HasSVGElement<E, B> */ element, /** number */ value) {
  /**@type {!SVGElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), SVGElement_$Overlay)).style.setProperty(this.f_name__org_patternfly_layout_Variable, j_l_String.m_valueOf__int__java_lang_String(value));
  return element.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 m_applyTo__org_jboss_elemento_svg_HasSVGElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** HasSVGElement<E, B> */ element, /** ?string */ value) {
  /**@type {!SVGElement}*/ ($Casts.$to(element.m_element__elemental2_dom_Element(), SVGElement_$Overlay)).style.setProperty(this.f_name__org_patternfly_layout_Variable, value);
  return element.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 m_applyTo__elemental2_dom_HTMLElement__int__void(/** HTMLElement */ element, /** number */ value) {
  this.m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(element, j_l_String.m_valueOf__int__java_lang_String(value));
 }
 /** @nodts */
 m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(/** HTMLElement */ element, /** ?string */ value) {
  element.style.setProperty(this.f_name__org_patternfly_layout_Variable, value);
 }
 /** @nodts */
 static $clinit() {
  Variable.$clinit = () =>{};
  Variable.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Variable;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SVGElement_$Overlay = goog.module.get('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
  PatternFly = goog.module.get('org.patternfly.core.PatternFly$impl');
  VariableScope = goog.module.get('org.patternfly.layout.VariableScope$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Variable, 'org.patternfly.layout.Variable');

exports = Variable;

//# sourceMappingURL=Variable.js.map

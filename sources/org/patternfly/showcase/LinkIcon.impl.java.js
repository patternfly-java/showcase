goog.module('org.patternfly.showcase.LinkIcon$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SVG = goog.forwardDeclare('org.jboss.elemento.svg.SVG$impl');
let SVGContainerBuilder = goog.forwardDeclare('org.jboss.elemento.svg.SVGContainerBuilder$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<SVGElement>}
 */
class LinkIcon extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SVGElement} @nodts*/
  this.f_root__org_patternfly_showcase_LinkIcon_;
 }
 /** @nodts @return {LinkIcon} */
 static m_linkIcon__org_patternfly_showcase_LinkIcon() {
  LinkIcon.$clinit();
  return LinkIcon.$create__();
 }
 /** @nodts @return {!LinkIcon} */
 static $create__() {
  LinkIcon.$clinit();
  let $instance = new LinkIcon();
  $instance.$ctor__org_patternfly_showcase_LinkIcon__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_LinkIcon__void() {
  this.$ctor__java_lang_Object__void();
  this.f_root__org_patternfly_showcase_LinkIcon_ = /**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(/**@type {SVGContainerBuilder<SVGElement>}*/ ($Casts.$to(SVG.m_svg__org_jboss_elemento_svg_SVGContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['pf-v5-svg ws-heading-anchor-icon'], j_l_String))), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('viewBox', '0 0 512 512'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('fill', 'currentColor'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'img'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '1em'), SVGContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('height', '1em'), SVGContainerBuilder)).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('vertical-align', 'middle'), SVGContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SVGContainerBuilder<SVGPathElement>}*/ ($Casts.$to(SVG.m_path__org_jboss_elemento_svg_SVGContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('d', 'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z'), SVGContainerBuilder))), SVGContainerBuilder)).m_element__org_jboss_elemento_svg_SVGElement();
 }
 /** @nodts @return {SVGElement} */
 m_element__org_jboss_elemento_svg_SVGElement() {
  return this.f_root__org_patternfly_showcase_LinkIcon_;
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__org_jboss_elemento_svg_SVGElement();
 }
 /** @nodts */
 static $clinit() {
  LinkIcon.$clinit = () =>{};
  LinkIcon.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinkIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  SVG = goog.module.get('org.jboss.elemento.svg.SVG$impl');
  SVGContainerBuilder = goog.module.get('org.jboss.elemento.svg.SVGContainerBuilder$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsElement.$markImplementor(LinkIcon);
$Util.$setClassMetadata(LinkIcon, 'org.patternfly.showcase.LinkIcon');

exports = LinkIcon;

//# sourceMappingURL=LinkIcon.js.map

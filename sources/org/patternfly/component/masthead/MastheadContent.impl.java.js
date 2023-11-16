goog.module('org.patternfly.component.masthead.MastheadContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, MastheadContent>}
 */
class MastheadContent extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MastheadContent} */
 static m_mastheadContent__org_patternfly_component_masthead_MastheadContent() {
  MastheadContent.$clinit();
  return MastheadContent.$create__();
 }
 /** @nodts @return {!MastheadContent} */
 static $create__() {
  MastheadContent.$clinit();
  let $instance = new MastheadContent();
  $instance.$ctor__org_patternfly_component_masthead_MastheadContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_masthead_MastheadContent__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {MastheadContent} */
 m_that__org_patternfly_component_masthead_MastheadContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_masthead_MastheadContent();
 }
 /** @nodts */
 static $clinit() {
  MastheadContent.$clinit = () =>{};
  MastheadContent.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MastheadContent, 'org.patternfly.component.masthead.MastheadContent');

exports = MastheadContent;

//# sourceMappingURL=MastheadContent.js.map

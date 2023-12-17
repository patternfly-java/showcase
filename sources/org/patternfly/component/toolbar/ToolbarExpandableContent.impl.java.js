goog.module('org.patternfly.component.toolbar.ToolbarExpandableContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ToolbarSubComponent = goog.require('org.patternfly.component.toolbar.ToolbarSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToolbarSubComponent<HTMLDivElement, ToolbarExpandableContent>}
 */
class ToolbarExpandableContent extends ToolbarSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {ToolbarExpandableContent} */
 static m_toolbarExpandableContent__org_patternfly_component_toolbar_ToolbarExpandableContent() {
  ToolbarExpandableContent.$clinit();
  return ToolbarExpandableContent.$create__();
 }
 /** @nodts @return {!ToolbarExpandableContent} */
 static $create__() {
  ToolbarExpandableContent.$clinit();
  let $instance = new ToolbarExpandableContent();
  $instance.$ctor__org_patternfly_component_toolbar_ToolbarExpandableContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_toolbar_ToolbarExpandableContent__void() {
  this.$ctor__org_patternfly_component_toolbar_ToolbarSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ToolbarExpandableContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarExpandableContent, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {ToolbarExpandableContent} */
 m_that__org_patternfly_component_toolbar_ToolbarExpandableContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToolbarExpandableContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_toolbar_ToolbarExpandableContent();
 }
 /** @nodts */
 static $clinit() {
  ToolbarExpandableContent.$clinit = () =>{};
  ToolbarExpandableContent.$loadModules();
  ToolbarSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToolbarExpandableContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToolbarExpandableContent.f_SUB_COMPONENT_NAME__org_patternfly_component_toolbar_ToolbarExpandableContent = 'tec';
$Util.$setClassMetadata(ToolbarExpandableContent, 'org.patternfly.component.toolbar.ToolbarExpandableContent');

exports = ToolbarExpandableContent;

//# sourceMappingURL=ToolbarExpandableContent.js.map

goog.module('org.patternfly.component.masthead.MastheadToggle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, MastheadToggle>}
 */
class MastheadToggle extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_masthead_MastheadToggle_;
 }
 /** @nodts @return {MastheadToggle} */
 static m_mastheadToggle__org_patternfly_component_masthead_MastheadToggle() {
  MastheadToggle.$clinit();
  return MastheadToggle.$create__();
 }
 /** @nodts @return {!MastheadToggle} */
 static $create__() {
  MastheadToggle.$clinit();
  let $instance = new MastheadToggle();
  $instance.$ctor__org_patternfly_component_masthead_MastheadToggle__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_masthead_MastheadToggle__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_masthead_MastheadToggle_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_bars__org_patternfly_layout_PredefinedIcon, 'Global Navigation').m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, true), Button)).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   this.m_toggle__void_$p_org_patternfly_component_masthead_MastheadToggle();
  })));
 }
 /** @nodts @return {MastheadToggle} */
 m_that__org_patternfly_component_masthead_MastheadToggle() {
  return this;
 }
 /** @nodts */
 m_toggle__void_$p_org_patternfly_component_masthead_MastheadToggle() {
  let current = Boolean.m_parseBoolean__java_lang_String__boolean(this.f_toggleButton__org_patternfly_component_masthead_MastheadToggle_.m_element__elemental2_dom_HTMLElement().getAttribute(Aria.f_expanded__org_patternfly_core_Aria));
  this.f_toggleButton__org_patternfly_component_masthead_MastheadToggle_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, !current);
  if (!$Equality.$same(Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_sidebar_Sidebar(), null)) {
   Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_sidebar_Sidebar().m_toggle__void();
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadToggle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_masthead_MastheadToggle();
 }
 /** @nodts */
 static $clinit() {
  MastheadToggle.$clinit = () =>{};
  MastheadToggle.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadToggle;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Page = goog.module.get('org.patternfly.component.page.Page$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MastheadToggle, 'org.patternfly.component.masthead.MastheadToggle');

exports = MastheadToggle;

//# sourceMappingURL=MastheadToggle.js.map

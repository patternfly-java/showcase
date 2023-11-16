goog.module('org.patternfly.component.Popover$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Position = goog.forwardDeclare('org.patternfly.layout.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Popover>}
 * @deprecated
 */
class Popover extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Popover} */
 static m_top__elemental2_dom_HTMLElement__org_patternfly_component_Popover(/** HTMLElement */ target) {
  Popover.$clinit();
  return Popover.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement(Position.f_top__org_patternfly_layout_Position, target);
 }
 /** @nodts @return {Popover} */
 static m_right__elemental2_dom_HTMLElement__org_patternfly_component_Popover(/** HTMLElement */ target) {
  Popover.$clinit();
  return Popover.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement(Position.f_right__org_patternfly_layout_Position, target);
 }
 /** @nodts @return {Popover} */
 static m_bottom__elemental2_dom_HTMLElement__org_patternfly_component_Popover(/** HTMLElement */ target) {
  Popover.$clinit();
  return Popover.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement(Position.f_bottom__org_patternfly_layout_Position, target);
 }
 /** @nodts @return {Popover} */
 static m_left__elemental2_dom_HTMLElement__org_patternfly_component_Popover(/** HTMLElement */ target) {
  Popover.$clinit();
  return Popover.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement(Position.f_left__org_patternfly_layout_Position, target);
 }
 /** @nodts @return {Popover} */
 static m_auto__elemental2_dom_HTMLElement__org_patternfly_component_Popover(/** HTMLElement */ target) {
  Popover.$clinit();
  return Popover.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement(Position.f_auto__org_patternfly_layout_Position, target);
 }
 /** @nodts @return {!Popover} */
 static $create__org_patternfly_layout_Position__elemental2_dom_HTMLElement(/** Position */ position, /** HTMLElement */ target) {
  Popover.$clinit();
  let $instance = new Popover();
  $instance.$ctor__org_patternfly_component_Popover__org_patternfly_layout_Position__elemental2_dom_HTMLElement__void(position, target);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Popover__org_patternfly_layout_Position__elemental2_dom_HTMLElement__void(/** Position */ position, /** HTMLElement */ target) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), position.f_modifier__org_patternfly_layout_Position], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Tooltip');
 }
 /** @nodts @return {Popover} */
 m_that__org_patternfly_component_Popover() {
  return this;
 }
 /** @nodts */
 m_show__void() {}
 /** @nodts */
 m_hide__void() {}
 //Bridge method.
 /** @final @override @nodts @return {Popover} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Popover();
 }
 /** @nodts */
 static $clinit() {
  Popover.$clinit = () =>{};
  Popover.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Popover;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  Position = goog.module.get('org.patternfly.layout.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Popover, 'org.patternfly.component.Popover');

exports = Popover;

//# sourceMappingURL=Popover.js.map

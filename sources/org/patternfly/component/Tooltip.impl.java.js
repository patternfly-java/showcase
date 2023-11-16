goog.module('org.patternfly.component.Tooltip$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Position = goog.forwardDeclare('org.patternfly.layout.Position$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Tooltip>}
 * @deprecated
 */
class Tooltip extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_content__org_patternfly_component_Tooltip_;
 }
 /** @nodts @return {Tooltip} */
 static m_top__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tooltip(/** ?string */ text, /** HTMLElement */ target) {
  Tooltip.$clinit();
  return Tooltip.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String(Position.f_top__org_patternfly_layout_Position, target, text);
 }
 /** @nodts @return {Tooltip} */
 static m_right__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tooltip(/** ?string */ text, /** HTMLElement */ target) {
  Tooltip.$clinit();
  return Tooltip.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String(Position.f_right__org_patternfly_layout_Position, target, text);
 }
 /** @nodts @return {Tooltip} */
 static m_bottom__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tooltip(/** ?string */ text, /** HTMLElement */ target) {
  Tooltip.$clinit();
  return Tooltip.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String(Position.f_bottom__org_patternfly_layout_Position, target, text);
 }
 /** @nodts @return {Tooltip} */
 static m_left__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tooltip(/** ?string */ text, /** HTMLElement */ target) {
  Tooltip.$clinit();
  return Tooltip.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String(Position.f_left__org_patternfly_layout_Position, target, text);
 }
 /** @nodts @return {Tooltip} */
 static m_auto__java_lang_String__elemental2_dom_HTMLElement__org_patternfly_component_Tooltip(/** ?string */ text, /** HTMLElement */ target) {
  Tooltip.$clinit();
  return Tooltip.$create__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String(Position.f_auto__org_patternfly_layout_Position, target, text);
 }
 /** @nodts @return {!Tooltip} */
 static $create__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String(/** Position */ position, /** HTMLElement */ target, /** ?string */ text) {
  Tooltip.$clinit();
  let $instance = new Tooltip();
  $instance.$ctor__org_patternfly_component_Tooltip__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String__void(position, target, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Tooltip__org_patternfly_layout_Position__elemental2_dom_HTMLElement__java_lang_String__void(/** Position */ position, /** HTMLElement */ target, /** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), position.f_modifier__org_patternfly_layout_Position], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', 'tooltip'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), 'Tooltip');
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tooltip__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_arrow__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_content__org_patternfly_component_Tooltip_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_tooltip__org_patternfly_layout_Classes, Classes.f_content__org_patternfly_layout_Classes], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)));
  if (!$Equality.$same(target, null)) {
   EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(target, EventType.f_mouseenter__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_show__void();
   });
   EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(target, EventType.f_mouseleave__org_jboss_elemento_EventType, (e_2) =>{
    let e_3 = /**@type {MouseEvent}*/ ($Casts.$to(e_2, MouseEvent_$Overlay));
    this.m_hide__void();
   });
   EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(target, Classes.f_focus__org_patternfly_layout_Classes, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_4) =>{
    this.m_show__void();
   }));
   EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(target, EventType.f_blur__org_jboss_elemento_EventType, (e_5) =>{
    let e_6 = /**@type {FocusEvent}*/ ($Casts.$to(e_5, FocusEvent_$Overlay));
    this.m_hide__void();
   });
  }
 }
 /** @nodts @return {Tooltip} */
 m_that__org_patternfly_component_Tooltip() {
  return this;
 }
 /** @nodts */
 m_show__void() {}
 /** @nodts */
 m_hide__void() {}
 /** @nodts @return {Tooltip} */
 m_leftAligned__org_patternfly_component_Tooltip() {
  this.f_content__org_patternfly_component_Tooltip_.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_textLeftAligned__org_patternfly_layout_Classes)], j_l_String)));
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Tooltip} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Tooltip();
 }
 /** @nodts */
 static $clinit() {
  Tooltip.$clinit = () =>{};
  Tooltip.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tooltip;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  FocusEvent_$Overlay = goog.module.get('elemental2.dom.FocusEvent.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  Position = goog.module.get('org.patternfly.layout.Position$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Tooltip, 'org.patternfly.component.Tooltip');

exports = Tooltip;

//# sourceMappingURL=Tooltip.js.map

goog.module('org.patternfly.component.alert.AlertActionGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let ButtonActionHandlerTuple = goog.forwardDeclare('org.patternfly.component.alert.AlertActionGroup.ButtonActionHandlerTuple$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, AlertActionGroup>}
 * @implements {ComponentReference<Alert>}
 */
class AlertActionGroup extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<ButtonActionHandlerTuple>} @nodts*/
  this.f_tuples__org_patternfly_component_alert_AlertActionGroup_;
  /**@type {Alert} @nodts*/
  this.f_alert__org_patternfly_component_alert_AlertActionGroup_;
 }
 /** @nodts @return {AlertActionGroup} */
 static m_alertActionGroup__org_patternfly_component_alert_AlertActionGroup() {
  AlertActionGroup.$clinit();
  return AlertActionGroup.$create__();
 }
 /** @nodts @return {!AlertActionGroup} */
 static $create__() {
  AlertActionGroup.$clinit();
  let $instance = new AlertActionGroup();
  $instance.$ctor__org_patternfly_component_alert_AlertActionGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_AlertActionGroup__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actionGroup__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_tuples__org_patternfly_component_alert_AlertActionGroup_ = /**@type {!ArrayList<ButtonActionHandlerTuple>}*/ (ArrayList.$create__());
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_alert_Alert__void(/** Alert */ alert) {
  this.f_alert__org_patternfly_component_alert_AlertActionGroup_ = alert;
  for (let $iterator = this.f_tuples__org_patternfly_component_alert_AlertActionGroup_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tuple = /**@type {ButtonActionHandlerTuple}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ButtonActionHandlerTuple));
   {
    tuple.f_button__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
     let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
     tuple.f_handler__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, alert);
    });
   }
  }
 }
 /** @nodts @return {Alert} */
 m_mainComponent__org_patternfly_component_alert_Alert() {
  return this.f_alert__org_patternfly_component_alert_AlertActionGroup_;
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__java_lang_String__org_patternfly_component_alert_AlertActionGroup(/** ?string */ action) {
  return this.m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button(action).m_inline__org_jboss_elemento_TypedBuilder(), Button)).m_link__org_patternfly_component_button_Button(), null);
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__java_lang_String__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/** ?string */ action, /** ComponentHandler<Alert> */ handler) {
  return this.m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button(action).m_inline__org_jboss_elemento_TypedBuilder(), Button)).m_link__org_patternfly_component_button_Button(), handler);
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__org_patternfly_component_button_Button__org_patternfly_component_alert_AlertActionGroup(/** Button */ action) {
  return this.m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(action, null);
 }
 /** @nodts @return {AlertActionGroup} */
 m_addAction__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__org_patternfly_component_alert_AlertActionGroup(/** Button */ action, /** ComponentHandler<Alert> */ handler) {
  if (!$Equality.$same(handler, null)) {
   this.f_tuples__org_patternfly_component_alert_AlertActionGroup_.add(ButtonActionHandlerTuple.$create__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler(action, handler));
  }
  return /**@type {AlertActionGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(action), AlertActionGroup));
 }
 /** @nodts @return {AlertActionGroup} */
 m_that__org_patternfly_component_alert_AlertActionGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Alert} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_alert_Alert();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** Alert */ arg0) {
  this.m_passComponent__org_patternfly_component_alert_Alert__void(/**@type {Alert}*/ ($Casts.$to(arg0, Alert)));
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertActionGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_alert_AlertActionGroup();
 }
 /** @nodts */
 static $clinit() {
  AlertActionGroup.$clinit = () =>{};
  AlertActionGroup.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlertActionGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Alert = goog.module.get('org.patternfly.component.alert.Alert$impl');
  ButtonActionHandlerTuple = goog.module.get('org.patternfly.component.alert.AlertActionGroup.ButtonActionHandlerTuple$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(AlertActionGroup);
$Util.$setClassMetadata(AlertActionGroup, 'org.patternfly.component.alert.AlertActionGroup');

exports = AlertActionGroup;

//# sourceMappingURL=AlertActionGroup.js.map

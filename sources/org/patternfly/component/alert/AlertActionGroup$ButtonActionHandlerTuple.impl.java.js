goog.module('org.patternfly.component.alert.AlertActionGroup.ButtonActionHandlerTuple$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Alert = goog.forwardDeclare('org.patternfly.component.alert.Alert$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');

class ButtonActionHandlerTuple extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple;
  /**@type {ComponentHandler<Alert>} @nodts*/
  this.f_handler__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple;
 }
 /** @nodts @return {!ButtonActionHandlerTuple} */
 static $create__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler(/** Button */ button, /** ComponentHandler<Alert> */ handler) {
  ButtonActionHandlerTuple.$clinit();
  let $instance = new ButtonActionHandlerTuple();
  $instance.$ctor__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__void(button, handler);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple__org_patternfly_component_button_Button__org_patternfly_handler_ComponentHandler__void(/** Button */ button, /** ComponentHandler<Alert> */ handler) {
  this.$ctor__java_lang_Object__void();
  this.f_button__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple = button;
  this.f_handler__org_patternfly_component_alert_AlertActionGroup_ButtonActionHandlerTuple = handler;
 }
 /** @nodts */
 static $clinit() {
  ButtonActionHandlerTuple.$clinit = () =>{};
  ButtonActionHandlerTuple.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ButtonActionHandlerTuple;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ButtonActionHandlerTuple, 'org.patternfly.component.alert.AlertActionGroup$ButtonActionHandlerTuple');

exports = ButtonActionHandlerTuple;

//# sourceMappingURL=AlertActionGroup$ButtonActionHandlerTuple.js.map

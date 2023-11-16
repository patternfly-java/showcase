goog.module('org.patternfly.component.menu.MenuActionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.menu.MenuActionHandler.$LambdaAdaptor$impl');
let MenuItemAction = goog.forwardDeclare('org.patternfly.component.menu.MenuItemAction$impl');

/**
 * @interface
 */
class MenuActionHandler {
 /** @abstract @nodts */
 m_onAction__org_patternfly_component_menu_MenuItemAction__void(/** MenuItemAction */ itemAction) {}
 /** @nodts @return {MenuActionHandler} */
 static $adapt(/** ?function(MenuItemAction):void */ fn) {
  MenuActionHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  MenuActionHandler.$clinit = () =>{};
  MenuActionHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_menu_MenuActionHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_menu_MenuActionHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.menu.MenuActionHandler.$LambdaAdaptor$impl');
 }
}
MenuActionHandler.$markImplementor(/**@type {Function}*/ (MenuActionHandler));
$Util.$setClassMetadataForInterface(MenuActionHandler, 'org.patternfly.component.menu.MenuActionHandler');

exports = MenuActionHandler;

//# sourceMappingURL=MenuActionHandler.js.map

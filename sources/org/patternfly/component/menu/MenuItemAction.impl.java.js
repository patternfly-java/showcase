goog.module('org.patternfly.component.menu.MenuItemAction$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLButtonElement, MenuItemAction>}
 * @implements {ComponentReference<Menu>}
 */
class MenuItemAction extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_menu_MenuItemAction;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_;
  /**@type {MenuItem} @nodts*/
  this.f_menuItem__org_patternfly_component_menu_MenuItemAction;
  /**@type {ComponentHandler<MenuItemAction>} @nodts*/
  this.f_handler__org_patternfly_component_menu_MenuItemAction;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_menu_MenuItemAction_;
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__org_patternfly_component_menu_MenuItemAction(/** ?string */ id) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__java_lang_String(id, null);
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__org_patternfly_layout_PredefinedIcon__org_patternfly_component_menu_MenuItemAction(/** ?string */ id, /** PredefinedIcon */ predefinedIcon) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__java_lang_String(id, predefinedIcon.f_className__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {MenuItemAction} */
 static m_menuItemAction__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItemAction(/** ?string */ id, /** ?string */ iconClass) {
  MenuItemAction.$clinit();
  return MenuItemAction.$create__java_lang_String__java_lang_String(id, iconClass);
 }
 //Factory method corresponding to constructor 'MenuItemAction(String, String)'.
 /** @nodts @return {!MenuItemAction} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ iconClass) {
  MenuItemAction.$clinit();
  let $instance = new MenuItemAction();
  $instance.$ctor__org_patternfly_component_menu_MenuItemAction__java_lang_String__java_lang_String__void(id, iconClass);
  return $instance;
 }
 //Initialization from constructor 'MenuItemAction(String, String)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItemAction__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ iconClass) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes, Classes.f_action__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes, Classes.f_action__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass)), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  this.f_id__org_patternfly_component_menu_MenuItemAction = id;
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes, Classes.f_action__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))));
 }
 //Factory method corresponding to constructor 'MenuItemAction(Menu, MenuItem, MenuItemAction, HTMLButtonElement)'.
 /** @nodts @return {!MenuItemAction} */
 static $create__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLButtonElement(/** Menu */ menu, /** MenuItem */ favoriteItem, /** MenuItemAction */ sourceItemAction, /** HTMLButtonElement */ itemActionElement) {
  MenuItemAction.$clinit();
  let $instance = new MenuItemAction();
  $instance.$ctor__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLButtonElement__void(menu, favoriteItem, sourceItemAction, itemActionElement);
  return $instance;
 }
 //Initialization from constructor 'MenuItemAction(Menu, MenuItem, MenuItemAction, HTMLButtonElement)'.
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuItemAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__elemental2_dom_HTMLButtonElement__void(/** Menu */ menu, /** MenuItem */ favoriteItem, /** MenuItemAction */ sourceItemAction, /** HTMLButtonElement */ itemActionElement) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(itemActionElement);
  this.f_id__org_patternfly_component_menu_MenuItemAction = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('fav', /**@type {!Array<?string>}*/ ($Arrays.$init([sourceItemAction.f_id__org_patternfly_component_menu_MenuItemAction], j_l_String)));
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_ = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes, Classes.f_action__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))));
  this.f_menuItem__org_patternfly_component_menu_MenuItemAction = favoriteItem;
  if (!$Equality.$same(sourceItemAction.f_handler__org_patternfly_component_menu_MenuItemAction, null)) {
   this.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItemAction(sourceItemAction.f_handler__org_patternfly_component_menu_MenuItemAction);
  }
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_menu_Menu__void(/** Menu */ menu) {
  this.f_menu__org_patternfly_component_menu_MenuItemAction_ = menu;
  this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   menu.m_handleItemAction__org_patternfly_component_menu_MenuItemAction__void_$pp_org_patternfly_component_menu(this);
  });
 }
 /** @nodts @return {Menu} */
 m_mainComponent__org_patternfly_component_menu_Menu() {
  return this.f_menu__org_patternfly_component_menu_MenuItemAction_;
 }
 /** @nodts @return {MenuItemAction} */
 m_icon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_menu_MenuItemAction(/** PredefinedIcon */ predefinedIcon) {
  return this.m_icon__java_lang_String__org_patternfly_component_menu_MenuItemAction(predefinedIcon.f_className__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {MenuItemAction} */
 m_icon__java_lang_String__org_patternfly_component_menu_MenuItemAction(/** ?string */ iconClass) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_);
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_.appendChild(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass).m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_icon__elemental2_dom_HTMLElement__org_patternfly_component_menu_MenuItemAction(/** HTMLElement */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_);
  this.f_iconContainer__org_patternfly_component_menu_MenuItemAction_.appendChild(icon);
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_that__org_patternfly_component_menu_MenuItemAction() {
  return this;
 }
 /** @nodts @return {MenuItemAction} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_menu_MenuItemAction(/** ComponentHandler<MenuItemAction> */ handler) {
  this.f_handler__org_patternfly_component_menu_MenuItemAction = handler;
  return /**@type {MenuItemAction}*/ ($Casts.$to(this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  }), MenuItemAction));
 }
 //Bridge method.
 /** @final @override @nodts @return {Menu} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_menu_Menu();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** Menu */ arg0) {
  this.m_passComponent__org_patternfly_component_menu_Menu__void(/**@type {Menu}*/ ($Casts.$to(arg0, Menu)));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuItemAction} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuItemAction();
 }
 /** @nodts */
 static $clinit() {
  MenuItemAction.$clinit = () =>{};
  MenuItemAction.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItemAction;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(MenuItemAction);
$Util.$setClassMetadata(MenuItemAction, 'org.patternfly.component.menu.MenuItemAction');

exports = MenuItemAction;

//# sourceMappingURL=MenuItemAction.js.map

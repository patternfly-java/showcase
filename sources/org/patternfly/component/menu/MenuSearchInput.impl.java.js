goog.module('org.patternfly.component.menu.MenuSearchInput$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLElement, MenuSearchInput>}
 * @implements {ComponentReference<Menu>}
 */
class MenuSearchInput extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_menu_MenuSearchInput_;
 }
 /** @nodts @return {MenuSearchInput} */
 static m_menuSearchInput__org_patternfly_component_menu_MenuSearchInput() {
  MenuSearchInput.$clinit();
  return MenuSearchInput.$create__();
 }
 /** @nodts @return {!MenuSearchInput} */
 static $create__() {
  MenuSearchInput.$clinit();
  let $instance = new MenuSearchInput();
  $instance.$ctor__org_patternfly_component_menu_MenuSearchInput__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuSearchInput__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_search__org_patternfly_layout_Classes, Classes.f_input__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_menu_Menu__void(/** Menu */ menu) {
  this.f_menu__org_patternfly_component_menu_MenuSearchInput_ = menu;
 }
 /** @nodts @return {Menu} */
 m_mainComponent__org_patternfly_component_menu_Menu() {
  return this.f_menu__org_patternfly_component_menu_MenuSearchInput_;
 }
 /** @nodts @return {MenuSearchInput} */
 m_that__org_patternfly_component_menu_MenuSearchInput() {
  return null;
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
 /** @final @override @nodts @return {MenuSearchInput} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuSearchInput();
 }
 /** @nodts */
 static $clinit() {
  MenuSearchInput.$clinit = () =>{};
  MenuSearchInput.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuSearchInput;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(MenuSearchInput);
$Util.$setClassMetadata(MenuSearchInput, 'org.patternfly.component.menu.MenuSearchInput');

exports = MenuSearchInput;

//# sourceMappingURL=MenuSearchInput.js.map

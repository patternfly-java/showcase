goog.module('org.patternfly.component.menu.MenuGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLElement, MenuGroup>}
 * @implements {ComponentReference<Menu>}
 */
class MenuGroup extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {MenuList} @nodts*/
  this.f_list__org_patternfly_component_menu_MenuGroup;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_menu_MenuGroup_;
 }
 /** @nodts @return {MenuGroup} */
 static m_menuGroup__org_patternfly_component_menu_MenuGroup() {
  MenuGroup.$clinit();
  return MenuGroup.$create__java_lang_String(null);
 }
 /** @nodts @return {MenuGroup} */
 static m_menuGroup__java_lang_String__org_patternfly_component_menu_MenuGroup(/** ?string */ text) {
  MenuGroup.$clinit();
  return MenuGroup.$create__java_lang_String(text);
 }
 /** @nodts @return {!MenuGroup} */
 static $create__java_lang_String(/** ?string */ text) {
  MenuGroup.$clinit();
  let $instance = new MenuGroup();
  $instance.$ctor__org_patternfly_component_menu_MenuGroup__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuGroup__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(text, null)) {
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(3, text).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_layout_Classes, Classes.f_title__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
  }
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_menu_Menu__void(/** Menu */ menu) {
  this.f_menu__org_patternfly_component_menu_MenuGroup_ = menu;
  if (!$Equality.$same(this.f_list__org_patternfly_component_menu_MenuGroup, null)) {
   this.f_list__org_patternfly_component_menu_MenuGroup.m_passComponent__org_patternfly_component_menu_Menu__void(menu);
  }
 }
 /** @nodts @return {Menu} */
 m_mainComponent__org_patternfly_component_menu_Menu() {
  return this.f_menu__org_patternfly_component_menu_MenuGroup_;
 }
 /** @nodts @return {MenuGroup} */
 m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(/** MenuList */ list) {
  return this.m_add__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(list);
 }
 /** @nodts @return {MenuGroup} */
 m_add__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuGroup(/** MenuList */ list) {
  this.f_list__org_patternfly_component_menu_MenuGroup = list;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLUListElement}*/ ($Casts.$to(list.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  return this;
 }
 /** @nodts @return {MenuGroup} */
 m_that__org_patternfly_component_menu_MenuGroup() {
  return this;
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
 /** @final @override @nodts @return {MenuGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuGroup();
 }
 /** @nodts */
 static $clinit() {
  MenuGroup.$clinit = () =>{};
  MenuGroup.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(MenuGroup);
$Util.$setClassMetadata(MenuGroup, 'org.patternfly.component.menu.MenuGroup');

exports = MenuGroup;

//# sourceMappingURL=MenuGroup.js.map

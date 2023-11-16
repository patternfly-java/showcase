goog.module('org.patternfly.component.menu.MenuList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuItemType = goog.forwardDeclare('org.patternfly.component.menu.MenuItemType$impl');
let MenuType = goog.forwardDeclare('org.patternfly.component.menu.MenuType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.core.SelectionMode$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLUListElement, MenuList>}
 * @implements {ComponentReference<Menu>}
 */
class MenuList extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, MenuItem>} @nodts*/
  this.f_items__org_patternfly_component_menu_MenuList;
  /**@type {Menu} @nodts*/
  this.f_menu__org_patternfly_component_menu_MenuList_;
 }
 /** @nodts @return {MenuList} */
 static m_menuList__org_patternfly_component_menu_MenuList() {
  MenuList.$clinit();
  return MenuList.$create__();
 }
 /** @nodts @return {!MenuList} */
 static $create__() {
  MenuList.$clinit();
  let $instance = new MenuList();
  $instance.$ctor__org_patternfly_component_menu_MenuList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuList__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'menu'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_items__org_patternfly_component_menu_MenuList = /**@type {!HashMap<?string, MenuItem>}*/ (HashMap.$create__());
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_menu_Menu__void(/** Menu */ menu) {
  this.f_menu__org_patternfly_component_menu_MenuList_ = menu;
  switch (menu.f_menuType__org_patternfly_component_menu_Menu.ordinal()) {
   case MenuType.$ordinal_menu__org_patternfly_component_menu_MenuType: 
   case MenuType.$ordinal_dropdown__org_patternfly_component_menu_MenuType: 
    this.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'menu');
    break;
   case MenuType.$ordinal_select__org_patternfly_component_menu_MenuType: 
    this.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'listbox');
    break;
  }
  if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_single__org_patternfly_core_SelectionMode)) {
   this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_multiSelectable__org_patternfly_core_Aria, false);
  } else if ($Equality.$same(menu.f_selectionMode__org_patternfly_component_menu_Menu, SelectionMode.f_multi__org_patternfly_core_SelectionMode)) {
   this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_multiSelectable__org_patternfly_core_Aria, true);
  }
  for (let $iterator = this.f_items__org_patternfly_component_menu_MenuList.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let menuItem = /**@type {MenuItem}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), MenuItem));
   {
    menuItem.m_passComponent__org_patternfly_component_menu_Menu__void(menu);
   }
  }
 }
 /** @nodts @return {Menu} */
 m_mainComponent__org_patternfly_component_menu_Menu() {
  return this.f_menu__org_patternfly_component_menu_MenuList_;
 }
 /** @nodts @template T @return {MenuList} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_menu_MenuList(/** Iterable<T> */ items, /** j_u_function_Function<T, MenuItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let menuItem = /**@type {MenuItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), MenuItem));
    this.m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(menuItem);
   }
  }
  return this;
 }
 /** @nodts @return {MenuList} */
 m_addItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuList(/** ?string */ id, /** ?string */ text) {
  return this.m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_menuItem__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_menu_MenuItem(id, MenuItemType.f_action__org_patternfly_component_menu_MenuItemType).m_text__java_lang_String__org_patternfly_component_menu_MenuItem(text));
 }
 /** @nodts @return {MenuList} */
 m_addItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuList(/** ?string */ id, /** ?string */ text, /** ?string */ href) {
  return this.m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_menuItem__java_lang_String__org_patternfly_component_menu_MenuItemType__org_patternfly_component_menu_MenuItem(id, MenuItemType.f_link__org_patternfly_component_menu_MenuItemType).m_text__java_lang_String__org_patternfly_component_menu_MenuItem(text).m_href__java_lang_String__org_patternfly_component_menu_MenuItem(href));
 }
 /** @nodts @return {MenuList} */
 m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/** MenuItem */ item) {
  this.f_items__org_patternfly_component_menu_MenuList.put(item.f_id__org_patternfly_component_menu_MenuItem, item);
  return this.m_add__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(item);
 }
 /** @nodts @return {MenuList} */
 m_add__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/** MenuItem */ item) {
  this.f_items__org_patternfly_component_menu_MenuList.put(item.f_id__org_patternfly_component_menu_MenuItem, item);
  if (/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).isConnected) {
   item.m_passComponent__org_patternfly_component_menu_Menu__void(this.f_menu__org_patternfly_component_menu_MenuList_);
  }
  return /**@type {MenuList}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(item.m_element__elemental2_dom_HTMLElement()), MenuList));
 }
 /** @nodts @return {MenuList} */
 m_addDivider__org_patternfly_component_menu_MenuList() {
  return /**@type {MenuList}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType)), MenuList));
 }
 /** @nodts @return {MenuList} */
 m_that__org_patternfly_component_menu_MenuList() {
  return this;
 }
 /** @nodts */
 m_removeItem__org_patternfly_component_menu_MenuItem__void_$pp_org_patternfly_component_menu(/** MenuItem */ favoriteItem) {
  this.f_items__org_patternfly_component_menu_MenuList.remove(favoriteItem.f_id__org_patternfly_component_menu_MenuItem);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(favoriteItem);
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
 /** @final @override @nodts @return {MenuList} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuList();
 }
 /** @nodts */
 static $clinit() {
  MenuList.$clinit = () =>{};
  MenuList.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuItemType = goog.module.get('org.patternfly.component.menu.MenuItemType$impl');
  MenuType = goog.module.get('org.patternfly.component.menu.MenuType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  SelectionMode = goog.module.get('org.patternfly.core.SelectionMode$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(MenuList);
$Util.$setClassMetadata(MenuList, 'org.patternfly.component.menu.MenuList');

exports = MenuList;

//# sourceMappingURL=MenuList.js.map

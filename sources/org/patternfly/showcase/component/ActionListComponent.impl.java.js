goog.module('org.patternfly.showcase.component.ActionListComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ActionList = goog.forwardDeclare('org.patternfly.component.actionlist.ActionList$impl');
let ActionListGroup = goog.forwardDeclare('org.patternfly.component.actionlist.ActionListGroup$impl');
let ActionListItem = goog.forwardDeclare('org.patternfly.component.actionlist.ActionListItem$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ActionListComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ActionListComponent} */
 static $create__() {
  ActionListComponent.$clinit();
  let $instance = new ActionListComponent();
  $instance.$ctor__org_patternfly_showcase_component_ActionListComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ActionListComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Action list', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/actionlist/ActionList.html', 'https://www.patternfly.org/components/action-list/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('An action list is a group of actions, controls, or buttons with set spacing.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('action-list-single-group', 'Action list single group', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('action-list-single-group'), j_l_String)), Supplier.$adapt(() =>{
   let dropdown = Dropdown.m_dropdown__org_patternfly_component_menu_Dropdown().m_addToggle__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(MenuToggle.m_menuToggle__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(PredefinedIcon.f_ellipsisV__org_patternfly_style_PredefinedIcon, 'kebab dropdown toggle')).m_addMenu__org_patternfly_component_menu_Menu__org_patternfly_component_menu_Dropdown(Menu.m_menu__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-0', 'Action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-1', 'Link', '#home')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-2', 'Disabled action').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-3', 'Disabled link', '#').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addDivider__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-4', 'Separated action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('item-5', 'Separated link', '#home')))));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_actionlist_ActionList().m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Next').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Back').m_secondary__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('With kebab'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_actionlist_ActionList().m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Next').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Back').m_secondary__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem))).m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(dropdown), ActionListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('action-list-icons', 'Action list with icons', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('action-list-icons'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_actionlist_ActionList().m_icons__org_patternfly_component_actionlist_ActionList().m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_times__org_patternfly_style_PredefinedIcon), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem))).m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_check__org_patternfly_style_PredefinedIcon), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('action-list-multiple-groups', 'Action list multiple groups', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('action-list-multiple-groups'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('In modals, forms, data lists'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_actionlist_ActionList().m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Save').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionList(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Cancel').m_link__org_patternfly_component_button_Button()), ActionListItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('In wizards'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ActionList.m_actionList__org_patternfly_component_actionlist_ActionList().m_addGroup__org_patternfly_component_actionlist_ActionListGroup__org_patternfly_component_actionlist_ActionList(ActionListGroup.m_actionListGroup__org_patternfly_component_actionlist_ActionListGroup().m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionListGroup(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Next').m_primary__org_patternfly_component_button_Button()), ActionListItem))).m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionListGroup(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Back').m_secondary__org_jboss_elemento_TypedBuilder(), Button))), ActionListItem)))).m_addGroup__org_patternfly_component_actionlist_ActionListGroup__org_patternfly_component_actionlist_ActionList(ActionListGroup.m_actionListGroup__org_patternfly_component_actionlist_ActionListGroup().m_addItem__org_patternfly_component_actionlist_ActionListItem__org_patternfly_component_actionlist_ActionListGroup(/**@type {ActionListItem}*/ ($Casts.$to(ActionListItem.m_actionListItem__org_patternfly_component_actionlist_ActionListItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Cancel').m_link__org_patternfly_component_button_Button()), ActionListItem))))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  ActionListComponent.$clinit = () =>{};
  ActionListComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionListComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ActionList = goog.module.get('org.patternfly.component.actionlist.ActionList$impl');
  ActionListGroup = goog.module.get('org.patternfly.component.actionlist.ActionListGroup$impl');
  ActionListItem = goog.module.get('org.patternfly.component.actionlist.ActionListItem$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Dropdown = goog.module.get('org.patternfly.component.menu.Dropdown$impl');
  Menu = goog.module.get('org.patternfly.component.menu.Menu$impl');
  MenuContent = goog.module.get('org.patternfly.component.menu.MenuContent$impl');
  MenuItem = goog.module.get('org.patternfly.component.menu.MenuItem$impl');
  MenuList = goog.module.get('org.patternfly.component.menu.MenuList$impl');
  MenuToggle = goog.module.get('org.patternfly.component.menu.MenuToggle$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ActionListComponent, 'org.patternfly.showcase.component.ActionListComponent');

exports = ActionListComponent;

//# sourceMappingURL=ActionListComponent.js.map

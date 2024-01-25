goog.module('org.patternfly.showcase.component.HintComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Hint = goog.forwardDeclare('org.patternfly.component.hint.Hint$impl');
let HintActions = goog.forwardDeclare('org.patternfly.component.hint.HintActions$impl');
let HintBody = goog.forwardDeclare('org.patternfly.component.hint.HintBody$impl');
let HintFooter = goog.forwardDeclare('org.patternfly.component.hint.HintFooter$impl');
let HintTitle = goog.forwardDeclare('org.patternfly.component.hint.HintTitle$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.menu.Dropdown$impl');
let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuContent = goog.forwardDeclare('org.patternfly.component.menu.MenuContent$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuList = goog.forwardDeclare('org.patternfly.component.menu.MenuList$impl');
let MenuToggle = goog.forwardDeclare('org.patternfly.component.menu.MenuToggle$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HintComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!HintComponent} */
 static $create__() {
  HintComponent.$clinit();
  let $instance = new HintComponent();
  $instance.$ctor__org_patternfly_showcase_component_HintComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_HintComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Hint', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/hint/Hint.html', 'https://www.patternfly.org/components/hint/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A hint is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('hint-basic', 'Basic with title', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('hint-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Hint.m_hint__org_patternfly_component_hint_Hint().m_addActions__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(/**@type {HintActions}*/ ($Casts.$to(HintActions.m_hintActions__org_patternfly_component_hint_HintActions().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Dropdown.m_dropdown__org_patternfly_component_menu_Dropdown().m_addToggle__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(MenuToggle.m_menuToggle__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(PredefinedIcon.f_ellipsisV__org_patternfly_style_PredefinedIcon, 'kebab dropdown toggle')).m_addMenu__org_patternfly_component_menu_Menu__org_patternfly_component_menu_Dropdown(Menu.m_menu__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-item-0', 'Action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-item-1', 'Link', '#home')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-item-2', 'Disabled action').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-item-3', 'Disabled link', '#').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addDivider__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-item-4', 'Separated action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-item-5', 'Separated link', '#home')))))), HintActions))).m_addTitle__org_patternfly_component_hint_HintTitle__org_patternfly_component_hint_Hint(/**@type {HintTitle}*/ ($Casts.$to(HintTitle.m_hintTitle__org_patternfly_component_hint_HintTitle().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Do more with Find it Fix it capabilities'), HintTitle))).m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/**@type {HintBody}*/ ($Casts.$to(HintBody.m_hintBody__org_patternfly_component_hint_HintBody().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.'), HintBody))).m_addFooter__org_patternfly_component_hint_HintFooter__org_patternfly_component_hint_Hint(/**@type {HintFooter}*/ ($Casts.$to(HintFooter.m_hintFooter__org_patternfly_component_hint_HintFooter().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_inline__org_jboss_elemento_TypedBuilder(), Button)).m_text__java_lang_String__org_patternfly_component_button_Button('Try it for 90 days')), HintFooter)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('hint-basic-no-title', 'Basic without title', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('hint-basic-no-title'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Hint.m_hint__org_patternfly_component_hint_Hint().m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/**@type {HintBody}*/ ($Casts.$to(/**@type {HintBody}*/ ($Casts.$to(HintBody.m_hintBody__org_patternfly_component_hint_HintBody().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Welcome to the new documentation experience. '), HintBody)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_inline__org_jboss_elemento_TypedBuilder(), Button)).m_text__java_lang_String__org_patternfly_component_button_Button('Learn more about the improved features.')), HintBody)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Hint.m_hint__org_patternfly_component_hint_Hint().m_addActions__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(/**@type {HintActions}*/ ($Casts.$to(HintActions.m_hintActions__org_patternfly_component_hint_HintActions().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Dropdown.m_dropdown__org_patternfly_component_menu_Dropdown().m_addToggle__org_patternfly_component_menu_MenuToggle__org_patternfly_component_menu_Dropdown(MenuToggle.m_menuToggle__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(PredefinedIcon.f_ellipsisV__org_patternfly_style_PredefinedIcon, 'kebab dropdown toggle')).m_addMenu__org_patternfly_component_menu_Menu__org_patternfly_component_menu_Dropdown(Menu.m_menu__org_patternfly_component_menu_Menu().m_addContent__org_patternfly_component_menu_MenuContent__org_patternfly_component_menu_Menu(MenuContent.m_menuContent__org_patternfly_component_menu_MenuContent().m_addList__org_patternfly_component_menu_MenuList__org_patternfly_component_menu_MenuContent(MenuList.m_menuList__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-no-title-item-0', 'Action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-no-title-item-1', 'Link', '#home')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-no-title-item-2', 'Disabled action').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(/**@type {MenuItem}*/ ($Casts.$to(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-no-title-item-3', 'Disabled link', '#').m_disabled__org_jboss_elemento_TypedBuilder(), MenuItem))).m_addDivider__org_patternfly_component_menu_MenuList().m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_actionMenuItem__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-no-title-item-4', 'Separated action')).m_addItem__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuList(MenuItem.m_linkMenuItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_menu_MenuItem('hint-basic-no-title-item-5', 'Separated link', '#home')))))), HintActions))).m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/**@type {HintBody}*/ ($Casts.$to(HintBody.m_hintBody__org_patternfly_component_hint_HintBody().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.'), HintBody))).m_addFooter__org_patternfly_component_hint_HintFooter__org_patternfly_component_hint_Hint(/**@type {HintFooter}*/ ($Casts.$to(HintFooter.m_hintFooter__org_patternfly_component_hint_HintFooter().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_inline__org_jboss_elemento_TypedBuilder(), Button)).m_text__java_lang_String__org_patternfly_component_button_Button('Try it for 90 days')), HintFooter)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  HintComponent.$clinit = () =>{};
  HintComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HintComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Hint = goog.module.get('org.patternfly.component.hint.Hint$impl');
  HintActions = goog.module.get('org.patternfly.component.hint.HintActions$impl');
  HintBody = goog.module.get('org.patternfly.component.hint.HintBody$impl');
  HintFooter = goog.module.get('org.patternfly.component.hint.HintFooter$impl');
  HintTitle = goog.module.get('org.patternfly.component.hint.HintTitle$impl');
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
$Util.$setClassMetadata(HintComponent, 'org.patternfly.showcase.component.HintComponent');

exports = HintComponent;

//# sourceMappingURL=HintComponent.js.map

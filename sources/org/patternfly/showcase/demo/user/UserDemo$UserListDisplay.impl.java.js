goog.module('org.patternfly.showcase.demo.user.UserDemo.UserListDisplay$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.patternfly.component.DataList.Display$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DataList = goog.forwardDeclare('org.patternfly.component.DataList$impl');
let ExpandableBody = goog.forwardDeclare('org.patternfly.component.DataList.ExpandableBody$impl');
let ExpandableContent = goog.forwardDeclare('org.patternfly.component.DataList.ExpandableContent$impl');
let ItemAction = goog.forwardDeclare('org.patternfly.component.DataList.ItemAction$impl');
let ItemCell = goog.forwardDeclare('org.patternfly.component.DataList.ItemCell$impl');
let ItemContent = goog.forwardDeclare('org.patternfly.component.DataList.ItemContent$impl');
let ItemRow = goog.forwardDeclare('org.patternfly.component.DataList.ItemRow$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.demo.user.User.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Display<Object>}
 */
class UserListDisplay extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!UserListDisplay} */
 static $create__() {
  UserListDisplay.$clinit();
  let $instance = new UserListDisplay();
  $instance.$ctor__org_patternfly_showcase_demo_user_UserDemo_UserListDisplay__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_demo_user_UserDemo_UserListDisplay__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__org_patternfly_showcase_demo_user_User__void(/** HTMLContainerBuilder<HTMLLIElement> */ li, /** DataProvider<Object> */ dataProvider, /** Object */ user) {
  li.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ItemRow}*/ ($Casts.$to(/**@type {ItemRow}*/ ($Casts.$to(/**@type {ItemRow}*/ ($Casts.$to(DataList.m_itemRow__org_patternfly_component_DataList_ItemRow().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(DataList.m_itemControl__org_patternfly_component_DataList_ItemControl().m_expandable__org_patternfly_component_DataList_ItemControl().m_checkbox__org_patternfly_component_DataList_ItemControl()), ItemRow)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ItemContent}*/ ($Casts.$to(/**@type {ItemContent}*/ ($Casts.$to(/**@type {ItemContent}*/ ($Casts.$to(DataList.m_itemContent__org_patternfly_component_DataList_ItemContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ItemCell}*/ ($Casts.$to(/**@type {ItemCell}*/ ($Casts.$to(DataList.m_itemCell__org_patternfly_component_DataList_ItemCell().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_icon__org_patternfly_layout_Classes)], j_l_String))), ItemCell)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_nat__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLImageElement(user)), ItemCell))), ItemContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ItemCell}*/ ($Casts.$to(DataList.m_itemCell__org_patternfly_component_DataList_ItemCell().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(dataProvider.m_getId__java_lang_Object__java_lang_String(user)), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder($Overlay.m_fullName__$devirt__org_patternfly_showcase_demo_user_User__java_lang_String(user)), HTMLContainerBuilder))), ItemCell))), ItemContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ItemCell}*/ ($Casts.$to(/**@type {ItemCell}*/ ($Casts.$to(/**@type {ItemCell}*/ ($Casts.$to(/**@type {ItemCell}*/ ($Casts.$to(DataList.m_itemCell__org_patternfly_component_DataList_ItemCell().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('flex-4')], j_l_String))), ItemCell)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.m_fas__java_lang_String__java_lang_String('user-alt'), Classes.m_util__java_lang_String__java_lang_String('mr-sm')], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(user.login.username), HTMLContainerBuilder))), ItemCell)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_small__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('MD5: '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_code__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(user.login.md5), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))), ItemCell)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_small__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('SHA-1: '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_code__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(user.login.sha1), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder))), ItemCell))), ItemContent))), ItemRow)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ItemAction}*/ ($Casts.$to(/**@type {ItemAction}*/ ($Casts.$to(DataList.m_itemAction__org_patternfly_component_DataList_ItemAction().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Edit').m_secondary__org_patternfly_component_button_Button()), ItemAction)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Remove').m_secondary__org_patternfly_component_button_Button()), ItemAction))), ItemRow)));
  li.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ExpandableContent}*/ ($Casts.$to(DataList.m_expandableContent__org_patternfly_component_DataList_ExpandableContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ExpandableBody}*/ ($Casts.$to(DataList.m_expandableBody__org_patternfly_component_DataList_ExpandableBody().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_flex__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String('align-items-center'), Classes.m_modifier__java_lang_String__java_lang_String('space-items-2xl')], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_photo__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLDivElement(user)), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_address__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLElement(user)), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_contact__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLElement(user)), HTMLContainerBuilder))), ExpandableBody))), ExpandableContent)));
 }
 //Bridge method.
 /** @final @override @nodts */
 m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** HTMLContainerBuilder<HTMLLIElement> */ arg0, /** DataProvider<Object> */ arg1, /** Object */ arg2) {
  this.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__org_patternfly_showcase_demo_user_User__void(arg0, arg1, /**@type {Object}*/ ($Casts.$to(arg2, $Overlay)));
 }
 /** @nodts */
 static $clinit() {
  UserListDisplay.$clinit = () =>{};
  UserListDisplay.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UserListDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  DataList = goog.module.get('org.patternfly.component.DataList$impl');
  ExpandableBody = goog.module.get('org.patternfly.component.DataList.ExpandableBody$impl');
  ExpandableContent = goog.module.get('org.patternfly.component.DataList.ExpandableContent$impl');
  ItemAction = goog.module.get('org.patternfly.component.DataList.ItemAction$impl');
  ItemCell = goog.module.get('org.patternfly.component.DataList.ItemCell$impl');
  ItemContent = goog.module.get('org.patternfly.component.DataList.ItemContent$impl');
  ItemRow = goog.module.get('org.patternfly.component.DataList.ItemRow$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.demo.user.User.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Display.$markImplementor(UserListDisplay);
$Util.$setClassMetadata(UserListDisplay, 'org.patternfly.showcase.demo.user.UserDemo$UserListDisplay');

exports = UserListDisplay;

//# sourceMappingURL=UserDemo$UserListDisplay.js.map

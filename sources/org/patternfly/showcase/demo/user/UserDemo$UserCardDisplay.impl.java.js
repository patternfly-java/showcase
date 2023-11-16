goog.module('org.patternfly.showcase.demo.user.UserDemo.UserCardDisplay$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.patternfly.component.CardView.Display$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Card = goog.forwardDeclare('org.patternfly.component.Card$impl');
let Body = goog.forwardDeclare('org.patternfly.component.Card.Body$impl');
let Footer = goog.forwardDeclare('org.patternfly.component.Card.Footer$impl');
let Head = goog.forwardDeclare('org.patternfly.component.Card.Head$impl');
let Actions = goog.forwardDeclare('org.patternfly.component.Card.Head.Actions$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.Dropdown$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.demo.user.User.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Display<Object>}
 */
class UserCardDisplay extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!UserCardDisplay} */
 static $create__() {
  UserCardDisplay.$clinit();
  let $instance = new UserCardDisplay();
  $instance.$ctor__org_patternfly_showcase_demo_user_UserDemo_UserCardDisplay__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_demo_user_UserDemo_UserCardDisplay__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_render__org_patternfly_component_Card__org_patternfly_dataprovider_DataProvider__org_patternfly_showcase_demo_user_User__void(/** Card */ card, /** DataProvider<Object> */ dataProvider, /** Object */ user) {
  /**@type {Card}*/ ($Casts.$to(/**@type {Card}*/ ($Casts.$to(card.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Head}*/ ($Casts.$to(/**@type {Head}*/ ($Casts.$to(/**@type {Head}*/ ($Casts.$to(Card.m_head__org_patternfly_component_Card_Head().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_nat__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLImageElement(user)), Head)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(dataProvider.m_getId__java_lang_Object__java_lang_String(user)), HTMLContainerBuilder)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('ml-sm')], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder($Overlay.m_fullName__$devirt__org_patternfly_showcase_demo_user_User__java_lang_String(user)), HTMLContainerBuilder))), Head)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Actions}*/ ($Casts.$to(/**@type {Actions}*/ ($Casts.$to(Head.m_actions__org_patternfly_component_Card_Head_Actions().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Dropdown<?string>}*/ (Dropdown.m_kebab__org_patternfly_component_Dropdown()).m_right__org_patternfly_component_Dropdown().m_add__java_lang_Object__org_patternfly_component_Dropdown('Edit').m_add__java_lang_Object__org_patternfly_component_Dropdown('Remove')), Actions)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType)), Actions))), Head))), Card)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Body}*/ ($Casts.$to(/**@type {Body}*/ ($Casts.$to(/**@type {Body}*/ ($Casts.$to(Card.m_body__org_patternfly_component_Card_Body().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_flex__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String('inline-flex'), Classes.m_modifier__java_lang_String__java_lang_String('align-items-center')], j_l_String))), Body)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_photo__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLDivElement(user)), Body)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_address__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLElement(user)), Body))), Card)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Footer}*/ ($Casts.$to(/**@type {Footer}*/ ($Casts.$to(Card.m_footer__org_patternfly_component_Card_Footer().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.m_fas__java_lang_String__java_lang_String('user-alt'), Classes.m_util__java_lang_String__java_lang_String('mr-sm')], j_l_String))), HTMLContainerBuilder))), Footer)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(user.login.username), Footer)));
 }
 //Bridge method.
 /** @final @override @nodts */
 m_render__org_patternfly_component_Card__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(/** Card */ arg0, /** DataProvider<Object> */ arg1, /** Object */ arg2) {
  this.m_render__org_patternfly_component_Card__org_patternfly_dataprovider_DataProvider__org_patternfly_showcase_demo_user_User__void(arg0, arg1, /**@type {Object}*/ ($Casts.$to(arg2, $Overlay)));
 }
 /** @nodts */
 static $clinit() {
  UserCardDisplay.$clinit = () =>{};
  UserCardDisplay.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UserCardDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Card = goog.module.get('org.patternfly.component.Card$impl');
  Body = goog.module.get('org.patternfly.component.Card.Body$impl');
  Footer = goog.module.get('org.patternfly.component.Card.Footer$impl');
  Head = goog.module.get('org.patternfly.component.Card.Head$impl');
  Actions = goog.module.get('org.patternfly.component.Card.Head.Actions$impl');
  Dropdown = goog.module.get('org.patternfly.component.Dropdown$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.demo.user.User.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Display.$markImplementor(UserCardDisplay);
$Util.$setClassMetadata(UserCardDisplay, 'org.patternfly.showcase.demo.user.UserDemo$UserCardDisplay');

exports = UserCardDisplay;

//# sourceMappingURL=UserDemo$UserCardDisplay.js.map

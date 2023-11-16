goog.module('org.patternfly.showcase.component.OptionsMenuComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let MultiOptionsMenu = goog.forwardDeclare('org.patternfly.component.MultiOptionsMenu$impl');
let Group = goog.forwardDeclare('org.patternfly.component.MultiOptionsMenu.Group$impl');
let SingleOptionsMenu = goog.forwardDeclare('org.patternfly.component.SingleOptionsMenu$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class OptionsMenuComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!OptionsMenuComponent} */
 static $create__() {
  OptionsMenuComponent.$clinit();
  let $instance = new OptionsMenuComponent();
  $instance.$ctor__org_patternfly_showcase_component_OptionsMenuComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_OptionsMenuComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Options menu', 'https://patternfly-java.github.io/patternfly-java/', 'https://www.patternfly.org/', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('An options menu is similar to a dropdown, but provides a way to select among a set ' + 'of optional settings rather than trigger an action.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('single', 'Options menu - single', 'Resources.get().optionsMenuSingle().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_text__java_lang_String__org_patternfly_component_SingleOptionsMenu('Options menu')).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Option 2', 'Option 3'], j_l_String))).m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu('Option 2')), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ ($Casts.$to(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_text__java_lang_String__org_patternfly_component_SingleOptionsMenu('Options menu')).m_disabled__org_jboss_elemento_TypedBuilder(), SingleOptionsMenu)).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Option 2', 'Option 3'], j_l_String)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('multiple', 'Options menu - multiple', 'Resources.get().optionsMenuMultiple().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(MultiOptionsMenu.m_icon__org_patternfly_component_Icon__org_patternfly_component_MultiOptionsMenu(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('sort-amount-down'))).m_add__org_patternfly_component_MultiOptionsMenu_Group__org_patternfly_component_MultiOptionsMenu(/**@type {!Group<?string>}*/ (Group.$create__java_lang_String('Sort by')).m_add__arrayOf_java_lang_Object__org_patternfly_component_MultiOptionsMenu_Group(/**@type {!Array<?string>}*/ ($Arrays.$init(['Name', 'Date', 'Size'], j_l_String)))).m_add__org_patternfly_component_MultiOptionsMenu_Group__org_patternfly_component_MultiOptionsMenu(/**@type {!Group<?string>}*/ (Group.$create__java_lang_String('Sort direction')).m_add__arrayOf_java_lang_Object__org_patternfly_component_MultiOptionsMenu_Group(/**@type {!Array<?string>}*/ ($Arrays.$init(['Ascending', 'Descending'], j_l_String))))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('plain', 'Options menu - plain', 'Resources.get().optionsMenuPlain().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_icon__org_patternfly_component_Icon__org_patternfly_component_SingleOptionsMenu(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('sort-amount-down')))).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Option 2', 'Option 3'], j_l_String))).m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu('Option 2')), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ ($Casts.$to(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_icon__org_patternfly_component_Icon__org_patternfly_component_SingleOptionsMenu(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('sort-amount-down')))).m_disabled__org_jboss_elemento_TypedBuilder(), SingleOptionsMenu)).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Option 2', 'Option 3'], j_l_String)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_plain__java_lang_String__org_patternfly_component_SingleOptionsMenu('Options menu')).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Option 2', 'Option 3'], j_l_String))).m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu('Option 2')), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ ($Casts.$to(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_plain__java_lang_String__org_patternfly_component_SingleOptionsMenu('Options menu')).m_disabled__org_jboss_elemento_TypedBuilder(), SingleOptionsMenu)).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Option 2', 'Option 3'], j_l_String)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('up', 'Options menu - up', 'Resources.get().optionsMenuUp().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_text__java_lang_String__org_patternfly_component_SingleOptionsMenu('Options menu')).m_up__org_patternfly_component_SingleOptionsMenu().m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Option 2', 'Option 3'], j_l_String))).m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu('Option 2')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('right', 'Options menu - right', 'Resources.get().optionsMenuRight().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleOptionsMenu<?string>}*/ (SingleOptionsMenu.m_text__java_lang_String__org_patternfly_component_SingleOptionsMenu('Options menu')).m_right__org_patternfly_component_SingleOptionsMenu().m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleOptionsMenu(/**@type {!Array<?string>}*/ ($Arrays.$init(['Option 1', 'Another option', 'Last option'], j_l_String))).m_select__java_lang_Object__org_patternfly_component_SingleOptionsMenu('Option 2')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  OptionsMenuComponent.$clinit = () =>{};
  OptionsMenuComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionsMenuComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  MultiOptionsMenu = goog.module.get('org.patternfly.component.MultiOptionsMenu$impl');
  Group = goog.module.get('org.patternfly.component.MultiOptionsMenu.Group$impl');
  SingleOptionsMenu = goog.module.get('org.patternfly.component.SingleOptionsMenu$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(OptionsMenuComponent, 'org.patternfly.showcase.component.OptionsMenuComponent');

exports = OptionsMenuComponent;

//# sourceMappingURL=OptionsMenuComponent.js.map

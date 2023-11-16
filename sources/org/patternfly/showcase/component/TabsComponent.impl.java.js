goog.module('org.patternfly.showcase.component.TabsComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let Tabs = goog.forwardDeclare('org.patternfly.component.Tabs$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class TabsComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TabsComponent} */
 static $create__() {
  TabsComponent.$clinit();
  let $instance = new TabsComponent();
  $instance.$ctor__org_patternfly_showcase_component_TabsComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TabsComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Tabs', 'https://patternfly-java.github.io/patternfly-java/', 'https://www.patternfly.org/components/tabs/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Tabs are used to present a set on tabs for organizing content on a page. ' + 'It must always be used together with a tab content component.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('basic', 'Basic', 'Resources.get().tabs().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Tabs.m_tabs__org_patternfly_component_Tabs().m_add__java_lang_String__org_jboss_elemento_IsElement__org_patternfly_component_Tabs('Tab Item 1', /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Tab 1'), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_IsElement__org_patternfly_component_Tabs('Tab Item 2', /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Tab 2'), HTMLContainerBuilder))).m_add__java_lang_String__org_jboss_elemento_IsElement__org_patternfly_component_Tabs('Tab Item 3', /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Tab 3'), HTMLContainerBuilder))).m_add__java_lang_String__java_util_function_Consumer__java_util_function_Consumer__org_patternfly_component_Tabs('tab-item-4', Consumer.$adapt((tab) =>{
    let tab_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(tab, HTMLContainerBuilder));
    /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(tab_1.m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Tab 4'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('address-book')).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('pl-sm')], j_l_String))), Icon)));
   }), Consumer.$adapt((panel) =>{
    let panel_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(panel, HTMLContainerBuilder));
    panel_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Tab 4');
   })).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  TabsComponent.$clinit = () =>{};
  TabsComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabsComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  Tabs = goog.module.get('org.patternfly.component.Tabs$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TabsComponent, 'org.patternfly.showcase.component.TabsComponent');

exports = TabsComponent;

//# sourceMappingURL=TabsComponent.js.map

goog.module('org.patternfly.showcase.component.PanelComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Panel = goog.forwardDeclare('org.patternfly.component.panel.Panel$impl');
let PanelMain = goog.forwardDeclare('org.patternfly.component.panel.PanelMain$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PanelComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!PanelComponent} */
 static $create__() {
  PanelComponent.$clinit();
  let $instance = new PanelComponent();
  $instance.$ctor__org_patternfly_showcase_component_PanelComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_PanelComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Panel', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/panel/Panel.html', 'https://www.patternfly.org/components/panel/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('The panel component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer component, which allows you to surface information via a collapsable container.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-header', 'Header', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-header'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addHeader__java_lang_String__org_patternfly_component_panel_Panel('Header content').m_addDivider__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-footer', 'Footer', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-footer'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_addFooter__java_lang_String__org_patternfly_component_panel_Panel('Footer content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-header-footer', 'Header and footer', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-header-footer'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_addHeader__java_lang_String__org_patternfly_component_panel_Panel('Header content').m_addDivider__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_addFooter__java_lang_String__org_patternfly_component_panel_Panel('Footer content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-raised', 'Raised', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-raised'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_raised__org_patternfly_component_panel_Panel().m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-bordered', 'Bordered', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-bordered'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {Panel}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_bordered__org_jboss_elemento_TypedBuilder(), Panel)).m_addMain__java_lang_String__org_patternfly_component_panel_Panel('Main content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-scrollable', 'Scrollable', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-scrollable'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_scrollable__org_patternfly_component_panel_Panel().m_addMain__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(PanelMain.m_panelMain__org_patternfly_component_panel_PanelMain().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('panel-scrollable-header-footer', 'Scrollable with header and footer', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('panel-scrollable-header-footer'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(Panel.m_panel__org_patternfly_component_panel_Panel().m_scrollable__org_patternfly_component_panel_Panel().m_addHeader__java_lang_String__org_patternfly_component_panel_Panel('Header content').m_addDivider__org_patternfly_component_panel_Panel().m_addMain__org_patternfly_component_panel_PanelMain__org_patternfly_component_panel_Panel(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(/**@type {PanelMain}*/ ($Casts.$to(PanelMain.m_panelMain__org_patternfly_component_panel_PanelMain().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), PanelMain)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Main content'), PanelMain))).m_addFooter__java_lang_String__org_patternfly_component_panel_Panel('Footer content').m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  PanelComponent.$clinit = () =>{};
  PanelComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PanelComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Panel = goog.module.get('org.patternfly.component.panel.Panel$impl');
  PanelMain = goog.module.get('org.patternfly.component.panel.PanelMain$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PanelComponent, 'org.patternfly.showcase.component.PanelComponent');

exports = PanelComponent;

//# sourceMappingURL=PanelComponent.js.map

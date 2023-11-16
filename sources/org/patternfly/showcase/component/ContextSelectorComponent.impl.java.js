goog.module('org.patternfly.showcase.component.ContextSelectorComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ContextSelector = goog.forwardDeclare('org.patternfly.component.ContextSelector$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Stage = goog.forwardDeclare('org.patternfly.showcase.component.ContextSelectorComponent.Stage$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class ContextSelectorComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ContextSelectorComponent} */
 static $create__() {
  ContextSelectorComponent.$clinit();
  let $instance = new ContextSelectorComponent();
  $instance.$ctor__org_patternfly_showcase_component_ContextSelectorComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ContextSelectorComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Context selector', 'https://patternfly-java.github.io/patternfly-java/', 'https://www.patternfly.org/', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A context selector can be used in addition to global navigation when the data ' + 'or resources you show in the interface need to change depending on the users\u2019 context.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('simple', 'Simple context selector', 'Resources.get().contextSelectorSimple().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ContextSelector<?string>}*/ (ContextSelector.m_contextSelector__java_lang_String__org_patternfly_component_ContextSelector('Stage')).m_add__java_lang_Iterable__org_patternfly_component_ContextSelector(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<?string>}*/ ($Arrays.$init(['Development', 'Staging', 'QA', 'Production'], j_l_String)))))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('type-ahead', 'Typed context selector', 'Resources.get().contextSelectorTyped().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ContextSelector<Stage>}*/ (ContextSelector.m_contextSelector__java_lang_String__org_patternfly_component_ContextSelector('Stage')).m_display__java_util_function_BiConsumer__org_patternfly_component_ContextSelector(BiConsumer.$adapt((html, stage) =>{
    let html_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(html, HTMLContainerBuilder));
    let stage_1 = /**@type {Stage}*/ ($Casts.$to(stage, Stage));
    /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(html_1.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('justify-content-space-between')], j_l_String))), HTMLContainerBuilder)).m_title__java_lang_String__org_jboss_elemento_TypedBuilder(stage_1.f_url__org_patternfly_showcase_component_ContextSelectorComponent_Stage), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(stage_1.f_name__org_patternfly_showcase_component_ContextSelectorComponent_Stage), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(stage_1.f_nodes__org_patternfly_showcase_component_ContextSelectorComponent_Stage).m_read__org_patternfly_component_badge_Badge());
   })).m_add__java_lang_Iterable__org_patternfly_component_ContextSelector(/**@type {List<Stage>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<Stage>}*/ ($Arrays.$init([Stage.$create__java_lang_String__java_lang_String__int('Development', 'http://localhost:8080', 2), Stage.$create__java_lang_String__java_lang_String__int('Staging', 'https://staging.acme.org', 5), Stage.$create__java_lang_String__java_lang_String__int('QA', 'https://qa.acme.org', 3), Stage.$create__java_lang_String__java_lang_String__int('Production', 'https://acme.org', 12)], Stage)))))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('events', 'Context selector events', 'Resources.get().contextSelectorEvent().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {ContextSelector<?string>}*/ (ContextSelector.m_contextSelector__java_lang_String__org_patternfly_component_ContextSelector('Stage')).m_onToggle__java_util_function_Consumer__org_patternfly_component_ContextSelector(Consumer.$adapt((open) =>{
    let open_1 = /**@type {?boolean}*/ ($Casts.$to(open, Boolean));
    goog.global.console.log('NYI');
   })).m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_ContextSelector(SelectHandler.$adapt((stage_2) =>{
    let stage_3 = /**@type {?string}*/ ($Casts.$to(stage_2, j_l_String));
    goog.global.console.log();
   })).m_add__java_lang_Iterable__org_patternfly_component_ContextSelector(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<?string>}*/ ($Arrays.$init(['Development', 'Staging', 'QA', 'Production'], j_l_String)))))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  ContextSelectorComponent.$clinit = () =>{};
  ContextSelectorComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ContextSelectorComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ContextSelector = goog.module.get('org.patternfly.component.ContextSelector$impl');
  Badge = goog.module.get('org.patternfly.component.badge.Badge$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  Stage = goog.module.get('org.patternfly.showcase.component.ContextSelectorComponent.Stage$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ContextSelectorComponent, 'org.patternfly.showcase.component.ContextSelectorComponent');

exports = ContextSelectorComponent;

//# sourceMappingURL=ContextSelectorComponent.js.map

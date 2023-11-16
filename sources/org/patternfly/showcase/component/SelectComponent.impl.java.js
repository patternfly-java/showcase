goog.module('org.patternfly.showcase.component.SelectComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let SingleSelect = goog.forwardDeclare('org.patternfly.component.SingleSelect$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class SelectComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SelectComponent} */
 static $create__() {
  SelectComponent.$clinit();
  let $instance = new SelectComponent();
  $instance.$ctor__org_patternfly_showcase_component_SelectComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_SelectComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Select', 'https://patternfly-java.github.io/patternfly-java/', 'https://www.patternfly.org/', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Use a select to choose one or more values from a list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('single', 'Single', 'NYI', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect<?string>}*/ (SingleSelect.m_single__java_lang_String__org_patternfly_component_SingleSelect('Choose...')).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleSelect(/**@type {!Array<?string>}*/ ($Arrays.$init(['Running', 'Stopped', 'Down', 'Degraded', 'Needs Maintenance'], j_l_String)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon', 'Icon', 'NYI', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect<?string>}*/ (SingleSelect.m_single__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_SingleSelect(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('server')), 'Choose...')).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleSelect(/**@type {!Array<?string>}*/ ($Arrays.$init(['Running', 'Stopped', 'Down', 'Degraded', 'Needs Maintenance'], j_l_String)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('disabled', 'Disabled', 'NYI', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect<?string>}*/ ($Casts.$to(/**@type {SingleSelect<?string>}*/ (SingleSelect.m_single__java_lang_String__org_patternfly_component_SingleSelect('Choose...')).m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleSelect(/**@type {!Array<?string>}*/ ($Arrays.$init(['Running', 'Stopped', 'Down', 'Degraded', 'Needs Maintenance'], j_l_String))).m_select__java_lang_Object__org_patternfly_component_SingleSelect('Down').m_disabled__org_jboss_elemento_TypedBuilder(), SingleSelect))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('up', 'Up', 'NYI', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {SingleSelect<?string>}*/ (SingleSelect.m_single__java_lang_String__org_patternfly_component_SingleSelect('Choose...')).m_up__org_patternfly_component_SingleSelect().m_add__arrayOf_java_lang_Object__org_patternfly_component_SingleSelect(/**@type {!Array<?string>}*/ ($Arrays.$init(['Running', 'Stopped', 'Down', 'Degraded', 'Needs Maintenance'], j_l_String)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  SelectComponent.$clinit = () =>{};
  SelectComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectComponent;
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
  SingleSelect = goog.module.get('org.patternfly.component.SingleSelect$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SelectComponent, 'org.patternfly.showcase.component.SelectComponent');

exports = SelectComponent;

//# sourceMappingURL=SelectComponent.js.map

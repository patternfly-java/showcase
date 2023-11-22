goog.module('org.patternfly.showcase.component.CheckboxComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let CheckboxBody = goog.forwardDeclare('org.patternfly.component.form.CheckboxBody$impl');
let CheckboxDescription = goog.forwardDeclare('org.patternfly.component.form.CheckboxDescription$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CheckboxComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CheckboxComponent} */
 static $create__() {
  CheckboxComponent.$clinit();
  let $instance = new CheckboxComponent();
  $instance.$ctor__org_patternfly_showcase_component_CheckboxComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_CheckboxComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Checkbox', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/Checkbox.html', 'https://www.patternfly.org/components/forms/checkbox/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A checkbox is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('checkbox-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('basic-checkbox-0', 'Checkbox 1').m_value__boolean__org_patternfly_component_form_Checkbox(true)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('basic-checkbox-1', 'Checkbox 2')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-disabled', 'Disabled', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('checkbox-disabled'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Checkbox}*/ ($Casts.$to(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('disabled-checkbox-0', 'Disabled checkbox 1').m_value__boolean__org_patternfly_component_form_Checkbox(true).m_disabled__org_jboss_elemento_TypedBuilder(), Checkbox))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Checkbox}*/ ($Casts.$to(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('disabled-checkbox-1', 'Disabled checkbox 2').m_disabled__org_jboss_elemento_TypedBuilder(), Checkbox))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-description', 'Checkbox with description', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('checkbox-description'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('cwd-0', 'Checkbox with description').m_addDescription__org_patternfly_component_form_CheckboxDescription__org_patternfly_component_form_Checkbox(CheckboxDescription.m_checkboxDescription__java_lang_String__org_patternfly_component_form_CheckboxDescription(LoremIpsum.m_words__int__java_lang_String(50)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-body', 'Checkbox with body', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('checkbox-body'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('cwb-0', 'Checkbox with body').m_addBody__org_patternfly_component_form_CheckboxBody__org_patternfly_component_form_Checkbox(CheckboxBody.m_checkboxBody__java_lang_String__org_patternfly_component_form_CheckboxBody('This is where custom content goes.'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-description-body', 'Checkbox with description and body', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('checkbox-description-body'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('cdb-0', 'Checkbox with description and body').m_addDescription__org_patternfly_component_form_CheckboxDescription__org_patternfly_component_form_Checkbox(CheckboxDescription.m_checkboxDescription__java_lang_String__org_patternfly_component_form_CheckboxDescription(LoremIpsum.m_words__int__java_lang_String(50))).m_addBody__org_patternfly_component_form_CheckboxBody__org_patternfly_component_form_Checkbox(CheckboxBody.m_checkboxBody__java_lang_String__org_patternfly_component_form_CheckboxBody('This is where custom content goes.'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-standalone', 'Standalone input', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('checkbox-standalone'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__org_patternfly_component_form_Checkbox('standalone-checkbox-0').m_standalone__org_patternfly_component_form_Checkbox()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('checkbox-required', 'Required input', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('checkbox-required'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Checkbox}*/ ($Casts.$to(Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('required-checkbox-0', 'Required checkbox').m_required__org_jboss_elemento_TypedBuilder(), Checkbox))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  CheckboxComponent.$clinit = () =>{};
  CheckboxComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CheckboxComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  CheckboxBody = goog.module.get('org.patternfly.component.form.CheckboxBody$impl');
  CheckboxDescription = goog.module.get('org.patternfly.component.form.CheckboxDescription$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CheckboxComponent, 'org.patternfly.showcase.component.CheckboxComponent');

exports = CheckboxComponent;

//# sourceMappingURL=CheckboxComponent.js.map

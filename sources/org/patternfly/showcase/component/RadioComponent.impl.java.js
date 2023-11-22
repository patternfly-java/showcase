goog.module('org.patternfly.showcase.component.RadioComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Radio = goog.forwardDeclare('org.patternfly.component.form.Radio$impl');
let RadioBody = goog.forwardDeclare('org.patternfly.component.form.RadioBody$impl');
let RadioDescription = goog.forwardDeclare('org.patternfly.component.form.RadioDescription$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RadioComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!RadioComponent} */
 static $create__() {
  RadioComponent.$clinit();
  let $instance = new RadioComponent();
  $instance.$ctor__org_patternfly_showcase_component_RadioComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_RadioComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Checkbox', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/Radio.html', 'https://www.patternfly.org/components/forms/radio/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A radio button is used to present the user with mutually exclusive choices. Always present radio buttons in groups of 2 or more.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('radio-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('basic-radio-0', 'basic-radio', 'Option 1').m_value__boolean__org_patternfly_component_form_Radio(true)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('basic-radio-1', 'basic-radio', 'Option 2')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-reversed', 'Reversed', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('radio-reversed'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('reversed-radio-0', 'reversed-radio', 'Option 1').m_reversed__org_patternfly_component_form_Radio()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-disabled', 'Disabled', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('radio-disabled'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Radio}*/ ($Casts.$to(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('disabled-radio-0', 'disabled-radio', 'Disabled radio 1').m_value__boolean__org_patternfly_component_form_Radio(true).m_disabled__org_jboss_elemento_TypedBuilder(), Radio))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Radio}*/ ($Casts.$to(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('disabled-radio-1', 'disabled-radio', 'Disabled radio 2').m_disabled__org_jboss_elemento_TypedBuilder(), Radio))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-description', 'Radio with description', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('radio-description'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('rwd-0', 'rwd', 'Radio with description').m_addDescription__org_patternfly_component_form_RadioDescription__org_patternfly_component_form_Radio(RadioDescription.m_radioDescription__java_lang_String__org_patternfly_component_form_RadioDescription(LoremIpsum.m_words__int__java_lang_String(50)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-body', 'Radio with body', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('radio-body'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('rwb-0', 'rwb', 'Radio with body').m_addBody__org_patternfly_component_form_RadioBody__org_patternfly_component_form_Radio(RadioBody.m_radioBody__java_lang_String__org_patternfly_component_form_RadioBody('This is where custom content goes.'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-description-body', 'Radio with description and body', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('radio-description-body'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('rdb-0', 'rdb', 'Radio with description and body').m_addDescription__org_patternfly_component_form_RadioDescription__org_patternfly_component_form_Radio(RadioDescription.m_radioDescription__java_lang_String__org_patternfly_component_form_RadioDescription(LoremIpsum.m_words__int__java_lang_String(50))).m_addBody__org_patternfly_component_form_RadioBody__org_patternfly_component_form_Radio(RadioBody.m_radioBody__java_lang_String__org_patternfly_component_form_RadioBody('This is where custom content goes.'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('radio-standalone', 'Standalone input', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('radio-standalone'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__org_patternfly_component_form_Radio('standalone-radio-0', 'standalone-radio').m_standalone__org_patternfly_component_form_Radio()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  RadioComponent.$clinit = () =>{};
  RadioComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadioComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Radio = goog.module.get('org.patternfly.component.form.Radio$impl');
  RadioBody = goog.module.get('org.patternfly.component.form.RadioBody$impl');
  RadioDescription = goog.module.get('org.patternfly.component.form.RadioDescription$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(RadioComponent, 'org.patternfly.showcase.component.RadioComponent');

exports = RadioComponent;

//# sourceMappingURL=RadioComponent.js.map

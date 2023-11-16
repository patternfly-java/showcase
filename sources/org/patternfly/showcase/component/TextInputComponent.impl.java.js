goog.module('org.patternfly.showcase.component.TextInputComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let TextInput = goog.forwardDeclare('org.patternfly.component.form.TextInput$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TextInputComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TextInputComponent} */
 static $create__() {
  TextInputComponent.$clinit();
  let $instance = new TextInputComponent();
  $instance.$ctor__org_patternfly_showcase_component_TextInputComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TextInputComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Text input', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/form/TextInput.html', 'https://www.patternfly.org/components/forms/text-input/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A text input is used to gather free-form text from a user.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('text-input-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('basic-text-input-0')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-disabled', 'Disabled', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('text-input-disabled'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('disabled-text-input-0').m_value__java_lang_String__org_patternfly_component_form_TextInput('disabled text input example').m_disabled__org_jboss_elemento_TypedBuilder(), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-readonly', 'Read only', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('text-input-readonly'), j_l_String)), Supplier.$adapt(() =>{
   let readOnlyTextInput = /**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('readonly-text-input-0').m_value__java_lang_String__org_patternfly_component_form_TextInput('read only text input example').m_readonly__org_jboss_elemento_TypedBuilder(), TextInput));
   let plainToggle = Checkbox.m_checkbox__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('plain-toggle', 'Plain read only variant');
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(plainToggle.m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((component, value) =>{
    let component_1 = /**@type {Checkbox}*/ ($Casts.$to(component, Checkbox));
    let value_1 = /**@type {?boolean}*/ ($Casts.$to(value, Boolean));
    readOnlyTextInput.m_plain__boolean__org_patternfly_component_form_TextInput(Boolean.m_booleanValue__java_lang_Boolean__boolean(value_1));
   }))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(readOnlyTextInput), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-invalid', 'Invalid', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('text-input-invalid'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('invalid-text-input-0').m_invalid__org_jboss_elemento_TypedBuilder(), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-custom-icon', 'Custom icon', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('text-input-custom-icon'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('custom-icon-text-input-0').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mb-sm')], j_l_String))), TextInput)).m_addIcon__java_lang_String__org_patternfly_component_form_TextInput(PredefinedIcon.m_fas__java_lang_String__java_lang_String('calendar'))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('custom-icon-text-input-1').m_addIcon__java_lang_String__org_patternfly_component_form_TextInput(PredefinedIcon.m_fas__java_lang_String__java_lang_String('clock'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('text-input-custom-icon-and-invalid', 'Custom icon and invalid', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('text-input-custom-icon-and-invalid'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('custom-icon-and-invalid-text-input-0').m_addIcon__java_lang_String__org_patternfly_component_form_TextInput(PredefinedIcon.m_fas__java_lang_String__java_lang_String('calendar')).m_invalid__org_jboss_elemento_TypedBuilder(), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  TextInputComponent.$clinit = () =>{};
  TextInputComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  TextInput = goog.module.get('org.patternfly.component.form.TextInput$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextInputComponent, 'org.patternfly.showcase.component.TextInputComponent');

exports = TextInputComponent;

//# sourceMappingURL=TextInputComponent.js.map

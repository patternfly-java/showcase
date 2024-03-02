goog.module('org.patternfly.showcase.component.FormControlComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let FormControl = goog.forwardDeclare('org.patternfly.component.form.FormControl$impl');
let FormSelect = goog.forwardDeclare('org.patternfly.component.form.FormSelect$impl');
let FormSelectOption = goog.forwardDeclare('org.patternfly.component.form.FormSelectOption$impl');
let FormSelectOptionGroup = goog.forwardDeclare('org.patternfly.component.form.FormSelectOptionGroup$impl');
let TextArea = goog.forwardDeclare('org.patternfly.component.form.TextArea$impl');
let TextAreaResize = goog.forwardDeclare('org.patternfly.component.form.TextAreaResize$impl');
let TextInput = goog.forwardDeclare('org.patternfly.component.form.TextInput$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Tuples = goog.forwardDeclare('org.patternfly.core.Tuples$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.core.ValidationStatus$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FormControlComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!FormControlComponent} */
 static $create__() {
  FormControlComponent.$clinit();
  let $instance = new FormControlComponent();
  $instance.$ctor__org_patternfly_showcase_component_FormControlComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_FormControlComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'form-control'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('form-control-text-input', 'Text input', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('form-control-text-input'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-0', 'Standard')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInput.m_textInput__java_lang_String__org_patternfly_component_form_TextInput('text-input-1').m_placeholder__java_lang_String__org_patternfly_component_form_TextInput('Placeholder')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-2', 'Readonly').m_readonly__org_jboss_elemento_TypedBuilder(), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-3', 'Readonly plain').m_plain__org_jboss_elemento_TypedBuilder(), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-4', 'Disabled').m_disabled__org_jboss_elemento_TypedBuilder(), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-5', 'Success').m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_success__org_patternfly_core_ValidationStatus), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-6', 'Warning').m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_warning__org_patternfly_core_ValidationStatus), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-7', 'Error').m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_core_ValidationStatus), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-8', 'Expanded').m_expanded__org_patternfly_component_form_TextInput()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-9', 'Calendar').m_icon__java_lang_String__org_jboss_elemento_TypedBuilder(PredefinedIcon.m_fas__java_lang_String__java_lang_String('calendar')), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-10', 'Clock (invalid)').m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_warning__org_patternfly_core_ValidationStatus), TextInput)).m_icon__java_lang_String__org_jboss_elemento_TypedBuilder(PredefinedIcon.m_fas__java_lang_String__java_lang_String('clock')), TextInput))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInput}*/ ($Casts.$to(TextInput.m_textInput__java_lang_String__java_lang_String__org_patternfly_component_form_TextInput('text-input-11', 'Custom icon').m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_bell__org_patternfly_style_PredefinedIcon), TextInput))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('form-control-select', 'Form select', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('form-control-select'), j_l_String)), Supplier.$adapt(() =>{
   let values0 = /**@type {!Array<?string>}*/ ($Arrays.$init(['Mr', 'Miss', 'Mrs', 'Ms', 'Dr', 'Other'], j_l_String));
   let groups0 = /**@type {Tuples<?string, Tuples<?string, ?boolean>>}*/ (Tuples.m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples('Group 1', /**@type {Tuples<?string, ?boolean>}*/ (Tuples.m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples('The first option', false, 'Option groups (second option selected)', false)), 'Group 2', /**@type {Tuples<?string, ?boolean>}*/ (Tuples.m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples('The third option', false, 'The fourth option', true))));
   let groups1 = /**@type {Tuples<?string, List<?string>>}*/ (Tuples.m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples('Group 1', /**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<?string>}*/ ($Arrays.$init(['The first option', 'The second option'], j_l_String)))), 'Group 2', /**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<?string>}*/ ($Arrays.$init(['The third option', 'The fourth option'], j_l_String))))));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(FormSelect.m_formSelect__java_lang_String__org_patternfly_component_form_FormSelect('form-select-0').m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Selectable placeholder').m_placeholder__boolean__org_patternfly_component_form_FormSelectOption(true)).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(values0)).subList(0, 5), j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_1);
   })).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(/**@type {FormSelectOption}*/ ($Casts.$to(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Disabled option').m_disabled__org_jboss_elemento_TypedBuilder(), FormSelectOption))).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(values0[5]))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(FormSelect.m_formSelect__java_lang_String__org_patternfly_component_form_FormSelect('form-select-1').m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Non-selectable placeholder').m_placeholder__boolean__org_patternfly_component_form_FormSelectOption(false)).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(values0)), j_u_function_Function.$adapt((arg0_2) =>{
    let arg0_3 = /**@type {?string}*/ ($Casts.$to(arg0_2, j_l_String));
    return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_3);
   }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(FormSelect.m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect('form-select-2', Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Option groups (second option selected)', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))).m_addGroups__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(groups0, j_u_function_Function.$adapt((g) =>{
    let g_1 = /**@type {Tuple}*/ ($Casts.$to(g, Tuple));
    return FormSelectOptionGroup.m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup(/**@type {?string}*/ ($Casts.$to(g_1.f_key__org_patternfly_core_Tuple, j_l_String))).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelectOptionGroup(/**@type {Tuples<?string, ?boolean>}*/ ($Casts.$to(g_1.f_value__org_patternfly_core_Tuple, Tuples)), j_u_function_Function.$adapt((v) =>{
     let v_1 = /**@type {Tuple}*/ ($Casts.$to(v, Tuple));
     return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(/**@type {?string}*/ ($Casts.$to(v_1.f_key__org_patternfly_core_Tuple, j_l_String))).m_disabled__boolean__org_patternfly_component_form_FormSelectOption(Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(v_1.f_value__org_patternfly_core_Tuple, Boolean))));
    }));
   }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {FormSelect}*/ ($Casts.$to(FormSelect.m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect('form-select-3', Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Valid option', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))).m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_success__org_patternfly_core_ValidationStatus), FormSelect)).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Valid option')).m_addGroups__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(groups1, j_u_function_Function.$adapt((g_2) =>{
    let g_3 = /**@type {Tuple}*/ ($Casts.$to(g_2, Tuple));
    return FormSelectOptionGroup.m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup(/**@type {?string}*/ ($Casts.$to(g_3.f_key__org_patternfly_core_Tuple, j_l_String))).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelectOptionGroup(/**@type {List<?string>}*/ ($Casts.$to(g_3.f_value__org_patternfly_core_Tuple, List)), j_u_function_Function.$adapt((arg0_4) =>{
     let arg0_5 = /**@type {?string}*/ ($Casts.$to(arg0_4, j_l_String));
     return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_5);
    }));
   }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {FormSelect}*/ ($Casts.$to(FormSelect.m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect('form-select-4', Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Warning option', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))).m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_warning__org_patternfly_core_ValidationStatus), FormSelect)).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Warning option')).m_addGroups__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(groups1, j_u_function_Function.$adapt((g_4) =>{
    let g_5 = /**@type {Tuple}*/ ($Casts.$to(g_4, Tuple));
    return FormSelectOptionGroup.m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup(/**@type {?string}*/ ($Casts.$to(g_5.f_key__org_patternfly_core_Tuple, j_l_String))).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelectOptionGroup(/**@type {List<?string>}*/ ($Casts.$to(g_5.f_value__org_patternfly_core_Tuple, List)), j_u_function_Function.$adapt((arg0_6) =>{
     let arg0_7 = /**@type {?string}*/ ($Casts.$to(arg0_6, j_l_String));
     return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_7);
    }));
   }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {FormSelect}*/ ($Casts.$to(FormSelect.m_formSelect__java_lang_String__java_lang_String__org_patternfly_component_form_FormSelect('form-select-5', Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Invalid option', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))).m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_core_ValidationStatus), FormSelect)).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Invalid option')).m_addGroups__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(groups1, j_u_function_Function.$adapt((g_6) =>{
    let g_7 = /**@type {Tuple}*/ ($Casts.$to(g_6, Tuple));
    return FormSelectOptionGroup.m_formSelectOptionGroup__java_lang_String__org_patternfly_component_form_FormSelectOptionGroup(/**@type {?string}*/ ($Casts.$to(g_7.f_key__org_patternfly_core_Tuple, j_l_String))).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelectOptionGroup(/**@type {List<?string>}*/ ($Casts.$to(g_7.f_value__org_patternfly_core_Tuple, List)), j_u_function_Function.$adapt((arg0_8) =>{
     let arg0_9 = /**@type {?string}*/ ($Casts.$to(arg0_8, j_l_String));
     return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_9);
    }));
   }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {FormSelect}*/ ($Casts.$to(FormSelect.m_formSelect__java_lang_String__org_patternfly_component_form_FormSelect('form-select-6').m_disabled__org_jboss_elemento_TypedBuilder(), FormSelect)).m_addOption__org_patternfly_component_form_FormSelectOption__org_patternfly_component_form_FormSelect(FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption('Disabled').m_placeholder__org_patternfly_component_form_FormSelectOption()).m_addOptions__java_lang_Iterable__java_util_function_Function__org_patternfly_component_form_FormSelect(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(values0)), j_u_function_Function.$adapt((arg0_10) =>{
    let arg0_11 = /**@type {?string}*/ ($Casts.$to(arg0_10, j_l_String));
    return FormSelectOption.m_formSelectOption__java_lang_String__org_patternfly_component_form_FormSelectOption(arg0_11);
   }))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('form-control-text-area', 'Text area', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('form-control-text-area'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-0', 'Standard')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-1', 'Readonly').m_readonly__org_jboss_elemento_TypedBuilder(), TextArea))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-2', 'Readonly plain').m_plain__org_jboss_elemento_TypedBuilder(), TextArea))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-3', 'Disabled').m_disabled__org_jboss_elemento_TypedBuilder(), TextArea))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-4', 'Success').m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_success__org_patternfly_core_ValidationStatus), TextArea))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-5', 'Warning').m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_warning__org_patternfly_core_ValidationStatus), TextArea))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextArea}*/ ($Casts.$to(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-6', 'Error').m_validated__org_patternfly_core_ValidationStatus__org_patternfly_component_BaseComponent(ValidationStatus.f_error__org_patternfly_core_ValidationStatus), TextArea))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-7', 'Resizes vertically').m_resize__org_patternfly_component_form_TextAreaResize__org_patternfly_component_form_TextArea(TextAreaResize.f_vertical__org_patternfly_component_form_TextAreaResize)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-8', 'Resizes horizontally').m_resize__org_patternfly_component_form_TextAreaResize__org_patternfly_component_form_TextArea(TextAreaResize.f_horizontal__org_patternfly_component_form_TextAreaResize)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextArea.m_textArea__java_lang_String__java_lang_String__org_patternfly_component_form_TextArea('text-area-9', 'Resizes in both directions').m_resize__org_patternfly_component_form_TextAreaResize__org_patternfly_component_form_TextArea(TextAreaResize.f_both__org_patternfly_component_form_TextAreaResize)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(FormControl));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(FormControl), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  FormControlComponent.$clinit = () =>{};
  FormControlComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormControlComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  List = goog.module.get('java.util.List$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  FormControl = goog.module.get('org.patternfly.component.form.FormControl$impl');
  FormSelect = goog.module.get('org.patternfly.component.form.FormSelect$impl');
  FormSelectOption = goog.module.get('org.patternfly.component.form.FormSelectOption$impl');
  FormSelectOptionGroup = goog.module.get('org.patternfly.component.form.FormSelectOptionGroup$impl');
  TextArea = goog.module.get('org.patternfly.component.form.TextArea$impl');
  TextAreaResize = goog.module.get('org.patternfly.component.form.TextAreaResize$impl');
  TextInput = goog.module.get('org.patternfly.component.form.TextInput$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Tuples = goog.module.get('org.patternfly.core.Tuples$impl');
  ValidationStatus = goog.module.get('org.patternfly.core.ValidationStatus$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FormControlComponent, 'org.patternfly.showcase.component.FormControlComponent');

exports = FormControlComponent;

//# sourceMappingURL=FormControlComponent.js.map

goog.module('org.patternfly.showcase.component.HelperTextComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HelperText = goog.forwardDeclare('org.patternfly.component.help.HelperText$impl');
let HelperTextItem = goog.forwardDeclare('org.patternfly.component.help.HelperTextItem$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.core.ValidationStatus$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HelperTextComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!HelperTextComponent} */
 static $create__() {
  HelperTextComponent.$clinit();
  let $instance = new HelperTextComponent();
  $instance.$ctor__org_patternfly_showcase_component_HelperTextComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_HelperTextComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Helper text', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/help/HelperText.html', 'https://www.patternfly.org/components/helper-text/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Helper text is an on-screen field guideline that helps provide context regarding field inputs.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('helper-text-static', 'Static', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('helper-text-static'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__java_lang_String__org_patternfly_component_help_HelperText('This is default helper text')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperText('This is indeterminate helper text', ValidationStatus.f_indeterminate__org_patternfly_core_ValidationStatus)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperText('This is warning helper text', ValidationStatus.f_warning__org_patternfly_core_ValidationStatus)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperText('This is success helper text', ValidationStatus.f_success__org_patternfly_core_ValidationStatus)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperText('This is error helper text', ValidationStatus.f_error__org_patternfly_core_ValidationStatus)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('helper-text-static-icon', 'Static with default icons', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('helper-text-static-icon'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem('This is default helper text').m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is indeterminate helper text', ValidationStatus.f_indeterminate__org_patternfly_core_ValidationStatus).m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is warning helper text', ValidationStatus.f_warning__org_patternfly_core_ValidationStatus).m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is success helper text', ValidationStatus.f_success__org_patternfly_core_ValidationStatus).m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is error helper text', ValidationStatus.f_error__org_patternfly_core_ValidationStatus).m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('helper-text-static-custom-icon', 'Static with custom icons', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('helper-text-static-custom-icon'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/**@type {HelperTextItem}*/ ($Casts.$to(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem('This is default helper text').m_icon__java_lang_String__org_jboss_elemento_TypedBuilder(PredefinedIcon.m_fas__java_lang_String__java_lang_String('info')), HelperTextItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/**@type {HelperTextItem}*/ ($Casts.$to(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is indeterminate helper text', ValidationStatus.f_indeterminate__org_patternfly_core_ValidationStatus).m_icon__java_lang_String__org_jboss_elemento_TypedBuilder(PredefinedIcon.m_fas__java_lang_String__java_lang_String('question')), HelperTextItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/**@type {HelperTextItem}*/ ($Casts.$to(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is warning helper text', ValidationStatus.f_warning__org_patternfly_core_ValidationStatus).m_icon__java_lang_String__org_jboss_elemento_TypedBuilder(PredefinedIcon.m_fas__java_lang_String__java_lang_String('exclamation')), HelperTextItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/**@type {HelperTextItem}*/ ($Casts.$to(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is success helper text', ValidationStatus.f_success__org_patternfly_core_ValidationStatus).m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_check__org_patternfly_style_PredefinedIcon), HelperTextItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/**@type {HelperTextItem}*/ ($Casts.$to(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is error helper text', ValidationStatus.f_error__org_patternfly_core_ValidationStatus).m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_times__org_patternfly_style_PredefinedIcon), HelperTextItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('helper-text-multiple-static', 'Multiple static', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('helper-text-multiple-static'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem('This is default helper text')).m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem('This is another default helper text in the same block')).m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem('And this is more default text in the same block'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('helper-text-dynamic', 'Dynamic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('helper-text-dynamic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem('This is default helper text').m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is indeterminate helper text', ValidationStatus.f_indeterminate__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is warning helper text', ValidationStatus.f_warning__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is success helper text', ValidationStatus.f_success__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is error helper text', ValidationStatus.f_error__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/**@type {HelperTextItem}*/ ($Casts.$to(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is error helper text with a custom icon', ValidationStatus.f_error__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_times__org_patternfly_style_PredefinedIcon), HelperTextItem)))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('This is error helper text with no icon', ValidationStatus.f_error__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('helper-text-dynamic-list', 'Dynamic list', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('helper-text-dynamic-list'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(HelperText.m_helperText__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_help_HelperText(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder()).m_liveRegion__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder(), 'Must be at least 14 characters', ValidationStatus.f_success__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem()).m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder(), 'Cannot contain any variation of the word \"redhat\"', ValidationStatus.f_error__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem()).m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem('Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols', ValidationStatus.f_success__org_patternfly_core_ValidationStatus).m_dynamic__org_patternfly_component_help_HelperTextItem().m_defaultIcon__org_patternfly_component_help_HelperTextItem())), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  HelperTextComponent.$clinit = () =>{};
  HelperTextComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HelperTextComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HelperText = goog.module.get('org.patternfly.component.help.HelperText$impl');
  HelperTextItem = goog.module.get('org.patternfly.component.help.HelperTextItem$impl');
  ValidationStatus = goog.module.get('org.patternfly.core.ValidationStatus$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HelperTextComponent, 'org.patternfly.showcase.component.HelperTextComponent');

exports = HelperTextComponent;

//# sourceMappingURL=HelperTextComponent.js.map

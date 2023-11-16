goog.module('org.patternfly.showcase.component.TextInputGroupComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Chip = goog.forwardDeclare('org.patternfly.component.chip.Chip$impl');
let ChipGroup = goog.forwardDeclare('org.patternfly.component.chip.ChipGroup$impl');
let TextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroup$impl');
let TextInputGroupMain = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TextInputGroupComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TextInputGroupComponent} */
 static $create__() {
  TextInputGroupComponent.$clinit();
  let $instance = new TextInputGroupComponent();
  $instance.$ctor__org_patternfly_showcase_component_TextInputGroupComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TextInputGroupComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Text input group', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/textinputgroup/TextInputGroup.html', 'https://www.patternfly.org/components/text-input-group/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A text input group is a more flexible composable version of a text input. It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('tig-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup().m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('basic-text-input-group-0'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-disabled', 'Disabled', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('tig-disabled'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInputGroup}*/ ($Casts.$to(TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup().m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('disabled-text-input-group-0').m_value__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('Disabled')).m_disabled__org_jboss_elemento_TypedBuilder(), TextInputGroup))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-utilities-and-icon', 'Utilities and icon', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('tig-utilities-and-icon'), j_l_String)), Supplier.$adapt(() =>{
   let textInputGroup = TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup();
   textInputGroup.m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('tig-utilities-and-icon-0').m_addIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_textinputgroup_TextInputGroupMain(PredefinedIcon.f_search__org_patternfly_layout_PredefinedIcon).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('Placeholder').m_withInputElement__java_util_function_Consumer__org_patternfly_component_textinputgroup_TextInputGroupMain(Consumer.$adapt((inputElement) =>{
    let inputElement_1 = /**@type {InputElementBuilder}*/ ($Casts.$to(inputElement, InputElementBuilder));
    inputElement_1.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keyup__org_jboss_elemento_EventType, (e) =>{
     let e_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(e, KeyboardEvent_$Overlay));
     let value = /**@type {HTMLInputElement}*/ ($Casts.$to(e_1.target, HTMLInputElement_$Overlay)).value;
     textInputGroup.m_showUtilities__boolean__void(!j_l_String.m_isEmpty__java_lang_String__boolean(value));
    });
   }))).m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/**@type {TextInputGroupUtilities}*/ ($Casts.$to(/**@type {TextInputGroupUtilities}*/ ($Casts.$to(TextInputGroupUtilities.m_textInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((e_2) =>{
    let e_3 = /**@type {HTMLDivElement}*/ ($Casts.$to(e_2, HTMLDivElement_$Overlay));
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(e_3, false);
   })), TextInputGroupUtilities)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_layout_PredefinedIcon__org_patternfly_component_button_Button(PredefinedIcon.f_times__org_patternfly_layout_PredefinedIcon).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_4) =>{
    let e_5 = /**@type {MouseEvent}*/ ($Casts.$to(e_4, MouseEvent_$Overlay));
    textInputGroup.m_clear__void();
    textInputGroup.m_showUtilities__boolean__void(false);
   }), Button))), TextInputGroupUtilities)));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(textInputGroup), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-filters', 'Filters', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('tig-filters'), j_l_String)), Supplier.$adapt(() =>{
   let textInputGroup_1 = TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup();
   let chipGroup = ChipGroup.m_chipGroup__org_patternfly_component_chip_ChipGroup();
   let closeHandler = CloseHandler.$adapt((/** Event */ event, chip) =>{
    let chip_1 = /**@type {Chip}*/ ($Casts.$to(chip, Chip));
    if (chip_1.m_mainComponent__org_patternfly_component_chip_ChipGroup().m_values__java_util_Set().isEmpty()) {
     Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(chipGroup);
     textInputGroup_1.m_showUtilities__boolean__void(!j_l_String.m_isEmpty__java_lang_String__boolean(textInputGroup_1.m_inputElement__org_jboss_elemento_InputElementBuilder().m_element__elemental2_dom_HTMLInputElement().value));
    }
   });
   chipGroup.m_addChips__java_lang_Iterable__java_util_function_Function__org_patternfly_component_chip_ChipGroup(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<?string>}*/ ($Arrays.$init(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'], j_l_String)))), j_u_function_Function.$adapt((text) =>{
    let text_1 = /**@type {?string}*/ ($Casts.$to(text, j_l_String));
    return Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip(text_1).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_Chip(closeHandler);
   }));
   textInputGroup_1.m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('tig-filters-0').m_addChipGroup__org_patternfly_component_chip_ChipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain(chipGroup).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('Placeholder').m_withInputElement__java_util_function_Consumer__org_patternfly_component_textinputgroup_TextInputGroupMain(Consumer.$adapt((inputElement_2) =>{
    let inputElement_3 = /**@type {InputElementBuilder}*/ ($Casts.$to(inputElement_2, InputElementBuilder));
    inputElement_3.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keyup__org_jboss_elemento_EventType, (e_6) =>{
     let e_7 = /**@type {KeyboardEvent}*/ ($Casts.$to(e_6, KeyboardEvent_$Overlay));
     let value_1 = /**@type {HTMLInputElement}*/ ($Casts.$to(e_7.target, HTMLInputElement_$Overlay)).value;
     textInputGroup_1.m_showUtilities__boolean__void(!j_l_String.m_isEmpty__java_lang_String__boolean(value_1) || !chipGroup.m_values__java_util_Set().isEmpty());
     if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_7) && !j_l_String.m_isEmpty__java_lang_String__boolean(value_1)) {
      if (!/**@type {HTMLDivElement}*/ ($Casts.$to(chipGroup.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).isConnected) {
       textInputGroup_1.m_main__org_patternfly_component_textinputgroup_TextInputGroupMain().m_addChipGroup__org_patternfly_component_chip_ChipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain(chipGroup);
      }
      chipGroup.m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip(value_1).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_Chip(closeHandler));
      inputElement_3.m_value__java_lang_String__org_jboss_elemento_TypedBuilder('');
     }
    });
   }))).m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/**@type {TextInputGroupUtilities}*/ ($Casts.$to(TextInputGroupUtilities.m_textInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_layout_PredefinedIcon__org_patternfly_component_button_Button(PredefinedIcon.f_times__org_patternfly_layout_PredefinedIcon).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_8) =>{
    let e_9 = /**@type {MouseEvent}*/ ($Casts.$to(e_8, MouseEvent_$Overlay));
    chipGroup.m_clear__void();
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(chipGroup);
    textInputGroup_1.m_clear__void();
    textInputGroup_1.m_showUtilities__boolean__void(false);
   }), Button))), TextInputGroupUtilities)));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(textInputGroup_1), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  TextInputGroupComponent.$clinit = () =>{};
  TextInputGroupComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroupComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Chip = goog.module.get('org.patternfly.component.chip.Chip$impl');
  ChipGroup = goog.module.get('org.patternfly.component.chip.ChipGroup$impl');
  TextInputGroup = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroup$impl');
  TextInputGroupMain = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');
  TextInputGroupUtilities = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextInputGroupComponent, 'org.patternfly.showcase.component.TextInputGroupComponent');

exports = TextInputGroupComponent;

//# sourceMappingURL=TextInputGroupComponent.js.map

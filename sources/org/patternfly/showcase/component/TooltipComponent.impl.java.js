goog.module('org.patternfly.showcase.component.TooltipComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let ScrollIntoViewOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let Placement = goog.forwardDeclare('org.patternfly.thirdparty.popper.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TooltipComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TooltipComponent} */
 static $create__() {
  TooltipComponent.$clinit();
  let $instance = new TooltipComponent();
  $instance.$ctor__org_patternfly_showcase_component_TooltipComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TooltipComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Tooltip', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/tooltip/Tooltip.html', 'https://www.patternfly.org/components/tooltip/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A tooltip is in-app messaging used to identify elements on a page with short, clarifying text.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tooltip-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('tooltip-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('margin', '100px'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('I have a tooltip').m_primary__org_patternfly_component_button_Button().m_id__java_lang_String__org_jboss_elemento_TypedBuilder('tooltip-basic-button'), Button))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('tooltip-basic-button'), LoremIpsum.m_words__java_lang_String())), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tooltip-dynamic', 'Dynamic content', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('tooltip-dynamic'), j_l_String)), Supplier.$adapt(() =>{
   let tooltip = Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('tooltip-dynamic-button'), 'Copy to clipboard').m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(CloseHandler.$adapt((/** Event */ e, t) =>{
    let t_1 = /**@type {Tooltip}*/ ($Casts.$to(t, Tooltip));
    t_1.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip('Copy to clipboard');
   })).m_appendToBody__org_patternfly_component_tooltip_Tooltip();
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('margin', '100px'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_copy__org_patternfly_style_PredefinedIcon), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Copy'), Button)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder('tooltip-dynamic-button'), Button)).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_1, b) =>{
    let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
    tooltip.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip('Successfully copied to clipboard!');
   }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tooltip-auto', 'Placement auto', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('tooltip-auto'), j_l_String)), Supplier.$adapt(() =>{
   let button = Button.m_button__java_lang_String__org_patternfly_component_button_Button('Tooltip');
   Elements.m_onAttach__org_jboss_elemento_IsElement__org_jboss_elemento_ObserverCallback__void(button, ObserverCallback.$adapt((/** MutationRecord */ mr) =>{
    let options = ScrollIntoViewOptions_$Overlay.m_create__elemental2_dom_ScrollIntoViewOptions();
    options.block = 'center';
    options.inline = 'center';
    Element_$Overlay.m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions__void(button.m_element__elemental2_dom_HTMLElement(), options);
   }));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', '720px'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['tooltip-box'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(button.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['tooltip-button'], j_l_String))), Button)).m_primary__org_patternfly_component_button_Button().m_id__java_lang_String__org_jboss_elemento_TypedBuilder('tooltip-options-button'), Button))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('tooltip-options-button'), LoremIpsum.m_words__java_lang_String()).m_placement__org_patternfly_thirdparty_popper_Placement__org_patternfly_component_tooltip_Tooltip(Placement.f_auto__org_patternfly_thirdparty_popper_Placement)), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  TooltipComponent.$clinit = () =>{};
  TooltipComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  ScrollIntoViewOptions_$Overlay = goog.module.get('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ObserverCallback = goog.module.get('org.jboss.elemento.ObserverCallback$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  Placement = goog.module.get('org.patternfly.thirdparty.popper.Placement$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TooltipComponent, 'org.patternfly.showcase.component.TooltipComponent');

exports = TooltipComponent;

//# sourceMappingURL=TooltipComponent.js.map

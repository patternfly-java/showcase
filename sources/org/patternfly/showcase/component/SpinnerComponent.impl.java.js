goog.module('org.patternfly.showcase.component.SpinnerComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SpinnerComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SpinnerComponent} */
 static $create__() {
  SpinnerComponent.$clinit();
  let $instance = new SpinnerComponent();
  $instance.$ctor__org_patternfly_showcase_component_SpinnerComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_SpinnerComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Spinner', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/spinner/Spinner.html', 'https://www.patternfly.org/components/spinner/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A spinner is used to indicate to users that an action is in progress. For actions that may take a long time, use a progress bar instead.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('spinner-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('spinner-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_component_spinner_Spinner()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('spinner-sizes', 'Sizes', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('spinner-sizes'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_sm__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_md__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_lg__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_style_Size__org_patternfly_component_spinner_Spinner(Size.f_xl__org_patternfly_style_Size)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('spinner-custom-size', 'Custom size', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('spinner-custom-size'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_component_spinner_Spinner().m_diameter__java_lang_String__org_patternfly_component_spinner_Spinner('80px')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('spinner-inline-size', 'Inline size', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('spinner-inline-size'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(1).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Heading '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Spinner}*/ ($Casts.$to(Spinner.m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner('Spinner in heading').m_inline__org_jboss_elemento_TypedBuilder(), Spinner))), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(LoremIpsum.m_paragraphs__int__java_lang_String(1)), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(2).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Second level '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Spinner}*/ ($Casts.$to(Spinner.m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner('Spinner in subheading').m_inline__org_jboss_elemento_TypedBuilder(), Spinner))), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_paragraphs__int__java_lang_String(2)) + ' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Spinner}*/ ($Casts.$to(Spinner.m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner('Spinner in paragraph').m_inline__org_jboss_elemento_TypedBuilder(), Spinner))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_paragraphs__int__java_lang_String(3))), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_small__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Sometimes you need small text '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Spinner}*/ ($Casts.$to(Spinner.m_spinner__java_lang_String__org_patternfly_component_spinner_Spinner('Spinner in small element').m_inline__org_jboss_elemento_TypedBuilder(), Spinner))), HTMLContainerBuilder))), TextContent))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  SpinnerComponent.$clinit = () =>{};
  SpinnerComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SpinnerComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SpinnerComponent, 'org.patternfly.showcase.component.SpinnerComponent');

exports = SpinnerComponent;

//# sourceMappingURL=SpinnerComponent.js.map

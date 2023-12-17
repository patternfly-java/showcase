goog.module('org.patternfly.showcase.component.TitleComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TitleComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TitleComponent} */
 static $create__() {
  TitleComponent.$clinit();
  let $instance = new TitleComponent();
  $instance.$ctor__org_patternfly_showcase_component_TitleComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TitleComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Title', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/title/Title.html', 'https://www.patternfly.org/components/title/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A title component applies top and bottom margins, font-weight, font-size, and line-height to titles. The most common usage for a title is to define headings within a page.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('title-default-sizes', 'Default sizes', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('title-default-sizes'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(1, 'h1 defaults to 2xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(2, 'h2 defaults to xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(3, 'h3 defaults to lg')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(4, 'h4 defaults to md')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(5, 'h5 defaults to md')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_component_title_Title(6, 'h6 defaults to md')), TextContent))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('title-custom-sizes', 'Custom sizes', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('title-custom-sizes'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(1, Size.f__4xl__org_patternfly_style_Size, 'h1 as 4xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(2, Size.f__3xl__org_patternfly_style_Size, 'h2 as 3xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(3, Size.f__2xl__org_patternfly_style_Size, 'h3 as 2xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(4, Size.f_xl__org_patternfly_style_Size, 'h4 as xl')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(5, Size.f_lg__org_patternfly_style_Size, 'h5 has lg')), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(6, Size.f_md__org_patternfly_style_Size, 'h6 as md')), TextContent))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  TitleComponent.$clinit = () =>{};
  TitleComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TitleComponent, 'org.patternfly.showcase.component.TitleComponent');

exports = TitleComponent;

//# sourceMappingURL=TitleComponent.js.map

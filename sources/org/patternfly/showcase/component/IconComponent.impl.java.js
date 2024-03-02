goog.module('org.patternfly.showcase.component.IconComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.icon.Icon$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class IconComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!IconComponent} */
 static $create__() {
  IconComponent.$clinit();
  let $instance = new IconComponent();
  $instance.$ctor__org_patternfly_showcase_component_IconComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_IconComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'icon'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('icon-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__java_lang_String__org_patternfly_component_icon_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('long-arrow-alt-down'))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_angleRight__org_patternfly_style_PredefinedIcon)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_angleDown__org_patternfly_style_PredefinedIcon)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__java_lang_String__org_patternfly_component_icon_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('cog'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon-sizes', 'Sizes', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('icon-sizes'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_sm__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_md__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_lg__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_xl__org_patternfly_style_Size)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon-status-colors', 'Status colors', 'The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('icon-status-colors'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_exclamationCircle__org_patternfly_style_PredefinedIcon).m_status__org_patternfly_style_Status__org_patternfly_component_icon_Icon(Status.f_danger__org_patternfly_style_Status)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_exclamationTriangle__org_patternfly_style_PredefinedIcon).m_status__org_patternfly_style_Status__org_patternfly_component_icon_Icon(Status.f_warning__org_patternfly_style_Status)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_check__org_patternfly_style_PredefinedIcon).m_status__org_patternfly_style_Status__org_patternfly_component_icon_Icon(Status.f_success__org_patternfly_style_Status)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_infoCircle__org_patternfly_style_PredefinedIcon).m_status__org_patternfly_style_Status__org_patternfly_component_icon_Icon(Status.f_info__org_patternfly_style_Status)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_bell__org_patternfly_style_PredefinedIcon).m_status__org_patternfly_style_Status__org_patternfly_component_icon_Icon(Status.f_custom__org_patternfly_style_Status)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon-container', 'Sizing an icon within the icon container', 'Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('icon-container'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_xl__org_patternfly_style_Size).m_iconSize__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_sm__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_xl__org_patternfly_style_Size).m_iconSize__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_md__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_xl__org_patternfly_style_Size).m_iconSize__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_lg__org_patternfly_style_Size)), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_xl__org_patternfly_style_Size)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon-inline', 'Inline', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('icon-inline'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(1).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Heading '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(LoremIpsum.m_paragraph__java_lang_String()), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(2).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Second level '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_paragraphs__int__java_lang_String(2)) + ' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_strong__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_words__int__java_lang_String(2)) + ' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_words__int__java_lang_String(5))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(LoremIpsum.m_paragraphs__int__java_lang_String(2)), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_small__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Sometimes you need small text '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder))), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Inline with size specified: '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_sm__org_patternfly_style_Size).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' small, '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_md__org_patternfly_style_Size).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' medium, '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_lg__org_patternfly_style_Size).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' large, '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_plusCircle__org_patternfly_style_PredefinedIcon).m_size__org_patternfly_style_Size__org_patternfly_component_icon_Icon(Size.f_xl__org_patternfly_style_Size).m_inline__org_jboss_elemento_TypedBuilder(), Icon))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' extra large'), HTMLContainerBuilder))), TextContent))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon-in-progress', 'In progress', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('icon-in-progress'), j_l_String)), Supplier.$adapt(() =>{
   let icon = Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_checkCircle__org_patternfly_style_PredefinedIcon);
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mb-md')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('in-progress-cb', 'in-progress-cb', 'Toggle in progress state').m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e, c, value) =>{
    let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
    let value_1 = /**@type {?boolean}*/ ($Casts.$to(value, Boolean));
    icon.m_progress__boolean__org_jboss_elemento_TypedBuilder(Boolean.m_booleanValue__java_lang_Boolean__boolean(value_1));
   }))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('icon-in-progress-custom', 'Custom in progress icon', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('icon-in-progress-custom'), j_l_String)), Supplier.$adapt(() =>{
   let icon_1 = Icon.m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_Icon(PredefinedIcon.f_checkCircle__org_patternfly_style_PredefinedIcon);
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('mb-md')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('in-progress-custom-cb', 'in-progress-custom-cb', 'Toggle in progress state').m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e_1, c_2, value_2) =>{
    let c_3 = /**@type {Checkbox}*/ ($Casts.$to(c_2, Checkbox));
    let value_3 = /**@type {?boolean}*/ ($Casts.$to(value_2, Boolean));
    icon_1.m_progress__boolean__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Boolean.m_booleanValue__java_lang_Boolean__boolean(value_3), Consumer.$adapt((spinner) =>{
     let spinner_1 = /**@type {Spinner}*/ ($Casts.$to(spinner, Spinner));
     spinner_1.m_diameter__java_lang_String__org_patternfly_component_spinner_Spinner('2em');
    }));
   }))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(icon_1), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Icon));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Icon), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(InlineIcon), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  IconComponent.$clinit = () =>{};
  IconComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Icon = goog.module.get('org.patternfly.component.icon.Icon$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(IconComponent, 'org.patternfly.showcase.component.IconComponent');

exports = IconComponent;

//# sourceMappingURL=IconComponent.js.map

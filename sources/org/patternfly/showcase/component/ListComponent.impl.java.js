goog.module('org.patternfly.showcase.component.ListComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let List = goog.forwardDeclare('org.patternfly.component.list.List$impl');
let ListItem = goog.forwardDeclare('org.patternfly.component.list.ListItem$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ListComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ListComponent} */
 static $create__() {
  ListComponent.$clinit();
  let $instance = new ListComponent();
  $instance.$ctor__org_patternfly_showcase_component_ListComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ListComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('List', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/list/List.html', 'https://www.patternfly.org/components/list/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A list component embeds a formatted list (bulleted or numbered list) into page content.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('list-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(List.m_list__org_patternfly_component_list_List().m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-inline', 'Inline', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('list-inline'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_inline__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-ordered', 'Ordered', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('list-ordered'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(List.m_list__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_list_List(Elements.m_ol__org_jboss_elemento_HTMLContainerBuilder()).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-plain', 'Plain', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('list-plain'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-bordered', 'With horizontal rules', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('list-bordered'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_bordered__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second')).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-icons', 'With icons', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('list-icons'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First').m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_bookOpen__org_patternfly_style_PredefinedIcon), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second').m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_key__org_patternfly_style_PredefinedIcon), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third').m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_desktop__org_patternfly_style_PredefinedIcon), ListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('list-icons-lg', 'With large icons', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('list-icons-lg'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {List}*/ ($Casts.$to(List.m_list__org_patternfly_component_list_List().m_plain__org_jboss_elemento_TypedBuilder(), List)).m_largeIcons__org_patternfly_component_list_List().m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('First').m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_bookOpen__org_patternfly_style_PredefinedIcon), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Second').m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_key__org_patternfly_style_PredefinedIcon), ListItem))).m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/**@type {ListItem}*/ ($Casts.$to(ListItem.m_listItem__org_patternfly_component_list_ListItem().m_text__java_lang_String__org_patternfly_component_list_ListItem('Third').m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(PredefinedIcon.f_desktop__org_patternfly_style_PredefinedIcon), ListItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  ListComponent.$clinit = () =>{};
  ListComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  List = goog.module.get('org.patternfly.component.list.List$impl');
  ListItem = goog.module.get('org.patternfly.component.list.ListItem$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ListComponent, 'org.patternfly.showcase.component.ListComponent');

exports = ListComponent;

//# sourceMappingURL=ListComponent.js.map

goog.module('org.patternfly.showcase.component.TitleComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class TitleComponent extends ComponentPage {
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
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Title', 'https://patternfly-java.github.io/patternfly-java/', 'https://www.patternfly.org/components/tile/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('The title component applies top and bottom margins, font-weight, font-size, ' + 'and line-height to titles.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('sizes', 'Title sizes', 'Resources.get().title().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(1, '4xl Title', Size.f__4xl__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(2, '3xl Title', Size.f__3xl__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(3, '2xl Title', Size.f__2xl__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(4, 'xl Title', Size.f__3xl__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(5, 'lg Title', Size.f_lg__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(6, 'md Title', Size.f_md__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  TitleComponent.$clinit = () =>{};
  TitleComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Size = goog.module.get('org.patternfly.layout.Size$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TitleComponent, 'org.patternfly.showcase.component.TitleComponent');

exports = TitleComponent;

//# sourceMappingURL=TitleComponent.js.map

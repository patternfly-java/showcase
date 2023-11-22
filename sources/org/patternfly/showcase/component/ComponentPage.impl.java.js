goog.module('org.patternfly.showcase.component.ComponentPage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.patternfly.showcase.Page$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ButtonElement = goog.forwardDeclare('org.patternfly.component.button.ButtonElement$impl');
let PageMainBody = goog.forwardDeclare('org.patternfly.component.page.PageMainBody$impl');
let PageMainSection = goog.forwardDeclare('org.patternfly.component.page.PageMainSection$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let Placement = goog.forwardDeclare('org.patternfly.thirdparty.popper.Placement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Page}
 */
class ComponentPage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<HTMLElement>} @nodts*/
  this.f_elements__org_patternfly_showcase_component_ComponentPage_;
  /**@type {HTMLElement} @nodts*/
  this.f_snippets__org_patternfly_showcase_component_ComponentPage;
 }
 /** @nodts @return {!ComponentPage} */
 static $create__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement(/** ?string */ title, /** ?string */ javadocLink, /** ?string */ designLink, /** HTMLElement */ description) {
  ComponentPage.$clinit();
  let $instance = new ComponentPage();
  $instance.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(title, javadocLink, designLink, description);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ title, /** ?string */ javadocLink, /** ?string */ designLink, /** HTMLElement */ description) {
  this.$ctor__java_lang_Object__void();
  this.f_elements__org_patternfly_showcase_component_ComponentPage_ = /**@type {List<HTMLElement>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List([/**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_light__org_patternfly_component_page_PageMainSection().m_limitWidth__org_patternfly_component_page_PageSectionBuilder(), PageMainSection)).m_addBody__org_patternfly_component_page_PageMainBody__org_patternfly_component_page_PageSectionBuilder(/**@type {PageMainBody}*/ ($Casts.$to(/**@type {PageMainBody}*/ ($Casts.$to(/**@type {PageMainBody}*/ ($Casts.$to(PageMainBody.m_pageMainBody__org_patternfly_component_page_PageMainBody().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String(Classes.f_floatRight__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_ButtonElement__org_patternfly_component_button_Button(ButtonElement.f_link__org_patternfly_component_button_ButtonElement).m_id__java_lang_String__org_jboss_elemento_TypedBuilder('design-guidelines'), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_href__java_lang_String__org_patternfly_component_button_Button(designLink).m_target__java_lang_String__org_patternfly_component_button_Button('patternfly').m_addIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.m_fas__java_lang_String__java_lang_String('swatchbook'))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('design-guidelines'), 'Design guidelines').m_placement__org_patternfly_thirdparty_popper_Placement__org_patternfly_component_tooltip_Tooltip(Placement.f_auto__org_patternfly_thirdparty_popper_Placement)), HTMLContainerBuilder))), PageMainBody)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String(Classes.f_floatRight__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_ButtonElement__org_patternfly_component_button_Button(ButtonElement.f_link__org_patternfly_component_button_ButtonElement).m_id__java_lang_String__org_jboss_elemento_TypedBuilder('api-documentation'), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_href__java_lang_String__org_patternfly_component_button_Button(javadocLink).m_target__java_lang_String__org_patternfly_component_button_Button('javadoc').m_addIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.m_pfIcon__java_lang_String__java_lang_String('catalog'))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By('api-documentation'), 'API documentation').m_placement__org_patternfly_thirdparty_popper_Placement__org_patternfly_component_tooltip_Tooltip(Placement.f_auto__org_patternfly_thirdparty_popper_Placement)), HTMLContainerBuilder))), PageMainBody)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_content__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(1, title, Size.f__4xl__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(description), HTMLContainerBuilder))), PageMainBody))), PageMainSection)).m_element__elemental2_dom_HTMLElement(), /**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('light-100')], j_l_String))), PageMainSection)).m_fill__org_jboss_elemento_TypedBuilder(), PageMainSection)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_snippets__org_patternfly_showcase_component_ComponentPage = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), PageMainSection)).m_element__elemental2_dom_HTMLElement()]));
 }
 /** @nodts */
 m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(/** Snippet */ snippet) {
  this.f_snippets__org_patternfly_showcase_component_ComponentPage.appendChild(snippet.m_element__elemental2_dom_HTMLElement());
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__java_lang_Iterable() {
  return this.f_elements__org_patternfly_showcase_component_ComponentPage_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterator<HTMLElement>} */
 m_iterator__java_util_Iterator() {
  return Page.m_iterator__$default__org_patternfly_showcase_Page__java_util_Iterator(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<HTMLElement>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<HTMLElement>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  ComponentPage.$clinit = () =>{};
  ComponentPage.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComponentPage;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ButtonElement = goog.module.get('org.patternfly.component.button.ButtonElement$impl');
  PageMainBody = goog.module.get('org.patternfly.component.page.PageMainBody$impl');
  PageMainSection = goog.module.get('org.patternfly.component.page.PageMainSection$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Size = goog.module.get('org.patternfly.layout.Size$impl');
  Placement = goog.module.get('org.patternfly.thirdparty.popper.Placement$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(ComponentPage);
$Util.$setClassMetadata(ComponentPage, 'org.patternfly.showcase.component.ComponentPage');

exports = ComponentPage;

//# sourceMappingURL=ComponentPage.js.map

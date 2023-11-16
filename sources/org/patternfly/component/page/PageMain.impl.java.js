goog.module('org.patternfly.component.page.PageMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let PageMainGroup = goog.forwardDeclare('org.patternfly.component.page.PageMainGroup$impl');
let PageSection = goog.forwardDeclare('org.patternfly.component.page.PageSection$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLElement, PageMain>}
 */
class PageMain extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMain} */
 static m_pageMain__java_lang_String__org_patternfly_component_page_PageMain(/** ?string */ id) {
  PageMain.$clinit();
  return PageMain.$create__java_lang_String(id);
 }
 /** @nodts @return {!PageMain} */
 static $create__java_lang_String(/** ?string */ id) {
  PageMain.$clinit();
  let $instance = new PageMain();
  $instance.$ctor__org_patternfly_component_page_PageMain__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMain__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_main__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, Classes.f_main__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {PageMain} */
 m_addGroup__org_patternfly_component_page_PageMainGroup__org_patternfly_component_page_PageMain(/** PageMainGroup */ group) {
  return /**@type {PageMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), PageMain));
 }
 /** @nodts @template E, P @return {PageMain} */
 m_addSection__org_patternfly_component_page_PageSection__org_patternfly_component_page_PageMain(/** PageSection<E, P> */ pageSection) {
  return /**@type {PageMain}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(pageSection), PageMain));
 }
 /** @nodts @return {PageMain} */
 m_that__org_patternfly_component_page_PageMain() {
  return this;
 }
 /** @nodts */
 m_replace__org_jboss_elemento_IsElement__void(/** IsElement<?> */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
 }
 /** @nodts */
 m_replace__elemental2_dom_Element__void(/** Element */ element) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
 }
 /** @nodts */
 m_replace__arrayOf_elemental2_dom_Element__void(/** Array<Element> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
 }
 /** @nodts */
 m_replace__arrayOf_elemental2_dom_HTMLElement__void(/** Array<HTMLElement> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
 }
 /** @nodts */
 m_replace__arrayOf_org_jboss_elemento_IsElement__void(/** Array<IsElement<?>> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
   }
  }
 }
 /** @nodts */
 m_replace__java_lang_Iterable__void(/** Iterable<?> */ elements) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement());
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if ($Overlay.$isInstance(element)) {
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLElement}*/ ($Casts.$to(element, $Overlay)));
    } else if (IsElement.$isInstance(element)) {
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__elemental2_dom_Element());
    }
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMain();
 }
 /** @nodts */
 static $clinit() {
  PageMain.$clinit = () =>{};
  PageMain.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMain;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PageMain, 'org.patternfly.component.page.PageMain');

exports = PageMain;

//# sourceMappingURL=PageMain.js.map

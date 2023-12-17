goog.module('org.patternfly.component.BaseComponent$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Container = goog.require('org.jboss.elemento.Container$impl');
const Finder = goog.require('org.jboss.elemento.Finder$impl');
const HasElement = goog.require('org.jboss.elemento.HasElement$impl');
const HasHTMLElement = goog.require('org.jboss.elemento.HasHTMLElement$impl');
const Component = goog.require('org.patternfly.component.Component$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentStore = goog.forwardDeclare('org.patternfly.component.ComponentStore$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Ouia = goog.forwardDeclare('org.patternfly.core.Ouia$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E, B
 * @implements {Component}
 * @implements {HasElement<E, B>}
 * @implements {HasHTMLElement<E, B>}
 * @implements {Finder<E>}
 * @implements {Container<E, B>}
 */
class BaseComponent extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ComponentType} @nodts*/
  this.f_componentType__org_patternfly_component_BaseComponent_;
  /**@type {E} @nodts*/
  this.f_element__org_patternfly_component_BaseComponent_;
 }
 /** @nodts */
 $ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(/** ComponentType */ componentType, /** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_componentType__org_patternfly_component_BaseComponent_ = /**@type {ComponentType}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(componentType, 'component type required'), ComponentType));
  this.f_element__org_patternfly_component_BaseComponent_ = /**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay));
  Ouia.m_component__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLElement}*/ (element), componentType);
 }
 /** @override @nodts @return {ComponentType} */
 m_componentType__org_patternfly_component_ComponentType() {
  return this.f_componentType__org_patternfly_component_BaseComponent_;
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_element__org_patternfly_component_BaseComponent_;
 }
 /** @nodts */
 m_storeComponent__void() {
  ComponentStore.m_store__org_patternfly_component_BaseComponent__void(this);
 }
 /** @nodts @template C, E1, B1 @return {C} */
 m_lookupComponent__org_patternfly_component_ComponentType__org_patternfly_component_BaseComponent(/** ComponentType */ componentType) {
  return this.m_lookupComponent__org_patternfly_component_ComponentType__boolean__org_patternfly_component_BaseComponent(componentType, false);
 }
 /** @nodts @template C, E1, B1 @return {C} */
 m_lookupComponent__org_patternfly_component_ComponentType__boolean__org_patternfly_component_BaseComponent(/** ComponentType */ componentType, /** boolean */ lenient) {
  return ComponentStore.m_lookup__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__boolean__org_patternfly_component_BaseComponent(componentType, /**@type {HTMLElement}*/ (this.m_element__elemental2_dom_HTMLElement()), lenient);
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HasElement.m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return HasElement.m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (HasElement.m_classList__$default__org_jboss_elemento_HasElement__org_jboss_elemento_ClassList(this));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return HasElement.m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return HasElement.m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_id__org_jboss_elemento_TypedBuilder() {
  return HasElement.m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HasElement.m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return HasElement.m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return HasElement.m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HasElement.m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HasElement.m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return HasHTMLElement.m_data__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return HasHTMLElement.m_hidden__$default__org_jboss_elemento_HasHTMLElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return HasHTMLElement.m_title__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_closest__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return Finder.m_closest__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return Finder.m_find__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_findAll__org_jboss_elemento_By__java_lang_Iterable(/** By */ arg0) {
  return Finder.m_findAll__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__java_lang_Iterable(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return Container.m_add__$default__org_jboss_elemento_Container__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {B} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return Container.m_addAll__$default__org_jboss_elemento_Container__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  BaseComponent.$clinit = () =>{};
  BaseComponent.$loadModules();
  j_l_Object.$clinit();
  HasElement.$clinit();
  HasHTMLElement.$clinit();
  Finder.$clinit();
  Container.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseComponent;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  ComponentStore = goog.module.get('org.patternfly.component.ComponentStore$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Ouia = goog.module.get('org.patternfly.core.Ouia$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Component.$markImplementor(BaseComponent);
HasElement.$markImplementor(BaseComponent);
HasHTMLElement.$markImplementor(BaseComponent);
Finder.$markImplementor(BaseComponent);
Container.$markImplementor(BaseComponent);
$Util.$setClassMetadata(BaseComponent, 'org.patternfly.component.BaseComponent');

exports = BaseComponent;

//# sourceMappingURL=BaseComponent.js.map

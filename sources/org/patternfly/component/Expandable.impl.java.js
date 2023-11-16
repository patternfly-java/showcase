goog.module('org.patternfly.component.Expandable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let CollapseExpand = goog.forwardDeclare('org.patternfly.component.CollapseExpand$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Expandable>}
 * @deprecated
 */
class Expandable extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CollapseExpand} @nodts*/
  this.f_ceh__org_patternfly_component_Expandable_;
  /**@type {Consumer<?boolean>} @nodts*/
  this.f_toggleText__org_patternfly_component_Expandable_;
  /**@type {HTMLElement} @nodts*/
  this.f_button__org_patternfly_component_Expandable_;
  /**@type {HTMLElement} @nodts*/
  this.f_text__org_patternfly_component_Expandable_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_content__org_patternfly_component_Expandable_;
 }
 /** @nodts @return {Expandable} */
 static m_expandable__org_patternfly_component_Expandable() {
  Expandable.$clinit();
  return Expandable.$create__java_lang_String__java_lang_String('Show more', 'Show less');
 }
 /** @nodts @return {!Expandable} */
 static $create__java_lang_String__java_lang_String(/** ?string */ expandText, /** ?string */ collapseText) {
  Expandable.$clinit();
  let $instance = new Expandable();
  $instance.$ctor__org_patternfly_component_Expandable__java_lang_String__java_lang_String__void(expandText, collapseText);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Expandable__java_lang_String__java_lang_String__void(/** ?string */ expandText, /** ?string */ collapseText) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'Expandable');
  this.f_ceh__org_patternfly_component_Expandable_ = CollapseExpand.$create__();
  this.f_toggleText__org_patternfly_component_Expandable_ = Consumer.$adapt((expanded) =>{
   let expanded_1 = /**@type {?boolean}*/ ($Casts.$to(expanded, Boolean));
   this.m_textElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Expandable().textContent = Boolean.m_booleanValue__java_lang_Boolean__boolean(expanded_1) ? collapseText : expandText;
  });
  this.f_ceh__org_patternfly_component_Expandable_.f_onToggle__org_patternfly_component_CollapseExpand = this.f_toggleText__org_patternfly_component_Expandable_;
  this.f_button__org_patternfly_component_Expandable_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_Expandable_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Expandable(), this.m_contentElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Expandable());
  }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String))), PredefinedIcon.f_angleRight__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_text__org_patternfly_component_Expandable_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(expandText), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay));
  this.f_content__org_patternfly_component_Expandable_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder));
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(this.f_button__org_patternfly_component_Expandable_);
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_Expandable_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts @return {HTMLElement} */
 m_textElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Expandable() {
  return this.f_text__org_patternfly_component_Expandable_;
 }
 /** @nodts @return {HTMLElement} */
 m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Expandable() {
  return this.f_button__org_patternfly_component_Expandable_;
 }
 /** @nodts @return {HTMLElement} */
 m_contentElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_Expandable() {
  return /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_Expandable_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
 }
 /** @nodts @return {Expandable} */
 m_that__org_patternfly_component_Expandable() {
  return this;
 }
 /** @nodts @return {Expandable} */
 m_add__org_jboss_elemento_IsElement__org_patternfly_component_Expandable(/** IsElement */ element) {
  this.f_content__org_patternfly_component_Expandable_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(element);
  return this;
 }
 /** @nodts @return {Expandable} */
 m_add__java_lang_String__org_patternfly_component_Expandable(/** ?string */ text) {
  this.f_content__org_patternfly_component_Expandable_.m_add__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  return this;
 }
 /** @nodts @return {Expandable} */
 m_add__elemental2_dom_Node__org_patternfly_component_Expandable(/** Node */ element) {
  this.f_content__org_patternfly_component_Expandable_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
  return this;
 }
 /** @nodts @return {Expandable} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_patternfly_component_Expandable(/** Array<HTMLElement> */ elements) {
  this.f_content__org_patternfly_component_Expandable_.m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(elements);
  return this;
 }
 /** @nodts @return {Expandable} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_patternfly_component_Expandable(/** Array<IsElement> */ elements) {
  this.f_content__org_patternfly_component_Expandable_.m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(elements);
  return this;
 }
 /** @nodts @return {Expandable} */
 m_textContent__java_lang_String__org_patternfly_component_Expandable(/** ?string */ text) {
  this.f_content__org_patternfly_component_Expandable_.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  return this;
 }
 /** @nodts @return {Expandable} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_Expandable(/** SafeHtml */ html) {
  this.f_content__org_patternfly_component_Expandable_.m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(html);
  return this;
 }
 /** @nodts @return {Expandable} */
 m_onToggle__java_util_function_Consumer__org_patternfly_component_Expandable(/** Consumer<?boolean> */ onToggle) {
  this.f_ceh__org_patternfly_component_Expandable_.f_onToggle__org_patternfly_component_CollapseExpand = this.f_toggleText__org_patternfly_component_Expandable_.m_andThen__java_util_function_Consumer__java_util_function_Consumer(onToggle);
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Expandable();
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_add__java_lang_String__org_patternfly_component_Expandable(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return this.m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_Expandable(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_textContent__java_lang_String__org_patternfly_component_Expandable(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return this.m_add__elemental2_dom_Node__org_patternfly_component_Expandable(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement */ arg0) {
  return this.m_add__org_jboss_elemento_IsElement__org_patternfly_component_Expandable(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return this.m_addAll__arrayOf_elemental2_dom_HTMLElement__org_patternfly_component_Expandable(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Expandable} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement> */ arg0) {
  return this.m_addAll__arrayOf_org_jboss_elemento_IsElement__org_patternfly_component_Expandable(arg0);
 }
 /** @nodts */
 static $clinit() {
  Expandable.$clinit = () =>{};
  Expandable.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Expandable;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CollapseExpand = goog.module.get('org.patternfly.component.CollapseExpand$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Expandable, 'org.patternfly.component.Expandable');

exports = Expandable;

//# sourceMappingURL=Expandable.js.map

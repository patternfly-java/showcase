goog.module('org.patternfly.component.EmptyState$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Body = goog.forwardDeclare('org.patternfly.component.EmptyState.Body$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Callback = goog.forwardDeclare('org.patternfly.handler.Callback$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, EmptyState>}
 * @deprecated
 */
class EmptyState extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_body__org_patternfly_component_EmptyState_;
  /**@type {HTMLElement} @nodts*/
  this.f_primaryContainer__org_patternfly_component_EmptyState_;
  /**@type {HTMLElement} @nodts*/
  this.f_secondaryContainer__org_patternfly_component_EmptyState_;
 }
 /** @nodts @return {EmptyState} */
 static m_emptyState__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_EmptyState(/** Icon */ icon, /** ?string */ title) {
  EmptyState.$clinit();
  return EmptyState.$create__org_patternfly_component_Icon__java_lang_String(icon, title);
 }
 /** @nodts @return {EmptyState} */
 static m_spinner__org_patternfly_component_EmptyState() {
  EmptyState.$clinit();
  return EmptyState.m_spinner__java_lang_String__org_patternfly_component_EmptyState('Loading');
 }
 /** @nodts @return {EmptyState} */
 static m_spinner__java_lang_String__org_patternfly_component_EmptyState(/** ?string */ title) {
  EmptyState.$clinit();
  let loading = EmptyState.$create__org_patternfly_component_Icon__java_lang_String(null, title).m_large__org_patternfly_component_EmptyState();
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(loading.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Spinner.m_spinner__org_patternfly_layout_Size__org_patternfly_component_spinner_Spinner(Size.f_md__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return loading;
 }
 /** @nodts @return {EmptyState} */
 static m_noResults__org_patternfly_handler_Callback__org_patternfly_component_EmptyState(/** Callback */ callback) {
  EmptyState.$clinit();
  return EmptyState.m_noResults__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('No results found', callback);
 }
 /** @nodts @return {EmptyState} */
 static m_noResults__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState(/** ?string */ title, /** Callback */ callback) {
  EmptyState.$clinit();
  return EmptyState.$create__org_patternfly_component_Icon__java_lang_String(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.f_search__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon), title).m_body__java_lang_String__org_patternfly_component_EmptyState('No results match the filter criteria. Remove all filters or clear all filters to show results.').m_primary__org_patternfly_component_button_Button__org_patternfly_component_EmptyState(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Clear all filters').m_link__org_patternfly_component_button_Button().m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   callback.m_call__void();
  })));
 }
 /** @nodts @return {Body} */
 static m_body__org_patternfly_component_EmptyState_Body() {
  EmptyState.$clinit();
  return Body.$create__();
 }
 /** @nodts @return {!EmptyState} */
 static $create__org_patternfly_component_Icon__java_lang_String(/** Icon */ icon, /** ?string */ title) {
  EmptyState.$clinit();
  let $instance = new EmptyState();
  $instance.$ctor__org_patternfly_component_EmptyState__org_patternfly_component_Icon__java_lang_String__void(icon, title);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_EmptyState__org_patternfly_component_Icon__java_lang_String__void(/** Icon */ icon, /** ?string */ title) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'EmptyState');
  if (!$Equality.$same(icon, null)) {
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(/**@type {Icon}*/ ($Casts.$to(icon.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['icon'], j_l_String)))], j_l_String))), Icon)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon)));
  }
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(1, title, Size.f_lg__org_patternfly_layout_Size));
 }
 /** @nodts @return {EmptyState} */
 m_that__org_patternfly_component_EmptyState() {
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_body__java_lang_String__org_patternfly_component_EmptyState(/** ?string */ body) {
  return this.m_body__org_patternfly_component_EmptyState_Body__org_patternfly_component_EmptyState(/**@type {Body}*/ ($Casts.$to(EmptyState.m_body__org_patternfly_component_EmptyState_Body().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(body), Body)));
 }
 /** @nodts @return {EmptyState} */
 m_body__org_patternfly_component_EmptyState_Body__org_patternfly_component_EmptyState(/** Body */ body) {
  return /**@type {EmptyState}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_body__org_patternfly_component_EmptyState_ = body.m_element__elemental2_dom_HTMLElement()), EmptyState));
 }
 /** @nodts @return {EmptyState} */
 m_primary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState(/** ?string */ text, /** Callback */ callback) {
  return this.m_primary__elemental2_dom_HTMLElement__org_patternfly_component_EmptyState(Button.m_button__java_lang_String__org_patternfly_component_button_Button(text).m_primary__org_patternfly_component_button_Button().m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   callback.m_call__void();
  })).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {EmptyState} */
 m_primary__org_patternfly_component_button_Button__org_patternfly_component_EmptyState(/** Button */ button) {
  return this.m_primary__elemental2_dom_HTMLElement__org_patternfly_component_EmptyState(button.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {EmptyState} */
 m_primary__elemental2_dom_HTMLElement__org_patternfly_component_EmptyState(/** HTMLElement */ element) {
  if ($Equality.$same(this.f_primaryContainer__org_patternfly_component_EmptyState_, null)) {
   this.f_primaryContainer__org_patternfly_component_EmptyState_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_primary__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
   if ($Equality.$same(this.f_body__org_patternfly_component_EmptyState_, null)) {
    this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_primaryContainer__org_patternfly_component_EmptyState_);
   } else {
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(this.f_primaryContainer__org_patternfly_component_EmptyState_, this.f_body__org_patternfly_component_EmptyState_);
   }
  }
  this.f_primaryContainer__org_patternfly_component_EmptyState_.appendChild(element);
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState(/** ?string */ text, /** Callback */ callback) {
  return this.m_secondary__elemental2_dom_HTMLElement__org_patternfly_component_EmptyState(Button.m_button__java_lang_String__org_patternfly_component_button_Button(text).m_secondary__org_patternfly_component_button_Button().m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   callback.m_call__void();
  })).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {EmptyState} */
 m_secondary__org_patternfly_component_button_Button__org_patternfly_component_EmptyState(/** Button */ button) {
  return this.m_secondary__elemental2_dom_HTMLElement__org_patternfly_component_EmptyState(button.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {EmptyState} */
 m_secondary__elemental2_dom_HTMLElement__org_patternfly_component_EmptyState(/** HTMLElement */ element) {
  if ($Equality.$same(this.f_secondaryContainer__org_patternfly_component_EmptyState_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_secondaryContainer__org_patternfly_component_EmptyState_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_secondary__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  this.f_secondaryContainer__org_patternfly_component_EmptyState_.appendChild(element);
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_small__org_patternfly_component_EmptyState() {
  return /**@type {EmptyState}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Size.f_sm__org_patternfly_layout_Size.f_modifier__org_patternfly_layout_Size], j_l_String))), EmptyState));
 }
 /** @nodts @return {EmptyState} */
 m_large__org_patternfly_component_EmptyState() {
  return /**@type {EmptyState}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Size.f_lg__org_patternfly_layout_Size.f_modifier__org_patternfly_layout_Size], j_l_String))), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_EmptyState();
 }
 /** @nodts */
 static $clinit() {
  EmptyState.$clinit = () =>{};
  EmptyState.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyState;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Body = goog.module.get('org.patternfly.component.EmptyState.Body$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Size = goog.module.get('org.patternfly.layout.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(EmptyState, 'org.patternfly.component.EmptyState');

exports = EmptyState;

//# sourceMappingURL=EmptyState.js.map

goog.module('org.patternfly.component.expandable.ExpandableSectionToggle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ExpandableSection = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSection$impl');
let ExpandableSectionToggleText = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionToggleText$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLButtonElement, ExpandableSectionToggle>}
 * @implements {ComponentReference<ExpandableSection>}
 */
class ExpandableSectionToggle extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_expandable_ExpandableSectionToggle;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleIconElement__org_patternfly_component_expandable_ExpandableSectionToggle_;
  /**@type {boolean} @nodts*/
  this.f_up__org_patternfly_component_expandable_ExpandableSectionToggle_ = false;
  /**@type {ExpandableSectionToggleText} @nodts*/
  this.f_text__org_patternfly_component_expandable_ExpandableSectionToggle_;
  /**@type {ExpandableSection} @nodts*/
  this.f_expandableSection__org_patternfly_component_expandable_ExpandableSectionToggle_;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__org_patternfly_component_expandable_ExpandableSectionToggle() {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__java_lang_String__java_lang_String(null, null);
 }
 /** @nodts @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** ?string */ moreText) {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__java_lang_String__java_lang_String(moreText, null);
 }
 /** @nodts @return {ExpandableSectionToggle} */
 static m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle(/** ?string */ moreText, /** ?string */ lessText) {
  ExpandableSectionToggle.$clinit();
  return ExpandableSectionToggle.$create__java_lang_String__java_lang_String(moreText, lessText);
 }
 /** @nodts @return {!ExpandableSectionToggle} */
 static $create__java_lang_String__java_lang_String(/** ?string */ moreText, /** ?string */ lessText) {
  ExpandableSectionToggle.$clinit();
  let $instance = new ExpandableSectionToggle();
  $instance.$ctor__org_patternfly_component_expandable_ExpandableSectionToggle__java_lang_String__java_lang_String__void(moreText, lessText);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_expandable_ExpandableSectionToggle__java_lang_String__java_lang_String__void(/** ?string */ moreText, /** ?string */ lessText) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_id__org_patternfly_component_expandable_ExpandableSectionToggle = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['tgl'], j_l_String))));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_toggleIconElement__org_patternfly_component_expandable_ExpandableSectionToggle_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_angleRight__org_patternfly_layout_PredefinedIcon)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(moreText, null) || !$Equality.$same(lessText, null)) {
   this.m_add__org_patternfly_component_expandable_ExpandableSectionToggleText__org_patternfly_component_expandable_ExpandableSectionToggle(ExpandableSectionToggleText.m_expandableSectionToggleText__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggleText(moreText, lessText));
  }
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_expandable_ExpandableSection__void(/** ExpandableSection */ expandableSection) {
  this.f_expandableSection__org_patternfly_component_expandable_ExpandableSectionToggle_ = expandableSection;
  this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   expandableSection.m_toggle__void();
  });
 }
 /** @nodts @return {ExpandableSection} */
 m_mainComponent__org_patternfly_component_expandable_ExpandableSection() {
  return this.f_expandableSection__org_patternfly_component_expandable_ExpandableSectionToggle_;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_addText__org_patternfly_component_expandable_ExpandableSectionToggleText__org_patternfly_component_expandable_ExpandableSectionToggle(/** ExpandableSectionToggleText */ text) {
  return this.m_add__org_patternfly_component_expandable_ExpandableSectionToggleText__org_patternfly_component_expandable_ExpandableSectionToggle(text);
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_add__org_patternfly_component_expandable_ExpandableSectionToggleText__org_patternfly_component_expandable_ExpandableSectionToggle(/** ExpandableSectionToggleText */ text) {
  this.f_text__org_patternfly_component_expandable_ExpandableSectionToggle_ = text;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(text.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_up__org_patternfly_component_expandable_ExpandableSectionToggle() {
  this.f_up__org_patternfly_component_expandable_ExpandableSectionToggle_ = true;
  return this;
 }
 /** @nodts @return {ExpandableSectionToggle} */
 m_that__org_patternfly_component_expandable_ExpandableSectionToggle() {
  return this;
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component_expandable() {
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false);
  if (this.f_up__org_patternfly_component_expandable_ExpandableSectionToggle_) {
   this.f_toggleIconElement__org_patternfly_component_expandable_ExpandableSectionToggle_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandTop__org_patternfly_layout_Classes));
  }
  if (!$Equality.$same(this.f_text__org_patternfly_component_expandable_ExpandableSectionToggle_, null)) {
   this.f_text__org_patternfly_component_expandable_ExpandableSectionToggle_.m_collapse__void_$pp_org_patternfly_component_expandable();
  }
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component_expandable() {
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, true);
  if (this.f_up__org_patternfly_component_expandable_ExpandableSectionToggle_) {
   this.f_toggleIconElement__org_patternfly_component_expandable_ExpandableSectionToggle_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandTop__org_patternfly_layout_Classes));
  }
  if (!$Equality.$same(this.f_text__org_patternfly_component_expandable_ExpandableSectionToggle_, null)) {
   this.f_text__org_patternfly_component_expandable_ExpandableSectionToggle_.m_expand__void_$pp_org_patternfly_component_expandable();
  }
 }
 /** @nodts */
 m_removeIcon__void_$pp_org_patternfly_component_expandable() {
  let icon = this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))));
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(icon);
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSection} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_expandable_ExpandableSection();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** ExpandableSection */ arg0) {
  this.m_passComponent__org_patternfly_component_expandable_ExpandableSection__void(/**@type {ExpandableSection}*/ ($Casts.$to(arg0, ExpandableSection)));
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionToggle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_expandable_ExpandableSectionToggle();
 }
 /** @nodts */
 static $clinit() {
  ExpandableSectionToggle.$clinit = () =>{};
  ExpandableSectionToggle.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSectionToggle;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ExpandableSection = goog.module.get('org.patternfly.component.expandable.ExpandableSection$impl');
  ExpandableSectionToggleText = goog.module.get('org.patternfly.component.expandable.ExpandableSectionToggleText$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(ExpandableSectionToggle);
$Util.$setClassMetadata(ExpandableSectionToggle, 'org.patternfly.component.expandable.ExpandableSectionToggle');

exports = ExpandableSectionToggle;

//# sourceMappingURL=ExpandableSectionToggle.js.map

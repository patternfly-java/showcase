goog.module('org.patternfly.component.help.HelperTextItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HelperTextSubComponent = goog.require('org.patternfly.component.help.HelperTextSubComponent$impl');
const HasValue = goog.require('org.patternfly.core.HasValue$impl');
const WithIcon = goog.require('org.patternfly.core.WithIcon$impl');
const WithIconAndText = goog.require('org.patternfly.core.WithIconAndText$impl');
const WithText = goog.require('org.patternfly.core.WithText$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.core.IconPosition$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.core.ValidationStatus$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HelperTextSubComponent<HTMLElement, HelperTextItem>}
 * @implements {WithIcon<HTMLElement, HelperTextItem>}
 * @implements {WithText<HTMLElement, HelperTextItem>}
 * @implements {WithIconAndText<HTMLElement, HelperTextItem>}
 * @implements {HasValue<?string>}
 */
class HelperTextItem extends HelperTextSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_help_HelperTextItem_;
  /**@type {boolean} @nodts*/
  this.f_defaultIcon__org_patternfly_component_help_HelperTextItem_ = false;
  /**@type {boolean} @nodts*/
  this.f_customScreenReaderText__org_patternfly_component_help_HelperTextItem_ = false;
  /**@type {ValidationStatus} @nodts*/
  this.f_status__org_patternfly_component_help_HelperTextItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_screenReaderElement__org_patternfly_component_help_HelperTextItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_help_HelperTextItem_;
 }
 /** @nodts @return {HelperTextItem} */
 static m_helperTextItem__org_patternfly_component_help_HelperTextItem() {
  HelperTextItem.$clinit();
  return HelperTextItem.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), null, ValidationStatus.f_default___org_patternfly_core_ValidationStatus);
 }
 /** @nodts @return {HelperTextItem} */
 static m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem(/** ?string */ text) {
  HelperTextItem.$clinit();
  return HelperTextItem.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), text, ValidationStatus.f_default___org_patternfly_core_ValidationStatus);
 }
 /** @nodts @return {HelperTextItem} */
 static m_helperTextItem__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem(/** ?string */ text, /** ValidationStatus */ status) {
  HelperTextItem.$clinit();
  return HelperTextItem.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), text, status);
 }
 /** @nodts @template E @return {HelperTextItem} */
 static m_helperTextItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_help_HelperTextItem(/** HTMLContainerBuilder<E> */ builder) {
  HelperTextItem.$clinit();
  return HelperTextItem.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus(builder, null, ValidationStatus.f_default___org_patternfly_core_ValidationStatus);
 }
 /** @nodts @template E @return {HelperTextItem} */
 static m_helperTextItem__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_component_help_HelperTextItem(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text) {
  HelperTextItem.$clinit();
  return HelperTextItem.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus(builder, text, ValidationStatus.f_default___org_patternfly_core_ValidationStatus);
 }
 /** @nodts @template E @return {HelperTextItem} */
 static m_helperTextItem__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text, /** ValidationStatus */ status) {
  HelperTextItem.$clinit();
  return HelperTextItem.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus(builder, text, status);
 }
 /** @nodts @template E @return {!HelperTextItem} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text, /** ValidationStatus */ status) {
  HelperTextItem.$clinit();
  let $instance = new HelperTextItem();
  $instance.$ctor__org_patternfly_component_help_HelperTextItem__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus__void(builder, text, status);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_help_HelperTextItem__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_core_ValidationStatus__void(/** HTMLContainerBuilder<E> */ builder, /** ?string */ text, /** ValidationStatus */ status) {
  this.$ctor__org_patternfly_component_help_HelperTextSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(HelperTextItem.f_SUB_COMPONENT_NAME__org_patternfly_component_help_HelperTextItem, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_helperText__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
  this.f_status__org_patternfly_component_help_HelperTextItem_ = status;
  this.f_defaultIcon__org_patternfly_component_help_HelperTextItem_ = false;
  this.f_customScreenReaderText__org_patternfly_component_help_HelperTextItem_ = false;
  if (!$Equality.$same(status, ValidationStatus.f_default___org_patternfly_core_ValidationStatus)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([status.f_modifier__org_patternfly_core_ValidationStatus], j_l_String)));
  }
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_textElement__org_patternfly_component_help_HelperTextItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_helperText__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(text, null)) {
   this.f_textElement__org_patternfly_component_help_HelperTextItem_.textContent = text;
  }
 }
 /** @nodts @return {HelperTextItem} */
 m_dynamic__org_patternfly_component_help_HelperTextItem() {
  if (!this.f_customScreenReaderText__org_patternfly_component_help_HelperTextItem_) {
   this.m_defaultScreenReaderText__void_$p_org_patternfly_component_help_HelperTextItem();
  }
  return /**@type {HelperTextItem}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_dynamic__org_patternfly_style_Classes)], j_l_String))), HelperTextItem));
 }
 /** @nodts @return {HelperTextItem} */
 m_defaultIcon__org_patternfly_component_help_HelperTextItem() {
  this.f_defaultIcon__org_patternfly_component_help_HelperTextItem_ = true;
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_help_HelperTextItem().appendChild(/**@type {InlineIcon}*/ ($Casts.$to(InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(this.f_status__org_patternfly_component_help_HelperTextItem_.f_icon__org_patternfly_core_ValidationStatus).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['fa-fw'], j_l_String))), InlineIcon)).m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_icon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(/** InlineIcon */ icon) {
  if (!icon.m_element__elemental2_dom_HTMLElement().classList.contains('fa-fw')) {
   icon.m_element__elemental2_dom_HTMLElement().classList.add('fa-fw');
  }
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_help_HelperTextItem_);
  Element_$Overlay.m_append__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_help_HelperTextItem(), [icon.m_element__elemental2_dom_HTMLElement()]);
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_removeIcon__org_patternfly_component_help_HelperTextItem() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_help_HelperTextItem_);
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_patternfly_component_help_HelperTextItem(/** InlineIcon */ icon, /** ?string */ text, /** IconPosition */ iconPosition) {
  this.m_icon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(icon);
  return this.m_text__java_lang_String__org_patternfly_component_help_HelperTextItem(text);
 }
 /** @nodts @return {HelperTextItem} */
 m_status__org_patternfly_core_ValidationStatus__org_patternfly_component_help_HelperTextItem(/** ValidationStatus */ status) {
  return this.m_status__org_patternfly_core_ValidationStatus__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(status, this.f_defaultIcon__org_patternfly_component_help_HelperTextItem_ ? InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(status.f_icon__org_patternfly_core_ValidationStatus) : null);
 }
 /** @nodts @return {HelperTextItem} */
 m_status__org_patternfly_core_ValidationStatus__java_lang_String__org_patternfly_component_help_HelperTextItem(/** ValidationStatus */ status, /** ?string */ iconClass) {
  return this.m_status__org_patternfly_core_ValidationStatus__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(status, InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass));
 }
 /** @nodts @return {HelperTextItem} */
 m_status__org_patternfly_core_ValidationStatus__org_patternfly_style_PredefinedIcon__org_patternfly_component_help_HelperTextItem(/** ValidationStatus */ status, /** PredefinedIcon */ predefinedIcon) {
  return this.m_status__org_patternfly_core_ValidationStatus__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(status, InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(predefinedIcon));
 }
 /** @nodts @return {HelperTextItem} */
 m_status__org_patternfly_core_ValidationStatus__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(/** ValidationStatus */ status, /** InlineIcon */ icon) {
  if (!$Equality.$same(this.f_status__org_patternfly_component_help_HelperTextItem_, ValidationStatus.f_default___org_patternfly_core_ValidationStatus)) {
   this.m_element__elemental2_dom_HTMLElement().classList.remove(this.f_status__org_patternfly_component_help_HelperTextItem_.f_modifier__org_patternfly_core_ValidationStatus);
  }
  this.f_status__org_patternfly_component_help_HelperTextItem_ = status;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([status.f_modifier__org_patternfly_core_ValidationStatus], j_l_String)));
  if (!$Equality.$same(icon, null)) {
   this.m_icon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(icon);
  }
  if (!this.f_customScreenReaderText__org_patternfly_component_help_HelperTextItem_) {
   this.m_defaultScreenReaderText__void_$p_org_patternfly_component_help_HelperTextItem();
  }
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_text__java_lang_String__org_patternfly_component_help_HelperTextItem(/** ?string */ text) {
  /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(this.f_textElement__org_patternfly_component_help_HelperTextItem_)).m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_screenReader__java_lang_String__org_patternfly_component_help_HelperTextItem(/** ?string */ text) {
  this.f_customScreenReaderText__org_patternfly_component_help_HelperTextItem_ = true;
  this.m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_help_HelperTextItem().textContent = text;
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_that__org_patternfly_component_help_HelperTextItem() {
  return this;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String() {
  return this.f_textElement__org_patternfly_component_help_HelperTextItem_.textContent;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_help_HelperTextItem() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_help_HelperTextItem_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_iconContainer__org_patternfly_component_help_HelperTextItem_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_helperText__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.f_iconContainer__org_patternfly_component_help_HelperTextItem_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_help_HelperTextItem() {
  if ($Equality.$same(this.f_screenReaderElement__org_patternfly_component_help_HelperTextItem_, null)) {
   this.f_textElement__org_patternfly_component_help_HelperTextItem_.appendChild(this.f_screenReaderElement__org_patternfly_component_help_HelperTextItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_screenReaderElement__org_patternfly_component_help_HelperTextItem_;
 }
 /** @nodts */
 m_defaultScreenReaderText__void_$p_org_patternfly_component_help_HelperTextItem() {
  this.m_failSafeScreenReaderElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_help_HelperTextItem().textContent = ': ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_status__org_patternfly_component_help_HelperTextItem_.name()) + ' status;';
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_help_HelperTextItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_icon__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_core_WithIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HelperTextItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_icon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_core_WithIcon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), HelperTextItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_icon__org_patternfly_component_icon_InlineIcon__org_jboss_elemento_TypedBuilder(/** InlineIcon */ arg0) {
  return this.m_icon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_help_HelperTextItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_help_HelperTextItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_help_HelperTextItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_iconAndText__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HelperTextItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HelperTextItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_jboss_elemento_TypedBuilder(/** InlineIcon */ arg0, /** ?string */ arg1) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HelperTextItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_iconAndText__java_lang_String__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__java_lang_String__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HelperTextItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HelperTextItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(/** InlineIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return this.m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_core_IconPosition__org_patternfly_component_help_HelperTextItem(arg0, arg1, arg2);
 }
 //Bridge method.
 /** @final @override @nodts @return {?string} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_String();
 }
 //Default method forwarding stub.
 /** @nodts @return {HelperTextItem} */
 m_icon__java_lang_String__org_patternfly_component_help_HelperTextItem(/** ?string */ arg0) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_core_WithIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HelperTextItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {HelperTextItem} */
 m_icon__org_patternfly_style_PredefinedIcon__org_patternfly_component_help_HelperTextItem(/** PredefinedIcon */ arg0) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_core_WithIcon__org_patternfly_style_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), HelperTextItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {HelperTextItem} */
 m_iconAndText__java_lang_String__java_lang_String__org_patternfly_component_help_HelperTextItem(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HelperTextItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_component_help_HelperTextItem(/** PredefinedIcon */ arg0, /** ?string */ arg1) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HelperTextItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_component_help_HelperTextItem(/** InlineIcon */ arg0, /** ?string */ arg1) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_component_icon_InlineIcon__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HelperTextItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {HelperTextItem} */
 m_iconAndText__java_lang_String__java_lang_String__org_patternfly_core_IconPosition__org_patternfly_component_help_HelperTextItem(/** ?string */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__java_lang_String__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HelperTextItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {HelperTextItem} */
 m_iconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_core_IconPosition__org_patternfly_component_help_HelperTextItem(/** PredefinedIcon */ arg0, /** ?string */ arg1, /** IconPosition */ arg2) {
  return /**@type {HelperTextItem}*/ ($Casts.$to(WithIconAndText.m_iconAndText__$default__org_patternfly_core_WithIconAndText__org_patternfly_style_PredefinedIcon__java_lang_String__org_patternfly_core_IconPosition__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HelperTextItem));
 }
 /** @nodts */
 static $clinit() {
  HelperTextItem.$clinit = () =>{};
  HelperTextItem.$loadModules();
  HelperTextSubComponent.$clinit();
  WithIcon.$clinit();
  WithIconAndText.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HelperTextItem;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ValidationStatus = goog.module.get('org.patternfly.core.ValidationStatus$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
HelperTextItem.f_SUB_COMPONENT_NAME__org_patternfly_component_help_HelperTextItem = 'hti';
WithIcon.$markImplementor(HelperTextItem);
WithText.$markImplementor(HelperTextItem);
WithIconAndText.$markImplementor(HelperTextItem);
HasValue.$markImplementor(HelperTextItem);
$Util.$setClassMetadata(HelperTextItem, 'org.patternfly.component.help.HelperTextItem');

exports = HelperTextItem;

//# sourceMappingURL=HelperTextItem.js.map

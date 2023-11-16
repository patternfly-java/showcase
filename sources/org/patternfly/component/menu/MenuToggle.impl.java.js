goog.module('org.patternfly.component.menu.MenuToggle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Avatar = goog.forwardDeclare('org.patternfly.component.avatar.Avatar$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let MenuToggleAction = goog.forwardDeclare('org.patternfly.component.menu.MenuToggleAction$impl');
let MenuToggleCheckbox = goog.forwardDeclare('org.patternfly.component.menu.MenuToggleCheckbox$impl');
let MenuToggleType = goog.forwardDeclare('org.patternfly.component.menu.MenuToggleType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, MenuToggle>}
 * @implements {Disabled<HTMLElement, MenuToggle>}
 */
class MenuToggle extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_toggleElement__org_patternfly_component_menu_MenuToggle;
  /**@type {MenuToggleType} @nodts*/
  this.f_type__org_patternfly_component_menu_MenuToggle_;
  /**@type {HTMLElement} @nodts*/
  this.f_controlElement__org_patternfly_component_menu_MenuToggle_;
  /**@type {HTMLElement} @nodts*/
  this.f_labelElement__org_patternfly_component_menu_MenuToggle_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_menu_MenuToggle_;
  /**@type {Badge} @nodts*/
  this.f_badge__org_patternfly_component_menu_MenuToggle_;
  /**@type {MenuToggleAction} @nodts*/
  this.f_action__org_patternfly_component_menu_MenuToggle_;
  /**@type {MenuToggleCheckbox} @nodts*/
  this.f_checkbox__org_patternfly_component_menu_MenuToggle_;
 }
 /** @nodts @return {MenuToggle} */
 static m_menuToggle__org_patternfly_component_menu_MenuToggle() {
  MenuToggle.$clinit();
  return MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType);
 }
 /** @nodts @return {MenuToggle} */
 static m_menuToggle__java_lang_String__org_patternfly_component_menu_MenuToggle(/** ?string */ text) {
  MenuToggle.$clinit();
  return MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType).m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(text);
 }
 /** @nodts @return {MenuToggle} */
 static m_menuToggle__org_patternfly_layout_PredefinedIcon__org_patternfly_component_menu_MenuToggle(/** PredefinedIcon */ icon) {
  MenuToggle.$clinit();
  return MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(MenuToggleType.f_plain__org_patternfly_component_menu_MenuToggleType).m_addIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_menu_MenuToggle(icon);
 }
 /** @nodts @return {MenuToggle} */
 static m_menuToggle__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(/** PredefinedIcon */ icon, /** ?string */ label) {
  MenuToggle.$clinit();
  return MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(MenuToggleType.f_plain__org_patternfly_component_menu_MenuToggleType).m_addIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_menu_MenuToggle(icon).m_ariaLabel__java_lang_String__org_patternfly_component_menu_MenuToggle(label);
 }
 /** @nodts @return {MenuToggle} */
 static m_menuToggle__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(/** InlineIcon */ icon) {
  MenuToggle.$clinit();
  return MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(MenuToggleType.f_plain__org_patternfly_component_menu_MenuToggleType).m_addIcon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(icon);
 }
 /** @nodts @return {MenuToggle} */
 static m_menuToggle__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(/** InlineIcon */ icon, /** ?string */ label) {
  MenuToggle.$clinit();
  return MenuToggle.m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(MenuToggleType.f_plain__org_patternfly_component_menu_MenuToggleType).m_addIcon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(icon).m_ariaLabel__java_lang_String__org_patternfly_component_menu_MenuToggle(label);
 }
 /** @nodts @return {MenuToggle} */
 static m_menuToggle__org_patternfly_component_menu_MenuToggleType__org_patternfly_component_menu_MenuToggle(/** MenuToggleType */ type) {
  MenuToggle.$clinit();
  switch (type.ordinal()) {
   case MenuToggleType.$ordinal_default___org_patternfly_component_menu_MenuToggleType: 
   case MenuToggleType.$ordinal_plain__org_patternfly_component_menu_MenuToggleType: 
   case MenuToggleType.$ordinal_plainText__org_patternfly_component_menu_MenuToggleType: 
    return MenuToggle.$create__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_menu_MenuToggleType(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder(), type);
   case MenuToggleType.$ordinal_split__org_patternfly_component_menu_MenuToggleType: 
   case MenuToggleType.$ordinal_typeahead__org_patternfly_component_menu_MenuToggleType: 
    return MenuToggle.$create__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_menu_MenuToggleType(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder(), type);
   default: 
    goog.global.console.error('Unknown menu toggle type \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(type.name()) + '\'. ' + 'Fallback to \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType.name()) + '\'.');
    return MenuToggle.$create__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_menu_MenuToggleType(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder(), type);
  }
 }
 /** @nodts @template E @return {!MenuToggle} */
 static $create__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_menu_MenuToggleType(/** HTMLContainerBuilder<E> */ builder, /** MenuToggleType */ type) {
  MenuToggle.$clinit();
  let $instance = new MenuToggle();
  $instance.$ctor__org_patternfly_component_menu_MenuToggle__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_menu_MenuToggleType__void(builder, type);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_menu_MenuToggle__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_menu_MenuToggleType__void(/** HTMLContainerBuilder<E> */ builder, /** MenuToggleType */ type) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), ComponentType.f_MenuToggle__org_patternfly_component_ComponentType);
  this.f_type__org_patternfly_component_menu_MenuToggle_ = type;
  if (!j_l_String.m_isEmpty__java_lang_String__boolean(this.f_type__org_patternfly_component_menu_MenuToggle_.f_modifier__org_patternfly_component_menu_MenuToggleType)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([type.f_modifier__org_patternfly_component_menu_MenuToggleType], j_l_String)));
  }
  if ($Equality.$same(type, MenuToggleType.f_plain__org_patternfly_component_menu_MenuToggleType)) {
   this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.f_expanded__org_patternfly_layout_Classes, false);
   this.f_toggleElement__org_patternfly_component_menu_MenuToggle = this.m_element__elemental2_dom_HTMLElement();
   this.f_controlElement__org_patternfly_component_menu_MenuToggle_ = null;
  } else if ($Equality.$same(type, MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType) || $Equality.$same(type, MenuToggleType.f_plainText__org_patternfly_component_menu_MenuToggleType)) {
   this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.f_expanded__org_patternfly_layout_Classes, false);
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_controlElement__org_patternfly_component_menu_MenuToggle_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_controls__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon)), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
   this.f_toggleElement__org_patternfly_component_menu_MenuToggle = this.m_element__elemental2_dom_HTMLElement();
  } else if ($Equality.$same(type, MenuToggleType.f_split__org_patternfly_component_menu_MenuToggleType) || $Equality.$same(type, MenuToggleType.f_typeahead__org_patternfly_component_menu_MenuToggleType)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_toggleElement__org_patternfly_component_menu_MenuToggle = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.f_expanded__org_patternfly_layout_Classes, false), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_controls__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon)), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
   this.f_controlElement__org_patternfly_component_menu_MenuToggle_ = this.f_toggleElement__org_patternfly_component_menu_MenuToggle;
  } else {
   this.f_toggleElement__org_patternfly_component_menu_MenuToggle = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
   this.f_controlElement__org_patternfly_component_menu_MenuToggle_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
   goog.global.console.error('Unknown menu toggle type \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(type.name()) + '\'');
  }
 }
 /** @nodts @return {MenuToggle} */
 m_addIcon__java_lang_String__org_patternfly_component_menu_MenuToggle(/** ?string */ iconClass) {
  return this.m_add__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(iconClass));
 }
 /** @nodts @return {MenuToggle} */
 m_addIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_menu_MenuToggle(/** PredefinedIcon */ icon) {
  return this.m_add__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(InlineIcon.m_inlineIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_icon_InlineIcon(icon));
 }
 /** @nodts @return {MenuToggle} */
 m_addIcon__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(/** InlineIcon */ icon) {
  return this.m_add__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(icon);
 }
 /** @nodts @return {MenuToggle} */
 m_add__org_patternfly_component_icon_InlineIcon__org_patternfly_component_menu_MenuToggle(/** InlineIcon */ icon) {
  if ($Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_plain__org_patternfly_component_menu_MenuToggleType)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon.m_element__elemental2_dom_HTMLElement());
  } else if ($Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType) || $Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_plainText__org_patternfly_component_menu_MenuToggleType)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(icon), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  } else {
   goog.global.console.warn('Icon is not supported for menu toggles with type \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_menu_MenuToggle_.name()) + '\'');
  }
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_addAvatar__org_patternfly_component_avatar_Avatar__org_patternfly_component_menu_MenuToggle(/** Avatar */ avatar) {
  return this.m_add__org_patternfly_component_avatar_Avatar__org_patternfly_component_menu_MenuToggle(avatar);
 }
 /** @nodts @return {MenuToggle} */
 m_add__org_patternfly_component_avatar_Avatar__org_patternfly_component_menu_MenuToggle(/** Avatar */ avatar) {
  if ($Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType) || $Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_plainText__org_patternfly_component_menu_MenuToggleType)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(avatar), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  } else {
   goog.global.console.warn('Avatar is not supported for menu toggles with type \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_menu_MenuToggle_.name()) + '\'');
  }
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_addBadge__org_patternfly_component_badge_Badge__org_patternfly_component_menu_MenuToggle(/** Badge */ badge) {
  return this.m_add__org_patternfly_component_badge_Badge__org_patternfly_component_menu_MenuToggle(badge);
 }
 /** @nodts @return {MenuToggle} */
 m_add__org_patternfly_component_badge_Badge__org_patternfly_component_menu_MenuToggle(/** Badge */ badge) {
  if ($Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType) || $Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_plainText__org_patternfly_component_menu_MenuToggleType)) {
   this.f_badge__org_patternfly_component_menu_MenuToggle_ = badge;
   Elements.m_insertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_count__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(badge), HTMLContainerBuilder)), this.f_controlElement__org_patternfly_component_menu_MenuToggle_);
  } else {
   goog.global.console.warn('Badge is not supported for menu toggles with type \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_menu_MenuToggle_.name()) + '\'');
  }
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_addAction__org_patternfly_component_menu_MenuToggleAction__org_patternfly_component_menu_MenuToggle(/** MenuToggleAction */ action) {
  return this.m_add__org_patternfly_component_menu_MenuToggleAction__org_patternfly_component_menu_MenuToggle(action);
 }
 /** @nodts @return {MenuToggle} */
 m_add__org_patternfly_component_menu_MenuToggleAction__org_patternfly_component_menu_MenuToggle(/** MenuToggleAction */ action) {
  this.f_action__org_patternfly_component_menu_MenuToggle_ = action;
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_action__org_patternfly_layout_Classes)], j_l_String)));
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLButtonElement}*/ ($Casts.$to(action.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)));
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_addCheckbox__org_patternfly_component_menu_MenuToggleCheckbox__org_patternfly_component_menu_MenuToggle(/** MenuToggleCheckbox */ checkbox) {
  return this.m_add__org_patternfly_component_menu_MenuToggleCheckbox__org_patternfly_component_menu_MenuToggle(checkbox);
 }
 /** @nodts @return {MenuToggle} */
 m_add__org_patternfly_component_menu_MenuToggleCheckbox__org_patternfly_component_menu_MenuToggle(/** MenuToggleCheckbox */ checkbox) {
  this.f_checkbox__org_patternfly_component_menu_MenuToggle_ = checkbox;
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), checkbox.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_disabled__boolean__org_patternfly_component_menu_MenuToggle(/** boolean */ disabled) {
  Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled);
  if ($Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_split__org_patternfly_component_menu_MenuToggleType) || $Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_typeahead__org_patternfly_component_menu_MenuToggleType)) {
   /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_toggleElement__org_patternfly_component_menu_MenuToggle, HTMLButtonElement_$Overlay)).disabled = disabled;
   if (!$Equality.$same(this.f_action__org_patternfly_component_menu_MenuToggle_, null)) {
    this.f_action__org_patternfly_component_menu_MenuToggle_.m_disabled__boolean__org_patternfly_component_menu_MenuToggleAction(disabled);
   } else if (!$Equality.$same(this.f_checkbox__org_patternfly_component_menu_MenuToggle_, null)) {
    this.f_checkbox__org_patternfly_component_menu_MenuToggle_.m_disabled__boolean__org_patternfly_component_menu_MenuToggleCheckbox(disabled);
   }
  }
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_primary__org_patternfly_component_menu_MenuToggle() {
  return /**@type {MenuToggle}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_primary__org_patternfly_layout_Classes)], j_l_String))), MenuToggle));
 }
 /** @nodts @return {MenuToggle} */
 m_secondary__org_patternfly_component_menu_MenuToggle() {
  return /**@type {MenuToggle}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_secondary__org_patternfly_layout_Classes)], j_l_String))), MenuToggle));
 }
 /** @nodts @return {MenuToggle} */
 m_text__java_lang_String__org_patternfly_component_menu_MenuToggle(/** ?string */ text) {
  if ($Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_default___org_patternfly_component_menu_MenuToggleType) || $Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_plainText__org_patternfly_component_menu_MenuToggleType)) {
   if ($Equality.$same(this.f_textElement__org_patternfly_component_menu_MenuToggle_, null)) {
    let before = !$Equality.$same(this.f_badge__org_patternfly_component_menu_MenuToggle_, null) ? this.f_badge__org_patternfly_component_menu_MenuToggle_.m_element__elemental2_dom_HTMLElement() : this.f_controlElement__org_patternfly_component_menu_MenuToggle_;
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_textElement__org_patternfly_component_menu_MenuToggle_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menuToggle__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), before);
   }
   this.f_textElement__org_patternfly_component_menu_MenuToggle_.textContent = text;
  } else if ($Equality.$same(this.f_type__org_patternfly_component_menu_MenuToggle_, MenuToggleType.f_split__org_patternfly_component_menu_MenuToggleType)) {
   if (!$Equality.$same(this.f_checkbox__org_patternfly_component_menu_MenuToggle_, null)) {
    this.f_checkbox__org_patternfly_component_menu_MenuToggle_.m_text__java_lang_String__org_patternfly_component_menu_MenuToggleCheckbox(text);
   } else if (!$Equality.$same(this.f_action__org_patternfly_component_menu_MenuToggle_, null)) {
    this.f_action__org_patternfly_component_menu_MenuToggle_.m_text__java_lang_String__org_patternfly_component_menu_MenuToggleAction(text);
   }
  }
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_that__org_patternfly_component_menu_MenuToggle() {
  return this;
 }
 /** @nodts @return {MenuToggle} */
 m_ariaLabel__java_lang_String__org_patternfly_component_menu_MenuToggle(/** ?string */ label) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_toggleElement__org_patternfly_component_menu_MenuToggle, Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuToggle();
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggle} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {MenuToggle}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuToggle));
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuToggle} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_menu_MenuToggle(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {MenuToggle} */
 m_disabled__org_patternfly_component_menu_MenuToggle() {
  return /**@type {MenuToggle}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MenuToggle));
 }
 /** @nodts */
 static $clinit() {
  MenuToggle.$clinit = () =>{};
  MenuToggle.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuToggle;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  MenuToggleType = goog.module.get('org.patternfly.component.menu.MenuToggleType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(MenuToggle);
$Util.$setClassMetadata(MenuToggle, 'org.patternfly.component.menu.MenuToggle');

exports = MenuToggle;

//# sourceMappingURL=MenuToggle.js.map

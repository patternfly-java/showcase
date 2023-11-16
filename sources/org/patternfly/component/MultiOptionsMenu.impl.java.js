goog.module('org.patternfly.component.MultiOptionsMenu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let CollapseExpand = goog.forwardDeclare('org.patternfly.component.CollapseExpand$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let Group = goog.forwardDeclare('org.patternfly.component.MultiOptionsMenu.Group$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, MultiOptionsMenu>}
 * @implements {Disabled<HTMLDivElement, MultiOptionsMenu>}
 * @deprecated
 */
class MultiOptionsMenu extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CollapseExpand} @nodts*/
  this.f_ceh__org_patternfly_component_MultiOptionsMenu_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_button__org_patternfly_component_MultiOptionsMenu_;
  /**@type {HTMLElement} @nodts*/
  this.f_plain__org_patternfly_component_MultiOptionsMenu_;
  /**@type {HTMLElement} @nodts*/
  this.f_menu__org_patternfly_component_MultiOptionsMenu_;
  /**@type {boolean} @nodts*/
  this.f_collapseOnSelect__org_patternfly_component_MultiOptionsMenu_ = false;
 }
 /** @nodts @return {MultiOptionsMenu} */
 static m_text__java_lang_String__org_patternfly_component_MultiOptionsMenu(/** ?string */ text) {
  MultiOptionsMenu.$clinit();
  return MultiOptionsMenu.$create__java_lang_String__org_patternfly_component_Icon__boolean(text, null, false);
 }
 /** @nodts @return {MultiOptionsMenu} */
 static m_icon__org_patternfly_component_Icon__org_patternfly_component_MultiOptionsMenu(/** Icon */ icon) {
  MultiOptionsMenu.$clinit();
  return MultiOptionsMenu.$create__java_lang_String__org_patternfly_component_Icon__boolean(null, icon, false);
 }
 /** @nodts @return {MultiOptionsMenu} */
 static m_plain__java_lang_String__org_patternfly_component_MultiOptionsMenu(/** ?string */ text) {
  MultiOptionsMenu.$clinit();
  return MultiOptionsMenu.$create__java_lang_String__org_patternfly_component_Icon__boolean(text, null, true);
 }
 /** @nodts @return {!MultiOptionsMenu} */
 static $create__java_lang_String__org_patternfly_component_Icon__boolean(/** ?string */ text, /** Icon */ icon, /** boolean */ plain) {
  MultiOptionsMenu.$clinit();
  let $instance = new MultiOptionsMenu();
  $instance.$ctor__org_patternfly_component_MultiOptionsMenu__java_lang_String__org_patternfly_component_Icon__boolean__void(text, icon, plain);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_MultiOptionsMenu__java_lang_String__org_patternfly_component_Icon__boolean__void(/** ?string */ text, /** Icon */ icon, /** boolean */ plain) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'OptionsMenu');
  this.f_ceh__org_patternfly_component_MultiOptionsMenu_ = CollapseExpand.$create__();
  this.f_collapseOnSelect__org_patternfly_component_MultiOptionsMenu_ = false;
  let buttonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_layout_Classes], j_l_String)));
  let buttonBuilder = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(buttonId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_layout_Classes, Classes.f_listbox__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.f_ceh__org_patternfly_component_MultiOptionsMenu_.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiOptionsMenu(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiOptionsMenu());
  }), HTMLContainerBuilder));
  let /** HTMLElement */ trigger;
  if (!$Equality.$same(icon, null)) {
   this.f_plain__org_patternfly_component_MultiOptionsMenu_ = null;
   this.f_button__org_patternfly_component_MultiOptionsMenu_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Icon}*/ ($Casts.$to(icon.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), Icon))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
   trigger = this.f_button__org_patternfly_component_MultiOptionsMenu_;
  } else {
   if (plain) {
    this.f_plain__org_patternfly_component_MultiOptionsMenu_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_layout_Classes), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_text__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_MultiOptionsMenu_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_button__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', text), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
    trigger = this.f_plain__org_patternfly_component_MultiOptionsMenu_;
   } else {
    this.f_plain__org_patternfly_component_MultiOptionsMenu_ = null;
    this.f_button__org_patternfly_component_MultiOptionsMenu_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(buttonBuilder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', text), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_caretDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
    trigger = this.f_button__org_patternfly_component_MultiOptionsMenu_;
   }
  }
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(trigger);
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_MultiOptionsMenu_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, buttonId), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_menu__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 /** @nodts @return {MultiOptionsMenu} */
 m_that__org_patternfly_component_MultiOptionsMenu() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiOptionsMenu() {
  return this.f_button__org_patternfly_component_MultiOptionsMenu_;
 }
 /** @nodts @return {HTMLElement} */
 m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiOptionsMenu() {
  return this.f_menu__org_patternfly_component_MultiOptionsMenu_;
 }
 /** @nodts @template T @return {MultiOptionsMenu} */
 m_add__org_patternfly_component_MultiOptionsMenu_Group__org_patternfly_component_MultiOptionsMenu(/** Group<T> */ group) {
  if (this.f_menu__org_patternfly_component_MultiOptionsMenu_.childNodes.length != 0) {
   this.f_menu__org_patternfly_component_MultiOptionsMenu_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_separator__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_separator__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }
  this.f_menu__org_patternfly_component_MultiOptionsMenu_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', group.f_text__org_patternfly_component_MultiOptionsMenu_Group_), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(group), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  for (let $iterator = group.f_items__org_patternfly_component_MultiOptionsMenu_Group_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let button = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('tabindex', - 1 | 0), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_multiOptionsMenuItem__org_patternfly_core_Dataset, group.f_itemDisplay__org_patternfly_component_MultiOptionsMenu_Group_.m_itemId__java_lang_Object__java_lang_String(item)), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
     let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
     if (this.f_collapseOnSelect__org_patternfly_component_MultiOptionsMenu_) {
      this.f_ceh__org_patternfly_component_MultiOptionsMenu_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiOptionsMenu(), this.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_MultiOptionsMenu());
     }
     group.m_select__java_lang_Object__org_patternfly_component_MultiOptionsMenu_Group(item);
    }), HTMLContainerBuilder));
    group.f_itemDisplay__org_patternfly_component_MultiOptionsMenu_Group_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(button, item);
    let /** HTMLElement */ icon;
    button.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(icon = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_check__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon, Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes, 'icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_multiOptionsMenuCheck__org_patternfly_core_Dataset, group.f_itemDisplay__org_patternfly_component_MultiOptionsMenu_Group_.m_itemId__java_lang_Object__java_lang_String(item)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(icon, false);
    /**@type {HTMLUListElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_menuitem__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
   }
  }
  return this;
 }
 /** @nodts @return {MultiOptionsMenu} */
 m_up__org_patternfly_component_MultiOptionsMenu() {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_top__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {MultiOptionsMenu} */
 m_right__org_patternfly_component_MultiOptionsMenu() {
  this.f_menu__org_patternfly_component_MultiOptionsMenu_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_alignRight__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {MultiOptionsMenu} */
 m_collapseOnSelect__org_patternfly_component_MultiOptionsMenu() {
  this.f_collapseOnSelect__org_patternfly_component_MultiOptionsMenu_ = true;
  return this;
 }
 /** @nodts @return {MultiOptionsMenu} */
 m_disabled__boolean__org_patternfly_component_MultiOptionsMenu(/** boolean */ disabled) {
  this.f_button__org_patternfly_component_MultiOptionsMenu_.disabled = disabled;
  if (!$Equality.$same(this.f_plain__org_patternfly_component_MultiOptionsMenu_, null)) {
   if (disabled) {
    this.f_plain__org_patternfly_component_MultiOptionsMenu_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes));
   } else {
    this.f_plain__org_patternfly_component_MultiOptionsMenu_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes));
   }
  }
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiOptionsMenu} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_MultiOptionsMenu();
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiOptionsMenu} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {MultiOptionsMenu}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MultiOptionsMenu));
 }
 //Bridge method.
 /** @final @override @nodts @return {MultiOptionsMenu} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_MultiOptionsMenu(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {MultiOptionsMenu} */
 m_disabled__org_patternfly_component_MultiOptionsMenu() {
  return /**@type {MultiOptionsMenu}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), MultiOptionsMenu));
 }
 /** @nodts */
 static $clinit() {
  MultiOptionsMenu.$clinit = () =>{};
  MultiOptionsMenu.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiOptionsMenu;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  CollapseExpand = goog.module.get('org.patternfly.component.CollapseExpand$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(MultiOptionsMenu);
$Util.$setClassMetadata(MultiOptionsMenu, 'org.patternfly.component.MultiOptionsMenu');

exports = MultiOptionsMenu;

//# sourceMappingURL=MultiOptionsMenu.js.map

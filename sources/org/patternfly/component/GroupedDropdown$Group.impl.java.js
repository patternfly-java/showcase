goog.module('org.patternfly.component.GroupedDropdown.Group$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.core.Modifiers.Disabled$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let GroupedDropdown = goog.forwardDeclare('org.patternfly.component.GroupedDropdown$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLElement, Group<T>>}
 * @implements {Disabled<HTMLElement, Group<T>>}
 * @deprecated
 */
class Group extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {GroupedDropdown<T>} @nodts*/
  this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_;
  /**@type {List<Consumer<GroupedDropdown<T>>>} @nodts*/
  this.f_recorder__org_patternfly_component_GroupedDropdown_Group_;
  /**@type {HTMLHeadingElement} @nodts*/
  this.f_header__org_patternfly_component_GroupedDropdown_Group_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_menu__org_patternfly_component_GroupedDropdown_Group_;
 }
 //Factory method corresponding to constructor 'Group(String)'.
 /** @nodts @template T @return {!Group<T>} */
 static $create__java_lang_String(/** ?string */ text) {
  Group.$clinit();
  let $instance = new Group();
  $instance.$ctor__org_patternfly_component_GroupedDropdown_Group__java_lang_String__void(text);
  return $instance;
 }
 //Initialization from constructor 'Group(String)'.
 /** @nodts */
 $ctor__org_patternfly_component_GroupedDropdown_Group__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['group'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_dropdownGroup__org_patternfly_core_Dataset, Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(text, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), 'DropdownGroup');
  this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_ = null;
  this.f_recorder__org_patternfly_component_GroupedDropdown_Group_ = /**@type {!ArrayList<Consumer<GroupedDropdown<T>>>}*/ (ArrayList.$create__());
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_header__org_patternfly_component_GroupedDropdown_Group_ = /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(1, text).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['group', 'title'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('hidden', true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_GroupedDropdown_Group_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_none__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 //Factory method corresponding to constructor 'Group(GroupedDropdown)'.
 /** @nodts @template T @return {!Group<T>} */
 static $create__org_patternfly_component_GroupedDropdown(/** GroupedDropdown<T> */ dropdown) {
  Group.$clinit();
  let $instance = new Group();
  $instance.$ctor__org_patternfly_component_GroupedDropdown_Group__org_patternfly_component_GroupedDropdown__void(dropdown);
  return $instance;
 }
 //Initialization from constructor 'Group(GroupedDropdown)'.
 /** @nodts */
 $ctor__org_patternfly_component_GroupedDropdown_Group__org_patternfly_component_GroupedDropdown__void(/** GroupedDropdown<T> */ dropdown) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['group'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_dropdownGroup__org_patternfly_core_Dataset, GroupedDropdown.f_UNNAMED_GROUP_ID__org_patternfly_component_GroupedDropdown_), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), 'DropdownGroup');
  this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_ = dropdown;
  this.f_recorder__org_patternfly_component_GroupedDropdown_Group_ = null;
  this.f_header__org_patternfly_component_GroupedDropdown_Group_ = null;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_menu__org_patternfly_component_GroupedDropdown_Group_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_none__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 //Factory method corresponding to constructor 'Group(GroupedDropdown, HTMLElement)'.
 /** @nodts @template T @return {!Group<T>} */
 static $create__org_patternfly_component_GroupedDropdown__elemental2_dom_HTMLElement(/** GroupedDropdown<T> */ dropdown, /** HTMLElement */ section) {
  Group.$clinit();
  let $instance = new Group();
  $instance.$ctor__org_patternfly_component_GroupedDropdown_Group__org_patternfly_component_GroupedDropdown__elemental2_dom_HTMLElement__void(dropdown, section);
  return $instance;
 }
 //Initialization from constructor 'Group(GroupedDropdown, HTMLElement)'.
 /** @nodts */
 $ctor__org_patternfly_component_GroupedDropdown_Group__org_patternfly_component_GroupedDropdown__elemental2_dom_HTMLElement__void(/** GroupedDropdown<T> */ dropdown, /** HTMLElement */ section) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(section, 'DropdownGroup');
  this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_ = dropdown;
  this.f_recorder__org_patternfly_component_GroupedDropdown_Group_ = null;
  this.f_header__org_patternfly_component_GroupedDropdown_Group_ = /**@type {HTMLHeadingElement}*/ ($Casts.$to(this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_element__java_lang_String__org_jboss_elemento_By('h1')), $Overlay));
  this.f_menu__org_patternfly_component_GroupedDropdown_Group_ = /**@type {HTMLUListElement}*/ ($Casts.$to(this.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_element__java_lang_String__org_jboss_elemento_By('ul')), HTMLUListElement_$Overlay));
 }
 /** @nodts */
 m_playback__org_patternfly_component_GroupedDropdown__void_$p_org_patternfly_component_GroupedDropdown_Group(/** GroupedDropdown<T> */ dropdown) {
  if (!$Equality.$same(this.f_recorder__org_patternfly_component_GroupedDropdown_Group_, null)) {
   for (let iterator = this.f_recorder__org_patternfly_component_GroupedDropdown_Group_.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean(); ) {
    let consumer = /**@type {Consumer<GroupedDropdown<T>>}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), Consumer));
    consumer.m_accept__java_lang_Object__void(dropdown);
    iterator.m_remove__void();
   }
  }
 }
 /** @nodts @return {Group<T>} */
 m_that__org_patternfly_component_GroupedDropdown_Group() {
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_add__java_lang_Iterable__org_patternfly_component_GroupedDropdown_Group(/** Iterable<T> */ items) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.m_add__java_lang_Object__org_patternfly_component_GroupedDropdown_Group(item);
   }
  }
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_add__arrayOf_java_lang_Object__org_patternfly_component_GroupedDropdown_Group(/** Array<T> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.m_add__java_lang_Object__org_patternfly_component_GroupedDropdown_Group(item);
   }
  }
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_add__java_lang_Object__org_patternfly_component_GroupedDropdown_Group(/** T */ item) {
  if (!$Equality.$same(this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_, null)) {
   this.f_menu__org_patternfly_component_GroupedDropdown_Group_.appendChild(this.m_newItem__org_patternfly_component_GroupedDropdown__java_lang_Object__elemental2_dom_HTMLLIElement_$p_org_patternfly_component_GroupedDropdown_Group(this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_, item));
  } else if (!$Equality.$same(this.f_recorder__org_patternfly_component_GroupedDropdown_Group_, null)) {
   this.f_recorder__org_patternfly_component_GroupedDropdown_Group_.add(Consumer.$adapt((dd) =>{
    let dd_1 = /**@type {GroupedDropdown}*/ ($Casts.$to(dd, GroupedDropdown));
    this.f_menu__org_patternfly_component_GroupedDropdown_Group_.appendChild(this.m_newItem__org_patternfly_component_GroupedDropdown__java_lang_Object__elemental2_dom_HTMLLIElement_$p_org_patternfly_component_GroupedDropdown_Group(dd_1, item));
   }));
  }
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_addSeparator__org_patternfly_component_GroupedDropdown_Group() {
  if (!$Equality.$same(this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_, null)) {
   this.f_menu__org_patternfly_component_GroupedDropdown_Group_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_separator__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_separator__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  } else if (!$Equality.$same(this.f_recorder__org_patternfly_component_GroupedDropdown_Group_, null)) {
   this.f_recorder__org_patternfly_component_GroupedDropdown_Group_.add(Consumer.$adapt((dd) =>{
    let dd_1 = /**@type {GroupedDropdown}*/ ($Casts.$to(dd, GroupedDropdown));
    this.f_menu__org_patternfly_component_GroupedDropdown_Group_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_separator__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_separator__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
   }));
  }
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_select__java_lang_Object__org_patternfly_component_GroupedDropdown_Group(/** T */ item) {
  return this.m_select__java_lang_Object__boolean__org_patternfly_component_GroupedDropdown_Group(item, true);
 }
 /** @nodts @return {Group<T>} */
 m_select__java_lang_Object__boolean__org_patternfly_component_GroupedDropdown_Group(/** T */ item, /** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_, null)) {
   if (fireEvent && !$Equality.$same(this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_.f_onSelect__org_patternfly_component_GroupedDropdown_, null)) {
    this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_.f_onSelect__org_patternfly_component_GroupedDropdown_.m_onSelect__java_lang_Object__void(item);
   }
  }
  return this;
 }
 /** @nodts */
 m_update__java_lang_Object__void(/** T */ item) {
  if (!$Equality.$same(this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_, null)) {
   let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_GroupedDropdown_Group(item);
   this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_.f_itemDisplay__org_patternfly_component_GroupedDropdown_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(Elements.m_button__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(element), item);
  }
 }
 /** @nodts @return {Group<T>} */
 m_disabled__boolean__org_patternfly_component_GroupedDropdown_Group(/** boolean */ disabled) {
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_menu__org_patternfly_component_GroupedDropdown_Group_, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_dropdownItem__org_patternfly_core_Dataset)).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let button = /**@type {HTMLButtonElement}*/ ($Casts.$to(element, HTMLButtonElement_$Overlay));
    button.disabled = disabled;
   }
  }
  return this;
 }
 /** @nodts */
 m_disable__java_lang_Object__void(/** T */ item) {
  let button = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_GroupedDropdown_Group(item);
  if (!$Equality.$same(button, null)) {
   button.disabled = true;
  }
 }
 /** @nodts */
 m_enable__java_lang_Object__void(/** T */ item) {
  let button = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_GroupedDropdown_Group(item);
  if (!$Equality.$same(button, null)) {
   button.disabled = false;
  }
 }
 /** @nodts */
 m_setText__java_lang_String__void(/** ?string */ text) {
  if (!$Equality.$same(this.f_header__org_patternfly_component_GroupedDropdown_Group_, null)) {
   this.f_header__org_patternfly_component_GroupedDropdown_Group_.textContent = text;
  }
 }
 /** @nodts */
 m_setText__java_lang_Object__java_lang_String__void(/** T */ item, /** ?string */ text) {
  let element = this.m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_GroupedDropdown_Group(item);
  if (!$Equality.$same(element, null)) {
   element.textContent = text;
  }
 }
 /** @nodts @return {HTMLLIElement} */
 m_newItem__org_patternfly_component_GroupedDropdown__java_lang_Object__elemental2_dom_HTMLLIElement_$p_org_patternfly_component_GroupedDropdown_Group(/** GroupedDropdown<T> */ dd, /** T */ item) {
  let button = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dropdown__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder('tabindex', - 1 | 0), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_dropdownItem__org_patternfly_core_Dataset, dd.f_itemDisplay__org_patternfly_component_GroupedDropdown_.m_itemId__java_lang_Object__java_lang_String(item)), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   dd.f_ceh__org_patternfly_component_GroupedDropdown_.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(dd.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), dd.m_buttonElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_GroupedDropdown(), dd.m_menuElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_GroupedDropdown());
   if (!$Equality.$same(dd.f_onSelect__org_patternfly_component_GroupedDropdown_, null)) {
    dd.f_onSelect__org_patternfly_component_GroupedDropdown_.m_onSelect__java_lang_Object__void(item);
   }
  }), HTMLContainerBuilder));
  dd.f_itemDisplay__org_patternfly_component_GroupedDropdown_.f_display__org_patternfly_component_OldItemDisplay.m_accept__java_lang_Object__java_lang_Object__void(button, item);
  return /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_menuitem__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(button), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay));
 }
 /** @nodts @return {HTMLButtonElement} */
 m_itemElement__java_lang_Object__elemental2_dom_HTMLButtonElement_$p_org_patternfly_component_GroupedDropdown_Group(/** T */ item) {
  if (!$Equality.$same(this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_, null)) {
   let itemId = this.f_dropdown__org_patternfly_component_GroupedDropdown_Group_.f_itemDisplay__org_patternfly_component_GroupedDropdown_.m_itemId__java_lang_Object__java_lang_String(item);
   return /**@type {HTMLButtonElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_menu__org_patternfly_component_GroupedDropdown_Group_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_dropdownItem__org_patternfly_core_Dataset, itemId)), HTMLButtonElement_$Overlay));
  }
  return null;
 }
 //Bridge method.
 /** @final @override @nodts @return {Group<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_GroupedDropdown_Group();
 }
 //Bridge method.
 /** @final @override @nodts @return {Group<T>} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Group<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Group));
 }
 //Bridge method.
 /** @final @override @nodts @return {Group<T>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_GroupedDropdown_Group(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Group<T>} */
 m_disabled__org_patternfly_component_GroupedDropdown_Group() {
  return /**@type {Group<T>}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_core_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Group));
 }
 /** @nodts */
 static $clinit() {
  Group.$clinit = () =>{};
  Group.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Group;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  GroupedDropdown = goog.module.get('org.patternfly.component.GroupedDropdown$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(Group);
$Util.$setClassMetadata(Group, 'org.patternfly.component.GroupedDropdown$Group');

exports = Group;

//# sourceMappingURL=GroupedDropdown$Group.js.map

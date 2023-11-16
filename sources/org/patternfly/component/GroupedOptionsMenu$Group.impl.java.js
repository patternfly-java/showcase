goog.module('org.patternfly.component.GroupedOptionsMenu.Group$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.core.HasValue$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let OldItemDisplay = goog.forwardDeclare('org.patternfly.component.OldItemDisplay$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLElement, Group<T>>}
 * @implements {HasValue<T>}
 * @deprecated
 */
class Group extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_GroupedOptionsMenu_Group_;
  /**@type {List<T>} @nodts*/
  this.f_items__org_patternfly_component_GroupedOptionsMenu_Group_;
  /**@type {OldItemDisplay<HTMLButtonElement, T>} @nodts*/
  this.f_itemDisplay__org_patternfly_component_GroupedOptionsMenu_Group_;
  /**@type {T} @nodts*/
  this.f_value__org_patternfly_component_GroupedOptionsMenu_Group_;
  /**@type {SelectHandler<T>} @nodts*/
  this.f_onSelect__org_patternfly_component_GroupedOptionsMenu_Group_;
 }
 //Factory method corresponding to constructor 'Group()'.
 /** @nodts @template T @return {!Group<T>} */
 static $create__() {
  Group.$clinit();
  let $instance = new Group();
  $instance.$ctor__org_patternfly_component_GroupedOptionsMenu_Group__void();
  return $instance;
 }
 //Initialization from constructor 'Group()'.
 /** @nodts */
 $ctor__org_patternfly_component_GroupedOptionsMenu_Group__void() {
  this.$ctor__org_patternfly_component_GroupedOptionsMenu_Group__java_lang_String__void(null);
 }
 //Factory method corresponding to constructor 'Group(String)'.
 /** @nodts @template T @return {!Group<T>} */
 static $create__java_lang_String(/** ?string */ text) {
  Group.$clinit();
  let $instance = new Group();
  $instance.$ctor__org_patternfly_component_GroupedOptionsMenu_Group__java_lang_String__void(text);
  return $instance;
 }
 //Initialization from constructor 'Group(String)'.
 /** @nodts */
 $ctor__org_patternfly_component_GroupedOptionsMenu_Group__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), 'GroupedOptionsMenuGroup');
  this.f_text__org_patternfly_component_GroupedOptionsMenu_Group_ = text;
  this.f_items__org_patternfly_component_GroupedOptionsMenu_Group_ = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
  this.f_itemDisplay__org_patternfly_component_GroupedOptionsMenu_Group_ = /**@type {!OldItemDisplay<HTMLButtonElement, T>}*/ (OldItemDisplay.$create__());
 }
 /** @nodts @return {Group<T>} */
 m_that__org_patternfly_component_GroupedOptionsMenu_Group() {
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_add__java_lang_Iterable__org_patternfly_component_GroupedOptionsMenu_Group(/** Iterable<T> */ items) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    this.m_add__java_lang_Object__org_patternfly_component_GroupedOptionsMenu_Group(item);
   }
  }
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_add__arrayOf_java_lang_Object__org_patternfly_component_GroupedOptionsMenu_Group(/** Array<T> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    this.m_add__java_lang_Object__org_patternfly_component_GroupedOptionsMenu_Group(item);
   }
  }
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_add__java_lang_Object__org_patternfly_component_GroupedOptionsMenu_Group(/** T */ item) {
  this.f_items__org_patternfly_component_GroupedOptionsMenu_Group_.add(item);
  return this;
 }
 /** @override @nodts @return {T} */
 m_value__java_lang_Object() {
  return this.f_value__org_patternfly_component_GroupedOptionsMenu_Group_;
 }
 /** @nodts @return {Group<T>} */
 m_identifier__java_util_function_Function__org_patternfly_component_GroupedOptionsMenu_Group(/** j_u_function_Function<T, ?string> */ identifier) {
  this.f_itemDisplay__org_patternfly_component_GroupedOptionsMenu_Group_.f_identifier__org_patternfly_component_OldItemDisplay = identifier;
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_asString__java_util_function_Function__org_patternfly_component_GroupedOptionsMenu_Group(/** j_u_function_Function<T, ?string> */ asString) {
  this.f_itemDisplay__org_patternfly_component_GroupedOptionsMenu_Group_.f_asString__org_patternfly_component_OldItemDisplay = asString;
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_display__java_util_function_BiConsumer__org_patternfly_component_GroupedOptionsMenu_Group(/** BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> */ display) {
  this.f_itemDisplay__org_patternfly_component_GroupedOptionsMenu_Group_.f_display__org_patternfly_component_OldItemDisplay = display;
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_GroupedOptionsMenu_Group(/** SelectHandler<T> */ onSelect) {
  this.f_onSelect__org_patternfly_component_GroupedOptionsMenu_Group_ = onSelect;
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_select__java_lang_Object__org_patternfly_component_GroupedOptionsMenu_Group(/** T */ item) {
  return this.m_select__java_lang_Object__boolean__org_patternfly_component_GroupedOptionsMenu_Group(item, true);
 }
 /** @nodts @return {Group<T>} */
 m_select__java_lang_Object__boolean__org_patternfly_component_GroupedOptionsMenu_Group(/** T */ item, /** boolean */ fireEvent) {
  this.f_value__org_patternfly_component_GroupedOptionsMenu_Group_ = item;
  let itemId = this.f_itemDisplay__org_patternfly_component_GroupedOptionsMenu_Group_.m_itemId__java_lang_Object__java_lang_String(item);
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.m_element__elemental2_dom_HTMLElement(), By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes, 'icon'], j_l_String))))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(e, j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(itemId, /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(e.dataset, Dataset.f_multiOptionsMenuCheck__org_patternfly_core_Dataset), j_l_String))));
   }
  }
  if (fireEvent && !$Equality.$same(this.f_onSelect__org_patternfly_component_GroupedOptionsMenu_Group_, null)) {
   this.f_onSelect__org_patternfly_component_GroupedOptionsMenu_Group_.m_onSelect__java_lang_Object__void(this.f_value__org_patternfly_component_GroupedOptionsMenu_Group_);
  }
  return this;
 }
 /** @nodts @return {Group<T>} */
 m_clearSelection__org_patternfly_component_GroupedOptionsMenu_Group() {
  this.f_value__org_patternfly_component_GroupedOptionsMenu_Group_ = null;
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.m_element__elemental2_dom_HTMLElement(), By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_optionsMenu__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_menu__org_patternfly_layout_Classes, Classes.f_item__org_patternfly_layout_Classes, 'icon'], j_l_String))))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(e, false);
   }
  }
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Group<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_GroupedOptionsMenu_Group();
 }
 /** @nodts */
 static $clinit() {
  Group.$clinit = () =>{};
  Group.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Group;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  OldItemDisplay = goog.module.get('org.patternfly.component.OldItemDisplay$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasValue.$markImplementor(Group);
$Util.$setClassMetadata(Group, 'org.patternfly.component.GroupedOptionsMenu$Group');

exports = Group;

//# sourceMappingURL=GroupedOptionsMenu$Group.js.map

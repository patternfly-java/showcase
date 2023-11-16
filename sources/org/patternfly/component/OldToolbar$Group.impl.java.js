goog.module('org.patternfly.component.OldToolbar.Group$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let OldToolbar = goog.forwardDeclare('org.patternfly.component.OldToolbar$impl');
let Item = goog.forwardDeclare('org.patternfly.component.OldToolbar.Item$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, Group>}
 * @deprecated
 */
class Group extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<Group>} @nodts*/
  this.f_groups__org_patternfly_component_OldToolbar_Group_;
  /**@type {List<Item>} @nodts*/
  this.f_items__org_patternfly_component_OldToolbar_Group_;
 }
 /** @nodts @return {!Group} */
 static $create__() {
  Group.$clinit();
  let $instance = new Group();
  $instance.$ctor__org_patternfly_component_OldToolbar_Group__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_Group__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['group'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_groups__org_patternfly_component_OldToolbar_Group_ = /**@type {!ArrayList<Group>}*/ (ArrayList.$create__());
  this.f_items__org_patternfly_component_OldToolbar_Group_ = /**@type {!ArrayList<Item>}*/ (ArrayList.$create__());
 }
 /** @nodts @return {Group} */
 m_that__org_patternfly_component_OldToolbar_Group() {
  return this;
 }
 /** @nodts @return {Group} */
 m_add__org_patternfly_component_OldToolbar_Group__org_patternfly_component_OldToolbar_Group(/** Group */ group) {
  this.f_groups__org_patternfly_component_OldToolbar_Group_.add(group);
  return /**@type {Group}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), $Overlay))), Group));
 }
 /** @nodts @return {Group} */
 m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Group(/** Item */ item) {
  this.f_items__org_patternfly_component_OldToolbar_Group_.add(item);
  return /**@type {Group}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay))), Group));
 }
 /** @nodts @return {Group} */
 m_button__org_patternfly_component_OldToolbar_Group() {
  return /**@type {Group}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_buttonGroup__org_patternfly_layout_Classes)], j_l_String))), Group));
 }
 /** @nodts @return {Group} */
 m_filter__org_patternfly_component_OldToolbar_Group() {
  return /**@type {Group}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_filterGroup__org_patternfly_layout_Classes)], j_l_String))), Group));
 }
 /** @nodts @return {Group} */
 m_iconButton__org_patternfly_component_OldToolbar_Group() {
  return /**@type {Group}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_iconButtonGroup__org_patternfly_layout_Classes)], j_l_String))), Group));
 }
 /** @nodts @return {Group} */
 m_toggle__java_lang_String__org_patternfly_component_OldToolbar_Group(/** ?string */ breakpoint) {
  let bpModifier = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(breakpoint, 'pf-m-') ? breakpoint : Classes.m_modifier__java_lang_String__java_lang_String(breakpoint);
  return /**@type {Group}*/ ($Casts.$to(/**@type {Group}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_layout_Classes), bpModifier], j_l_String))), Group)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_filter__org_patternfly_layout_PredefinedIcon, 'Show filters')), HTMLContainerBuilder))), Group));
 }
 /** @nodts @template T */
 m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Group(/** OldToolbar<T> */ toolbar) {
  for (let $iterator = this.f_groups__org_patternfly_component_OldToolbar_Group_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let group = /**@type {Group}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Group));
   {
    group.m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Group(toolbar);
   }
  }
  for (let $iterator_1 = this.f_items__org_patternfly_component_OldToolbar_Group_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
   let item = /**@type {Item}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Item));
   {
    item.m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Item(toolbar);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Group} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_OldToolbar_Group();
 }
 //Bridge method.
 /** @final @override @nodts @return {Group} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_toggle__java_lang_String__org_patternfly_component_OldToolbar_Group(arg0);
 }
 /** @nodts */
 static $clinit() {
  Group.$clinit = () =>{};
  Group.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Group;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Item = goog.module.get('org.patternfly.component.OldToolbar.Item$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Group, 'org.patternfly.component.OldToolbar$Group');

exports = Group;

//# sourceMappingURL=OldToolbar$Group.js.map

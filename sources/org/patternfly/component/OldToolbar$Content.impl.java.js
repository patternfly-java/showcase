goog.module('org.patternfly.component.OldToolbar.Content$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let OldToolbar = goog.forwardDeclare('org.patternfly.component.OldToolbar$impl');
let Group = goog.forwardDeclare('org.patternfly.component.OldToolbar.Group$impl');
let Item = goog.forwardDeclare('org.patternfly.component.OldToolbar.Item$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, Content>}
 * @deprecated
 */
class Content extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<Group>} @nodts*/
  this.f_groups__org_patternfly_component_OldToolbar_Content_;
  /**@type {List<Item>} @nodts*/
  this.f_items__org_patternfly_component_OldToolbar_Content_;
 }
 /** @nodts @return {!Content} */
 static $create__() {
  Content.$clinit();
  let $instance = new Content();
  $instance.$ctor__org_patternfly_component_OldToolbar_Content__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_Content__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_groups__org_patternfly_component_OldToolbar_Content_ = /**@type {!ArrayList<Group>}*/ (ArrayList.$create__());
  this.f_items__org_patternfly_component_OldToolbar_Content_ = /**@type {!ArrayList<Item>}*/ (ArrayList.$create__());
 }
 /** @nodts @return {Content} */
 m_that__org_patternfly_component_OldToolbar_Content() {
  return this;
 }
 /** @nodts @return {Content} */
 m_add__org_patternfly_component_OldToolbar_Group__org_patternfly_component_OldToolbar_Content(/** Group */ group) {
  this.f_groups__org_patternfly_component_OldToolbar_Content_.add(group);
  return /**@type {Content}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), $Overlay))), Content));
 }
 /** @nodts @return {Content} */
 m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Content(/** Item */ item) {
  this.f_items__org_patternfly_component_OldToolbar_Content_.add(item);
  return /**@type {Content}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), $Overlay))), Content));
 }
 /** @nodts @template T */
 m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Content(/** OldToolbar<T> */ toolbar) {
  for (let $iterator = this.f_groups__org_patternfly_component_OldToolbar_Content_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let group = /**@type {Group}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Group));
   {
    group.m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Group(toolbar);
   }
  }
  for (let $iterator_1 = this.f_items__org_patternfly_component_OldToolbar_Content_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
   let item = /**@type {Item}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Item));
   {
    item.m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Item(toolbar);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Content} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_OldToolbar_Content();
 }
 /** @nodts */
 static $clinit() {
  Content.$clinit = () =>{};
  Content.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Content;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Group = goog.module.get('org.patternfly.component.OldToolbar.Group$impl');
  Item = goog.module.get('org.patternfly.component.OldToolbar.Item$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Content, 'org.patternfly.component.OldToolbar$Content');

exports = Content;

//# sourceMappingURL=OldToolbar$Content.js.map

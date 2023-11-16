goog.module('org.patternfly.component.OldToolbar.Item$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Stack = goog.forwardDeclare('java.util.Stack$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let OldToolbar = goog.forwardDeclare('org.patternfly.component.OldToolbar$impl');
let BulkSelect = goog.forwardDeclare('org.patternfly.component.OldToolbar.BulkSelect$impl');
let Filter = goog.forwardDeclare('org.patternfly.component.OldToolbar.Filter$impl');
let SortMenu = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortMenu$impl');
let Pagination = goog.forwardDeclare('org.patternfly.component.Pagination$impl');
let Search = goog.forwardDeclare('org.patternfly.component.Search$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let Callback = goog.forwardDeclare('org.patternfly.handler.Callback$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, Item>}
 * @deprecated
 */
class Item extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Stack<Consumer<OldToolbar>>} @nodts*/
  this.f_delayedInit__org_patternfly_component_OldToolbar_Item_;
 }
 /** @nodts @return {!Item} */
 static $create__() {
  Item.$clinit();
  let $instance = new Item();
  $instance.$ctor__org_patternfly_component_OldToolbar_Item__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_Item__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_delayedInit__org_patternfly_component_OldToolbar_Item_ = /**@type {!Stack<Consumer<OldToolbar>>}*/ (Stack.$create__());
 }
 /** @nodts @return {Item} */
 m_that__org_patternfly_component_OldToolbar_Item() {
  return this;
 }
 /** @nodts @return {Item} */
 m_add__org_patternfly_component_OldToolbar_BulkSelect__org_patternfly_component_OldToolbar_Item(/** BulkSelect */ bulkSelect) {
  this.f_delayedInit__org_patternfly_component_OldToolbar_Item_.m_push__java_lang_Object__java_lang_Object(Consumer.$adapt((toolbar) =>{
   let toolbar_1 = /**@type {OldToolbar}*/ ($Casts.$to(toolbar, OldToolbar));
   toolbar_1.f_bulkSelect__org_patternfly_component_OldToolbar_ = bulkSelect;
   bulkSelect.m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_BulkSelect(toolbar_1);
  }));
  return /**@type {Item}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(bulkSelect.m_element__elemental2_dom_HTMLDivElement()), Item));
 }
 /** @nodts @template T @return {Item} */
 m_add__org_patternfly_component_OldToolbar_Filter__org_patternfly_component_OldToolbar_Item(/** Filter */ filter) {
  return this;
 }
 /** @nodts @template T @return {Item} */
 m_add__java_lang_String__java_lang_String__java_util_function_Function__org_patternfly_component_OldToolbar_Item(/** ?string */ id, /** ?string */ placeholder, /** j_u_function_Function<?string, Predicate<T>> */ filterFn) {
  let search = Search.$create__java_lang_String(placeholder);
  this.f_delayedInit__org_patternfly_component_OldToolbar_Item_.m_push__java_lang_Object__java_lang_Object(Consumer.$adapt((toolbar) =>{
   let toolbar_1 = /**@type {OldToolbar}*/ ($Casts.$to(toolbar, OldToolbar));
   search.m_onSearch__java_util_function_Consumer__org_patternfly_component_Search(Consumer.$adapt((query) =>{
    let query_1 = /**@type {?string}*/ ($Casts.$to(query, j_l_String));
    if ($Equality.$same(query_1, null) || j_l_String.m_length__java_lang_String__int(query_1) == 0) {
     toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_.m_removeFilter__java_lang_String__void(id);
    } else {
     toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_.m_addFilter__java_lang_String__java_util_function_Predicate__void(id, /**@type {Predicate<T>}*/ ($Casts.$to(filterFn.m_apply__java_lang_Object__java_lang_Object(query_1), Predicate)));
    }
   }));
  }));
  return /**@type {Item}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(search.m_element__elemental2_dom_HTMLElement(), $Overlay))), Item));
 }
 /** @nodts @template T @return {Item} */
 m_add__org_patternfly_component_OldToolbar_SortMenu__org_patternfly_component_OldToolbar_Item(/** SortMenu<T> */ sortMenu) {
  this.f_delayedInit__org_patternfly_component_OldToolbar_Item_.m_push__java_lang_Object__java_lang_Object(Consumer.$adapt((toolbar) =>{
   let toolbar_1 = /**@type {OldToolbar}*/ ($Casts.$to(toolbar, OldToolbar));
   toolbar_1.f_sortMenu__org_patternfly_component_OldToolbar_ = sortMenu;
   sortMenu.m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_SortMenu(toolbar_1);
  }));
  return /**@type {Item}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(sortMenu.m_element__elemental2_dom_HTMLDivElement()), Item));
 }
 /** @nodts @return {Item} */
 m_add__org_patternfly_component_Pagination__org_patternfly_component_OldToolbar_Item(/** Pagination */ pagination) {
  this.f_delayedInit__org_patternfly_component_OldToolbar_Item_.m_push__java_lang_Object__java_lang_Object(Consumer.$adapt((toolbar) =>{
   let /** DataProvider */ $$q, /** DataProvider */ $$q_1, /** DataProvider */ $$q_2, /** DataProvider */ $$q_3, /** DataProvider */ $$q_4, /** DataProvider */ $$q_5;
   let toolbar_1 = /**@type {OldToolbar}*/ ($Casts.$to(toolbar, OldToolbar));
   toolbar_1.f_pagination__org_patternfly_component_OldToolbar_ = pagination;
   pagination.m_onFirstPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(($$q = toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_, Callback.$adapt(() =>{
    $$q.m_gotoFirstPage__void();
   }))).m_onPreviousPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(($$q_1 = toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_, Callback.$adapt(() =>{
    $$q_1.m_gotoPreviousPage__void();
   }))).m_onNextPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(($$q_2 = toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_, Callback.$adapt(() =>{
    $$q_2.m_gotoNextPage__void();
   }))).m_onLastPage__org_patternfly_handler_Callback__org_patternfly_component_Pagination(($$q_3 = toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_, Callback.$adapt(() =>{
    $$q_3.m_gotoLastPage__void();
   }))).m_onGotoPage__java_util_function_Consumer__org_patternfly_component_Pagination(($$q_4 = toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_, Consumer.$adapt((arg0) =>{
    let arg0_1 = /**@type {Integer}*/ ($Casts.$to(arg0, Integer));
    $$q_4.m_gotoPage__int__void(arg0_1.m_intValue__int());
   }))).m_onPageSize__java_util_function_Consumer__org_patternfly_component_Pagination(($$q_5 = toolbar_1.f_dataProvider__org_patternfly_component_OldToolbar_, Consumer.$adapt((arg0_2) =>{
    let arg0_3 = /**@type {Integer}*/ ($Casts.$to(arg0_2, Integer));
    $$q_5.m_setPageSize__int__void(arg0_3.m_intValue__int());
   })));
  }));
  return /**@type {Item}*/ ($Casts.$to(/**@type {Item}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_pagination__org_patternfly_layout_Classes)], j_l_String))), Item)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(pagination.m_element__elemental2_dom_HTMLElement(), $Overlay))), Item));
 }
 /** @nodts @return {Item} */
 m_separator__org_patternfly_component_OldToolbar_Item() {
  return /**@type {Item}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_separator__org_patternfly_layout_Classes)], j_l_String))), Item));
 }
 /** @nodts @template T */
 m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Item(/** OldToolbar<T> */ toolbar) {
  while (!this.f_delayedInit__org_patternfly_component_OldToolbar_Item_.isEmpty()) {
   /**@type {Consumer<OldToolbar>}*/ ($Casts.$to(this.f_delayedInit__org_patternfly_component_OldToolbar_Item_.m_pop__java_lang_Object(), Consumer)).m_accept__java_lang_Object__void(toolbar);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Item} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_OldToolbar_Item();
 }
 /** @nodts */
 static $clinit() {
  Item.$clinit = () =>{};
  Item.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Item;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Stack = goog.module.get('java.util.Stack$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  OldToolbar = goog.module.get('org.patternfly.component.OldToolbar$impl');
  Search = goog.module.get('org.patternfly.component.Search$impl');
  Callback = goog.module.get('org.patternfly.handler.Callback$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Item, 'org.patternfly.component.OldToolbar$Item');

exports = Item;

//# sourceMappingURL=OldToolbar$Item.js.map

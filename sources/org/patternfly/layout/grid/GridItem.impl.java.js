goog.module('org.patternfly.layout.grid.GridItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Tuples = goog.forwardDeclare('org.patternfly.core.Tuples$impl');
let Grid = goog.forwardDeclare('org.patternfly.layout.grid.Grid$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLDivElement, GridItem>}
 * @implements {Fill<HTMLDivElement, GridItem>}
 */
class GridItem extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {GridItem} */
 static m_gridItem__org_patternfly_layout_grid_GridItem() {
  GridItem.$clinit();
  return GridItem.$create__();
 }
 /** @nodts @return {!GridItem} */
 static $create__() {
  GridItem.$clinit();
  let $instance = new GridItem();
  $instance.$ctor__org_patternfly_layout_grid_GridItem__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_grid_GridItem__void() {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_grid__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {GridItem} */
 m_span__int__org_patternfly_layout_grid_GridItem(/** number */ columns) {
  if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_GridItem('span', columns)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(columns + '-col')], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {GridItem} */
 m_span__org_patternfly_core_Tuples__org_patternfly_layout_grid_GridItem(/** Tuples<Breakpoint, Integer> */ columns) {
  if (!$Equality.$same(columns, null)) {
   for (let $iterator = columns.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let column = /**@type {Tuple<Breakpoint, Integer>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     this.m_internalSpan__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_GridItem(column);
    }
   }
  }
  return this;
 }
 /** @nodts @return {GridItem} */
 m_rowSpan__int__org_patternfly_layout_grid_GridItem(/** number */ rows) {
  if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_GridItem('rowSpan', rows)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(rows + '-row')], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {GridItem} */
 m_rowSpan__org_patternfly_core_Tuples__org_patternfly_layout_grid_GridItem(/** Tuples<Breakpoint, Integer> */ rows) {
  if (!$Equality.$same(rows, null)) {
   for (let $iterator = rows.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let row = /**@type {Tuple<Breakpoint, Integer>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     this.m_internalRowSpan__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_GridItem(row);
    }
   }
  }
  return this;
 }
 /** @nodts @return {GridItem} */
 m_offset__int__org_patternfly_layout_grid_GridItem(/** number */ columns) {
  if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_GridItem('offset', columns)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('offset-' + columns + '-col')], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {GridItem} */
 m_offset__org_patternfly_core_Tuples__org_patternfly_layout_grid_GridItem(/** Tuples<Breakpoint, Integer> */ columns) {
  if (!$Equality.$same(columns, null)) {
   for (let $iterator = columns.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let column = /**@type {Tuple<Breakpoint, Integer>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     this.m_internalOffset__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_GridItem(column);
    }
   }
  }
  return this;
 }
 /** @nodts @return {GridItem} */
 m_order__org_patternfly_core_Tuples__org_patternfly_layout_grid_GridItem(/** Tuples<Breakpoint, ?string> */ order) {
  if (!$Equality.$same(order, null)) {
   for (let $iterator = order.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let o = /**@type {Tuple<Breakpoint, ?string>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     Grid.m_internalOrder__elemental2_dom_HTMLElement__org_patternfly_core_Tuple__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), o);
    }
   }
  }
  return this;
 }
 /** @nodts @return {GridItem} */
 m_that__org_patternfly_layout_grid_GridItem() {
  return this;
 }
 /** @nodts */
 m_internalSpan__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_GridItem(/** Tuple<Breakpoint, Integer> */ tuple) {
  if (!$Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint)) {
   if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_GridItem('span', /**@type {Integer}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, Integer)).m_intValue__int())) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(tuple.f_value__org_patternfly_core_Tuple) + '-col-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint))], j_l_String)));
   }
  }
 }
 /** @nodts */
 m_internalRowSpan__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_GridItem(/** Tuple<Breakpoint, Integer> */ tuple) {
  if (!$Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint)) {
   if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_GridItem('rowSpan', /**@type {Integer}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, Integer)).m_intValue__int())) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(tuple.f_value__org_patternfly_core_Tuple) + '-row-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint))], j_l_String)));
   }
  }
 }
 /** @nodts */
 m_internalOffset__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_GridItem(/** Tuple<Breakpoint, Integer> */ tuple) {
  if (!$Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint)) {
   if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_GridItem('offset', /**@type {Integer}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, Integer)).m_intValue__int())) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('offset-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(tuple.f_value__org_patternfly_core_Tuple) + '-col-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint))], j_l_String)));
   }
  }
 }
 /** @nodts @return {boolean} */
 m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_GridItem(/** ?string */ property, /** number */ value) {
  if (value < 1 || value > 12) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void('PF5/GridItem', /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), '\'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(property) + '\' out of range. Given: ' + value + ', allowed [1,12].');
   return false;
  }
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {GridItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_grid_GridItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {GridItem} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {GridItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), GridItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {GridItem} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {GridItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), GridItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {GridItem} */
 m_fill__org_patternfly_layout_grid_GridItem() {
  return /**@type {GridItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), GridItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {GridItem} */
 m_fill__boolean__org_patternfly_layout_grid_GridItem(/** boolean */ arg0) {
  return /**@type {GridItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), GridItem));
 }
 /** @nodts */
 static $clinit() {
  GridItem.$clinit = () =>{};
  GridItem.$loadModules();
  BaseLayout.$clinit();
  Fill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GridItem;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Grid = goog.module.get('org.patternfly.layout.grid.Grid$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Fill.$markImplementor(GridItem);
$Util.$setClassMetadata(GridItem, 'org.patternfly.layout.grid.GridItem');

exports = GridItem;

//# sourceMappingURL=GridItem.js.map

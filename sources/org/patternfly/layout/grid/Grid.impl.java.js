goog.module('org.patternfly.layout.grid.Grid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Tuples = goog.forwardDeclare('org.patternfly.core.Tuples$impl');
let GridItem = goog.forwardDeclare('org.patternfly.layout.grid.GridItem$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLDivElement, Grid>}
 */
class Grid extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Grid} */
 static m_grid__org_patternfly_layout_grid_Grid() {
  Grid.$clinit();
  return Grid.$create__();
 }
 /** @nodts @return {!Grid} */
 static $create__() {
  Grid.$clinit();
  let $instance = new Grid();
  $instance.$ctor__org_patternfly_layout_grid_Grid__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_grid_Grid__void() {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_grid__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Grid} */
 m_addItem__org_patternfly_layout_grid_GridItem__org_patternfly_layout_grid_Grid(/** GridItem */ item) {
  return /**@type {Grid}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Grid));
 }
 /** @nodts @return {Grid} */
 m_cols__org_patternfly_core_Tuples__org_patternfly_layout_grid_Grid(/** Tuples<Breakpoint, Integer> */ columns) {
  if (!$Equality.$same(columns, null)) {
   for (let $iterator = columns.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let col = /**@type {Tuple<Breakpoint, Integer>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     this.m_internalCols__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_Grid(col);
    }
   }
  }
  return this;
 }
 /** @nodts @return {Grid} */
 m_order__org_patternfly_core_Tuples__org_patternfly_layout_grid_Grid(/** Tuples<Breakpoint, ?string> */ order) {
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
 /** @nodts @return {Grid} */
 m_span__int__org_patternfly_layout_grid_Grid(/** number */ rows) {
  if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_Grid('span', rows)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('all-' + rows + '-col')], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Grid} */
 m_gutter__org_patternfly_layout_grid_Grid() {
  return /**@type {Grid}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_gutter__org_patternfly_style_Classes)], j_l_String))), Grid));
 }
 /** @nodts @return {Grid} */
 m_that__org_patternfly_layout_grid_Grid() {
  return this;
 }
 /** @nodts */
 static m_internalOrder__elemental2_dom_HTMLElement__org_patternfly_core_Tuple__void(/** HTMLElement */ element, /** Tuple<Breakpoint, ?string> */ tuple) {
  Grid.$clinit();
  let orderPart = $Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint) ? Variables.f_Order__org_patternfly_style_Variables : j_l_String.m_valueOf__java_lang_Object__java_lang_String(Variables.f_Order__org_patternfly_style_Variables) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint);
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_grid__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, orderPart], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(element, /**@type {?string}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, j_l_String)));
 }
 /** @nodts */
 m_internalCols__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_grid_Grid(/** Tuple<Breakpoint, Integer> */ tuple) {
  if (!$Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint)) {
   if (this.m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_Grid('cols', /**@type {Integer}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, Integer)).m_intValue__int())) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('all-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(tuple.f_value__org_patternfly_core_Tuple) + '-col-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint))], j_l_String)));
   }
  }
 }
 /** @nodts @return {boolean} */
 m_verifyRange__java_lang_String__int__boolean_$p_org_patternfly_layout_grid_Grid(/** ?string */ property, /** number */ value) {
  if (value < 1 || value > 12) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void('PF5/Grid', /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), '\'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(property) + '\' out of range. Given: ' + value + ', allowed [1,12].');
   return false;
  }
  return true;
 }
 //Bridge method.
 /** @final @override @nodts @return {Grid} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_grid_Grid();
 }
 /** @nodts */
 static $clinit() {
  Grid.$clinit = () =>{};
  Grid.$loadModules();
  BaseLayout.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Grid;
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
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Grid, 'org.patternfly.layout.grid.Grid');

exports = Grid;

//# sourceMappingURL=Grid.js.map

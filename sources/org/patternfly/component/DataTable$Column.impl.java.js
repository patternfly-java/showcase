goog.module('org.patternfly.component.DataTable.Column$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let BodyDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.BodyDisplay$impl');
let CompoundDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.CompoundDisplay$impl');
let HeadDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.HeadDisplay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @template T
 * @deprecated
 */
class Column extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_DataTable_Column_;
  /**@type {Comparator<T>} @nodts*/
  this.f_comparator__org_patternfly_component_DataTable_Column_;
  /**@type {HeadDisplay} @nodts*/
  this.f_headDisplay__org_patternfly_component_DataTable_Column_;
  /**@type {BodyDisplay<T>} @nodts*/
  this.f_bodyDisplay__org_patternfly_component_DataTable_Column_;
  /**@type {CompoundDisplay<T>} @nodts*/
  this.f_compoundDisplay__org_patternfly_component_DataTable_Column_;
 }
 /** @nodts @template T @return {!Column<T>} */
 static $create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(/** ?string */ name, /** Comparator<T> */ comparator, /** HeadDisplay */ headDisplay, /** BodyDisplay<T> */ bodyDisplay, /** CompoundDisplay<T> */ compoundDisplay) {
  Column.$clinit();
  let $instance = new Column();
  $instance.$ctor__org_patternfly_component_DataTable_Column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay__void(name, comparator, headDisplay, bodyDisplay, compoundDisplay);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_DataTable_Column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay__void(/** ?string */ name, /** Comparator<T> */ comparator, /** HeadDisplay */ headDisplay, /** BodyDisplay<T> */ bodyDisplay, /** CompoundDisplay<T> */ compoundDisplay) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_component_DataTable_Column_ = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(name, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  this.f_comparator__org_patternfly_component_DataTable_Column_ = comparator;
  this.f_headDisplay__org_patternfly_component_DataTable_Column_ = headDisplay;
  this.f_bodyDisplay__org_patternfly_component_DataTable_Column_ = bodyDisplay;
  this.f_compoundDisplay__org_patternfly_component_DataTable_Column_ = compoundDisplay;
 }
 /** @nodts */
 static $clinit() {
  Column.$clinit = () =>{};
  Column.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Column;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(Column, 'org.patternfly.component.DataTable$Column');

exports = Column;

//# sourceMappingURL=DataTable$Column.js.map

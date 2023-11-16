goog.module('org.patternfly.component.DataTable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Display = goog.require('org.patternfly.dataprovider.Display$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLTableCaptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCaptionElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableSectionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let HandlerRegistrations = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistrations$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let BodyDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.BodyDisplay$impl');
let Column = goog.forwardDeclare('org.patternfly.component.DataTable.Column$impl');
let ExpandableDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.ExpandableDisplay$impl');
let HeadDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.HeadDisplay$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let ItemSelect = goog.forwardDeclare('org.patternfly.component.ItemSelect$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let PageInfo = goog.forwardDeclare('org.patternfly.dataprovider.PageInfo$impl');
let SelectionInfo = goog.forwardDeclare('org.patternfly.dataprovider.SelectionInfo$impl');
let SortInfo = goog.forwardDeclare('org.patternfly.dataprovider.SortInfo$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLTableElement, DataTable<T>>}
 * @implements {Display<T>}
 * @deprecated
 */
class DataTable extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DataProvider<T>} @nodts*/
  this.f_dataProvider__org_patternfly_component_DataTable_;
  /**@type {List<Column<T>>} @nodts*/
  this.f_columns__org_patternfly_component_DataTable_;
  /**@type {ItemSelect} @nodts*/
  this.f_itemSelect__org_patternfly_component_DataTable_;
  /**@type {HTMLContainerBuilder<HTMLTableRowElement>} @nodts*/
  this.f_theadRow__org_patternfly_component_DataTable_;
  /**@type {HTMLContainerBuilder<HTMLTableSectionElement>} @nodts*/
  this.f_tbody__org_patternfly_component_DataTable_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_selectAllHandler__org_patternfly_component_DataTable_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_expandHandler__org_patternfly_component_DataTable_;
  /**@type {Predicate<T>} @nodts*/
  this.f_expandablePredicate__org_patternfly_component_DataTable_;
  /**@type {ExpandableDisplay<T>} @nodts*/
  this.f_expandableDisplay__org_patternfly_component_DataTable_;
  /**@type {boolean} @nodts*/
  this.f_expandableFullWidth__org_patternfly_component_DataTable_ = false;
  /**@type {boolean} @nodts*/
  this.f_expandableNoPadding__org_patternfly_component_DataTable_ = false;
  /**@type {boolean} @nodts*/
  this.f_expandableColumn__org_patternfly_component_DataTable_ = false;
  /**@type {boolean} @nodts*/
  this.f_checkboxColumn__org_patternfly_component_DataTable_ = false;
  /**@type {boolean} @nodts*/
  this.f_actionsColumn__org_patternfly_component_DataTable_ = false;
  /**@type {number} @nodts*/
  this.f_noContentColumns__org_patternfly_component_DataTable_ = 0;
 }
 /** @nodts @template T_1 @return {DataTable<T_1>} */
 static m_dataTable__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataTable(/** DataProvider<T_1> */ dataProvider) {
  DataTable.$clinit();
  return /**@type {!DataTable<T_1>}*/ (DataTable.$create__org_patternfly_dataprovider_DataProvider__java_lang_String(dataProvider, null));
 }
 /** @nodts @template T_1 @return {DataTable<T_1>} */
 static m_dataTable__org_patternfly_dataprovider_DataProvider__java_lang_String__org_patternfly_component_DataTable(/** DataProvider<T_1> */ dataProvider, /** ?string */ caption) {
  DataTable.$clinit();
  return /**@type {!DataTable<T_1>}*/ (DataTable.$create__org_patternfly_dataprovider_DataProvider__java_lang_String(dataProvider, caption));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_expandColumn__org_patternfly_component_DataTable_Column() {
  DataTable.$clinit();
  return /**@type {!Column<T_1>}*/ (Column.$create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(DataTable.f_EXPAND_COLUMN__org_patternfly_component_DataTable_, null, null, BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<T_1> */ dataProvider, /** T_1 */ item) =>{
   let iconClass = j_l_String.m_valueOf__java_lang_Object__java_lang_String(PredefinedIcon.f_angleDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String))));
   /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(td.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__java_lang_String__java_lang_String__org_patternfly_component_button_Button(iconClass, 'Toggle details'));
  }), null));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_checkboxColumn__org_patternfly_component_DataTable_Column() {
  DataTable.$clinit();
  return /**@type {!Column<T_1>}*/ (Column.$create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(DataTable.f_CHECKBOX_COLUMN__org_patternfly_component_DataTable_, null, HeadDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ th) =>{
   /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(th.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_check__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('label', 'Select all rows'), InputElementBuilder)));
  }), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<T_1> */ dataProvider, /** T_1 */ item) =>{
   /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(td.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_check__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_checkbox__org_jboss_elemento_InputType).m_name__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(dataProvider.m_getId__java_lang_Object__java_lang_String(item), /**@type {!Array<?string>}*/ ($Arrays.$init(['select'], j_l_String)))), InputElementBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, dataProvider.m_getId__java_lang_Object__java_lang_String(item)), InputElementBuilder)));
  }), null));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_iconColumn__org_patternfly_component_Icon__org_patternfly_component_DataTable_Column(/** Icon */ icon) {
  DataTable.$clinit();
  return /**@type {Column<T_1>}*/ (DataTable.m_iconColumn__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<T_1> */ dataProvider, /** T_1 */ item) =>{
   td.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(icon);
  })));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_iconColumn__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(/** BodyDisplay<T_1> */ bodyDisplay) {
  DataTable.$clinit();
  let css = BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<T_1> */ dataProvider, /** T_1 */ item) =>{
   td.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['icon'], j_l_String)))], j_l_String)));
  });
  return /**@type {!Column<T_1>}*/ (Column.$create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('icon', /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), null, HeadDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ th) =>{
   /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(th.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['icon'], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_scope__org_patternfly_layout_Classes, Classes.f_col__org_patternfly_layout_Classes);
  }), css.m_andThen__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay(bodyDisplay), null));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_actionsColumn__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(/** BodyDisplay<T_1> */ bodyDisplay) {
  DataTable.$clinit();
  let css = BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<T_1> */ dataProvider, /** T_1 */ item) =>{
   td.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init(['action'], j_l_String)))], j_l_String)));
  });
  return /**@type {!Column<T_1>}*/ (Column.$create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(DataTable.f_ACTIONS_COLUMN__org_patternfly_component_DataTable_, null, null, css.m_andThen__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_BodyDisplay(bodyDisplay), null));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(/** ?string */ name, /** BodyDisplay<T_1> */ bodyDisplay) {
  DataTable.$clinit();
  return /**@type {!Column<T_1>}*/ (Column.$create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(name, null, HeadDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ th) =>{
   /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(th.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_scope__org_patternfly_layout_Classes, Classes.f_col__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(name);
  }), bodyDisplay, null));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(/** ?string */ name, /** Comparator<T_1> */ comparator, /** BodyDisplay<T_1> */ bodyDisplay) {
  DataTable.$clinit();
  return /**@type {!Column<T_1>}*/ (Column.$create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(name, comparator, HeadDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ th) =>{
   /**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(th.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sort__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_sort__org_patternfly_layout_Classes, Classes.f_none__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_scope__org_patternfly_layout_Classes, Classes.f_col__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_button__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_plain__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_dataTableSort__org_patternfly_core_Dataset, Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(name, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(name), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sort__org_patternfly_layout_Classes, Classes.f_indicator__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_arrowsAltV__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)));
  }), bodyDisplay, null));
 }
 /** @nodts @template T_1 @return {Column<T_1>} */
 static m_column__java_lang_String__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(/** ?string */ name, /** HeadDisplay */ headDisplay, /** BodyDisplay<T_1> */ bodyDisplay) {
  DataTable.$clinit();
  return /**@type {!Column<T_1>}*/ (Column.$create__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_HeadDisplay__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_CompoundDisplay(name, null, headDisplay, bodyDisplay, null));
 }
 /** @nodts @template T @return {!DataTable<T>} */
 static $create__org_patternfly_dataprovider_DataProvider__java_lang_String(/** DataProvider<T> */ dataProvider, /** ?string */ caption) {
  DataTable.$clinit();
  let $instance = new DataTable();
  $instance.$ctor__org_patternfly_component_DataTable__org_patternfly_dataprovider_DataProvider__java_lang_String__void(dataProvider, caption);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_DataTable__org_patternfly_dataprovider_DataProvider__java_lang_String__void(/** DataProvider<T> */ dataProvider, /** ?string */ caption) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLTableElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableElement>}*/ ($Casts.$to(Elements.m_table__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_grid__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)), ComponentType.f_DataTable__org_patternfly_component_ComponentType);
  this.f_dataProvider__org_patternfly_component_DataTable_ = dataProvider;
  this.f_columns__org_patternfly_component_DataTable_ = /**@type {!ArrayList<Column<T>>}*/ (ArrayList.$create__());
  this.f_itemSelect__org_patternfly_component_DataTable_ = ItemSelect.$create__elemental2_dom_HTMLElement(/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)));
  this.f_noContentColumns__org_patternfly_component_DataTable_ = 0;
  if (!$Equality.$same(caption, null)) {
   /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)).appendChild(/**@type {HTMLTableCaptionElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCaptionElement>}*/ ($Casts.$to(Elements.m_caption__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(caption), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLTableCaptionElement_$Overlay)));
  }
  this.f_theadRow__org_patternfly_component_DataTable_ = Elements.m_tr__org_jboss_elemento_HTMLContainerBuilder();
  this.f_tbody__org_patternfly_component_DataTable_ = Elements.m_tbody__org_jboss_elemento_HTMLContainerBuilder();
  /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)).appendChild(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(Elements.m_thead__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_theadRow__org_patternfly_component_DataTable_), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLTableSectionElement_$Overlay)));
  /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)).appendChild(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(this.f_tbody__org_patternfly_component_DataTable_.m_element__elemental2_dom_HTMLElement(), HTMLTableSectionElement_$Overlay)));
 }
 /** @nodts @return {DataTable<T>} */
 m_that__org_patternfly_component_DataTable() {
  return this;
 }
 /** @nodts @return {DataTable<T>} */
 m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/** Column<T> */ column) {
  this.f_columns__org_patternfly_component_DataTable_.add(column);
  let th = Elements.m_th__org_jboss_elemento_HTMLContainerBuilder();
  this.f_theadRow__org_patternfly_component_DataTable_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(th);
  if (!$Equality.$same(column.f_headDisplay__org_patternfly_component_DataTable_Column_, null)) {
   column.f_headDisplay__org_patternfly_component_DataTable_Column_.m_render__org_jboss_elemento_HTMLContainerBuilder__void(th);
   if (!$Equality.$same(column.f_comparator__org_patternfly_component_DataTable_Column_, null)) {
    let sortButton = Elements.m_find__org_jboss_elemento_IsElement__org_jboss_elemento_By__elemental2_dom_HTMLElement(th, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_dataTableSort__org_patternfly_core_Dataset, column.f_id__org_patternfly_component_DataTable_Column_));
    if (!$Equality.$same(sortButton, null)) {
     EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(sortButton, EventType.f_click__org_jboss_elemento_EventType, (e) =>{
      let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
      let b = /**@type {HTMLButtonElement}*/ ($Casts.$to(e_1.currentTarget, HTMLButtonElement_$Overlay));
      let sortTh = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(b, By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sort__org_patternfly_layout_Classes], j_l_String)))));
      if (!$Equality.$same(sortTh, null)) {
       let descending = j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('descending', sortTh.getAttribute(DataTable.f_ARIA_SORT__org_patternfly_component_DataTable_));
       let c = descending ? column.f_comparator__org_patternfly_component_DataTable_Column_.m_reversed__java_util_Comparator() : column.f_comparator__org_patternfly_component_DataTable_Column_;
       this.f_dataProvider__org_patternfly_component_DataTable_.m_sort__org_patternfly_dataprovider_SortInfo__void(/**@type {!SortInfo<T>}*/ (SortInfo.$create__java_lang_String__java_util_Comparator__boolean(column.f_id__org_patternfly_component_DataTable_Column_, c, !descending)));
      }
     });
    }
   }
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(DataTable.f_EXPAND_COLUMN__org_patternfly_component_DataTable_, column.f_id__org_patternfly_component_DataTable_Column_)) {
   this.f_expandableColumn__org_patternfly_component_DataTable_ = true;
   this.f_noContentColumns__org_patternfly_component_DataTable_ = this.f_noContentColumns__org_patternfly_component_DataTable_ + 1 | 0;
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_layout_Classes)], j_l_String)));
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(DataTable.f_CHECKBOX_COLUMN__org_patternfly_component_DataTable_, column.f_id__org_patternfly_component_DataTable_Column_)) {
   this.f_checkboxColumn__org_patternfly_component_DataTable_ = true;
   this.f_noContentColumns__org_patternfly_component_DataTable_ = this.f_noContentColumns__org_patternfly_component_DataTable_ + 1 | 0;
   this.m_bindSelectAllHandler__void_$p_org_patternfly_component_DataTable();
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(DataTable.f_ACTIONS_COLUMN__org_patternfly_component_DataTable_, column.f_id__org_patternfly_component_DataTable_Column_)) {
   this.f_actionsColumn__org_patternfly_component_DataTable_ = true;
   this.f_noContentColumns__org_patternfly_component_DataTable_ = this.f_noContentColumns__org_patternfly_component_DataTable_ + 1 | 0;
  }
  return this;
 }
 /** @nodts @return {DataTable<T>} */
 m_expandableRow__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(/** ExpandableDisplay<T> */ expandableDisplay) {
  return this.m_expandableRow__java_util_function_Predicate__boolean__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(null, false, false, expandableDisplay);
 }
 /** @nodts @return {DataTable<T>} */
 m_expandableRow__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(/** boolean */ fullWidth, /** ExpandableDisplay<T> */ expandableDisplay) {
  return this.m_expandableRow__java_util_function_Predicate__boolean__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(null, fullWidth, false, expandableDisplay);
 }
 /** @nodts @return {DataTable<T>} */
 m_expandableRow__boolean__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(/** boolean */ fullWidth, /** boolean */ noPadding, /** ExpandableDisplay<T> */ expandableDisplay) {
  return this.m_expandableRow__java_util_function_Predicate__boolean__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(null, fullWidth, noPadding, expandableDisplay);
 }
 /** @nodts @return {DataTable<T>} */
 m_expandableRow__java_util_function_Predicate__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(/** Predicate<T> */ expandable, /** ExpandableDisplay<T> */ expandableDisplay) {
  return this.m_expandableRow__java_util_function_Predicate__boolean__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(expandable, false, false, expandableDisplay);
 }
 /** @nodts @return {DataTable<T>} */
 m_expandableRow__java_util_function_Predicate__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(/** Predicate<T> */ expandable, /** boolean */ fullWidth, /** ExpandableDisplay<T> */ expandableDisplay) {
  return this.m_expandableRow__java_util_function_Predicate__boolean__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(expandable, fullWidth, false, expandableDisplay);
 }
 /** @nodts @return {DataTable<T>} */
 m_expandableRow__java_util_function_Predicate__boolean__boolean__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(/** Predicate<T> */ expandable, /** boolean */ fullWidth, /** boolean */ noPadding, /** ExpandableDisplay<T> */ expandableDisplay) {
  this.f_expandableColumn__org_patternfly_component_DataTable_ = true;
  this.f_expandablePredicate__org_patternfly_component_DataTable_ = expandable;
  this.f_expandableFullWidth__org_patternfly_component_DataTable_ = fullWidth;
  this.f_expandableNoPadding__org_patternfly_component_DataTable_ = noPadding;
  this.f_expandableDisplay__org_patternfly_component_DataTable_ = expandableDisplay;
  return this;
 }
 /** @override @nodts */
 m_showItems__java_lang_Iterable__org_patternfly_dataprovider_PageInfo__void(/** Iterable<T> */ items, /** PageInfo */ pageInfo) {
  this.f_itemSelect__org_patternfly_component_DataTable_.m_removeSelectHandler__void_$pp_org_patternfly_component();
  if (!$Equality.$same(this.f_expandHandler__org_patternfly_component_DataTable_, null)) {
   this.f_expandHandler__org_patternfly_component_DataTable_.m_removeHandler__void();
  }
  if (this.f_expandableColumn__org_patternfly_component_DataTable_) {
   Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)), By.m_element__java_lang_String__org_jboss_elemento_By('tbody')).m_forEach__java_util_function_Consumer__void(Consumer.$adapt((arg0) =>{
    let arg0_1 = /**@type {HTMLElement}*/ ($Casts.$to(arg0, HTMLElement_$Overlay));
    Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(arg0_1);
   }));
  } else {
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(this.f_tbody__org_patternfly_component_DataTable_.m_element__elemental2_dom_HTMLElement(), HTMLTableSectionElement_$Overlay)));
  }
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let id = this.f_dataProvider__org_patternfly_component_DataTable_.m_getId__java_lang_Object__java_lang_String(item);
    let tr = /**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(Elements.m_tr__org_jboss_elemento_HTMLContainerBuilder().m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_dataTableItem__org_patternfly_core_Dataset, id), HTMLContainerBuilder));
    for (let $iterator_1 = this.f_columns__org_patternfly_component_DataTable_.m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
     let column = /**@type {Column<T>}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), Column));
     {
      let td = Elements.m_td__org_jboss_elemento_HTMLContainerBuilder();
      if (!j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(DataTable.f_EXPAND_COLUMN__org_patternfly_component_DataTable_, column.f_id__org_patternfly_component_DataTable_Column_) || $Equality.$same(this.f_expandablePredicate__org_patternfly_component_DataTable_, null) || this.f_expandablePredicate__org_patternfly_component_DataTable_.m_test__java_lang_Object__boolean(item)) {
       if (!$Equality.$same(column.f_bodyDisplay__org_patternfly_component_DataTable_Column_, null)) {
        column.f_bodyDisplay__org_patternfly_component_DataTable_Column_.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(td, this.f_dataProvider__org_patternfly_component_DataTable_, item);
       }
      }
      tr.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(td);
     }
    }
    if (this.f_expandableColumn__org_patternfly_component_DataTable_) {
     let tbody = /**@type {HTMLContainerBuilder<HTMLTableSectionElement>}*/ ($Casts.$to(Elements.m_tbody__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tr), HTMLContainerBuilder));
     if (!$Equality.$same(this.f_expandableDisplay__org_patternfly_component_DataTable_, null)) {
      if ($Equality.$same(this.f_expandablePredicate__org_patternfly_component_DataTable_, null) || this.f_expandablePredicate__org_patternfly_component_DataTable_.m_test__java_lang_Object__boolean(item)) {
       let etr = /**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableRowElement>}*/ ($Casts.$to(Elements.m_tr__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableRow__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_hidden__boolean__org_jboss_elemento_TypedBuilder(true), HTMLContainerBuilder));
       let etd = Elements.m_td__org_jboss_elemento_HTMLContainerBuilder();
       let ec = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableRow__org_patternfly_layout_Classes, Classes.f_content__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder));
       this.f_expandableDisplay__org_patternfly_component_DataTable_.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(ec, this.f_dataProvider__org_patternfly_component_DataTable_, item);
       if (this.f_expandableNoPadding__org_patternfly_component_DataTable_) {
        etd.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('no-padding')], j_l_String)));
       }
       if (this.f_expandableFullWidth__org_patternfly_component_DataTable_) {
        etr.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(etd.m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((e) =>{
         let e_1 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(e, HTMLTableCellElement_$Overlay));
         e_1.colSpan = this.f_columns__org_patternfly_component_DataTable_.size();
        })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ec), HTMLContainerBuilder)));
       } else {
        if (this.f_checkboxColumn__org_patternfly_component_DataTable_) {
         etr.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_td__org_jboss_elemento_HTMLContainerBuilder());
        }
        if (this.f_actionsColumn__org_patternfly_component_DataTable_) {
         etr.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_td__org_jboss_elemento_HTMLContainerBuilder());
        }
        etr.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLTableCellElement>}*/ ($Casts.$to(etd.m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((e_2) =>{
         let e_3 = /**@type {HTMLTableCellElement}*/ ($Casts.$to(e_2, HTMLTableCellElement_$Overlay));
         e_3.colSpan = this.f_columns__org_patternfly_component_DataTable_.size() - this.f_noContentColumns__org_patternfly_component_DataTable_ | 0;
        })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ec), HTMLContainerBuilder)));
        if (this.f_actionsColumn__org_patternfly_component_DataTable_) {
         etr.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_td__org_jboss_elemento_HTMLContainerBuilder());
        }
       }
       tbody.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(etr);
      }
     }
     /**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)).appendChild(/**@type {HTMLTableSectionElement}*/ ($Casts.$to(tbody.m_element__elemental2_dom_HTMLElement(), HTMLTableSectionElement_$Overlay)));
    } else {
     this.f_tbody__org_patternfly_component_DataTable_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tr);
    }
   }
  }
  this.f_itemSelect__org_patternfly_component_DataTable_.m_bindSelectHandler__org_jboss_elemento_By__java_util_function_Function__java_util_function_BiConsumer__void_$pp_org_patternfly_component(DataTable.f_SELECT_ITEM_SELECTOR__org_patternfly_component_DataTable_, j_u_function_Function.$adapt((checkbox) =>{
   let checkbox_1 = /**@type {HTMLInputElement}*/ ($Casts.$to(checkbox, HTMLInputElement_$Overlay));
   let itemElement = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(checkbox_1, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_dataTableItem__org_patternfly_core_Dataset));
   if (!$Equality.$same(itemElement, null)) {
    return /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(itemElement.dataset, Dataset.f_dataTableItem__org_patternfly_core_Dataset), j_l_String));
   }
   return null;
  }), BiConsumer.$adapt((id_1, selected) =>{
   let id_2 = /**@type {?string}*/ ($Casts.$to(id_1, j_l_String));
   let selected_1 = /**@type {?boolean}*/ ($Casts.$to(selected, Boolean));
   let item_1 = this.f_dataProvider__org_patternfly_component_DataTable_.m_getItem__java_lang_String__java_lang_Object(id_2);
   if (!$Equality.$same(item_1, null)) {
    this.f_dataProvider__org_patternfly_component_DataTable_.m_select__java_lang_Object__boolean__void(item_1, Boolean.m_booleanValue__java_lang_Boolean__boolean(selected_1));
   }
  }));
  this.m_bindExpandHandler__void_$p_org_patternfly_component_DataTable();
 }
 /** @override @nodts */
 m_updateSelection__org_patternfly_dataprovider_SelectionInfo__void(/** SelectionInfo<T> */ selectionInfo) {
  for (let $iterator = this.f_dataProvider__org_patternfly_component_DataTable_.m_getVisibleItems__java_lang_Iterable().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let id = this.f_dataProvider__org_patternfly_component_DataTable_.m_getId__java_lang_Object__java_lang_String(item);
    this.f_itemSelect__org_patternfly_component_DataTable_.m_updateSelection__org_jboss_elemento_By__boolean__void_$pp_org_patternfly_component(By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_dataTableItem__org_patternfly_core_Dataset, id).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(DataTable.f_CHECK_SELECTOR__org_patternfly_component_DataTable_), selectionInfo.m_isSelected__java_lang_Object__boolean(item));
   }
  }
 }
 /** @override @nodts */
 m_updateSortInfo__org_patternfly_dataprovider_SortInfo__void(/** SortInfo<T> */ sortInfo) {
  for (let $iterator = Elements.m_findAll__org_jboss_elemento_IsElement__org_jboss_elemento_By__java_lang_Iterable(this.f_theadRow__org_patternfly_component_DataTable_, DataTable.f_SORT_SELECTOR__org_patternfly_component_DataTable_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let button = /**@type {HTMLButtonElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(e, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_dataTableSort__org_patternfly_core_Dataset)), HTMLButtonElement_$Overlay));
    let tsi = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(e, By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sort__org_patternfly_layout_Classes, Classes.f_indicator__org_patternfly_layout_Classes], j_l_String)))));
    if (!$Equality.$same(button, null) && !$Equality.$same(tsi, null)) {
     Elements.m_removeChildrenFrom__elemental2_dom_Element__void(tsi);
     if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(sortInfo.m_getId__java_lang_String(), /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(button.dataset, Dataset.f_dataTableSort__org_patternfly_core_Dataset), j_l_String)))) {
      e.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_layout_Classes));
      if (sortInfo.m_isAscending__boolean()) {
       Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(e, DataTable.f_ARIA_SORT__org_patternfly_component_DataTable_, 'descending');
       tsi.appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_longArrowAltUp__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
      } else {
       Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(e, DataTable.f_ARIA_SORT__org_patternfly_component_DataTable_, 'ascending');
       tsi.appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_longArrowAltDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
      }
     } else {
      e.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_layout_Classes));
      Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(e, DataTable.f_ARIA_SORT__org_patternfly_component_DataTable_, Classes.f_none__org_patternfly_layout_Classes);
      tsi.appendChild(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([PredefinedIcon.f_arrowsAltV__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
     }
    }
   }
  }
 }
 /** @nodts @return {DataTable<T>} */
 m_compact__org_patternfly_component_DataTable() {
  return /**@type {DataTable<T>}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_compact__org_patternfly_layout_Classes)], j_l_String))), DataTable));
 }
 /** @nodts @return {DataTable<T>} */
 m_noBorders__org_patternfly_component_DataTable() {
  return /**@type {DataTable<T>}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_noBorderRows__org_patternfly_layout_Classes)], j_l_String))), DataTable));
 }
 /** @nodts @return {DataTable<T>} */
 m_noSelectAll__org_patternfly_component_DataTable() {
  let selectAll = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)), DataTable.f_SELECT_ALL_SELECTOR__org_patternfly_component_DataTable_);
  if (!$Equality.$same(selectAll, null)) {
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(selectAll, false);
  }
  return this;
 }
 /** @nodts */
 m_bindSelectAllHandler__void_$p_org_patternfly_component_DataTable() {
  let checkbox = /**@type {HTMLInputElement}*/ ($Casts.$to(Elements.m_find__org_jboss_elemento_IsElement__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_theadRow__org_patternfly_component_DataTable_, DataTable.f_SELECT_ALL_SELECTOR__org_patternfly_component_DataTable_), HTMLInputElement_$Overlay));
  if (!$Equality.$same(checkbox, null)) {
   this.f_selectAllHandler__org_patternfly_component_DataTable_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(checkbox, EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    let selectAll = /**@type {HTMLInputElement}*/ ($Casts.$to(e_1.currentTarget, HTMLInputElement_$Overlay)).checked;
    if (selectAll) {
     this.f_dataProvider__org_patternfly_component_DataTable_.m_selectVisible__void();
    } else {
     this.f_dataProvider__org_patternfly_component_DataTable_.m_clearVisibleSelection__void();
    }
   });
  }
 }
 /** @nodts */
 m_removeSelectAllHandler__void_$p_org_patternfly_component_DataTable() {
  if (!$Equality.$same(this.f_selectAllHandler__org_patternfly_component_DataTable_, null)) {
   this.f_selectAllHandler__org_patternfly_component_DataTable_.m_removeHandler__void();
   this.f_selectAllHandler__org_patternfly_component_DataTable_ = null;
  }
 }
 /** @nodts */
 m_bindExpandHandler__void_$p_org_patternfly_component_DataTable() {
  let handler = /**@type {!ArrayList<HandlerRegistration>}*/ (ArrayList.$create__());
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/**@type {HTMLTableElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)), DataTable.f_TOGGLE_SELECTOR__org_patternfly_component_DataTable_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let itemElement = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(e, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_dataTableItem__org_patternfly_core_Dataset));
    if (!$Equality.$same(itemElement, null)) {
     let tbody = /**@type {HTMLElement}*/ ($Casts.$to(itemElement.parentNode, HTMLElement_$Overlay));
     let contentRow = /**@type {HTMLElement}*/ ($Casts.$to(itemElement.nextElementSibling, HTMLElement_$Overlay));
     if (!$Equality.$same(tbody, null) && !$Equality.$same(contentRow, null)) {
      let itemId = /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(itemElement.dataset, Dataset.f_dataTableItem__org_patternfly_core_Dataset), j_l_String));
      let buttonId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(itemId, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)));
      let contentId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(itemId, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_layout_Classes], j_l_String)));
      e.id = buttonId;
      Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(e, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataTable.f_ARIA__org_patternfly_component_DataTable_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.f_labelledBy__org_patternfly_layout_Classes), j_l_String.m_valueOf__java_lang_Object__java_lang_String(itemId) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(buttonId));
      Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(e, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataTable.f_ARIA__org_patternfly_component_DataTable_) + 'expanded', false);
      Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(e, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataTable.f_ARIA__org_patternfly_component_DataTable_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.f_controls__org_patternfly_layout_Classes), contentId);
      contentRow.id = contentId;
      contentRow.hidden = true;
      Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(contentRow, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataTable.f_ARIA__org_patternfly_component_DataTable_) + 'label', 'Details');
      handler.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(e, EventType.f_click__org_jboss_elemento_EventType, (evt) =>{
       let evt_1 = /**@type {MouseEvent}*/ ($Casts.$to(evt, MouseEvent_$Overlay));
       if (tbody.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String('expanded'))) {
        tbody.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
        e.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
        Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(e, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataTable.f_ARIA__org_patternfly_component_DataTable_) + 'expanded', false);
        contentRow.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
        contentRow.hidden = true;
       } else {
        tbody.classList.add(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
        e.classList.add(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
        Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(e, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataTable.f_ARIA__org_patternfly_component_DataTable_) + 'expanded', true);
        contentRow.classList.add(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
        contentRow.hidden = false;
       }
      }));
     }
    }
   }
  }
  if (!handler.isEmpty()) {
   this.f_expandHandler__org_patternfly_component_DataTable_ = HandlerRegistrations.m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration(/**@type {Array<HandlerRegistration>}*/ ($Arrays.$castTo(handler.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {!Array<HandlerRegistration>}*/ ($Arrays.$create([0], HandlerRegistration))), HandlerRegistration, 1)));
  }
 }
 /** @nodts */
 m_removeExpandHandler__void_$p_org_patternfly_component_DataTable() {
  if (!$Equality.$same(this.f_expandHandler__org_patternfly_component_DataTable_, null)) {
   this.f_expandHandler__org_patternfly_component_DataTable_.m_removeHandler__void();
   this.f_expandHandler__org_patternfly_component_DataTable_ = null;
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {DataTable<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_DataTable();
 }
 /** @nodts */
 static $clinit() {
  DataTable.$clinit = () =>{};
  DataTable.$loadModules();
  BaseComponent.$clinit();
  DataTable.f_SORT_SELECTOR__org_patternfly_component_DataTable_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_sort__org_patternfly_layout_Classes], j_l_String))));
  DataTable.f_TOGGLE_SELECTOR__org_patternfly_component_DataTable_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))).m_child__org_jboss_elemento_By__org_jboss_elemento_By(By.m_element__java_lang_String__org_jboss_elemento_By('button'));
  DataTable.f_CHECK_SELECTOR__org_patternfly_component_DataTable_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_table__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_check__org_patternfly_layout_Classes], j_l_String)))).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(By.m_element__java_lang_String__org_jboss_elemento_By('input').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_attribute__java_lang_String__java_lang_String__org_jboss_elemento_By('type', 'checkbox')));
  DataTable.f_SELECT_ALL_SELECTOR__org_patternfly_component_DataTable_ = By.m_element__java_lang_String__org_jboss_elemento_By('thead').m_desc__org_jboss_elemento_By__org_jboss_elemento_By(DataTable.f_CHECK_SELECTOR__org_patternfly_component_DataTable_);
  DataTable.f_SELECT_ITEM_SELECTOR__org_patternfly_component_DataTable_ = By.m_element__java_lang_String__org_jboss_elemento_By('tbody').m_desc__org_jboss_elemento_By__org_jboss_elemento_By(DataTable.f_CHECK_SELECTOR__org_patternfly_component_DataTable_);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataTable;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLTableCaptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCaptionElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableSectionElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  HandlerRegistrations = goog.module.get('org.gwtproject.event.shared.HandlerRegistrations$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  BodyDisplay = goog.module.get('org.patternfly.component.DataTable.BodyDisplay$impl');
  Column = goog.module.get('org.patternfly.component.DataTable.Column$impl');
  HeadDisplay = goog.module.get('org.patternfly.component.DataTable.HeadDisplay$impl');
  ItemSelect = goog.module.get('org.patternfly.component.ItemSelect$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  SortInfo = goog.module.get('org.patternfly.dataprovider.SortInfo$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DataTable.f_ARIA__org_patternfly_component_DataTable_ = 'aria-';
/**@const {string} @nodts*/
DataTable.f_ARIA_SORT__org_patternfly_component_DataTable_ = 'aria-sort';
/**@const {string} @nodts*/
DataTable.f_CHECKBOX_COLUMN__org_patternfly_component_DataTable_ = 'checkbox';
/**@const {string} @nodts*/
DataTable.f_EXPAND_COLUMN__org_patternfly_component_DataTable_ = 'expand';
/**@const {string} @nodts*/
DataTable.f_ACTIONS_COLUMN__org_patternfly_component_DataTable_ = 'actions';
/**@type {By} @nodts*/
DataTable.f_SORT_SELECTOR__org_patternfly_component_DataTable_;
/**@type {By} @nodts*/
DataTable.f_TOGGLE_SELECTOR__org_patternfly_component_DataTable_;
/**@type {By} @nodts*/
DataTable.f_CHECK_SELECTOR__org_patternfly_component_DataTable_;
/**@type {By} @nodts*/
DataTable.f_SELECT_ALL_SELECTOR__org_patternfly_component_DataTable_;
/**@type {By} @nodts*/
DataTable.f_SELECT_ITEM_SELECTOR__org_patternfly_component_DataTable_;
Display.$markImplementor(DataTable);
$Util.$setClassMetadata(DataTable, 'org.patternfly.component.DataTable');

exports = DataTable;

//# sourceMappingURL=DataTable.js.map

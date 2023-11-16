goog.module('org.patternfly.component.OldToolbar.BulkSelect$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.Dropdown$impl');
let OldToolbar = goog.forwardDeclare('org.patternfly.component.OldToolbar$impl');
let BulkSelectOption = goog.forwardDeclare('org.patternfly.component.OldToolbar.BulkSelectOption$impl');
let PageInfo = goog.forwardDeclare('org.patternfly.dataprovider.PageInfo$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLDivElement>}
 * @deprecated
 */
class BulkSelect extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Dropdown<BulkSelectOption>} @nodts*/
  this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_;
 }
 /** @nodts @return {!BulkSelect} */
 static $create__() {
  BulkSelect.$clinit();
  let $instance = new BulkSelect();
  $instance.$ctor__org_patternfly_component_OldToolbar_BulkSelect__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_BulkSelect__void() {
  this.$ctor__java_lang_Object__void();
  this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_ = /**@type {Dropdown<BulkSelectOption>}*/ (Dropdown.m_splitCheckbox__org_patternfly_component_Dropdown()).m_identifier__java_util_function_Function__org_patternfly_component_Dropdown(j_u_function_Function.$adapt((bso) =>{
   let bso_1 = /**@type {BulkSelectOption}*/ ($Casts.$to(bso, BulkSelectOption));
   return bso_1.f_id__org_patternfly_component_OldToolbar_BulkSelectOption_;
  })).m_display__java_util_function_BiConsumer__org_patternfly_component_Dropdown(BiConsumer.$adapt((html, bso_2) =>{
   let html_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(html, HTMLContainerBuilder));
   let bso_3 = /**@type {BulkSelectOption}*/ ($Casts.$to(bso_2, BulkSelectOption));
   html_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(bso_3.f_text__org_patternfly_component_OldToolbar_BulkSelectOption_);
  })).m_add__java_lang_Object__org_patternfly_component_Dropdown(BulkSelect.f_SELECT_NONE__org_patternfly_component_OldToolbar_BulkSelect_).m_add__java_lang_Object__org_patternfly_component_Dropdown(BulkSelect.f_SELECT_PAGE__org_patternfly_component_OldToolbar_BulkSelect_).m_add__java_lang_Object__org_patternfly_component_Dropdown(BulkSelect.f_SELECT_ALL__org_patternfly_component_OldToolbar_BulkSelect_);
 }
 /** @nodts @return {HTMLDivElement} */
 m_element__elemental2_dom_HTMLDivElement() {
  return /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_element__elemental2_dom_HTMLElement(), $Overlay));
 }
 /** @nodts @template T */
 m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_BulkSelect(/** OldToolbar<T> */ toolbar) {
  this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_Dropdown(SelectHandler.$adapt((item) =>{
   let item_1 = /**@type {BulkSelectOption}*/ ($Casts.$to(item, BulkSelectOption));
   if (BulkSelect.f_SELECT_NONE__org_patternfly_component_OldToolbar_BulkSelect_.equals(item_1)) {
    toolbar.f_dataProvider__org_patternfly_component_OldToolbar_.m_clearAllSelection__void();
   } else if (BulkSelect.f_SELECT_PAGE__org_patternfly_component_OldToolbar_BulkSelect_.equals(item_1)) {
    toolbar.f_dataProvider__org_patternfly_component_OldToolbar_.m_selectVisible__void();
   } else if (BulkSelect.f_SELECT_ALL__org_patternfly_component_OldToolbar_BulkSelect_.equals(item_1)) {
    toolbar.f_dataProvider__org_patternfly_component_OldToolbar_.m_selectAll__void();
   }
  }));
  this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_onChange__java_util_function_Consumer__org_patternfly_component_Dropdown(Consumer.$adapt((all) =>{
   let all_1 = /**@type {?boolean}*/ ($Casts.$to(all, Boolean));
   if (Boolean.m_booleanValue__java_lang_Boolean__boolean(all_1)) {
    toolbar.f_dataProvider__org_patternfly_component_OldToolbar_.m_selectAll__void();
   } else {
    toolbar.f_dataProvider__org_patternfly_component_OldToolbar_.m_clearAllSelection__void();
   }
  }));
 }
 /** @nodts */
 m_update__org_patternfly_dataprovider_PageInfo__void_$p_org_patternfly_component_OldToolbar_BulkSelect(/** PageInfo */ pageInfo) {
  BulkSelect.f_SELECT_PAGE__org_patternfly_component_OldToolbar_BulkSelect_.f_text__org_patternfly_component_OldToolbar_BulkSelectOption_ = 'Select page (' + pageInfo.m_getVisible__int() + ' items)';
  BulkSelect.f_SELECT_ALL__org_patternfly_component_OldToolbar_BulkSelect_.f_text__org_patternfly_component_OldToolbar_BulkSelectOption_ = 'Select all (' + pageInfo.m_getTotal__int() + ' items)';
  this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_update__java_lang_Object__void(BulkSelect.f_SELECT_PAGE__org_patternfly_component_OldToolbar_BulkSelect_);
  this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_update__java_lang_Object__void(BulkSelect.f_SELECT_ALL__org_patternfly_component_OldToolbar_BulkSelect_);
 }
 /** @nodts */
 m_update__int__int__int__int__void_$p_org_patternfly_component_OldToolbar_BulkSelect(/** number */ selected, /** number */ filtered, /** number */ visible, /** number */ all) {
  if (selected == 0) {
   this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_check__boolean__org_patternfly_component_Dropdown(false);
   this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_indeterminate__boolean__org_patternfly_component_Dropdown(false);
   this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_clearText__void();
  } else {
   if (selected == all || selected == filtered && filtered == visible) {
    this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_check__boolean__boolean__org_patternfly_component_Dropdown(true, false);
    this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_indeterminate__boolean__org_patternfly_component_Dropdown(false);
   } else {
    this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_check__boolean__boolean__org_patternfly_component_Dropdown(false, false);
    this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_indeterminate__boolean__org_patternfly_component_Dropdown(true);
   }
   this.f_dropdown__org_patternfly_component_OldToolbar_BulkSelect_.m_setText__java_lang_String__void(selected + ' selected');
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLDivElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLDivElement();
 }
 /** @nodts */
 static $clinit() {
  BulkSelect.$clinit = () =>{};
  BulkSelect.$loadModules();
  j_l_Object.$clinit();
  BulkSelect.f_SELECT_NONE__org_patternfly_component_OldToolbar_BulkSelect_ = BulkSelectOption.$create__java_lang_String__java_lang_String('select-none', 'Select none (0 items)');
  BulkSelect.f_SELECT_PAGE__org_patternfly_component_OldToolbar_BulkSelect_ = BulkSelectOption.$create__java_lang_String__java_lang_String('select-page', 'Select page');
  BulkSelect.f_SELECT_ALL__org_patternfly_component_OldToolbar_BulkSelect_ = BulkSelectOption.$create__java_lang_String__java_lang_String('select-all', 'Select all');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BulkSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Dropdown = goog.module.get('org.patternfly.component.Dropdown$impl');
  BulkSelectOption = goog.module.get('org.patternfly.component.OldToolbar.BulkSelectOption$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {BulkSelectOption} @nodts*/
BulkSelect.f_SELECT_NONE__org_patternfly_component_OldToolbar_BulkSelect_;
/**@type {BulkSelectOption} @nodts*/
BulkSelect.f_SELECT_PAGE__org_patternfly_component_OldToolbar_BulkSelect_;
/**@type {BulkSelectOption} @nodts*/
BulkSelect.f_SELECT_ALL__org_patternfly_component_OldToolbar_BulkSelect_;
IsElement.$markImplementor(BulkSelect);
$Util.$setClassMetadata(BulkSelect, 'org.patternfly.component.OldToolbar$BulkSelect');

exports = BulkSelect;

//# sourceMappingURL=OldToolbar$BulkSelect.js.map

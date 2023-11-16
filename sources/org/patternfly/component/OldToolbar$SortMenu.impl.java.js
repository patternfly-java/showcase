goog.module('org.patternfly.component.OldToolbar.SortMenu$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let MultiOptionsMenu = goog.forwardDeclare('org.patternfly.component.MultiOptionsMenu$impl');
let Group = goog.forwardDeclare('org.patternfly.component.MultiOptionsMenu.Group$impl');
let OldToolbar = goog.forwardDeclare('org.patternfly.component.OldToolbar$impl');
let SortDirection = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortDirection$impl');
let SortOption = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortOption$impl');
let SortOptions = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortOptions$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let SortInfo = goog.forwardDeclare('org.patternfly.dataprovider.SortInfo$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {IsElement<HTMLDivElement>}
 * @deprecated
 */
class SortMenu extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SortOptions<T>} @nodts*/
  this.f_sortOptions__org_patternfly_component_OldToolbar_SortMenu_;
  /**@type {Group<SortOption<T>>} @nodts*/
  this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_;
  /**@type {Group<SortDirection>} @nodts*/
  this.f_sortDirection__org_patternfly_component_OldToolbar_SortMenu_;
  /**@type {MultiOptionsMenu} @nodts*/
  this.f_mom__org_patternfly_component_OldToolbar_SortMenu_;
 }
 /** @nodts @template T @return {!SortMenu<T>} */
 static $create__org_patternfly_component_OldToolbar_SortOptions(/** SortOptions<T> */ sortOptions) {
  SortMenu.$clinit();
  let $instance = new SortMenu();
  $instance.$ctor__org_patternfly_component_OldToolbar_SortMenu__org_patternfly_component_OldToolbar_SortOptions__void(sortOptions);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar_SortMenu__org_patternfly_component_OldToolbar_SortOptions__void(/** SortOptions<T> */ sortOptions) {
  this.$ctor__java_lang_Object__void();
  this.f_sortOptions__org_patternfly_component_OldToolbar_SortMenu_ = sortOptions;
  this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_ = /**@type {!Group<SortOption<T>>}*/ (Group.$create__java_lang_String('Sort by')).m_display__java_util_function_BiConsumer__org_patternfly_component_MultiOptionsMenu_Group(BiConsumer.$adapt((html, sortOption) =>{
   let html_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(html, HTMLContainerBuilder));
   let sortOption_1 = /**@type {SortOption}*/ ($Casts.$to(sortOption, SortOption));
   html_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(sortOption_1.f_name__org_patternfly_component_OldToolbar_SortOption_);
  })).m_add__java_lang_Iterable__org_patternfly_component_MultiOptionsMenu_Group(sortOptions);
  this.f_sortDirection__org_patternfly_component_OldToolbar_SortMenu_ = /**@type {!Group<SortDirection>}*/ (Group.$create__java_lang_String('Sort direction')).m_display__java_util_function_BiConsumer__org_patternfly_component_MultiOptionsMenu_Group(BiConsumer.$adapt((html_2, sortDirection) =>{
   let html_3 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(html_2, HTMLContainerBuilder));
   let sortDirection_1 = /**@type {SortDirection}*/ ($Casts.$to(sortDirection, SortDirection));
   html_3.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(sortDirection_1.f_text__org_patternfly_component_OldToolbar_SortDirection_);
  })).m_add__java_lang_Object__org_patternfly_component_MultiOptionsMenu_Group(SortDirection.f_ASCENDING__org_patternfly_component_OldToolbar_SortDirection).m_add__java_lang_Object__org_patternfly_component_MultiOptionsMenu_Group(SortDirection.f_DESCENDING__org_patternfly_component_OldToolbar_SortDirection);
  this.f_mom__org_patternfly_component_OldToolbar_SortMenu_ = MultiOptionsMenu.m_icon__org_patternfly_component_Icon__org_patternfly_component_MultiOptionsMenu(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.f_sortAmountDown__org_patternfly_layout_PredefinedIcon.f_className__org_patternfly_layout_PredefinedIcon));
  this.f_mom__org_patternfly_component_OldToolbar_SortMenu_.m_add__org_patternfly_component_MultiOptionsMenu_Group__org_patternfly_component_MultiOptionsMenu(this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_);
  this.f_mom__org_patternfly_component_OldToolbar_SortMenu_.m_add__org_patternfly_component_MultiOptionsMenu_Group__org_patternfly_component_MultiOptionsMenu(this.f_sortDirection__org_patternfly_component_OldToolbar_SortMenu_);
 }
 /** @nodts @return {HTMLDivElement} */
 m_element__elemental2_dom_HTMLDivElement() {
  return /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_mom__org_patternfly_component_OldToolbar_SortMenu_.m_element__elemental2_dom_HTMLElement(), $Overlay));
 }
 /** @nodts */
 m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_SortMenu(/** OldToolbar<T> */ toolbar) {
  this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_.m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_MultiOptionsMenu_Group(SelectHandler.$adapt((so) =>{
   let so_1 = /**@type {SortOption}*/ ($Casts.$to(so, SortOption));
   this.m_sort__org_patternfly_dataprovider_DataProvider__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortDirection__void_$p_org_patternfly_component_OldToolbar_SortMenu(toolbar.f_dataProvider__org_patternfly_component_OldToolbar_, so_1, /**@type {SortDirection}*/ ($Casts.$to(this.f_sortDirection__org_patternfly_component_OldToolbar_SortMenu_.m_value__java_lang_Object(), SortDirection)));
  }));
  this.f_sortDirection__org_patternfly_component_OldToolbar_SortMenu_.m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_MultiOptionsMenu_Group(SelectHandler.$adapt((so_2) =>{
   let so_3 = /**@type {SortDirection}*/ ($Casts.$to(so_2, SortDirection));
   this.m_sort__org_patternfly_dataprovider_DataProvider__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortDirection__void_$p_org_patternfly_component_OldToolbar_SortMenu(toolbar.f_dataProvider__org_patternfly_component_OldToolbar_, /**@type {SortOption<T>}*/ ($Casts.$to(this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_.m_value__java_lang_Object(), SortOption)), so_3);
  }));
 }
 /** @nodts */
 m_sort__org_patternfly_dataprovider_DataProvider__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortDirection__void_$p_org_patternfly_component_OldToolbar_SortMenu(/** DataProvider<T> */ dataProvider, /** SortOption<T> */ sortBy, /** SortDirection */ sortDirection) {
  if (!$Equality.$same(sortBy, null)) {
   let ascending = $Equality.$same(sortDirection, null) || sortDirection.f_ascending__org_patternfly_component_OldToolbar_SortDirection_;
   let c = ascending ? sortBy.f_comparator__org_patternfly_component_OldToolbar_SortOption_ : sortBy.f_comparator__org_patternfly_component_OldToolbar_SortOption_.m_reversed__java_util_Comparator();
   dataProvider.m_sort__org_patternfly_dataprovider_SortInfo__void(/**@type {!SortInfo<T>}*/ (SortInfo.$create__java_lang_String__java_util_Comparator__boolean(sortBy.f_id__org_patternfly_component_OldToolbar_SortOption_, c, ascending)));
  }
 }
 /** @nodts */
 m_update__org_patternfly_dataprovider_SortInfo__void_$p_org_patternfly_component_OldToolbar_SortMenu(/** SortInfo<T> */ sortInfo) {
  let sortOption = this.f_sortOptions__org_patternfly_component_OldToolbar_SortMenu_.m_get__java_lang_String__org_patternfly_component_OldToolbar_SortOption(sortInfo.m_getId__java_lang_String());
  if (!$Equality.$same(this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_, null)) {
   if ($Equality.$same(sortOption, null)) {
    this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_.m_clearSelection__org_patternfly_component_MultiOptionsMenu_Group();
   } else {
    this.f_sortBy__org_patternfly_component_OldToolbar_SortMenu_.m_select__java_lang_Object__boolean__org_patternfly_component_MultiOptionsMenu_Group(sortOption, false);
   }
  }
  if (!$Equality.$same(this.f_sortDirection__org_patternfly_component_OldToolbar_SortMenu_, null)) {
   this.f_sortDirection__org_patternfly_component_OldToolbar_SortMenu_.m_select__java_lang_Object__boolean__org_patternfly_component_MultiOptionsMenu_Group(sortInfo.m_isAscending__boolean() ? SortDirection.f_ASCENDING__org_patternfly_component_OldToolbar_SortDirection : SortDirection.f_DESCENDING__org_patternfly_component_OldToolbar_SortDirection, false);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLDivElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLDivElement();
 }
 /** @nodts */
 static $clinit() {
  SortMenu.$clinit = () =>{};
  SortMenu.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SortMenu;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  MultiOptionsMenu = goog.module.get('org.patternfly.component.MultiOptionsMenu$impl');
  Group = goog.module.get('org.patternfly.component.MultiOptionsMenu.Group$impl');
  SortDirection = goog.module.get('org.patternfly.component.OldToolbar.SortDirection$impl');
  SortOption = goog.module.get('org.patternfly.component.OldToolbar.SortOption$impl');
  SortInfo = goog.module.get('org.patternfly.dataprovider.SortInfo$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsElement.$markImplementor(SortMenu);
$Util.$setClassMetadata(SortMenu, 'org.patternfly.component.OldToolbar$SortMenu');

exports = SortMenu;

//# sourceMappingURL=OldToolbar$SortMenu.js.map

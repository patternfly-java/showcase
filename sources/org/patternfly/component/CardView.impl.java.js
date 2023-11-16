goog.module('org.patternfly.component.CardView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const org_patternfly_dataprovider_Display = goog.require('org.patternfly.dataprovider.Display$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Card = goog.forwardDeclare('org.patternfly.component.Card$impl');
let Display = goog.forwardDeclare('org.patternfly.component.CardView.Display$impl');
let ItemSelect = goog.forwardDeclare('org.patternfly.component.ItemSelect$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let PageInfo = goog.forwardDeclare('org.patternfly.dataprovider.PageInfo$impl');
let SelectionInfo = goog.forwardDeclare('org.patternfly.dataprovider.SelectionInfo$impl');
let SortInfo = goog.forwardDeclare('org.patternfly.dataprovider.SortInfo$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLDivElement, CardView<T>>}
 * @implements {org_patternfly_dataprovider_Display<T>}
 * @deprecated
 */
class CardView extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DataProvider<T>} @nodts*/
  this.f_dataProvider__org_patternfly_component_CardView_;
  /**@type {Display<T>} @nodts*/
  this.f_display__org_patternfly_component_CardView_;
  /**@type {ItemSelect} @nodts*/
  this.f_itemSelect__org_patternfly_component_CardView_;
  /**@type {boolean} @nodts*/
  this.f_compact__org_patternfly_component_CardView_ = false;
  /**@type {boolean} @nodts*/
  this.f_hoverable__org_patternfly_component_CardView_ = false;
 }
 /** @nodts @template T_1 @return {CardView<T_1>} */
 static m_cardView__org_patternfly_dataprovider_DataProvider__org_patternfly_component_CardView_Display__org_patternfly_component_CardView(/** DataProvider<T_1> */ dataProvider, /** Display<T_1> */ display) {
  CardView.$clinit();
  return /**@type {!CardView<T_1>}*/ (CardView.$create__org_patternfly_dataprovider_DataProvider__org_patternfly_component_CardView_Display(dataProvider, display));
 }
 /** @nodts @template T @return {!CardView<T>} */
 static $create__org_patternfly_dataprovider_DataProvider__org_patternfly_component_CardView_Display(/** DataProvider<T> */ dataProvider, /** Display<T> */ display) {
  CardView.$clinit();
  let $instance = new CardView();
  $instance.$ctor__org_patternfly_component_CardView__org_patternfly_dataprovider_DataProvider__org_patternfly_component_CardView_Display__void(dataProvider, display);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_CardView__org_patternfly_dataprovider_DataProvider__org_patternfly_component_CardView_Display__void(/** DataProvider<T> */ dataProvider, /** Display<T> */ display) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_gutter__org_patternfly_layout_Classes)], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), 'CardView');
  this.f_dataProvider__org_patternfly_component_CardView_ = dataProvider;
  this.f_display__org_patternfly_component_CardView_ = display;
  this.f_itemSelect__org_patternfly_component_CardView_ = ItemSelect.$create__elemental2_dom_HTMLElement(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {CardView<T>} */
 m_that__org_patternfly_component_CardView() {
  return this;
 }
 /** @override @nodts */
 m_showItems__java_lang_Iterable__org_patternfly_dataprovider_PageInfo__void(/** Iterable<T> */ items, /** PageInfo */ pageInfo) {
  this.f_itemSelect__org_patternfly_component_CardView_.m_removeSelectHandler__void_$pp_org_patternfly_component();
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let id = this.f_dataProvider__org_patternfly_component_CardView_.m_getId__java_lang_Object__java_lang_String(item);
    let card = /**@type {Card}*/ ($Casts.$to(Card.m_card__org_patternfly_component_Card().m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_cardViewItem__org_patternfly_core_Dataset, id), Card));
    if (this.f_compact__org_patternfly_component_CardView_) {
     card.m_compact__org_patternfly_component_Card();
    }
    if (this.f_hoverable__org_patternfly_component_CardView_) {
     card.m_hoverable__org_patternfly_component_Card();
    }
    this.f_display__org_patternfly_component_CardView_.m_render__org_patternfly_component_Card__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(card, this.f_dataProvider__org_patternfly_component_CardView_, item);
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(card);
   }
  }
  this.f_itemSelect__org_patternfly_component_CardView_.m_bindSelectHandler__org_jboss_elemento_By__java_util_function_Function__java_util_function_BiConsumer__void_$pp_org_patternfly_component(CardView.f_SELECT_ITEM_SELECTOR__org_patternfly_component_CardView_, j_u_function_Function.$adapt((checkbox) =>{
   let checkbox_1 = /**@type {HTMLInputElement}*/ ($Casts.$to(checkbox, HTMLInputElement_$Overlay));
   let itemElement = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(checkbox_1, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_cardViewItem__org_patternfly_core_Dataset));
   if (!$Equality.$same(itemElement, null)) {
    return /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(itemElement.dataset, Dataset.f_cardViewItem__org_patternfly_core_Dataset), j_l_String));
   }
   return null;
  }), BiConsumer.$adapt((id_1, selected) =>{
   let id_2 = /**@type {?string}*/ ($Casts.$to(id_1, j_l_String));
   let selected_1 = /**@type {?boolean}*/ ($Casts.$to(selected, Boolean));
   let item_1 = this.f_dataProvider__org_patternfly_component_CardView_.m_getItem__java_lang_String__java_lang_Object(id_2);
   if (!$Equality.$same(item_1, null)) {
    this.f_dataProvider__org_patternfly_component_CardView_.m_select__java_lang_Object__boolean__void(item_1, Boolean.m_booleanValue__java_lang_Boolean__boolean(selected_1));
   }
  }));
 }
 /** @override @nodts */
 m_updateSelection__org_patternfly_dataprovider_SelectionInfo__void(/** SelectionInfo<T> */ selectionInfo) {
  for (let $iterator = this.f_dataProvider__org_patternfly_component_CardView_.m_getVisibleItems__java_lang_Iterable().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let id = this.f_dataProvider__org_patternfly_component_CardView_.m_getId__java_lang_Object__java_lang_String(item);
    let selector = By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_cardViewItem__org_patternfly_core_Dataset, id).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(CardView.f_SELECT_ITEM_SELECTOR__org_patternfly_component_CardView_);
    this.f_itemSelect__org_patternfly_component_CardView_.m_updateSelection__org_jboss_elemento_By__boolean__void_$pp_org_patternfly_component(selector, selectionInfo.m_isSelected__java_lang_Object__boolean(item));
   }
  }
 }
 /** @override @nodts */
 m_updateSortInfo__org_patternfly_dataprovider_SortInfo__void(/** SortInfo<T> */ sortInfo) {}
 /** @nodts @return {CardView<T>} */
 m_compact__org_patternfly_component_CardView() {
  this.f_compact__org_patternfly_component_CardView_ = true;
  return this;
 }
 /** @nodts @return {CardView<T>} */
 m_hoverable__org_patternfly_component_CardView() {
  this.f_hoverable__org_patternfly_component_CardView_ = true;
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CardView<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_CardView();
 }
 /** @nodts */
 static $clinit() {
  CardView.$clinit = () =>{};
  CardView.$loadModules();
  BaseComponent.$clinit();
  CardView.f_SELECT_ITEM_SELECTOR__org_patternfly_component_CardView_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_head__org_patternfly_layout_Classes], j_l_String)))).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_layout_Classes], j_l_String))))).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(By.m_element__java_lang_String__org_jboss_elemento_By('input').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_attribute__java_lang_String__java_lang_String__org_jboss_elemento_By('type', 'checkbox')));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardView;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Card = goog.module.get('org.patternfly.component.Card$impl');
  ItemSelect = goog.module.get('org.patternfly.component.ItemSelect$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {By} @nodts*/
CardView.f_SELECT_ITEM_SELECTOR__org_patternfly_component_CardView_;
org_patternfly_dataprovider_Display.$markImplementor(CardView);
$Util.$setClassMetadata(CardView, 'org.patternfly.component.CardView');

exports = CardView;

//# sourceMappingURL=CardView.js.map

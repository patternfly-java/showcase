goog.module('org.patternfly.component.DataList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const org_patternfly_dataprovider_Display = goog.require('org.patternfly.dataprovider.Display$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let HandlerRegistrations = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistrations$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Display = goog.forwardDeclare('org.patternfly.component.DataList.Display$impl');
let ExpandableBody = goog.forwardDeclare('org.patternfly.component.DataList.ExpandableBody$impl');
let ExpandableContent = goog.forwardDeclare('org.patternfly.component.DataList.ExpandableContent$impl');
let Item = goog.forwardDeclare('org.patternfly.component.DataList.Item$impl');
let ItemAction = goog.forwardDeclare('org.patternfly.component.DataList.ItemAction$impl');
let ItemCell = goog.forwardDeclare('org.patternfly.component.DataList.ItemCell$impl');
let ItemContent = goog.forwardDeclare('org.patternfly.component.DataList.ItemContent$impl');
let ItemControl = goog.forwardDeclare('org.patternfly.component.DataList.ItemControl$impl');
let ItemRow = goog.forwardDeclare('org.patternfly.component.DataList.ItemRow$impl');
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
 * @extends {BaseComponent<HTMLUListElement, DataList<T>>}
 * @implements {org_patternfly_dataprovider_Display<T>}
 * @deprecated
 */
class DataList extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DataProvider<T>} @nodts*/
  this.f_dataProvider__org_patternfly_component_DataList_;
  /**@type {Display<T>} @nodts*/
  this.f_display__org_patternfly_component_DataList_;
  /**@type {ItemSelect} @nodts*/
  this.f_itemSelect__org_patternfly_component_DataList_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_expandHandler__org_patternfly_component_DataList_;
 }
 /** @nodts @template T_1 @return {DataList<T_1>} */
 static m_dataList__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataList_Display__org_patternfly_component_DataList(/** DataProvider<T_1> */ dataProvider, /** Display<T_1> */ display) {
  DataList.$clinit();
  return /**@type {!DataList<T_1>}*/ (DataList.$create__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataList_Display(dataProvider, display));
 }
 /** @nodts @return {Item} */
 static m_item__org_patternfly_component_DataList_Item() {
  DataList.$clinit();
  return Item.$create__();
 }
 /** @nodts @return {ItemRow} */
 static m_itemRow__org_patternfly_component_DataList_ItemRow() {
  DataList.$clinit();
  return ItemRow.$create__();
 }
 /** @nodts @return {ItemControl} */
 static m_itemControl__org_patternfly_component_DataList_ItemControl() {
  DataList.$clinit();
  return ItemControl.$create__();
 }
 /** @nodts @return {ItemContent} */
 static m_itemContent__org_patternfly_component_DataList_ItemContent() {
  DataList.$clinit();
  return ItemContent.$create__();
 }
 /** @nodts @return {ItemAction} */
 static m_itemAction__org_patternfly_component_DataList_ItemAction() {
  DataList.$clinit();
  return ItemAction.$create__();
 }
 /** @nodts @return {ItemCell} */
 static m_itemCell__org_patternfly_component_DataList_ItemCell() {
  DataList.$clinit();
  return ItemCell.$create__();
 }
 /** @nodts @return {ExpandableContent} */
 static m_expandableContent__org_patternfly_component_DataList_ExpandableContent() {
  DataList.$clinit();
  return ExpandableContent.$create__();
 }
 /** @nodts @return {ExpandableBody} */
 static m_expandableBody__org_patternfly_component_DataList_ExpandableBody() {
  DataList.$clinit();
  return ExpandableBody.$create__();
 }
 /** @nodts @template T @return {!DataList<T>} */
 static $create__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataList_Display(/** DataProvider<T> */ dataProvider, /** Display<T> */ display) {
  DataList.$clinit();
  let $instance = new DataList();
  $instance.$ctor__org_patternfly_component_DataList__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataList_Display__void(dataProvider, display);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_DataList__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataList_Display__void(/** DataProvider<T> */ dataProvider, /** Display<T> */ display) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('role', Classes.f_list__org_patternfly_layout_Classes), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), 'DataList');
  this.f_dataProvider__org_patternfly_component_DataList_ = dataProvider;
  this.f_display__org_patternfly_component_DataList_ = display;
  this.f_itemSelect__org_patternfly_component_DataList_ = ItemSelect.$create__elemental2_dom_HTMLElement(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DataList<T>} */
 m_that__org_patternfly_component_DataList() {
  return this;
 }
 /** @override @nodts */
 m_showItems__java_lang_Iterable__org_patternfly_dataprovider_PageInfo__void(/** Iterable<T> */ items, /** PageInfo */ pageInfo) {
  this.f_itemSelect__org_patternfly_component_DataList_.m_removeSelectHandler__void_$pp_org_patternfly_component();
  this.m_removeExpandHandler__void_$p_org_patternfly_component_DataList();
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let id = this.f_dataProvider__org_patternfly_component_DataList_.m_getId__java_lang_Object__java_lang_String(item);
    let li = /**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_dataListItem__org_patternfly_core_Dataset, id), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_labelledBy__org_patternfly_layout_Classes, id), HTMLContainerBuilder));
    this.f_display__org_patternfly_component_DataList_.m_render__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_dataprovider_DataProvider__java_lang_Object__void(li, this.f_dataProvider__org_patternfly_component_DataList_, item);
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(li);
   }
  }
  this.f_itemSelect__org_patternfly_component_DataList_.m_bindSelectHandler__org_jboss_elemento_By__java_util_function_Function__java_util_function_BiConsumer__void_$pp_org_patternfly_component(DataList.f_SELECT_ITEM_SELECTOR__org_patternfly_component_DataList_, j_u_function_Function.$adapt((checkbox) =>{
   let checkbox_1 = /**@type {HTMLInputElement}*/ ($Casts.$to(checkbox, HTMLInputElement_$Overlay));
   let itemElement = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(checkbox_1, By.m_data__java_lang_String__org_jboss_elemento_By(Dataset.f_dataListItem__org_patternfly_core_Dataset));
   if (!$Equality.$same(itemElement, null)) {
    return /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(itemElement.dataset, Dataset.f_dataListItem__org_patternfly_core_Dataset), j_l_String));
   }
   return null;
  }), BiConsumer.$adapt((id_1, selected) =>{
   let id_2 = /**@type {?string}*/ ($Casts.$to(id_1, j_l_String));
   let selected_1 = /**@type {?boolean}*/ ($Casts.$to(selected, Boolean));
   let item_1 = this.f_dataProvider__org_patternfly_component_DataList_.m_getItem__java_lang_String__java_lang_Object(id_2);
   if (!$Equality.$same(item_1, null)) {
    this.f_dataProvider__org_patternfly_component_DataList_.m_select__java_lang_Object__boolean__void(item_1, Boolean.m_booleanValue__java_lang_Boolean__boolean(selected_1));
   }
  }));
  this.m_bindExpandHandler__void_$p_org_patternfly_component_DataList();
 }
 /** @override @nodts */
 m_updateSelection__org_patternfly_dataprovider_SelectionInfo__void(/** SelectionInfo<T> */ selectionInfo) {
  for (let $iterator = this.f_dataProvider__org_patternfly_component_DataList_.m_getVisibleItems__java_lang_Iterable().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let id = this.f_dataProvider__org_patternfly_component_DataList_.m_getId__java_lang_Object__java_lang_String(item);
    this.f_itemSelect__org_patternfly_component_DataList_.m_updateSelection__org_jboss_elemento_By__boolean__void_$pp_org_patternfly_component(By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_dataListItem__org_patternfly_core_Dataset, id).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(DataList.f_SELECT_ITEM_SELECTOR__org_patternfly_component_DataList_), selectionInfo.m_isSelected__java_lang_Object__boolean(item));
   }
  }
 }
 /** @override @nodts */
 m_updateSortInfo__org_patternfly_dataprovider_SortInfo__void(/** SortInfo<T> */ sortInfo) {}
 /** @nodts */
 m_bindExpandHandler__void_$p_org_patternfly_component_DataList() {
  let handler = /**@type {!ArrayList<HandlerRegistration>}*/ (ArrayList.$create__());
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/**@type {HTMLUListElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), DataList.f_TOGGLE_SELECTOR__org_patternfly_component_DataList_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let htmlElement = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let itemElement = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(htmlElement, By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_layout_Classes], j_l_String)))));
    if (!$Equality.$same(itemElement, null)) {
     let contentElement = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(itemElement, DataList.f_EXPANDABLE_CONTENT_SELECTOR__org_patternfly_component_DataList_);
     if (!$Equality.$same(contentElement, null)) {
      let itemId = /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(itemElement.dataset, Dataset.f_dataListItem__org_patternfly_core_Dataset), j_l_String));
      if (!$Equality.$same(itemId, null)) {
       let buttonId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(itemId, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)));
       let contentId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(itemId, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_layout_Classes], j_l_String)));
       htmlElement.id = buttonId;
       Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(htmlElement, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataList.f_ARIA__org_patternfly_component_DataList_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.f_labelledBy__org_patternfly_layout_Classes), j_l_String.m_valueOf__java_lang_Object__java_lang_String(itemId) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(buttonId));
       Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(htmlElement, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataList.f_ARIA__org_patternfly_component_DataList_) + 'expanded', false);
       Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(htmlElement, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataList.f_ARIA__org_patternfly_component_DataList_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.f_controls__org_patternfly_layout_Classes), contentId);
       contentElement.id = contentId;
       contentElement.hidden = true;
       Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(contentElement, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataList.f_ARIA__org_patternfly_component_DataList_) + 'label', 'Details');
       handler.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(htmlElement, EventType.f_click__org_jboss_elemento_EventType, (evt) =>{
        let evt_1 = /**@type {MouseEvent}*/ ($Casts.$to(evt, MouseEvent_$Overlay));
        if (itemElement.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String('expanded'))) {
         itemElement.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
         Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(htmlElement, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataList.f_ARIA__org_patternfly_component_DataList_) + 'expanded', false);
         contentElement.hidden = true;
        } else {
         itemElement.classList.add(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
         Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(htmlElement, j_l_String.m_valueOf__java_lang_Object__java_lang_String(DataList.f_ARIA__org_patternfly_component_DataList_) + 'expanded', true);
         contentElement.removeAttribute('hidden');
        }
       }));
      }
     }
    }
   }
  }
  if (!handler.isEmpty()) {
   this.f_expandHandler__org_patternfly_component_DataList_ = HandlerRegistrations.m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration(/**@type {Array<HandlerRegistration>}*/ ($Arrays.$castTo(handler.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {!Array<HandlerRegistration>}*/ ($Arrays.$create([0], HandlerRegistration))), HandlerRegistration, 1)));
  }
 }
 /** @nodts */
 m_removeExpandHandler__void_$p_org_patternfly_component_DataList() {
  if (!$Equality.$same(this.f_expandHandler__org_patternfly_component_DataList_, null)) {
   this.f_expandHandler__org_patternfly_component_DataList_.m_removeHandler__void();
   this.f_expandHandler__org_patternfly_component_DataList_ = null;
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {DataList<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_DataList();
 }
 /** @nodts */
 static $clinit() {
  DataList.$clinit = () =>{};
  DataList.$loadModules();
  BaseComponent.$clinit();
  DataList.f_TOGGLE_SELECTOR__org_patternfly_component_DataList_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))).m_child__org_jboss_elemento_By__org_jboss_elemento_By(By.m_element__java_lang_String__org_jboss_elemento_By('button'));
  DataList.f_SELECT_ITEM_SELECTOR__org_patternfly_component_DataList_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_check__org_patternfly_layout_Classes], j_l_String)))).m_child__org_jboss_elemento_By__org_jboss_elemento_By(By.m_element__java_lang_String__org_jboss_elemento_By('input').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_attribute__java_lang_String__java_lang_String__org_jboss_elemento_By('type', 'checkbox')));
  DataList.f_EXPANDABLE_CONTENT_SELECTOR__org_patternfly_component_DataList_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataList__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_layout_Classes], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataList;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
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
  ExpandableBody = goog.module.get('org.patternfly.component.DataList.ExpandableBody$impl');
  ExpandableContent = goog.module.get('org.patternfly.component.DataList.ExpandableContent$impl');
  Item = goog.module.get('org.patternfly.component.DataList.Item$impl');
  ItemAction = goog.module.get('org.patternfly.component.DataList.ItemAction$impl');
  ItemCell = goog.module.get('org.patternfly.component.DataList.ItemCell$impl');
  ItemContent = goog.module.get('org.patternfly.component.DataList.ItemContent$impl');
  ItemControl = goog.module.get('org.patternfly.component.DataList.ItemControl$impl');
  ItemRow = goog.module.get('org.patternfly.component.DataList.ItemRow$impl');
  ItemSelect = goog.module.get('org.patternfly.component.ItemSelect$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DataList.f_ARIA__org_patternfly_component_DataList_ = 'aria-';
/**@type {By} @nodts*/
DataList.f_TOGGLE_SELECTOR__org_patternfly_component_DataList_;
/**@type {By} @nodts*/
DataList.f_SELECT_ITEM_SELECTOR__org_patternfly_component_DataList_;
/**@type {By} @nodts*/
DataList.f_EXPANDABLE_CONTENT_SELECTOR__org_patternfly_component_DataList_;
org_patternfly_dataprovider_Display.$markImplementor(DataList);
$Util.$setClassMetadata(DataList, 'org.patternfly.component.DataList');

exports = DataList;

//# sourceMappingURL=DataList.js.map

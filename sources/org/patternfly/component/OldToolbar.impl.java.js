goog.module('org.patternfly.component.OldToolbar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Display = goog.require('org.patternfly.dataprovider.Display$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let HandlerRegistrations = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistrations$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let BulkSelect = goog.forwardDeclare('org.patternfly.component.OldToolbar.BulkSelect$impl');
let Content = goog.forwardDeclare('org.patternfly.component.OldToolbar.Content$impl');
let Group = goog.forwardDeclare('org.patternfly.component.OldToolbar.Group$impl');
let Item = goog.forwardDeclare('org.patternfly.component.OldToolbar.Item$impl');
let SortMenu = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortMenu$impl');
let SortOptions = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortOptions$impl');
let Pagination = goog.forwardDeclare('org.patternfly.component.Pagination$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let PageInfo = goog.forwardDeclare('org.patternfly.dataprovider.PageInfo$impl');
let SelectionInfo = goog.forwardDeclare('org.patternfly.dataprovider.SelectionInfo$impl');
let SortInfo = goog.forwardDeclare('org.patternfly.dataprovider.SortInfo$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template T
 * @extends {BaseComponent<HTMLDivElement, OldToolbar<T>>}
 * @implements {Display<T>}
 * @implements {Attachable}
 * @deprecated
 */
class OldToolbar extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {DataProvider<T>} @nodts*/
  this.f_dataProvider__org_patternfly_component_OldToolbar_;
  /**@type {BulkSelect} @nodts*/
  this.f_bulkSelect__org_patternfly_component_OldToolbar_;
  /**@type {SortMenu<T>} @nodts*/
  this.f_sortMenu__org_patternfly_component_OldToolbar_;
  /**@type {Pagination} @nodts*/
  this.f_pagination__org_patternfly_component_OldToolbar_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_toggleGroupHandler__org_patternfly_component_OldToolbar_;
 }
 /** @nodts @template T_1 @return {OldToolbar<T_1>} */
 static m_toolbar__org_patternfly_component_OldToolbar() {
  OldToolbar.$clinit();
  return /**@type {!OldToolbar<T_1>}*/ (OldToolbar.$create__org_patternfly_dataprovider_DataProvider(null));
 }
 /** @nodts @template T_1 @return {OldToolbar<T_1>} */
 static m_toolbar__org_patternfly_dataprovider_DataProvider__org_patternfly_component_OldToolbar(/** DataProvider<T_1> */ dataProvider) {
  OldToolbar.$clinit();
  return /**@type {!OldToolbar<T_1>}*/ (OldToolbar.$create__org_patternfly_dataprovider_DataProvider(dataProvider));
 }
 /** @nodts @return {Content} */
 static m_content__org_patternfly_component_OldToolbar_Content() {
  OldToolbar.$clinit();
  return Content.$create__();
 }
 /** @nodts @return {Group} */
 static m_group__org_patternfly_component_OldToolbar_Group() {
  OldToolbar.$clinit();
  return Group.$create__();
 }
 /** @nodts @return {Item} */
 static m_item__org_patternfly_component_OldToolbar_Item() {
  OldToolbar.$clinit();
  return Item.$create__();
 }
 /** @nodts @return {BulkSelect} */
 static m_bulkSelect__org_patternfly_component_OldToolbar_BulkSelect() {
  OldToolbar.$clinit();
  return BulkSelect.$create__();
 }
 /** @nodts @template T_1 @return {SortMenu<T_1>} */
 static m_sortMenu__org_patternfly_component_OldToolbar_SortOptions__org_patternfly_component_OldToolbar_SortMenu(/** SortOptions<T_1> */ sortOptions) {
  OldToolbar.$clinit();
  return /**@type {!SortMenu<T_1>}*/ (SortMenu.$create__org_patternfly_component_OldToolbar_SortOptions(sortOptions));
 }
 /** @nodts @template T @return {!OldToolbar<T>} */
 static $create__org_patternfly_dataprovider_DataProvider(/** DataProvider<T> */ dataProvider) {
  OldToolbar.$clinit();
  let $instance = new OldToolbar();
  $instance.$ctor__org_patternfly_component_OldToolbar__org_patternfly_dataprovider_DataProvider__void(dataProvider);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_OldToolbar__org_patternfly_dataprovider_DataProvider__void(/** DataProvider<T> */ dataProvider) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), 'Toolbar');
  this.f_dataProvider__org_patternfly_component_OldToolbar_ = dataProvider;
  Attachable.m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.m_bindToggleGroupHandler__void_$p_org_patternfly_component_OldToolbar();
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.m_removeToggleGroupHandler__void_$p_org_patternfly_component_OldToolbar();
 }
 /** @nodts @return {OldToolbar<T>} */
 m_that__org_patternfly_component_OldToolbar() {
  return this;
 }
 /** @nodts @return {OldToolbar<T>} */
 m_add__org_patternfly_component_OldToolbar_Content__org_patternfly_component_OldToolbar(/** Content */ content) {
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(content.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  content.m_bindToolbar__org_patternfly_component_OldToolbar__void_$p_org_patternfly_component_OldToolbar_Content(this);
  return this;
 }
 /** @override @nodts */
 m_showItems__java_lang_Iterable__org_patternfly_dataprovider_PageInfo__void(/** Iterable<T> */ items, /** PageInfo */ pageInfo) {
  if (!$Equality.$same(this.f_pagination__org_patternfly_component_OldToolbar_, null)) {
   this.f_pagination__org_patternfly_component_OldToolbar_.m_update__org_patternfly_dataprovider_PageInfo__void_$pp_org_patternfly_component(pageInfo);
  }
  if (!$Equality.$same(this.f_bulkSelect__org_patternfly_component_OldToolbar_, null)) {
   this.f_bulkSelect__org_patternfly_component_OldToolbar_.m_update__org_patternfly_dataprovider_PageInfo__void_$p_org_patternfly_component_OldToolbar_BulkSelect(pageInfo);
  }
 }
 /** @override @nodts */
 m_updateSelection__org_patternfly_dataprovider_SelectionInfo__void(/** SelectionInfo<T> */ selectionInfo) {
  if (!$Equality.$same(this.f_bulkSelect__org_patternfly_component_OldToolbar_, null)) {
   let selected = selectionInfo.m_getSelectionCount__int();
   let filtered = $Primitives.narrowLongToInt(/**@type {Stream<T>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(this.f_dataProvider__org_patternfly_component_OldToolbar_.m_getFilteredItems__java_lang_Iterable().m_spliterator__java_util_Spliterator(), false)).m_count__long());
   let visible = $Primitives.narrowLongToInt(/**@type {Stream<T>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(this.f_dataProvider__org_patternfly_component_OldToolbar_.m_getVisibleItems__java_lang_Iterable().m_spliterator__java_util_Spliterator(), false)).m_count__long());
   let all = $Primitives.narrowLongToInt(/**@type {Stream<T>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(this.f_dataProvider__org_patternfly_component_OldToolbar_.m_getAllItems__java_lang_Iterable().m_spliterator__java_util_Spliterator(), false)).m_count__long());
   this.f_bulkSelect__org_patternfly_component_OldToolbar_.m_update__int__int__int__int__void_$p_org_patternfly_component_OldToolbar_BulkSelect(selected, filtered, visible, all);
  }
 }
 /** @override @nodts */
 m_updateSortInfo__org_patternfly_dataprovider_SortInfo__void(/** SortInfo<T> */ sortInfo) {
  if (!$Equality.$same(this.f_sortMenu__org_patternfly_component_OldToolbar_, null)) {
   this.f_sortMenu__org_patternfly_component_OldToolbar_.m_update__org_patternfly_dataprovider_SortInfo__void_$p_org_patternfly_component_OldToolbar_SortMenu(sortInfo);
  }
 }
 /** @nodts */
 m_bindToggleGroupHandler__void_$p_org_patternfly_component_OldToolbar() {
  let handler = /**@type {!ArrayList<HandlerRegistration>}*/ (ArrayList.$create__());
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), OldToolbar.f_TOGGLE_GROUP_SELECTOR__org_patternfly_component_OldToolbar_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let htmlElement = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let toggleGroupParent = /**@type {HTMLElement}*/ ($Casts.$to(htmlElement.parentNode, HTMLElement_$Overlay));
    toggleGroupParent.classList.add(Classes.f_toggleGroupContainer__org_patternfly_layout_Classes);
    let expandableContentId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_layout_Classes], j_l_String)));
    let expandableContentGroup = /**@type {HTMLDivElement}*/ ($Casts.$to(OldToolbar.m_group__org_patternfly_component_OldToolbar_Group().m_element__elemental2_dom_HTMLElement(), $Overlay));
    let expandableContent = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(expandableContentId), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(expandableContentGroup), HTMLContainerBuilder));
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLDivElement}*/ ($Casts.$to(expandableContent.m_element__elemental2_dom_HTMLElement(), $Overlay)), false);
    toggleGroupParent.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(expandableContent.m_element__elemental2_dom_HTMLElement(), $Overlay)));
    let e = /**@type {HTMLButtonElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(htmlElement, OldToolbar.f_TOGGLE_SELECTOR__org_patternfly_component_OldToolbar_), HTMLButtonElement_$Overlay));
    if (!$Equality.$same(e, null)) {
     let button = Elements.m_button__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(e);
     /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(button.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Classes.f_hasPopup__org_patternfly_layout_Classes, false), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.f_controls__org_patternfly_layout_Classes, expandableContentId);
     handler.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {HTMLButtonElement}*/ ($Casts.$to(button.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)), EventType.f_click__org_jboss_elemento_EventType, (evt) =>{
      let evt_1 = /**@type {MouseEvent}*/ ($Casts.$to(evt, MouseEvent_$Overlay));
      let expanded = Boolean.m_parseBoolean__java_lang_String__boolean(/**@type {HTMLButtonElement}*/ ($Casts.$to(button.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).getAttribute('aria-expanded'));
      if (expanded) {
       for (let $iterator_1 = Elements.m_children__elemental2_dom_HTMLElement__java_lang_Iterable(expandableContentGroup).m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
        let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), HTMLElement_$Overlay));
        {
         htmlElement.appendChild(element);
        }
       }
       button.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', false);
       expandableContent.m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
       Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLDivElement}*/ ($Casts.$to(expandableContent.m_element__elemental2_dom_HTMLElement(), $Overlay)), false);
      } else {
       for (let $iterator_2 = Elements.m_children__elemental2_dom_HTMLElement__java_lang_Iterable(htmlElement).m_iterator__java_util_Iterator(); $iterator_2.m_hasNext__boolean(); ) {
        let element_1 = /**@type {HTMLElement}*/ ($Casts.$to($iterator_2.m_next__java_lang_Object(), HTMLElement_$Overlay));
        {
         if (element_1.classList.contains(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String))))) {
          continue;
         }
         expandableContentGroup.appendChild(element_1);
        }
       }
       button.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder('expanded', true);
       expandableContent.m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
       Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLDivElement}*/ ($Casts.$to(expandableContent.m_element__elemental2_dom_HTMLElement(), $Overlay)), true);
      }
     }));
    }
   }
  }
  if (!handler.isEmpty()) {
   this.f_toggleGroupHandler__org_patternfly_component_OldToolbar_ = HandlerRegistrations.m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration(/**@type {Array<HandlerRegistration>}*/ ($Arrays.$castTo(handler.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {!Array<HandlerRegistration>}*/ ($Arrays.$create([0], HandlerRegistration))), HandlerRegistration, 1)));
  }
 }
 /** @nodts */
 m_removeToggleGroupHandler__void_$p_org_patternfly_component_OldToolbar() {
  if (!$Equality.$same(this.f_toggleGroupHandler__org_patternfly_component_OldToolbar_, null)) {
   this.f_toggleGroupHandler__org_patternfly_component_OldToolbar_.m_removeHandler__void();
   this.f_toggleGroupHandler__org_patternfly_component_OldToolbar_ = null;
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {OldToolbar<T>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_OldToolbar();
 }
 /** @nodts */
 static $clinit() {
  OldToolbar.$clinit = () =>{};
  OldToolbar.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  OldToolbar.f_TOGGLE_GROUP_SELECTOR__org_patternfly_component_OldToolbar_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_layout_Classes));
  OldToolbar.f_TOGGLE_SELECTOR__org_patternfly_component_OldToolbar_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_dataToolbar__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))).m_desc__org_jboss_elemento_By__org_jboss_elemento_By(By.m_element__java_lang_String__org_jboss_elemento_By('button'));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OldToolbar;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  HandlerRegistrations = goog.module.get('org.gwtproject.event.shared.HandlerRegistrations$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  BulkSelect = goog.module.get('org.patternfly.component.OldToolbar.BulkSelect$impl');
  Content = goog.module.get('org.patternfly.component.OldToolbar.Content$impl');
  Group = goog.module.get('org.patternfly.component.OldToolbar.Group$impl');
  Item = goog.module.get('org.patternfly.component.OldToolbar.Item$impl');
  SortMenu = goog.module.get('org.patternfly.component.OldToolbar.SortMenu$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {By} @nodts*/
OldToolbar.f_TOGGLE_GROUP_SELECTOR__org_patternfly_component_OldToolbar_;
/**@type {By} @nodts*/
OldToolbar.f_TOGGLE_SELECTOR__org_patternfly_component_OldToolbar_;
Display.$markImplementor(OldToolbar);
Attachable.$markImplementor(OldToolbar);
$Util.$setClassMetadata(OldToolbar, 'org.patternfly.component.OldToolbar');

exports = OldToolbar;

//# sourceMappingURL=OldToolbar.js.map

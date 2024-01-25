goog.module('org.patternfly.component.navigation.Navigation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let ExpandableNavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
let NavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.NavigationGroup$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let NavigationType = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType$impl');
let Horizontal = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Horizontal$impl');
let Vertical = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Vertical$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Navigation>}
 */
class Navigation extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {NavigationType} @nodts*/
  this.f_type__org_patternfly_component_navigation_Navigation_;
  /**@type {HTMLElement} @nodts*/
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, NavigationItem>} @nodts*/
  this.f_items__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, NavigationGroup>} @nodts*/
  this.f_groups__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, ExpandableNavigationGroup>} @nodts*/
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_;
  /**@type {SelectHandler<NavigationItem>} @nodts*/
  this.f_onSelect__org_patternfly_component_navigation_Navigation_;
  /**@type {ToggleHandler<ExpandableNavigationGroup>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_navigation_Navigation_;
 }
 /** @nodts @return {Navigation} */
 static m_navigation__org_patternfly_component_navigation_NavigationType__org_patternfly_component_navigation_Navigation(/** NavigationType */ type) {
  Navigation.$clinit();
  return Navigation.$create__org_patternfly_component_navigation_NavigationType(type);
 }
 /** @nodts @return {!Navigation} */
 static $create__org_patternfly_component_navigation_NavigationType(/** NavigationType */ type) {
  Navigation.$clinit();
  let $instance = new Navigation();
  $instance.$ctor__org_patternfly_component_navigation_Navigation__org_patternfly_component_navigation_NavigationType__void(type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_Navigation__org_patternfly_component_navigation_NavigationType__void(/** NavigationType */ type) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Navigation__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_type__org_patternfly_component_navigation_Navigation_ = type;
  this.f_items__org_patternfly_component_navigation_Navigation_ = /**@type {!HashMap<?string, NavigationItem>}*/ (HashMap.$create__());
  this.f_groups__org_patternfly_component_navigation_Navigation_ = /**@type {!HashMap<?string, NavigationGroup>}*/ (HashMap.$create__());
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_ = /**@type {!HashMap<?string, ExpandableNavigationGroup>}*/ (HashMap.$create__());
  if ($Equality.$same(type, Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Local');
  } else {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Global');
  }
  if (Horizontal.$isInstance(type)) {
   if ($Equality.$same(type, Horizontal.f_primary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_horizontal__org_patternfly_style_Classes)], j_l_String)));
   } else if ($Equality.$same(type, Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_horizontalSubnav__org_patternfly_style_Classes)], j_l_String)));
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scroll__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll left'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_scrollLeft__void_$p_org_patternfly_component_navigation_Navigation();
   }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_angleLeft__org_patternfly_style_PredefinedIcon)), HTMLContainerBuilder)));
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_horizontal__org_patternfly_style_Classes, Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scroll__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll right'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_2) =>{
    let e_3 = /**@type {MouseEvent}*/ ($Casts.$to(e_2, MouseEvent_$Overlay));
    this.m_scrollRight__void_$p_org_patternfly_component_navigation_Navigation();
   }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_angleRight__org_patternfly_style_PredefinedIcon)), HTMLContainerBuilder)));
  } else if (Vertical.$isInstance(type)) {
   let vt = /**@type {Vertical}*/ (type);
   switch (vt.ordinal()) {
    case Vertical.$ordinal_flat__org_patternfly_component_navigation_NavigationType_Vertical: 
    case Vertical.$ordinal_expandable__org_patternfly_component_navigation_NavigationType_Vertical: 
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
     break;
    case Vertical.$ordinal_grouped__org_patternfly_component_navigation_NavigationType_Vertical: 
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = this.m_element__elemental2_dom_HTMLElement();
     break;
    case Vertical.$ordinal_drillDown__org_patternfly_component_navigation_NavigationType_Vertical: 
    case Vertical.$ordinal_flyout__org_patternfly_component_navigation_NavigationType_Vertical: 
     Logger.m_nyi__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'Drill-down and fly-out not yet implemented');
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
     break;
    default: 
     Logger.m_unknown__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'Unknown navigation type: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(type));
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
   }
  } else {
   Logger.m_unknown__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'Unknown navigation type: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(type));
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }
 }
 /** @nodts @template T @return {Navigation} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_Navigation(/** Iterable<T> */ items, /** j_u_function_Function<T, NavigationItem> */ display) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
   Logger.m_unsupported__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'addItem(NavigationItem) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let navigationItem = /**@type {NavigationItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), NavigationItem));
    this.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(navigationItem);
   }
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
   Logger.m_unsupported__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'addItem(NavigationItem) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  this.f_items__org_patternfly_component_navigation_Navigation_.put(item.f_id__org_patternfly_component_navigation_NavigationItem, item);
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addGroup__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical) || $Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical) || Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_)) {
   Logger.m_unsupported__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'addGroup(NavigationGroup) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  this.f_groups__org_patternfly_component_navigation_Navigation_.put(group.f_id__org_patternfly_component_navigation_NavigationGroup, group);
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(group.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical) || $Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical) || Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_)) {
   Logger.m_unsupported__org_patternfly_component_ComponentType__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'addGroup(ExpandableNavigationGroup) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  group.m_collapse__void_$pp_org_patternfly_component_navigation();
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.put(group.f_id__org_patternfly_component_navigation_ExpandableNavigationGroup, group);
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  if (!$Equality.$same(this.f_toggleHandler__org_patternfly_component_navigation_Navigation_, null)) {
   group.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup = this.f_toggleHandler__org_patternfly_component_navigation_Navigation_;
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addDivider__org_patternfly_component_navigation_Navigation() {
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType).m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {Navigation} */
 m_theme__org_patternfly_style_Brightness__org_patternfly_component_navigation_Navigation(/** Brightness */ theme) {
  if (Validation.m_verifyEnum__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType(), this.m_element__elemental2_dom_HTMLElement(), 'theme', theme, Brightness.f_dark__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_style_Brightness], Brightness)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([theme.m_modifier__java_lang_String()], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_that__org_patternfly_component_navigation_Navigation() {
  return this;
 }
 /** @nodts @return {Navigation} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_navigation_Navigation(/** SelectHandler<NavigationItem> */ selectHandler) {
  this.f_onSelect__org_patternfly_component_navigation_Navigation_ = selectHandler;
  return this;
 }
 /** @nodts @return {Navigation} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_navigation_Navigation(/** ToggleHandler<ExpandableNavigationGroup> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_navigation_Navigation_ = toggleHandler;
  return this;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ itemId) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(itemId), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(itemId), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_navigation_NavigationItem__void(/** NavigationItem */ item) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(item, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(/** NavigationItem */ item, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation();
   item.m_select__void_$pp_org_patternfly_component_navigation();
   if (fireEvent && !$Equality.$same(this.f_onSelect__org_patternfly_component_navigation_Navigation_, null)) {
    this.f_onSelect__org_patternfly_component_navigation_Navigation_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, true);
   }
   if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical)) {
    this.m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation();
    this.m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(item.f_a__org_patternfly_component_navigation_NavigationItem, fireEvent);
   }
  } else {
   this.m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation();
   this.m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation();
  }
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation() {
  for (let $iterator = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
    element.removeAttribute(Aria.f_current__org_patternfly_core_Aria);
   }
  }
 }
 /** @nodts */
 m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation() {
  for (let $iterator = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_.m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   }
  }
 }
 /** @nodts */
 m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(/** HTMLElement */ element, /** boolean */ fireEvent) {
  let li = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(element, Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_);
  if (!$Equality.$same(li, null)) {
   li.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   let groupId = /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(li.dataset, Dataset.f_navigationGroup__org_patternfly_core_Dataset), j_l_String));
   let group = this.m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$p_org_patternfly_component_navigation_Navigation(groupId);
   if (!$Equality.$same(group, null)) {
    group.m_expand__void_$pp_org_patternfly_component_navigation();
    if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_navigation_Navigation_, null)) {
     this.f_toggleHandler__org_patternfly_component_navigation_Navigation_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), group, true);
    }
   }
   let parent = li.parentElement;
   if ($Overlay.$isInstance(parent)) {
    this.m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(/**@type {HTMLElement}*/ ($Casts.$to(parent, $Overlay)), fireEvent);
   }
  }
 }
 /** @nodts @return {NavigationItem} */
 m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(/** ?string */ id) {
  let item = /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_Navigation_.get(id), NavigationItem));
  if ($Equality.$same(item, null)) {
   if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
    for (let $iterator = this.f_groups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let group = /**@type {NavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), NavigationGroup));
     {
      item = group.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
      if (!$Equality.$same(item, null)) {
       break;
      }
     }
    }
   } else if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical)) {
    for (let $iterator_1 = this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
     let group_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), ExpandableNavigationGroup));
     {
      item = group_1.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
      if (!$Equality.$same(item, null)) {
       break;
      }
     }
    }
   }
  }
  return item;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$p_org_patternfly_component_navigation_Navigation(/** ?string */ id) {
  let group = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.get(id), ExpandableNavigationGroup));
  if ($Equality.$same(group, null)) {
   for (let $iterator = this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let nestedGroup = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ExpandableNavigationGroup));
    {
     group = nestedGroup.m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(group, null)) {
      break;
     }
    }
   }
  }
  return group;
 }
 /** @nodts */
 m_scrollLeft__void_$p_org_patternfly_component_navigation_Navigation() {}
 /** @nodts */
 m_scrollRight__void_$p_org_patternfly_component_navigation_Navigation() {}
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_Navigation();
 }
 /** @nodts */
 static $clinit() {
  Navigation.$clinit = () =>{};
  Navigation.$loadModules();
  BaseComponent.$clinit();
  Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_ = By.m_element__java_lang_String__org_jboss_elemento_By('a').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))));
  Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_ = By.m_element__java_lang_String__org_jboss_elemento_By('li').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_style_Classes), /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Navigation;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  ExpandableNavigationGroup = goog.module.get('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
  NavigationGroup = goog.module.get('org.patternfly.component.navigation.NavigationGroup$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Horizontal = goog.module.get('org.patternfly.component.navigation.NavigationType.Horizontal$impl');
  Vertical = goog.module.get('org.patternfly.component.navigation.NavigationType.Vertical$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {By} @nodts*/
Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_;
/**@type {By} @nodts*/
Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_;
$Util.$setClassMetadata(Navigation, 'org.patternfly.component.navigation.Navigation');

exports = Navigation;

//# sourceMappingURL=Navigation.js.map

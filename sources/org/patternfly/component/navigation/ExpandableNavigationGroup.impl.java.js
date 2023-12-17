goog.module('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NavigationSubComponent = goog.require('org.patternfly.component.navigation.NavigationSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.style.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NavigationSubComponent<HTMLLIElement, ExpandableNavigationGroup>}
 */
class ExpandableNavigationGroup extends NavigationSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_navigation_ExpandableNavigationGroup;
  /**@type {Map<?string, NavigationItem>} @nodts*/
  this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {Map<?string, ExpandableNavigationGroup>} @nodts*/
  this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {HTMLButtonElement} @nodts*/
  this.f_button__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {HTMLElement} @nodts*/
  this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_;
  /**@type {ToggleHandler<ExpandableNavigationGroup>} @nodts*/
  this.f_onToggle__org_patternfly_component_navigation_ExpandableNavigationGroup;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 static m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ?string */ id, /** ?string */ text) {
  ExpandableNavigationGroup.$clinit();
  return ExpandableNavigationGroup.$create__java_lang_String__java_lang_String(id, text);
 }
 /** @nodts @return {!ExpandableNavigationGroup} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ text) {
  ExpandableNavigationGroup.$clinit();
  let $instance = new ExpandableNavigationGroup();
  $instance.$ctor__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__java_lang_String__void(id, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ text) {
  this.$ctor__org_patternfly_component_navigation_NavigationSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ExpandableNavigationGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_ExpandableNavigationGroup, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_navigationGroup__org_patternfly_core_Dataset, id), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_id__org_patternfly_component_navigation_ExpandableNavigationGroup = id;
  this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_ = /**@type {!HashMap<?string, NavigationItem>}*/ (HashMap.$create__());
  this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_ = /**@type {!HashMap<?string, ExpandableNavigationGroup>}*/ (HashMap.$create__());
  let titleId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init(['title'], j_l_String)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_navigation_ExpandableNavigationGroup_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(titleId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__void_$pp_org_patternfly_component_navigation();
  }), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_style_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_angleRight__org_patternfly_style_PredefinedIcon)), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_subnav__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, titleId), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.m_collapse__void_$pp_org_patternfly_component_navigation();
 }
 /** @nodts @template T @return {ExpandableNavigationGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_ExpandableNavigationGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, NavigationItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let navigationItem = /**@type {NavigationItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), NavigationItem));
    this.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(navigationItem);
   }
  }
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(/** NavigationItem */ item) {
  this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.put(item.f_id__org_patternfly_component_navigation_NavigationItem, item);
  this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(item.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_ExpandableNavigationGroup(/** ExpandableNavigationGroup */ group) {
  this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.put(group.f_id__org_patternfly_component_navigation_ExpandableNavigationGroup, group);
  this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_addDivider__org_patternfly_component_navigation_ExpandableNavigationGroup() {
  this.f_ul__org_patternfly_component_navigation_ExpandableNavigationGroup_.appendChild(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType).m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_that__org_patternfly_component_navigation_ExpandableNavigationGroup() {
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(/** ?string */ id) {
  let item = /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_ExpandableNavigationGroup_.get(id), NavigationItem));
  if ($Equality.$same(item, null)) {
   for (let $iterator = this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let group = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ExpandableNavigationGroup));
    {
     item = group.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(item, null)) {
      break;
     }
    }
   }
  }
  return item;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$pp_org_patternfly_component_navigation(/** ?string */ id) {
  let group = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.get(id), ExpandableNavigationGroup));
  if ($Equality.$same(group, null)) {
   for (let $iterator = this.f_expandableGroups__org_patternfly_component_navigation_ExpandableNavigationGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
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
 m_toggle__void_$pp_org_patternfly_component_navigation() {
  let expanded = /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (expanded) {
   this.m_collapse__void_$pp_org_patternfly_component_navigation();
  } else {
   this.m_expand__void_$pp_org_patternfly_component_navigation();
  }
  if (!$Equality.$same(this.f_onToggle__org_patternfly_component_navigation_ExpandableNavigationGroup, null)) {
   this.f_onToggle__org_patternfly_component_navigation_ExpandableNavigationGroup.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, !expanded);
  }
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component_navigation() {
  /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_button__org_patternfly_component_navigation_ExpandableNavigationGroup_, Aria.f_expanded__org_patternfly_core_Aria, true);
  this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_.removeAttribute(Attributes.f_hidden__org_patternfly_core_Attributes);
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component_navigation() {
  /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String('expanded'));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(this.f_button__org_patternfly_component_navigation_ExpandableNavigationGroup_, Aria.f_expanded__org_patternfly_core_Aria, false);
  this.f_section__org_patternfly_component_navigation_ExpandableNavigationGroup_.hidden = true;
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableNavigationGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_ExpandableNavigationGroup();
 }
 /** @nodts */
 static $clinit() {
  ExpandableNavigationGroup.$clinit = () =>{};
  ExpandableNavigationGroup.$loadModules();
  NavigationSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableNavigationGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.style.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ExpandableNavigationGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_ExpandableNavigationGroup = 'eng';
$Util.$setClassMetadata(ExpandableNavigationGroup, 'org.patternfly.component.navigation.ExpandableNavigationGroup');

exports = ExpandableNavigationGroup;

//# sourceMappingURL=ExpandableNavigationGroup.js.map

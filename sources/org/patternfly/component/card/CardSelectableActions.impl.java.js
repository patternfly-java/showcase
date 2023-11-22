goog.module('org.patternfly.component.card.CardSelectableActions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Radio = goog.forwardDeclare('org.patternfly.component.form.Radio$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.core.SelectionMode$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CardSelectableActions>}
 * @implements {ComponentReference<Card>}
 */
class CardSelectableActions extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Checkbox} @nodts*/
  this.f_checkbox__org_patternfly_component_card_CardSelectableActions;
  /**@type {Radio} @nodts*/
  this.f_radio__org_patternfly_component_card_CardSelectableActions;
  /**@type {Card} @nodts*/
  this.f_card__org_patternfly_component_card_CardSelectableActions_;
 }
 /** @nodts @return {CardSelectableActions} */
 static m_cardSelectableActions__org_patternfly_component_card_CardSelectableActions() {
  CardSelectableActions.$clinit();
  return CardSelectableActions.$create__();
 }
 /** @nodts @return {!CardSelectableActions} */
 static $create__() {
  CardSelectableActions.$clinit();
  let $instance = new CardSelectableActions();
  $instance.$ctor__org_patternfly_component_card_CardSelectableActions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardSelectableActions__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_selectable__org_patternfly_layout_Classes, Classes.f_actions__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_card_Card__void(/** Card */ card) {
  this.f_card__org_patternfly_component_card_CardSelectableActions_ = card;
  if (card.m_isSelectable__boolean_$pp_org_patternfly_component_card() || card.m_isClickable__boolean_$pp_org_patternfly_component_card()) {
   if ($Equality.$same(/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)).id, null) || j_l_String.m_isEmpty__java_lang_String__boolean(/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)).id)) {
    card.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))));
   }
  }
  if (card.m_isClickable__boolean_$pp_org_patternfly_component_card() && !card.m_isSelectable__boolean_$pp_org_patternfly_component_card()) {
   let cardId = /**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)).id;
   let selectId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['select'], j_l_String)));
   let radioName = card.f_name__org_patternfly_component_card_Card;
   if ($Equality.$same(radioName, null)) {
    radioName = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['name', 'fallback'], j_l_String)));
    Logger.m_undefined__org_patternfly_component_ComponentType__java_lang_String__void(ComponentType.f_Card__org_patternfly_component_ComponentType, 'Name is undefined for clickable card \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(cardId) + '\'.\n' + 'You should provide a common name for all clickable cards using \'Card.name(String)\'.\n' + 'Fallback to generated name \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(radioName) + '\', which will cause selection issues!');
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_radio__org_patternfly_component_card_CardSelectableActions = Radio.m_radio__java_lang_String__java_lang_String__org_patternfly_component_form_Radio(selectId, radioName).m_standalone__boolean__org_patternfly_component_form_Radio(false));
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__elemental2_dom_HTMLInputElement().classList.add(Classes.f_screenReader__org_patternfly_layout_Classes);
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__elemental2_dom_HTMLInputElement(), Aria.f_labelledBy__org_patternfly_core_Aria, cardId);
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__elemental2_dom_HTMLInputElement().addEventListener(SelectionMode.f_click__org_patternfly_core_SelectionMode.name(), EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ arg0) =>{
    card.m_click__elemental2_dom_Event__void_$pp_org_patternfly_component_card(arg0);
   }));
   if (/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes))) {
    this.f_radio__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Radio(true);
   }
  } else if (card.m_isSelectable__boolean_$pp_org_patternfly_component_card()) {
   let cardId_1 = /**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)).id;
   let selectId_1 = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['select'], j_l_String)));
   if ($Equality.$same(card.f_selectionMode__org_patternfly_component_card_Card, SelectionMode.f_single__org_patternfly_core_SelectionMode)) {
    let radioName_1 = card.f_name__org_patternfly_component_card_Card;
    if ($Equality.$same(radioName_1, null)) {
     radioName_1 = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['name', 'fallback'], j_l_String)));
     Logger.m_undefined__org_patternfly_component_ComponentType__java_lang_String__void(ComponentType.f_Card__org_patternfly_component_ComponentType, 'Name is undefined for single selectable card \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(cardId_1) + '\'.\n' + 'You must provide a common name for all single selectable cards using \'Card.name(String)\'.\n' + 'Fallback to generated name \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(radioName_1) + '\', which will cause selection issues!');
    }
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_radio__org_patternfly_component_card_CardSelectableActions = Radio.m_radio__java_lang_String__java_lang_String__org_patternfly_component_form_Radio(selectId_1, radioName_1).m_standalone__boolean__org_patternfly_component_form_Radio(false).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Radio(ChangeHandler.$adapt((r, selected) =>{
     let r_1 = /**@type {Radio}*/ ($Casts.$to(r, Radio));
     let selected_1 = /**@type {?boolean}*/ ($Casts.$to(selected, Boolean));
     card.m_internalSelect__boolean__boolean__void_$pp_org_patternfly_component_card(Boolean.m_booleanValue__java_lang_Boolean__boolean(selected_1), true);
    })));
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__elemental2_dom_HTMLInputElement(), Aria.f_labelledBy__org_patternfly_core_Aria, cardId_1);
    if (/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes))) {
     this.f_radio__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Radio(true);
    }
   } else {
    this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_checkbox__org_patternfly_component_card_CardSelectableActions = Checkbox.m_checkbox__java_lang_String__org_patternfly_component_form_Checkbox(selectId_1).m_standalone__boolean__org_patternfly_component_form_Checkbox(false).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((c, selected_2) =>{
     let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
     let selected_3 = /**@type {?boolean}*/ ($Casts.$to(selected_2, Boolean));
     card.m_internalSelect__boolean__boolean__void_$pp_org_patternfly_component_card(Boolean.m_booleanValue__java_lang_Boolean__boolean(selected_3), true);
    })));
    Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_inputElement__elemental2_dom_HTMLInputElement(), Aria.f_labelledBy__org_patternfly_core_Aria, cardId_1);
    if (/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), $Overlay)).classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_disabled__org_patternfly_layout_Classes))) {
     this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Checkbox(true);
    }
   }
  }
 }
 /** @nodts @return {Card} */
 m_mainComponent__org_patternfly_component_card_Card() {
  return this.f_card__org_patternfly_component_card_CardSelectableActions_;
 }
 /** @nodts @return {CardSelectableActions} */
 m_that__org_patternfly_component_card_CardSelectableActions() {
  return this;
 }
 /** @nodts */
 m_disabled__boolean__void_$pp_org_patternfly_component_card(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_checkbox__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Checkbox(disabled);
  }
  if (!$Equality.$same(this.f_radio__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_disabled__boolean__org_patternfly_component_form_Radio(disabled);
  }
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_card(/** boolean */ selected) {
  if (!$Equality.$same(this.f_checkbox__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_checkbox__org_patternfly_component_card_CardSelectableActions.m_inputElement__elemental2_dom_HTMLInputElement().checked = selected;
  }
  if (!$Equality.$same(this.f_radio__org_patternfly_component_card_CardSelectableActions, null)) {
   this.f_radio__org_patternfly_component_card_CardSelectableActions.m_inputElement__elemental2_dom_HTMLInputElement().checked = selected;
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_mainComponent__org_patternfly_component_BaseComponent() {
  return this.m_mainComponent__org_patternfly_component_card_Card();
 }
 //Bridge method.
 /** @final @override @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** Card */ arg0) {
  this.m_passComponent__org_patternfly_component_card_Card__void(/**@type {Card}*/ ($Casts.$to(arg0, Card)));
 }
 //Bridge method.
 /** @final @override @nodts @return {CardSelectableActions} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardSelectableActions();
 }
 /** @nodts */
 static $clinit() {
  CardSelectableActions.$clinit = () =>{};
  CardSelectableActions.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardSelectableActions;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Card = goog.module.get('org.patternfly.component.card.Card$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Radio = goog.module.get('org.patternfly.component.form.Radio$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  SelectionMode = goog.module.get('org.patternfly.core.SelectionMode$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CardSelectableActions);
$Util.$setClassMetadata(CardSelectableActions, 'org.patternfly.component.card.CardSelectableActions');

exports = CardSelectableActions;

//# sourceMappingURL=CardSelectableActions.js.map

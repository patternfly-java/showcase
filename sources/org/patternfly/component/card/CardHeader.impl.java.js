goog.module('org.patternfly.component.card.CardHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentReference = goog.require('org.patternfly.component.ComponentReference$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Container = goog.forwardDeclare('org.jboss.elemento.Container$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Card = goog.forwardDeclare('org.patternfly.component.card.Card$impl');
let CardActions = goog.forwardDeclare('org.patternfly.component.card.CardActions$impl');
let CardTitle = goog.forwardDeclare('org.patternfly.component.card.CardTitle$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CardHeader>}
 * @implements {ComponentReference<Card>}
 */
class CardHeader extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_card_CardHeader;
  /**@type {CardActions} @nodts*/
  this.f_actions__org_patternfly_component_card_CardHeader;
  /**@type {HTMLElement} @nodts*/
  this.f_mainElement__org_patternfly_component_card_CardHeader_;
  /**@type {Card} @nodts*/
  this.f_card__org_patternfly_component_card_CardHeader_;
  /**@type {CardTitle} @nodts*/
  this.f_title__org_patternfly_component_card_CardHeader_;
 }
 /** @nodts @return {CardHeader} */
 static m_cardHeader__org_patternfly_component_card_CardHeader() {
  CardHeader.$clinit();
  return CardHeader.$create__();
 }
 /** @nodts @return {!CardHeader} */
 static $create__() {
  CardHeader.$clinit();
  let $instance = new CardHeader();
  $instance.$ctor__org_patternfly_component_card_CardHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardHeader__void() {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, this.f_mainElement__org_patternfly_component_card_CardHeader_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes, Classes.f_main__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @nodts */
 m_passComponent__org_patternfly_component_card_Card__void(/** Card */ card) {
  this.f_card__org_patternfly_component_card_CardHeader_ = card;
  if (card.f_expandable__org_patternfly_component_card_Card) {
   let /** ?string */ labelledBy;
   if (!$Equality.$same(this.f_title__org_patternfly_component_card_CardHeader_, null)) {
    let toggleId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['toggle'], j_l_String)));
    if ($Equality.$same(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_title__org_patternfly_component_card_CardHeader_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).id, null) || j_l_String.m_isEmpty__java_lang_String__boolean(/**@type {HTMLDivElement}*/ ($Casts.$to(card.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).id)) {
     this.f_title__org_patternfly_component_card_CardHeader_.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Card__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['title'], j_l_String))));
    }
    labelledBy = j_l_String.m_valueOf__java_lang_Object__java_lang_String(toggleId) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_title__org_patternfly_component_card_CardHeader_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).id);
   } else {
    labelledBy = null;
   }
   let toggleElement = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes, Classes.f_toggle__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_card_CardHeader = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((b) =>{
    let b_1 = /**@type {HTMLElement}*/ ($Casts.$to(b, $Overlay));
    if (!$Equality.$same(labelledBy, null)) {
     Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(b_1, Aria.f_labelledBy__org_patternfly_core_Aria, labelledBy);
    }
   })), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    card.m_toggle__void();
   }), Button)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_layout_Classes, Classes.f_toggle__org_patternfly_layout_Classes, Classes.f_icon__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(InlineIcon.m_inlineIcon__org_patternfly_layout_PredefinedIcon__org_patternfly_component_icon_InlineIcon(PredefinedIcon.f_angleRight__org_patternfly_layout_PredefinedIcon)), HTMLContainerBuilder))), Button))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
   if (card.f_toggleRightAligned__org_patternfly_component_card_Card) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_toggleRight__org_patternfly_layout_Classes)], j_l_String)));
    /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(toggleElement);
   } else {
    Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), toggleElement);
   }
  }
  if (!$Equality.$same(this.f_actions__org_patternfly_component_card_CardHeader, null)) {
   this.f_actions__org_patternfly_component_card_CardHeader.m_passComponent__org_patternfly_component_card_Card__void(card);
  }
 }
 /** @nodts @return {Card} */
 m_mainComponent__org_patternfly_component_card_Card() {
  return this.f_card__org_patternfly_component_card_CardHeader_;
 }
 /** @nodts @return {CardHeader} */
 m_addActions__org_patternfly_component_card_CardActions__org_patternfly_component_card_CardHeader(/** CardActions */ actions) {
  return this.m_add__org_patternfly_component_card_CardActions__org_patternfly_component_card_CardHeader(actions);
 }
 /** @nodts @return {CardHeader} */
 m_add__org_patternfly_component_card_CardActions__org_patternfly_component_card_CardHeader(/** CardActions */ actions) {
  this.f_actions__org_patternfly_component_card_CardHeader = actions;
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), /**@type {HTMLDivElement}*/ ($Casts.$to(actions.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_addTitle__org_patternfly_component_card_CardTitle__org_patternfly_component_card_CardHeader(/** CardTitle */ title) {
  return this.m_add__org_patternfly_component_card_CardTitle__org_patternfly_component_card_CardHeader(title);
 }
 /** @nodts @return {CardHeader} */
 m_add__org_patternfly_component_card_CardTitle__org_patternfly_component_card_CardHeader(/** CardTitle */ title) {
  this.f_title__org_patternfly_component_card_CardHeader_ = title;
  this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(/**@type {HTMLDivElement}*/ ($Casts.$to(title.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_add__elemental2_dom_Node__org_patternfly_component_card_CardHeader(/** Node */ node) {
  this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(node);
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_add__org_jboss_elemento_IsElement__org_patternfly_component_card_CardHeader(/** IsElement<?> */ element) {
  this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_addAll__arrayOf_elemental2_dom_Node__org_patternfly_component_card_CardHeader(/** Array<Node> */ nodes) {
  for (let $array = nodes, $index = 0; $index < $array.length; $index++) {
   let node = $array[$index];
   {
    this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(node);
   }
  }
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_addAll__arrayOf_elemental2_dom_Element__org_patternfly_component_card_CardHeader(/** Array<Element> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(element);
   }
  }
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_patternfly_component_card_CardHeader(/** Array<HTMLElement> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(element);
   }
  }
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_patternfly_component_card_CardHeader(/** Array<IsElement<?>> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    if (!$Equality.$same(element, null)) {
     this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
    }
   }
  }
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_addAll__java_lang_Iterable__org_patternfly_component_card_CardHeader(/** Iterable<?> */ elements) {
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if (Node_$Overlay.$isInstance(element)) {
     this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(/**@type {Node}*/ ($Casts.$to(element, Node_$Overlay)));
    } else if (IsElement.$isInstance(element)) {
     this.m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__elemental2_dom_Element());
    }
   }
  }
  return this;
 }
 /** @nodts @return {CardHeader} */
 m_that__org_patternfly_component_card_CardHeader() {
  return this;
 }
 /** @nodts */
 m_disabled__boolean__void_$pp_org_patternfly_component_card(/** boolean */ disabled) {
  if (!$Equality.$same(this.f_actions__org_patternfly_component_card_CardHeader, null)) {
   this.f_actions__org_patternfly_component_card_CardHeader.m_disabled__boolean__void_$pp_org_patternfly_component_card(disabled);
  }
 }
 /** @nodts */
 m_addToMain__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardHeader(/** Node */ node) {
  this.f_mainElement__org_patternfly_component_card_CardHeader_.appendChild(node);
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
 /** @final @override @nodts @return {CardHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {CardHeader} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return this.m_add__elemental2_dom_Node__org_patternfly_component_card_CardHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardHeader} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return this.m_add__org_jboss_elemento_IsElement__org_patternfly_component_card_CardHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardHeader} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return this.m_addAll__arrayOf_elemental2_dom_Node__org_patternfly_component_card_CardHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardHeader} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return this.m_addAll__arrayOf_elemental2_dom_Element__org_patternfly_component_card_CardHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardHeader} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return this.m_addAll__arrayOf_elemental2_dom_HTMLElement__org_patternfly_component_card_CardHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardHeader} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return this.m_addAll__arrayOf_org_jboss_elemento_IsElement__org_patternfly_component_card_CardHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardHeader} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return this.m_addAll__java_lang_Iterable__org_patternfly_component_card_CardHeader(arg0);
 }
 /** @nodts */
 static $clinit() {
  CardHeader.$clinit = () =>{};
  CardHeader.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Container = goog.module.get('org.jboss.elemento.Container$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Card = goog.module.get('org.patternfly.component.card.Card$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ComponentReference.$markImplementor(CardHeader);
$Util.$setClassMetadata(CardHeader, 'org.patternfly.component.card.CardHeader');

exports = CardHeader;

//# sourceMappingURL=CardHeader.js.map

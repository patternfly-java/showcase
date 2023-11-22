goog.module('org.patternfly.component.card.CardTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Container = goog.forwardDeclare('org.jboss.elemento.Container$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, CardTitle>}
 */
class CardTitle extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_titleText__org_patternfly_component_card_CardTitle_;
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__org_patternfly_component_card_CardTitle() {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(null, - 1 | 0);
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ text) {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(text, - 1 | 0);
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__int__org_patternfly_component_card_CardTitle(/** number */ level) {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(null, level);
 }
 /** @nodts @return {CardTitle} */
 static m_cardTitle__java_lang_String__int__org_patternfly_component_card_CardTitle(/** ?string */ text, /** number */ level) {
  CardTitle.$clinit();
  return CardTitle.$create__java_lang_String__int(text, level);
 }
 /** @nodts @return {!CardTitle} */
 static $create__java_lang_String__int(/** ?string */ text, /** number */ level) {
  CardTitle.$clinit();
  let $instance = new CardTitle();
  $instance.$ctor__org_patternfly_component_card_CardTitle__java_lang_String__int__void(text, level);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_card_CardTitle__java_lang_String__int__void(/** ?string */ text, /** number */ level) {
  this.$ctor__org_patternfly_component_SubComponent__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (level > 0) {
   Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, this.f_titleText__org_patternfly_component_card_CardTitle_ = /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(level, text).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay)));
  } else {
   Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, this.f_titleText__org_patternfly_component_card_CardTitle_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_layout_Classes, Classes.f_text__org_patternfly_layout_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  if (!$Equality.$same(text, null)) {
   this.f_titleText__org_patternfly_component_card_CardTitle_.textContent = text;
  }
 }
 /** @nodts @return {CardTitle} */
 m_add__elemental2_dom_Node__org_patternfly_component_card_CardTitle(/** Node */ node) {
  this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(node);
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_add__org_jboss_elemento_IsElement__org_patternfly_component_card_CardTitle(/** IsElement<?> */ element) {
  this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_addAll__arrayOf_elemental2_dom_Node__org_patternfly_component_card_CardTitle(/** Array<Node> */ nodes) {
  for (let $array = nodes, $index = 0; $index < $array.length; $index++) {
   let node = $array[$index];
   {
    this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(node);
   }
  }
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_addAll__arrayOf_elemental2_dom_Element__org_patternfly_component_card_CardTitle(/** Array<Element> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(element);
   }
  }
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_patternfly_component_card_CardTitle(/** Array<HTMLElement> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(element);
   }
  }
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_patternfly_component_card_CardTitle(/** Array<IsElement<?>> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    if (!$Equality.$same(element, null)) {
     this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
    }
   }
  }
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_addAll__java_lang_Iterable__org_patternfly_component_card_CardTitle(/** Iterable<?> */ elements) {
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if (Node_$Overlay.$isInstance(element)) {
     this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(/**@type {Node}*/ ($Casts.$to(element, Node_$Overlay)));
    } else if (IsElement.$isInstance(element)) {
     this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__elemental2_dom_Element());
    }
   }
  }
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_textContent__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ text) {
  this.f_titleText__org_patternfly_component_card_CardTitle_.textContent = text;
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_textNode__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ text) {
  let textNode = false;
  let nodes = this.f_titleText__org_patternfly_component_card_CardTitle_.childNodes;
  for (let i = 0; i < nodes.length && !textNode; i = i + 1 | 0) {
   let node = /**@type {Node}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(nodes, i), Node_$Overlay));
   if (node.nodeType == Node_$Overlay.f_TEXT_NODE__elemental2_dom_Node_$Overlay) {
    node.nodeValue = text;
    textNode = true;
   }
  }
  if (!textNode) {
   this.m_add__java_lang_String__org_patternfly_component_card_CardTitle(text);
  }
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_add__java_lang_String__org_patternfly_component_card_CardTitle(/** ?string */ text) {
  this.m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Text(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).ownerDocument, text));
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_card_CardTitle(/** SafeHtml */ html) {
  this.f_titleText__org_patternfly_component_card_CardTitle_.innerHTML = html.m_asString__java_lang_String();
  return this;
 }
 /** @nodts @return {CardTitle} */
 m_that__org_patternfly_component_card_CardTitle() {
  return this;
 }
 /** @nodts */
 m_addToTitleText__elemental2_dom_Node__void_$p_org_patternfly_component_card_CardTitle(/** Node */ node) {
  this.f_titleText__org_patternfly_component_card_CardTitle_.appendChild(node);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_card_CardTitle();
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_add__java_lang_String__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return this.m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_textContent__java_lang_String__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_textNode__java_lang_String__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return this.m_add__elemental2_dom_Node__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return this.m_add__org_jboss_elemento_IsElement__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return this.m_addAll__arrayOf_elemental2_dom_Node__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return this.m_addAll__arrayOf_elemental2_dom_Element__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return this.m_addAll__arrayOf_elemental2_dom_HTMLElement__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return this.m_addAll__arrayOf_org_jboss_elemento_IsElement__org_patternfly_component_card_CardTitle(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CardTitle} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return this.m_addAll__java_lang_Iterable__org_patternfly_component_card_CardTitle(arg0);
 }
 /** @nodts */
 static $clinit() {
  CardTitle.$clinit = () =>{};
  CardTitle.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CardTitle;
 }
 
 /** @nodts */
 static $loadModules() {
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Container = goog.module.get('org.jboss.elemento.Container$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CardTitle, 'org.patternfly.component.card.CardTitle');

exports = CardTitle;

//# sourceMappingURL=CardTitle.js.map

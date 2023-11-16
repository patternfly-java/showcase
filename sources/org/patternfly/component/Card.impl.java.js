goog.module('org.patternfly.component.Card$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Body = goog.forwardDeclare('org.patternfly.component.Card.Body$impl');
let Footer = goog.forwardDeclare('org.patternfly.component.Card.Footer$impl');
let Head = goog.forwardDeclare('org.patternfly.component.Card.Head$impl');
let Header = goog.forwardDeclare('org.patternfly.component.Card.Header$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Card>}
 * @deprecated
 */
class Card extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Card} */
 static m_card__org_patternfly_component_Card() {
  Card.$clinit();
  return Card.$create__();
 }
 /** @nodts @return {Head} */
 static m_head__org_patternfly_component_Card_Head() {
  Card.$clinit();
  return Head.$create__();
 }
 /** @nodts @return {Header} */
 static m_header__org_patternfly_component_Card_Header() {
  Card.$clinit();
  return Header.$create__();
 }
 /** @nodts @return {Body} */
 static m_body__org_patternfly_component_Card_Body() {
  Card.$clinit();
  return Body.$create__();
 }
 /** @nodts @return {Footer} */
 static m_footer__org_patternfly_component_Card_Footer() {
  Card.$clinit();
  return Footer.$create__();
 }
 /** @nodts @return {!Card} */
 static $create__() {
  Card.$clinit();
  let $instance = new Card();
  $instance.$ctor__org_patternfly_component_Card__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Card__void() {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_card__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), 'Card');
 }
 /** @nodts @return {Card} */
 m_that__org_patternfly_component_Card() {
  return this;
 }
 /** @nodts @return {Card} */
 m_compact__org_patternfly_component_Card() {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_compact__org_patternfly_layout_Classes));
  return this;
 }
 /** @nodts @return {Card} */
 m_hoverable__org_patternfly_component_Card() {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_hoverable__org_patternfly_layout_Classes));
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Card} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_Card();
 }
 /** @nodts */
 static $clinit() {
  Card.$clinit = () =>{};
  Card.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Card;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Body = goog.module.get('org.patternfly.component.Card.Body$impl');
  Footer = goog.module.get('org.patternfly.component.Card.Footer$impl');
  Head = goog.module.get('org.patternfly.component.Card.Head$impl');
  Header = goog.module.get('org.patternfly.component.Card.Header$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Card, 'org.patternfly.component.Card');

exports = Card;

//# sourceMappingURL=Card.js.map

goog.module('org.patternfly.component.title.Title$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLHeadingElement, Title>}
 */
class Title extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Title} */
 static m_title__int__java_lang_String__org_patternfly_component_title_Title(/** number */ level, /** ?string */ text) {
  Title.$clinit();
  return Title.$create__int__java_lang_String__org_patternfly_layout_Size(level, text, null);
 }
 /** @nodts @return {Title} */
 static m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(/** number */ level, /** ?string */ text, /** Size */ size) {
  Title.$clinit();
  return Title.$create__int__java_lang_String__org_patternfly_layout_Size(level, text, size);
 }
 /** @nodts @return {!Title} */
 static $create__int__java_lang_String__org_patternfly_layout_Size(/** number */ level, /** ?string */ text, /** Size */ size) {
  Title.$clinit();
  let $instance = new Title();
  $instance.$ctor__org_patternfly_component_title_Title__int__java_lang_String__org_patternfly_layout_Size__void(level, text, size);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_title_Title__int__java_lang_String__org_patternfly_layout_Size__void(/** number */ level, /** ?string */ text, /** Size */ size) {
  this.$ctor__org_patternfly_component_BaseComponent__elemental2_dom_HTMLElement__org_patternfly_component_ComponentType__void(/**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(level, text).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_title__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), ComponentType.f_Title__org_patternfly_component_ComponentType);
  if (!$Equality.$same(size, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.f_modifier__org_patternfly_layout_Size], j_l_String)));
  }
 }
 /** @nodts @return {Title} */
 m_that__org_patternfly_component_title_Title() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Title} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_title_Title();
 }
 /** @nodts */
 static $clinit() {
  Title.$clinit = () =>{};
  Title.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Title;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Title, 'org.patternfly.component.title.Title');

exports = Title;

//# sourceMappingURL=Title.js.map

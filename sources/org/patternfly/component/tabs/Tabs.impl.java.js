goog.module('org.patternfly.component.tabs.Tabs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Tabs>}
 */
class Tabs extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Tabs} */
 static m_tabs__org_patternfly_component_tabs_Tabs() {
  Tabs.$clinit();
  return Tabs.$create__();
 }
 /** @nodts @return {!Tabs} */
 static $create__() {
  Tabs.$clinit();
  let $instance = new Tabs();
  $instance.$ctor__org_patternfly_component_tabs_Tabs__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tabs_Tabs__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(/**@type {ComponentType}*/ (null), /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Tabs} */
 m_addFoo__org_patternfly_component_tabs_Tabs() {
  return this;
 }
 /** @nodts @return {Tabs} */
 m_add__org_patternfly_component_tabs_Tabs() {
  return this;
 }
 /** @nodts @return {Tabs} */
 m_methodsReturningAReferenceToItself__org_patternfly_component_tabs_Tabs() {
  return this;
 }
 /** @nodts @return {Tabs} */
 m_that__org_patternfly_component_tabs_Tabs() {
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  return /**@type {Tabs}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_onFoo__org_patternfly_handler_ComponentHandler__org_patternfly_component_tabs_Tabs(/** ComponentHandler<Tabs> */ handler) {
  return /**@type {Tabs}*/ ($Casts.$to(this.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  }), Tabs));
 }
 /** @nodts */
 m_doSomething__void() {}
 /** @nodts @return {?string} */
 m_getter__java_lang_String() {
  return 'some piece of information';
 }
 /** @nodts */
 m_foo__void_$p_org_patternfly_component_tabs_Tabs() {}
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_Tabs();
 }
 /** @nodts */
 static $clinit() {
  Tabs.$clinit = () =>{};
  Tabs.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tabs;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Tabs, 'org.patternfly.component.tabs.Tabs');

exports = Tabs;

//# sourceMappingURL=Tabs.js.map

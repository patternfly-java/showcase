goog.module('org.patternfly.component.Search$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const InputGroup = goog.require('org.patternfly.component.InputGroup$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class Search extends InputGroup {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {InputElementBuilder<HTMLInputElement>} @nodts*/
  this.f_input__org_patternfly_component_Search_;
  /**@type {Button} @nodts*/
  this.f_control__org_patternfly_component_Search_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_searchHandler__org_patternfly_component_Search_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keyupHandler__org_patternfly_component_Search_;
 }
 /** @nodts @return {Search} */
 static m_search__org_patternfly_component_Search() {
  Search.$clinit();
  return Search.$create__();
 }
 /** @nodts @return {Search} */
 static m_search__java_lang_String__org_patternfly_component_Search(/** ?string */ placeholder) {
  Search.$clinit();
  return Search.$create__java_lang_String(placeholder);
 }
 //Factory method corresponding to constructor 'Search()'.
 /** @nodts @return {!Search} */
 static $create__() {
  Search.$clinit();
  let $instance = new Search();
  $instance.$ctor__org_patternfly_component_Search__void();
  return $instance;
 }
 //Initialization from constructor 'Search()'.
 /** @nodts */
 $ctor__org_patternfly_component_Search__void() {
  this.$ctor__org_patternfly_component_Search__java_lang_String__void('Search');
 }
 //Factory method corresponding to constructor 'Search(String)'.
 /** @nodts @return {!Search} */
 static $create__java_lang_String(/** ?string */ placeholder) {
  Search.$clinit();
  let $instance = new Search();
  $instance.$ctor__org_patternfly_component_Search__java_lang_String__void(placeholder);
  return $instance;
 }
 //Initialization from constructor 'Search(String)'.
 /** @nodts */
 $ctor__org_patternfly_component_Search__java_lang_String__void(/** ?string */ placeholder) {
  this.$ctor__org_patternfly_component_InputGroup__void();
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_input__org_patternfly_component_Search_ = /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType__org_jboss_elemento_InputElementBuilder(InputType.f_search__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_formControl__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), InputElementBuilder)).m_placeholder__java_lang_String__org_jboss_elemento_TypedBuilder(placeholder), InputElementBuilder)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_control__org_patternfly_component_Search_ = Button.m_button__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_search__org_patternfly_layout_PredefinedIcon, placeholder).m_control__org_patternfly_component_button_Button());
 }
 /** @nodts */
 m_clear__void() {
  this.f_input__org_patternfly_component_Search_.m_element__elemental2_dom_HTMLInputElement().value = '';
 }
 /** @nodts @return {Search} */
 m_onFilter__java_util_function_Consumer__org_patternfly_component_Search(/** Consumer<?string> */ onFilter) {
  this.m_bind__java_util_function_Consumer__boolean__void_$p_org_patternfly_component_Search(onFilter, false);
  return this;
 }
 /** @nodts @return {Search} */
 m_onSearch__java_util_function_Consumer__org_patternfly_component_Search(/** Consumer<?string> */ onSearch) {
  this.m_bind__java_util_function_Consumer__boolean__void_$p_org_patternfly_component_Search(onSearch, true);
  return this;
 }
 /** @nodts */
 m_bind__java_util_function_Consumer__boolean__void_$p_org_patternfly_component_Search(/** Consumer<?string> */ consumer, /** boolean */ onlyOnEnter) {
  if (!$Equality.$same(this.f_searchHandler__org_patternfly_component_Search_, null)) {
   this.f_searchHandler__org_patternfly_component_Search_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_keyupHandler__org_patternfly_component_Search_, null)) {
   this.f_keyupHandler__org_patternfly_component_Search_.m_removeHandler__void();
  }
  this.f_searchHandler__org_patternfly_component_Search_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_input__org_patternfly_component_Search_.m_element__elemental2_dom_HTMLInputElement(), EventType.f_search__org_jboss_elemento_EventType, (/** Event */ e) =>{
   consumer.m_accept__java_lang_Object__void(/**@type {HTMLInputElement}*/ ($Casts.$to(e.currentTarget, $Overlay)).value);
  });
  this.f_keyupHandler__org_patternfly_component_Search_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_input__org_patternfly_component_Search_.m_element__elemental2_dom_HTMLInputElement(), EventType.f_keyup__org_jboss_elemento_EventType, (e_1) =>{
   let e_2 = /**@type {KeyboardEvent}*/ ($Casts.$to(e_1, KeyboardEvent_$Overlay));
   if (onlyOnEnter) {
    if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(e_2)) {
     consumer.m_accept__java_lang_Object__void(/**@type {HTMLInputElement}*/ ($Casts.$to(e_2.currentTarget, $Overlay)).value);
    }
   } else {
    consumer.m_accept__java_lang_Object__void(/**@type {HTMLInputElement}*/ ($Casts.$to(e_2.currentTarget, $Overlay)).value);
   }
  });
  this.f_control__org_patternfly_component_Search_.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_3, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   consumer.m_accept__java_lang_Object__void(this.f_input__org_patternfly_component_Search_.m_element__elemental2_dom_HTMLInputElement().value);
  }));
 }
 /** @nodts */
 static $clinit() {
  Search.$clinit = () =>{};
  Search.$loadModules();
  InputGroup.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Search;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Search, 'org.patternfly.component.Search');

exports = Search;

//# sourceMappingURL=Search.js.map

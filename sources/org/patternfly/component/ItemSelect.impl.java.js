goog.module('org.patternfly.component.ItemSelect$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let HandlerRegistrations = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistrations$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class ItemSelect extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_root__org_patternfly_component_ItemSelect_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_selectItemHandler__org_patternfly_component_ItemSelect_;
 }
 /** @nodts @return {!ItemSelect} */
 static $create__elemental2_dom_HTMLElement(/** HTMLElement */ root) {
  ItemSelect.$clinit();
  let $instance = new ItemSelect();
  $instance.$ctor__org_patternfly_component_ItemSelect__elemental2_dom_HTMLElement__void(root);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ItemSelect__elemental2_dom_HTMLElement__void(/** HTMLElement */ root) {
  this.$ctor__java_lang_Object__void();
  this.f_root__org_patternfly_component_ItemSelect_ = root;
 }
 /** @nodts */
 m_bindSelectHandler__org_jboss_elemento_By__java_util_function_Function__java_util_function_BiConsumer__void_$pp_org_patternfly_component(/** By */ selector, /** j_u_function_Function<HTMLInputElement, ?string> */ closestId, /** BiConsumer<?string, ?boolean> */ selection) {
  let handler = /**@type {!ArrayList<HandlerRegistration>}*/ (ArrayList.$create__());
  for (let $iterator = Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By__java_lang_Iterable(this.f_root__org_patternfly_component_ItemSelect_, selector).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    handler.add(EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(e, EventType.f_click__org_jboss_elemento_EventType, (evt) =>{
     let evt_1 = /**@type {MouseEvent}*/ ($Casts.$to(evt, MouseEvent_$Overlay));
     let checkbox = /**@type {HTMLInputElement}*/ ($Casts.$to(e, HTMLInputElement_$Overlay));
     let id = /**@type {?string}*/ ($Casts.$to(closestId.m_apply__java_lang_Object__java_lang_Object(checkbox), j_l_String));
     if (!$Equality.$same(id, null)) {
      selection.m_accept__java_lang_Object__java_lang_Object__void(id, checkbox.checked);
     }
    }));
   }
  }
  if (!handler.isEmpty()) {
   this.f_selectItemHandler__org_patternfly_component_ItemSelect_ = HandlerRegistrations.m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration__org_gwtproject_event_shared_HandlerRegistration(/**@type {Array<HandlerRegistration>}*/ ($Arrays.$castTo(handler.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {!Array<HandlerRegistration>}*/ ($Arrays.$create([0], HandlerRegistration))), HandlerRegistration, 1)));
  }
 }
 /** @nodts */
 m_removeSelectHandler__void_$pp_org_patternfly_component() {
  if (!$Equality.$same(this.f_selectItemHandler__org_patternfly_component_ItemSelect_, null)) {
   this.f_selectItemHandler__org_patternfly_component_ItemSelect_.m_removeHandler__void();
   this.f_selectItemHandler__org_patternfly_component_ItemSelect_ = null;
  }
 }
 /** @nodts */
 m_updateSelection__org_jboss_elemento_By__boolean__void_$pp_org_patternfly_component(/** By */ selector, /** boolean */ selected) {
  let checkbox = /**@type {HTMLInputElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_root__org_patternfly_component_ItemSelect_, selector), HTMLInputElement_$Overlay));
  if (!$Equality.$same(checkbox, null)) {
   checkbox.checked = selected;
  }
 }
 /** @nodts */
 static $clinit() {
  ItemSelect.$clinit = () =>{};
  ItemSelect.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ItemSelect;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  HandlerRegistrations = goog.module.get('org.gwtproject.event.shared.HandlerRegistrations$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ItemSelect, 'org.patternfly.component.ItemSelect');

exports = ItemSelect;

//# sourceMappingURL=ItemSelect.js.map

goog.module('org.patternfly.component.CollapseExpand$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class CollapseExpand extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Consumer<?boolean>} @nodts*/
  this.f_onToggle__org_patternfly_component_CollapseExpand;
  /**@type {HandlerRegistration} @nodts*/
  this.f_closeHandler__org_patternfly_component_CollapseExpand_;
 }
 /** @nodts @return {!CollapseExpand} */
 static $create__() {
  CollapseExpand.$clinit();
  let $instance = new CollapseExpand();
  $instance.$ctor__org_patternfly_component_CollapseExpand__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_CollapseExpand__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/** HTMLElement */ root, /** HTMLElement */ button, /** HTMLElement */ menu) {
  if (!this.m_expanded__elemental2_dom_HTMLElement__boolean(root)) {
   this.f_closeHandler__org_patternfly_component_CollapseExpand_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    let clickInside = root.contains(/**@type {Node}*/ ($Casts.$to(e_1.target, Node_$Overlay)));
    if (!clickInside) {
     this.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(root, button, menu);
    }
   });
   root.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_layout_Classes));
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(button, Aria.f_expanded__org_patternfly_core_Aria, true);
   menu.removeAttribute(Attributes.f_hidden__org_patternfly_core_Attributes);
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(menu, true);
   if (!$Equality.$same(this.f_onToggle__org_patternfly_component_CollapseExpand, null)) {
    this.f_onToggle__org_patternfly_component_CollapseExpand.m_accept__java_lang_Object__void(true);
   }
  } else {
   this.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(root, button, menu);
  }
 }
 /** @nodts */
 m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/** HTMLElement */ root, /** HTMLElement */ button, /** HTMLElement */ menu) {
  if (this.m_expanded__elemental2_dom_HTMLElement__boolean(root)) {
   root.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_layout_Classes));
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(button, Aria.f_expanded__org_patternfly_core_Aria, false);
   menu.hidden = true;
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(menu, false);
   this.f_closeHandler__org_patternfly_component_CollapseExpand_.m_removeHandler__void();
   if (!$Equality.$same(this.f_onToggle__org_patternfly_component_CollapseExpand, null)) {
    this.f_onToggle__org_patternfly_component_CollapseExpand.m_accept__java_lang_Object__void(false);
   }
  }
 }
 /** @nodts @return {boolean} */
 m_expanded__elemental2_dom_HTMLElement__boolean(/** HTMLElement */ root) {
  return root.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_layout_Classes));
 }
 /** @nodts */
 static $clinit() {
  CollapseExpand.$clinit = () =>{};
  CollapseExpand.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CollapseExpand;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CollapseExpand, 'org.patternfly.component.CollapseExpand');

exports = CollapseExpand;

//# sourceMappingURL=CollapseExpand.js.map

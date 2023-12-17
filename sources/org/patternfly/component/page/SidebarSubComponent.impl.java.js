goog.module('org.patternfly.component.page.SidebarSubComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @abstract
 * @template E, B
 * @extends {SubComponent<E, B>}
 */
class SidebarSubComponent extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_SidebarSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ name, /** E */ element) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_Sidebar__org_patternfly_component_ComponentType, name, element);
 }
 /** @nodts */
 static $clinit() {
  SidebarSubComponent.$clinit = () =>{};
  SidebarSubComponent.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SidebarSubComponent;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
 }
}
$Util.$setClassMetadata(SidebarSubComponent, 'org.patternfly.component.page.SidebarSubComponent');

exports = SidebarSubComponent;

//# sourceMappingURL=SidebarSubComponent.js.map

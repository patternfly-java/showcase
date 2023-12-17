goog.module('org.patternfly.component.icon.IconSubComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @abstract
 * @template E, B
 * @extends {SubComponent<E, B>}
 */
class IconSubComponent extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_icon_IconSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ name, /** E */ element) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_Icon__org_patternfly_component_ComponentType, name, element);
 }
 /** @nodts */
 static $clinit() {
  IconSubComponent.$clinit = () =>{};
  IconSubComponent.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconSubComponent;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
 }
}
$Util.$setClassMetadata(IconSubComponent, 'org.patternfly.component.icon.IconSubComponent');

exports = IconSubComponent;

//# sourceMappingURL=IconSubComponent.js.map

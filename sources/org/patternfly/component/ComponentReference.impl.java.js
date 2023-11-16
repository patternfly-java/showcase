goog.module('org.patternfly.component.ComponentReference$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let BaseComponent = goog.forwardDeclare('org.patternfly.component.BaseComponent$impl');

/**
 * @interface
 * @template C
 */
class ComponentReference {
 /** @abstract @nodts */
 m_passComponent__org_patternfly_component_BaseComponent__void(/** C */ component) {}
 /** @abstract @nodts @return {C} */
 m_mainComponent__org_patternfly_component_BaseComponent() {}
 /** @nodts */
 static $clinit() {
  ComponentReference.$clinit = () =>{};
  ComponentReference.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_ComponentReference = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_ComponentReference;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ComponentReference.$markImplementor(/**@type {Function}*/ (ComponentReference));
$Util.$setClassMetadataForInterface(ComponentReference, 'org.patternfly.component.ComponentReference');

exports = ComponentReference;

//# sourceMappingURL=ComponentReference.js.map

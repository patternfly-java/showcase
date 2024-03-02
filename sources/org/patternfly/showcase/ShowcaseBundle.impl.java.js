goog.module('org.patternfly.showcase.ShowcaseBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.treblereel.j2cl.processors.common.resources.ClientBundle$impl');

let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class ShowcaseBundle {
 /** @abstract @nodts @return {TextResource} */
 m_components__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @abstract @nodts @return {TextResource} */
 m_layouts__org_treblereel_j2cl_processors_common_resources_TextResource() {}
 /** @nodts */
 static $clinit() {
  ShowcaseBundle.$clinit = () =>{};
  ShowcaseBundle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_showcase_ShowcaseBundle = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_showcase_ShowcaseBundle;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ShowcaseBundle.$markImplementor(/**@type {Function}*/ (ShowcaseBundle));
$Util.$setClassMetadataForInterface(ShowcaseBundle, 'org.patternfly.showcase.ShowcaseBundle');

exports = ShowcaseBundle;

//# sourceMappingURL=ShowcaseBundle.js.map

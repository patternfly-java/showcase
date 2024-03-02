goog.module('org.patternfly.showcase.ShowcaseBundleImpl.componentsInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ShowcaseBundleImpl = goog.forwardDeclare('org.patternfly.showcase.ShowcaseBundleImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

class componentsInitializer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!componentsInitializer} */
 static $create__() {
  let $instance = new componentsInitializer();
  $instance.$ctor__org_patternfly_showcase_ShowcaseBundleImpl_componentsInitializer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ShowcaseBundleImpl_componentsInitializer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {TextResource} */
 static m_get__org_treblereel_j2cl_processors_common_resources_TextResource() {
  componentsInitializer.$clinit();
  return ShowcaseBundleImpl.f_components__org_patternfly_showcase_ShowcaseBundleImpl_;
 }
 /** @nodts */
 static $clinit() {
  componentsInitializer.$clinit = () =>{};
  componentsInitializer.$loadModules();
  j_l_Object.$clinit();
  ShowcaseBundleImpl.f_INSTANCE__org_patternfly_showcase_ShowcaseBundleImpl.m_componentsInitializer__void_$p_org_patternfly_showcase_ShowcaseBundleImpl();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof componentsInitializer;
 }
 
 /** @nodts */
 static $loadModules() {
  ShowcaseBundleImpl = goog.module.get('org.patternfly.showcase.ShowcaseBundleImpl$impl');
 }
}
$Util.$setClassMetadata(componentsInitializer, 'org.patternfly.showcase.ShowcaseBundleImpl$componentsInitializer');

exports = componentsInitializer;

//# sourceMappingURL=ShowcaseBundleImpl$componentsInitializer.js.map

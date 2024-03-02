goog.module('org.patternfly.showcase.ShowcaseBundleImpl.layoutsInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ShowcaseBundleImpl = goog.forwardDeclare('org.patternfly.showcase.ShowcaseBundleImpl$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

class layoutsInitializer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!layoutsInitializer} */
 static $create__() {
  let $instance = new layoutsInitializer();
  $instance.$ctor__org_patternfly_showcase_ShowcaseBundleImpl_layoutsInitializer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ShowcaseBundleImpl_layoutsInitializer__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {TextResource} */
 static m_get__org_treblereel_j2cl_processors_common_resources_TextResource() {
  layoutsInitializer.$clinit();
  return ShowcaseBundleImpl.f_layouts__org_patternfly_showcase_ShowcaseBundleImpl_;
 }
 /** @nodts */
 static $clinit() {
  layoutsInitializer.$clinit = () =>{};
  layoutsInitializer.$loadModules();
  j_l_Object.$clinit();
  ShowcaseBundleImpl.f_INSTANCE__org_patternfly_showcase_ShowcaseBundleImpl.m_layoutsInitializer__void_$p_org_patternfly_showcase_ShowcaseBundleImpl();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof layoutsInitializer;
 }
 
 /** @nodts */
 static $loadModules() {
  ShowcaseBundleImpl = goog.module.get('org.patternfly.showcase.ShowcaseBundleImpl$impl');
 }
}
$Util.$setClassMetadata(layoutsInitializer, 'org.patternfly.showcase.ShowcaseBundleImpl$layoutsInitializer');

exports = layoutsInitializer;

//# sourceMappingURL=ShowcaseBundleImpl$layoutsInitializer.js.map

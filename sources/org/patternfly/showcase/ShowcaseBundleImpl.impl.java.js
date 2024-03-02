goog.module('org.patternfly.showcase.ShowcaseBundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ShowcaseBundle = goog.require('org.patternfly.showcase.ShowcaseBundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.showcase.ShowcaseBundleImpl.$1$impl');
let $2 = goog.forwardDeclare('org.patternfly.showcase.ShowcaseBundleImpl.$2$impl');
let componentsInitializer = goog.forwardDeclare('org.patternfly.showcase.ShowcaseBundleImpl.componentsInitializer$impl');
let layoutsInitializer = goog.forwardDeclare('org.patternfly.showcase.ShowcaseBundleImpl.layoutsInitializer$impl');
let ResourcePrototype = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ShowcaseBundle}
 */
class ShowcaseBundleImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HashMap<?string, ResourcePrototype>} @nodts*/
  this.f_resourceMap__org_patternfly_showcase_ShowcaseBundleImpl_;
 }
 /** @nodts @return {!ShowcaseBundleImpl} */
 static $create__() {
  let $instance = new ShowcaseBundleImpl();
  $instance.$ctor__org_patternfly_showcase_ShowcaseBundleImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_ShowcaseBundleImpl__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_componentsInitializer__void_$p_org_patternfly_showcase_ShowcaseBundleImpl() {
  ShowcaseBundleImpl.$static_components__org_patternfly_showcase_ShowcaseBundleImpl_ = $1.$create__org_patternfly_showcase_ShowcaseBundleImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_components__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return componentsInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts */
 m_layoutsInitializer__void_$p_org_patternfly_showcase_ShowcaseBundleImpl() {
  ShowcaseBundleImpl.$static_layouts__org_patternfly_showcase_ShowcaseBundleImpl_ = $2.$create__org_patternfly_showcase_ShowcaseBundleImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_layouts__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return layoutsInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts @return {ResourcePrototype} */
 m_getResource__java_lang_String__org_treblereel_j2cl_processors_common_resources_ResourcePrototype(/** ?string */ name) {
  if ($Equality.$same(this.f_resourceMap__org_patternfly_showcase_ShowcaseBundleImpl_, null)) {
   this.f_resourceMap__org_patternfly_showcase_ShowcaseBundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   this.f_resourceMap__org_patternfly_showcase_ShowcaseBundleImpl_.put('components', this.m_components__org_treblereel_j2cl_processors_common_resources_TextResource());
   this.f_resourceMap__org_patternfly_showcase_ShowcaseBundleImpl_.put('layouts', this.m_layouts__org_treblereel_j2cl_processors_common_resources_TextResource());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(this.f_resourceMap__org_patternfly_showcase_ShowcaseBundleImpl_.get(name), ResourcePrototype));
 }
 /** @nodts @return {ShowcaseBundleImpl} */
 static get f_INSTANCE__org_patternfly_showcase_ShowcaseBundleImpl() {
  return (ShowcaseBundleImpl.$clinit(), ShowcaseBundleImpl.$static_INSTANCE__org_patternfly_showcase_ShowcaseBundleImpl);
 }
 /** @nodts @return {TextResource} */
 static get f_components__org_patternfly_showcase_ShowcaseBundleImpl_() {
  return (ShowcaseBundleImpl.$clinit(), ShowcaseBundleImpl.$static_components__org_patternfly_showcase_ShowcaseBundleImpl_);
 }
 /** @nodts */
 static set f_components__org_patternfly_showcase_ShowcaseBundleImpl_(/** TextResource */ value) {
  (ShowcaseBundleImpl.$clinit(), ShowcaseBundleImpl.$static_components__org_patternfly_showcase_ShowcaseBundleImpl_ = value);
 }
 /** @nodts @return {TextResource} */
 static get f_layouts__org_patternfly_showcase_ShowcaseBundleImpl_() {
  return (ShowcaseBundleImpl.$clinit(), ShowcaseBundleImpl.$static_layouts__org_patternfly_showcase_ShowcaseBundleImpl_);
 }
 /** @nodts */
 static set f_layouts__org_patternfly_showcase_ShowcaseBundleImpl_(/** TextResource */ value) {
  (ShowcaseBundleImpl.$clinit(), ShowcaseBundleImpl.$static_layouts__org_patternfly_showcase_ShowcaseBundleImpl_ = value);
 }
 /** @nodts */
 static $clinit() {
  ShowcaseBundleImpl.$clinit = () =>{};
  ShowcaseBundleImpl.$loadModules();
  j_l_Object.$clinit();
  ShowcaseBundleImpl.$static_INSTANCE__org_patternfly_showcase_ShowcaseBundleImpl = ShowcaseBundleImpl.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ShowcaseBundleImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.showcase.ShowcaseBundleImpl.$1$impl');
  $2 = goog.module.get('org.patternfly.showcase.ShowcaseBundleImpl.$2$impl');
  componentsInitializer = goog.module.get('org.patternfly.showcase.ShowcaseBundleImpl.componentsInitializer$impl');
  layoutsInitializer = goog.module.get('org.patternfly.showcase.ShowcaseBundleImpl.layoutsInitializer$impl');
  ResourcePrototype = goog.module.get('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {ShowcaseBundleImpl} @nodts*/
ShowcaseBundleImpl.$static_INSTANCE__org_patternfly_showcase_ShowcaseBundleImpl;
/**@private {TextResource} @nodts*/
ShowcaseBundleImpl.$static_components__org_patternfly_showcase_ShowcaseBundleImpl_;
/**@private {TextResource} @nodts*/
ShowcaseBundleImpl.$static_layouts__org_patternfly_showcase_ShowcaseBundleImpl_;
ShowcaseBundle.$markImplementor(ShowcaseBundleImpl);
$Util.$setClassMetadata(ShowcaseBundleImpl, 'org.patternfly.showcase.ShowcaseBundleImpl');

exports = ShowcaseBundleImpl;

//# sourceMappingURL=ShowcaseBundleImpl.js.map

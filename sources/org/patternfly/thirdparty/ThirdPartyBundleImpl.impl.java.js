goog.module('org.patternfly.thirdparty.ThirdPartyBundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ThirdPartyBundle = goog.require('org.patternfly.thirdparty.ThirdPartyBundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.patternfly.thirdparty.ThirdPartyBundleImpl.$1$impl');
let popperInitializer = goog.forwardDeclare('org.patternfly.thirdparty.ThirdPartyBundleImpl.popperInitializer$impl');
let ResourcePrototype = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');
let TextResource = goog.forwardDeclare('org.treblereel.j2cl.processors.common.resources.TextResource$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ThirdPartyBundle}
 */
class ThirdPartyBundleImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HashMap<?string, ResourcePrototype>} @nodts*/
  this.f_resourceMap__org_patternfly_thirdparty_ThirdPartyBundleImpl_;
 }
 /** @nodts @return {!ThirdPartyBundleImpl} */
 static $create__() {
  let $instance = new ThirdPartyBundleImpl();
  $instance.$ctor__org_patternfly_thirdparty_ThirdPartyBundleImpl__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_thirdparty_ThirdPartyBundleImpl__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_popperInitializer__void_$p_org_patternfly_thirdparty_ThirdPartyBundleImpl() {
  ThirdPartyBundleImpl.$static_popper__org_patternfly_thirdparty_ThirdPartyBundleImpl_ = $1.$create__org_patternfly_thirdparty_ThirdPartyBundleImpl(this);
 }
 /** @override @nodts @return {TextResource} */
 m_popper__org_treblereel_j2cl_processors_common_resources_TextResource() {
  return popperInitializer.m_get__org_treblereel_j2cl_processors_common_resources_TextResource();
 }
 /** @nodts @return {ResourcePrototype} */
 m_getResource__java_lang_String__org_treblereel_j2cl_processors_common_resources_ResourcePrototype(/** ?string */ name) {
  if ($Equality.$same(this.f_resourceMap__org_patternfly_thirdparty_ThirdPartyBundleImpl_, null)) {
   this.f_resourceMap__org_patternfly_thirdparty_ThirdPartyBundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   this.f_resourceMap__org_patternfly_thirdparty_ThirdPartyBundleImpl_.put('popper', this.m_popper__org_treblereel_j2cl_processors_common_resources_TextResource());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(this.f_resourceMap__org_patternfly_thirdparty_ThirdPartyBundleImpl_.get(name), ResourcePrototype));
 }
 /** @nodts @return {ThirdPartyBundleImpl} */
 static get f_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundleImpl() {
  return (ThirdPartyBundleImpl.$clinit(), ThirdPartyBundleImpl.$static_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundleImpl);
 }
 /** @nodts @return {TextResource} */
 static get f_popper__org_patternfly_thirdparty_ThirdPartyBundleImpl_() {
  return (ThirdPartyBundleImpl.$clinit(), ThirdPartyBundleImpl.$static_popper__org_patternfly_thirdparty_ThirdPartyBundleImpl_);
 }
 /** @nodts */
 static set f_popper__org_patternfly_thirdparty_ThirdPartyBundleImpl_(/** TextResource */ value) {
  (ThirdPartyBundleImpl.$clinit(), ThirdPartyBundleImpl.$static_popper__org_patternfly_thirdparty_ThirdPartyBundleImpl_ = value);
 }
 /** @nodts */
 static $clinit() {
  ThirdPartyBundleImpl.$clinit = () =>{};
  ThirdPartyBundleImpl.$loadModules();
  j_l_Object.$clinit();
  ThirdPartyBundleImpl.$static_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundleImpl = ThirdPartyBundleImpl.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ThirdPartyBundleImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.patternfly.thirdparty.ThirdPartyBundleImpl.$1$impl');
  popperInitializer = goog.module.get('org.patternfly.thirdparty.ThirdPartyBundleImpl.popperInitializer$impl');
  ResourcePrototype = goog.module.get('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {ThirdPartyBundleImpl} @nodts*/
ThirdPartyBundleImpl.$static_INSTANCE__org_patternfly_thirdparty_ThirdPartyBundleImpl;
/**@private {TextResource} @nodts*/
ThirdPartyBundleImpl.$static_popper__org_patternfly_thirdparty_ThirdPartyBundleImpl_;
ThirdPartyBundle.$markImplementor(ThirdPartyBundleImpl);
$Util.$setClassMetadata(ThirdPartyBundleImpl, 'org.patternfly.thirdparty.ThirdPartyBundleImpl');

exports = ThirdPartyBundleImpl;

//# sourceMappingURL=ThirdPartyBundleImpl.js.map

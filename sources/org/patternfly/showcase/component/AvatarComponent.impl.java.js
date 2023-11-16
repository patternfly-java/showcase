goog.module('org.patternfly.showcase.component.AvatarComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Avatar = goog.forwardDeclare('org.patternfly.component.avatar.Avatar$impl');
let Brightness = goog.forwardDeclare('org.patternfly.layout.Brightness$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AvatarComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AvatarComponent} */
 static $create__() {
  AvatarComponent.$clinit();
  let $instance = new AvatarComponent();
  $instance.$ctor__org_patternfly_showcase_component_AvatarComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_AvatarComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Avatar', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/avatar/Avatar.html', 'https://www.patternfly.org/components/avatar/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('An avatar is a visual used to represent a user. It may contain an image or a placeholder graphic.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('avatar-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('avatar-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Avatar.m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(PatternFlyAssets.avatarLight, 'avatar')), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('avatar-size', 'Size variations', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('avatar-size'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Small'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Avatar.m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(PatternFlyAssets.avatarLight, 'avatar').m_size__org_patternfly_layout_Size__org_patternfly_component_avatar_Avatar(Size.f_sm__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Medium'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Avatar.m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(PatternFlyAssets.avatarLight, 'avatar').m_size__org_patternfly_layout_Size__org_patternfly_component_avatar_Avatar(Size.f_md__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Large'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Avatar.m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(PatternFlyAssets.avatarLight, 'avatar').m_size__org_patternfly_layout_Size__org_patternfly_component_avatar_Avatar(Size.f_lg__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Extra large'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Avatar.m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(PatternFlyAssets.avatarLight, 'avatar').m_size__org_patternfly_layout_Size__org_patternfly_component_avatar_Avatar(Size.f_xl__org_patternfly_layout_Size)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('avatar-bordered-light', 'Bordered - light', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('avatar-bordered-light'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Avatar.m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(PatternFlyAssets.avatarLight, 'avatar').m_border__org_patternfly_layout_Brightness__org_patternfly_component_avatar_Avatar(Brightness.f_light__org_patternfly_layout_Brightness)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('avatar-bordered-dark', 'Bordered - dark', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('avatar-bordered-dark'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Avatar.m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(PatternFlyAssets.avatarDark, 'avatar').m_border__org_patternfly_layout_Brightness__org_patternfly_component_avatar_Avatar(Brightness.f_dark__org_patternfly_layout_Brightness)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  AvatarComponent.$clinit = () =>{};
  AvatarComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AvatarComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Avatar = goog.module.get('org.patternfly.component.avatar.Avatar$impl');
  Brightness = goog.module.get('org.patternfly.layout.Brightness$impl');
  Size = goog.module.get('org.patternfly.layout.Size$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AvatarComponent, 'org.patternfly.showcase.component.AvatarComponent');

exports = AvatarComponent;

//# sourceMappingURL=AvatarComponent.js.map

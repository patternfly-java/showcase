goog.module('org.patternfly.showcase.component.BadgeComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BadgeComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BadgeComponent} */
 static $create__() {
  BadgeComponent.$clinit();
  let $instance = new BadgeComponent();
  $instance.$ctor__org_patternfly_showcase_component_BadgeComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_BadgeComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Badge', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/badge/Badge.html', 'https://www.patternfly.org/components/badge/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A badge is used to annotate other information like a label or an object name. Badges are typically used to reflect a count, e.g. number of object, number of events, number of unread, etc.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('badge-read', 'Badge (read)', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('badge-read'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(7).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(24).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(423).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(1000).m_limit__int__org_patternfly_component_badge_Badge(999).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('badge-unread', 'Badge (unread)', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('badge-unread'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(7).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(24).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(423).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(1000).m_limit__int__org_patternfly_component_badge_Badge(999).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  BadgeComponent.$clinit = () =>{};
  BadgeComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BadgeComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Badge = goog.module.get('org.patternfly.component.badge.Badge$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BadgeComponent, 'org.patternfly.showcase.component.BadgeComponent');

exports = BadgeComponent;

//# sourceMappingURL=BadgeComponent.js.map

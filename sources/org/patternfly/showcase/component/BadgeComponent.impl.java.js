goog.module('org.patternfly.showcase.component.BadgeComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BadgeComponent extends SnippetPage {
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
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Badge', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/badge/Badge.html', 'https://www.patternfly.org/components/badge/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A badge is used to annotate other information like a label or an object name. Badges are typically used to reflect a count, e.g. number of object, number of events, number of unread, etc.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('badge-read', 'Badge (read)', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('badge-read'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(7).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(24).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(423).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(1000).m_limit__int__org_patternfly_component_badge_Badge(999).m_read__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(7).m_read__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v) =>{
    let v_1 = /**@type {Integer}*/ ($Casts.$to(v, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_1) + ' apples';
   }))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(24).m_read__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_2) =>{
    let v_3 = /**@type {Integer}*/ ($Casts.$to(v_2, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_3) + ' apples';
   }))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(423).m_read__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_4) =>{
    let v_5 = /**@type {Integer}*/ ($Casts.$to(v_4, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_5) + ' apples';
   }))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(1000).m_limit__int__org_patternfly_component_badge_Badge(999).m_read__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_6) =>{
    let v_7 = /**@type {Integer}*/ ($Casts.$to(v_6, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_7) + ' apples';
   })).m_maxDisplay__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_8) =>{
    let v_9 = /**@type {Integer}*/ ($Casts.$to(v_8, Integer));
    return 'More apples than you can ever eat';
   }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('badge-unread', 'Badge (unread)', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('badge-unread'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(7).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(24).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(423).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(1000).m_limit__int__org_patternfly_component_badge_Badge(999).m_unread__org_patternfly_component_badge_Badge()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(7).m_unread__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_10) =>{
    let v_11 = /**@type {Integer}*/ ($Casts.$to(v_10, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_11) + ' apples';
   }))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(24).m_unread__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_12) =>{
    let v_13 = /**@type {Integer}*/ ($Casts.$to(v_12, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_13) + ' apples';
   }))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(423).m_unread__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_14) =>{
    let v_15 = /**@type {Integer}*/ ($Casts.$to(v_14, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_15) + ' apples';
   }))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Badge.m_badge__int__org_patternfly_component_badge_Badge(1000).m_limit__int__org_patternfly_component_badge_Badge(999).m_unread__org_patternfly_component_badge_Badge().m_display__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_16) =>{
    let v_17 = /**@type {Integer}*/ ($Casts.$to(v_16, Integer));
    return j_l_String.m_valueOf__java_lang_Object__java_lang_String(v_17) + ' apples';
   })).m_maxDisplay__java_util_function_Function__org_patternfly_component_badge_Badge(j_u_function_Function.$adapt((v_18) =>{
    let v_19 = /**@type {Integer}*/ ($Casts.$to(v_18, Integer));
    return 'More apples than you can ever eat';
   }))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  BadgeComponent.$clinit = () =>{};
  BadgeComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BadgeComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Badge = goog.module.get('org.patternfly.component.badge.Badge$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BadgeComponent, 'org.patternfly.showcase.component.BadgeComponent');

exports = BadgeComponent;

//# sourceMappingURL=BadgeComponent.js.map

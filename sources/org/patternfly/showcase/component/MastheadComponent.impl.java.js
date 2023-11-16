goog.module('org.patternfly.showcase.component.MastheadComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Masthead = goog.forwardDeclare('org.patternfly.component.masthead.Masthead$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MastheadComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!MastheadComponent} */
 static $create__() {
  MastheadComponent.$clinit();
  let $instance = new MastheadComponent();
  $instance.$ctor__org_patternfly_showcase_component_MastheadComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_MastheadComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Icon', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/page/Masthead.html', 'https://www.patternfly.org/components/masthead/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A masthead contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('masthead-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('masthead-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Masthead.m_masthead__org_patternfly_component_masthead_Masthead()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  MastheadComponent.$clinit = () =>{};
  MastheadComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Masthead = goog.module.get('org.patternfly.component.masthead.Masthead$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MastheadComponent, 'org.patternfly.showcase.component.MastheadComponent');

exports = MastheadComponent;

//# sourceMappingURL=MastheadComponent.js.map

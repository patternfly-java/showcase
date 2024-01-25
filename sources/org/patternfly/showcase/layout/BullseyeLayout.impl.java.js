goog.module('org.patternfly.showcase.layout.BullseyeLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Bullseye = goog.forwardDeclare('org.patternfly.layout.bullseye.Bullseye$impl');
let BullseyeItem = goog.forwardDeclare('org.patternfly.layout.bullseye.BullseyeItem$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BullseyeLayout extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BullseyeLayout} */
 static $create__() {
  BullseyeLayout.$clinit();
  let $instance = new BullseyeLayout();
  $instance.$ctor__org_patternfly_showcase_layout_BullseyeLayout__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_BullseyeLayout__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Bullseye', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/bullseye/Bullseye.html', 'https://www.patternfly.org/layouts/bullseye/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('The bullseye layout centers content, both vertically and horizontally within a container.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('bullseye-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('bullseye-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-bullseye'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Bullseye.m_bullseye__org_patternfly_layout_bullseye_Bullseye().m_addItem__org_patternfly_layout_bullseye_BullseyeItem__org_patternfly_layout_bullseye_Bullseye(/**@type {BullseyeItem}*/ ($Casts.$to(BullseyeItem.m_bullseyeItem__org_patternfly_layout_bullseye_BullseyeItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Bullseye \u25CE layout'), BullseyeItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  BullseyeLayout.$clinit = () =>{};
  BullseyeLayout.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BullseyeLayout;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Bullseye = goog.module.get('org.patternfly.layout.bullseye.Bullseye$impl');
  BullseyeItem = goog.module.get('org.patternfly.layout.bullseye.BullseyeItem$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BullseyeLayout, 'org.patternfly.showcase.layout.BullseyeLayout');

exports = BullseyeLayout;

//# sourceMappingURL=BullseyeLayout.js.map

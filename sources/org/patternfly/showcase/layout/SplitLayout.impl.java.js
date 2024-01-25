goog.module('org.patternfly.showcase.layout.SplitLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Split = goog.forwardDeclare('org.patternfly.layout.split.Split$impl');
let SplitItem = goog.forwardDeclare('org.patternfly.layout.split.SplitItem$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SplitLayout extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SplitLayout} */
 static $create__() {
  SplitLayout.$clinit();
  let $instance = new SplitLayout();
  $instance.$ctor__org_patternfly_showcase_layout_SplitLayout__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_SplitLayout__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Split', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/split/Split.html', 'https://www.patternfly.org/layouts/split/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('The split layout positions items horizontally in a container, with one item filling the remaining horizontal space as the viewport is resized.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('split-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('split-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-split'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Split.m_split__org_patternfly_layout_split_Split().m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_fill__org_jboss_elemento_TypedBuilder(), SplitItem)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('pf-m-fill'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('split-gutter', 'With gutter', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('split-gutter'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-split'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Split}*/ ($Casts.$to(Split.m_split__org_patternfly_layout_split_Split().m_gutter__org_jboss_elemento_TypedBuilder(), Split)).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_fill__org_jboss_elemento_TypedBuilder(), SplitItem)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('pf-m-fill'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('split-wrap', 'Wrappable', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('split-wrap'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-split'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Split}*/ ($Casts.$to(Split.m_split__org_patternfly_layout_split_Split().m_wrap__org_patternfly_layout_split_Split().m_gutter__org_jboss_elemento_TypedBuilder(), Split)).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem))).m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/**@type {SplitItem}*/ ($Casts.$to(SplitItem.m_splitItem__org_patternfly_layout_split_SplitItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('content'), SplitItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  SplitLayout.$clinit = () =>{};
  SplitLayout.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SplitLayout;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Split = goog.module.get('org.patternfly.layout.split.Split$impl');
  SplitItem = goog.module.get('org.patternfly.layout.split.SplitItem$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(SplitLayout, 'org.patternfly.showcase.layout.SplitLayout');

exports = SplitLayout;

//# sourceMappingURL=SplitLayout.js.map

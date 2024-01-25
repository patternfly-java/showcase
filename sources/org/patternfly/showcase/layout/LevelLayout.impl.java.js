goog.module('org.patternfly.showcase.layout.LevelLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Level = goog.forwardDeclare('org.patternfly.layout.level.Level$impl');
let LevelItem = goog.forwardDeclare('org.patternfly.layout.level.LevelItem$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LevelLayout extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelLayout} */
 static $create__() {
  LevelLayout.$clinit();
  let $instance = new LevelLayout();
  $instance.$ctor__org_patternfly_showcase_layout_LevelLayout__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_LevelLayout__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Level', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/level/Level.html', 'https://www.patternfly.org/layouts/level/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Use a Level layout to evenly distribute content horizontally within a container.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('level-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('level-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-level'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Level.m_level__org_patternfly_layout_level_Level().m_addItem__org_patternfly_layout_level_LevelItem__org_patternfly_layout_level_Level(/**@type {LevelItem}*/ ($Casts.$to(LevelItem.m_levelItem__org_patternfly_layout_level_LevelItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Level item'), LevelItem))).m_addItem__org_patternfly_layout_level_LevelItem__org_patternfly_layout_level_Level(/**@type {LevelItem}*/ ($Casts.$to(LevelItem.m_levelItem__org_patternfly_layout_level_LevelItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Level item'), LevelItem))).m_addItem__org_patternfly_layout_level_LevelItem__org_patternfly_layout_level_Level(/**@type {LevelItem}*/ ($Casts.$to(LevelItem.m_levelItem__org_patternfly_layout_level_LevelItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Level item'), LevelItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('level-gutter', 'With gutters', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('level-gutter'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-level'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Level}*/ ($Casts.$to(Level.m_level__org_patternfly_layout_level_Level().m_gutter__org_jboss_elemento_TypedBuilder(), Level)).m_addItem__org_patternfly_layout_level_LevelItem__org_patternfly_layout_level_Level(/**@type {LevelItem}*/ ($Casts.$to(LevelItem.m_levelItem__org_patternfly_layout_level_LevelItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Level item'), LevelItem))).m_addItem__org_patternfly_layout_level_LevelItem__org_patternfly_layout_level_Level(/**@type {LevelItem}*/ ($Casts.$to(LevelItem.m_levelItem__org_patternfly_layout_level_LevelItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Level item'), LevelItem))).m_addItem__org_patternfly_layout_level_LevelItem__org_patternfly_layout_level_Level(/**@type {LevelItem}*/ ($Casts.$to(LevelItem.m_levelItem__org_patternfly_layout_level_LevelItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Level item'), LevelItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  LevelLayout.$clinit = () =>{};
  LevelLayout.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelLayout;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Level = goog.module.get('org.patternfly.layout.level.Level$impl');
  LevelItem = goog.module.get('org.patternfly.layout.level.LevelItem$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LevelLayout, 'org.patternfly.showcase.layout.LevelLayout');

exports = LevelLayout;

//# sourceMappingURL=LevelLayout.js.map

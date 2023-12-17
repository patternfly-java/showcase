goog.module('org.patternfly.showcase.component.ChipComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Badge = goog.forwardDeclare('org.patternfly.component.badge.Badge$impl');
let Chip = goog.forwardDeclare('org.patternfly.component.chip.Chip$impl');
let ChipGroup = goog.forwardDeclare('org.patternfly.component.chip.ChipGroup$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChipComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ChipComponent} */
 static $create__() {
  ChipComponent.$clinit();
  let $instance = new ChipComponent();
  $instance.$ctor__org_patternfly_showcase_component_ChipComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ChipComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Chip', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/component/chip/Chip.html', 'https://www.patternfly.org/components/chip/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A chip is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of objects.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('chip-variants', 'Chip variants', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('chip-variants'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip 1')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Really long chip that goes on and on')), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip').m_addBadge__org_patternfly_component_badge_Badge__org_patternfly_component_chip_Chip(Badge.m_badge__int__org_patternfly_component_badge_Badge(7).m_read__org_patternfly_component_badge_Badge())), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Read-only chip').m_readonly__org_patternfly_component_chip_Chip()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('chip-group', 'Chip group', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('chip-group'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ChipGroup.m_chipGroup__org_patternfly_component_chip_ChipGroup().m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip one')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Really long chip that goes on and on')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip three')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip four')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip five'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('chip-group-category', 'Chip group with category', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('chip-group-category'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ChipGroup.m_chipGroup__java_lang_String__org_patternfly_component_chip_ChipGroup('Category one').m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip one')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Really long chip that goes on and on')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip three')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip four')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip five'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('chip-group-removable-category', 'Chip group with removable category', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('chip-group-removable-category'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ChipGroup.m_chipGroup__java_lang_String__org_patternfly_component_chip_ChipGroup('Category one').m_closable__org_patternfly_component_chip_ChipGroup().m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip one')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip two')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip three'))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(ChipGroup.m_chipGroup__java_lang_String__org_patternfly_component_chip_ChipGroup('Category two has a very long name').m_closable__org_patternfly_component_chip_ChipGroup().m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip one')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip two')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip three')).m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip('Chip four'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  ChipComponent.$clinit = () =>{};
  ChipComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChipComponent;
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
  Chip = goog.module.get('org.patternfly.component.chip.Chip$impl');
  ChipGroup = goog.module.get('org.patternfly.component.chip.ChipGroup$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChipComponent, 'org.patternfly.showcase.component.ChipComponent');

exports = ChipComponent;

//# sourceMappingURL=ChipComponent.js.map

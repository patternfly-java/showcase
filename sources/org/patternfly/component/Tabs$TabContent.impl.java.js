goog.module('org.patternfly.component.Tabs.TabContent$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @deprecated
 */
class TabContent extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLButtonElement} @nodts*/
  this.f_tab__org_patternfly_component_Tabs_TabContent;
  /**@type {HTMLElement} @nodts*/
  this.f_content__org_patternfly_component_Tabs_TabContent;
 }
 /** @nodts @return {!TabContent} */
 static $create__elemental2_dom_HTMLButtonElement__elemental2_dom_HTMLElement(/** HTMLButtonElement */ tab, /** HTMLElement */ content) {
  TabContent.$clinit();
  let $instance = new TabContent();
  $instance.$ctor__org_patternfly_component_Tabs_TabContent__elemental2_dom_HTMLButtonElement__elemental2_dom_HTMLElement__void(tab, content);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_Tabs_TabContent__elemental2_dom_HTMLButtonElement__elemental2_dom_HTMLElement__void(/** HTMLButtonElement */ tab, /** HTMLElement */ content) {
  this.$ctor__java_lang_Object__void();
  this.f_tab__org_patternfly_component_Tabs_TabContent = tab;
  this.f_content__org_patternfly_component_Tabs_TabContent = content;
 }
 /** @nodts */
 static $clinit() {
  TabContent.$clinit = () =>{};
  TabContent.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabContent;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(TabContent, 'org.patternfly.component.Tabs$TabContent');

exports = TabContent;

//# sourceMappingURL=Tabs$TabContent.js.map

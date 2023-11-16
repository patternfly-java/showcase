goog.module('org.patternfly.showcase.component.ContextSelectorComponent.Stage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Stage extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_showcase_component_ContextSelectorComponent_Stage;
  /**@type {?string} @nodts*/
  this.f_url__org_patternfly_showcase_component_ContextSelectorComponent_Stage;
  /**@type {number} @nodts*/
  this.f_nodes__org_patternfly_showcase_component_ContextSelectorComponent_Stage = 0;
 }
 /** @nodts @return {!Stage} */
 static $create__java_lang_String__java_lang_String__int(/** ?string */ name, /** ?string */ url, /** number */ nodes) {
  Stage.$clinit();
  let $instance = new Stage();
  $instance.$ctor__org_patternfly_showcase_component_ContextSelectorComponent_Stage__java_lang_String__java_lang_String__int__void(name, url, nodes);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ContextSelectorComponent_Stage__java_lang_String__java_lang_String__int__void(/** ?string */ name, /** ?string */ url, /** number */ nodes) {
  this.$ctor__java_lang_Object__void();
  this.f_name__org_patternfly_showcase_component_ContextSelectorComponent_Stage = name;
  this.f_url__org_patternfly_showcase_component_ContextSelectorComponent_Stage = url;
  this.f_nodes__org_patternfly_showcase_component_ContextSelectorComponent_Stage = nodes;
 }
 /** @override @return {?string} */
 toString() {
  return this.f_name__org_patternfly_showcase_component_ContextSelectorComponent_Stage;
 }
 /** @nodts */
 static $clinit() {
  Stage.$clinit = () =>{};
  Stage.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Stage;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Stage, 'org.patternfly.showcase.component.ContextSelectorComponent$Stage');

exports = Stage;

//# sourceMappingURL=ContextSelectorComponent$Stage.js.map

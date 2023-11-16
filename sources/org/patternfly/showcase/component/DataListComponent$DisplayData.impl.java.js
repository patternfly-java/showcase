goog.module('org.patternfly.showcase.component.DataListComponent.DisplayData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Display = goog.forwardDeclare('org.patternfly.component.DataList.Display$impl');

class DisplayData extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Display<DisplayData>} @nodts*/
  this.f_display__org_patternfly_showcase_component_DataListComponent_DisplayData;
 }
 /** @nodts @return {!DisplayData} */
 static $create__org_patternfly_component_DataList_Display(/** Display<DisplayData> */ display) {
  DisplayData.$clinit();
  let $instance = new DisplayData();
  $instance.$ctor__org_patternfly_showcase_component_DataListComponent_DisplayData__org_patternfly_component_DataList_Display__void(display);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_DataListComponent_DisplayData__org_patternfly_component_DataList_Display__void(/** Display<DisplayData> */ display) {
  this.$ctor__java_lang_Object__void();
  this.f_display__org_patternfly_showcase_component_DataListComponent_DisplayData = display;
 }
 /** @nodts @return {?string} */
 m_id__java_lang_String_$pp_org_patternfly_showcase_component() {
  return Id.m_unique__java_lang_String();
 }
 /** @nodts */
 static $clinit() {
  DisplayData.$clinit = () =>{};
  DisplayData.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DisplayData;
 }
 
 /** @nodts */
 static $loadModules() {
  Id = goog.module.get('org.jboss.elemento.Id$impl');
 }
}
$Util.$setClassMetadata(DisplayData, 'org.patternfly.showcase.component.DataListComponent$DisplayData');

exports = DisplayData;

//# sourceMappingURL=DataListComponent$DisplayData.js.map

goog.module('org.patternfly.showcase.component.TableComponent.Repository$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Repository extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_showcase_component_TableComponent_Repository;
  /**@type {?string} @nodts*/
  this.f_link__org_patternfly_showcase_component_TableComponent_Repository;
  /**@type {?string} @nodts*/
  this.f_lorem__org_patternfly_showcase_component_TableComponent_Repository;
  /**@type {number} @nodts*/
  this.f_branches__org_patternfly_showcase_component_TableComponent_Repository = 0;
  /**@type {number} @nodts*/
  this.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository = 0;
  /**@type {number} @nodts*/
  this.f_contributors__org_patternfly_showcase_component_TableComponent_Repository = 0;
  /**@type {Date} @nodts*/
  this.f_lastCommit__org_patternfly_showcase_component_TableComponent_Repository;
 }
 /** @nodts @return {!Repository} */
 static $create__java_lang_String__java_lang_String__int__int__int(/** ?string */ name, /** ?string */ link, /** number */ branches, /** number */ pullRequests, /** number */ contributors) {
  Repository.$clinit();
  let $instance = new Repository();
  $instance.$ctor__org_patternfly_showcase_component_TableComponent_Repository__java_lang_String__java_lang_String__int__int__int__void(name, link, branches, pullRequests, contributors);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TableComponent_Repository__java_lang_String__java_lang_String__int__int__int__void(/** ?string */ name, /** ?string */ link, /** number */ branches, /** number */ pullRequests, /** number */ contributors) {
  this.$ctor__java_lang_Object__void();
  this.f_name__org_patternfly_showcase_component_TableComponent_Repository = name;
  this.f_link__org_patternfly_showcase_component_TableComponent_Repository = link;
  this.f_lorem__org_patternfly_showcase_component_TableComponent_Repository = LoremIpsum.m_paragraphs__int__java_lang_String(3);
  this.f_branches__org_patternfly_showcase_component_TableComponent_Repository = branches;
  this.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository = pullRequests;
  this.f_contributors__org_patternfly_showcase_component_TableComponent_Repository = contributors;
  this.f_lastCommit__org_patternfly_showcase_component_TableComponent_Repository = this.m_randomDate__elemental2_core_JsDate_$p_org_patternfly_showcase_component_TableComponent_Repository();
 }
 /** @nodts @return {Date} */
 m_randomDate__elemental2_core_JsDate_$p_org_patternfly_showcase_component_TableComponent_Repository() {
  let diff = 0;
  let now = System.m_currentTimeMillis__long();
  let random = Random.$create__();
  for (let i = 0; i < 123; i = i + 1 | 0) {
   diff = random.m_nextInt__int__int(Repository.f_ONE_WEEK_IN_MILLIS__org_patternfly_showcase_component_TableComponent_Repository_);
  }
  let date = new Date();
  date.setTime($Primitives.widenLongToDouble($LongUtils.minus(now, $Primitives.widenIntToLong(diff))));
  return date;
 }
 /** @nodts */
 static $clinit() {
  Repository.$clinit = () =>{};
  Repository.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Repository;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
  Random = goog.module.get('java.util.Random$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number} @nodts*/
Repository.f_ONE_WEEK_IN_MILLIS__org_patternfly_showcase_component_TableComponent_Repository_ = 604800000;
$Util.$setClassMetadata(Repository, 'org.patternfly.showcase.component.TableComponent$Repository');

exports = Repository;

//# sourceMappingURL=TableComponent$Repository.js.map

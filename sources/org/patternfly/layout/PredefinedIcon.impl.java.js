goog.module('org.patternfly.layout.PredefinedIcon$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<PredefinedIcon>}
 */
class PredefinedIcon extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_className__org_patternfly_layout_PredefinedIcon;
 }
 /** @nodts @return {?string} */
 static m_pfIcon__java_lang_String__java_lang_String(/** ?string */ name) {
  PredefinedIcon.$clinit();
  return 'pf-v5-pficon pf-v5-pficon-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts @return {?string} */
 static m_fas__java_lang_String__java_lang_String(/** ?string */ name) {
  PredefinedIcon.$clinit();
  return 'fas fa-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts @return {?string} */
 static m_far__java_lang_String__java_lang_String(/** ?string */ name) {
  PredefinedIcon.$clinit();
  return 'far fa-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts @return {!PredefinedIcon} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ className) {
  let $instance = new PredefinedIcon();
  $instance.$ctor__org_patternfly_layout_PredefinedIcon__java_lang_String__int__java_lang_String__void($name, $ordinal, className);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_PredefinedIcon__java_lang_String__int__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ className) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_className__org_patternfly_layout_PredefinedIcon = className;
 }
 /** @nodts @return {!PredefinedIcon} */
 static m_valueOf__java_lang_String__org_patternfly_layout_PredefinedIcon(/** string */ name) {
  PredefinedIcon.$clinit();
  if ($Equality.$same(PredefinedIcon.f_namesToValuesMap__org_patternfly_layout_PredefinedIcon_, null)) {
   PredefinedIcon.f_namesToValuesMap__org_patternfly_layout_PredefinedIcon_ = /**@type {Map<?string, !PredefinedIcon>}*/ ($Enums.createMapFromValues(PredefinedIcon.m_values__arrayOf_org_patternfly_layout_PredefinedIcon()));
  }
  return /**@type {PredefinedIcon}*/ ($Enums.getValueFromNameAndMap(name, PredefinedIcon.f_namesToValuesMap__org_patternfly_layout_PredefinedIcon_));
 }
 /** @nodts @return {!Array<!PredefinedIcon>} */
 static m_values__arrayOf_org_patternfly_layout_PredefinedIcon() {
  PredefinedIcon.$clinit();
  return /**@type {!Array<PredefinedIcon>}*/ ($Arrays.$init([PredefinedIcon.$static_angleDoubleLeft__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_angleDoubleRight__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_angleDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_angleLeft__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_angleRight__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_arrowLeft__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_arrowRight__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_arrowsAltV__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_bars__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_bell__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_box__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_bullhorn__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_caretDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_check__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_code__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_cog__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_copy__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_checkCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_database__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_download__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_ellipsisV__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_exclamationCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_exclamationTriangle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_externalLinkAlt__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_externalLinkSquareAlt__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_filter__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_help__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_infoCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_laptop__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_longArrowAltDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_longArrowAltUp__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_play__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_plusCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_search__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_server__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_sortAmountDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_star__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_users__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_times__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_timesCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_undo__org_patternfly_layout_PredefinedIcon, PredefinedIcon.$static_upload__org_patternfly_layout_PredefinedIcon], PredefinedIcon));
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_angleDoubleLeft__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_angleDoubleLeft__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_angleDoubleRight__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_angleDoubleRight__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_angleDown__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_angleDown__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_angleLeft__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_angleLeft__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_angleRight__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_angleRight__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_arrowLeft__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_arrowLeft__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_arrowRight__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_arrowRight__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_arrowsAltV__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_arrowsAltV__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_bars__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_bars__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_bell__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_bell__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_box__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_box__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_bullhorn__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_bullhorn__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_caretDown__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_caretDown__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_check__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_check__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_code__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_code__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_cog__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_cog__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_copy__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_copy__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_checkCircle__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_checkCircle__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_database__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_database__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_download__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_download__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_ellipsisV__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_ellipsisV__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_exclamationCircle__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_exclamationCircle__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_exclamationTriangle__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_exclamationTriangle__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_externalLinkAlt__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_externalLinkAlt__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_externalLinkSquareAlt__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_externalLinkSquareAlt__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_filter__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_filter__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_help__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_help__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_infoCircle__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_infoCircle__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_laptop__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_laptop__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_longArrowAltDown__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_longArrowAltDown__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_longArrowAltUp__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_longArrowAltUp__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_play__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_play__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_plusCircle__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_plusCircle__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_search__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_search__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_server__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_server__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_sortAmountDown__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_sortAmountDown__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_star__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_star__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_users__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_users__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_times__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_times__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_timesCircle__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_timesCircle__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_undo__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_undo__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts @return {!PredefinedIcon} */
 static get f_upload__org_patternfly_layout_PredefinedIcon() {
  return (PredefinedIcon.$clinit(), PredefinedIcon.$static_upload__org_patternfly_layout_PredefinedIcon);
 }
 /** @nodts */
 static $clinit() {
  PredefinedIcon.$clinit = () =>{};
  PredefinedIcon.$loadModules();
  Enum.$clinit();
  PredefinedIcon.$static_angleDoubleLeft__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('angleDoubleLeft'), PredefinedIcon.$ordinal_angleDoubleLeft__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('angle-double-left'));
  PredefinedIcon.$static_angleDoubleRight__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('angleDoubleRight'), PredefinedIcon.$ordinal_angleDoubleRight__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('angle-double-right'));
  PredefinedIcon.$static_angleDown__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('angleDown'), PredefinedIcon.$ordinal_angleDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('angle-down'));
  PredefinedIcon.$static_angleLeft__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('angleLeft'), PredefinedIcon.$ordinal_angleLeft__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('angle-left'));
  PredefinedIcon.$static_angleRight__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('angleRight'), PredefinedIcon.$ordinal_angleRight__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('angle-right'));
  PredefinedIcon.$static_arrowLeft__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('arrowLeft'), PredefinedIcon.$ordinal_arrowLeft__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('arrow-left'));
  PredefinedIcon.$static_arrowRight__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('arrowRight'), PredefinedIcon.$ordinal_arrowRight__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('arrow-right'));
  PredefinedIcon.$static_arrowsAltV__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('arrowsAltV'), PredefinedIcon.$ordinal_arrowsAltV__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('arrows-alt-v'));
  PredefinedIcon.$static_bars__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bars'), PredefinedIcon.$ordinal_bars__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('bars'));
  PredefinedIcon.$static_bell__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bell'), PredefinedIcon.$ordinal_bell__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('bell'));
  PredefinedIcon.$static_box__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('box'), PredefinedIcon.$ordinal_box__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('box'));
  PredefinedIcon.$static_bullhorn__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('bullhorn'), PredefinedIcon.$ordinal_bullhorn__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('bullhorn'));
  PredefinedIcon.$static_caretDown__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('caretDown'), PredefinedIcon.$ordinal_caretDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('caret-down'));
  PredefinedIcon.$static_check__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('check'), PredefinedIcon.$ordinal_check__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('check'));
  PredefinedIcon.$static_code__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('code'), PredefinedIcon.$ordinal_code__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('code'));
  PredefinedIcon.$static_cog__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('cog'), PredefinedIcon.$ordinal_cog__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('cog'));
  PredefinedIcon.$static_copy__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('copy'), PredefinedIcon.$ordinal_copy__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('copy'));
  PredefinedIcon.$static_checkCircle__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('checkCircle'), PredefinedIcon.$ordinal_checkCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('check-circle'));
  PredefinedIcon.$static_database__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('database'), PredefinedIcon.$ordinal_database__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('database'));
  PredefinedIcon.$static_download__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('download'), PredefinedIcon.$ordinal_download__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('download'));
  PredefinedIcon.$static_ellipsisV__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('ellipsisV'), PredefinedIcon.$ordinal_ellipsisV__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('ellipsis-v'));
  PredefinedIcon.$static_exclamationCircle__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('exclamationCircle'), PredefinedIcon.$ordinal_exclamationCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('exclamation-circle'));
  PredefinedIcon.$static_exclamationTriangle__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('exclamationTriangle'), PredefinedIcon.$ordinal_exclamationTriangle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('exclamation-triangle'));
  PredefinedIcon.$static_externalLinkAlt__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('externalLinkAlt'), PredefinedIcon.$ordinal_externalLinkAlt__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('external-link-alt'));
  PredefinedIcon.$static_externalLinkSquareAlt__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('externalLinkSquareAlt'), PredefinedIcon.$ordinal_externalLinkSquareAlt__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('external-link-square-alt'));
  PredefinedIcon.$static_filter__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('filter'), PredefinedIcon.$ordinal_filter__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('filter'));
  PredefinedIcon.$static_help__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('help'), PredefinedIcon.$ordinal_help__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_pfIcon__java_lang_String__java_lang_String('help'));
  PredefinedIcon.$static_infoCircle__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('infoCircle'), PredefinedIcon.$ordinal_infoCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('info-circle'));
  PredefinedIcon.$static_laptop__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('laptop'), PredefinedIcon.$ordinal_laptop__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('laptop'));
  PredefinedIcon.$static_longArrowAltDown__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('longArrowAltDown'), PredefinedIcon.$ordinal_longArrowAltDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('long-arrow-alt-down'));
  PredefinedIcon.$static_longArrowAltUp__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('longArrowAltUp'), PredefinedIcon.$ordinal_longArrowAltUp__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('long-arrow-alt-up'));
  PredefinedIcon.$static_play__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('play'), PredefinedIcon.$ordinal_play__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('play'));
  PredefinedIcon.$static_plusCircle__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('plusCircle'), PredefinedIcon.$ordinal_plusCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('plus-circle'));
  PredefinedIcon.$static_search__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('search'), PredefinedIcon.$ordinal_search__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('search'));
  PredefinedIcon.$static_server__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('server'), PredefinedIcon.$ordinal_server__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('server'));
  PredefinedIcon.$static_sortAmountDown__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('sortAmountDown'), PredefinedIcon.$ordinal_sortAmountDown__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('sort-amount-down'));
  PredefinedIcon.$static_star__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('star'), PredefinedIcon.$ordinal_star__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('star'));
  PredefinedIcon.$static_users__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('users'), PredefinedIcon.$ordinal_users__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('users'));
  PredefinedIcon.$static_times__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('times'), PredefinedIcon.$ordinal_times__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('times'));
  PredefinedIcon.$static_timesCircle__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('timesCircle'), PredefinedIcon.$ordinal_timesCircle__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('times-circle'));
  PredefinedIcon.$static_undo__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('undo'), PredefinedIcon.$ordinal_undo__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('undo'));
  PredefinedIcon.$static_upload__org_patternfly_layout_PredefinedIcon = PredefinedIcon.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName('upload'), PredefinedIcon.$ordinal_upload__org_patternfly_layout_PredefinedIcon, PredefinedIcon.m_fas__java_lang_String__java_lang_String('upload'));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PredefinedIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_angleDoubleLeft__org_patternfly_layout_PredefinedIcon = 0;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_angleDoubleRight__org_patternfly_layout_PredefinedIcon = 1;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_angleDown__org_patternfly_layout_PredefinedIcon = 2;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_angleLeft__org_patternfly_layout_PredefinedIcon = 3;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_angleRight__org_patternfly_layout_PredefinedIcon = 4;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_arrowLeft__org_patternfly_layout_PredefinedIcon = 5;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_arrowRight__org_patternfly_layout_PredefinedIcon = 6;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_arrowsAltV__org_patternfly_layout_PredefinedIcon = 7;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_bars__org_patternfly_layout_PredefinedIcon = 8;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_bell__org_patternfly_layout_PredefinedIcon = 9;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_box__org_patternfly_layout_PredefinedIcon = 10;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_bullhorn__org_patternfly_layout_PredefinedIcon = 11;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_caretDown__org_patternfly_layout_PredefinedIcon = 12;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_check__org_patternfly_layout_PredefinedIcon = 13;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_code__org_patternfly_layout_PredefinedIcon = 14;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_cog__org_patternfly_layout_PredefinedIcon = 15;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_copy__org_patternfly_layout_PredefinedIcon = 16;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_checkCircle__org_patternfly_layout_PredefinedIcon = 17;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_database__org_patternfly_layout_PredefinedIcon = 18;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_download__org_patternfly_layout_PredefinedIcon = 19;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_ellipsisV__org_patternfly_layout_PredefinedIcon = 20;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_exclamationCircle__org_patternfly_layout_PredefinedIcon = 21;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_exclamationTriangle__org_patternfly_layout_PredefinedIcon = 22;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_externalLinkAlt__org_patternfly_layout_PredefinedIcon = 23;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_externalLinkSquareAlt__org_patternfly_layout_PredefinedIcon = 24;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_filter__org_patternfly_layout_PredefinedIcon = 25;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_help__org_patternfly_layout_PredefinedIcon = 26;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_infoCircle__org_patternfly_layout_PredefinedIcon = 27;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_laptop__org_patternfly_layout_PredefinedIcon = 28;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_longArrowAltDown__org_patternfly_layout_PredefinedIcon = 29;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_longArrowAltUp__org_patternfly_layout_PredefinedIcon = 30;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_play__org_patternfly_layout_PredefinedIcon = 31;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_plusCircle__org_patternfly_layout_PredefinedIcon = 32;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_search__org_patternfly_layout_PredefinedIcon = 33;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_server__org_patternfly_layout_PredefinedIcon = 34;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_sortAmountDown__org_patternfly_layout_PredefinedIcon = 35;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_star__org_patternfly_layout_PredefinedIcon = 36;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_users__org_patternfly_layout_PredefinedIcon = 37;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_times__org_patternfly_layout_PredefinedIcon = 38;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_timesCircle__org_patternfly_layout_PredefinedIcon = 39;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_undo__org_patternfly_layout_PredefinedIcon = 40;
/**@const {number} @nodts*/
PredefinedIcon.$ordinal_upload__org_patternfly_layout_PredefinedIcon = 41;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_angleDoubleLeft__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_angleDoubleRight__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_angleDown__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_angleLeft__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_angleRight__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_arrowLeft__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_arrowRight__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_arrowsAltV__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_bars__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_bell__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_box__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_bullhorn__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_caretDown__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_check__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_code__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_cog__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_copy__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_checkCircle__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_database__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_download__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_ellipsisV__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_exclamationCircle__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_exclamationTriangle__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_externalLinkAlt__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_externalLinkSquareAlt__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_filter__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_help__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_infoCircle__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_laptop__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_longArrowAltDown__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_longArrowAltUp__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_play__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_plusCircle__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_search__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_server__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_sortAmountDown__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_star__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_users__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_times__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_timesCircle__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_undo__org_patternfly_layout_PredefinedIcon;
/**@private {!PredefinedIcon} @nodts*/
PredefinedIcon.$static_upload__org_patternfly_layout_PredefinedIcon;
/**@type {Map<?string, !PredefinedIcon>} @nodts*/
PredefinedIcon.f_namesToValuesMap__org_patternfly_layout_PredefinedIcon_;
$Util.$setClassMetadataForEnum(PredefinedIcon, 'org.patternfly.layout.PredefinedIcon');

exports = PredefinedIcon;

//# sourceMappingURL=PredefinedIcon.js.map

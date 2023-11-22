goog.module('org.patternfly.layout.gallery.Gallery$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.layout.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.layout.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.layout.Variables$impl');
let GalleryItem = goog.forwardDeclare('org.patternfly.layout.gallery.GalleryItem$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLDivElement, Gallery>}
 */
class Gallery extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Gallery} */
 static m_gallery__org_patternfly_layout_gallery_Gallery() {
  Gallery.$clinit();
  return Gallery.$create__();
 }
 /** @nodts @return {!Gallery} */
 static $create__() {
  Gallery.$clinit();
  let $instance = new Gallery();
  $instance.$ctor__org_patternfly_layout_gallery_Gallery__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_layout_gallery_Gallery__void() {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Gallery} */
 m_that__org_patternfly_layout_gallery_Gallery() {
  return this;
 }
 /** @nodts @return {Gallery} */
 m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/** GalleryItem */ item) {
  return /**@type {Gallery}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Gallery));
 }
 /** @nodts @return {Gallery} */
 m_gutter__org_patternfly_layout_gallery_Gallery() {
  return /**@type {Gallery}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_gutter__org_patternfly_layout_Classes)], j_l_String))), Gallery));
 }
 /** @nodts @return {Gallery} */
 m_minWidths__java_util_Map__org_patternfly_layout_gallery_Gallery(/** Map<Breakpoint, ?string> */ minWidths) {
  if (!$Equality.$same(minWidths, null)) {
   this.m_minMax__java_lang_String__java_util_Map__void_$p_org_patternfly_layout_gallery_Gallery('min', minWidths);
  }
  return this;
 }
 /** @nodts @return {Gallery} */
 m_maxWidths__java_util_Map__org_patternfly_layout_gallery_Gallery(/** Map<Breakpoint, ?string> */ maxWidths) {
  if (!$Equality.$same(maxWidths, null)) {
   this.m_minMax__java_lang_String__java_util_Map__void_$p_org_patternfly_layout_gallery_Gallery('max', maxWidths);
  }
  return this;
 }
 /** @nodts */
 m_minMax__java_lang_String__java_util_Map__void_$p_org_patternfly_layout_gallery_Gallery(/** ?string */ minMax, /** Map<Breakpoint, ?string> */ minWidths) {
  for (let $iterator = minWidths.m_entrySet__java_util_Set().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<Breakpoint, ?string>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Entry));
   {
    let breakpoint = /**@type {Breakpoint}*/ ($Casts.$to(entry.m_getKey__java_lang_Object(), Breakpoint));
    let minMaxBreak = $Equality.$same(breakpoint, Breakpoint.f_default___org_patternfly_layout_Breakpoint) ? minMax : j_l_String.m_valueOf__java_lang_Object__java_lang_String(minMax) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(breakpoint.f_value__org_patternfly_layout_Breakpoint);
    Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_layout_Variable(Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_GridTemplateColumns__org_patternfly_layout_Variables, minMaxBreak], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {?string}*/ ($Casts.$to(entry.m_getValue__java_lang_Object(), j_l_String)));
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Gallery} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_gallery_Gallery();
 }
 /** @nodts */
 static $clinit() {
  Gallery.$clinit = () =>{};
  Gallery.$loadModules();
  BaseLayout.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Gallery;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Breakpoint = goog.module.get('org.patternfly.layout.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  Variable = goog.module.get('org.patternfly.layout.Variable$impl');
  Variables = goog.module.get('org.patternfly.layout.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Gallery, 'org.patternfly.layout.gallery.Gallery');

exports = Gallery;

//# sourceMappingURL=Gallery.js.map

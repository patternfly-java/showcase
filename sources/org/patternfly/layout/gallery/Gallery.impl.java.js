goog.module('org.patternfly.layout.gallery.Gallery$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let GalleryItem = goog.forwardDeclare('org.patternfly.layout.gallery.GalleryItem$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
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
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Gallery} */
 m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/** GalleryItem */ item) {
  return /**@type {Gallery}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Gallery));
 }
 /** @nodts @return {Gallery} */
 m_gutter__org_patternfly_layout_gallery_Gallery() {
  return /**@type {Gallery}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_gutter__org_patternfly_style_Classes)], j_l_String))), Gallery));
 }
 /** @final @nodts @return {Gallery} */
 m_minWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/** Tuple<Breakpoint, ?string> */ first, /** Array<Tuple<Breakpoint, ?string>> */ rest) {
  this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('min', first);
  if (!$Equality.$same(rest, null)) {
   for (let $array = rest, $index = 0; $index < $array.length; $index++) {
    let tuple = $array[$index];
    {
     this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('min', tuple);
    }
   }
  }
  return this;
 }
 /** @final @nodts @return {Gallery} */
 m_maxWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/** Tuple<Breakpoint, ?string> */ first, /** Array<Tuple<Breakpoint, ?string>> */ rest) {
  this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('max', first);
  if (!$Equality.$same(rest, null)) {
   for (let $array = rest, $index = 0; $index < $array.length; $index++) {
    let tuple = $array[$index];
    {
     this.m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery('max', tuple);
    }
   }
  }
  return this;
 }
 /** @nodts @return {Gallery} */
 m_that__org_patternfly_layout_gallery_Gallery() {
  return this;
 }
 /** @nodts */
 m_minMax__java_lang_String__org_patternfly_core_Tuple__void_$p_org_patternfly_layout_gallery_Gallery(/** ?string */ minMax, /** Tuple<Breakpoint, ?string> */ tuple) {
  let minMaxBreak = $Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Breakpoint.f_default___org_patternfly_style_Breakpoint) ? minMax : j_l_String.m_valueOf__java_lang_Object__java_lang_String(minMax) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {Breakpoint}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Breakpoint)).f_value__org_patternfly_style_Breakpoint);
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_gallery__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_GridTemplateColumns__org_patternfly_style_Variables, minMaxBreak], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {?string}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, j_l_String)));
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Gallery, 'org.patternfly.layout.gallery.Gallery');

exports = Gallery;

//# sourceMappingURL=Gallery.js.map

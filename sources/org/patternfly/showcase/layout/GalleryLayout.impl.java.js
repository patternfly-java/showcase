goog.module('org.patternfly.showcase.layout.GalleryLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Gallery = goog.forwardDeclare('org.patternfly.layout.gallery.Gallery$impl');
let GalleryItem = goog.forwardDeclare('org.patternfly.layout.gallery.GalleryItem$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GalleryLayout extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!GalleryLayout} */
 static $create__() {
  GalleryLayout.$clinit();
  let $instance = new GalleryLayout();
  $instance.$ctor__org_patternfly_showcase_layout_GalleryLayout__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_layout_GalleryLayout__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Gallery', 'https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/gallery/Gallery.html', 'https://www.patternfly.org/layouts/gallery/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('The gallery layout is used to arrange content in a responsive grid. Content will wrap responsively to create uniform rows and columns.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('gallery-basic', 'Basic', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('gallery-basic'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-gallery'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('gallery-gutter', 'With gutters', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('gallery-gutter'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-gallery'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Gallery}*/ ($Casts.$to(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_gutter__org_jboss_elemento_TypedBuilder(), Gallery)).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('gallery-min-width', 'Adjusting min widths', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('gallery-min-width'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-gallery'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Gallery}*/ ($Casts.$to(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_gutter__org_jboss_elemento_TypedBuilder(), Gallery)).m_minWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_md__org_patternfly_style_Breakpoint, '100px')), /**@type {!Array<Tuple<Breakpoint, ?string>>}*/ ($Arrays.$init([/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_lg__org_patternfly_style_Breakpoint, '150px')), /**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_xl__org_patternfly_style_Breakpoint, '200px')), /**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f__2xl__org_patternfly_style_Breakpoint, '300px'))], Tuple))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('gallery-max-width', 'Adjusting max widths', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('gallery-max-width'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-gallery'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Gallery}*/ ($Casts.$to(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_gutter__org_jboss_elemento_TypedBuilder(), Gallery)).m_minWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_md__org_patternfly_style_Breakpoint, '280px')), /**@type {!Array<Tuple<Breakpoint, ?string>>}*/ ($Arrays.$init([/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_lg__org_patternfly_style_Breakpoint, '320px')), /**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f__2xl__org_patternfly_style_Breakpoint, '400px'))], Tuple))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('gallery-min-max-width', 'Adjusting min and max widths', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('gallery-min-max-width'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-core-l-gallery'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Gallery}*/ ($Casts.$to(Gallery.m_gallery__org_patternfly_layout_gallery_Gallery().m_gutter__org_jboss_elemento_TypedBuilder(), Gallery)).m_minWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_default___org_patternfly_style_Breakpoint, '100%')), /**@type {!Array<Tuple<Breakpoint, ?string>>}*/ ($Arrays.$init([/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_md__org_patternfly_style_Breakpoint, '100px')), /**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_xl__org_patternfly_style_Breakpoint, '300px'))], Tuple))).m_maxWidths__org_patternfly_core_Tuple__arrayOf_org_patternfly_core_Tuple__org_patternfly_layout_gallery_Gallery(/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_md__org_patternfly_style_Breakpoint, '200px')), /**@type {!Array<Tuple<Breakpoint, ?string>>}*/ ($Arrays.$init([/**@type {Tuple<Breakpoint, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Breakpoint.f_xl__org_patternfly_style_Breakpoint, '1fr'))], Tuple))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_patternfly_layout_gallery_GalleryItem().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('gallery-alternative-components', 'Alternative components', /**@type {?string}*/ ($Casts.$to(PatternFlyCode.code.get('gallery-alternative-components'), j_l_String)), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Gallery.m_gallery__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_Gallery(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder()).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_GalleryItem(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder()).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_GalleryItem(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder()).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_GalleryItem(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder()).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_GalleryItem(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder()).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem))).m_addItem__org_patternfly_layout_gallery_GalleryItem__org_patternfly_layout_gallery_Gallery(/**@type {GalleryItem}*/ ($Casts.$to(GalleryItem.m_galleryItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_gallery_GalleryItem(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder()).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Gallery item'), GalleryItem)))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  GalleryLayout.$clinit = () =>{};
  GalleryLayout.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GalleryLayout;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Gallery = goog.module.get('org.patternfly.layout.gallery.Gallery$impl');
  GalleryItem = goog.module.get('org.patternfly.layout.gallery.GalleryItem$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(GalleryLayout, 'org.patternfly.showcase.layout.GalleryLayout');

exports = GalleryLayout;

//# sourceMappingURL=GalleryLayout.js.map

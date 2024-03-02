goog.module('org.patternfly.showcase.layout.GalleryLayout');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.layout.gallery.Gallery');
goog.require('org.patternfly.layout.gallery.GalleryItem');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.layout.Layout.$Overlay');
goog.require('org.patternfly.style.Breakpoint');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const GalleryLayout = goog.require('org.patternfly.showcase.layout.GalleryLayout$impl');
exports = GalleryLayout;

goog.module('org.patternfly.layout.gallery.Gallery');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.layout.BaseLayout');
goog.require('org.patternfly.layout.Breakpoint');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.Variable');
goog.require('org.patternfly.layout.Variables');
goog.require('org.patternfly.layout.gallery.GalleryItem');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Gallery = goog.require('org.patternfly.layout.gallery.Gallery$impl');
exports = Gallery;

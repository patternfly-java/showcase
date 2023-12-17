goog.module('org.patternfly.showcase.component.BrandComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.patternfly.component.brand.Brand');
goog.require('org.patternfly.core.Tuples');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.style.Breakpoint');
goog.require('vmbootstrap.Casts');

const BrandComponent = goog.require('org.patternfly.showcase.component.BrandComponent$impl');
exports = BrandComponent;

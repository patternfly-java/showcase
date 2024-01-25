goog.module('org.patternfly.showcase.component.BackToTopComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.backtotop.BackToTop');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('vmbootstrap.Casts');

const BackToTopComponent = goog.require('org.patternfly.showcase.component.BackToTopComponent$impl');
exports = BackToTopComponent;

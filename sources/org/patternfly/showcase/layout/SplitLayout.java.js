goog.module('org.patternfly.showcase.layout.SplitLayout');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.layout.split.Split');
goog.require('org.patternfly.layout.split.SplitItem');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const SplitLayout = goog.require('org.patternfly.showcase.layout.SplitLayout$impl');
exports = SplitLayout;

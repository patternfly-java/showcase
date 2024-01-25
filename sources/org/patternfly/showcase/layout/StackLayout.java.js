goog.module('org.patternfly.showcase.layout.StackLayout');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.layout.stack.Stack');
goog.require('org.patternfly.layout.stack.StackItem');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const StackLayout = goog.require('org.patternfly.showcase.layout.StackLayout$impl');
exports = StackLayout;

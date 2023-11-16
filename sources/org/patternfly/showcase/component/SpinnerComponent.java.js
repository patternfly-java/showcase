goog.module('org.patternfly.showcase.component.SpinnerComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLHeadingElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.spinner.Spinner');
goog.require('org.patternfly.component.text.TextContent');
goog.require('org.patternfly.layout.Size');
goog.require('org.patternfly.showcase.LoremIpsum');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Casts');

const SpinnerComponent = goog.require('org.patternfly.showcase.component.SpinnerComponent$impl');
exports = SpinnerComponent;

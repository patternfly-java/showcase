goog.module('org.patternfly.showcase.component.LabelComponent');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.label.Label');
goog.require('org.patternfly.component.label.LabelGroup');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.style.Color');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Casts');

const LabelComponent = goog.require('org.patternfly.showcase.component.LabelComponent$impl');
exports = LabelComponent;

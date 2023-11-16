goog.module('org.patternfly.showcase.component.CardComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.jboss.elemento.InputType');
goog.require('org.patternfly.component.Card');
goog.require('org.patternfly.component.Card.Body');
goog.require('org.patternfly.component.Card.Footer');
goog.require('org.patternfly.component.Card.Head');
goog.require('org.patternfly.component.Card.Head.Actions');
goog.require('org.patternfly.component.Card.Header');
goog.require('org.patternfly.component.Dropdown');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CardComponent = goog.require('org.patternfly.showcase.component.CardComponent$impl');
exports = CardComponent;

goog.module('org.patternfly.component.card.CardExpandableContent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.card.CardBody');
goog.require('org.patternfly.component.card.CardFooter');
goog.require('org.patternfly.core.Modifiers.NoFill');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CardExpandableContent = goog.require('org.patternfly.component.card.CardExpandableContent$impl');
exports = CardExpandableContent;

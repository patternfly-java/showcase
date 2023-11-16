goog.module('org.patternfly.showcase.component.OptionsMenuComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.Icon');
goog.require('org.patternfly.component.MultiOptionsMenu');
goog.require('org.patternfly.component.MultiOptionsMenu.Group');
goog.require('org.patternfly.component.SingleOptionsMenu');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const OptionsMenuComponent = goog.require('org.patternfly.showcase.component.OptionsMenuComponent$impl');
exports = OptionsMenuComponent;

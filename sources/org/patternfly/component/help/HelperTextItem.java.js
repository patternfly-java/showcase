goog.module('org.patternfly.component.help.HelperTextItem');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.patternfly.component.help.HelperTextSubComponent');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.HasValue');
goog.require('org.patternfly.core.IconPosition');
goog.require('org.patternfly.core.ValidationStatus');
goog.require('org.patternfly.core.WithIcon');
goog.require('org.patternfly.core.WithIconAndText');
goog.require('org.patternfly.core.WithText');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const HelperTextItem = goog.require('org.patternfly.component.help.HelperTextItem$impl');
exports = HelperTextItem;

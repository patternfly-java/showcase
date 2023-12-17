goog.module('org.patternfly.core.Expandable');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.style.Classes');

const Expandable = goog.require('org.patternfly.core.Expandable$impl');
exports = Expandable;

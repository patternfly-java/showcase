goog.module('org.patternfly.component.navigation.NavigationItem');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const NavigationItem = goog.require('org.patternfly.component.navigation.NavigationItem$impl');
exports = NavigationItem;

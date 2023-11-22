goog.module('org.patternfly.component.tabs.Tabs');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('vmbootstrap.Casts');

const Tabs = goog.require('org.patternfly.component.tabs.Tabs$impl');
exports = Tabs;

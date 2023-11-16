goog.module('org.patternfly.component.sidebar.Sidebar');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.sidebar.SidebarBody');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.layout.Brightness');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Sidebar = goog.require('org.patternfly.component.sidebar.Sidebar$impl');
exports = Sidebar;

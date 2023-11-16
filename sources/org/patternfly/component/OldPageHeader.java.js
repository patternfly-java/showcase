goog.module('org.patternfly.component.OldPageHeader');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.OldPageSidebar');
goog.require('org.patternfly.component.OldPageTools');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.navigation.Navigation');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const OldPageHeader = goog.require('org.patternfly.component.OldPageHeader$impl');
exports = OldPageHeader;

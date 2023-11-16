goog.module('org.patternfly.component.menu.MenuItemAction');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.ComponentReference');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MenuItemAction = goog.require('org.patternfly.component.menu.MenuItemAction$impl');
exports = MenuItemAction;

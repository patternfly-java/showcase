goog.module('org.patternfly.component.menu.MenuToggle');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.avatar.Avatar');
goog.require('org.patternfly.component.badge.Badge');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.component.menu.MenuToggleAction');
goog.require('org.patternfly.component.menu.MenuToggleCheckbox');
goog.require('org.patternfly.component.menu.MenuToggleType');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Modifiers.Disabled');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MenuToggle = goog.require('org.patternfly.component.menu.MenuToggle$impl');
exports = MenuToggle;

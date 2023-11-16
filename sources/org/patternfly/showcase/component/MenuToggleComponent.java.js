goog.module('org.patternfly.showcase.component.MenuToggleComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.avatar.Avatar');
goog.require('org.patternfly.component.badge.Badge');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.component.menu.MenuToggleAction');
goog.require('org.patternfly.component.menu.MenuToggleCheckbox');
goog.require('org.patternfly.component.menu.MenuToggleType');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Casts');

const MenuToggleComponent = goog.require('org.patternfly.showcase.component.MenuToggleComponent$impl');
exports = MenuToggleComponent;

goog.module('org.patternfly.component.menu.Menu');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Predicate');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.Collectors');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.divider.Divider');
goog.require('org.patternfly.component.divider.DividerType');
goog.require('org.patternfly.component.menu.MenuActionHandler');
goog.require('org.patternfly.component.menu.MenuContent');
goog.require('org.patternfly.component.menu.MenuFooter');
goog.require('org.patternfly.component.menu.MenuGroup');
goog.require('org.patternfly.component.menu.MenuHeader');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuItemAction');
goog.require('org.patternfly.component.menu.MenuSearchInput');
goog.require('org.patternfly.component.menu.MenuType');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Modifiers.Plain');
goog.require('org.patternfly.core.SelectionMode');
goog.require('org.patternfly.handler.MultiSelectHandler');
goog.require('org.patternfly.handler.SelectHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.Variable');
goog.require('org.patternfly.layout.Variables');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Menu = goog.require('org.patternfly.component.menu.Menu$impl');
exports = Menu;

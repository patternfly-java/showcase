goog.module('org.patternfly.component.menu.MenuList');

goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentReference');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.divider.Divider');
goog.require('org.patternfly.component.divider.DividerType');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuItemType');
goog.require('org.patternfly.component.menu.MenuType');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.SelectionMode');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MenuList = goog.require('org.patternfly.component.menu.MenuList$impl');
exports = MenuList;

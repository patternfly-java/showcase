goog.module('org.patternfly.component.navigation.NavigationGroup');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLHeadingElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.divider.Divider');
goog.require('org.patternfly.component.navigation.NavigationItem');
goog.require('org.patternfly.component.navigation.NavigationSubComponent');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const NavigationGroup = goog.require('org.patternfly.component.navigation.NavigationGroup$impl');
exports = NavigationGroup;

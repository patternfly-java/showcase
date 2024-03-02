goog.module('org.patternfly.component.breadcrumb.BreadcrumbItem');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.breadcrumb.BreadcrumbSubComponent');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.WithText');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const BreadcrumbItem = goog.require('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');
exports = BreadcrumbItem;

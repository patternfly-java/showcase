goog.module('org.patternfly.component.CollapseExpand');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Object');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Casts');

const CollapseExpand = goog.require('org.patternfly.component.CollapseExpand$impl');
exports = CollapseExpand;

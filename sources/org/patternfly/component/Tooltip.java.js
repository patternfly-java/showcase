goog.module('org.patternfly.component.Tooltip');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.FocusEvent.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.Position');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Tooltip = goog.require('org.patternfly.component.Tooltip$impl');
exports = Tooltip;

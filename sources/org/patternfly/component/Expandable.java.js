goog.module('org.patternfly.component.Expandable');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.CollapseExpand');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Expandable = goog.require('org.patternfly.component.Expandable$impl');
exports = Expandable;

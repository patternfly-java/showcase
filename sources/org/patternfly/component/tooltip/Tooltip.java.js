goog.module('org.patternfly.component.tooltip.Tooltip');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('java.util.EnumSet');
goog.require('java.util.List');
goog.require('java.util.Set');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.tooltip.TriggerAria');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.Closeable');
goog.require('org.patternfly.handler.Callback');
goog.require('org.patternfly.handler.CloseHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.thirdparty.popper.Modifiers');
goog.require('org.patternfly.thirdparty.popper.Placement');
goog.require('org.patternfly.thirdparty.popper.PopperBuilder');
goog.require('org.patternfly.thirdparty.popper.PopperWrapper');
goog.require('org.patternfly.thirdparty.popper.TriggerAction');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Tooltip = goog.require('org.patternfly.component.tooltip.Tooltip$impl');
exports = Tooltip;

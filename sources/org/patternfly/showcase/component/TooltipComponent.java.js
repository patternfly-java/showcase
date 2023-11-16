goog.module('org.patternfly.showcase.component.TooltipComponent');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('elemental2.dom.ScrollIntoViewOptions.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.ObserverCallback');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.tooltip.Tooltip');
goog.require('org.patternfly.handler.CloseHandler');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.LoremIpsum');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('org.patternfly.thirdparty.popper.Placement');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TooltipComponent = goog.require('org.patternfly.showcase.component.TooltipComponent$impl');
exports = TooltipComponent;

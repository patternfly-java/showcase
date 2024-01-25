goog.module('org.patternfly.component.label.LabelGroup');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.HashSet');
goog.require('java.util.LinkedHashMap');
goog.require('java.util.Map');
goog.require('java.util.Set');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.label.Label');
goog.require('org.patternfly.component.tooltip.TooltipToggle');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.Closeable');
goog.require('org.patternfly.core.HasValues');
goog.require('org.patternfly.handler.CloseHandler');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Color');
goog.require('org.patternfly.style.Modifiers.Vertical');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const LabelGroup = goog.require('org.patternfly.component.label.LabelGroup$impl');
exports = LabelGroup;

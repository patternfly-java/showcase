goog.module('org.patternfly.showcase.component.AlertComponent');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.actionlist.ActionList');
goog.require('org.patternfly.component.actionlist.ActionListItem');
goog.require('org.patternfly.component.alert.Alert');
goog.require('org.patternfly.component.alert.AlertActionGroup');
goog.require('org.patternfly.component.alert.AlertDescription');
goog.require('org.patternfly.component.alert.AlertGroup');
goog.require('org.patternfly.component.alert.AlertGroupType');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.Severity');
goog.require('org.patternfly.handler.CloseHandler');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.LoremIpsum');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.primitives.$double');
goog.require('vmbootstrap.primitives.$int');

const AlertComponent = goog.require('org.patternfly.showcase.component.AlertComponent$impl');
exports = AlertComponent;

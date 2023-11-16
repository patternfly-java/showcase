goog.module('org.patternfly.component.GroupedOptionsMenu.Group');

goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.Function');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.OldItemDisplay');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.core.HasValue');
goog.require('org.patternfly.handler.SelectHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Group = goog.require('org.patternfly.component.GroupedOptionsMenu.Group$impl');
exports = Group;

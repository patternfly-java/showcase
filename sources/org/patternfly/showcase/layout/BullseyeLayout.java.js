goog.module('org.patternfly.showcase.layout.BullseyeLayout');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.layout.bullseye.Bullseye');
goog.require('org.patternfly.layout.bullseye.BullseyeItem');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.layout.Layout.$Overlay');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const BullseyeLayout = goog.require('org.patternfly.showcase.layout.BullseyeLayout$impl');
exports = BullseyeLayout;

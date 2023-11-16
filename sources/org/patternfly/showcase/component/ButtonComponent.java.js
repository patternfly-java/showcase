goog.module('org.patternfly.showcase.component.ButtonComponent');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.badge.Badge');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.button.IconPosition');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ButtonComponent = goog.require('org.patternfly.showcase.component.ButtonComponent$impl');
exports = ButtonComponent;

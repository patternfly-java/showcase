goog.module('org.patternfly.showcase.component.EmptyStateComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.EmptyState');
goog.require('org.patternfly.component.Icon');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.handler.Callback');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Casts');

const EmptyStateComponent = goog.require('org.patternfly.showcase.component.EmptyStateComponent$impl');
exports = EmptyStateComponent;

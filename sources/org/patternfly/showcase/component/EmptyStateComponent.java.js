goog.module('org.patternfly.showcase.component.EmptyStateComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.emptystate.EmptyState');
goog.require('org.patternfly.component.emptystate.EmptyStateActions');
goog.require('org.patternfly.component.emptystate.EmptyStateBody');
goog.require('org.patternfly.component.emptystate.EmptyStateFooter');
goog.require('org.patternfly.component.emptystate.EmptyStateHeader');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('org.patternfly.style.Size');
goog.require('org.patternfly.style.Variable');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const EmptyStateComponent = goog.require('org.patternfly.showcase.component.EmptyStateComponent$impl');
exports = EmptyStateComponent;

goog.module('org.patternfly.component.emptystate.EmptyStateHeader');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLHeadingElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.emptystate.EmptyStateSubComponent');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.component.spinner.Spinner');
goog.require('org.patternfly.core.Validation');
goog.require('org.patternfly.core.WithIcon');
goog.require('org.patternfly.core.WithText');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('org.patternfly.style.Size');
goog.require('org.patternfly.style.Variable');
goog.require('org.patternfly.style.Variables');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const EmptyStateHeader = goog.require('org.patternfly.component.emptystate.EmptyStateHeader$impl');
exports = EmptyStateHeader;

goog.module('org.patternfly.component.EmptyState');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.EmptyState.Body');
goog.require('org.patternfly.component.Icon');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.spinner.Spinner');
goog.require('org.patternfly.component.title.Title');
goog.require('org.patternfly.handler.Callback');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.layout.Size');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const EmptyState = goog.require('org.patternfly.component.EmptyState$impl');
exports = EmptyState;

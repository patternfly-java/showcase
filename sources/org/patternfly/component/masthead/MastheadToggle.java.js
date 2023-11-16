goog.module('org.patternfly.component.masthead.MastheadToggle');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.page.Page');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MastheadToggle = goog.require('org.patternfly.component.masthead.MastheadToggle$impl');
exports = MastheadToggle;

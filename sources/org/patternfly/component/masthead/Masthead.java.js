goog.module('org.patternfly.component.masthead.Masthead');

goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.brand.Brand');
goog.require('org.patternfly.component.masthead.MastheadContent');
goog.require('org.patternfly.component.masthead.MastheadMain');
goog.require('org.patternfly.component.masthead.MastheadToggle');
goog.require('org.patternfly.component.toolbar.Toolbar');
goog.require('org.patternfly.core.Modifiers.Inline');
goog.require('org.patternfly.layout.Breakpoint');
goog.require('org.patternfly.layout.Brightness');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.Size');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Masthead = goog.require('org.patternfly.component.masthead.Masthead$impl');
exports = Masthead;

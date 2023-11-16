goog.module('org.patternfly.component.page.Page');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.masthead.Masthead');
goog.require('org.patternfly.component.page.PageMain');
goog.require('org.patternfly.component.sidebar.Sidebar');
goog.require('org.patternfly.component.skiptocontent.SkipToContent');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Page = goog.require('org.patternfly.component.page.Page$impl');
exports = Page;

goog.module('org.patternfly.component.page.PageSectionBuilder');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Container');
goog.require('org.jboss.elemento.Finder');
goog.require('org.jboss.elemento.HasElement');
goog.require('org.jboss.elemento.HasHTMLElement');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.page.PageMainBody');
goog.require('org.patternfly.component.page.PageSection');
goog.require('org.patternfly.layout.Breakpoint');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.Sticky');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');
exports = PageSectionBuilder;

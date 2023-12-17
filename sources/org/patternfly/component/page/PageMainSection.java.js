goog.module('org.patternfly.component.page.PageMainSection');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.EnumSet');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.page.PageSectionBuilder');
goog.require('org.patternfly.core.Logger');
goog.require('org.patternfly.style.Brightness');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Fill');
goog.require('org.patternfly.style.Modifiers.NoFill');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PageMainSection = goog.require('org.patternfly.component.page.PageMainSection$impl');
exports = PageMainSection;

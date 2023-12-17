goog.module('org.patternfly.layout.grid.GridItem');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.core.Logger');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.core.Tuples');
goog.require('org.patternfly.layout.BaseLayout');
goog.require('org.patternfly.layout.grid.Grid');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Fill');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const GridItem = goog.require('org.patternfly.layout.grid.GridItem$impl');
exports = GridItem;

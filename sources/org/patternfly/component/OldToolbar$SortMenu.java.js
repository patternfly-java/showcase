goog.module('org.patternfly.component.OldToolbar.SortMenu');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Object');
goog.require('java.util.function.BiConsumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.patternfly.component.Icon');
goog.require('org.patternfly.component.MultiOptionsMenu');
goog.require('org.patternfly.component.MultiOptionsMenu.Group');
goog.require('org.patternfly.component.OldToolbar');
goog.require('org.patternfly.component.OldToolbar.SortDirection');
goog.require('org.patternfly.component.OldToolbar.SortOption');
goog.require('org.patternfly.component.OldToolbar.SortOptions');
goog.require('org.patternfly.dataprovider.DataProvider');
goog.require('org.patternfly.dataprovider.SortInfo');
goog.require('org.patternfly.handler.SelectHandler');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Casts');

const SortMenu = goog.require('org.patternfly.component.OldToolbar.SortMenu$impl');
exports = SortMenu;

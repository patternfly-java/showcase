goog.module('org.patternfly.component.OldToolbar.BulkSelect');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.Object');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.patternfly.component.Dropdown');
goog.require('org.patternfly.component.OldToolbar');
goog.require('org.patternfly.component.OldToolbar.BulkSelectOption');
goog.require('org.patternfly.dataprovider.PageInfo');
goog.require('org.patternfly.handler.SelectHandler');
goog.require('vmbootstrap.Casts');

const BulkSelect = goog.require('org.patternfly.component.OldToolbar.BulkSelect$impl');
exports = BulkSelect;

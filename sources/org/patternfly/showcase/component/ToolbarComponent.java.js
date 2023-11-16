goog.module('org.patternfly.showcase.component.ToolbarComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.OldToolbar');
goog.require('org.patternfly.component.OldToolbar.Group');
goog.require('org.patternfly.component.OldToolbar.Item');
goog.require('org.patternfly.component.Search');
goog.require('org.patternfly.component.SingleSelect');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ToolbarComponent = goog.require('org.patternfly.showcase.component.ToolbarComponent$impl');
exports = ToolbarComponent;

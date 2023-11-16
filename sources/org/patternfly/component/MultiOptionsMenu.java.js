goog.module('org.patternfly.component.MultiOptionsMenu');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLButtonElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.CollapseExpand');
goog.require('org.patternfly.component.Icon');
goog.require('org.patternfly.component.MultiOptionsMenu.Group');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.core.Modifiers.Disabled');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const MultiOptionsMenu = goog.require('org.patternfly.component.MultiOptionsMenu$impl');
exports = MultiOptionsMenu;

goog.module('org.patternfly.component.divider.Divider');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.patternfly.component.BaseComponentFlat');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.divider.DividerType');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.JavaScriptObject');

const Divider = goog.require('org.patternfly.component.divider.Divider$impl');
exports = Divider;

goog.module('org.patternfly.showcase.component.HelperTextComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.help.HelperText');
goog.require('org.patternfly.component.help.HelperTextItem');
goog.require('org.patternfly.core.ValidationStatus');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Casts');

const HelperTextComponent = goog.require('org.patternfly.showcase.component.HelperTextComponent$impl');
exports = HelperTextComponent;

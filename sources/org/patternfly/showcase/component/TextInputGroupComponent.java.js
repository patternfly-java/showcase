goog.module('org.patternfly.showcase.component.TextInputGroupComponent');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('elemental2.dom.KeyboardEvent.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.InputElementBuilder');
goog.require('org.jboss.elemento.Key');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.chip.Chip');
goog.require('org.patternfly.component.chip.ChipGroup');
goog.require('org.patternfly.component.textinputgroup.TextInputGroup');
goog.require('org.patternfly.component.textinputgroup.TextInputGroupMain');
goog.require('org.patternfly.component.textinputgroup.TextInputGroupUtilities');
goog.require('org.patternfly.handler.CloseHandler');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TextInputGroupComponent = goog.require('org.patternfly.showcase.component.TextInputGroupComponent$impl');
exports = TextInputGroupComponent;

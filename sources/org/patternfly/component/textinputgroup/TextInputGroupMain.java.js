goog.module('org.patternfly.component.textinputgroup.TextInputGroupMain');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.InputElementBuilder');
goog.require('org.jboss.elemento.InputType');
goog.require('org.patternfly.component.ComponentReference');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.chip.ChipGroup');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.component.textinputgroup.TextInputGroup');
goog.require('org.patternfly.core.Modifiers.Disabled');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TextInputGroupMain = goog.require('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');
exports = TextInputGroupMain;

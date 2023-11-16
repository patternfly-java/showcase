goog.module('org.patternfly.component.textinputgroup.TextInputGroup');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.InputElementBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.chip.ChipGroup');
goog.require('org.patternfly.component.textinputgroup.TextInputGroupMain');
goog.require('org.patternfly.component.textinputgroup.TextInputGroupUtilities');
goog.require('org.patternfly.core.HasValue');
goog.require('org.patternfly.core.Modifiers.Disabled');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TextInputGroup = goog.require('org.patternfly.component.textinputgroup.TextInputGroup$impl');
exports = TextInputGroup;

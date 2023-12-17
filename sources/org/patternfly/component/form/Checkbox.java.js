goog.module('org.patternfly.component.form.Checkbox');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('elemental2.dom.HTMLLabelElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlUtils');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.InputElementBuilder');
goog.require('org.jboss.elemento.InputType');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.form.CheckboxBody');
goog.require('org.patternfly.component.form.CheckboxDescription');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.HasValue');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('org.patternfly.style.Modifiers.Required');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Checkbox = goog.require('org.patternfly.component.form.Checkbox$impl');
exports = Checkbox;

goog.module('org.patternfly.showcase.component.TextInputComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.form.Checkbox');
goog.require('org.patternfly.component.form.TextInput');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TextInputComponent = goog.require('org.patternfly.showcase.component.TextInputComponent$impl');
exports = TextInputComponent;

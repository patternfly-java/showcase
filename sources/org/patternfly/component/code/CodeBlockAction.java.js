goog.module('org.patternfly.component.code.CodeBlockAction');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentReference');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.code.CodeBlock');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.dom.DomGlobal.$Overlay');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CodeBlockAction = goog.require('org.patternfly.component.code.CodeBlockAction$impl');
exports = CodeBlockAction;

goog.module('org.patternfly.component.code.CodeEditor');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLPreElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.code.CodeEditorHeader');
goog.require('org.patternfly.core.Modifiers.Readonly2');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CodeEditor = goog.require('org.patternfly.component.code.CodeEditor$impl');
exports = CodeEditor;

goog.module('org.patternfly.component.code.CodeEditorHeader');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentReference');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.code.CodeEditor');
goog.require('org.patternfly.component.code.CodeEditorActions');
goog.require('org.patternfly.component.code.CodeEditorHeaderMain');
goog.require('org.patternfly.component.code.CodeEditorLinks');
goog.require('org.patternfly.component.code.CodeEditorTab');
goog.require('org.patternfly.layout.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const CodeEditorHeader = goog.require('org.patternfly.component.code.CodeEditorHeader$impl');
exports = CodeEditorHeader;

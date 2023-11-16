goog.module('org.patternfly.showcase.component.CodeEditorComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.code.CodeEditor');
goog.require('org.patternfly.component.code.CodeEditorAction');
goog.require('org.patternfly.component.code.CodeEditorActions');
goog.require('org.patternfly.component.code.CodeEditorHeader');
goog.require('org.patternfly.component.code.CodeEditorHeaderMain');
goog.require('org.patternfly.component.code.CodeEditorLink');
goog.require('org.patternfly.component.code.CodeEditorLinks');
goog.require('org.patternfly.component.code.CodeEditorTab');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Casts');

const CodeEditorComponent = goog.require('org.patternfly.showcase.component.CodeEditorComponent$impl');
exports = CodeEditorComponent;

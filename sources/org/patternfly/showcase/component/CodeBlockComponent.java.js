goog.module('org.patternfly.showcase.component.CodeBlockComponent');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.code.CodeBlock');
goog.require('org.patternfly.component.code.CodeBlockAction');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Casts');

const CodeBlockComponent = goog.require('org.patternfly.showcase.component.CodeBlockComponent$impl');
exports = CodeBlockComponent;

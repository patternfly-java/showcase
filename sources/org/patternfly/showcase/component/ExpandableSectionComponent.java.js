goog.module('org.patternfly.showcase.component.ExpandableSectionComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.badge.Badge');
goog.require('org.patternfly.component.expandable.ExpandableSection');
goog.require('org.patternfly.component.expandable.ExpandableSectionContent');
goog.require('org.patternfly.component.expandable.ExpandableSectionToggle');
goog.require('org.patternfly.component.expandable.ExpandableSectionToggleText');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.handler.ToggleHandler');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.layout.stack.Stack');
goog.require('org.patternfly.layout.stack.StackItem');
goog.require('org.patternfly.showcase.LoremIpsum');
goog.require('org.patternfly.showcase.component.ComponentPage');
goog.require('org.patternfly.showcase.component.Snippet');
goog.require('vmbootstrap.Casts');

const ExpandableSectionComponent = goog.require('org.patternfly.showcase.component.ExpandableSectionComponent$impl');
exports = ExpandableSectionComponent;

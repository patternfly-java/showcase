goog.module('org.patternfly.component.descriptionlist.DescriptionListTerm');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.patternfly.component.descriptionlist.DescriptionListSubComponent');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.component.popover.Popover');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.ElementDelegate');
goog.require('org.patternfly.core.WithIcon');
goog.require('org.patternfly.core.WithText');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const DescriptionListTerm = goog.require('org.patternfly.component.descriptionlist.DescriptionListTerm$impl');
exports = DescriptionListTerm;

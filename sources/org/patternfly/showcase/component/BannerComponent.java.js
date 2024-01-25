goog.module('org.patternfly.showcase.component.BannerComponent');

goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.banner.Banner');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.icon.InlineIcon');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.layout.flex.Flex');
goog.require('org.patternfly.layout.flex.FlexItem');
goog.require('org.patternfly.layout.flex.SpaceItems');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Color');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const BannerComponent = goog.require('org.patternfly.showcase.component.BannerComponent$impl');
exports = BannerComponent;

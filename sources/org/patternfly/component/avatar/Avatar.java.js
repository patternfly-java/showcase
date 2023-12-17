goog.module('org.patternfly.component.avatar.Avatar');

goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.EnumSet');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.patternfly.component.BaseComponentFlat');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.core.Logger');
goog.require('org.patternfly.style.Brightness');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Size');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Avatar = goog.require('org.patternfly.component.avatar.Avatar$impl');
exports = Avatar;

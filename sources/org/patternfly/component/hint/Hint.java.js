goog.module('org.patternfly.component.hint.Hint');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.hint.HintActions');
goog.require('org.patternfly.component.hint.HintBody');
goog.require('org.patternfly.component.hint.HintFooter');
goog.require('org.patternfly.component.hint.HintTitle');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Hint = goog.require('org.patternfly.component.hint.Hint$impl');
exports = Hint;

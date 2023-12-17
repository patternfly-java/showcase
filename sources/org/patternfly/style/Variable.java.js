goog.module('org.patternfly.style.Variable');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.HasHTMLElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.jboss.elemento.svg.HasSVGElement');
goog.require('org.jboss.elemento.svg.SVGElement.$Overlay');
goog.require('org.patternfly.core.Logger');
goog.require('org.patternfly.core.PatternFly');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.core.Tuples');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.VariableScope');
goog.require('vmbootstrap.Casts');

const Variable = goog.require('org.patternfly.style.Variable$impl');
exports = Variable;

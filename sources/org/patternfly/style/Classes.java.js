goog.module('org.patternfly.style.Classes');

goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('java.util.stream.StreamSupport');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.core.PatternFly');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.core.Tuples');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Size');
goog.require('org.patternfly.style.TypedModifier');
goog.require('vmbootstrap.Casts');

const Classes = goog.require('org.patternfly.style.Classes$impl');
exports = Classes;

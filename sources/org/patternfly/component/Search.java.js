goog.module('org.patternfly.component.Search');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('elemental2.dom.KeyboardEvent.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.InputElementBuilder');
goog.require('org.jboss.elemento.InputType');
goog.require('org.jboss.elemento.Key');
goog.require('org.patternfly.component.InputGroup');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Search = goog.require('org.patternfly.component.Search$impl');
exports = Search;

goog.module('org.patternfly.showcase.component.HintComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.hint.Hint');
goog.require('org.patternfly.component.hint.HintActions');
goog.require('org.patternfly.component.hint.HintBody');
goog.require('org.patternfly.component.hint.HintFooter');
goog.require('org.patternfly.component.hint.HintTitle');
goog.require('org.patternfly.component.menu.Dropdown');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuContent');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuList');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.style.PredefinedIcon');
goog.require('vmbootstrap.Casts');

const HintComponent = goog.require('org.patternfly.showcase.component.HintComponent$impl');
exports = HintComponent;

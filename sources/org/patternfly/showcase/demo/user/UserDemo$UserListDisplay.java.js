goog.module('org.patternfly.showcase.demo.user.UserDemo.UserListDisplay');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.DataList');
goog.require('org.patternfly.component.DataList.Display');
goog.require('org.patternfly.component.DataList.ExpandableBody');
goog.require('org.patternfly.component.DataList.ExpandableContent');
goog.require('org.patternfly.component.DataList.ItemAction');
goog.require('org.patternfly.component.DataList.ItemCell');
goog.require('org.patternfly.component.DataList.ItemContent');
goog.require('org.patternfly.component.DataList.ItemRow');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.dataprovider.DataProvider');
goog.require('org.patternfly.layout.Classes');
goog.require('org.patternfly.layout.PredefinedIcon');
goog.require('org.patternfly.showcase.demo.user.User.$Overlay');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const UserListDisplay = goog.require('org.patternfly.showcase.demo.user.UserDemo.UserListDisplay$impl');
exports = UserListDisplay;

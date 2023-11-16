goog.module('org.patternfly.showcase.Main$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HashChangeEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Brand = goog.forwardDeclare('org.patternfly.component.brand.Brand$impl');
let Masthead = goog.forwardDeclare('org.patternfly.component.masthead.Masthead$impl');
let MastheadToggle = goog.forwardDeclare('org.patternfly.component.masthead.MastheadToggle$impl');
let ExpandableNavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let Vertical = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Vertical$impl');
let Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let PageMain = goog.forwardDeclare('org.patternfly.component.page.PageMain$impl');
let Sidebar = goog.forwardDeclare('org.patternfly.component.sidebar.Sidebar$impl');
let SidebarBody = goog.forwardDeclare('org.patternfly.component.sidebar.SidebarBody$impl');
let SkipToContent = goog.forwardDeclare('org.patternfly.component.skiptocontent.SkipToContent$impl');
let org_patternfly_showcase_Page = goog.forwardDeclare('org.patternfly.showcase.Page$impl');
let Placemanager = goog.forwardDeclare('org.patternfly.showcase.Placemanager$impl');
let ThirdParty = goog.forwardDeclare('org.patternfly.thirdparty.ThirdParty$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Main extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Navigation} @nodts*/
  this.f_navigation__org_patternfly_showcase_Main_;
 }
 /** @nodts @return {!Main} */
 static $create__() {
  Main.$clinit();
  let $instance = new Main();
  $instance.$ctor__org_patternfly_showcase_Main__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Main__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_onModuleLoad__void() {
  ThirdParty.m_injectAll__void();
  this.f_navigation__org_patternfly_showcase_Main_ = Navigation.m_navigation__org_patternfly_component_navigation_NavigationType__org_patternfly_component_navigation_Navigation(Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('get-started', 'Get started', '#get-started')).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('components', 'Components').m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-action-list', 'Action list', '#c-action-list')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-alert', 'Alert', '#c-alert')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-avatar', 'Avatar', '#c-avatar')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-badge', 'Badge', '#c-badge')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-brand', 'Brand', '#c-brand')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-button', 'Button', '#c-button')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-chip', 'Chip', '#c-chip')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-code-block', 'Code block', '#c-code-block')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-code-editor', 'Code editor', '#c-code-editor')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-expandable-section', 'Expandable section', '#c-expandable-section')).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_ExpandableNavigationGroup(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('c-forms', 'Forms').m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-checkbox', 'Checkbox', '#c-checkbox')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-text-input', 'Text input', '#c-text-input'))).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-icon', 'Icon', '#c-icon')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-masthead', 'Masthead', '#c-masthead')).m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_ExpandableNavigationGroup(ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup('c-menus', 'Menus').m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-dropdown', 'Dropdown', '#c-dropdown')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-menu', 'Menu', '#c-menu')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-menu-toggle', 'Menu toggle', '#c-menu-toggle'))).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-popover', 'Popover', '#c-popover')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-spinner', 'Spinner', '#c-spinner')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-text-content', 'Text content', '#c-text-content')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-text-input-group', 'Text input group', '#c-text-input-group')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_ExpandableNavigationGroup(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('c-tooltip', 'Tooltip', '#c-tooltip'))).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('contribute', 'Contribute', '#contribute')).m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem('get-in-touch', 'Get in touch', '#get-in-touch'));
  let mainId = 'main-id';
  Elements.m_body__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Page.m_page__org_patternfly_component_page_Page().m_addSkipToContent__org_patternfly_component_skiptocontent_SkipToContent__org_patternfly_component_page_Page(SkipToContent.m_skipToContent__java_lang_String__org_patternfly_component_skiptocontent_SkipToContent(mainId)).m_addMasthead__org_patternfly_component_masthead_Masthead__org_patternfly_component_page_Page(/**@type {Masthead}*/ ($Casts.$to(Masthead.m_masthead__org_patternfly_component_masthead_Masthead().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-masthead'], j_l_String))), Masthead)).m_addToggle__org_patternfly_component_masthead_MastheadToggle__org_patternfly_component_masthead_Masthead(MastheadToggle.m_mastheadToggle__org_patternfly_component_masthead_MastheadToggle()).m_addBrand__org_patternfly_component_brand_Brand__java_lang_String__org_patternfly_component_masthead_Masthead(/**@type {Brand}*/ ($Casts.$to(Brand.m_brand__java_lang_String__org_patternfly_component_brand_Brand(PatternFlyAssets.pfLogo).m_style__java_lang_String__org_jboss_elemento_TypedBuilder('--pf-v5-c-brand--Height:36px'), Brand)), '#home')).m_addSidebar__org_patternfly_component_sidebar_Sidebar__org_patternfly_component_page_Page(/**@type {Sidebar}*/ ($Casts.$to(Sidebar.m_sidebar__org_patternfly_component_sidebar_Sidebar().m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('z-index', 'auto'), Sidebar)).m_addBody__org_patternfly_component_sidebar_SidebarBody__org_patternfly_component_sidebar_Sidebar(SidebarBody.m_sidebarBody__org_patternfly_component_sidebar_SidebarBody().m_addNavigation__org_patternfly_component_navigation_Navigation__org_patternfly_component_sidebar_SidebarBody(this.f_navigation__org_patternfly_showcase_Main_))).m_addMain__org_patternfly_component_page_PageMain__org_patternfly_component_page_Page(PageMain.m_pageMain__java_lang_String__org_patternfly_component_page_PageMain(mainId)));
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_hashchange__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {HashChangeEvent}*/ ($Casts.$to(e, $Overlay));
   this.m_navigate__java_lang_String__void_$p_org_patternfly_showcase_Main(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.hash);
  });
  this.m_navigate__java_lang_String__void_$p_org_patternfly_showcase_Main(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.hash);
 }
 /** @nodts */
 m_navigate__java_lang_String__void_$p_org_patternfly_showcase_Main(/** ?string */ hash) {
  let id = !$Equality.$same(hash, null) && j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(hash, '#') ? j_l_String.m_substring__java_lang_String__int__java_lang_String(hash, 1) : '';
  Page.m_page__org_patternfly_component_page_Page().m_main__org_patternfly_component_page_PageMain().m_replace__java_lang_Iterable__void(/**@type {org_patternfly_showcase_Page}*/ ($Casts.$to(Placemanager.m_lookup__java_lang_String__java_util_function_Supplier(id).m_get__java_lang_Object(), org_patternfly_showcase_Page)));
  this.f_navigation__org_patternfly_showcase_Main_.m_select__java_lang_String__void(id);
 }
 /** @nodts */
 static $clinit() {
  Main.$clinit = () =>{};
  Main.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Main;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HashChangeEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Brand = goog.module.get('org.patternfly.component.brand.Brand$impl');
  Masthead = goog.module.get('org.patternfly.component.masthead.Masthead$impl');
  MastheadToggle = goog.module.get('org.patternfly.component.masthead.MastheadToggle$impl');
  ExpandableNavigationGroup = goog.module.get('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
  Navigation = goog.module.get('org.patternfly.component.navigation.Navigation$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Vertical = goog.module.get('org.patternfly.component.navigation.NavigationType.Vertical$impl');
  Page = goog.module.get('org.patternfly.component.page.Page$impl');
  PageMain = goog.module.get('org.patternfly.component.page.PageMain$impl');
  Sidebar = goog.module.get('org.patternfly.component.sidebar.Sidebar$impl');
  SidebarBody = goog.module.get('org.patternfly.component.sidebar.SidebarBody$impl');
  SkipToContent = goog.module.get('org.patternfly.component.skiptocontent.SkipToContent$impl');
  org_patternfly_showcase_Page = goog.module.get('org.patternfly.showcase.Page$impl');
  Placemanager = goog.module.get('org.patternfly.showcase.Placemanager$impl');
  ThirdParty = goog.module.get('org.patternfly.thirdparty.ThirdParty$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Main, 'org.patternfly.showcase.Main');

/* NATIVE.JS EPILOG */

const org_patternfly_showcase_Main = Main;

setTimeout(function(){
var ep = Main.$create__();
    ep.m_onModuleLoad__void()
}, 0);


exports = Main;

//# sourceMappingURL=Main.js.map

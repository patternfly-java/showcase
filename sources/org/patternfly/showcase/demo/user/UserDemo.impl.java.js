goog.module('org.patternfly.showcase.demo.user.UserDemo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.patternfly.showcase.Page$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let CardView = goog.forwardDeclare('org.patternfly.component.CardView$impl');
let DataList = goog.forwardDeclare('org.patternfly.component.DataList$impl');
let DataTable = goog.forwardDeclare('org.patternfly.component.DataTable$impl');
let BodyDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.BodyDisplay$impl');
let Column = goog.forwardDeclare('org.patternfly.component.DataTable.Column$impl');
let ExpandableDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.ExpandableDisplay$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.Dropdown$impl');
let OldToolbar = goog.forwardDeclare('org.patternfly.component.OldToolbar$impl');
let Item = goog.forwardDeclare('org.patternfly.component.OldToolbar.Item$impl');
let SortMenu = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortMenu$impl');
let SortOption = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortOption$impl');
let SortOptions = goog.forwardDeclare('org.patternfly.component.OldToolbar.SortOptions$impl');
let Pagination = goog.forwardDeclare('org.patternfly.component.Pagination$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let InlineIcon = goog.forwardDeclare('org.patternfly.component.icon.InlineIcon$impl');
let PageMainSection = goog.forwardDeclare('org.patternfly.component.page.PageMainSection$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let $Overlay = goog.forwardDeclare('org.patternfly.showcase.demo.user.User.$Overlay$impl');
let UserCardDisplay = goog.forwardDeclare('org.patternfly.showcase.demo.user.UserDemo.UserCardDisplay$impl');
let UserListDisplay = goog.forwardDeclare('org.patternfly.showcase.demo.user.UserDemo.UserListDisplay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @implements {Page}
 */
class UserDemo extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {CardView<Object>} @nodts*/
  this.f_cardView__org_patternfly_showcase_demo_user_UserDemo_;
  /**@type {DataList<Object>} @nodts*/
  this.f_dataList__org_patternfly_showcase_demo_user_UserDemo_;
  /**@type {DataTable<Object>} @nodts*/
  this.f_dataTable__org_patternfly_showcase_demo_user_UserDemo_;
  /**@type {HTMLElement} @nodts*/
  this.f_dataElement__org_patternfly_showcase_demo_user_UserDemo_;
  /**@type {Iterable<HTMLElement>} @nodts*/
  this.f_elements__org_patternfly_showcase_demo_user_UserDemo_;
  /**@type {HTMLElement} @nodts*/
  this.f_dataContainer__org_patternfly_showcase_demo_user_UserDemo_;
 }
 /** @nodts @return {!UserDemo} */
 static $create__() {
  UserDemo.$clinit();
  let $instance = new UserDemo();
  $instance.$ctor__org_patternfly_showcase_demo_user_UserDemo__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_demo_user_UserDemo__void() {
  this.$ctor__java_lang_Object__void();
  let dataProvider = /**@type {!DataProvider<Object>}*/ (DataProvider.$create__java_util_function_Function(j_u_function_Function.$adapt((user) =>{
   let user_1 = /**@type {Object}*/ ($Casts.$to(user, $Overlay));
   return user_1.login.uuid;
  })));
  let toolbar = /**@type {OldToolbar<Object>}*/ (OldToolbar.m_toolbar__org_patternfly_dataprovider_DataProvider__org_patternfly_component_OldToolbar(dataProvider)).m_add__org_patternfly_component_OldToolbar_Content__org_patternfly_component_OldToolbar(OldToolbar.m_content__org_patternfly_component_OldToolbar_Content().m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Content(OldToolbar.m_item__org_patternfly_component_OldToolbar_Item().m_add__org_patternfly_component_OldToolbar_BulkSelect__org_patternfly_component_OldToolbar_Item(OldToolbar.m_bulkSelect__org_patternfly_component_OldToolbar_BulkSelect())).m_add__org_patternfly_component_OldToolbar_Group__org_patternfly_component_OldToolbar_Content(OldToolbar.m_group__org_patternfly_component_OldToolbar_Group().m_toggle__java_lang_String__org_patternfly_component_OldToolbar_Group('show-on-xl').m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Group(OldToolbar.m_item__org_patternfly_component_OldToolbar_Item().m_add__java_lang_String__java_lang_String__java_util_function_Function__org_patternfly_component_OldToolbar_Item('byName', 'Search by name', j_u_function_Function.$adapt((query) =>{
   let query_1 = /**@type {?string}*/ ($Casts.$to(query, j_l_String));
   return Predicate.$adapt((user_2) =>{
    let user_3 = /**@type {Object}*/ ($Casts.$to(user_2, $Overlay));
    return $Overlay.m_match__$devirt__org_patternfly_showcase_demo_user_User__java_lang_String__boolean(user_3, query_1);
   });
  })))).m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Content(OldToolbar.m_item__org_patternfly_component_OldToolbar_Item().m_add__org_patternfly_component_OldToolbar_SortMenu__org_patternfly_component_OldToolbar_Item(/**@type {SortMenu<Object>}*/ (OldToolbar.m_sortMenu__org_patternfly_component_OldToolbar_SortOptions__org_patternfly_component_OldToolbar_SortMenu(/**@type {!SortOptions<Object>}*/ (SortOptions.$create__()).m_add__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortOptions(/**@type {!SortOption<Object>}*/ (SortOption.$create__java_lang_String__java_util_Comparator('Last name', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((user_4) =>{
   let user_5 = /**@type {Object}*/ ($Casts.$to(user_4, $Overlay));
   return user_5.name.last;
  })))))).m_add__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortOptions(/**@type {!SortOption<Object>}*/ (SortOption.$create__java_lang_String__java_util_Comparator('First name', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((user_6) =>{
   let user_7 = /**@type {Object}*/ ($Casts.$to(user_6, $Overlay));
   return user_7.name.first;
  })))))).m_add__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortOptions(/**@type {!SortOption<Object>}*/ (SortOption.$create__java_lang_String__java_util_Comparator('User name', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((user_8) =>{
   let user_9 = /**@type {Object}*/ ($Casts.$to(user_8, $Overlay));
   return user_9.login.username;
  })))))).m_add__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortOptions(/**@type {!SortOption<Object>}*/ (SortOption.$create__java_lang_String__java_util_Comparator('Age', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((user_10) =>{
   let user_11 = /**@type {Object}*/ ($Casts.$to(user_10, $Overlay));
   return Integer.m_valueOf__int__java_lang_Integer(user_11.dob.age);
  })))))).m_add__org_patternfly_component_OldToolbar_SortOption__org_patternfly_component_OldToolbar_SortOptions(/**@type {!SortOption<Object>}*/ (SortOption.$create__java_lang_String__java_util_Comparator('Nationality', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((user_12) =>{
   let user_13 = /**@type {Object}*/ ($Casts.$to(user_12, $Overlay));
   return user_13.nat;
  })))))))))).m_add__org_patternfly_component_OldToolbar_Group__org_patternfly_component_OldToolbar_Content(OldToolbar.m_group__org_patternfly_component_OldToolbar_Group().m_iconButton__org_patternfly_component_OldToolbar_Group().m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Group(/**@type {Item}*/ ($Casts.$to(OldToolbar.m_item__org_patternfly_component_OldToolbar_Item().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_component_button_Button(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('address-card')), 'Card view').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e, b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   this.m_show__elemental2_dom_HTMLElement__void_$p_org_patternfly_showcase_demo_user_UserDemo(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_cardView__org_patternfly_showcase_demo_user_UserDemo_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }))), Item))).m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Group(/**@type {Item}*/ ($Casts.$to(OldToolbar.m_item__org_patternfly_component_OldToolbar_Item().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_component_button_Button(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('list')), 'Card view').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_1, b_2) =>{
   let b_3 = /**@type {Button}*/ ($Casts.$to(b_2, Button));
   this.m_show__elemental2_dom_HTMLElement__void_$p_org_patternfly_showcase_demo_user_UserDemo(/**@type {HTMLUListElement}*/ ($Casts.$to(this.f_dataList__org_patternfly_showcase_demo_user_UserDemo_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  }))), Item))).m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Group(/**@type {Item}*/ ($Casts.$to(OldToolbar.m_item__org_patternfly_component_OldToolbar_Item().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Button.m_button__org_patternfly_component_icon_InlineIcon__java_lang_String__org_patternfly_component_button_Button(InlineIcon.m_inlineIcon__java_lang_String__org_patternfly_component_icon_InlineIcon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('table')), 'Card view').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_2, b_4) =>{
   let b_5 = /**@type {Button}*/ ($Casts.$to(b_4, Button));
   this.m_show__elemental2_dom_HTMLElement__void_$p_org_patternfly_showcase_demo_user_UserDemo(/**@type {HTMLTableElement}*/ ($Casts.$to(this.f_dataTable__org_patternfly_showcase_demo_user_UserDemo_.m_element__elemental2_dom_HTMLElement(), HTMLTableElement_$Overlay)));
  }))), Item)))).m_add__org_patternfly_component_OldToolbar_Item__org_patternfly_component_OldToolbar_Content(OldToolbar.m_item__org_patternfly_component_OldToolbar_Item().m_add__org_patternfly_component_Pagination__org_patternfly_component_OldToolbar_Item(Pagination.m_pagination__org_patternfly_component_Pagination().m_compact__org_patternfly_component_Pagination())));
  this.f_cardView__org_patternfly_showcase_demo_user_UserDemo_ = /**@type {CardView<Object>}*/ ($Casts.$to(/**@type {CardView<Object>}*/ ($Casts.$to(/**@type {CardView<Object>}*/ (CardView.m_cardView__org_patternfly_dataprovider_DataProvider__org_patternfly_component_CardView_Display__org_patternfly_component_CardView(dataProvider, UserCardDisplay.$create__())).m_style__java_lang_String__org_jboss_elemento_TypedBuilder('background-color: var(--pf-c-page__main-section--BackgroundColor)'), CardView)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_util__java_lang_String__java_lang_String('py-lg')], j_l_String))), CardView)).m_compact__org_patternfly_component_CardView().m_hoverable__org_patternfly_component_CardView();
  this.f_dataList__org_patternfly_showcase_demo_user_UserDemo_ = /**@type {DataList<Object>}*/ (DataList.m_dataList__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataList_Display__org_patternfly_component_DataList(dataProvider, UserListDisplay.$create__()));
  this.f_dataTable__org_patternfly_showcase_demo_user_UserDemo_ = /**@type {DataTable<Object>}*/ (DataTable.m_dataTable__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataTable(dataProvider)).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_expandColumn__org_patternfly_component_DataTable_Column())).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_checkboxColumn__org_patternfly_component_DataTable_Column())).m_noSelectAll__org_patternfly_component_DataTable().m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('First name', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((user_14) =>{
   let user_15 = /**@type {Object}*/ ($Casts.$to(user_14, $Overlay));
   return user_15.name.first;
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<Object> */ dp, user_16) =>{
   let user_17 = /**@type {Object}*/ ($Casts.$to(user_16, $Overlay));
   td.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(user_17.name.first);
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Last name', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((user_18) =>{
   let user_19 = /**@type {Object}*/ ($Casts.$to(user_18, $Overlay));
   return user_19.name.last;
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_1, /** DataProvider<Object> */ dp_1, user_20) =>{
   let user_21 = /**@type {Object}*/ ($Casts.$to(user_20, $Overlay));
   td_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(dp_1.m_getId__java_lang_Object__java_lang_String(user_21)), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(user_21.name.last), HTMLContainerBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Birthday', $Overlay.f_BIRTHDAY_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay, BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_2, /** DataProvider<Object> */ dp_2, user_22) =>{
   let user_23 = /**@type {Object}*/ ($Casts.$to(user_22, $Overlay));
   td_2.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder($Overlay.m_getBirthday__$devirt__org_patternfly_showcase_demo_user_User__elemental2_core_JsDate(user_23).toLocaleDateString());
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Registered', $Overlay.f_REGISTERED_COMPARATOR__org_patternfly_showcase_demo_user_User_$Overlay, BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_3, /** DataProvider<Object> */ dp_3, user_24) =>{
   let user_25 = /**@type {Object}*/ ($Casts.$to(user_24, $Overlay));
   td_3.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', user_25.registered.date), HTMLElementBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_actionsColumn__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_4, /** DataProvider<Object> */ dp_4, user_26) =>{
   let user_27 = /**@type {Object}*/ ($Casts.$to(user_26, $Overlay));
   td_4.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Dropdown<?string>}*/ (Dropdown.m_kebab__org_patternfly_component_Dropdown()).m_right__org_patternfly_component_Dropdown().m_add__java_lang_Object__org_patternfly_component_Dropdown('Edit').m_add__java_lang_Object__org_patternfly_component_Dropdown('Remove'));
  })))).m_expandableRow__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(ExpandableDisplay.$adapt((/** HTMLContainerBuilder<HTMLDivElement> */ html, /** DataProvider<Object> */ dp_5, user_28) =>{
   let user_29 = /**@type {Object}*/ ($Casts.$to(user_28, $Overlay));
   html.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_flex__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String('align-items-center'), Classes.m_modifier__java_lang_String__java_lang_String('space-items-2xl')], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_photo__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLDivElement(user_29)), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_address__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLElement(user_29)), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder($Overlay.m_contact__$devirt__org_patternfly_showcase_demo_user_User__elemental2_dom_HTMLElement(user_29)), HTMLContainerBuilder)));
  }));
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(toolbar);
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(this.f_cardView__org_patternfly_showcase_demo_user_UserDemo_);
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(this.f_dataList__org_patternfly_showcase_demo_user_UserDemo_);
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(this.f_dataTable__org_patternfly_showcase_demo_user_UserDemo_);
  dataProvider.m_update__arrayOf_java_lang_Object__void(PatternFlyData.users);
  this.f_elements__org_patternfly_showcase_demo_user_UserDemo_ = /**@type {List<HTMLElement>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List([/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(1, 'Users', Size.f__4xl__org_patternfly_layout_Size)), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('A list of 123 random users provided by '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('https://randomuser.me').m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('target', '_blank'), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('https://randomuser.me'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('. Flags generated with '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('https://www.countryflags.io').m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('target', '_blank'), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('https://www.countryflags.io'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder('. See '), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(UserDemo.f_SOURCE_CODE__org_patternfly_showcase_demo_user_UserDemo_, '_blank').m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('UserDemo.java'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(' for the code.'), HTMLContainerBuilder))), TextContent))), PageMainSection)).m_element__elemental2_dom_HTMLElement(), /**@type {PageMainSection}*/ ($Casts.$to(/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toolbar), PageMainSection)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_dataContainer__org_patternfly_showcase_demo_user_UserDemo_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), PageMainSection)).m_element__elemental2_dom_HTMLElement()]));
  this.m_show__elemental2_dom_HTMLElement__void_$p_org_patternfly_showcase_demo_user_UserDemo(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_cardView__org_patternfly_showcase_demo_user_UserDemo_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__java_lang_Iterable() {
  return this.f_elements__org_patternfly_showcase_demo_user_UserDemo_;
 }
 /** @nodts */
 m_show__elemental2_dom_HTMLElement__void_$p_org_patternfly_showcase_demo_user_UserDemo(/** HTMLElement */ element) {
  if (!$Equality.$same(this.f_dataElement__org_patternfly_showcase_demo_user_UserDemo_, element)) {
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_dataContainer__org_patternfly_showcase_demo_user_UserDemo_);
   this.f_dataContainer__org_patternfly_showcase_demo_user_UserDemo_.appendChild(element);
   this.f_dataElement__org_patternfly_showcase_demo_user_UserDemo_ = element;
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterator<HTMLElement>} */
 m_iterator__java_util_Iterator() {
  return Page.m_iterator__$default__org_patternfly_showcase_Page__java_util_Iterator(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<HTMLElement>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<HTMLElement>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  UserDemo.$clinit = () =>{};
  UserDemo.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UserDemo;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  CardView = goog.module.get('org.patternfly.component.CardView$impl');
  DataList = goog.module.get('org.patternfly.component.DataList$impl');
  DataTable = goog.module.get('org.patternfly.component.DataTable$impl');
  BodyDisplay = goog.module.get('org.patternfly.component.DataTable.BodyDisplay$impl');
  ExpandableDisplay = goog.module.get('org.patternfly.component.DataTable.ExpandableDisplay$impl');
  Dropdown = goog.module.get('org.patternfly.component.Dropdown$impl');
  OldToolbar = goog.module.get('org.patternfly.component.OldToolbar$impl');
  Item = goog.module.get('org.patternfly.component.OldToolbar.Item$impl');
  SortOption = goog.module.get('org.patternfly.component.OldToolbar.SortOption$impl');
  SortOptions = goog.module.get('org.patternfly.component.OldToolbar.SortOptions$impl');
  Pagination = goog.module.get('org.patternfly.component.Pagination$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  InlineIcon = goog.module.get('org.patternfly.component.icon.InlineIcon$impl');
  PageMainSection = goog.module.get('org.patternfly.component.page.PageMainSection$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  DataProvider = goog.module.get('org.patternfly.dataprovider.DataProvider$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Size = goog.module.get('org.patternfly.layout.Size$impl');
  $Overlay = goog.module.get('org.patternfly.showcase.demo.user.User.$Overlay$impl');
  UserCardDisplay = goog.module.get('org.patternfly.showcase.demo.user.UserDemo.UserCardDisplay$impl');
  UserListDisplay = goog.module.get('org.patternfly.showcase.demo.user.UserDemo.UserListDisplay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
/**@const {string} @nodts*/
UserDemo.f_SOURCE_CODE__org_patternfly_showcase_demo_user_UserDemo_ = 'https://github.com/patternfly-java/showcase/blob/master/src/main/java/org/patternfly/showcase/client/documentation/demos/user/UserDemo.java';
Page.$markImplementor(UserDemo);
$Util.$setClassMetadata(UserDemo, 'org.patternfly.showcase.demo.user.UserDemo');

exports = UserDemo;

//# sourceMappingURL=UserDemo.js.map

goog.module('org.patternfly.showcase.demo.server.ServerDemo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Page = goog.require('org.patternfly.showcase.Page$impl');

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
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DataTable = goog.forwardDeclare('org.patternfly.component.DataTable$impl');
let BodyDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.BodyDisplay$impl');
let Column = goog.forwardDeclare('org.patternfly.component.DataTable.Column$impl');
let PageMainSection = goog.forwardDeclare('org.patternfly.component.page.PageMainSection$impl');
let TextContent = goog.forwardDeclare('org.patternfly.component.text.TextContent$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let Server_$Overlay = goog.forwardDeclare('org.patternfly.showcase.demo.server.Server.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Page}
 */
class ServerDemo extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Iterable<HTMLElement>} @nodts*/
  this.f_elements__org_patternfly_showcase_demo_server_ServerDemo_;
 }
 /** @nodts @return {!ServerDemo} */
 static $create__() {
  ServerDemo.$clinit();
  let $instance = new ServerDemo();
  $instance.$ctor__org_patternfly_showcase_demo_server_ServerDemo__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_demo_server_ServerDemo__void() {
  this.$ctor__java_lang_Object__void();
  let dataProvider = /**@type {!DataProvider<Object>}*/ (DataProvider.$create__java_util_function_Function(j_u_function_Function.$adapt((server) =>{
   let server_1 = /**@type {Object}*/ ($Casts.$to(server, Server_$Overlay));
   return server_1.name;
  })));
  let dataTable = /**@type {DataTable<Object>}*/ (DataTable.m_dataTable__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataTable(dataProvider)).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_checkboxColumn__org_patternfly_component_DataTable_Column())).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Name', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((server_2) =>{
   let server_3 = /**@type {Object}*/ ($Casts.$to(server_2, Server_$Overlay));
   return server_3.name;
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<Object> */ dp, server_4) =>{
   let server_5 = /**@type {Object}*/ ($Casts.$to(server_4, Server_$Overlay));
   td.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(server_5.name);
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Threads', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((server_6) =>{
   let server_7 = /**@type {Object}*/ ($Casts.$to(server_6, Server_$Overlay));
   return Integer.m_valueOf__int__java_lang_Integer(server_7.threads);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_1, /** DataProvider<Object> */ dp_1, server_8) =>{
   let server_9 = /**@type {Object}*/ ($Casts.$to(server_8, Server_$Overlay));
   td_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(server_9.threads));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Applications', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((server_10) =>{
   let server_11 = /**@type {Object}*/ ($Casts.$to(server_10, Server_$Overlay));
   return Integer.m_valueOf__int__java_lang_Integer(server_11.applications);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_2, /** DataProvider<Object> */ dp_2, server_12) =>{
   let server_13 = /**@type {Object}*/ ($Casts.$to(server_12, Server_$Overlay));
   td_2.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(server_13.applications));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Workspaces', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((server_14) =>{
   let server_15 = /**@type {Object}*/ ($Casts.$to(server_14, Server_$Overlay));
   return Integer.m_valueOf__int__java_lang_Integer(server_15.workspaces);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_3, /** DataProvider<Object> */ dp_3, server_16) =>{
   let server_17 = /**@type {Object}*/ ($Casts.$to(server_16, Server_$Overlay));
   td_3.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(server_17.workspaces));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Status', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Object}*/ ($Casts.$to(arg0, Server_$Overlay));
   return Server_$Overlay.m_status__$devirt__org_patternfly_showcase_demo_server_Server__org_patternfly_showcase_demo_server_Server_Status(arg0_1);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_4, /** DataProvider<Object> */ dp_4, server_18) =>{
   let server_19 = /**@type {Object}*/ ($Casts.$to(server_18, Server_$Overlay));
   td_4.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_toLowerCase__java_lang_String__java_lang_String(Server_$Overlay.m_status__$devirt__org_patternfly_showcase_demo_server_Server__org_patternfly_showcase_demo_server_Server_Status(server_19).name()));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Object>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Location', /**@type {Comparator<Object>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((server_20) =>{
   let server_21 = /**@type {Object}*/ ($Casts.$to(server_20, Server_$Overlay));
   return server_21.location;
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_5, /** DataProvider<Object> */ dp_5, server_22) =>{
   let server_23 = /**@type {Object}*/ ($Casts.$to(server_22, Server_$Overlay));
   td_5.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(server_23.location);
  }))));
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(dataTable);
  dataProvider.m_update__arrayOf_java_lang_Object__void(PatternFlyData.servers);
  this.f_elements__org_patternfly_showcase_demo_server_ServerDemo_ = /**@type {List<HTMLElement>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List([/**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextContent}*/ ($Casts.$to(/**@type {TextContent}*/ ($Casts.$to(TextContent.m_textContent__org_patternfly_component_text_TextContent().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(1, 'Servers', Size.f__4xl__org_patternfly_layout_Size)), TextContent)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Filter servers based on user input.'), HTMLContainerBuilder))), TextContent))), PageMainSection)).m_element__elemental2_dom_HTMLElement(), /**@type {PageMainSection}*/ ($Casts.$to(PageMainSection.m_pageMainSection__org_patternfly_component_page_PageMainSection().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(dataTable), PageMainSection)).m_element__elemental2_dom_HTMLElement()]));
 }
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_elements__java_lang_Iterable() {
  return this.f_elements__org_patternfly_showcase_demo_server_ServerDemo_;
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
  ServerDemo.$clinit = () =>{};
  ServerDemo.$loadModules();
  j_l_Object.$clinit();
  Page.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ServerDemo;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  DataTable = goog.module.get('org.patternfly.component.DataTable$impl');
  BodyDisplay = goog.module.get('org.patternfly.component.DataTable.BodyDisplay$impl');
  PageMainSection = goog.module.get('org.patternfly.component.page.PageMainSection$impl');
  TextContent = goog.module.get('org.patternfly.component.text.TextContent$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  DataProvider = goog.module.get('org.patternfly.dataprovider.DataProvider$impl');
  Size = goog.module.get('org.patternfly.layout.Size$impl');
  Server_$Overlay = goog.module.get('org.patternfly.showcase.demo.server.Server.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Page.$markImplementor(ServerDemo);
$Util.$setClassMetadata(ServerDemo, 'org.patternfly.showcase.demo.server.ServerDemo');

exports = ServerDemo;

//# sourceMappingURL=ServerDemo.js.map

goog.module('org.patternfly.showcase.component.TableComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLParagraphElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let DataTable = goog.forwardDeclare('org.patternfly.component.DataTable$impl');
let BodyDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.BodyDisplay$impl');
let Column = goog.forwardDeclare('org.patternfly.component.DataTable.Column$impl');
let ExpandableDisplay = goog.forwardDeclare('org.patternfly.component.DataTable.ExpandableDisplay$impl');
let Dropdown = goog.forwardDeclare('org.patternfly.component.Dropdown$impl');
let DataProvider = goog.forwardDeclare('org.patternfly.dataprovider.DataProvider$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let Repository = goog.forwardDeclare('org.patternfly.showcase.component.TableComponent.Repository$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @deprecated
 */
class TableComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DataProvider<Repository>} */
 static m_dataProvider__org_patternfly_dataprovider_DataProvider() {
  return /**@type {!DataProvider<Repository>}*/ (DataProvider.$create__java_util_function_Function(j_u_function_Function.$adapt((repo) =>{
   let repo_1 = /**@type {Repository}*/ ($Casts.$to(repo, Repository));
   return Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(repo_1.f_name__org_patternfly_showcase_component_TableComponent_Repository, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  })));
 }
 /** @nodts @return {DataTable<Repository>} */
 static m_simple__org_patternfly_component_DataTable() {
  let dataProvider = TableComponent.m_dataProvider__org_patternfly_dataprovider_DataProvider();
  let dataTable = /**@type {DataTable<Repository>}*/ (DataTable.m_dataTable__org_patternfly_dataprovider_DataProvider__java_lang_String__org_patternfly_component_DataTable(dataProvider, 'This is the table caption')).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Repository', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<Repository> */ dp, repo) =>{
   let repo_1 = /**@type {Repository}*/ ($Casts.$to(repo, Repository));
   td.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(dp.m_getId__java_lang_Object__java_lang_String(repo_1)), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(repo_1.f_name__org_patternfly_showcase_component_TableComponent_Repository), HTMLContainerBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Branches', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_1, /** DataProvider<Repository> */ dp_1, repo_2) =>{
   let repo_3 = /**@type {Repository}*/ ($Casts.$to(repo_2, Repository));
   td_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_3.f_branches__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Pull Requests', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_2, /** DataProvider<Repository> */ dp_2, repo_4) =>{
   let repo_5 = /**@type {Repository}*/ ($Casts.$to(repo_4, Repository));
   td_2.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_5.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Contributors', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_3, /** DataProvider<Repository> */ dp_3, repo_6) =>{
   let repo_7 = /**@type {Repository}*/ ($Casts.$to(repo_6, Repository));
   td_3.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_7.f_contributors__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Last Commit', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_4, /** DataProvider<Repository> */ dp_4, repo_8) =>{
   let repo_9 = /**@type {Repository}*/ ($Casts.$to(repo_8, Repository));
   td_4.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repo_9.f_lastCommit__org_patternfly_showcase_component_TableComponent_Repository.toISOString()), HTMLElementBuilder)));
  }))));
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(dataTable);
  dataProvider.m_update__arrayOf_java_lang_Object__void(TableComponent.m_repositories__arrayOf_org_patternfly_showcase_component_TableComponent_Repository());
  return dataTable;
 }
 /** @nodts @return {DataTable<Repository>} */
 static m_sortable__org_patternfly_component_DataTable() {
  let dataProvider = TableComponent.m_dataProvider__org_patternfly_dataprovider_DataProvider();
  let dataTable = /**@type {DataTable<Repository>}*/ (DataTable.m_dataTable__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataTable(dataProvider)).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Repository', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo) =>{
   let repo_1 = /**@type {Repository}*/ ($Casts.$to(repo, Repository));
   return repo_1.f_name__org_patternfly_showcase_component_TableComponent_Repository;
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<Repository> */ dp, repo_2) =>{
   let repo_3 = /**@type {Repository}*/ ($Casts.$to(repo_2, Repository));
   td.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(dp.m_getId__java_lang_Object__java_lang_String(repo_3)), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(repo_3.f_name__org_patternfly_showcase_component_TableComponent_Repository), HTMLContainerBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Branches', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo_4) =>{
   let repo_5 = /**@type {Repository}*/ ($Casts.$to(repo_4, Repository));
   return Integer.m_valueOf__int__java_lang_Integer(repo_5.f_branches__org_patternfly_showcase_component_TableComponent_Repository);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_1, /** DataProvider<Repository> */ dp_1, repo_6) =>{
   let repo_7 = /**@type {Repository}*/ ($Casts.$to(repo_6, Repository));
   td_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_7.f_branches__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Pull Requests', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo_8) =>{
   let repo_9 = /**@type {Repository}*/ ($Casts.$to(repo_8, Repository));
   return Integer.m_valueOf__int__java_lang_Integer(repo_9.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_2, /** DataProvider<Repository> */ dp_2, repo_10) =>{
   let repo_11 = /**@type {Repository}*/ ($Casts.$to(repo_10, Repository));
   td_2.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_11.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Contributors', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo_12) =>{
   let repo_13 = /**@type {Repository}*/ ($Casts.$to(repo_12, Repository));
   return Integer.m_valueOf__int__java_lang_Integer(repo_13.f_contributors__org_patternfly_showcase_component_TableComponent_Repository);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_3, /** DataProvider<Repository> */ dp_3, repo_14) =>{
   let repo_15 = /**@type {Repository}*/ ($Casts.$to(repo_14, Repository));
   td_3.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_15.f_contributors__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Last Commit', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_4, /** DataProvider<Repository> */ dp_4, repo_16) =>{
   let repo_17 = /**@type {Repository}*/ ($Casts.$to(repo_16, Repository));
   td_4.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repo_17.f_lastCommit__org_patternfly_showcase_component_TableComponent_Repository.toLocaleDateString()), HTMLElementBuilder)));
  }))));
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(dataTable);
  dataProvider.m_update__arrayOf_java_lang_Object__void(TableComponent.m_repositories__arrayOf_org_patternfly_showcase_component_TableComponent_Repository());
  return dataTable;
 }
 /** @nodts @return {DataTable<Repository>} */
 static m_checkbox__org_patternfly_component_DataTable() {
  let dataProvider = TableComponent.m_dataProvider__org_patternfly_dataprovider_DataProvider();
  let dataTable = /**@type {DataTable<Repository>}*/ (DataTable.m_dataTable__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataTable(dataProvider)).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_checkboxColumn__org_patternfly_component_DataTable_Column())).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Repository', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<Repository> */ dp, repo) =>{
   let repo_1 = /**@type {Repository}*/ ($Casts.$to(repo, Repository));
   td.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(dp.m_getId__java_lang_Object__java_lang_String(repo_1)), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(repo_1.f_name__org_patternfly_showcase_component_TableComponent_Repository), HTMLContainerBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Branches', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_1, /** DataProvider<Repository> */ dp_1, repo_2) =>{
   let repo_3 = /**@type {Repository}*/ ($Casts.$to(repo_2, Repository));
   td_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_3.f_branches__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Pull Requests', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_2, /** DataProvider<Repository> */ dp_2, repo_4) =>{
   let repo_5 = /**@type {Repository}*/ ($Casts.$to(repo_4, Repository));
   td_2.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_5.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Contributors', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_3, /** DataProvider<Repository> */ dp_3, repo_6) =>{
   let repo_7 = /**@type {Repository}*/ ($Casts.$to(repo_6, Repository));
   td_3.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_7.f_contributors__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Last Commit', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_4, /** DataProvider<Repository> */ dp_4, repo_8) =>{
   let repo_9 = /**@type {Repository}*/ ($Casts.$to(repo_8, Repository));
   td_4.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repo_9.f_lastCommit__org_patternfly_showcase_component_TableComponent_Repository.toLocaleDateString()), HTMLElementBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_actionsColumn__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_5, /** DataProvider<Repository> */ dp_5, repo_10) =>{
   let repo_11 = /**@type {Repository}*/ ($Casts.$to(repo_10, Repository));
   if (!j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(repo_11.f_name__org_patternfly_showcase_component_TableComponent_Repository, 'p')) {
    td_5.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Dropdown<?string>}*/ (Dropdown.m_kebab__org_patternfly_component_Dropdown()).m_right__org_patternfly_component_Dropdown().m_add__java_lang_Object__org_patternfly_component_Dropdown('First action').m_add__java_lang_Object__org_patternfly_component_Dropdown('Second action').m_addSeparator__org_patternfly_component_Dropdown().m_add__java_lang_Object__org_patternfly_component_Dropdown('Third action'));
   }
  }))));
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(dataTable);
  dataProvider.m_update__arrayOf_java_lang_Object__void(TableComponent.m_repositories__arrayOf_org_patternfly_showcase_component_TableComponent_Repository());
  return dataTable;
 }
 /** @nodts @return {DataTable<Repository>} */
 static m_expandable__org_patternfly_component_DataTable() {
  let dataProvider = TableComponent.m_dataProvider__org_patternfly_dataprovider_DataProvider();
  let dataTable = /**@type {DataTable<Repository>}*/ (DataTable.m_dataTable__org_patternfly_dataprovider_DataProvider__org_patternfly_component_DataTable(dataProvider)).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_expandColumn__org_patternfly_component_DataTable_Column())).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_checkboxColumn__org_patternfly_component_DataTable_Column())).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Repository', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo) =>{
   let repo_1 = /**@type {Repository}*/ ($Casts.$to(repo, Repository));
   return repo_1.f_name__org_patternfly_showcase_component_TableComponent_Repository;
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td, /** DataProvider<Repository> */ dp, repo_2) =>{
   let repo_3 = /**@type {Repository}*/ ($Casts.$to(repo_2, Repository));
   td.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(dp.m_getId__java_lang_Object__java_lang_String(repo_3)), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(repo_3.f_name__org_patternfly_showcase_component_TableComponent_Repository), HTMLContainerBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Branches', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo_4) =>{
   let repo_5 = /**@type {Repository}*/ ($Casts.$to(repo_4, Repository));
   return Integer.m_valueOf__int__java_lang_Integer(repo_5.f_branches__org_patternfly_showcase_component_TableComponent_Repository);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_1, /** DataProvider<Repository> */ dp_1, repo_6) =>{
   let repo_7 = /**@type {Repository}*/ ($Casts.$to(repo_6, Repository));
   td_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_7.f_branches__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Pull Requests', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo_8) =>{
   let repo_9 = /**@type {Repository}*/ ($Casts.$to(repo_8, Repository));
   return Integer.m_valueOf__int__java_lang_Integer(repo_9.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_2, /** DataProvider<Repository> */ dp_2, repo_10) =>{
   let repo_11 = /**@type {Repository}*/ ($Casts.$to(repo_10, Repository));
   td_2.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_11.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__java_util_Comparator__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Contributors', /**@type {Comparator<Repository>}*/ (Comparator.m_comparing__java_util_function_Function__java_util_Comparator(j_u_function_Function.$adapt((repo_12) =>{
   let repo_13 = /**@type {Repository}*/ ($Casts.$to(repo_12, Repository));
   return Integer.m_valueOf__int__java_lang_Integer(repo_13.f_contributors__org_patternfly_showcase_component_TableComponent_Repository);
  }))), BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_3, /** DataProvider<Repository> */ dp_3, repo_14) =>{
   let repo_15 = /**@type {Repository}*/ ($Casts.$to(repo_14, Repository));
   td_3.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__int__java_lang_String(repo_15.f_contributors__org_patternfly_showcase_component_TableComponent_Repository));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_column__java_lang_String__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column('Last Commit', BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_4, /** DataProvider<Repository> */ dp_4, repo_16) =>{
   let repo_17 = /**@type {Repository}*/ ($Casts.$to(repo_16, Repository));
   td_4.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLElementBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder('relative-time', Class.$get($JavaScriptObject))).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('datetime', repo_17.f_lastCommit__org_patternfly_showcase_component_TableComponent_Repository.toLocaleDateString()), HTMLElementBuilder)));
  })))).m_add__org_patternfly_component_DataTable_Column__org_patternfly_component_DataTable(/**@type {Column<Repository>}*/ (DataTable.m_actionsColumn__org_patternfly_component_DataTable_BodyDisplay__org_patternfly_component_DataTable_Column(BodyDisplay.$adapt((/** HTMLContainerBuilder<HTMLTableCellElement> */ td_5, /** DataProvider<Repository> */ dp_5, repo_18) =>{
   let repo_19 = /**@type {Repository}*/ ($Casts.$to(repo_18, Repository));
   if (!j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(repo_19.f_name__org_patternfly_showcase_component_TableComponent_Repository, 'p')) {
    td_5.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Dropdown<?string>}*/ (Dropdown.m_kebab__org_patternfly_component_Dropdown()).m_right__org_patternfly_component_Dropdown().m_add__java_lang_Object__org_patternfly_component_Dropdown('First action').m_add__java_lang_Object__org_patternfly_component_Dropdown('Second action').m_addSeparator__org_patternfly_component_Dropdown().m_add__java_lang_Object__org_patternfly_component_Dropdown('Third action'));
   }
  })))).m_expandableRow__java_util_function_Predicate__org_patternfly_component_DataTable_ExpandableDisplay__org_patternfly_component_DataTable(Predicate.$adapt((repo_20) =>{
   let repo_21 = /**@type {Repository}*/ ($Casts.$to(repo_20, Repository));
   return repo_21.f_pullRequests__org_patternfly_showcase_component_TableComponent_Repository > 0;
  }), ExpandableDisplay.$adapt((/** HTMLContainerBuilder<HTMLDivElement> */ html, /** DataProvider<Repository> */ dp_6, repo_22) =>{
   let repo_23 = /**@type {Repository}*/ ($Casts.$to(repo_22, Repository));
   html.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(repo_23.f_lorem__org_patternfly_showcase_component_TableComponent_Repository);
  }));
  dataProvider.m_bindDisplay__org_patternfly_dataprovider_Display__void(dataTable);
  dataProvider.m_update__arrayOf_java_lang_Object__void(TableComponent.m_repositories__arrayOf_org_patternfly_showcase_component_TableComponent_Repository());
  return dataTable;
 }
 /** @nodts @return {Array<Repository>} */
 static m_repositories__arrayOf_org_patternfly_showcase_component_TableComponent_Repository() {
  return /**@type {!Array<Repository>}*/ ($Arrays.$init([Repository.$create__java_lang_String__java_lang_String__int__int__int('wildfly/wildfly', 'https://github.com/wildfly/wildfly', 12, 52, 318), Repository.$create__java_lang_String__java_lang_String__int__int__int('quarkusio/quarkus', 'https://github.com/quarkusio/quarkus', 17, 71, 174), Repository.$create__java_lang_String__java_lang_String__int__int__int('patternfly/patternfly-next', 'https://github.com/patternfly/patternfly-next', 18, 16, 41), Repository.$create__java_lang_String__java_lang_String__int__int__int('hal/console', 'https://github.com/hal/console', 12, 9, 11), Repository.$create__java_lang_String__java_lang_String__int__int__int('hal/elemento', 'https://github.com/hal/elemento', 6, 0, 9), Repository.$create__java_lang_String__java_lang_String__int__int__int('hpehl/patternfly-java', 'https://github.com/hpehl/patternfly-java', 2, 0, 2)], Repository));
 }
 /** @nodts @return {!TableComponent} */
 static $create__() {
  TableComponent.$clinit();
  let $instance = new TableComponent();
  $instance.$ctor__org_patternfly_showcase_component_TableComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TableComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Data table', 'https://patternfly-java.github.io/patternfly-java/', 'https://www.patternfly.org/', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('A table is used to display large data sets that can be easily ' + 'laid out in a simple grid with column headers.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLParagraphElement_$Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('simple', 'Simple table', 'Resources.get().dataTableSimple().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TableComponent.m_simple__org_patternfly_component_DataTable()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('sortable', 'Sortable table', 'Resources.get().dataTableSortable().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TableComponent.m_sortable__org_patternfly_component_DataTable()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('actions', 'Table with checkboxes and actions', 'Resources.get().dataTableCheckbox().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TableComponent.m_checkbox__org_patternfly_component_DataTable()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('expandable', 'Expandable table', 'Resources.get().dataTableExpandable().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TableComponent.m_expandable__org_patternfly_component_DataTable()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  TableComponent.$clinit = () =>{};
  TableComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TableComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLParagraphElement_$Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  DataTable = goog.module.get('org.patternfly.component.DataTable$impl');
  BodyDisplay = goog.module.get('org.patternfly.component.DataTable.BodyDisplay$impl');
  ExpandableDisplay = goog.module.get('org.patternfly.component.DataTable.ExpandableDisplay$impl');
  Dropdown = goog.module.get('org.patternfly.component.Dropdown$impl');
  DataProvider = goog.module.get('org.patternfly.dataprovider.DataProvider$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  Repository = goog.module.get('org.patternfly.showcase.component.TableComponent.Repository$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(TableComponent, 'org.patternfly.showcase.component.TableComponent');

exports = TableComponent;

//# sourceMappingURL=TableComponent.js.map

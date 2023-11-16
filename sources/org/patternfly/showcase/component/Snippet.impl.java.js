goog.module('org.patternfly.showcase.component.Snippet$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let CodeEditorAction = goog.forwardDeclare('org.patternfly.component.code.CodeEditorAction$impl');
let CodeEditorActions = goog.forwardDeclare('org.patternfly.component.code.CodeEditorActions$impl');
let CodeEditorHeader = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeader$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.layout.Classes$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
 */
class Snippet extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_demoSupplier__org_patternfly_showcase_component_Snippet_;
  /**@type {HTMLElement} @nodts*/
  this.f_root__org_patternfly_showcase_component_Snippet_;
  /**@type {HTMLElement} @nodts*/
  this.f_preview__org_patternfly_showcase_component_Snippet_;
 }
 /** @nodts @return {!Snippet} */
 static $create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier(/** ?string */ id, /** ?string */ header, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  Snippet.$clinit();
  let $instance = new Snippet();
  $instance.$ctor__org_patternfly_showcase_component_Snippet__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(id, header, code, demo);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_Snippet__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(/** ?string */ id, /** ?string */ header, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  this.$ctor__java_lang_Object__void();
  this.f_demoSupplier__org_patternfly_showcase_component_Snippet_ = demo;
  let /** CodeEditor */ codeEditor;
  let codeId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init(['code'], j_l_String)));
  let copyId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init(['copy'], j_l_String)));
  let undoId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init(['undo'], j_l_String)));
  let copyAction = /**@type {CodeEditorAction}*/ ($Casts.$to(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(copyId), CodeEditorAction));
  let copyTooltip = Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(copyId), 'Copy code to clipboard');
  this.f_root__org_patternfly_showcase_component_Snippet_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-example'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-example-header'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_flex__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String('space-items-none'), Classes.m_modifier__java_lang_String__java_lang_String('align-items-center')], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(Title.m_title__int__java_lang_String__org_patternfly_layout_Size__org_patternfly_component_title_Title(3, header, Size.f_lg__org_patternfly_layout_Size).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading', 'ws-example-heading'], j_l_String))), Title)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), Title)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), Title)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading-anchor'], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder))), Title))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_preview__org_patternfly_showcase_component_Snippet_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-preview'], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLElement}*/ ($Casts.$to(demo.m_get__java_lang_Object(), $Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(codeEditor = /**@type {CodeEditor}*/ ($Casts.$to(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor'], j_l_String))), CodeEditor)).m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(/**@type {CodeEditorActions}*/ ($Casts.$to(/**@type {CodeEditorActions}*/ ($Casts.$to(/**@type {CodeEditorActions}*/ ($Casts.$to(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(codeId), Button)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor-control'], j_l_String))), Button)).m_control__org_patternfly_component_button_Button().m_addIconAndText__org_patternfly_layout_PredefinedIcon__java_lang_String__org_patternfly_component_button_Button(PredefinedIcon.f_code__org_patternfly_layout_PredefinedIcon, 'Java')).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event, codeEditorAction) =>{
   let codeEditorAction_1 = /**@type {CodeEditorAction}*/ ($Casts.$to(codeEditorAction, CodeEditorAction));
   let mainElement = codeEditorAction_1.m_mainComponent__org_patternfly_component_code_CodeEditor().m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_layout_Classes], j_l_String)))));
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(mainElement, !Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(mainElement));
  }))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(codeId), 'Toggle Java code')), CodeEditorActions)).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(/**@type {CodeEditorAction}*/ ($Casts.$to(/**@type {CodeEditorAction}*/ ($Casts.$to(copyAction.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor-control'], j_l_String))), CodeEditorAction)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   copyTooltip.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip('Code copied');
  }), CodeEditorAction))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(copyTooltip.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tooltip_Tooltip(CloseHandler.$adapt((/** Event */ e_2, t) =>{
   let t_1 = /**@type {Tooltip}*/ ($Casts.$to(t, Tooltip));
   t_1.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip('Copy code to clipboard');
  }))), CodeEditorActions)).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(/**@type {CodeEditorAction}*/ ($Casts.$to(/**@type {CodeEditorAction}*/ ($Casts.$to(CodeEditorAction.m_codeEditorAction__org_patternfly_layout_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(PredefinedIcon.f_undo__org_patternfly_layout_PredefinedIcon).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(undoId), CodeEditorAction)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor-control'], j_l_String))), CodeEditorAction)).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event_1, codeEditorAction_2) =>{
   let codeEditorAction_3 = /**@type {CodeEditorAction}*/ ($Casts.$to(codeEditorAction_2, CodeEditorAction));
   this.m_undo__void_$p_org_patternfly_showcase_component_Snippet();
  }))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(undoId), 'Undo')), CodeEditorActions)))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(code)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  let mainElement_1 = codeEditor.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_layout_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_layout_Classes], j_l_String)))));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(mainElement_1, false);
 }
 /** @nodts */
 m_undo__void_$p_org_patternfly_showcase_component_Snippet() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_preview__org_patternfly_showcase_component_Snippet_);
  this.f_preview__org_patternfly_showcase_component_Snippet_.appendChild(/**@type {HTMLElement}*/ ($Casts.$to(this.f_demoSupplier__org_patternfly_showcase_component_Snippet_.m_get__java_lang_Object(), $Overlay)));
 }
 /** @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_root__org_patternfly_showcase_component_Snippet_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 static $clinit() {
  Snippet.$clinit = () =>{};
  Snippet.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Snippet;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  CodeEditorAction = goog.module.get('org.patternfly.component.code.CodeEditorAction$impl');
  CodeEditorActions = goog.module.get('org.patternfly.component.code.CodeEditorActions$impl');
  CodeEditorHeader = goog.module.get('org.patternfly.component.code.CodeEditorHeader$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  Classes = goog.module.get('org.patternfly.layout.Classes$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Size = goog.module.get('org.patternfly.layout.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsElement.$markImplementor(Snippet);
$Util.$setClassMetadata(Snippet, 'org.patternfly.showcase.component.Snippet');

exports = Snippet;

//# sourceMappingURL=Snippet.js.map

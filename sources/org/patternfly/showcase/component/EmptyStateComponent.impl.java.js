goog.module('org.patternfly.showcase.component.EmptyStateComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComponentPage = goog.require('org.patternfly.showcase.component.ComponentPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let EmptyState = goog.forwardDeclare('org.patternfly.component.EmptyState$impl');
let Icon = goog.forwardDeclare('org.patternfly.component.Icon$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Callback = goog.forwardDeclare('org.patternfly.handler.Callback$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.layout.PredefinedIcon$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.component.Snippet$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @deprecated
 */
class EmptyStateComponent extends ComponentPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!EmptyStateComponent} */
 static $create__() {
  EmptyStateComponent.$clinit();
  let $instance = new EmptyStateComponent();
  $instance.$ctor__org_patternfly_showcase_component_EmptyStateComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_EmptyStateComponent__void() {
  this.$ctor__org_patternfly_showcase_component_ComponentPage__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void('Empty state', 'https://patternfly-java.github.io/patternfly-java/', 'https://www.patternfly.org/components/empty-state/design-guidelines', /**@type {HTMLParagraphElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Use an empty state component when there is no data or other information to show. ' + 'It can also be used to communicate completion or other status at the end of a sequential ' + 'task. An empty state may include a call to action to guide the user on what to do next.'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('empty-state', 'Empty state', 'Resources.get().emptyState().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(EmptyState.m_emptyState__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_EmptyState(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('cubes')), 'Empty State').m_body__java_lang_String__org_patternfly_component_EmptyState('This represents an the empty state pattern in PatternFly 4. ' + 'Hopefully it\'s simple enough to use but flexible enough to ' + 'meet a variety of needs.').m_primary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Primary action', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Multiple', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Action buttons', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Can', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Go here', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('In the secondary', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Action area', Callback.m_noop__org_patternfly_handler_Callback()).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('small', 'Empty state small', 'Resources.get().emptyStateSmall().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(EmptyState.m_emptyState__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_EmptyState(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('cubes')), 'Empty State').m_small__org_patternfly_component_EmptyState().m_body__java_lang_String__org_patternfly_component_EmptyState('This represents an the empty state pattern in PatternFly 4. ' + 'Hopefully it\'s simple enough to use but flexible enough to ' + 'meet a variety of needs.').m_primary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Primary action', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Multiple', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Action buttons', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Can', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Go here', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('In the secondary', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Action area', Callback.m_noop__org_patternfly_handler_Callback()).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('large', 'Empty state large', 'Resources.get().emptyStateLarge().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(EmptyState.m_emptyState__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_EmptyState(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('cubes')), 'Empty State').m_large__org_patternfly_component_EmptyState().m_body__java_lang_String__org_patternfly_component_EmptyState('This represents an the empty state pattern in PatternFly 4. ' + 'Hopefully it\'s simple enough to use but flexible enough to ' + 'meet a variety of needs.').m_primary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Primary action', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Multiple', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Action buttons', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Can', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Go here', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('In the secondary', Callback.m_noop__org_patternfly_handler_Callback()).m_secondary__java_lang_String__org_patternfly_handler_Callback__org_patternfly_component_EmptyState('Action area', Callback.m_noop__org_patternfly_handler_Callback()).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('primary', 'Empty state w/ primary element', 'Resources.get().emptyStatePrimary().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(EmptyState.m_emptyState__org_patternfly_component_Icon__java_lang_String__org_patternfly_component_EmptyState(Icon.m_icon__java_lang_String__org_patternfly_component_Icon(PredefinedIcon.m_fas__java_lang_String__java_lang_String('cubes')), 'Empty State').m_body__java_lang_String__org_patternfly_component_EmptyState('This represents an the empty state pattern in PatternFly 4. ' + 'Hopefully it\'s simple enough to use but flexible enough to ' + 'meet a variety of needs.').m_primary__org_patternfly_component_button_Button__org_patternfly_component_EmptyState(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Action button').m_link__org_patternfly_component_button_Button()).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('loading', 'Empty state loading', 'Resources.get().emptyStateSpinner().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(EmptyState.m_spinner__org_patternfly_component_EmptyState()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_component_Snippet__void_$pp_org_patternfly_showcase_component(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('not-found', 'Empty state no match found', 'Resources.get().emptyStateNoMatch().getText()', Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(EmptyState.m_noResults__org_patternfly_handler_Callback__org_patternfly_component_EmptyState(Callback.m_noop__org_patternfly_handler_Callback())), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
 }
 /** @nodts */
 static $clinit() {
  EmptyStateComponent.$clinit = () =>{};
  EmptyStateComponent.$loadModules();
  ComponentPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyStateComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  EmptyState = goog.module.get('org.patternfly.component.EmptyState$impl');
  Icon = goog.module.get('org.patternfly.component.Icon$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Callback = goog.module.get('org.patternfly.handler.Callback$impl');
  PredefinedIcon = goog.module.get('org.patternfly.layout.PredefinedIcon$impl');
  Snippet = goog.module.get('org.patternfly.showcase.component.Snippet$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(EmptyStateComponent, 'org.patternfly.showcase.component.EmptyStateComponent');

exports = EmptyStateComponent;

//# sourceMappingURL=EmptyStateComponent.js.map

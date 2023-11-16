goog.module('org.patternfly.layout.Classes$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let PatternFly = goog.forwardDeclare('org.patternfly.core.PatternFly$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.layout.Breakpoint$impl');
let Size = goog.forwardDeclare('org.patternfly.layout.Size$impl');

/**
 * @interface
 */
class Classes {
 /** @nodts @return {?string} */
 static m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ component, /** Array<?string> */ elements) {
  Classes.$clinit();
  let builder = StringBuilder.$create__();
  builder.m_append__java_lang_String__java_lang_StringBuilder('pf-').m_append__java_lang_String__java_lang_StringBuilder(PatternFly.f_VERSION__org_patternfly_core_PatternFly).m_append__java_lang_String__java_lang_StringBuilder('-c-').m_append__java_lang_String__java_lang_StringBuilder(component);
  if (!$Equality.$same(elements, null) && elements.length != 0) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('__');
   for (let i = 0; i < elements.length; i = i + 1 | 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder(elements[i]);
    if (i < (elements.length - 1 | 0)) {
     builder.m_append__java_lang_String__java_lang_StringBuilder('-');
    }
   }
  }
  return builder.toString();
 }
 /** @nodts @return {?string} */
 static m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ layout, /** Array<?string> */ elements) {
  Classes.$clinit();
  let builder = StringBuilder.$create__();
  builder.m_append__java_lang_String__java_lang_StringBuilder('pf-').m_append__java_lang_String__java_lang_StringBuilder(PatternFly.f_VERSION__org_patternfly_core_PatternFly).m_append__java_lang_String__java_lang_StringBuilder('-l-').m_append__java_lang_String__java_lang_StringBuilder(layout);
  if (!$Equality.$same(elements, null) && elements.length != 0) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('__');
   for (let i = 0; i < elements.length; i = i + 1 | 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder(elements[i]);
    if (i < (elements.length - 1 | 0)) {
     builder.m_append__java_lang_String__java_lang_StringBuilder('-');
    }
   }
  }
  return builder.toString();
 }
 /** @nodts @return {?string} */
 static m_modifier__java_lang_String__java_lang_String(/** ?string */ modifier) {
  Classes.$clinit();
  return 'pf-m-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(modifier);
 }
 /** @nodts @return {?string} */
 static m_modifier__java_lang_String__org_patternfly_layout_Size__java_lang_String(/** ?string */ modifier, /** Size */ size) {
  Classes.$clinit();
  return 'pf-m-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(modifier) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(size.f_value__org_patternfly_layout_Size);
 }
 /** @nodts @return {?string} */
 static m_modifier__java_lang_String__org_patternfly_layout_Breakpoint__java_lang_String(/** ?string */ modifier, /** Breakpoint */ breakpoint) {
  Classes.$clinit();
  return 'pf-m-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(modifier) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(breakpoint.f_value__org_patternfly_layout_Breakpoint);
 }
 /** @nodts @return {?string} */
 static m_util__java_lang_String__java_lang_String(/** ?string */ utility) {
  Classes.$clinit();
  return 'pf-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(PatternFly.f_VERSION__org_patternfly_core_PatternFly) + '-u-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(utility);
 }
 /** @nodts */
 static $clinit() {
  Classes.$clinit = () =>{};
  Classes.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_layout_Classes = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_layout_Classes;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  PatternFly = goog.module.get('org.patternfly.core.PatternFly$impl');
 }
}
/**@const {string} @nodts*/
Classes.f_action__org_patternfly_layout_Classes = 'action';
/**@const {string} @nodts*/
Classes.f_actionGroup__org_patternfly_layout_Classes = 'action-group';
/**@const {string} @nodts*/
Classes.f_actionList__org_patternfly_layout_Classes = 'action-list';
/**@const {string} @nodts*/
Classes.f_actions__org_patternfly_layout_Classes = 'actions';
/**@const {string} @nodts*/
Classes.f_active__org_patternfly_layout_Classes = 'active';
/**@const {string} @nodts*/
Classes.f_alert__org_patternfly_layout_Classes = 'alert';
/**@const {string} @nodts*/
Classes.f_alertGroup__org_patternfly_layout_Classes = 'alert-group';
/**@const {string} @nodts*/
Classes.f_alignRight__org_patternfly_layout_Classes = 'align-right';
/**@const {string} @nodts*/
Classes.f_arrow__org_patternfly_layout_Classes = 'arrow';
/**@const {string} @nodts*/
Classes.f_avatar__org_patternfly_layout_Classes = 'avatar';
/**@const {string} @nodts*/
Classes.f_badge__org_patternfly_layout_Classes = 'badge';
/**@const {string} @nodts*/
Classes.f_banner__org_patternfly_layout_Classes = 'banner';
/**@const {string} @nodts*/
Classes.f_block__org_patternfly_layout_Classes = 'block';
/**@const {string} @nodts*/
Classes.f_body__org_patternfly_layout_Classes = 'body';
/**@const {string} @nodts*/
Classes.f_bottom__org_patternfly_layout_Classes = 'bottom';
/**@const {string} @nodts*/
Classes.f_brand__org_patternfly_layout_Classes = 'brand';
/**@const {string} @nodts*/
Classes.f_breadcrumb__org_patternfly_layout_Classes = 'breadcrumb';
/**@const {string} @nodts*/
Classes.f_bulkSelect__org_patternfly_layout_Classes = 'bulk-select';
/**@const {string} @nodts*/
Classes.f_button__org_patternfly_layout_Classes = 'button';
/**@const {string} @nodts*/
Classes.f_buttonGroup__org_patternfly_layout_Classes = 'button-group';
/**@const {string} @nodts*/
Classes.f_card__org_patternfly_layout_Classes = 'card';
/**@const {string} @nodts*/
Classes.f_category__org_patternfly_layout_Classes = 'category';
/**@const {string} @nodts*/
Classes.f_cell__org_patternfly_layout_Classes = 'cell';
/**@const {string} @nodts*/
Classes.f_center__org_patternfly_layout_Classes = 'center';
/**@const {string} @nodts*/
Classes.f_check__org_patternfly_layout_Classes = 'check';
/**@const {string} @nodts*/
Classes.f_chip__org_patternfly_layout_Classes = 'chip';
/**@const {string} @nodts*/
Classes.f_chipGroup__org_patternfly_layout_Classes = 'chip-group';
/**@const {string} @nodts*/
Classes.f_clipper__org_patternfly_layout_Classes = 'clipper';
/**@const {string} @nodts*/
Classes.f_close__org_patternfly_layout_Classes = 'close';
/**@const {string} @nodts*/
Classes.f_code__org_patternfly_layout_Classes = 'code';
/**@const {string} @nodts*/
Classes.f_codeBlock__org_patternfly_layout_Classes = 'code-block';
/**@const {string} @nodts*/
Classes.f_codeEditor__org_patternfly_layout_Classes = 'code-editor';
/**@const {string} @nodts*/
Classes.f_col__org_patternfly_layout_Classes = 'col';
/**@const {string} @nodts*/
Classes.f_collapsed__org_patternfly_layout_Classes = 'collapsed';
/**@const {string} @nodts*/
Classes.f_compact__org_patternfly_layout_Classes = 'compact';
/**@const {string} @nodts*/
Classes.f_content__org_patternfly_layout_Classes = 'content';
/**@const {string} @nodts*/
Classes.f_contextSelector__org_patternfly_layout_Classes = 'context-selector';
/**@const {string} @nodts*/
Classes.f_control__org_patternfly_layout_Classes = 'control';
/**@const {string} @nodts*/
Classes.f_controls__org_patternfly_layout_Classes = 'controls';
/**@const {string} @nodts*/
Classes.f_count__org_patternfly_layout_Classes = 'count';
/**@const {string} @nodts*/
Classes.f_current__org_patternfly_layout_Classes = 'current';
/**@const {string} @nodts*/
Classes.f_custom__org_patternfly_layout_Classes = 'custom';
/**@const {string} @nodts*/
Classes.f_danger__org_patternfly_layout_Classes = 'danger';
/**@const {string} @nodts*/
Classes.f_dataList__org_patternfly_layout_Classes = 'data-list';
/**@const {string} @nodts*/
Classes.f_dataToolbar__org_patternfly_layout_Classes = 'data-toolbar';
/**@const {string} @nodts*/
Classes.f_description__org_patternfly_layout_Classes = 'description';
/**@const {string} @nodts*/
Classes.f_detached__org_patternfly_layout_Classes = 'detached';
/**@const {string} @nodts*/
Classes.f_disabled__org_patternfly_layout_Classes = 'disabled';
/**@const {string} @nodts*/
Classes.f_display__org_patternfly_layout_Classes = 'display';
/**@const {string} @nodts*/
Classes.f_divider__org_patternfly_layout_Classes = 'divider';
/**@const {string} @nodts*/
Classes.f_dropdown__org_patternfly_layout_Classes = 'dropdown';
/**@const {string} @nodts*/
Classes.f_emptyState__org_patternfly_layout_Classes = 'empty-state';
/**@const {string} @nodts*/
Classes.f_end__org_patternfly_layout_Classes = 'end';
/**@const {string} @nodts*/
Classes.f_error__org_patternfly_layout_Classes = 'error';
/**@const {string} @nodts*/
Classes.f_expandable__org_patternfly_layout_Classes = 'expandable';
/**@const {string} @nodts*/
Classes.f_expandableContent__org_patternfly_layout_Classes = 'expandable-content';
/**@const {string} @nodts*/
Classes.f_expandableRow__org_patternfly_layout_Classes = 'expandable-row';
/**@const {string} @nodts*/
Classes.f_expandableSection__org_patternfly_layout_Classes = 'expandable-section';
/**@const {string} @nodts*/
Classes.f_expanded__org_patternfly_layout_Classes = 'expanded';
/**@const {string} @nodts*/
Classes.f_expandTop__org_patternfly_layout_Classes = 'expand-top';
/**@const {string} @nodts*/
Classes.f_externalIcon__org_patternfly_layout_Classes = 'external-icon';
/**@const {string} @nodts*/
Classes.f_favorite__org_patternfly_layout_Classes = 'favorite';
/**@const {string} @nodts*/
Classes.f_favorited__org_patternfly_layout_Classes = 'favorited';
/**@const {string} @nodts*/
Classes.f_fieldset__org_patternfly_layout_Classes = 'fieldset';
/**@const {string} @nodts*/
Classes.f_fill__org_patternfly_layout_Classes = 'fill';
/**@const {string} @nodts*/
Classes.f_filterGroup__org_patternfly_layout_Classes = 'filter-group';
/**@const {string} @nodts*/
Classes.f_flex__org_patternfly_layout_Classes = 'flex';
/**@const {string} @nodts*/
Classes.f_floatLeft__org_patternfly_layout_Classes = 'float-left';
/**@const {string} @nodts*/
Classes.f_floatRight__org_patternfly_layout_Classes = 'float-right';
/**@const {string} @nodts*/
Classes.f_flyout__org_patternfly_layout_Classes = 'flyout';
/**@const {string} @nodts*/
Classes.f_focus__org_patternfly_layout_Classes = 'focus';
/**@const {string} @nodts*/
Classes.f_footer__org_patternfly_layout_Classes = 'footer';
/**@const {string} @nodts*/
Classes.f_form__org_patternfly_layout_Classes = 'form';
/**@const {string} @nodts*/
Classes.f_formControl__org_patternfly_layout_Classes = 'form-control';
/**@const {string} @nodts*/
Classes.f_gallery__org_patternfly_layout_Classes = 'gallery';
/**@const {string} @nodts*/
Classes.f_global__org_patternfly_layout_Classes = 'global';
/**@const {string} @nodts*/
Classes.f_grid__org_patternfly_layout_Classes = 'grid';
/**@const {string} @nodts*/
Classes.f_group__org_patternfly_layout_Classes = 'group';
/**@const {string} @nodts*/
Classes.f_gutter__org_patternfly_layout_Classes = 'gutter';
/**@const {string} @nodts*/
Classes.f_hasPopup__org_patternfly_layout_Classes = 'haspopup';
/**@const {string} @nodts*/
Classes.f_head__org_patternfly_layout_Classes = 'head';
/**@const {string} @nodts*/
Classes.f_header__org_patternfly_layout_Classes = 'header';
/**@const {string} @nodts*/
Classes.f_horizontal__org_patternfly_layout_Classes = 'horizontal';
/**@const {string} @nodts*/
Classes.f_horizontalSubnav__org_patternfly_layout_Classes = 'horizontal-subnav';
/**@const {string} @nodts*/
Classes.f_hoverable__org_patternfly_layout_Classes = 'hoverable';
/**@const {string} @nodts*/
Classes.f_icon__org_patternfly_layout_Classes = 'icon';
/**@const {string} @nodts*/
Classes.f_icons__org_patternfly_layout_Classes = 'icons';
/**@const {string} @nodts*/
Classes.f_iconButtonGroup__org_patternfly_layout_Classes = 'icon-button-group';
/**@const {string} @nodts*/
Classes.f_indented__org_patternfly_layout_Classes = 'indented';
/**@const {string} @nodts*/
Classes.f_indicator__org_patternfly_layout_Classes = 'indicator';
/**@const {string} @nodts*/
Classes.f_info__org_patternfly_layout_Classes = 'info';
/**@const {string} @nodts*/
Classes.f_inline__org_patternfly_layout_Classes = 'inline';
/**@const {string} @nodts*/
Classes.f_inProgress__org_patternfly_layout_Classes = 'in-progress';
/**@const {string} @nodts*/
Classes.f_input__org_patternfly_layout_Classes = 'input';
/**@const {string} @nodts*/
Classes.f_inputGroup__org_patternfly_layout_Classes = 'input-group';
/**@const {string} @nodts*/
Classes.f_inset__org_patternfly_layout_Classes = 'inset';
/**@const {string} @nodts*/
Classes.f_insetNone__org_patternfly_layout_Classes = 'inset-none';
/**@const {string} @nodts*/
Classes.f_item__org_patternfly_layout_Classes = 'item';
/**@const {string} @nodts*/
Classes.f_itemAction__org_patternfly_layout_Classes = 'item-action';
/**@const {string} @nodts*/
Classes.f_itemContent__org_patternfly_layout_Classes = 'item-content';
/**@const {string} @nodts*/
Classes.f_itemControl__org_patternfly_layout_Classes = 'item-control';
/**@const {string} @nodts*/
Classes.f_itemRow__org_patternfly_layout_Classes = 'item-row';
/**@const {string} @nodts*/
Classes.f_keyboard__org_patternfly_layout_Classes = 'keyboard';
/**@const {string} @nodts*/
Classes.f_label__org_patternfly_layout_Classes = 'label';
/**@const {string} @nodts*/
Classes.f_labelledBy__org_patternfly_layout_Classes = 'labelledby';
/**@const {string} @nodts*/
Classes.f_leadBall__org_patternfly_layout_Classes = 'lead-ball';
/**@const {string} @nodts*/
Classes.f_left__org_patternfly_layout_Classes = 'left';
/**@const {string} @nodts*/
Classes.f_limitWidth__org_patternfly_layout_Classes = 'limit-width';
/**@const {string} @nodts*/
Classes.f_link__org_patternfly_layout_Classes = 'link';
/**@const {string} @nodts*/
Classes.f_list__org_patternfly_layout_Classes = 'list';
/**@const {string} @nodts*/
Classes.f_listbox__org_patternfly_layout_Classes = 'listbox';
/**@const {string} @nodts*/
Classes.f_main__org_patternfly_layout_Classes = 'main';
/**@const {string} @nodts*/
Classes.f_mainSection__org_patternfly_layout_Classes = 'main-section';
/**@const {string} @nodts*/
Classes.f_masthead__org_patternfly_layout_Classes = 'masthead';
/**@const {string} @nodts*/
Classes.f_maxLines__org_patternfly_layout_Classes = 'max-lines';
/**@const {string} @nodts*/
Classes.f_menu__org_patternfly_layout_Classes = 'menu';
/**@const {string} @nodts*/
Classes.f_menuitem__org_patternfly_layout_Classes = 'menuitem';
/**@const {string} @nodts*/
Classes.f_menuToggle__org_patternfly_layout_Classes = 'menu-toggle';
/**@const {string} @nodts*/
Classes.f_nav__org_patternfly_layout_Classes = 'nav';
/**@const {string} @nodts*/
Classes.f_noBorderRows__org_patternfly_layout_Classes = 'no-border-rows';
/**@const {string} @nodts*/
Classes.f_noFill__org_patternfly_layout_Classes = 'no-fill';
/**@const {string} @nodts*/
Classes.f_none__org_patternfly_layout_Classes = 'none';
/**@const {string} @nodts*/
Classes.f_noPadding__org_patternfly_layout_Classes = 'no-padding';
/**@const {string} @nodts*/
Classes.f_option__org_patternfly_layout_Classes = 'option';
/**@const {string} @nodts*/
Classes.f_optionsMenu__org_patternfly_layout_Classes = 'options-menu';
/**@const {string} @nodts*/
Classes.f_overflow__org_patternfly_layout_Classes = 'overflow';
/**@const {string} @nodts*/
Classes.f_overflowScroll__org_patternfly_layout_Classes = 'overflow-scroll';
/**@const {string} @nodts*/
Classes.f_padding__org_patternfly_layout_Classes = 'padding';
/**@const {string} @nodts*/
Classes.f_page__org_patternfly_layout_Classes = 'page';
/**@const {string} @nodts*/
Classes.f_pageInsets__org_patternfly_layout_Classes = 'page-insets';
/**@const {string} @nodts*/
Classes.f_pagination__org_patternfly_layout_Classes = 'pagination';
/**@const {string} @nodts*/
Classes.f_path__org_patternfly_layout_Classes = 'path';
/**@const {string} @nodts*/
Classes.f_plain__org_patternfly_layout_Classes = 'plain';
/**@const {string} @nodts*/
Classes.f_popover__org_patternfly_layout_Classes = 'popover';
/**@const {string} @nodts*/
Classes.f_pre__org_patternfly_layout_Classes = 'pre';
/**@const {string} @nodts*/
Classes.f_presentation__org_patternfly_layout_Classes = 'presentation';
/**@const {string} @nodts*/
Classes.f_primary__org_patternfly_layout_Classes = 'primary';
/**@const {string} @nodts*/
Classes.f_progress__org_patternfly_layout_Classes = 'progress';
/**@const {string} @nodts*/
Classes.f_progressbar__org_patternfly_layout_Classes = 'progressbar';
/**@const {string} @nodts*/
Classes.f_read__org_patternfly_layout_Classes = 'read';
/**@const {string} @nodts*/
Classes.f_readOnly__org_patternfly_layout_Classes = 'read-only';
/**@const {string} @nodts*/
Classes.f_readonly__org_patternfly_layout_Classes = 'readonly';
/**@const {string} @nodts*/
Classes.f_required__org_patternfly_layout_Classes = 'required';
/**@const {string} @nodts*/
Classes.f_right__org_patternfly_layout_Classes = 'right';
/**@const {string} @nodts*/
Classes.f_scope__org_patternfly_layout_Classes = 'scope';
/**@const {string} @nodts*/
Classes.f_screenReader__org_patternfly_layout_Classes = 'pf-v5-screen-reader';
/**@const {string} @nodts*/
Classes.f_scroll__org_patternfly_layout_Classes = 'scroll';
/**@const {string} @nodts*/
Classes.f_scrollable__org_patternfly_layout_Classes = 'scrollable';
/**@const {string} @nodts*/
Classes.f_scrollButton__org_patternfly_layout_Classes = 'scroll-button';
/**@const {string} @nodts*/
Classes.f_search__org_patternfly_layout_Classes = 'search';
/**@const {string} @nodts*/
Classes.f_secondary__org_patternfly_layout_Classes = 'secondary';
/**@const {string} @nodts*/
Classes.f_section__org_patternfly_layout_Classes = 'section';
/**@const {string} @nodts*/
Classes.f_select__org_patternfly_layout_Classes = 'select';
/**@const {string} @nodts*/
Classes.f_selected__org_patternfly_layout_Classes = 'selected';
/**@const {string} @nodts*/
Classes.f_selector__org_patternfly_layout_Classes = 'selector';
/**@const {string} @nodts*/
Classes.f_separator__org_patternfly_layout_Classes = 'separator';
/**@const {string} @nodts*/
Classes.f_shadowBottom__org_patternfly_layout_Classes = 'shadow-bottom';
/**@const {string} @nodts*/
Classes.f_shadowTop__org_patternfly_layout_Classes = 'shadow-top';
/**@const {string} @nodts*/
Classes.f_shortcuts__org_patternfly_layout_Classes = 'shortcuts';
/**@const {string} @nodts*/
Classes.f_sidebar__org_patternfly_layout_Classes = 'sidebar';
/**@const {string} @nodts*/
Classes.f_simple__org_patternfly_layout_Classes = 'simple';
/**@const {string} @nodts*/
Classes.f_skipToContent__org_patternfly_layout_Classes = 'skip-to-content';
/**@const {string} @nodts*/
Classes.f_small__org_patternfly_layout_Classes = 'small';
/**@const {string} @nodts*/
Classes.f_sort__org_patternfly_layout_Classes = 'sort';
/**@const {string} @nodts*/
Classes.f_spinner__org_patternfly_layout_Classes = 'spinner';
/**@const {string} @nodts*/
Classes.f_splitButton__org_patternfly_layout_Classes = 'split-button';
/**@const {string} @nodts*/
Classes.f_stack__org_patternfly_layout_Classes = 'stack';
/**@const {string} @nodts*/
Classes.f_standalone__org_patternfly_layout_Classes = 'standalone';
/**@const {string} @nodts*/
Classes.f_start__org_patternfly_layout_Classes = 'start';
/**@const {string} @nodts*/
Classes.f_status__org_patternfly_layout_Classes = 'status';
/**@const {string} @nodts*/
Classes.f_subnav__org_patternfly_layout_Classes = 'subnav';
/**@const {string} @nodts*/
Classes.f_success__org_patternfly_layout_Classes = 'success';
/**@const {string} @nodts*/
Classes.f_tab__org_patternfly_layout_Classes = 'tab';
/**@const {string} @nodts*/
Classes.f_tabContent__org_patternfly_layout_Classes = 'tab-content';
/**@const {string} @nodts*/
Classes.f_table__org_patternfly_layout_Classes = 'table';
/**@const {string} @nodts*/
Classes.f_tabpanel__org_patternfly_layout_Classes = 'tabpanel';
/**@const {string} @nodts*/
Classes.f_tabs__org_patternfly_layout_Classes = 'tabs';
/**@const {string} @nodts*/
Classes.f_tailBall__org_patternfly_layout_Classes = 'tail-ball';
/**@const {string} @nodts*/
Classes.f_tertiary__org_patternfly_layout_Classes = 'tertiary';
/**@const {string} @nodts*/
Classes.f_text__org_patternfly_layout_Classes = 'text';
/**@const {string} @nodts*/
Classes.f_textInput__org_patternfly_layout_Classes = 'text-input';
/**@const {string} @nodts*/
Classes.f_textInputGroup__org_patternfly_layout_Classes = 'text-input-group';
/**@const {string} @nodts*/
Classes.f_textAlignLeft__org_patternfly_layout_Classes = 'text-align-left';
/**@const {string} @nodts*/
Classes.f_textLeftAligned__org_patternfly_layout_Classes = 'textLeftAligned';
/**@const {string} @nodts*/
Classes.f_title__org_patternfly_layout_Classes = 'title';
/**@const {string} @nodts*/
Classes.f_toast__org_patternfly_layout_Classes = 'toast';
/**@const {string} @nodts*/
Classes.f_toggle__org_patternfly_layout_Classes = 'toggle';
/**@const {string} @nodts*/
Classes.f_toggleGroup__org_patternfly_layout_Classes = 'toggle-group';
/**@const {string} @nodts*/
Classes.f_toggleGroupContainer__org_patternfly_layout_Classes = 'toggle-group-container';
/**@const {string} @nodts*/
Classes.f_toolbar__org_patternfly_layout_Classes = 'toolbar';
/**@const {string} @nodts*/
Classes.f_tools__org_patternfly_layout_Classes = 'tools';
/**@const {string} @nodts*/
Classes.f_tooltip__org_patternfly_layout_Classes = 'tooltip';
/**@const {string} @nodts*/
Classes.f_top__org_patternfly_layout_Classes = 'top';
/**@const {string} @nodts*/
Classes.f_totalItems__org_patternfly_layout_Classes = 'total-items';
/**@const {string} @nodts*/
Classes.f_truncate__org_patternfly_layout_Classes = 'truncate';
/**@const {string} @nodts*/
Classes.f_type__org_patternfly_layout_Classes = 'type';
/**@const {string} @nodts*/
Classes.f_typeahead__org_patternfly_layout_Classes = 'typeahead';
/**@const {string} @nodts*/
Classes.f_unread__org_patternfly_layout_Classes = 'unread';
/**@const {string} @nodts*/
Classes.f_utilities__org_patternfly_layout_Classes = 'utilities';
/**@const {string} @nodts*/
Classes.f_valueText__org_patternfly_layout_Classes = 'value-text';
/**@const {string} @nodts*/
Classes.f_warning__org_patternfly_layout_Classes = 'warning';
/**@const {string} @nodts*/
Classes.f_widthAuto__org_patternfly_layout_Classes = 'width-auto';
/**@const {string} @nodts*/
Classes.f_wizard__org_patternfly_layout_Classes = 'wizard';
/**@const {string} @nodts*/
Classes.f_wrap__org_patternfly_layout_Classes = 'wrap';
/**@const {string} @nodts*/
Classes.f_wrapper__org_patternfly_layout_Classes = 'wrapper';
Classes.$markImplementor(/**@type {Function}*/ (Classes));
$Util.$setClassMetadataForInterface(Classes, 'org.patternfly.layout.Classes');

exports = Classes;

//# sourceMappingURL=Classes.js.map

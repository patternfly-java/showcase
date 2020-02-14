package org.patternfly.showcase;

import org.gwtproject.resources.client.ClientBundle;
import org.gwtproject.resources.client.Resource;
import org.gwtproject.resources.client.TextResource;

@Resource
public interface Resources extends ClientBundle {

    Resources INSTANCE = new org.patternfly.showcase.ResourcesImpl();

    static Resources get() {
        return INSTANCE;
    }

    @Source("alert-default.java")
    TextResource alertDefault();

    @Source("alert-info.java")
    TextResource alertInfo();

    @Source("alert-success.java")
    TextResource alertSuccess();

    @Source("alert-warning.java")
    TextResource alertWarning();

    @Source("alert-danger.java")
    TextResource alertDanger();

    @Source("alert-inline.java")
    TextResource alertInline();

    @Source("alert-inline-variations.java")
    TextResource alertInlineVariations();

    @Source("avatar.java")
    TextResource avatar();

    @Source("badge-unread.java")
    TextResource badgeUnread();

    @Source("badge-read.java")
    TextResource badgeRead();

    @Source("brand.java")
    TextResource brand();

    @Source("button-block.java")
    TextResource buttonBlock();

    @Source("button-event.java")
    TextResource buttonEvent();

    @Source("button-links.java")
    TextResource buttonLinks();

    @Source("button-states.java")
    TextResource buttonStates();

    @Source("button-types.java")
    TextResource buttonTypes();

    @Source("button-variations.java")
    TextResource buttonVariations();

    @Source("card-actions-in-head.java")
    TextResource cardActionsInHead();

    @Source("card-body-fill.java")
    TextResource cardBodyFill();

    @Source("card-compact.java")
    TextResource cardCompact();

    @Source("card-content-only.java")
    TextResource cardContentOnly();

    @Source("card-header-in-head.java")
    TextResource cardHeaderInHead();

    @Source("card-hover.java")
    TextResource cardHover();

    @Source("card-image-actions.java")
    TextResource cardImageActions();

    @Source("card-image-in-head.java")
    TextResource cardImageInHead();

    @Source("card-multiple-bodies.java")
    TextResource cardMultipleBodies();

    @Source("card-no-footer.java")
    TextResource cardNoFooter();

    @Source("card-no-header.java")
    TextResource cardNoHeader();

    @Source("card-simple.java")
    TextResource cardSimple();

    @Source("chip.java")
    TextResource chip();

    @Source("chip-group.java")
    TextResource chipGroup();

    @Source("chip-on-close.java")
    TextResource chipOnClose();

    @Source("chip-toolbar.java")
    TextResource chipToolbar();

    @Source("content-body.java")
    TextResource contentBody();

    @Source("content-data-list.java")
    TextResource contentDataList();

    @Source("content-headings.java")
    TextResource contentHeadings();

    @Source("content-unordered-list.java")
    TextResource contentUnorderedList();

    @Source("content-ordered-list.java")
    TextResource contentOrderedList();

    @Source("context-selector-event.java")
    TextResource contextSelectorEvent();

    @Source("context-selector-simple.java")
    TextResource contextSelectorSimple();

    @Source("context-selector-typed.java")
    TextResource contextSelectorTyped();

    @Source("data-list-simple.java")
    TextResource dataListSimple();

    @Source("data-list-checkbox.java")
    TextResource dataListCheckbox();

    @Source("data-list-expandable.java")
    TextResource dataListExpandable();

    @Source("data-list-modifiers.java")
    TextResource dataListModifiers();

    @Source("data-table-simple.java")
    TextResource dataTableSimple();

    @Source("data-table-sortable.java")
    TextResource dataTableSortable();

    @Source("data-table-checkbox.java")
    TextResource dataTableCheckbox();

    @Source("data-table-expandable.java")
    TextResource dataTableExpandable();

    @Source("dropdown-event.java")
    TextResource dropdownEvent();

    @Source("dropdown-groups.java")
    TextResource dropdownGroups();

    @Source("dropdown-icon.java")
    TextResource dropdownIcon();

    @Source("dropdown-kebab.java")
    TextResource dropdownKebab();

    @Source("dropdown-primary.java")
    TextResource dropdownPrimary();

    @Source("dropdown-right.java")
    TextResource dropdownRight();

    @Source("dropdown-simple.java")
    TextResource dropdownSimple();

    @Source("dropdown-split.java")
    TextResource dropdownSplit();

    @Source("dropdown-typed.java")
    TextResource dropdownTyped();

    @Source("dropdown-up.java")
    TextResource dropdownUp();

    @Source("empty-state.java")
    TextResource emptyState();

    @Source("empty-state-small.java")
    TextResource emptyStateSmall();

    @Source("empty-state-large.java")
    TextResource emptyStateLarge();

    @Source("empty-state-primary.java")
    TextResource emptyStatePrimary();

    @Source("empty-state-spinner.java")
    TextResource emptyStateSpinner();

    @Source("empty-state-no-match.java")
    TextResource emptyStateNoMatch();

    @Source("expandable.java")
    TextResource expandable();

    @Source("label.java")
    TextResource label();

    @Source("options-menu-single.java")
    TextResource optionsMenuSingle();

    @Source("options-menu-multiple.java")
    TextResource optionsMenuMultiple();

    @Source("options-menu-plain.java")
    TextResource optionsMenuPlain();

    @Source("options-menu-up.java")
    TextResource optionsMenuUp();

    @Source("options-menu-right.java")
    TextResource optionsMenuRight();

    @Source("servers.json")
    TextResource servers();

    @Source("title.java")
    TextResource title();
}

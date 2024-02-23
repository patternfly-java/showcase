/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.showcase.layout;

import org.patternfly.layout.flex.Align;
import org.patternfly.layout.flex.AlignSelf;
import org.patternfly.layout.flex.Direction;
import org.patternfly.layout.flex.Display;
import org.patternfly.layout.flex.Flex;
import org.patternfly.layout.flex.FlexShorthand;
import org.patternfly.layout.flex.Gap;
import org.patternfly.layout.flex.JustifyContent;
import org.patternfly.layout.flex.SpaceItems;
import org.patternfly.layout.flex.Spacer;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.FlexItem.flexItem;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.Breakpoints.breakpoints;

public class FlexLayout extends SnippetPage {

    public FlexLayout() {
        super(Flex.class, "Flex",
                "https://www.patternfly.org/layouts/flex/design-guidelines",
                p().textContent(
                        "The flex layout supports a completely custom layout by utilizing the PatternFly spacer and breakpoint systems. Flex layouts are infinitely nestable and allow you to adjust spacing, direction, alignment, justification, wrapping, and width to fit your needs.")
                        .element());

        // ------------------------------------------------------ basics

        addHeader("flex-basics", "Flex basics");
        addSnippet(new Snippet("flex-basic", "Basic",
                code.get("flex-basic"), () ->
                // @code-start:flex-basic
                div().css("ws-core-l-flex")
                        .add(flex()
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-basic
        ));

        addSnippet(new Snippet("flex-nesting", "Nesting",
                code.get("flex-nesting"), () ->
                // @code-start:flex-nesting
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex()
                                        .add(flexItem().textContent("Flex item"))
                                        .add(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .add(flexItem().textContent("Flex item"))
                                        .add(flexItem().textContent("Flex item"))
                                        .add(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-nesting
        ));

        addSnippet(new Snippet("flex-nested-with-items", "Nested with items",
                code.get("flex-nested-with-items"), () ->
                // @code-start:flex-nested-with-items
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex()
                                        .add(flexItem().textContent("Flex item"))
                                        .add(flexItem().textContent("Flex item")))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .add(flex()
                                        .add(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-nested-with-items
        ));

        addSnippet(new Snippet("flex-individually-spaced", "Individually spaced",
                code.get("flex-individually-spaced"), () ->
                // @code-start:flex-individually-spaced
                div().css("ws-core-l-flex")
                        .add(flex()
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer.none)).textContent("Item - none"))
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer.xs)).textContent("Item - xs"))
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer.md)).textContent("Item - md"))
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer.lg)).textContent("Item - lg"))
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer.xl)).textContent("Item - xl"))
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer._2xl)).textContent("Item - 2xl"))
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer._3xl)).textContent("Item - 3xl")))
                        .element()
        // @code-end:flex-individually-spaced
        ));

        addSnippet(new Snippet("flex-spacing-xl", "Spacing xl",
                code.get("flex-spacing-xl"), () ->
                // @code-start:flex-spacing-xl
                div().css("ws-core-l-flex")
                        .add(flex().spaceItems(breakpoints(default_, SpaceItems.xl))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-spacing-xl
        ));

        addSnippet(new Snippet("flex-spacing-none", "Spacing none",
                code.get("flex-spacing-none"), () ->
                // @code-start:flex-spacing-none
                div().css("ws-core-l-flex")
                        .add(flex().spaceItems(breakpoints(default_, SpaceItems.none))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-spacing-none
        ));

        addSnippet(new Snippet("flex-row-gap", "Row gap",
                code.get("flex-row-gap"), () ->
                // @code-start:flex-row-gap
                div().css("ws-core-l-flex")
                        .add(flex().rowGap(breakpoints(default_, Gap._2xl))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-row-gap
        ));

        addSnippet(new Snippet("flex-column-gap", "Column gap",
                code.get("flex-column-gap"), () ->
                // @code-start:flex-column-gap
                div().css("ws-core-l-flex")
                        .add(flex().columnGap(breakpoints(default_, Gap._2xl))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-column-gap
        ));

        addSnippet(new Snippet("flex-gap", "Gap",
                code.get("flex-gap"), () ->
                // @code-start:flex-gap
                div().css("ws-core-l-flex")
                        .add(flex().gap(breakpoints(default_, Gap._2xl))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-gap
        ));

        addSnippet(new Snippet("flex-default-layout", "Default layout",
                code.get("flex-default-layout"), () ->
                // @code-start:flex-default-layout
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border")
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-default-layout
        ));

        addSnippet(new Snippet("flex-inline", "Inline",
                code.get("flex-inline"), () ->
                // @code-start:flex-inline
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border").display(breakpoints(default_, Display.inlineFlex))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-inline
        ));

        addSnippet(new Snippet("flex-grow", "Using canGrow",
                code.get("flex-grow"), () ->
                // @code-start:flex-grow
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().grow(default_)
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-grow
        ));

        addSnippet(new Snippet("flex-adjust-width", "Adjusting width",
                code.get("flex-adjust-width"), () ->
                // @code-start:flex-adjust-width
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().flex(breakpoints(default_, FlexShorthand._1))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().flex(breakpoints(default_, FlexShorthand._1))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().flex(breakpoints(default_, FlexShorthand._1))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-adjust-width
        ));

        addSnippet(new Snippet("flex-column-widths", "Specifying column widths",
                code.get("flex-column-widths"), () ->
                // @code-start:flex-column-widths
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().flex(breakpoints(default_, FlexShorthand._1))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().flex(breakpoints(default_, FlexShorthand._2))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().flex(breakpoints(default_, FlexShorthand._3))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-column-widths
        ));

        // ------------------------------------------------------ column

        addHeader("flex-column-layout-modifiers", "Column layout modifiers");
        addSnippet(new Snippet("flex-column-layout", "Column layout",
                code.get("flex-column-layout"), () ->
                // @code-start:flex-column-layout
                div().css("ws-core-l-flex")
                        .add(flex().direction(breakpoints(default_, Direction.column))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-column-layout
        ));

        addSnippet(new Snippet("flex-stacking-elements", "Stacking elements",
                code.get("flex-stacking-elements"), () ->
                // @code-start:flex-stacking-elements
                div().css("ws-core-l-flex")
                        .add(flex().direction(breakpoints(default_, Direction.column))
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-stacking-elements
        ));

        addSnippet(new Snippet("flex-nest-columns", "Nesting elements in columns",
                code.get("flex-nest-columns"), () ->
                // @code-start:flex-nest-columns
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-nest-columns
        ));

        // ------------------------------------------------------ responsive

        addHeader("flex-responsive-layout-modifiers", "Responsive layout modifiers");
        addSnippet(new Snippet("flex-column-row", "Switching between direction column and row",
                code.get("flex-column-row"), () ->
                // @code-start:flex-column-row
                div().css("ws-core-l-flex")
                        .add(flex().direction(breakpoints(default_, Direction.column, lg, Direction.row))
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-column-row
        ));

        addSnippet(new Snippet("flex-width-of-text", "Controlling width of text",
                code.get("flex-width-of-text"), () ->
                // @code-start:flex-width-of-text
                div().css("ws-core-l-flex")
                        .add(flex().direction(breakpoints(default_, Direction.column, lg, Direction.row))
                                .add(flex().flex(breakpoints(default_, FlexShorthand._1))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent(LoremIpsum.paragraphs(5))))
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-width-of-text
        ));

        // ------------------------------------------------------ alignment

        addHeader("flex-alignment", "Flex alignment");
        addSnippet(new Snippet("flex-align-right", "Aligning right",
                code.get("flex-align-right"), () ->
                // @code-start:flex-align-right
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border")
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().align(breakpoints(default_, Align.right)).textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-align-right
        ));

        addSnippet(new Snippet("flex-align-right-single", "Align right on single item",
                code.get("flex-align-right-single"), () ->
                // @code-start:flex-align-right-single
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border")
                                .addItem(flexItem().align(breakpoints(default_, Align.right)).textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-align-right-single
        ));

        addSnippet(new Snippet("flex-align-right-multiple", "Align right on multiple groups",
                code.get("flex-align-right-multiple"), () ->
                // @code-start:flex-align-right-multiple
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().align(breakpoints(default_, Align.right))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex().align(breakpoints(default_, Align.right))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-align-right-multiple
        ));

        addSnippet(new Snippet("flex-align-adjacent-content", "Align adjacent content",
                code.get("flex-align-adjacent-content"), () ->
                // @code-start:flex-align-adjacent-content
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().flex(breakpoints(default_, FlexShorthand._1))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-align-adjacent-content
        ));

        addSnippet(new Snippet("flex-align-self-end", "Align self flex end",
                code.get("flex-align-self-end"), () ->
                // @code-start:flex-align-self-end
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .direction(breakpoints(default_, Direction.column))
                                        .alignSelf(breakpoints(default_, AlignSelf.flexEnd))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-align-self-end
        ));

        addSnippet(new Snippet("flex-align-self-center", "Align self center",
                code.get("flex-align-self-center"), () ->
                // @code-start:flex-align-self-center
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .direction(breakpoints(default_, Direction.column))
                                        .alignSelf(breakpoints(default_, AlignSelf.center))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-align-self-center
        ));

        addSnippet(new Snippet("flex-align-self-baseline", "Align self baseline",
                code.get("flex-align-self-baseline"), () ->
                // @code-start:flex-align-self-baseline
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .direction(breakpoints(default_, Direction.column))
                                        .alignSelf(breakpoints(default_, AlignSelf.baseline))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-align-self-baseline
        ));

        addSnippet(new Snippet("flex-align-self-stretch", "Align self stretch",
                code.get("flex-align-self-stretch"), () ->
                // @code-start:flex-align-self-stretch
                div().css("ws-core-l-flex")
                        .add(flex()
                                .add(flex().direction(breakpoints(default_, Direction.column))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item")))
                                .add(flex()
                                        .direction(breakpoints(default_, Direction.column))
                                        .alignSelf(breakpoints(default_, AlignSelf.stretch))
                                        .addItem(flexItem().textContent("Flex item"))
                                        .addItem(flexItem().textContent("Flex item"))))
                        .element()
        // @code-end:flex-align-self-stretch
        ));

        // ------------------------------------------------------ justification

        addHeader("flex-justification", "Flex justification");
        addSnippet(new Snippet("flex-just-end", "Justify content flex end",
                code.get("flex-just-end"), () ->
                // @code-start:flex-just-end
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border").justifyContent(breakpoints(default_, JustifyContent.flexEnd))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-just-end
        ));

        addSnippet(new Snippet("flex-just-space-between", "Justify content space between",
                code.get("flex-just-space-between"), () ->
                // @code-start:flex-just-space-between
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border").justifyContent(breakpoints(default_, JustifyContent.spaceBetween))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-just-space-between
        ));

        addSnippet(new Snippet("flex-just-start", "Justify content flex start",
                code.get("flex-just-start"), () ->
                // @code-start:flex-just-start
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border").justifyContent(breakpoints(default_, JustifyContent.flexStart))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item"))
                                .addItem(flexItem().textContent("Flex item")))
                        .element()
        // @code-end:flex-just-start
        ));

        // ------------------------------------------------------ order

        addHeader("flex-order", "Flex item order");
        addSnippet(new Snippet("flex-order-first-last", "First last ordering",
                code.get("flex-order-first-last"), () ->
                // @code-start:flex-order-first-last
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border")
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer.none)).order(breakpoints(default_, "2"))
                                        .textContent("Item A"))
                                .addItem(flexItem()
                                        .textContent("Item B"))
                                .addItem(flexItem().spacer(breakpoints(default_, Spacer.md)).order(breakpoints(default_, "-1"))
                                        .textContent("Item C")))
                        .element()
        // @code-end:flex-order-first-last
        ));

        addSnippet(new Snippet("flex-order-first-last-responsive", "Responsive first last ordering",
                code.get("flex-order-first-last-responsive"), () ->
                // @code-start:flex-order-first-last-responsive
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border")
                                .addItem(flexItem()
                                        .spacer(breakpoints(lg, Spacer.none))
                                        .order(breakpoints(lg, "2"))
                                        .textContent("Item A"))
                                .addItem(flexItem()
                                        .spacer(breakpoints(md, Spacer.none, lg, Spacer.md))
                                        .order(breakpoints(default_, "-1", md, "1"))
                                        .textContent("Item B"))
                                .addItem(flexItem()
                                        .spacer(breakpoints(default_, Spacer.md))
                                        .order(breakpoints(md, "-1"))
                                        .textContent("Item C")))
                        .element()
        // @code-end:flex-order-first-last-responsive
        ));

        addSnippet(new Snippet("flex-ordering", "Ordering",
                code.get("flex-ordering"), () ->
                // @code-start:flex-ordering
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border")
                                .add(flex().css("example-border")
                                        .order(breakpoints(lg, "1"))
                                        .spacer(breakpoints(default_, Spacer.none))
                                        .addItem(flexItem()
                                                .order(breakpoints(md, "2"))
                                                .textContent("Set 1, Item A"))
                                        .addItem(flexItem()
                                                .order(breakpoints(md, "-1"))
                                                .textContent("Set 1, Item B"))
                                        .addItem(flexItem()
                                                .order(breakpoints(xl, "1"))
                                                .textContent("Set 1, Item C"))
                                        .addItem(flexItem()
                                                .order(breakpoints(md, "2"))
                                                .spacer(breakpoints(xl, Spacer.none))
                                                .textContent("Set 1, Item D")))
                                .add(flex().css("example-border")
                                        .spacer(breakpoints(lg, Spacer.md))
                                        .addItem(flexItem()
                                                .order(breakpoints(default_, "3"))
                                                .spacer(breakpoints(default_, Spacer.none))
                                                .textContent("Set 2, Item A"))
                                        .addItem(flexItem()
                                                .order(breakpoints(default_, "1"))
                                                .textContent("Set 2, Item B"))
                                        .addItem(flexItem()
                                                .textContent("Set 2, Item C"))
                                        .addItem(flexItem()
                                                .order(breakpoints(md, "2"))
                                                .spacer(breakpoints(default_, Spacer.md))
                                                .textContent("Set 2, Item D"))))
                        .element()
        // @code-end:flex-ordering
        ));

        addSnippet(new Snippet("flex-ordering-responsive", "Responsive ordering",
                code.get("flex-ordering-responsive"), () ->
                // @code-start:flex-ordering-responsive
                div().css("ws-core-l-flex")
                        .add(flex().css("example-border")
                                .add(flex().css("example-border")
                                        .order(breakpoints(default_, "1"))
                                        .spacer(breakpoints(default_, Spacer.none))
                                        .addItem(flexItem()
                                                .order(breakpoints(default_, "3"))
                                                .spacer(breakpoints(default_, Spacer.none))
                                                .textContent("Set 1, Item A"))
                                        .addItem(flexItem()
                                                .order(breakpoints(default_, "1"))
                                                .textContent("Set 1, Item B"))
                                        .addItem(flexItem()
                                                .textContent("Set 1, Item C"))
                                        .addItem(flexItem()
                                                .spacer(breakpoints(default_, Spacer.md))
                                                .textContent("Set 1, Item D")))
                                .add(flex().css("example-border")
                                        .spacer(breakpoints(default_, Spacer.md))
                                        .addItem(flexItem()
                                                .order(breakpoints(default_, "3"))
                                                .spacer(breakpoints(default_, Spacer.none))
                                                .textContent("Set 2, Item A"))
                                        .addItem(flexItem()
                                                .order(breakpoints(lg, "1"))
                                                .textContent("Set 2, Item B"))
                                        .addItem(flexItem()
                                                .textContent("Set 2, Item C"))
                                        .addItem(flexItem()
                                                .order(breakpoints(default_, "2"))
                                                .spacer(breakpoints(default_, Spacer.md))
                                                .textContent("Set 2, Item D"))))
                        .element()
        // @code-end:flex-ordering-responsive
        ));

        // ------------------------------------------------------ components

        addHeader("flex-components", "Components");
        addSnippet(new Snippet("flex-alternative-components", "Alternative components",
                code.get("flex-alternative-components"), () ->
                // @code-start:flex-alternative-components
                div().css("ws-core-l-flex")
                        .add(flex(ul())
                                .addItem(flexItem(li()).textContent("Flex item"))
                                .addItem(flexItem(li()).textContent("Flex item"))
                                .addItem(flexItem(li()).textContent("Flex item"))
                                .addItem(flexItem(li()).textContent("Flex item"))
                                .addItem(flexItem(li()).textContent("Flex item")))
                        .element()
        // @code-end:flex-alternative-components
        ));

    }
}

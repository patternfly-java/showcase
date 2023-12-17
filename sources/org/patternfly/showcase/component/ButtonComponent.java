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
package org.patternfly.showcase.component;

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.IconPosition.end;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.PredefinedIcon.arrowRight;
import static org.patternfly.style.PredefinedIcon.copy;
import static org.patternfly.style.PredefinedIcon.externalLinkSquareAlt;
import static org.patternfly.style.PredefinedIcon.plusCircle;
import static org.patternfly.style.PredefinedIcon.times;
import static org.patternfly.style.PredefinedIcon.upload;

public class ButtonComponent extends SnippetPage {

    public ButtonComponent() {
        super("Button",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/button/Button.html",
                "https://www.patternfly.org/components/button/design-guidelines",
                p().textContent("Buttons communicate and trigger actions a user can take in an application or website.")
                        .element());

        addSnippet(new Snippet("button-variant-examples", "Variant examples",
                code.get("button-variant-examples"), () ->
                // @code-start:button-variant-examples
                div()
                        .add(div()
                                .add(button("Primary").primary())
                                .add(" ")
                                .add(button("Secondary").secondary())
                                .add(" ")
                                .add(button("Danger secondary").secondary().danger())
                                .add(" ")
                                .add(button("Tertiary").tertiary())
                                .add(" ")
                                .add(button("Danger").danger())
                                .add(" ")
                                .add(button("Warning").warning()))
                        .add(div().css(util("mt-lg"))
                                .add(button().iconAndText(plusCircle, "Link").link())
                                .add(" ")
                                .add(button().iconAndText(externalLinkSquareAlt, "Link", end).link())
                                .add(" ")
                                .add(button("Inline link").inline().link())
                                .add(" ")
                                .add(button("Danger link").link().danger()))
                        .add(div().css(util("mt-lg"))
                                .add(button().icon(times).plain()))
                        .add(div().css(util("mt-lg"))
                                .add(button("Control").control())
                                .add(" ")
                                .add(button().icon(copy).control()))
                        .element()
        // @code-end:button-variant-examples
        ));

        addSnippet(new Snippet("button-disabled", "Disabled buttons",
                code.get("button-disabled"), () ->
                // @code-start:button-disabled
                div()
                        .add(div()
                                .add(button("Primary disabled").primary().disabled())
                                .add(" ")
                                .add(button("Secondary disabled").secondary().disabled())
                                .add(" ")
                                .add(button("Danger secondary disabled").secondary().danger().disabled())
                                .add(" ")
                                .add(button("Tertiary disabled").tertiary().disabled())
                                .add(" ")
                                .add(button("Danger disabled").danger().disabled())
                                .add(" ")
                                .add(button("Warning disabled").warning().disabled()))
                        .add(div().css(util("mt-lg"))
                                .add(button().iconAndText(plusCircle, "Link disabled").link().disabled())
                                .add(" ")
                                .add(button("Inline link disabled").inline().link().disabled())
                                .add(" ")
                                .add(button("Danger link disabled").link().danger().disabled()))
                        .add(div().css(util("mt-lg"))
                                .add(button().icon(times).plain().disabled()))
                        .add(div().css(util("mt-lg"))
                                .add(button("Control disabled").control().disabled())
                                .add(" ")
                                .add(button().icon(copy).control().disabled()))
                        .element()
        // @code-end:button-disabled
        ));

        addSnippet(new Snippet("button-small", "Small buttons",
                code.get("button-small"),
                // @code-start:button-small
                () -> div()
                        .add(button("Primary").primary().small())
                        .add(" ")
                        .add(button("Secondary").secondary().small())
                        .add(" ")
                        .add(button("Danger secondary").secondary().danger().small())
                        .add(" ")
                        .add(button("Tertiary").tertiary().small())
                        .add(" ")
                        .add(button("Danger").danger().small())
                        .add(" ")
                        .add(button("Warning").warning().small())
                        .element()
        // @code-end:button-small
        ));

        addSnippet(new Snippet("button-cta", "Call to action (CTA) buttons",
                code.get("button-cta"), () ->
                // @code-start:button-cta
                div()
                        .add(button("Call to action").primary().callToAction())
                        .add(" ")
                        .add(button("Call to action").secondary().callToAction())
                        .add(" ")
                        .add(button("Call to action").tertiary().callToAction())
                        .add(" ")
                        .add(button().iconAndText(arrowRight, "Call to action", end).link().callToAction())
                        .element()
        // @code-end:button-cta
        ));

        addSnippet(new Snippet("button-block-level", "Block level buttons",
                code.get("button-block-level"), () ->
                // @code-start:button-block-level
                div()
                        .add(button("Block level button").primary().block())
                        .element()
        // @code-end:button-block-level
        ));

        addSnippet(new Snippet("button-progress", "Progress indicators",
                code.get("button-progress"), () ->
                // @code-start:button-progress
                div()
                        .add(div()
                                .add(button("Click to stop loading").primary().progress(true)
                                        .onClick((event, button) -> {
                                            button.toggleProgress();
                                            if (button.inProgress()) {
                                                button.text("Click to stop loading");
                                            } else {
                                                button.text("Click to start loading");
                                            }
                                        }))
                                .add(" ")
                                .add(button("Click to stop loading").secondary().progress(true)
                                        .onClick((event, button) -> {
                                            button.toggleProgress();
                                            if (button.inProgress()) {
                                                button.text("Click to stop loading");
                                            } else {
                                                button.text("Click to start loading");
                                            }
                                        })))
                        .add(div().css(util("mt-lg"))
                                .add(button().icon(upload).plain()
                                        .onClick((event, button) -> button.toggleProgress())))
                        .add(div().css(util("mt-lg"))
                                .add(button("Pause loading logs").link().inline().progress(true)
                                        .onClick((event, button) -> {
                                            button.toggleProgress();
                                            if (button.inProgress()) {
                                                button.text("Pause loading logs");
                                            } else {
                                                button.text("Resume loading logs");
                                            }
                                        })))
                        .element()
        // @code-end:button-progress
        ));

        addSnippet(new Snippet("button-block-links", "Links as buttons",
                code.get("button-block-links"), () ->
                // @code-start:button-block-links
                div()
                        .add(button("Link to docs", "https://www.patternfly.org/", "_blank").primary())
                        .add(" ")
                        .add(button("Secondary link to docs", "https://www.patternfly.org/", "_blank").secondary())
                        .add(" ")
                        .add(button("Tertiary link to docs", "https://www.patternfly.org/", "_blank").tertiary()
                                .disabled())
                        .add(" ")
                        .add(button("Jump to lifecycle in developer contributions",
                                "https://www.patternfly.org/get-started/contribute/developer-contributions#lifecycle").link())
                        .element()
        // @code-end:button-block-links
        ));

        addSnippet(new Snippet("button-count", "Button with count",
                code.get("button-count"), () ->
                // @code-start:button-count
                div()
                        .add(div()
                                .add(p().textContent("Unread"))
                                .add(button("View issues").primary().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").secondary().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").tertiary().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").control().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").link().addBadge(badge(7).unread())))
                        .add(div().css(util("mt-sm"))
                                .add(p().textContent("Unread disabled"))
                                .add(button("View issues").primary().disabled().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").secondary().disabled().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").tertiary().disabled().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").control().disabled().addBadge(badge(7).unread()))
                                .add(" ")
                                .add(button("View issues").link().disabled().addBadge(badge(7).unread())))
                        .add(div().css(util("mt-sm"))
                                .add(p().textContent("Read"))
                                .add(button("View issues").primary().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").secondary().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").tertiary().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").control().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").link().addBadge(badge(10).read())))
                        .add(div().css(util("mt-sm"))
                                .add(p().textContent("Read disabled"))
                                .add(button("View issues").primary().disabled().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").secondary().disabled().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").tertiary().disabled().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").control().disabled().addBadge(badge(10).read()))
                                .add(" ")
                                .add(button("View issues").link().disabled().addBadge(badge(10).read())))
                        .element()
        // @code-end:button-count
        ));
    }
}

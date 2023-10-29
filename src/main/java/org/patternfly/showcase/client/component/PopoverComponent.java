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
package org.patternfly.showcase.client.component;

import org.jboss.elemento.By;
import org.patternfly.component.popover.Popover;

import static org.jboss.elemento.Elements.code;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.component.popover.PopoverBody.popoverBody;
import static org.patternfly.showcase.client.Code.code;
import static org.patternfly.thirdparty.popper.TriggerAction.mouseenter;

public class PopoverComponent extends ComponentPage {

    public PopoverComponent() {
        super("Popover",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/popover/Popover.html",
                "https://www.patternfly.org/components/popover/design-guidelines",
                p().textContent(
                        "A popover is in-app messaging that provides more information on specific product areas. Popovers display content in a new window that overlays the current page. Unlike modals, popovers don't block the current page.")
                        .element());

        addSnippet(new Snippet("popover-basic", "Basic",
                code.get("popover-basic"), () ->
                // @code-start:popover-basic
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover-basic-button"))
                        .add(popover(By.id("popover-basic-button"))
                                .ariaLabel("Basic popover")
                                .addHeader("Popover header")
                                .addBody("Popovers are triggered by click rather than hover.")
                                .addFooter("Popover footer"))
                        .element()
        // @code-end:popover-basic
        ));

        addSnippet(new Snippet("popover-hoverable", "Hoverable",
                code.get("popover-hoverable"), () -> {
                    // @code-start:popover-hoverable
                    popover(By.id("popover-hoverable-button"))
                            .ariaLabel("Hoverable popover")
                            .trigger(mouseenter)
                            .addHeader("Popover header")
                            .addBody("This popover opens on hover.")
                            .addFooter("Popover footer")
                            .appendToBody();

                    return div().style("margin", "50px")
                            .add(button("Hover to trigger popover").primary()
                                    .id("popover-hoverable-button"))
                            .element();
                    // @code-end:popover-hoverable
                }));

        addSnippet(new Snippet("popover-close", "Close popover",
                code.get("popover-close"), () -> {
                    // @code-start:popover-close
                    Popover popover = popover(By.id("popover-close-button"));
                    popover.ariaLabel("Popover with button in the body that can close it")
                            .addHeader("Popover header")
                            .addBody(popoverBody()
                                    .add(div()
                                            .add(div()
                                                    .add("A controlled popover can be closed by calling its ")
                                                    .add(code().textContent("close()"))
                                                    .add(" method after some user interaction."))
                                            .add(div()
                                                    .add(button("Close popover").inline().link()
                                                            .onClick((e, b) -> popover.close())))))
                            .addFooter("Popover footer")
                            .appendToBody();

                    return div().style("margin", "50px")
                            .add(button("Toggle popover").primary()
                                    .id("popover-close-button"))
                            .element();
                    // @code-end:popover-close
                }));

        addSnippet(new Snippet("popover-no-padding", "Without header/footer/close and no padding",
                code.get("popover-no-padding"), () -> {
                    // @code-start:popover-no-padding
                    popover(By.id("popover-no-padding-button"))
                            .noClose()
                            .noPadding()
                            .ariaLabel("Popover with no header, footer, close button, and padding")
                            .addBody(
                                    "This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container.")
                            .appendToBody();

                    return div().style("margin", "50px")
                            .add(button("Toggle popover").primary()
                                    .id("popover-no-padding-button"))
                            .element();
                    // @code-end:popover-no-padding
                }));
    }
}

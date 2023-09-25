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
package org.patternfly.showcase.client.components;

import org.patternfly.components.Button;
import org.patternfly.components.Button.Type;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Button.button;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.layout.Icons.fas;

public class ButtonComponent extends ComponentPage {

    public ButtonComponent() {
        super("Button",
                p().textContent("Buttons communicate and trigger actions a user can take in an application or website.")
                        .element());

        addSnippet(new Snippet("button-variations", "Button variations", "Resources.get().buttonVariations().getText()",
                () -> div()
                        .add(div().css("sc-documentation__code-block")
                                .add(button("Primary").primary())
                                .add(" ")
                                .add(button("Secondary").secondary())
                                .add(" ")
                                .add(button("Tertiary").tertiary())
                                .add(" ")
                                .add(button("Danger").danger()))
                        .add(div().css("sc-documentation__code-block")
                                .add(Button.icon(fas("address-card"), "Primary icon").primary())
                                .add(" ")
                                .add(Button.icon(fas("address-card"), "Secondary icon").secondary())
                                .add(" ")
                                .add(Button.icon(fas("address-card"), "Tertiary icon").tertiary())
                                .add(" ")
                                .add(Button.icon(fas("address-card"), "Danger icon").danger()))
                        .add(div().css("sc-documentation__code-block")
                                .add(Button.link("Link"))
                                .add(" ")
                                .add(Button.link(icon(fas("calendar-plus")), "Link icon"))
                                .add(" ")
                                .add(Button.icon(icon(fas("chart-pie")), "Chart"))
                                .add(" ")
                                .add(Button.inline("Inline Link")))
                        .add(div().css("sc-documentation__code-block")
                                .add(Button.control("Control"))
                                .add(" ")
                                .add(Button.control(icon(fas("clock")), "Control icon"))
                                .add(" ")
                                .add(Button.control(icon(fas("code")))))
                        .element()));

        addSnippet(new Snippet("button-states", "Button states", "Resources.get().buttonStates().getText()", () -> div()
                .add(div().css("sc-documentation__code-block")
                        .add(button("Primary").primary())
                        .add(" ")
                        .add(button("Primary focus").primary().focus())
                        .add(" ")
                        .add(button("Primary active").primary().active())
                        .add(" ")
                        .add(button("Primary disabled").primary().disable()))
                .add(div().css("sc-documentation__code-block")
                        .add(button("Secondary").secondary())
                        .add(" ")
                        .add(button("Secondary focus").secondary().focus())
                        .add(" ")
                        .add(button("Secondary active").secondary().active())
                        .add(" ")
                        .add(button("Secondary disabled").secondary().disable()))
                .add(div().css("sc-documentation__code-block")
                        .add(button("Tertiary").tertiary())
                        .add(" ")
                        .add(button("Tertiary focus").tertiary().focus())
                        .add(" ")
                        .add(button("Tertiary active").tertiary().active())
                        .add(" ")
                        .add(button("Tertiary disabled").tertiary().disable()))
                .add(div().css("sc-documentation__code-block")
                        .add(button("Danger").danger())
                        .add(" ")
                        .add(button("Danger focus").danger().focus())
                        .add(" ")
                        .add(button("Danger active").danger().active())
                        .add(" ")
                        .add(button("Danger disabled").danger().disable()))
                .add(div().css("sc-documentation__code-block")
                        .add(Button.link("Link"))
                        .add(" ")
                        .add(Button.link("Link focus").focus())
                        .add(" ")
                        .add(Button.link("Link active").active())
                        .add(" ")
                        .add(Button.link("Link disabled").disable()))
                .add(div().css("sc-documentation__code-block")
                        .add(Button.link(icon(fas("calendar-plus")), "Link icon"))
                        .add(" ")
                        .add(Button.link(icon(fas("calendar-plus")), "Link icon focus").focus())
                        .add(" ")
                        .add(Button.link(icon(fas("calendar-plus")), "Link icon active").active())
                        .add(" ")
                        .add(Button.link(icon(fas("calendar-plus")), "Link icon disabled").disable()))
                .add(div().css("sc-documentation__code-block")
                        .add(Button.icon(icon(fas("chart-pie")), "Chart"))
                        .add(" ")
                        .add(Button.icon(icon(fas("chart-pie")), "Chart focus").focus())
                        .add(" ")
                        .add(Button.icon(icon(fas("chart-pie")), "Chart active").active())
                        .add(" ")
                        .add(Button.icon(icon(fas("chart-pie")), "Chart disabled").disable()))
                .add(div().css("sc-documentation__code-block")
                        .add(Button.control("Control"))
                        .add(" ")
                        .add(Button.control("Control focus").focus())
                        .add(" ")
                        .add(Button.control("Control active").active())
                        .add(" ")
                        .add(Button.control("Control expanded").expanded())
                        .add(" ")
                        .add(Button.control("Control disabled").disable()))
                .element()));

        addSnippet(new Snippet("button-links", "Links as buttons", "Resources.get().buttonLinks().getText()", () -> div()
                .add(Button.link("Primary link to W3.org", "https://www.w3.org/").primary())
                .add(" ")
                .add(Button.link("Secondary link to W3.org", "https://www.w3.org/").secondary())
                .add(" ")
                .add(Button.link(icon(fas("external-link-alt")), "Tertiary link to W3.org",
                        "https://www.w3.org/", "_blank").tertiary())
                .element()));

        addSnippet(new Snippet("button-block",
                "Button (block level)", "Resources.get().buttonBlock().getText()", () -> div()
                        .add(button("Block level button").block()).element()));

        addSnippet(new Snippet("button-types", "Button types", "Resources.get().buttonTypes().getText()", () -> div()
                .add(button("Submit").type(Type.SUBMIT))
                .add(" ")
                .add(button("Reset").type(Type.RESET))
                .add(" ")
                .add(button("Default").type(Type.DEFAULT)).element()));

        addSnippet(new Snippet("button-event", "Button event", "Resources.get().buttonEvent().getText()", () -> div()
                .add(button("Click me").primary().onClick(() -> console.log("Clicked"))).element()));
    }
}

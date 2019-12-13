package org.patternfly.showcase.client.documentation.components;

import org.patternfly.components.Button;
import org.patternfly.components.Button.Type;
import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Arrays.asList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;
import static org.patternfly.components.Button.button;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

public class ButtonComponent extends BaseComponent {

    public ButtonComponent() {
        super("Button",
                p().textContent("Buttons communicate and trigger actions a user can take in an application or website.")
                        .element(),
                asList(
                        new Snippet("Button variations", Code.get().buttonVariations().getText(),
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
                                                .add(button(icon(fas("address-card")), "Primary icon")
                                                        .primary())
                                                .add(" ")
                                                .add(button(icon(fas("address-card")), "Secondary icon")
                                                        .secondary())
                                                .add(" ")
                                                .add(button(icon(fas("address-card")), "Tertiary icon")
                                                        .tertiary())
                                                .add(" ")
                                                .add(button(icon(fas("address-card")), "Danger icon")
                                                        .danger()))
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
                                                .add(Button.control(icon(fas("code"))))).element()),
                        new Snippet("Button states", Code.get().buttonStates().getText(),
                                () -> div()
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
                                                .add(Button.link(icon(fas("calendar-plus")), "Link icon focus")
                                                        .focus())
                                                .add(" ")
                                                .add(Button.link(icon(fas("calendar-plus")), "Link icon active")
                                                        .active())
                                                .add(" ")
                                                .add(Button.link(icon(fas("calendar-plus")), "Link icon disabled")
                                                        .disable()))
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
                                                .add(Button.control("Control disabled").disable())).element()),
                        new Snippet("Button states", Code.get().buttonStates().getText(),
                                () -> div()
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
                                                .add(Button.link(icon(fas("calendar-plus")), "Link icon focus")
                                                        .focus())
                                                .add(" ")
                                                .add(Button.link(icon(fas("calendar-plus")), "Link icon active")
                                                        .active())
                                                .add(" ")
                                                .add(Button.link(icon(fas("calendar-plus")), "Link icon disabled")
                                                        .disable()))
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
                                                .add(Button.control("Control disabled").disable())).element()),
                        new Snippet("Links as buttons", Code.get().buttonLinks().getText(),
                                () -> div()
                                        .add(Button.link("Primary link to W3.org", "https://www.w3.org/").primary())
                                        .add(" ")
                                        .add(Button.link("Secondary link to W3.org", "https://www.w3.org/").secondary())
                                        .add(" ")
                                        .add(Button.link(icon(fas("external-link-alt")), "Tertiary link to W3.org",
                                                "https://www.w3.org/", "_blank")
                                                .tertiary()).element()),
                        new Snippet("Button (block level)", Code.get().buttonBlock().getText(),
                                () -> div()
                                        .add(button("Block level button").block()).element()),
                        new Snippet("Button types", Code.get().buttonTypes().getText(),
                                () -> div()
                                        .add(button("Submit").type(Type.SUBMIT))
                                        .add(" ")
                                        .add(button("Reset").type(Type.RESET))
                                        .add(" ")
                                        .add(button("Default").type(Type.DEFAULT)).element()),
                        new Snippet("Button event", Code.get().buttonEvent().getText(),
                                () -> div()
                                        .add(button("Click me").primary()
                                                .onClick(() -> toast().add(info("Hello")))).element())));
    }
}

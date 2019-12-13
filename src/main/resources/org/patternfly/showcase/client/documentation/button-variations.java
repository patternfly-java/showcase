import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Button b00 = Button.button("Primary").primary());
Button b01 = Button.button("Secondary").secondary());
Button b02 = Button.button("Tertiary").tertiary());
Button b03 = Button.button("Danger").danger()));

Button b04 = Button.button(icon(fas("address-card")), "Primary icon").primary();
Button b05 = Button.button(icon(fas("address-card")), "Secondary icon").secondary();
Button b06 = Button.button(icon(fas("address-card")), "Tertiary icon").tertiary();
Button b07 = Button.button(icon(fas("address-card"))), "Danger icon").danger();

Button b08 = Button.link("Link"));
Button b09 = Button.link(icon(fas("calendar-plus")), "Link icon");
Button b10 = Button.icon(icon(fas("chart-pie")), "Chart");
Button b11 = Button.inline("Inline Link")));

Button b12 = Button.control("Control"));
Button b13 = Button.control(icon(fas("clock")), "Control icon");
Button b14 = Button.control(icon(fas("code"));
import static org.patternfly.client.components.Button.button;
import static org.patternfly.client.resources.CSS.fas;

Button b01 = button("Primary").primary());
Button b02 = button("Secondary").secondary());
Button b03 = button("Tertiary").tertiary());
Button b04 = button("Danger").danger()));

Button b05 = button("Primary icon").primary().withIcon(fas("address-card")));
Button b06 = button("Secondary icon").secondary().withIcon(fas("address-card")));
Button b07 = button("Tertiary icon").tertiary().withIcon(fas("address-card")));
Button b08 = button("Danger icon").danger().withIcon(fas("address-card"))));

Button b09 = Button.link("Link"));
Button b10 = Button.link("Link icon").withIcon(fas("calendar-plus")));
Button b11 = Button.icon(fas("chart-pie"), "Chart"));
Button b12 = Button.inline("Inline Link")));

Button b13 = Button.control("Control"));
Button b14 = Button.control("Control icon").withIcon(fas("clock")));
Button b15 = Button.control(fas("code"), "Code")));
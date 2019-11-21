import static org.patternfly.client.components.button;

Button b01 = button("Primary").primary();
Button b02 = button("Primary focus").primary().focus();
Button b03 = button("Primary active").primary().active();
Button b04 = button("Primary disabled").primary().disable());

Button b05 = button("Secondary").secondary();
Button b06 = button("Secondary focus").secondary().focus();
Button b07 = button("Secondary active").secondary().active();
Button b08 = button("Secondary disabled").secondary().disable());

Button b09 = button("Tertiary").tertiary();
Button b10 = button("Tertiary focus").tertiary().focus();
Button b11 = button("Tertiary active").tertiary().active();
Button b12 = button("Tertiary disabled").tertiary().disable());

Button b13 = button("Danger").danger();
Button b14 = button("Danger focus").danger().focus();
Button b15 = button("Danger active").danger().active();
Button b16 = button("Danger disabled").danger().disable());

Button b17 = Button.link("Link");
Button b18 = Button.link("Link focus").focus();
Button b19 = Button.link("Link active").active();
Button b20 = Button.link("Link disabled").disable());

Button b21 = Button.link("Link icon").withIcon(fas("calendar-plus"));
Button b22 = Button.link("Link icon focus").withIcon(fas("calendar-plus")).focus();
Button b23 = Button.link("Link icon active").withIcon(fas("calendar-plus")).active();
Button b24 = Button.link("Link icon disabled").withIcon(fas("calendar-plus")).disable());

Button b25 = Button.icon(fas("chart-pie"), "Chart");
Button b26 = Button.icon(fas("chart-pie"), "Chart focus").focus();
Button b27 = Button.icon(fas("chart-pie"), "Chart active").active();
Button b28 = Button.icon(fas("chart-pie"), "Chart disabled").disable());

Button b29 = Button.control("Control");
Button b30 = Button.control("Control focus").focus();
Button b31 = Button.control("Control active").active();
Button b32 = Button.control("Control expanded").expanded();
Button b33 = Button.control("Control disabled").disable());
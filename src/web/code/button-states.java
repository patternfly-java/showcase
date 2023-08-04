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
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Button b00 = Button.button("Primary").primary();
Button b01 = Button.button("Primary focus").primary().focus();
Button b02 = Button.button("Primary active").primary().active();
Button b03 = Button.button("Primary disabled").primary().disable());

Button b04 = Button.button("Secondary").secondary();
Button b05 = Button.button("Secondary focus").secondary().focus();
Button b06 = Button.button("Secondary active").secondary().active();
Button b07 = Button.button("Secondary disabled").secondary().disable());

Button b08 = Button.button("Tertiary").tertiary();
Button b09 = Button.button("Tertiary focus").tertiary().focus();
Button b10 = Button.button("Tertiary active").tertiary().active();
Button b11 = Button.button("Tertiary disabled").tertiary().disable());

Button b12 = Button.button("Danger").danger();
Button b13 = Button.button("Danger focus").danger().focus();
Button b14 = Button.button("Danger active").danger().active();
Button b15 = Button.button("Danger disabled").danger().disable());

Button b16 = Button.link("Link");
Button b17 = Button.link("Link focus").focus();
Button b18 = Button.link("Link active").active();
Button b19 = Button.link("Link disabled").disable());

Button b20 = Button.link(icon(fas("calendar-plus")), "Link icon");
Button b21 = Button.link(icon(fas("calendar-plus")), "Link icon focus").focus();
Button b22 = Button.link(icon(fas("calendar-plus")), "Link icon active").active();
Button b23 = Button.link(icon(fas("calendar-plus")), "Link icon disabled").disable());

Button b24 = Button.icon(icon(fas("chart-pie")), "Chart");
Button b25 = Button.icon(icon(fas("chart-pie")), "Chart focus").focus();
Button b26 = Button.icon(icon(fas("chart-pie")), "Chart active").active();
Button b27 = Button.icon(icon(fas("chart-pie")), "Chart disabled").disable());

Button b28 = Button.control("Control");
Button b29 = Button.control("Control focus").focus();
Button b30 = Button.control("Control active").active();
Button b31 = Button.control("Control expanded").expanded();
Button b32 = Button.control("Control disabled").disable());
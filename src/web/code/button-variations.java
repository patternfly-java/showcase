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
import static org.patternfly.component.Icon.icon;
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
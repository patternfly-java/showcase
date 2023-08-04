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

Button b1 = Button.link("Primary link to W3.org", "https://www.w3.org/").primary();
Button b2 = Button.link("Secondary link to W3.org", "https://www.w3.org/").secondary();
Button b3 = Button.link(icon(fas("external-link-alt")), "Tertiary link to W3.org", "https://www.w3.org/", "_blank")
        .tertiary();
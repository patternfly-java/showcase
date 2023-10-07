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
import static org.patternfly.component.Alert.info;
import static org.patternfly.component.AlertGroup.toast;

Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add("Disabled")
        .addSeparator()
        .add("Separated Item")
        .onToggle(open -> toast().add(info("Dropdown " + (open ? "expanded" : "collapsed"))))
        .onChange(value -> toast().add(info("Dropdown " + (value ? "checked" : "not checked"))))
        .onSelect(item -> toast().add(info("Selected " + item)));
dropdown.disable("Disabled");
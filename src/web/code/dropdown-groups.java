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
Dropdown<String> dropdown = Dropdown.<String>text("Dropdown")
        .add("Item 1")
        .add("Item 2")
        .add(Dropdown.<String>group("Group 1")
                .add("Group 1 item 1")
                .add("Group 1 item 2"))
        .add(Dropdown.<String>group("Group 2")
                .add("Group 2 item 1")
                .add("Group 2 item 2"))
        // this item is added to the unnamed group above!
        .add("Item 3");
dropdown.getGroup("Group 2").disable("Group 2 item 1");
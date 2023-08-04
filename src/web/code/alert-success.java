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
import static org.patternfly.components.Alert.description;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.Alert.success;
import static org.patternfly.components.AlertGroup.toast;

Alert success0 = success("Success alert title")
        .add(description()
                .add("Success alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert success1 = success("Success alert title").closable();
Alert success2 = success("Success alert title")
        .action("Action Button", () -> toast().add(info("Success action button clicked.")));
Alert success3 = success("Success alert title");
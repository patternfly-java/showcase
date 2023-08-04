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
import static org.patternfly.components.Alert.warning;
import static org.patternfly.components.AlertGroup.toast;

Alert warning0 = warning("Warning alert title")
        .add(description()
                .add("Warning alert description. ")
                .add(a("#").textContent("This is a link")))
        .closable();
Alert warning1 = warning("Warning alert title").closable();
Alert warning2 = warning("Warning alert title")
        .action("Action Button", () -> toast().add(info("Warning action button clicked.")));
Alert warning3 = warning("Warning alert title");
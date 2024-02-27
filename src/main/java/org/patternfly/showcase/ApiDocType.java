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
package org.patternfly.showcase;

import org.patternfly.style.Color;

import static org.patternfly.style.Color.blue;
import static org.patternfly.style.Color.cyan;
import static org.patternfly.style.Color.grey;
import static org.patternfly.style.Color.orange;
import static org.patternfly.style.Color.purple;

public enum ApiDocType {

    component("Component", blue),

    subcomponent("Subcomponent", cyan),

    modifier("Modifier", orange),

    handler("Event handler", purple),

    other("Other", grey);

    final String name;
    final Color color;

    ApiDocType(String name, Color color) {
        this.name = name;
        this.color = color;
    }
}

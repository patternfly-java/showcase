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
package org.patternfly.layout.flex;

import org.patternfly.style.Classes;
import org.patternfly.style.TypedModifier;

public enum AlignSelf implements TypedModifier {

    flexStart("align-self-flex-start"),

    flexEnd("align-self-flex-end"),

    center("align-self-center"),

    stretch("align-self-stretch"),

    baseline("align-self-baseline");

    private final String value;
    private final String modifier;

    AlignSelf(String value) {
        this.value = value;
        this.modifier = Classes.modifier(value);
    }

    @Override
    public String value() {
        return value;
    }

    @Override
    public String modifier() {
        return modifier;
    }
}

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
package org.patternfly.handler;

import elemental2.dom.Event;

/**
 * Functional interface for handling change events.
 *
 * @param <C> The type of the component.
 * @param <T> The type of the value.
 */
@FunctionalInterface
public interface ChangeHandler<C, T> {

    void onChange(Event event, C component, T value);
}

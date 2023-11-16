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
package org.patternfly.component;

import elemental2.dom.MutationRecord;

/**
 * Interface meant to be implemented by subcomponents who need a reference to the base component.
 * <p>
 * The first call to {@link #passComponent(BaseComponent)} is typically initiated by the base component in the
 * {@link org.jboss.elemento.Attachable#attach(MutationRecord)} method (assuming that the base component implements
 * {@link org.jboss.elemento.Attachable}).
 */
public interface ComponentReference<C extends BaseComponent<?, ?>> {

    void passComponent(C component);

    C mainComponent();
}

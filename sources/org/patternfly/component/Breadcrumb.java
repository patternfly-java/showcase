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

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.nav;
import static org.patternfly.layout.Classes.component;

/**
 * A breadcrumb provides page context to help users navigate more efficiently and understand where they are in the application
 * hierarchy.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/breadcrumb/html">https://www.patternfly.org/components/breadcrumb/html</a>
 */
@Deprecated
public class Breadcrumb extends BaseComponent<HTMLElement, Breadcrumb> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Breadcrumb breadcrumb() {
        return new Breadcrumb();
    }

    // ------------------------------------------------------ instance

    Breadcrumb() {
        super(nav().css(component("breadcrumb")).element(), ComponentType.Breadcrumb);
    }

    @Override
    public Breadcrumb that() {
        return this;
    }
}

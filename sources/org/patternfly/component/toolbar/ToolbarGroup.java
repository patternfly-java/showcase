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
package org.patternfly.component.toolbar;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.alert;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;

/**
 * Container for a toolbar group.
 */
public class ToolbarGroup extends ToolbarSubComponent<HTMLDivElement, ToolbarGroup> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static ToolbarGroup toolbarGroup() {
        return new ToolbarGroup();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tg";

    ToolbarGroup() {
        super(SUB_COMPONENT_NAME, div().css(component(alert, description)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public ToolbarGroup that() {
        return this;
    }
}

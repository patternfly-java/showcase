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
package org.patternfly.component.expandable;

import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandableSection;
import static org.patternfly.style.Classes.toggle;

public class ExpandableSectionToggleText extends ExpandableSectionSubComponent<HTMLElement, ExpandableSectionToggleText> {

    // ------------------------------------------------------ factory

    public static ExpandableSectionToggleText expandableSectionToggleText() {
        return new ExpandableSectionToggleText(null, null);
    }

    public static ExpandableSectionToggleText expandableSectionToggleText(String moreText) {
        return new ExpandableSectionToggleText(moreText, null);
    }

    public static ExpandableSectionToggleText expandableSectionToggleText(String moreText, String lessText) {
        return new ExpandableSectionToggleText(moreText, lessText);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "estt";

    private final String moreText;
    private final String lessText;

    ExpandableSectionToggleText(String moreText, String lessText) {
        super(SUB_COMPONENT_NAME, span().css(component(expandableSection, toggle, Classes.text)).element());
        this.moreText = moreText;
        this.lessText = lessText;

        if (moreText != null) {
            textContent(moreText);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public ExpandableSectionToggleText that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void collapse() {
        if (lessText != null) {
            textContent(moreText);
        }
    }

    void expand() {
        if (lessText != null) {
            textContent(lessText);
        }
    }
}

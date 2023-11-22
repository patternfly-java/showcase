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
package org.patternfly.component.card;

import org.patternfly.component.SubComponent;
import org.patternfly.core.Modifiers.NoFill;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.card;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.expandableContent;

public class CardExpandableContent extends SubComponent<HTMLDivElement, CardExpandableContent> implements
        NoFill<HTMLDivElement, CardExpandableContent> {

    // ------------------------------------------------------ factory

    public static CardExpandableContent cardExpandableContent() {
        return new CardExpandableContent();
    }

    // ------------------------------------------------------ instance

    CardExpandableContent() {
        super(div().css(component(card, expandableContent))
                .apply(e -> e.hidden = true)
                .element());
    }

    // ------------------------------------------------------ add

    public CardExpandableContent addBody(CardBody body) {
        return add(body);
    }

    // override to assure internal wiring
    public CardExpandableContent add(CardBody body) {
        return add(body.element());
    }

    public CardExpandableContent addFooter(CardFooter footer) {
        return add(footer);
    }

    // override to assure internal wiring
    public CardExpandableContent add(CardFooter footer) {
        return add(footer.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public CardExpandableContent that() {
        return this;
    }
}

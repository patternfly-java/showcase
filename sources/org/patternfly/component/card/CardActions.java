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

import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Modifiers.toggleModifier;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.component;

public class CardActions extends SubComponent<HTMLDivElement, CardActions> implements ComponentReference<Card> {

    // ------------------------------------------------------ factory

    public static CardActions cardActions() {
        return new CardActions();
    }

    // ------------------------------------------------------ instance

    CardSelectableActions selectableActions;
    private Card card;

    CardActions() {
        super(div().css(component(Classes.card, actions)).element());
    }

    @Override
    public void passComponent(Card card) {
        this.card = card;
        if (selectableActions != null) {
            selectableActions.passComponent(card);
        }
    }

    @Override
    public Card mainComponent() {
        return card;
    }

    // ------------------------------------------------------ add

    public CardActions addSelectableActions(CardSelectableActions selectableActions) {
        return add(selectableActions);
    }

    // override to assure internal wiring
    public CardActions add(CardSelectableActions selectableActions) {
        this.selectableActions = selectableActions;
        return add(selectableActions.element());
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #noOffset(boolean) noOffset(true)} */
    public CardActions noOffset() {
        return noOffset(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(noOffset)} */
    public CardActions noOffset(boolean noOffset) {
        return toggleModifier(this, element(), Classes.noOffset, noOffset);
    }

    @Override
    public CardActions that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void disabled(boolean disabled) {
        if (selectableActions != null) {
            selectableActions.disabled(disabled);
        }
    }
}

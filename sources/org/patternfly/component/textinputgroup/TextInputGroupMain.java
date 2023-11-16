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
package org.patternfly.component.textinputgroup;

import java.util.function.Consumer;

import org.jboss.elemento.Elements;
import org.jboss.elemento.InputElementBuilder;
import org.jboss.elemento.InputType;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.component.chip.ChipGroup;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.textInput;

public class TextInputGroupMain extends SubComponent<HTMLDivElement, TextInputGroupMain>
        implements Disabled<HTMLDivElement, TextInputGroupMain>, ComponentReference<TextInputGroup> {

    // ------------------------------------------------------ factory

    public static TextInputGroupMain textInputGroupMain(String id) {
        return new TextInputGroupMain(id);
    }

    // ------------------------------------------------------ instance

    final HTMLInputElement inputElement;
    ChipGroup chipGroup;
    private final HTMLElement textContainer;
    private TextInputGroup textInputGroup;

    TextInputGroupMain(String id) {
        super(div().css(component(Classes.textInputGroup, main)).element());

        add(textContainer = span().css(component(Classes.textInputGroup, Classes.text))
                .add(inputElement = input(InputType.text).css(component(Classes.textInputGroup, textInput))
                        .id(id)
                        .name(id)
                        .element())
                .element());
    }

    @Override
    public void passComponent(TextInputGroup textInputGroup) {
        this.textInputGroup = textInputGroup;
        if (textInputGroup.initialDisabled) {
            disabled(true);
        }
        if (textInputGroup.initialChangeHandler != null) {
            inputElement.addEventListener(change.name,
                    e -> textInputGroup.initialChangeHandler.onChange(textInputGroup, inputElement.value));
        }
    }

    @Override
    public TextInputGroup mainComponent() {
        return textInputGroup;
    }

    // ------------------------------------------------------ add

    public TextInputGroupMain addIcon(String iconClass) {
        return addIcon(inlineIcon(iconClass));
    }

    public TextInputGroupMain addIcon(PredefinedIcon icon) {
        return addIcon(inlineIcon(icon));
    }

    public TextInputGroupMain addIcon(InlineIcon icon) {
        css(modifier(Classes.icon));
        Elements.insertFirst(textContainer, span().css(component(Classes.textInputGroup, Classes.icon))
                .add(icon));
        return this;
    }

    public TextInputGroupMain addChipGroup(ChipGroup chipGroup) {
        this.chipGroup = chipGroup;
        insertFirst(element(), chipGroup);
        return this;
    }

    // ------------------------------------------------------ builder

    public TextInputGroupMain value(String value) {
        inputElement.value = value;
        return this;
    }

    public TextInputGroupMain placeholder(String placeholder) {
        inputElement.placeholder = placeholder;
        return this;
    }

    /** Provides access to the underlying input element using a fluent API style */
    public TextInputGroupMain withInputElement(Consumer<InputElementBuilder<HTMLInputElement>> inputElementConsumer) {
        inputElementConsumer.accept(wrapInputElement(inputElement));
        return this;
    }

    @Override
    public TextInputGroupMain that() {
        return this;
    }
}

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
package org.patternfly.showcase.component;

import org.patternfly.component.form.Checkbox;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.Radio.radio;
import static org.patternfly.component.form.RadioBody.radioBody;
import static org.patternfly.component.form.RadioDescription.radioDescription;
import static org.patternfly.showcase.Code.code;

public class RadioComponent extends SnippetPage {

    public RadioComponent() {
        super(Checkbox.class, "Checkbox",
                "https://www.patternfly.org/components/forms/radio/design-guidelines",
                p().textContent(
                        "A radio button is used to present the user with mutually exclusive choices. Always present radio buttons in groups of 2 or more.")
                        .element());

        addSnippet(new Snippet("radio-basic", "Basic",
                code.get("radio-basic"), () ->
                // @code-start:radio-basic
                div()
                        .add(radio("basic-radio-0", "basic-radio", "Option 1")
                                .value(true))
                        .add(radio("basic-radio-1", "basic-radio", "Option 2"))
                        .element()
        // @code-end:radio-basic
        ));

        addSnippet(new Snippet("radio-reversed", "Reversed",
                code.get("radio-reversed"), () ->
                // @code-start:radio-reversed
                div()
                        .add(radio("reversed-radio-0", "reversed-radio", "Option 1")
                                .reversed())
                        .element()
        // @code-end:radio-reversed
        ));

        addSnippet(new Snippet("radio-disabled", "Disabled",
                code.get("radio-disabled"), () ->
                // @code-start:radio-disabled
                div()
                        .add(radio("disabled-radio-0", "disabled-radio", "Disabled radio 1")
                                .value(true)
                                .disabled())
                        .add(radio("disabled-radio-1", "disabled-radio", "Disabled radio 2")
                                .disabled())
                        .element()
        // @code-end:radio-disabled
        ));

        addSnippet(new Snippet("radio-description", "Radio with description",
                code.get("radio-description"), () ->
                // @code-start:radio-description
                div()
                        .add(radio("rwd-0", "rwd", "Radio with description")
                                .addDescription(radioDescription(LoremIpsum.words(50))))
                        .element()
        // @code-end:radio-description
        ));

        addSnippet(new Snippet("radio-body", "Radio with body",
                code.get("radio-body"), () ->
                // @code-start:radio-body
                div()
                        .add(radio("rwb-0", "rwb", "Radio with body")
                                .addBody(radioBody("This is where custom content goes.")))
                        .element()
        // @code-end:radio-body
        ));

        addSnippet(new Snippet("radio-description-body", "Radio with description and body",
                code.get("radio-description-body"), () ->
                // @code-start:radio-description-body
                div()
                        .add(radio("rdb-0", "rdb", "Radio with description and body")
                                .addDescription(radioDescription(LoremIpsum.words(50)))
                                .addBody(radioBody("This is where custom content goes.")))
                        .element()
        // @code-end:radio-description-body
        ));

        addSnippet(new Snippet("radio-standalone", "Standalone input",
                code.get("radio-standalone"), () ->
                // @code-start:radio-standalone
                div()
                        .add(radio("standalone-radio-0", "standalone-radio")
                                .standalone())
                        .element()
        // @code-end:radio-standalone
        ));
    }
}

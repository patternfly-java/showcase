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

import org.patternfly.core.Tuples;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.progress.MeasureLocation.inside;
import static org.patternfly.component.progress.MeasureLocation.none;
import static org.patternfly.component.progress.MeasureLocation.outside;
import static org.patternfly.component.progress.Progress.progress;
import static org.patternfly.core.Tuples.tuples;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Status.custom;
import static org.patternfly.style.Status.danger;
import static org.patternfly.style.Status.success;
import static org.patternfly.style.Status.warning;

public class ProgressComponent extends SnippetPage {

    public ProgressComponent() {
        super("Progress",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/progress/Progress.html",
                "https://www.patternfly.org/components/progress/design-guidelines",
                p().textContent(
                                "A progress bar informs users about the completion status of an ongoing process or task.")
                        .element());

        addSnippet(new Snippet("progress-basic", "Basic",
                code.get("progress-basic"), () ->
                // @code-start:progress-basic
                div()
                        .add(progress()
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-basic
        ));

        addSnippet(new Snippet("progress-small", "Small",
                code.get("progress-small"), () ->
                // @code-start:progress-small
                div()
                        .add(progress().size(sm)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-small
        ));

        addSnippet(new Snippet("progress-large", "Large",
                code.get("progress-large"), () ->
                // @code-start:progress-large
                div()
                        .add(progress().size(lg)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-large
        ));

        addSnippet(new Snippet("progress-outside", "Outside",
                code.get("progress-outside"), () ->
                // @code-start:progress-outside
                div()
                        .add(progress().measureLocation(outside)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-outside
        ));

        addSnippet(new Snippet("progress-inside", "Inside",
                code.get("progress-inside"), () ->
                // @code-start:progress-inside
                div()
                        .add(progress().size(lg)
                                .measureLocation(inside)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-inside
        ));

        addSnippet(new Snippet("progress-success", "Success",
                code.get("progress-success"), () ->
                // @code-start:progress-success
                div()
                        .add(progress().status(success)
                                .title("Title")
                                .value(100))
                        .element()
                // @code-end:progress-success
        ));

        addSnippet(new Snippet("progress-failure", "Failure",
                code.get("progress-failure"), () ->
                // @code-start:progress-failure
                div()
                        .add(progress().status(danger)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-failure
        ));

        addSnippet(new Snippet("progress-warning", "Warning",
                code.get("progress-warning"), () ->
                // @code-start:progress-warning
                div()
                        .add(progress().status(warning)
                                .title("Title")
                                .value(90))
                        .element()
                // @code-end:progress-warning
        ));

        addSnippet(new Snippet("progress-inside-success", "Inside success",
                code.get("progress-inside-success"), () ->
                // @code-start:progress-inside-success
                div()
                        .add(progress().size(lg)
                                .status(success)
                                .measureLocation(inside)
                                .title("Title")
                                .value(100))
                        .element()
                // @code-end:progress-inside-success
        ));

        addSnippet(new Snippet("progress-outside-failure", "Outside failure",
                code.get("progress-outside-failure"), () ->
                // @code-start:progress-outside-failure
                div()
                        .add(progress().status(danger)
                                .measureLocation(outside)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-outside-failure
        ));

        addSnippet(new Snippet("progress-single-line", "Single line",
                code.get("progress-single-line"), () ->
                // @code-start:progress-single-line
                div()
                        .add(progress().measureLocation(outside)
                                .value(33))
                        .element()
                // @code-end:progress-single-line
        ));

        addSnippet(new Snippet("progress-no-measure", "Without measure",
                code.get("progress-no-measure"), () ->
                // @code-start:progress-no-measure
                div()
                        .add(progress().measureLocation(none)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-no-measure
        ));

        addSnippet(new Snippet("progress-no-measure-failure", "Failure without measure",
                code.get("progress-no-measure-failure"), () ->
                // @code-start:progress-no-measure-failure
                div()
                        .add(progress().status(danger)
                                .measureLocation(none)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-no-measure-failure
        ));

        addSnippet(new Snippet("progress-finite-step", "Finite step",
                code.get("progress-finite-step"), () ->
                // @code-start:progress-finite-step
                div()
                        .add(progress()
                                .label((min, max, step, value) -> value + " of " + max)
                                .range(0, 5)
                                .title("Title")
                                .value(2))
                        .element()
                // @code-end:progress-finite-step
        ));

        addSnippet(new Snippet("progress-step-instruction", "Progress with step instructions",
                code.get("progress-step-instruction"), () -> {
            // @code-start:progress-step-instruction
            Tuples<Integer, String> instructions = tuples(
                    0, "Preparing",
                    1, "Collecting files",
                    2, "Copying files",
                    3, "Verifying files",
                    4, "Restarting server",
                    5, "Cleanup");
            return div()
                    .add(progress()
                            .label((min, max, step, value) -> "Step " + value + ": " + instructions.value(value))
                            .range(0, 5)
                            .title("Title")
                            .value(2))
                    .element();
            // @code-end:progress-step-instruction
        }));
    }
}

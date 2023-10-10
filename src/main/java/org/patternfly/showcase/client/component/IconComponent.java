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
package org.patternfly.showcase.client.component;

import org.patternfly.component.icon.Icon;
import org.patternfly.showcase.client.LoremIpsum;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.strong;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.icon.Icon.icon;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.layout.Classes.util;
import static org.patternfly.layout.PredefinedIcon.angleDown;
import static org.patternfly.layout.PredefinedIcon.angleRight;
import static org.patternfly.layout.PredefinedIcon.bell;
import static org.patternfly.layout.PredefinedIcon.check;
import static org.patternfly.layout.PredefinedIcon.checkCircle;
import static org.patternfly.layout.PredefinedIcon.exclamationCircle;
import static org.patternfly.layout.PredefinedIcon.exclamationTriangle;
import static org.patternfly.layout.PredefinedIcon.fas;
import static org.patternfly.layout.PredefinedIcon.infoCircle;
import static org.patternfly.layout.PredefinedIcon.plusCircle;
import static org.patternfly.layout.Size.lg;
import static org.patternfly.layout.Size.md;
import static org.patternfly.layout.Size.sm;
import static org.patternfly.layout.Size.xl;
import static org.patternfly.layout.Status.custom;
import static org.patternfly.layout.Status.danger;
import static org.patternfly.layout.Status.info;
import static org.patternfly.layout.Status.success;
import static org.patternfly.layout.Status.warning;
import static org.patternfly.showcase.client.Code.code;

public class IconComponent extends ComponentPage {

    public IconComponent() {
        super("Icon",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/icon/Icon.html",
                "https://www.patternfly.org/design-foundations/icons/",
                p().textContent(
                        "An icon component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.")
                        .element());

        addSnippet(new Snippet("icon-basic", "Basic",
                code.get("icon-basic"),
                () -> div()
                        .add(icon(fas("long-arrow-alt-down")))
                        .add(" ")
                        .add(icon(angleRight))
                        .add(" ")
                        .add(icon(angleDown))
                        .add(" ")
                        .add(icon(fas("cog")))
                        .element()));

        addSnippet(new Snippet("icon-sizes", "Sizes",
                code.get("icon-sizes"),
                () -> div()
                        .add(icon(plusCircle).size(sm))
                        .add(" ")
                        .add(icon(plusCircle).size(md))
                        .add(" ")
                        .add(icon(plusCircle).size(lg))
                        .add(" ")
                        .add(icon(plusCircle).size(xl))
                        .element()));

        addSnippet(new Snippet("icon-status-colors", "Status colors",
                code.get("icon-status-colors"),
                () -> div()
                        .add(icon(exclamationCircle).status(danger))
                        .add(" ")
                        .add(icon(exclamationTriangle).status(warning))
                        .add(" ")
                        .add(icon(check).status(success))
                        .add(" ")
                        .add(icon(infoCircle).status(info))
                        .add(" ")
                        .add(icon(bell).status(custom))
                        .element()));

        addSnippet(new Snippet("icon-container", "Sizing an icon within the icon container",
                code.get("icon-container"),
                () -> div()
                        .add(icon(plusCircle).size(xl).iconSize(sm))
                        .add(" ")
                        .add(icon(plusCircle).size(xl).iconSize(md))
                        .add(" ")
                        .add(icon(plusCircle).size(xl).iconSize(lg))
                        .add(" ")
                        .add(icon(plusCircle).size(xl))
                        .element()));

        addSnippet(new Snippet("icon-inline", "Inline",
                code.get("icon-inline"),
                () -> div()
                        .add(textContent()
                                .add(h(1)
                                        .add("Heading ")
                                        .add(icon(plusCircle).inline()))
                                .add(p().textContent(LoremIpsum.paragraph()))
                                .add(h(2)
                                        .add("Second level ")
                                        .add(icon(plusCircle).inline()))
                                .add(p()
                                        .add(icon(plusCircle).inline())
                                        .add(" " + LoremIpsum.paragraphs(2) + " ")
                                        .add(strong()
                                                .add(LoremIpsum.words(2) + " ")
                                                .add(icon(plusCircle).inline()))
                                        .add(" " + LoremIpsum.words(5))
                                        .add(LoremIpsum.paragraphs(2)))
                                .add(small()
                                        .add("Sometimes you need small text ")
                                        .add(icon(plusCircle).inline()))
                                .add(div()
                                        .add("Inline with size specified: ")
                                        .add(icon(plusCircle).size(sm).inline())
                                        .add(" small, ")
                                        .add(icon(plusCircle).size(md).inline())
                                        .add(" medium, ")
                                        .add(icon(plusCircle).size(lg).inline())
                                        .add(" large, ")
                                        .add(icon(plusCircle).size(xl).inline())
                                        .add(" extra large")))
                        .element()));

        addSnippet(new Snippet("icon-in-progress", "In progress",
                code.get("icon-in-progress"),
                () -> {
                    Icon icon = icon(checkCircle);
                    return div()
                            .add(div().css(util("mb-md"))
                                    .add(checkbox("in-progress-cb", "Toggle in progress state")
                                            .onChange((checkBox, value) -> icon.inProgress(value))))
                            .add(icon)
                            .element();
                }));

        addSnippet(new Snippet("icon-in-progress-custom", "Custom in progress icon",
                code.get("icon-in-progress-custom"),
                () -> {
                    Icon icon = icon(checkCircle);
                    return div()
                            .add(div().css(util("mb-md"))
                                    .add(checkbox("in-progress-custom-cb", "Toggle in progress state")
                                            .onChange((checkBox, value) -> icon.inProgress(value,
                                                    spinner -> spinner.diameter("2em")))))
                            .add(icon)
                            .element();
                }));
    }
}

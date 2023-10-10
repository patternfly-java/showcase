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

import org.patternfly.showcase.client.LoremIpsum;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.code;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.alert.Alert.alert;
import static org.patternfly.component.alert.AlertActionGroup.alertActionGroup;
import static org.patternfly.component.alert.AlertDescription.alertDescription;
import static org.patternfly.component.alert.AlertType.custom;
import static org.patternfly.component.alert.AlertType.danger;
import static org.patternfly.component.alert.AlertType.info;
import static org.patternfly.component.alert.AlertType.success;
import static org.patternfly.component.alert.AlertType.warning;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.showcase.client.Code.code;

public class AlertComponent extends ComponentPage {

    public AlertComponent() {
        super("Alert",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/alert/Alert.html",
                "https://www.patternfly.org/components/alert/design-guidelines",
                p().textContent("Alerts are used to notify the user about a change in status or other event")
                        .element());

        addSnippet(new Snippet("alert-variants", "Alert variants",
                code.get("alert-variants"),
                () -> div()
                        .add(alert(custom, "Custom alert title"))
                        .add(br())
                        .add(alert(info, "Info alert title"))
                        .add(br())
                        .add(alert(success, "Success alert title"))
                        .add(br())
                        .add(alert(warning, "Warning alert title"))
                        .add(br())
                        .add(alert(danger, "Danger alert title"))
                        .element()));

        addSnippet(new Snippet("alert-variations", "Alert variations",
                code.get("alert-variations"),
                () -> div()
                        .add(alert(success, "Success alert title")
                                .closable()
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .add(button("View details").inline().link())
                                        .add(button("Ignore").inline().link())))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable()
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("Success alert description. This should tell the user more information about the alert. ")
                                                .add(a("#").textContent("This is a link"))
                                                .add("."))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable()
                                .addActionGroup(alertActionGroup()
                                        .add(button("View details").inline().link())
                                        .add(button("Ignore").inline().link())))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable())
                        .add(br())
                        .add(alert(success, "Success alert title"))
                        .add(br())
                        .add(alert(success, LoremIpsum.words(75))
                                .truncate()
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("This example uses ")
                                                .add(code("Alert.truncate()"))
                                                .add(" to limit the title to a single line and truncate any overflow text with ellipses."))))
                        .add(br())
                        .add(alert(success, LoremIpsum.words(75))
                                .truncate(2)
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("This example uses ")
                                                .add(code("Alert.truncate(2)"))
                                                .add(" to limit the title to a single line and truncate any overflow text with ellipses."))))
                        .element()));

        addSnippet(new Snippet("alert-inline-types", "Inline types",
                code.get("alert-inline-types"),
                () -> div()
                        .add(alert(custom, "Custom inline alert title")
                                .inline())
                        .add(br())
                        .add(alert(info, "Info inline alert title")
                                .inline())
                        .add(br())
                        .add(alert(success, "Success inline alert title")
                                .inline())
                        .add(br())
                        .add(alert(warning, "Warning inline alert title")
                                .inline())
                        .add(br())
                        .add(alert(danger, "Danger inline alert title")
                                .inline())
                        .element()));
    }
}

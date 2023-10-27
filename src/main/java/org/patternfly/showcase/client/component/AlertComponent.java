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

import org.patternfly.core.Aria;
import org.patternfly.showcase.client.LoremIpsum;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.clearInterval;
import static elemental2.dom.DomGlobal.setInterval;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.code;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.actionlist.ActionList.actionList;
import static org.patternfly.component.actionlist.ActionListItem.actionListItem;
import static org.patternfly.component.alert.Alert.alert;
import static org.patternfly.component.alert.AlertActionGroup.alertActionGroup;
import static org.patternfly.component.alert.AlertDescription.alertDescription;
import static org.patternfly.component.alert.AlertGroup.alertGroup;
import static org.patternfly.component.alert.AlertGroupType.staticInline;
import static org.patternfly.component.alert.AlertGroupType.toast;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.atomic;
import static org.patternfly.core.Aria.live;
import static org.patternfly.core.Aria.relevant;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Severity.custom;
import static org.patternfly.core.Severity.danger;
import static org.patternfly.core.Severity.info;
import static org.patternfly.core.Severity.success;
import static org.patternfly.core.Severity.warning;
import static org.patternfly.layout.Classes.alertGroup;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.util;
import static org.patternfly.layout.PredefinedIcon.box;
import static org.patternfly.layout.PredefinedIcon.database;
import static org.patternfly.layout.PredefinedIcon.laptop;
import static org.patternfly.layout.PredefinedIcon.server;
import static org.patternfly.layout.PredefinedIcon.users;
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
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("Success alert description. This should tell the user more information about the alert. ")
                                                .add(a("#").textContent("This is a link"))
                                                .add("."))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addActionGroup(alertActionGroup()
                                        .addAction(button("View details").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction(button("Ignore").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button")))
                        .add(br())
                        .add(alert(success, "Success alert title"))
                        .element()));

        addSnippet(new Snippet("alert-timeout", "Alert timeout",
                code.get("alert-timeout"),
                () -> {
                    HTMLElement alerts = ul().css(component(alertGroup), util("mt-sm"))
                            .aria(live, "polite")
                            .aria(Aria.atomic, false)
                            .attr(role, "list")
                            .element();
                    return div()
                            .add(actionList()
                                    .addItem(actionListItem()
                                            .add(button("Add alert").secondary()
                                                    .onClick((event, button) -> alerts.appendChild(li()
                                                            .add(alert(custom, "Default timeout Alert")
                                                                    .timeout()
                                                                    .addDescription("This alert will dismiss after 8 seconds")
                                                                    .addActionGroup(alertActionGroup()
                                                                            .addAction("View details")
                                                                            .addAction("Ignore")))
                                                            .element()))))
                                    .addItem(actionListItem()
                                            .add(button("Remove all alerts").secondary()
                                                    .onClick((event, button) -> removeChildrenFrom(alerts)))))
                            .add(alerts)
                            .element();
                }));

        addSnippet(new Snippet("alert-expandable", "Expandable alerts",
                code.get("alert-expandable"),
                () -> div()
                        .add(alert(success, "Success alert title")
                                .expandable()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title").inline()
                                .expandable()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .element()));

        addSnippet(new Snippet("alert-truncate", "Truncated alerts",
                code.get("alert-truncate"),
                () -> div()
                        .add(alert(info, LoremIpsum.paragraphs(10)).truncate(1))
                        .add(br())
                        .add(alert(warning, LoremIpsum.paragraphs(10)).truncate(2))
                        .add(br())
                        .add(alert(danger, LoremIpsum.paragraphs(10)).truncate(3))
                        .element()));

        addSnippet(new Snippet("alert-custom-icons", "Custom icons",
                code.get("alert-custom-icons"),
                () -> div()
                        .add(alert(custom, "Default alert title").customIcon(users))
                        .add(br())
                        .add(alert(info, "Info alert title").customIcon(box))
                        .add(br())
                        .add(alert(success, "Success alert title").customIcon(database))
                        .add(br())
                        .add(alert(warning, "Warning alert title").customIcon(server))
                        .add(br())
                        .add(alert(danger, "Danger alert title").customIcon(laptop))
                        .element()));

        addSnippet(new Snippet("alert-inline-variants", "Inline alert variants",
                code.get("alert-inline-types"),
                () -> div()
                        .add(alert(custom, "Custom inline alert title").inline())
                        .add(br())
                        .add(alert(info, "Info inline alert title").inline())
                        .add(br())
                        .add(alert(success, "Success inline alert title").inline())
                        .add(br())
                        .add(alert(warning, "Warning inline alert title").inline())
                        .add(br())
                        .add(alert(danger, "Danger inline alert title").inline())
                        .element()));

        addSnippet(new Snippet("alert-inline-variations", "Inline alert variations",
                code.get("alert-inline-variations"),
                () -> div()
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("Success alert description. This should tell the user more information about the alert. ")
                                                .add(a("#").textContent("This is a link"))
                                                .add("."))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addActionGroup(alertActionGroup()
                                        .addAction(button("View details").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction(button("Ignore").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button")))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline())
                        .element()));

        addSnippet(new Snippet("alert-plain-inline-variants", "Plain inline alert variants",
                code.get("alert-plain-inline-variants"),
                () -> div()
                        .add(alert(custom, "Custom inline alert title").inline().plain())
                        .add(br())
                        .add(alert(info, "Info inline alert title").inline().plain())
                        .add(br())
                        .add(alert(success, "Success inline alert title").inline().plain())
                        .add(br())
                        .add(alert(warning, "Warning inline alert title").inline().plain())
                        .add(br())
                        .add(alert(danger, "Danger inline alert title").inline().plain())
                        .element()));

        addSnippet(new Snippet("alert-plain-inline-variations", "Plain inline alert variations",
                code.get("alert-plain-inline-variations"),
                () -> div()
                        .add(alert(success, "Success alert title")
                                .inline().plain()
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert."))
                        .element()));

        addSnippet(new Snippet("alert-static-live-region", "Static live region alerts",
                code.get("alert-static-live-region"),
                () -> div()
                        .add(alert(info, "Default live region configuration")
                                .closable()
                                .liveRegion()
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("This alert uses the recommended ")
                                                .add(code("liveRegion()"))
                                                .add(" modifier to automatically set ARIA attributes and CSS classes."))))
                        .add(br())
                        .add(alert(info, "Customized live region")
                                .closable()
                                .aria(live, "assertive")
                                .aria(atomic, true)
                                .aria(relevant, "additions text")
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("You can alternatively omit the ")
                                                .add(code("liveRegion()"))
                                                .add(" to specify ARIA attributes and CSS manually on the containing element."))))
                        .element()));

        addSnippet(new Snippet("alert-group-static-inline", "Static inline alert group",
                code.get("alert-group-static-inline"),
                () -> div()
                        .add(alertGroup(staticInline)
                                .addAlert(alert(success, "Success alert").inline())
                                .addAlert(alert(info, "Info alert"))) // inline is added automatically!
                        .element()));

        addSnippet(new Snippet("alert-group-toast", "Toast alert group",
                code.get("alert-group-toast"),
                () -> div()
                        .add(actionList()
                                .addItem(actionListItem()
                                        .add(button("Add toast success alert").secondary()
                                                .onClick((e, b) -> alertGroup(toast)
                                                        .addAlert(alert(success, "Toast success alert")))))
                                .addItem(actionListItem()
                                        .add(button("Add toast danger alert").secondary()
                                                .onClick((e, b) -> alertGroup(toast)
                                                        .addAlert(alert(danger, "Toast danger alert")))))
                                .addItem(actionListItem()
                                        .add(button("Add toast info alert").secondary()
                                                .onClick((e, b) -> alertGroup(toast)
                                                        .addAlert(alert(info, "Toast info alert"))))))
                        .element()));

        addSnippet(new Snippet("alert-group-asynchronous", "Asynchronous alert groups",
                code.get("alert-group-asynchronous"),
                () -> {
                    final int[] counter = { 0 };
                    final double[] intervalHandle = { 0 };
                    return div()
                            .add(actionList()
                                    .addItem(actionListItem()
                                            .add(button("Start async alerts").secondary()
                                                    .onClick((e, b) -> intervalHandle[0] = setInterval(__ -> {
                                                        counter[0] = counter[0] + 1;
                                                        alertGroup(toast)
                                                                .addAlert(alert(danger, "Async notification " + counter[0]
                                                                        + " was added to the queue."));
                                                    }, 1_000))))
                                    .addItem(actionListItem()
                                            .add(button("Stop async alerts").secondary()
                                                    .onClick((e, b) -> {
                                                        counter[0] = 0;
                                                        clearInterval(intervalHandle[0]);
                                                    }))))
                            .element();
                }));
    }
}

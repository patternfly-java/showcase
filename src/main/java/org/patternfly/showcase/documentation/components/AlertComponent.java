package org.patternfly.showcase.documentation.components;

import org.patternfly.components.AlertGroup;
import org.patternfly.showcase.Resources;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Alert.*;
import static org.patternfly.components.AlertGroup.toast;

public class AlertComponent extends BaseComponent {

    public AlertComponent() {
        super("Alert",
                p().textContent("Alerts are used to notify the user about a change in status or other event").element(),
                asList(
                        new Snippet("Default alert", Resources.get().alertDefault().getText(),
                                () -> div()
                                        .add(AlertGroup.embedded()
                                                .add(default_("Default alert title")
                                                        .add(description()
                                                                .add("Default alert description. ")
                                                                .add(a("#").textContent("This is a link")))
                                                        .closable())
                                                .add(default_("Default alert title")
                                                        .closable())
                                                .add(default_("Default alert title")
                                                        .action("Action Button", () -> toast().add(
                                                                info("Default action button clicked."))))
                                                .add(default_("Default alert title")).element()).element()),
                        new Snippet("Info alert", Resources.get().alertInfo().getText(),
                                () -> div()
                                        .add(AlertGroup.embedded()
                                                .add(info("Info alert title")
                                                        .add(description()
                                                                .add("Info alert description. ")
                                                                .add(a("#").textContent("This is a link")))
                                                        .closable())
                                                .add(info("Info alert title")
                                                        .closable())
                                                .add(info("Info alert title")
                                                        .action("Action Button", () -> toast().add(
                                                                info("Info action button clicked."))))
                                                .add(info("Info alert title")).element()).element()),
                        new Snippet("Success alert", Resources.get().alertSuccess().getText(),
                                () -> div()
                                        .add(AlertGroup.embedded()
                                                .add(success("Success alert title")
                                                        .add(description()
                                                                .add("Success alert description. ")
                                                                .add(a("#").textContent("This is a link")))
                                                        .closable())
                                                .add(success("Success alert title")
                                                        .closable())
                                                .add(success("Success alert title")
                                                        .action("Action Button", () -> toast().add(
                                                                info("Success action button clicked."))))
                                                .add(success("Success alert title")).element()).element()),
                        new Snippet("Warning alert", Resources.get().alertWarning().getText(),
                                () -> div()
                                        .add(AlertGroup.embedded()
                                                .add(warning("Warning alert title")
                                                        .add(description()
                                                                .add("Warning alert description. ")
                                                                .add(a("#").textContent("This is a link")))
                                                        .closable())
                                                .add(warning("Warning alert title")
                                                        .closable())
                                                .add(warning("Warning alert title")
                                                        .action("Action Button", () -> toast().add(
                                                                info("Warning action button clicked."))))
                                                .add(warning("Warning alert title")).element()).element()),
                        new Snippet("Danger alert", Resources.get().alertDanger().getText(),
                                () -> div().add(AlertGroup.embedded()
                                        .add(danger("Danger alert title")
                                                .add(description()
                                                        .add("Danger alert description. ")
                                                        .add(a("#").textContent("This is a link")))
                                                .closable())
                                        .add(danger("Danger alert title")
                                                .closable())
                                        .add(danger("Danger alert title")
                                                .action("Action Button", () -> toast().add(
                                                        info("Danger action button clicked."))))
                                        .add(danger("Danger alert title")).element()).element()),
                        new Snippet("Inline alert types", Resources.get().alertInline().getText(),
                                () -> div()
                                        .add(AlertGroup.embedded()
                                                .add(default_("Default inline alert title").inline())
                                                .add(info("Info inline alert title").inline())
                                                .add(success("Success inline alert title").inline())
                                                .add(warning("Warning inline alert title").inline())
                                                .add(danger("Danger inline alert title").inline()).element())
                                        .element()),
                        new Snippet("Inline alert variations", Resources.get().alertInlineVariations().getText(),
                                () -> div()
                                        .add(AlertGroup.embedded()
                                                .add(success("Success alert title").inline()
                                                        .add(description()
                                                                .add("Success alert description. ")
                                                                .add(a("#").textContent("This is a link")))
                                                        .closable())
                                                .add(success("Success alert title").inline()
                                                        .closable())
                                                .add(success("Success alert title").inline()
                                                        .action("Action Button", () -> toast().add(
                                                                info("Success action button clicked."))))
                                                .add(success("Success alert title").inline()).element()).element())));
    }
}

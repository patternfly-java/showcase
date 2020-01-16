package org.patternfly.showcase.client.documentation.demos.server;

import java.util.Iterator;

import elemental2.dom.HTMLElement;
import org.patternfly.components.DataTable;
import org.patternfly.components.Page;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.showcase.client.Resources;

import static elemental2.core.Global.JSON;
import static java.util.Comparator.comparing;
import static jsinterop.base.Js.cast;
import static org.elemento.Elements.bag;
import static org.elemento.Elements.p;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.DataTable.checkboxColumn;
import static org.patternfly.components.DataTable.column;
import static org.patternfly.components.DataTable.dataTable;
import static org.patternfly.components.Title.title;
import static org.patternfly.resources.CSS.Size._4xl;

public class ServerDemo implements Iterable<HTMLElement> {

    private Iterable<HTMLElement> elements;

    public ServerDemo() {
        DataProvider<Server> dataProvider = new DataProvider<>(server -> server.name);
        DataTable<Server> dataTable = dataTable(dataProvider)
                .add(checkboxColumn())
                .add(column("Name", comparing(server -> server.name),
                        (td, dp, server) -> td.textContent(server.name)))
                .add(column("Threads", comparing(server -> server.threads),
                        (td, dp, server) -> td.textContent(String.valueOf(server.threads))))
                .add(column("Applications", comparing(server -> server.applications),
                        (td, dp, server) -> td.textContent(String.valueOf(server.applications))))
                .add(column("Workspaces", comparing(server -> server.workspaces),
                        (td, dp, server) -> td.textContent(String.valueOf(server.workspaces))))
                .add(column("Status", comparing(Server::status),
                        (td, dp, server) -> td.textContent(server.status().name().toLowerCase())))
                .add(column("Location", comparing(server -> server.location),
                        (td, dp, server) -> td.textContent(server.location)));

        Server[] servers = cast(JSON.parse(Resources.get().servers().getText()));
        dataProvider.addDisplay(dataTable);
        dataProvider.update(servers);

        elements = bag()
                .add(Page.section()
                        .add(content()
                                .add(title(1, "Servers", _4xl))
                                .add(p().add("Filter servers based on user input."))))
                .add(Page.section()
                        // .add(toolbar)
                        .add(dataTable))
                .elements();
    }

    @Override
    public Iterator<HTMLElement> iterator() {
        return elements.iterator();
    }
}

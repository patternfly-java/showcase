package org.patternfly.showcase.client.documentation.components;

import java.util.Date;

import com.google.gwt.i18n.client.DateTimeFormat;
import elemental2.dom.HTMLElement;
import org.patternfly.client.components.DataTable;
import org.patternfly.client.components.Dropdown;
import org.patternfly.client.dataprovider.DataProvider;
import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;
import org.patternfly.showcase.client.resources.LoremIpsum;

import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static java.util.Arrays.asList;
import static java.util.Comparator.comparing;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.client.components.Components.dataTable;
import static org.patternfly.client.components.DataTable.actionsColumn;
import static org.patternfly.client.components.DataTable.checkboxColumn;
import static org.patternfly.client.components.DataTable.column;
import static org.patternfly.client.components.DataTable.expandColumn;

public class DataTableComponent extends BaseComponent {

    private static final DateTimeFormat DATE_FORMAT = DateTimeFormat.getFormat(ISO_8601);

    // Pull data table definitions to top level to have less code indent
    private static DataProvider<Repository> dataProvider() {
        return new DataProvider<>(repo -> buildId(repo.name));
    }

    private static DataTable<Repository> simple() {
        DataProvider<Repository> dataProvider = dataProvider();
        DataTable<Repository> dataTable = dataTable(dataProvider, "This is the table caption")
                .add(column("Repository", (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
                .add(column("Branches", (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
                .add(column("Pull Requests", (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
                .add(column("Contributors", (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
                .add(column("Last Commit", (td, dp, repo) -> td.add(htmlElement("relative-time", HTMLElement.class)
                        .attr("datetime", DATE_FORMAT.format(repo.lastCommit)))));
        dataProvider.addDisplay(dataTable);
        dataProvider.update(repositories());
        return dataTable;
    }

    private static DataTable<Repository> sortable() {
        DataProvider<Repository> dataProvider = dataProvider();
        DataTable<Repository> dataTable = dataTable(dataProvider)
                .add(column("Repository", comparing(repo -> repo.name),
                        (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
                .add(column("Branches", comparing(repo -> repo.branches),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
                .add(column("Pull Requests", comparing(repo -> repo.pullRequests),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
                .add(column("Contributors", comparing(repo -> repo.contributors),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
                .add(column("Last Commit", comparing(repo -> repo.lastCommit),
                        (td, dp, repo) -> td.add(htmlElement("relative-time", HTMLElement.class)
                                .attr("datetime", DATE_FORMAT.format(repo.lastCommit)))));
        dataProvider.addDisplay(dataTable);
        dataProvider.update(repositories());
        return dataTable;
    }

    private static DataTable<Repository> checkbox() {
        DataProvider<Repository> dataProvider = dataProvider();
        DataTable<Repository> dataTable = dataTable(dataProvider)
                .add(checkboxColumn())
                .add(column("Repository", (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
                .add(column("Branches", (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
                .add(column("Pull Requests", (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
                .add(column("Contributors", (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
                .add(column("Last Commit", (td, dp, repo) -> td.add(htmlElement("relative-time", HTMLElement.class)
                        .attr("datetime", DATE_FORMAT.format(repo.lastCommit)))))
                .add(actionsColumn((td, dp, repo) -> {
                    if (!repo.name.contains("p")) {
                        td.add(Dropdown.<String>kebab().right()
                                .add("First action")
                                .add("Second action")
                                .addSeparator()
                                .add("Third action"));
                    }
                }));
        dataProvider.addDisplay(dataTable);
        dataProvider.update(repositories());
        return dataTable;
    }

    private static DataTable<Repository> expandable() {
        DataProvider<Repository> dataProvider = dataProvider();
        DataTable<Repository> dataTable = dataTable(dataProvider)
                .add(expandColumn())
                .add(checkboxColumn())
                .add(column("Repository", comparing(repo -> repo.name),
                        (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
                .add(column("Branches", comparing(repo -> repo.branches),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
                .add(column("Pull Requests", comparing(repo -> repo.pullRequests),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
                .add(column("Contributors", comparing(repo -> repo.contributors),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
                .add(column("Last Commit", comparing(repo -> repo.lastCommit),
                        (td, dp, repo) -> td.add(htmlElement("relative-time", HTMLElement.class)
                                .attr("datetime", DATE_FORMAT.format(repo.lastCommit)))))
                .add(actionsColumn((td, dp, repo) -> {
                    if (!repo.name.contains("p")) {
                        td.add(Dropdown.<String>kebab().right()
                                .add("First action")
                                .add("Second action")
                                .addSeparator()
                                .add("Third action"));
                    }
                }))
                .expandableRow(repo -> repo.pullRequests > 0, (html, dp, repo) -> html.textContent(repo.lorem));
        dataProvider.addDisplay(dataTable);
        dataProvider.update(repositories());
        return dataTable;
    }

    private static Repository[] repositories() {
        return new Repository[]{
                new Repository("wildfly/wildfly", "https://github.com/wildfly/wildfly",
                        12, 52, 318, DATE_FORMAT.parse("2019-11-03T10:05:45.000")),
                new Repository("quarkusio/quarkus", "https://github.com/quarkusio/quarkus",
                        17, 71, 174, DATE_FORMAT.parse("2019-11-03T11:25:50.000")),
                new Repository("patternfly/patternfly-next", "https://github.com/patternfly/patternfly-next",
                        18, 16, 41, DATE_FORMAT.parse("2019-11-02T20:08:17.000")),
                new Repository("hal/console", "https://github.com/hal/console",
                        12, 9, 11, DATE_FORMAT.parse("2019-09-30T10:07:56.000")),
                new Repository("hal/elemento", "https://github.com/hal/elemento",
                        6, 0, 9, DATE_FORMAT.parse("2019-10-24T21:56:20.000")),
                new Repository("hpehl/patternfly-java", "https://github.com/hpehl/patternfly-java",
                        2, 0, 2, DATE_FORMAT.parse("2019-11-02T11:43:09.000")),
        };
    }

    static class Repository {

        final String name;
        final String link;
        final String lorem;
        final int branches;
        final int pullRequests;
        final int contributors;
        final Date lastCommit;

        Repository(String name, String link, int branches, int pullRequests, int contributors, Date lastCommit) {
            this.name = name;
            this.link = link;
            this.lorem = LoremIpsum.paragraphs(3);
            this.branches = branches;
            this.pullRequests = pullRequests;
            this.contributors = contributors;
            this.lastCommit = lastCommit;
        }
    }

    public DataTableComponent() {
        super("Data table", p().textContent("A table is used to display large data sets that can be easily " +
                        "laid out in a simple grid with column headers.").element(),
                asList(
                        new Snippet("Simple table", Code.get().dataTableSimple().getText(),
                                () -> div().add(simple()).element()),
                        new Snippet("Sortable table", Code.get().dataTableSortable().getText(),
                                () -> div().add(sortable()).element()),
                        new Snippet("Table with checkboxes and actions", Code.get().dataTableCheckbox().getText(),
                                () -> div().add(checkbox()).element()),
                        new Snippet("Expandable table", Code.get().dataTableExpandable().getText(),
                                () -> div().add(expandable()).element())));
    }
}

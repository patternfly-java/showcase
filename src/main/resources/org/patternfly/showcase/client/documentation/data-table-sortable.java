import elemental2.dom.HTMLElement;

import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static elemental2.dom.DomGlobal.document;
import static java.util.Comparator.comparing;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.components.DataTable.column;
import static org.patternfly.components.DataTable.dataTable;

class Repository {

    String name;
    int branches;
    int pullRequests;
    int contributors;
    Date lastCommit;
}

DataProvider<Repository> dataProvider = new DataProvider<>(repo -> repo.name);
DataTable<DataTableComponent.Repository> dataTable = dataTable(dataProvider)
        .add(column("Repository", comparing(repo -> repo.name),
                (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
        .add(column("Branches", comparing(repo -> repo.branches),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
        .add(column("Pull Requests", comparing(repo -> repo.pullRequests),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
        .add(column("Contributors", comparing(repo -> repo.contributors),
                (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
        .add(column("Last Commit", comparing(repo -> repo.lastCommit),
                (td, dp, repo) -> {
                    // https://github.com/github/time-elements
                    td.add(htmlElement("relative-time", HTMLElement.class)
                            .attr("datetime", DATE_FORMAT.format(repo.lastCommit)));
                }));
dataProvider.addDisplay(dataTable);
dataProvider.update(repositories()); // sampe data omitted
import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static elemental2.dom.DomGlobal.document;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.client.components.Components.dataTable;
import static org.patternfly.client.components.DataTable.actionsColumn;
import static org.patternfly.client.components.DataTable.checkboxColumn;
import static org.patternfly.client.components.DataTable.column;

class Repository {

    String name;
    int branches;
    int pullRequests;
    int contributors;
    Date lastCommit;
}

DataProvider<Repository> dataProvider = new DataProvider<>(repo -> repo.name);
DataTable<DataTableComponent.Repository> dataTable = dataTable(dataProvider)
        .add(checkboxColumn())
        .add(column("Repository", (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
        .add(column("Branches", (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
        .add(column("Pull Requests", (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
        .add(column("Contributors", (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
        .add(column("Last Commit", (td, dp, repo) -> {
            // https://github.com/github/time-elements
            td.add(htmlElement("relative-time", HTMLElement.class)
                    .attr("datetime", DATE_FORMAT.format(repo.lastCommit)));
        }))
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
dataProvider.update(repositories()); // sampe data omitted
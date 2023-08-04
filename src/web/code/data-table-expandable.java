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
import static com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat.ISO_8601;
import static elemental2.dom.DomGlobal.document;
import static java.util.Comparator.comparing;
import static org.elemento.Elements.*;
import static org.patternfly.components.DataTable.actionsColumn;
import static org.patternfly.components.DataTable.checkboxColumn;
import static org.patternfly.components.DataTable.column;
import static org.patternfly.components.DataTable.dataTable;
import static org.patternfly.components.DataTable.expandColumn;

class Repository {

    String name;
    int branches;
    int pullRequests;
    int contributors;
    Date lastCommit;
}

DataProvider<Repository> dataProvider = new DataProvider<>(repo -> repo.name);
DataTable<DataTableComponent.Repository> dataTable = dataTable(dataProvider)
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
                (td, dp, repo) -> {
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
        }))
        .expandableRow(repo -> repo.pullRequests > 0, (html, dp, repo) -> html.textContent(repo.lorem));
dataProvider.bindDisplay(dataTable);
dataProvider.update(repositories()); // sampe data omitted
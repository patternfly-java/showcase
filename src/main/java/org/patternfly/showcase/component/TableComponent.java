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

import java.util.Random;

import org.jboss.elemento.Id;
import org.patternfly.component.DataTable;
import org.patternfly.component.Dropdown;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.showcase.LoremIpsum;

import elemental2.core.JsDate;
import elemental2.dom.HTMLElement;

import static java.util.Comparator.comparing;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.htmlElement;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.DataTable.actionsColumn;
import static org.patternfly.component.DataTable.checkboxColumn;
import static org.patternfly.component.DataTable.column;
import static org.patternfly.component.DataTable.dataTable;
import static org.patternfly.component.DataTable.expandColumn;

@Deprecated
public class TableComponent extends ComponentPage {

    // Pull data table definitions to top-level to have less code indent
    private static DataProvider<Repository> dataProvider() {
        return new DataProvider<>(repo -> Id.build(repo.name));
    }

    private static DataTable<Repository> simple() {
        DataProvider<Repository> dataProvider = dataProvider();
        DataTable<Repository> dataTable = dataTable(dataProvider, "This is the table caption")
                .add(column("Repository", (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
                .add(column("Branches", (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
                .add(column("Pull Requests", (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
                .add(column("Contributors", (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
                .add(column("Last Commit", (td, dp, repo) -> td
                        .add(htmlElement("relative-time", HTMLElement.class).attr("datetime",
                                repo.lastCommit.toISOString()))));
        dataProvider.bindDisplay(dataTable);
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
                .add(column("Last Commit", (td, dp, repo) -> td.add(htmlElement("relative-time", HTMLElement.class)
                        .attr("datetime", repo.lastCommit.toLocaleDateString()))));
        dataProvider.bindDisplay(dataTable);
        dataProvider.update(repositories());
        return dataTable;
    }

    private static DataTable<Repository> checkbox() {
        DataProvider<Repository> dataProvider = dataProvider();
        DataTable<Repository> dataTable = dataTable(dataProvider).add(checkboxColumn())
                .add(column("Repository", (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
                .add(column("Branches", (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
                .add(column("Pull Requests", (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
                .add(column("Contributors",
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
                .add(column("Last Commit", (td, dp, repo) -> td.add(htmlElement("relative-time", HTMLElement.class)
                        .attr("datetime", repo.lastCommit.toLocaleDateString()))))
                .add(actionsColumn((td, dp, repo) -> {
                    if (!repo.name.contains("p")) {
                        td.add(Dropdown.<String> kebab().right().add("First action").add("Second action").addSeparator()
                                .add("Third action"));
                    }
                }));
        dataProvider.bindDisplay(dataTable);
        dataProvider.update(repositories());
        return dataTable;
    }

    private static DataTable<Repository> expandable() {
        DataProvider<Repository> dataProvider = dataProvider();
        DataTable<Repository> dataTable = dataTable(dataProvider).add(expandColumn()).add(checkboxColumn())
                .add(column("Repository", comparing(repo -> repo.name),
                        (td, dp, repo) -> td.add(span().id(dp.getId(repo)).textContent(repo.name))))
                .add(column("Branches", comparing(repo -> repo.branches),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.branches))))
                .add(column("Pull Requests", comparing(repo -> repo.pullRequests),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.pullRequests))))
                .add(column("Contributors", comparing(repo -> repo.contributors),
                        (td, dp, repo) -> td.textContent(String.valueOf(repo.contributors))))
                .add(column("Last Commit", (td, dp, repo) -> td.add(htmlElement("relative-time", HTMLElement.class)
                        .attr("datetime", repo.lastCommit.toLocaleDateString()))))
                .add(actionsColumn((td, dp, repo) -> {
                    if (!repo.name.contains("p")) {
                        td.add(Dropdown.<String> kebab().right().add("First action").add("Second action").addSeparator()
                                .add("Third action"));
                    }
                })).expandableRow(repo -> repo.pullRequests > 0, (html, dp, repo) -> html.textContent(repo.lorem));
        dataProvider.bindDisplay(dataTable);
        dataProvider.update(repositories());
        return dataTable;
    }

    private static Repository[] repositories() {
        return new Repository[] { new Repository("wildfly/wildfly", "https://github.com/wildfly/wildfly", 12, 52, 318),
                new Repository("quarkusio/quarkus", "https://github.com/quarkusio/quarkus", 17, 71, 174),
                new Repository("patternfly/patternfly-next", "https://github.com/patternfly/patternfly-next", 18, 16,
                        41),
                new Repository("hal/console", "https://github.com/hal/console", 12, 9, 11),
                new Repository("hal/elemento", "https://github.com/hal/elemento", 6, 0, 9),
                new Repository("hpehl/patternfly-java", "https://github.com/hpehl/patternfly-java", 2, 0, 2), };
    }

    static class Repository {

        private static final int ONE_WEEK_IN_MILLIS = 604800000;

        final String name;
        final String link;
        final String lorem;
        final int branches;
        final int pullRequests;
        final int contributors;
        final JsDate lastCommit;

        Repository(String name, String link, int branches, int pullRequests, int contributors) {
            this.name = name;
            this.link = link;
            this.lorem = LoremIpsum.paragraphs(3);
            this.branches = branches;
            this.pullRequests = pullRequests;
            this.contributors = contributors;
            this.lastCommit = randomDate();
        }

        private JsDate randomDate() {
            int diff = 0;
            long now = System.currentTimeMillis();
            Random random = new Random();

            for (int i = 0; i < 123; i++) {
                diff = random.nextInt(ONE_WEEK_IN_MILLIS);
            }
            JsDate date = new JsDate();
            date.setTime(now - diff);
            return date;
        }
    }

    public TableComponent() {
        super("Data table",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/",
                p().textContent("A table is used to display large data sets that can be easily "
                        + "laid out in a simple grid with column headers.").element());

        addSnippet(new Snippet("simple", "Simple table", "Resources.get().dataTableSimple().getText()",
                () -> div().add(simple()).element()));

        addSnippet(new Snippet("sortable", "Sortable table", "Resources.get().dataTableSortable().getText()",
                () -> div().add(sortable()).element()));

        addSnippet(new Snippet("actions", "Table with checkboxes and actions",
                "Resources.get().dataTableCheckbox().getText()",
                () -> div().add(checkbox()).element()));

        addSnippet(new Snippet("expandable", "Expandable table", "Resources.get().dataTableExpandable().getText()",
                () -> div().add(expandable()).element()));
    }
}

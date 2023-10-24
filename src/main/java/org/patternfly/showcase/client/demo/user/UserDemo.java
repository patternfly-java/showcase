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
package org.patternfly.showcase.client.demo.user;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.Card;
import org.patternfly.component.CardView;
import org.patternfly.component.DataList;
import org.patternfly.component.DataTable;
import org.patternfly.component.Dropdown;
import org.patternfly.component.OldToolbar;
import org.patternfly.component.OldToolbar.SortOption;
import org.patternfly.component.OldToolbar.SortOptions;
import org.patternfly.component.Pagination;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.showcase.client.Data;
import org.patternfly.showcase.client.Page;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static java.util.Arrays.asList;
import static java.util.Comparator.comparing;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.code;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.htmlElement;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.layout.Classes.flex;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.util;
import static org.patternfly.layout.PredefinedIcon.fas;
import static org.patternfly.layout.Size._4xl;

public class UserDemo implements Page {

    private static final String SOURCE_CODE = "https://github.com/patternfly-java/showcase/blob/master/src/main/java/org/patternfly/showcase/client/documentation/demos/user/UserDemo.java";

    private CardView<User> cardView;
    private DataList<User> dataList;
    private DataTable<User> dataTable;
    private HTMLElement dataElement;
    private final Iterable<HTMLElement> elements;
    private final HTMLElement dataContainer;

    public UserDemo() {
        DataProvider<User> dataProvider = new DataProvider<>(user -> user.login.uuid);

        OldToolbar<User> toolbar = OldToolbar.toolbar(dataProvider)
                .add(OldToolbar.content().add(OldToolbar.item().add(OldToolbar.bulkSelect()))
                        .add(OldToolbar.group().toggle("show-on-xl")
                                .add(OldToolbar.item()
                                        .<User> add("byName", "Search by name", query -> user -> user.match(query))))
                        .add(OldToolbar.item()
                                .add(OldToolbar.sortMenu(new SortOptions<User>()
                                        .add(new SortOption<>("Last name", comparing(user -> user.name.last)))
                                        .add(new SortOption<>("First name", comparing(user -> user.name.first)))
                                        .add(new SortOption<>("User name", comparing(user -> user.login.username)))
                                        .add(new SortOption<>("Age", comparing(user -> user.dob.age)))
                                        .add(new SortOption<>("Nationality", comparing(user -> user.nat))))))
                        .add(OldToolbar.group().iconButton()
                                .add(OldToolbar.item()
                                        .add(button(inlineIcon(fas("address-card")), "Card view")
                                                .onClick((e, b) -> show(cardView.element()))))
                                .add(OldToolbar.item()
                                        .add(button(inlineIcon(fas("list")), "Card view")
                                                .onClick((e, b) -> show(dataList.element()))))
                                .add(OldToolbar.item()
                                        .add(button(inlineIcon(fas("table")), "Card view")
                                                .onClick((e, b) -> show(dataTable.element())))))
                        .add(OldToolbar.item().add(Pagination.pagination().compact())));

        cardView = CardView.cardView(dataProvider, new UserCardDisplay())
                .style("background-color: var(--pf-c-page__main-section--BackgroundColor)").css(util("py-lg")).compact()
                .hoverable();
        dataList = DataList.dataList(dataProvider, new UserListDisplay());
        dataTable = DataTable.dataTable(dataProvider).add(DataTable.expandColumn()).add(DataTable.checkboxColumn())
                .noSelectAll()
                .add(DataTable.column("First name", comparing(user -> user.name.first),
                        (td, dp, user) -> td.textContent(user.name.first)))
                .add(DataTable.column("Last name", comparing(user -> user.name.last),
                        (td, dp, user) -> td.add(span().id(dp.getId(user)).textContent(user.name.last))))
                .add(DataTable.column("Birthday", User.BIRTHDAY_COMPARATOR,
                        (td, dp, user) -> td.textContent(user.getBirthday().toLocaleDateString())))
                .add(DataTable.column("Registered", User.REGISTERED_COMPARATOR,
                        (td, dp, user) -> td
                                .add(htmlElement("relative-time", HTMLElement.class).attr("datetime",
                                        user.registered.date))))
                .add(DataTable
                        .actionsColumn(
                                (td, dp, user) -> td.add(Dropdown.<String> kebab().right().add("Edit").add("Remove"))))
                .expandableRow((html, dp, user) -> html
                        .add(div().css(layout(flex), modifier("align-items-center"), modifier("space-items-2xl"))
                                .add(user.photo()).add(user.address()).add(user.contact())));

        dataProvider.bindDisplay(toolbar);
        dataProvider.bindDisplay(cardView);
        dataProvider.bindDisplay(dataList);
        dataProvider.bindDisplay(dataTable);
        dataProvider.update(Data.users); // 123 random users

        elements = asList(
                pageMainSection()
                        .add(textContent()
                                .add(title(1, "Users", _4xl))
                                .add(p().add("A list of 123 random users provided by ")
                                        .add(a("https://randomuser.me").attr("target", "_blank")
                                                .textContent("https://randomuser.me"))
                                        .add(". Flags generated with ")
                                        .add(a("https://www.countryflags.io").attr("target", "_blank")
                                                .textContent("https://www.countryflags.io"))
                                        .add(". See ").add(a(SOURCE_CODE, "_blank").textContent("UserDemo.java"))
                                        .add(" for the code.")))
                        .element(),
                pageMainSection()
                        .add(toolbar)
                        .add(dataContainer = div().element())
                        .element());

        show(cardView.element());
    }

    @Override
    public Iterable<HTMLElement> elements() {
        return elements;
    }

    private void show(HTMLElement element) {
        if (dataElement != element) {
            removeChildrenFrom(dataContainer);
            dataContainer.appendChild(element);
            dataElement = element;
        }
    }

    static class UserCardDisplay implements CardView.Display<User> {

        @Override
        public void render(Card card, DataProvider<User> dataProvider, User user) {
            card.add(Card.head().add(user.nat())
                    .add(span().id(dataProvider.getId(user)).css(util("ml-sm")).textContent(user.fullName()))
                    .add(Card.Head.actions().add(Dropdown.<String> kebab().right().add("Edit").add("Remove"))
                            .add(input(checkbox))))
                    .add(Card.body().css(layout(flex), modifier("inline-flex"), modifier("align-items-center"))
                            .add(user.photo()).add(user.address()))
                    .add(Card.footer().add(i().css(fas("user-alt"), util("mr-sm"))).add(user.login.username));
        }
    }

    static class UserListDisplay implements DataList.Display<User> {

        @Override
        public void render(HTMLContainerBuilder<HTMLLIElement> li, DataProvider<User> dataProvider, User user) {
            li.add(DataList.itemRow().add(DataList.itemControl().expandable().checkbox())
                    .add(DataList.itemContent().add(DataList.itemCell().css(modifier(icon)).add(user.nat()))
                            .add(DataList.itemCell().add(p().id(dataProvider.getId(user)).textContent(user.fullName())))
                            .add(DataList.itemCell().css(modifier("flex-4"))
                                    .add(p().add(i().css(fas("user-alt"), util("mr-sm"))).add(user.login.username))
                                    .add(p().add(small().add("MD5: ").add(code().textContent(user.login.md5))))
                                    .add(p().add(small().add("SHA-1: ").add(code().textContent(user.login.sha1))))))
                    .add(DataList.itemAction().add(button("Edit").secondary())
                            .add(button("Remove").secondary())));
            li.add(DataList.expandableContent()
                    .add(DataList.expandableBody()
                            .add(div().css(layout(flex), modifier("align-items-center"), modifier("space-items-2xl"))
                                    .add(user.photo()).add(user.address()).add(user.contact()))));
        }
    }
}

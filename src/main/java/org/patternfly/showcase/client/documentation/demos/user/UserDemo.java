package org.patternfly.showcase.client.documentation.demos.user;

import java.util.Iterator;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import org.jboss.elemento.HtmlContentBuilder;
import org.gwtproject.i18n.client.DateTimeFormat;
import org.patternfly.components.Button;
import org.patternfly.components.Card;
import org.patternfly.components.CardView;
import org.patternfly.components.Content;
import org.patternfly.components.DataList;
import org.patternfly.components.DataTable;
import org.patternfly.components.Dropdown;
import org.patternfly.components.Icon;
import org.patternfly.components.Page;
import org.patternfly.components.Pagination;
import org.patternfly.components.Title;
import org.patternfly.components.Toolbar;
import org.patternfly.components.Toolbar.SortOption;
import org.patternfly.components.Toolbar.SortOptions;
import org.patternfly.dataprovider.DataProvider;

import static java.util.Comparator.comparing;
import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.InputType.checkbox;
import static org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat.DATE_SHORT;
import static org.patternfly.resources.CSS.Size._4xl;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.layout;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.CSS.util;
import static org.patternfly.resources.Constants.flex;
import static org.patternfly.resources.Constants.icon;

public class UserDemo implements Iterable<HTMLElement> {

    private static final String SOURCE_CODE = "https://github.com/patternfly-java/showcase/blob/master/src/main/java/org/patternfly/showcase/client/documentation/demos/user/UserDemo.java";

    private CardView<User> cardView;
    private DataList<User> dataList;
    private DataTable<User> dataTable;
    private Iterable<HTMLElement> elements;
    private HTMLElement dataContainer;
    private HTMLElement dataElement;

    public UserDemo() {
        DataProvider<User> dataProvider = new DataProvider<>(user -> user.login.uuid);

        Toolbar<User> toolbar = Toolbar.toolbar(dataProvider)
                .add(Toolbar.content()
                        .add(Toolbar.item()
                                .add(Toolbar.bulkSelect()))
                        .add(Toolbar.group().toggle("show-on-xl")
                                .add(Toolbar.item().<User>add("byName", "Search by name",
                                        query -> user -> user.match(query))))
                        .add(Toolbar.item()
                                .add(Toolbar.sortMenu(new SortOptions<User>()
                                        .add(new SortOption<>("Last name", comparing(user -> user.name.last)))
                                        .add(new SortOption<>("First name", comparing(user -> user.name.first)))
                                        .add(new SortOption<>("User name",
                                                comparing(user -> user.login.username)))
                                        .add(new SortOption<>("Age", comparing(user -> user.dob.age)))
                                        .add(new SortOption<>("Nationality", comparing(user -> user.nat))))))
                        .add(Toolbar.group().iconButton()
                                .add(Toolbar.item().add(Button.icon(Icon.icon(fas("address-card")), "Card view")
                                        .onClick(() -> show(cardView.element()))))
                                .add(Toolbar.item().add(Button.icon(Icon.icon(fas("list")), "Card view")
                                        .onClick(() -> show(dataList.element()))))
                                .add(Toolbar.item().add(Button.icon(Icon.icon(fas("table")), "Card view")
                                        .onClick(() -> show(dataTable.element())))))
                        .add(Toolbar.item()
                                .add(Pagination.pagination().compact())));

        cardView = CardView.cardView(dataProvider, new UserCardDisplay())
                .style("background-color: var(--pf-c-page__main-section--BackgroundColor)")
                .css(util("py-lg"))
                .compact()
                .hoverable();
        dataList = DataList.dataList(dataProvider, new UserListDisplay());
        dataTable = DataTable.dataTable(dataProvider)
                .add(DataTable.expandColumn())
                .add(DataTable.checkboxColumn()).noSelectAll()
                .add(DataTable.column("First name", comparing(user -> user.name.first),
                        (td, dp, user) -> td.textContent(user.name.first)))
                .add(DataTable.column("Last name", comparing(user -> user.name.last),
                        (td, dp, user) -> td.add(span().id(dp.getId(user)).textContent(user.name.last))))
                .add(DataTable.column("Birthday", comparing(User::getBirthday),
                        (td, dp, user) -> td.textContent(DateTimeFormat.getFormat(DATE_SHORT)
                                .format(user.getBirthday()))))
                .add(DataTable.column("Registered", comparing(User::getRegistered),
                        (td, dp, user) -> td.add(htmlElement("relative-time", HTMLElement.class)
                                .attr("datetime", user.registered.date))))
                .add(DataTable.actionsColumn((td, dp, user) -> td.add(Dropdown.<String>kebab().right()
                        .add("Edit")
                        .add("Remove"))))
                .expandableRow((html, dp, user) -> html.add(
                        div().css(layout(flex), modifier("align-items-center"), modifier("space-items-2xl"))
                                .add(user.photo())
                                .add(user.address())
                                .add(user.contact())));

        dataProvider.bindDisplay(toolbar);
        dataProvider.bindDisplay(cardView);
        dataProvider.bindDisplay(dataList);
        dataProvider.bindDisplay(dataTable);
        dataProvider.update(Users.get()); // 123 random users

        elements = bag()
                .add(Page.section()
                        .add(Content.content()
                                .add(Title.title(1, "Users", _4xl))
                                .add(p().add("A list of 123 random users provided by ")
                                        .add(a("https://randomuser.me")
                                                .attr("target", "_blank")
                                                .textContent("https://randomuser.me"))
                                        .add(". Flags generated with ")
                                        .add(a("https://www.countryflags.io")
                                                .attr("target", "_blank")
                                                .textContent("https://www.countryflags.io"))
                                        .add(". See ")
                                        .add(a(SOURCE_CODE, "_blank").textContent("UserDemo.java"))
                                        .add(" for the code.")
                                )))
                .add(Page.section()
                        .add(toolbar)
                        .add(dataContainer = div().element()))
                .elements();

        show(cardView.element());
    }

    @Override
    public Iterator<HTMLElement> iterator() {
        return elements.iterator();
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
            card
                    .add(Card.head()
                            .add(user.nat())
                            .add(span().id(dataProvider.getId(user)).css(util("ml-sm"))
                                    .textContent(user.fullName()))
                            .add(Card.Head.actions()
                                    .add(Dropdown.<String>kebab().right()
                                            .add("Edit")
                                            .add("Remove"))
                                    .add(input(checkbox))))
                    .add(Card.body().css(layout(flex), modifier("inline-flex"), modifier("align-items-center"))
                            .add(user.photo())
                            .add(user.address()))
                    .add(Card.footer()
                            .add(i().css(fas("user-alt"), util("mr-sm")))
                            .add(user.login.username));
        }
    }

    static class UserListDisplay implements DataList.Display<User> {

        @Override
        public void render(HtmlContentBuilder<HTMLLIElement> li, DataProvider<User> dataProvider, User user) {
            li.add(DataList.itemRow()
                    .add(DataList.itemControl()
                            .expandable()
                            .checkbox())
                    .add(DataList.itemContent()
                            .add(DataList.itemCell().css(modifier(icon))
                                    .add(user.nat()))
                            .add(DataList.itemCell()
                                    .add(p().id(dataProvider.getId(user)).textContent(user.fullName())))
                            .add(DataList.itemCell().css(modifier("flex-4"))
                                    .add(p()
                                            .add(i().css(fas("user-alt"), util("mr-sm")))
                                            .add(user.login.username))
                                    .add(p().add(small().add("MD5: ").add(code().textContent(user.login.md5))))
                                    .add(p().add(small().add("SHA-1: ").add(code().textContent(user.login.sha1))))))
                    .add(DataList.itemAction()
                            .add(Button.button("Edit").secondary())
                            .add(Button.button("Remove").secondary())));
            li.add(DataList.expandableContent()
                    .add(DataList.expandableBody()
                            .add(div().css(layout(flex), modifier("align-items-center"), modifier("space-items-2xl"))
                                    .add(user.photo())
                                    .add(user.address())
                                    .add(user.contact()))));
        }
    }
}

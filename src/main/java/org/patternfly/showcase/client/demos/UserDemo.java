package org.patternfly.showcase.client.demos;

import java.util.Iterator;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import org.elemento.HtmlContentBuilder;
import org.gwtproject.i18n.client.DateTimeFormat;
import org.patternfly.components.Button;
import org.patternfly.components.Card;
import org.patternfly.components.CardView;
import org.patternfly.components.DataList;
import org.patternfly.components.DataTable;
import org.patternfly.components.Dropdown;
import org.patternfly.components.Icon;
import org.patternfly.components.Page;
import org.patternfly.components.Toolbar;
import org.patternfly.components.Toolbar.SortOption;
import org.patternfly.components.Toolbar.SortOptions;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.showcase.client.model.User;
import org.patternfly.showcase.client.model.Users;

import static java.util.Comparator.comparing;
import static org.elemento.Elements.*;
import static org.elemento.InputType.checkbox;
import static org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat.DATE_SHORT;
import static org.patternfly.components.Card.Head.actions;
import static org.patternfly.components.Card.head;
import static org.patternfly.components.CardView.cardView;
import static org.patternfly.components.Content.content;
import static org.patternfly.components.DataList.*;
import static org.patternfly.components.DataTable.*;
import static org.patternfly.components.Pagination.pagination;
import static org.patternfly.components.Title.title;
import static org.patternfly.components.Toolbar.bulkSelect;
import static org.patternfly.components.Toolbar.group;
import static org.patternfly.components.Toolbar.sortMenu;
import static org.patternfly.components.Toolbar.toolbar;
import static org.patternfly.resources.CSS.Size._4xl;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.layout;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.CSS.util;
import static org.patternfly.resources.Constants.flex;
import static org.patternfly.resources.Constants.icon;

public class UserDemo implements Iterable<HTMLElement> {

    private CardView<User> cardView;
    private DataList<User> dataList;
    private DataTable<User> dataTable;
    private Iterable<HTMLElement> elements;
    private HTMLElement dataContainer;
    private HTMLElement dataElement;

    public UserDemo() {
        DataProvider<User> dataProvider = new DataProvider<>(user -> user.login.uuid);

        Toolbar<User> toolbar = toolbar(dataProvider)
                .add(Toolbar.content()
                        .add(Toolbar.item()
                                .add(bulkSelect()))
                        .add(Toolbar.group().toggle("show-on-xl")
                                .add(Toolbar.item().<User>add("byName", "Search by name",
                                        query -> user -> user.match(query))))
                        .add(Toolbar.item()
                                .add(sortMenu(new SortOptions<User>()
                                        .add(new SortOption<>("Last name", comparing(user -> user.name.last)))
                                        .add(new SortOption<>("First name", comparing(user -> user.name.first)))
                                        .add(new SortOption<>("User name",
                                                comparing(user -> user.login.username)))
                                        .add(new SortOption<>("Age", comparing(user -> user.dob.age)))
                                        .add(new SortOption<>("Nationality", comparing(user -> user.nat))))))
                        .add(group().iconButton()
                                .add(Toolbar.item().add(Button.icon(Icon.icon(fas("address-card")), "Card view")
                                        .onClick(() -> show(cardView.element()))))
                                .add(Toolbar.item().add(Button.icon(Icon.icon(fas("list")), "Card view")
                                        .onClick(() -> show(dataList.element()))))
                                .add(Toolbar.item().add(Button.icon(Icon.icon(fas("table")), "Card view")
                                        .onClick(() -> show(dataTable.element())))))
                        .add(Toolbar.item()
                                .add(pagination().compact())));

        cardView = cardView(dataProvider, new UserCardDisplay())
                .style("background-color: var(--pf-c-page__main-section--BackgroundColor)")
                .css(util("py-lg"))
                .compact()
                .hoverable();
        dataList = dataList(dataProvider, new UserListDisplay());
        dataTable = dataTable(dataProvider)
                .add(expandColumn())
                .add(checkboxColumn()).noSelectAll()
                .add(column("First name", comparing(user -> user.name.first),
                        (td, dp, user) -> td.textContent(user.name.first)))
                .add(column("Last name", comparing(user -> user.name.last),
                        (td, dp, user) -> td.add(span().id(dp.getId(user)).textContent(user.name.last))))
                .add(column("Birthday", comparing(User::getBirthday),
                        (td, dp, user) -> td.textContent(DateTimeFormat.getFormat(DATE_SHORT)
                                .format(user.getBirthday()))))
                .add(column("Registered", comparing(User::getRegistered),
                        (td, dp, user) -> td.add(htmlElement("relative-time", HTMLElement.class)
                                .attr("datetime", user.registered.date))))
                .add(actionsColumn((td, dp, user) -> td.add(Dropdown.<String>kebab().right()
                        .add("Edit")
                        .add("Remove"))))
                .expandableRow((html, dp, user) -> html.add(
                        div().css(layout(flex), modifier("align-items-center"), modifier("space-items-2xl"))
                                .add(user.photo())
                                .add(user.address())
                                .add(user.contact())));

        dataProvider.addDisplay(toolbar);
        dataProvider.addDisplay(cardView);
        dataProvider.addDisplay(dataList);
        dataProvider.addDisplay(dataTable);
        dataProvider.update(Users.get()); // 123 random users

        elements = bag()
                .add(Page.section()
                        .add(content()
                                .add(title(1, "Users", _4xl))
                                .add(p().add("A list of 123 random users provided by ")
                                        .add(a("https://randomuser.me")
                                                .attr("target", "_blank")
                                                .textContent("https://randomuser.me"))
                                        .add(". Flags generated with ")
                                        .add(a("https://www.countryflags.io")
                                                .attr("target", "_blank")
                                                .textContent("https://www.countryflags.io"))
                                        .add(". See ")
                                        .add(a("https://github.com/patternfly-java/showcase/blob/master/src/main/java/org/patternfly/showcase/client/documentation/demos/UserDemo.java")
                                                .attr("target", "_blank").textContent("UserDemo.java"))
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
                    .add(head()
                            .add(user.nat())
                            .add(span().id(dataProvider.getId(user)).css(util("ml-sm"))
                                    .textContent(user.fullName()))
                            .add(actions()
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
            // the visible item row (html is the <li/> element)
            li.add(itemRow()
                    .add(itemControl()
                            .expandable()
                            .checkbox())
                    .add(itemContent()
                            .add(itemCell().css(modifier(icon))
                                    .add(user.nat()))
                            .add(itemCell()
                                    .add(p().id(dataProvider.getId(user)).textContent(user.fullName())))
                            .add(itemCell().css(modifier("flex-4"))
                                    .add(p()
                                            .add(i().css(fas("user-alt"), util("mr-sm")))
                                            .add(user.login.username))
                                    .add(p().add(small().add("MD5: ").add(code().textContent(user.login.md5))))
                                    .add(p().add(small().add("SHA-1: ").add(code().textContent(user.login.sha1))))))
                    .add(itemAction()
                            .add(Button.button("Edit").secondary())
                            .add(Button.button("Remove").secondary())));

            // the expandable content
            li.add(expandableContent()
                    .add(expandableBody()
                            .add(div().css(layout(flex), modifier("align-items-center"), modifier("space-items-2xl"))
                                    .add(user.photo())
                                    .add(user.address())
                                    .add(user.contact()))));
        }
    }
}

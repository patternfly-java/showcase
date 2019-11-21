import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.span;
import static org.patternfly.client.components.Components.dataList;
import static org.patternfly.client.components.DataList.itemCell;
import static org.patternfly.client.components.DataList.itemContent;
import static org.patternfly.client.components.DataList.itemRow;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.action;
import static org.patternfly.client.resources.Constants.alignRight;
import static org.patternfly.client.resources.Constants.hidden;

DisplayData[] items = {
        new DisplayData((html, provider, item) -> html.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("Tertiary content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("More content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("More content. " + LoremIpsum.paragraph())))
                .add(itemAction()
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action")))))),
        new DisplayData((html, provider, item) -> html.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                .add(itemAction().css(modifier("hidden-on-lg"))
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))
                .add(itemAction().css(modifier(hidden), modifier("visible-on-lg"))
                        .add(Button.button("Primary").primary())
                        .add(Button.button("Secondary").secondary())))),
        new DisplayData((html, provider, item) -> html.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                .add(itemAction().css(modifier("hidden-on-xl"))
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))
                .add(itemAction().css(modifier(hidden), modifier("visible-on-xl"))
                        .add(Button.button("Primary").primary())
                        .add(Button.button("Secondary").secondary())
                        .add(Button.button("Secondary").secondary())
                        .add(Button.button("Secondary").secondary()))))
};

DataProvider<DisplayData> dataProvider = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl = dataList(dataProvider, (html, provider, item) -> data.display.render(html, provider, item));
dataProvider.addDisplay(dl);
dataProvider.update(items);

// Just a fake item data w/ a display delegate. See demos for a real example
static class DisplayData {

    final DataList.Display<HTMLLIElement, DisplayData> display;

    DisplayData(DataList.Display<HTMLLIElement, DisplayData> display) {
        this.display = display;
    }

    String id() {
        return Elements.uniqueId();
    }
}
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
import static org.patternfly.client.resources.Constants.noPadding;

DisplayData[] items1 = {
        new DisplayData((html, provider, item) -> html.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell()
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().id(item.id()).textContent("default"))
                                        .add(p().textContent(LoremIpsum.paragraph()))))
                        .add(itemCell()
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().textContent("default"))
                                        .add(p().textContent(LoremIpsum.paragraphs(2))))))))
};

DataProvider<DisplayData> dataProvider1 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl1 = dataList(dataProvider1, (html, provider, item) -> data.display.render(html, provider, item));
dataProvider1.addDisplay(dl1);
dataProvider1.update(items1);

DisplayData[] items2 = {
        new DisplayData((html, provider, item) -> html.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().css(modifier("flex-2"))
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().id(item.id()).textContent("width 2"))
                                        .add(p().textContent(LoremIpsum.paragraph()))))
                        .add(itemCell().css(modifier("flex-4"))
                                .add(div().css("sc-data-list__blue-box")
                                        .add(b().textContent("width 4"))
                                        .add(p().textContent(LoremIpsum.paragraphs(2))))))
                .add(itemAction()
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))))
};

DataProvider<DisplayData> dataProvider2 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl2 = dataList(dataProvider2, (html, provider, item) -> data.display.render(html, provider, item));
dataProvider2.addDisplay(dl2);
dataProvider2.update(items2);

DisplayData[] items3 = {
        new DisplayData((html, provider, item) -> html
                .add(itemRow()
                        .add(itemControl()
                                .expandable()
                                .checkbox())
                        .add(itemContent()
                                .add(itemCell().css(modifier("flex-5"))
                                        .add(div().css("sc-data-list__blue-box")
                                                .add(b().id(item.id()).textContent("width 5"))
                                                .add(p().textContent(LoremIpsum.paragraphs(2)))))
                                .add(itemCell().css(modifier("flex-2"))
                                        .add(div().css("sc-data-list__blue-box")
                                                .add(b().textContent("width 2"))
                                                .add(p().textContent(LoremIpsum.paragraph()))))
                                .add(itemCell()
                                        .add(div().css("sc-data-list__blue-box")
                                                .add(b().textContent("default"))
                                                .add(p().textContent(LoremIpsum.words(2))))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().textContent(LoremIpsum.paragraph()))))
};

DataProvider<DisplayData> dataProvider3 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl3 = dataList(dataProvider3, (html, provider, item) -> data.display.render(html, provider, item));
dataProvider3.addDisplay(dl3);
dataProvider3.update(items3);

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
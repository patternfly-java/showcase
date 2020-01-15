import static org.elemento.Elements.div;
import static org.elemento.Elements.span;
import static org.patternfly.components.Components.dataList;
import static org.patternfly.components.DataList.itemCell;
import static org.patternfly.components.DataList.itemContent;
import static org.patternfly.components.DataList.itemRow;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.action;
import static org.patternfly.resources.Constants.alignRight;
import static org.patternfly.resources.Constants.hidden;
import static org.patternfly.resources.Constants.noPadding;

DisplayData[] items0 = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
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

DataProvider<DisplayData> dp0 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl0 = dataList(dp0, (li, provider, item) -> item.display.render(li, provider, item));
dp0.addDisplay(dl0);
dp0.update(items0);

DisplayData[] items1 = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
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

DataProvider<DisplayData> dp1 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl1 = dataList(dp1, (li, provider, item) -> item.display.render(li, provider, item));
dp1.addDisplay(dl1);
dp1.update(items1);

DisplayData[] items2 = {
        new DisplayData((li, provider, item) -> li
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

DataProvider<DisplayData> dp2 = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl2 = dataList(dp2, (li, provider, item) -> item.display.render(li, provider, item));
dp2.addDisplay(dl2);
dp2.update(items2);

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
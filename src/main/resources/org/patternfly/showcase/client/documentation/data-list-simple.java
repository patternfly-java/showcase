import static org.jboss.gwt.elemento.core.Elements.span;
import static org.patternfly.client.components.Components.dataList;
import static org.patternfly.client.components.DataList.itemCell;
import static org.patternfly.client.components.DataList.itemContent;
import static org.patternfly.client.components.DataList.itemRow;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.alignRight;
import static org.patternfly.client.resources.Constants.noFill;

DisplayData[] items = {
        new DisplayData((html, provider, item) -> html.add(itemRow()
                .add(itemContent()
                        .add(itemCell()
                                .add(span().id(item.id()).textContent("Primary Content")))
                        .add(itemCell()
                                .textContent("Secondary Content"))))),

        new DisplayData((html, provider, item) -> html.add(itemRow()
                .add(itemContent()
                        .add(itemCell().css(modifier(noFill))
                                .add(span().id(item.id()).textContent("Primary content (pf-m-no-fill)")))
                        .add(itemCell().css(modifier(noFill), modifier(alignRight))
                                .textContent("Secondary content (pf-m-align-right pf-m-no-fill)")))))
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